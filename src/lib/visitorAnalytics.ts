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

export function formatTimeSpent(totalSeconds: number) {
  const seconds = Math.max(0, Math.round(totalSeconds));
  if (seconds < 60) return `${seconds} sec`;
  const minutes = Math.floor(seconds / 60);
  const remaining = seconds % 60;
  if (minutes < 60) return remaining ? `${minutes} min ${remaining} sec` : `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return remainingMinutes ? `${hours} hr ${remainingMinutes} min` : `${hours} hr`;
}

export async function trackVisitor(event: "page_view" | "cta_click" | "hire_click", data: {
  element?: string;
  href?: string;
  durationSeconds?: number;
} = {}) {
  const duration = data.durationSeconds != null ? Math.max(0, Math.round(data.durationSeconds)) : null;
  const visitorId = getVisitorId();
  const sessionId = getSessionId();
  const message = duration != null
    ? `Visitor: ${visitorId} | Session: ${sessionId} | Time spent: ${formatTimeSpent(duration)}`
    : `Visitor: ${visitorId} | Session: ${sessionId}${data.href ? ` | URL: ${data.href}` : ""}`;

  return logLead({
    event,
    name: data.element ?? "",
    message,
    elapsed: duration != null ? duration * 1000 : 9999,
    visitorId,
    sessionId,
  });
}
