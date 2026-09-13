import { logLead } from "./leadLog";

const VISITOR_KEY = "sa_visitor_id_v1";
const SESSION_KEY = "sa_session_id_v1";

function makeId(prefix: string) {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return `${prefix}_${crypto.randomUUID()}`;
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

function getOrCreate(key: string, prefix: string, storage: Storage) {
  try {
    const existing = storage.getItem(key);
    if (existing) return existing;
    const id = makeId(prefix);
    storage.setItem(key, id);
    return id;
  } catch {
    return makeId(prefix);
  }
}

export function getVisitorId() {
  return typeof window === "undefined" ? "server" : getOrCreate(VISITOR_KEY, "visitor", localStorage);
}

export function getSessionId() {
  return typeof window === "undefined" ? "server" : getOrCreate(SESSION_KEY, "session", sessionStorage);
}

export async function trackVisitor(event: "page_view" | "cta_click" | "hire_click", data: {
  element?: string;
  href?: string;
  durationSeconds?: number;
} = {}) {
  const duration = data.durationSeconds != null ? Math.max(0, Math.round(data.durationSeconds)) : null;
  return logLead({
    event,
    name: data.element ?? "",
    message: duration != null ? `Time spent: ${duration}s` : (data.href ?? ""),
    elapsed: duration != null ? duration * 1000 : 9999,
    visitorId: getVisitorId(),
    sessionId: getSessionId(),
  });
}
