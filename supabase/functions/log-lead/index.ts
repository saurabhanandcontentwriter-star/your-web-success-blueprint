import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3.23.8";

const GATEWAY = "https://connector-gateway.lovable.dev/google_sheets/v4";
const SHEET_ID = Deno.env.get("LEADS_SPREADSHEET_ID");
const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
const SHEETS_KEY = Deno.env.get("GOOGLE_SHEETS_API_KEY");

const BodySchema = z.object({
  event: z.enum(["contact_form", "resume_download", "hire_click", "cta_click", "page_view"]),
  name: z.string().trim().max(120).optional().default(""),
  email: z.string().trim().max(255).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
  page: z.string().trim().max(300).optional().default(""),
  referrer: z.string().trim().max(300).optional().default(""),
  // spam protection fields
  hp: z.string().max(200).optional().default(""), // honeypot — must stay empty
  elapsed: z.number().int().nonnegative().optional().default(9999), // ms since form render
});

// --- simple in-memory rate limiting (per isolate) ---
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
  if (!ip || ip === "unknown") return { city: "", region: "", country: "" };
  try {
    const r = await fetch(`http://ip-api.com/json/${ip}?fields=status,city,regionName,country`);
    const j = await r.json();
    if (j.status !== "success") return { city: "", region: "", country: "" };
    return { city: j.city ?? "", region: j.regionName ?? "", country: j.country ?? "" };
  } catch {
    return { city: "", region: "", country: "" };
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  const json = (b: unknown, status = 200) =>
    new Response(JSON.stringify(b), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    if (!SHEET_ID || !LOVABLE_API_KEY || !SHEETS_KEY) {
      return json({ error: "Logging is not configured" }, 500);
    }

    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) return json({ error: parsed.error.flatten().fieldErrors }, 400);
    const d = parsed.data;

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("cf-connecting-ip") ||
      "unknown";
    const ua = req.headers.get("user-agent") ?? "";

    // --- spam gates ---
    if (d.hp.trim() !== "") return json({ ok: true }); // silently drop bots
    if (d.event === "contact_form") {
      if (d.elapsed < 2000) return json({ error: "Please take a moment before submitting." }, 400);
      if (!d.name || !d.email) return json({ error: "Name and email are required." }, 400);
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email)) return json({ error: "Invalid email." }, 400);
      if (looksSpammy(`${d.name} ${d.message}`)) return json({ error: "Message flagged as spam." }, 400);
    }
    if (rateLimited(ip)) return json({ error: "Too many requests. Please try again shortly." }, 429);

    const loc = await lookupLocation(ip);
    const now = new Date();
    const ist = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata",
      year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
    }).formatToParts(now).reduce<Record<string, string>>((a, p) => ((a[p.type] = p.value), a), {});

    const row = [
      `${ist.year}-${ist.month}-${ist.day}`,
      `${ist.hour}:${ist.minute}:${ist.second}`,
      d.event,
      d.name,
      d.email,
      d.message,
      loc.city,
      loc.region,
      loc.country,
      ip,
      d.page,
      d.referrer,
      ua,
    ];

    const res = await fetch(
      `${GATEWAY}/spreadsheets/${SHEET_ID}/values/Leads!A:M:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "X-Connection-Api-Key": SHEETS_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ values: [row] }),
      },
    );

    if (!res.ok) {
      const details = await res.text();
      console.error(`Sheets append failed [${res.status}]: ${details}`);
      return json({ error: "Could not save entry", status: res.status, details }, res.status);
    }

    return json({ ok: true });
  } catch (e) {
    console.error("log-lead error:", e);
    return json({ error: (e as Error).message ?? "Unexpected error" }, 500);
  }
});
