import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import "@/styles/festival-celebration.css";

type FestivalKey =
  | "ganesha"
  | "navratri"
  | "dussehra"
  | "diwali"
  | "bhai-dooj"
  | "chhath"
  | "christmas"
  | "sankranti"
  | "holi";

type Festival = {
  name: string;
  icon: FestivalKey;
  date: string;
  greeting: string;
};

const FESTIVALS: Festival[] = [
  { name: "Ganesh Chaturthi", icon: "ganesha", date: "2026-09-14T00:00:00+05:30", greeting: "Happy Ganesh Chaturthi" },
  { name: "Navratri", icon: "navratri", date: "2026-10-11T00:00:00+05:30", greeting: "Happy Navratri" },
  { name: "Dussehra", icon: "dussehra", date: "2026-10-20T00:00:00+05:30", greeting: "Happy Dussehra" },
  { name: "Diwali", icon: "diwali", date: "2026-11-08T00:00:00+05:30", greeting: "Happy Diwali" },
  { name: "Bhai Dooj", icon: "bhai-dooj", date: "2026-11-11T00:00:00+05:30", greeting: "Happy Bhai Dooj" },
  { name: "Chhath Puja", icon: "chhath", date: "2026-11-15T00:00:00+05:30", greeting: "Happy Chhath Puja" },
  { name: "Christmas", icon: "christmas", date: "2026-12-25T00:00:00+05:30", greeting: "Merry Christmas" },
  { name: "Makar Sankranti", icon: "sankranti", date: "2027-01-14T00:00:00+05:30", greeting: "Happy Makar Sankranti" },
  { name: "Holi", icon: "holi", date: "2027-03-22T00:00:00+05:30", greeting: "Happy Holi" },
];

const pad = (value: number) => String(value).padStart(2, "0");

const getNextFestival = (now: number) => {
  const eligible = FESTIVALS.filter(
    (festival) => new Date(festival.date).getTime() + 24 * 60 * 60 * 1000 >= now,
  );
  return eligible[0] ?? null;
};

function FestivalMark({ icon }: { icon: FestivalKey }) {
  const common = {
    viewBox: "0 0 64 64",
    role: "presentation" as const,
    "aria-hidden": true,
  };

  switch (icon) {
    case "ganesha":
      return (
        <svg {...common}>
          <path d="M20 22C10 17 7 28 16 33C8 40 14 49 23 43C24 53 40 53 41 43C50 49 56 40 48 33C57 28 54 17 44 22C41 13 23 13 20 22Z" />
          <path d="M31 24C26 30 27 39 32 43C37 39 38 30 33 24M28 20L32 14L36 20M26 28h.1M38 28h.1M30 34h4" />
        </svg>
      );
    case "navratri":
      return (
        <svg {...common}>
          <path d="M32 8L38 20L51 22L42 31L44 44L32 38L20 44L22 31L13 22L26 20Z" />
          <path d="M32 15V51M22 25L42 39M42 25L22 39M16 51H48" />
        </svg>
      );
    case "dussehra":
      return (
        <svg {...common}>
          <path d="M10 52C26 42 39 29 54 13M39 14L54 13L52 28M18 44L25 51" />
          <path d="M42 23L49 30M34 31L41 38M26 39L33 46" />
        </svg>
      );
    case "diwali":
      return (
        <svg {...common}>
          <path d="M12 37C18 43 46 43 52 37L47 52H17Z" />
          <path d="M32 12C25 20 27 27 32 31C37 27 39 20 32 12Z" />
          <path d="M20 49H44M17 35H47" />
        </svg>
      );
    case "bhai-dooj":
      return (
        <svg {...common}>
          <circle cx="32" cy="32" r="20" />
          <circle cx="32" cy="32" r="6" />
          <path d="M32 12V26M32 38V52M12 32H26M38 32H52" />
        </svg>
      );
    case "chhath":
      return (
        <svg {...common}>
          <circle cx="32" cy="22" r="10" />
          <path d="M32 5V10M15 10L19 14M49 10L45 14M8 24H13M51 24H56M12 48C18 40 46 40 52 48M18 48C23 43 41 43 46 48" />
        </svg>
      );
    case "christmas":
      return (
        <svg {...common}>
          <path d="M32 8L23 24H28L18 37H27L19 49H45L37 37H46L36 24H41Z" />
          <path d="M28 49V56H36V49M29 17H35" />
        </svg>
      );
    case "sankranti":
      return (
        <svg {...common}>
          <path d="M32 8L53 28L32 49L11 28Z" />
          <path d="M32 8V49M11 28H53M22 18L42 38M42 18L22 38M32 49V57" />
        </svg>
      );
    case "holi":
      return (
        <svg {...common}>
          <circle cx="20" cy="24" r="8" />
          <circle cx="43" cy="21" r="6" />
          <circle cx="39" cy="43" r="8" />
          <circle cx="18" cy="46" r="5" />
          <circle cx="31" cy="32" r="4" />
        </svg>
      );
  }
}

export default function FestivalCelebration() {
  const location = useLocation();
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  if (location.pathname !== "/") return null;

  const festival = useMemo(() => getNextFestival(now), [now]);
  if (!festival) return null;

  const festivalTime = new Date(festival.date).getTime();
  const startTime = festivalTime - 7 * 24 * 60 * 60 * 1000;
  const endTime = festivalTime + 24 * 60 * 60 * 1000;
  if (now < startTime || now > endTime) return null;

  const isToday = now >= festivalTime;
  const remaining = Math.max(0, festivalTime - now);
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);

  const currentDate = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(now);

  const currentTime = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(now);

  return (
    <aside className="festival-celebration" aria-live="polite">
      <div className="festival-glow" />
      <div className="festival-sparkles" aria-hidden="true">✦ ✧ ✦</div>
      <div className="festival-main">
        <span className={`festival-mark festival-mark--${festival.icon}`} aria-hidden="true">
          <FestivalMark icon={festival.icon} />
        </span>
        <div className="festival-copy">
          <div className="festival-greeting">
            {isToday ? `${festival.greeting} 🎉` : `${festival.greeting} is coming ✨`}
          </div>
          <div className="festival-meta">{festival.name} • India (IST)</div>
        </div>
      </div>
      <div className="festival-clock" aria-label="Festival countdown">
        {isToday ? (
          <strong>Celebrating Today 🎊</strong>
        ) : (
          <>
            <span><b>{days}</b>d</span>
            <span><b>{pad(hours)}</b>h</span>
            <span><b>{pad(minutes)}</b>m</span>
            <span><b>{pad(seconds)}</b>s</span>
          </>
        )}
      </div>
      <div className="festival-now">Today: {currentDate} • {currentTime}</div>
    </aside>
  );
}
