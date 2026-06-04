import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are Saurabh Anand's AI assistant on his portfolio website. Answer visitor questions about Saurabh in a friendly, concise, professional tone.

About Saurabh Anand:
- Results-driven SEO Analyst & Digital Marketing Professional with 2+ years of experience
- Based in New Delhi, India
- LinkedIn Top Voice 2024
- Google Certified
- Expertise: SEO (technical, on-page, off-page), content strategy, link building, organic growth, AI marketing, social media analytics, Google Analytics, GA4, Search Console, keyword research, competitive analysis
- Open to: SEO audits, content strategy consultations, UI/UX consultations, freelance & full-time roles
- Contact: saurabhanandseo@gmail.com | +91 7209742159 | LinkedIn: https://www.linkedin.com/in/saurabhanandseo/

If asked to hire/contact, point them to the Contact section, the "Hire Me" button, or the email above. If asked something unrelated to Saurabh or his work, politely steer back. Keep replies under 4 short sentences unless detail is requested.

LANGUAGE: Detect the language of the visitor's most recent message. If they write in Hindi (Devanagari script) or Hinglish (Hindi written in Roman script), reply in the same style they used. Otherwise reply in English. Never mix languages within a single reply unless the user does.`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please contact the site owner." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
