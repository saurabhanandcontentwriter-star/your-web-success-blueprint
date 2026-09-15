import { useEffect, useState } from "react";
import "@/styles/global-status-bar.css";

const GANESH_START = new Date("2026-09-07T00:00:00+05:30").getTime();
const GANESH_END = new Date("2026-09-16T00:00:00+05:30").getTime();

const timeFormatter = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  weekday: "long",
  day: "2-digit",
  month: "short",
  year: "numeric",
});

function GaneshaMark() {
  return (
    <svg viewBox="0 0 64 64" role="presentation" aria-hidden="true">
      <path d="M20 22C10 17 7 28 16 33C8 40 14 49 23 43C24 53 40 53 41 43C50 49 56 40 48 33C57 28 54 17 44 22C41 13 23 13 20 22Z" />
      <path d="M31 24C26 30 27 39 32 43C37 39 38 30 33 24M28 20L32 14L36 20M26 28h.1M38 28h.1M30 34h4" />
    </svg>
  );
}

export default function GlobalStatusBar() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const current = now.getTime();
  const showFestival = current >= GANESH_START && current < GANESH_END;

  return (
    <header className="global-status-bar" aria-label="Festival and current India date and time">
      <div className="global-status-bar__left">
        {showFestival && (
          <>
            <span className="global-status-bar__ganesha" aria-hidden="true"><GaneshaMark /></span>
            <span className="global-status-bar__greeting">Happy Ganesh Chaturthi</span>
          </>
        )}
      </div>
      <div className="global-status-bar__right">
        <span className="global-status-bar__time">{timeFormatter.format(now)}</span>
        <span className="global-status-bar__date">{dateFormatter.format(now)} • IST</span>
      </div>
    </header>
  );
}
