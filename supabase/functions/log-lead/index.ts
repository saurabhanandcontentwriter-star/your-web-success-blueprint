import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3.23.8";

const GATEWAY = "https://connector-gateway.lovable.dev/google_sheets/v4";
const SHEET_ID = Deno.env.get("LEADS_SPREADSHEET_ID");
const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
const SHEETS_KEY = Deno.env.get("GOOGLE_SHEETS_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SERVICE_KEY = Deno.env.get("SUPABASE_SECRET_KEY") ?? Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const NOTIFY_EMAIL = Deno.env.get("NOTIFY_EMAIL") ?? "saurabhanandcontentwriter@gmail.com";

const admin = SUPABASE_URL && SERVICE_KEY
  ? createClient(SUPABASE_URL, SERVICE_KEY, { auth: { autoRefreshToken: false, persistSession: false } })
  : null;

const BodySchema = z.object({
  event: z.enum(["contact_form", "resume_download", "hire_click", "cta_click", "page_view"]),
  name: z.string().trim().max(120).optional().default(""),
  email: z.string().trim().max(255).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
  page: z.string().trim().max(300).optional().default(""),
  referrer: z.string().trim().max(300).optional().default(""),
  lat: z.number().min(-90).max(90).optional(),
  lon: z.number().min(-180).max(180).optional(),
  accuracy: z.number().nonnegative().max(1_000_000).optional(),
  hp: z.string().max(200).optional().default(""),
  elapsed: z.number().int().nonnegative().optional().default(9999),
});

const hits = new Map<string, number[]>();
const WINDOW = 60_000;
const MAX_PER_MIN = 6;

function rateLimited(ip: string) {
  const now = Date.now();
  const arr = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length > MAX_PER_MIN;
}

const SPAM_PATTERNS = [
  /\b(viagra|casino|porn|crypto pump|seo backlinks cheap|loan offer)\b/i,
  /<\s*a\s+href/i,
  /\[url=/i,
];

function looksSpammy(text: string) {
  if (SPAM_PATTERNS.some((r) => r.test(text))) return true;
  const links = (text.match(/https?:\/\//gi) || []).length;
  return links > 2;
}

async function lookupLocation(ip: string) {
  if (!ip || ip === "unknown") return { city: "", district: "", region: "", country: "" };
  try {
    const r = await fetch(`http://ip-api.com/json/${ip}?fields=status,city,district,regionName,country`);
    const j = await r.json();
    if (j.status !== "success") return { city: "", district: "", region: "", country: "" };
    return { city: j.city ?? "", district: j.district ?? "", region: j.regionName ?? "", country: j.country ?? "" };
  } catch {
    return { city: "", district: "", region: "", country: "" };
  }
}

async function reverseGeocode(lat: number, lon: number) {
  try {
    const r = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
    const j = await r.json();
    const admins: Array<{ name?: string; adminLevel?: number; description?: string }> = j?.localityInfo?.administrative ?? [];
    const byLevel = (lvl: number) => admins.find((a) => a.adminLevel === lvl)?.name || "";
    const district = byLevel(5) || byLevel(6) || admins.find((a) => /district/i.test(a.description ?? "") || /district/i.test(a.name ?? ""))?.name || "";
    return {
      city: j.city || j.locality || byLevel(7) || "",
      district: district.replace(/\s+district$/i, "").trim(),
      region: j.principalSubdivision || byLevel(4) || "",
      country: j.countryName || "",
    };
  } catch {
    return null;
  }
}

async function notify(subject: string, lines: string[]) {
  if (!SUPABASE_URL || !SERVICE_KEY) return;
  try {
    const res = await fetch(`${SUPABASE_URL}/functions/v1/send-transactional-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${SERVICE_KEY}` },
      body: JSON.stringify({
        templateName: "lead-alert",
        recipientEmail: NOTIFY_EMAIL,
        idempotencyKey: `lead-alert-${crypto.randomUUID()}`,
        templateData: { subject, lines },
      }),
    });
    if (!res.ok) console.error(`Lead alert email not sent [${res.status}]: ${await res.text()}`);
  } catch (e) {
    console.error("Lead alert email error:", e);
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  const json = (b: unknown, status = 200) => new Response(JSON.stringify(b), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    if (!SHEET_ID || !LOVABLE_API_KEY || !SHEETS_KEY) return json({ error: "Logging is not configured" }, 500);
    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) return json({ error: parsed.error.flatten().fieldErrors }, 400);
    const d = parsed.data;

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || req.headers.get("cf-connecting-ip") || "unknown";
    const ua = req.headers.get("user-agent") ?? "";

    if (d.hp.trim() !== "") return json({ ok: true });
    if (d.event === "contact_form") {
      if (d.elapsed < 2000) return json({ error: "Please take a moment before submitting." }, 400);
      if (!d.name || !d.email) return json({ error: "Name and email are required." }, 400);
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email)) return json({ error: "Invalid email." }, 400);
      if (looksSpammy(`${d.name} ${d.message}`)) return json({ error: "Message flagged as spam." }, 400);
    }
    if (rateLimited(ip)) return json({ error: "Too many requests. Please try again shortly." }, 429);

    let loc = await lookupLocation(ip);
    let locationSource = loc.city || loc.country ? "IP lookup (approximate)" : "Unknown";
    if (d.lat != null && d.lon != null) {
      const precise = await reverseGeocode(d.lat, d.lon);
      if (precise && (precise.city || precise.district || precise.region || precise.country)) {
        loc = { ...precise, district: precise.district || loc.district };
        locationSource = `GPS (precise${d.accuracy != null ? `, ±${Math.round(d.accuracy)} m` : ""})`;
      }
    }
    const locationFull = [loc.city, loc.district && loc.district !== loc.city ? `${loc.district} District` : "", loc.region, loc.country].filter(Boolean).join(", ") || "Unknown";
    const now = new Date();
    const ist = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, hourCycle: "h23",
    }).formatToParts(now).reduce<Record<string, string>>((a, p) => ((a[p.type] = p.value), a), {});
    const hh = ist.hour === "24" ? "00" : ist.hour;
    const date = `${ist.day}/${ist.month}/${ist.year}`;
    const time = `${hh}:${ist.minute}:${ist.second}`;

    // Persist resume downloads in Supabase as a protected notification record.
    // This is in addition to the existing Google Sheets activity log.
    if (d.event === "resume_download" && admin) {
      const { error } = await admin.from("resume_download_notifications").insert({
        page: d.page,
        referrer: d.referrer,
        user_agent: ua,
        ip_address: ip,
        city: loc.city,
        district: loc.district,
        region: loc.region,
        country: loc.country,
        location: locationFull,
        location_source: locationSource,
        latitude: d.lat ?? null,
        longitude: d.lon ?? null,
        accuracy_meters: d.accuracy ?? null,
      });
      if (error) console.error("Resume notification DB insert failed:", error);
    }

    const row = [
      date, time, d.event, d.name, d.email, d.message, loc.city, loc.region, loc.country, ip, d.page, d.referrer, ua,
      d.lat != null ? String(d.lat) : "", d.lon != null ? String(d.lon) : "", d.accuracy != null ? `${Math.round(d.accuracy)} m` : "", locationFull, loc.district, locationSource,
    ];

    const res = await fetch(`${GATEWAY}/spreadsheets/${SHEET_ID}/values/Leads!A:S:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`, {
      method: "POST",
      headers: { Authorization: `Bearer ${LOVABLE_API_KEY}`, "X-Connection-Api-Key": SHEETS_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ values: [row] }),
    });
    if (!res.ok) {
      const details = await res.text();
      console.error(`Sheets append failed [${res.status}]: ${details}`);
      return json({ error: "Could not save entry", status: res.status, details }, res.status);
    }

    if (d.event === "contact_form" || d.event === "hire_click") {
      const label = d.event === "contact_form" ? "New contact form submission" : "New “Hire Me” click";
      await notify(`${label} — ${locationFull} — saurabhanandseo.com`, [
        `Event: ${label}`, `Date (DD/MM/YYYY): ${date}`, `Time (24h IST): ${time}`,
        d.name ? `Name: ${d.name}` : "", d.email ? `Email: ${d.email}` : "", d.message ? `Message: ${d.message}` : "",
        `City: ${loc.city || "Unknown"}`, `District: ${loc.district || "Unknown"}`, `State: ${loc.region || "Unknown"}`, `Country: ${loc.country || "Unknown"}`,
        `Location: ${locationFull}`, `Location source: ${locationSource}`,
        d.lat != null && d.lon != null ? `Map: https://www.google.com/maps?q=${d.lat},${d.lon}` : "",
        d.lat != null && d.lon != null ? `Precise: ${d.lat}, ${d.lon}${d.accuracy != null ? ` (±${Math.round(d.accuracy)} m)` : ""}` : "",
        `Page: ${d.page || "/"}`, d.referrer ? `Referrer: ${d.referrer}` : "",
      ].filter(Boolean));
    }

    return json({ ok: true });
  } catch (e) {
    console.error("log-lead error:", e);
    return json({ error: (e as Error).message ?? "Unexpected error" }, 500);
  }
});
