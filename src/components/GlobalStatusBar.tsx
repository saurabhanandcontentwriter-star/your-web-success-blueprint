import { useEffect, useState } from "react";
import "@/styles/global-status-bar.css";


const quotes = [
  "SEO rewards consistency more than shortcuts.",
  "Search visibility grows when user intent leads the strategy.",
  "Technical SEO creates the foundation; useful content earns trust.",
  "A better ranking starts with a better answer.",
  "Build for people first, then make it easy for search engines to understand.",
  "Small SEO improvements compound into meaningful growth.",
  "Data tells you what changed; SEO strategy decides what to do next.",
  "Optimize the page, understand the intent, and keep improving.",
  "Great content answers the query before the reader asks another question.",
  "Consistency turns SEO work into long-term organic growth.",
  "Do the fundamentals well before chasing the next SEO trend.",
  "Your best SEO asset is content that genuinely helps someone.",
  "Measure, learn, optimize, repeat.",
  "Keep learning. Search keeps changing.",
  "Progress in SEO is built one useful improvement at a time.",
  "Clarity, relevance, and usefulness are powerful SEO principles.",
  "Motivation gets you started; disciplined execution keeps growth moving.",
  "Better questions lead to better keywords, better content, and better results.",
  "Create value first. Rankings follow sustainable value.",
  "Stay curious, stay consistent, and keep shipping better work."
];

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

export default function GlobalStatusBar() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const quote = quotes[now.getDate() % quotes.length];

  return (
    <header className="global-status-bar" aria-label="Saurabh Anand daily SEO and motivation quote with current India date and time">
      <div className="global-status-bar__left">
        <span className="global-status-bar__greeting">“{quote}” — Saurabh Anand</span>
      </div>
      <div className="global-status-bar__right">
        <span className="global-status-bar__time">{timeFormatter.format(now)}</span>
        <span className="global-status-bar__date">{dateFormatter.format(now)} • IST</span>
      </div>
    </header>
  );
}
