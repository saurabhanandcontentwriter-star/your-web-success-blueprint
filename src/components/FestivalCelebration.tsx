import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import "@/styles/festival-celebration.css";

type Festival = {
  name: string;
  emoji: string;
  date: string;
  greeting: string;
};

// Major Indian festivals. Add more entries here as required; the engine handles the timing automatically.
const FESTIVALS: Festival[] = [
  { name: "Ganesh Chaturthi", emoji: "🐘", date: "2026-09-14T00:00:00+05:30", greeting: "Happy Ganesh Chaturthi" },
  { name: "Navratri", emoji: "🪔", date: "2026-10-11T00:00:00+05:30", greeting: "Happy Navratri" },
  { name: "Dussehra", emoji: "🏹", date: "2026-10-20T00:00:00+05:30", greeting: "Happy Dussehra" },
  { name: "Diwali", emoji: "🪔", date: "2026-11-08T00:00:00+05:30", greeting: "Happy Diwali" },
  { name: "Bhai Dooj", emoji: "❤️", date: "2026-11-11T00:00:00+05:30", greeting: "Happy Bhai Dooj" },
  { name: "Chhath Puja", emoji: "🌅", date: "2026-11-15T00:00:00+05:30", greeting: "Happy Chhath Puja" },
  { name: "Christmas", emoji: "🎄", date: "2026-12-25T00:00:00+05:30", greeting: "Merry Christmas" },
  { name: "Makar Sankranti", emoji: "🪁", date: "2027-01-14T00:00:00+05:30", greeting: "Happy Makar Sankranti" },
  { name: "Holi", emoji: "🌈", date: "2027-03-22T00:00:00+05:30", greeting: "Happy Holi" },
];

const pad = (value: number) => String(value).padStart(2, "0");

const getNextFestival = (now: number) => {
  const eligible = FESTIVALS.filter((festival) => new Date(festival.date).getTime() + 24 * 60 * 60 * 1000 >= now);
  return eligible[0] ?? null;
};

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
  const startTime = festivalTime - 2 * 24 * 60 * 60 * 1000;
  const endTime = festivalTime + 24 * 60 * 60 * 1000;
  if (now < startTime || now > endTime) return null;

  const isToday = now >= festivalTime;
  const remaining = Math.max(0, festivalTime - now);
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  const currentDate = new Intl.DateTimeFormat("en-IN", { timeZone: "Asia/Kolkata", weekday: "short", day: "2-digit", month: "short", year: "numeric" }).format(now);
  const currentTime = new Intl.DateTimeFormat("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }).format(now);

  return (
    <aside className="festival-celebration" aria-live="polite">
      <div className="festival-glow" />
      <div className="festival-sparkles" aria-hidden="true">✦ ✧ ✦ ✧ ✦</div>
      <div className="festival-main">
        <span className="festival-icon" aria-hidden="true">{festival.emoji}</span>
        <div>
          <div className="festival-greeting">{isToday ? `${festival.greeting} 🎉` : `${festival.greeting} is coming ✨`}</div>
          <div className="festival-meta">{festival.name} • India (IST)</div>
        </div>
      </div>
      <div className="festival-clock" aria-label="Festival countdown">
        {isToday ? <strong>Celebrating Today 🎊</strong> : <><span><b>{days}</b>d</span><span><b>{pad(hours)}</b>h</span><span><b>{pad(minutes)}</b>m</span><span><b>{pad(seconds)}</b>s</span></>}
      </div>
      <div className="festival-now">Today: {currentDate} • {currentTime}</div>
    </aside>
  );
}
