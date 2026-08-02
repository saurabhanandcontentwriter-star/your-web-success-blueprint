export type LeadEvent =
  | "contact_form"
  | "resume_download"
  | "hire_click"
  | "cta_click"
  | "page_view";

const ENDPOINT = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/log-lead`;

export interface LeadPayload {
  event: LeadEvent;
  name?: string;
  email?: string;
  message?: string;
  hp?: string;
  elapsed?: number;
}

/** Sends an activity/lead record to the Google Sheet. Never throws. */
export async function logLead(payload: LeadPayload): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({
        ...payload,
        page: typeof window !== "undefined" ? window.location.pathname : "",
        referrer: typeof document !== "undefined" ? document.referrer : "",
      }),
    });
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      return { ok: false, error: typeof body?.error === "string" ? body.error : "Could not save entry" };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Network error" };
  }
}
