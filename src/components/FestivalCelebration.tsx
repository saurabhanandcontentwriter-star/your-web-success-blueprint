import { ReactNode, useEffect, useState } from "react";
import "@/styles/festival-celebration.css";

const GANESH_CHATURTHI = new Date("2026-09-14T00:00:00+05:30").getTime();
const GANESH_FESTIVAL_END = new Date("2026-09-25T23:59:59+05:30").getTime();

function GaneshaMark() {
  return (
    <svg viewBox="0 0 64 64" role="presentation" aria-hidden="true">
      <path d="M20 22C10 17 7 28 16 33C8 40 14 49 23 43C24 53 40 53 41 43C50 49 56 40 48 33C57 28 54 17 44 22C41 13 23 13 20 22Z" />
      <path d="M31 24C26 30 27 39 32 43C37 39 38 30 33 24M28 20L32 14L36 20M26 28h.1M38 28h.1M30 34h4" />
    </svg>
  );
}

const formatters = {
  time: new Intl.DateTimeFormat("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }),
  date: new Intl.DateTimeFormat("en-IN", { timeZone: "Asia/Kolkata", weekday: "long", day: "2-digit", month: "short", year: "numeric" }),
};

export default function FestivalCelebration({ fallback = null }: { fallback?: ReactNode }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const current = now.getTime();
  if (current < GANESH_CHATURTHI || current > GANESH_FESTIVAL_END) return <>{fallback}</>;

  return (
    <header className="festival-celebration festival-celebration-global" aria-label="Festival and current date and time">
      <div className="festival-celebration__inner">
        <span className="festival-mark" aria-hidden="true"><GaneshaMark /></span>
        <span className="festival-greeting">Happy Ganesh Chaturthi</span>
        <span className="festival-divider" aria-hidden="true" />
        <span className="festival-live-time">{formatters.time.format(now)}</span>
        <span className="festival-live-date">{formatters.date.format(now)} • IST</span>
      </div>
    </header>
  );
}
