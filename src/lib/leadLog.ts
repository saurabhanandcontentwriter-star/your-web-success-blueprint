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
  page?: string;
  referrer?: string;
  hp?: string;
  elapsed?: number;
  lat?: number;
  lon?: number;
  accuracy?: number;
  visitorId?: string;
  sessionId?: string;
}

const GEO_KEY = "sa_geo_coords_v1";

/** Returns cached precise coordinates for this session, if the visitor granted access. */
export function getStoredCoords(): { lat: number; lon: number; accuracy: number } | null {
  try {
    const raw = sessionStorage.getItem(GEO_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function storeCoords(coords: { lat: number; lon: number; accuracy: number }) {
  try {
    sessionStorage.setItem(GEO_KEY, JSON.stringify(coords));
  } catch {
    /* ignore */
  }
}

/** Sends a lead/activity record to the logging Edge Function. Never throws. */
export async function logLead(payload: LeadPayload): Promise<{ ok: boolean; error?: string }> {
  try {
    const coords = getStoredCoords();
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({
        ...(coords ?? {}),
        ...payload,
        page: payload.page ?? (typeof window !== "undefined" ? window.location.pathname : ""),
        referrer: payload.referrer ?? (typeof document !== "undefined" ? document.referrer : ""),
      }),
      keepalive: true,
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
