import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "@/styles/festival-celebration.css";

const GANESH_CHATURTHI = new Date("2026-09-14T00:00:00+05:30").getTime();

function GaneshaMark() {
  return (
    <svg viewBox="0 0 64 64" role="presentation" aria-hidden="true">
      <path d="M20 22C10 17 7 28 16 33C8 40 14 49 23 43C24 53 40 53 41 43C50 49 56 40 48 33C57 28 54 17 44 22C41 13 23 13 20 22Z" />
      <path d="M31 24C26 30 27 39 32 43C37 39 38 30 33 24M28 20L32 14L36 20M26 28h.1M38 28h.1M30 34h4" />
    </svg>
  );
}

export default function FestivalCelebration({ fallback }: { fallback: ReactNode }) {
  const location = useLocation();
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  if (location.pathname !== "/") return <>{fallback}</>;

  const startTime = GANESH_CHATURTHI - 7 * 24 * 60 * 60 * 1000;
  const endTime = GANESH_CHATURTHI + 24 * 60 * 60 * 1000;
  if (now < startTime || now > endTime) return <>{fallback}</>;

  return (
    <span className="festival-celebration" aria-label="Happy Ganesh Chaturthi" title="Happy Ganesh Chaturthi">
      <span className="festival-mark" aria-hidden="true">
        <GaneshaMark />
      </span>
      <span className="festival-greeting">Happy Ganesh Chaturthi</span>
    </span>
  );
}
