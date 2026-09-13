import { useEffect, useState } from "react";
import "@/styles/live-date-time.css";

const formatters = {
  time: new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }),
  day: new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    weekday: "long",
  }),
  date: new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
  }),
};

export default function LiveDateTime() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <aside className="live-date-time" aria-label="Current India day, date and time">
      <div className="live-date-time__time">{formatters.time.format(now)}</div>
      <div className="live-date-time__day">{formatters.day.format(now)}</div>
      <div className="live-date-time__date">{formatters.date.format(now)} • IST</div>
    </aside>
  );
}
