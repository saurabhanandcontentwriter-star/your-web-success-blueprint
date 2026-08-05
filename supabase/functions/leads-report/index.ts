import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3.23.8";

const GATEWAY = "https://connector-gateway.lovable.dev/google_sheets/v4";
const SHEET_ID = Deno.env.get("LEADS_SPREADSHEET_ID");
const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
const SHEETS_KEY = Deno.env.get("GOOGLE_SHEETS_API_KEY");
const ADMIN_PASSWORD = Deno.env.get("LEADS_ADMIN_PASSWORD");

const BodySchema = z.object({ password: z.string().min(1).max(200) });

// brute-force protection
const attempts = new Map<string, number[]>();
function tooManyAttempts(ip: string) {
  const now = Date.now();
  const arr = (attempts.get(ip) ?? []).filter((t) => now - t < 60_000);
  arr.push(now);
  attempts.set(ip, arr);
  return arr.length > 10;
}

function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
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
      return json({ error: "Lead storage is not configured" }, 500);
    }
    if (!ADMIN_PASSWORD) {
      return json({ error: "Admin password is not configured yet" }, 503);
    }

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
    if (tooManyAttempts(ip)) return json({ error: "Too many attempts. Try again later." }, 429);

    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) return json({ error: "Invalid request" }, 400);
    if (!safeEqual(parsed.data.password, ADMIN_PASSWORD)) {
      return json({ error: "Incorrect password" }, 401);
    }

    const res = await fetch(`${GATEWAY}/spreadsheets/${SHEET_ID}/values/Leads!A1:R10000`, {
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": SHEETS_KEY,
      },
    });

    if (!res.ok) {
      const details = await res.text();
      console.error(`Sheets read failed [${res.status}]: ${details}`);
      return json({ error: "Could not read leads", status: res.status, details }, res.status);
    }

    const data = await res.json();
    const values: string[][] = data.values ?? [];
    const [header = [], ...rows] = values;

    return json({ ok: true, header, rows });
  } catch (e) {
    console.error("leads-report error:", e);
    return json({ error: (e as Error).message ?? "Unexpected error" }, 500);
  }
});
