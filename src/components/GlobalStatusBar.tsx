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

const festivalDays: Record<string, {
  day: string;
  title: string;
  subtitle: string;
  image: string;
  blessing: string;
}> = {
  "2026-10-11": {
    day: "Day 1",
    title: "Maa Shailputri",
    subtitle: "Ghatasthapana • Sharad Navratri",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Shailaputri%20Sanghasri%202010%20Arnab%20Dutta.JPG",
    blessing: "Strength • stability • new beginnings",
  },
  "2026-10-12": {
    day: "Day 2",
    title: "Maa Brahmacharini",
    subtitle: "Sharad Navratri",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Brahmacharini.jpg",
    blessing: "Patience • dedication • inner peace",
  },
  "2026-10-13": {
    day: "Day 3",
    title: "Maa Chandraghanta",
    subtitle: "Sharad Navratri",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chandraghanta.PNG",
    blessing: "Courage • positivity • fearlessness",
  },
  "2026-10-14": {
    day: "Day 4",
    title: "Maa Kushmanda",
    subtitle: "Sharad Navratri",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kushmanda%20Sanghasri%202010%20Arnab%20Dutta.JPG",
    blessing: "Good health • prosperity • positive energy",
  },
  "2026-10-15": {
    day: "Day 5",
    title: "Maa Skandamata",
    subtitle: "Sharad Navratri",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Skandamata%20Sanghasri%202010%20Arnab%20Dutta.JPG",
    blessing: "Wisdom • care • protection",
  },
  "2026-10-16": {
    day: "Day 6",
    title: "Maa Katyayani",
    subtitle: "Sharad Navratri",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Katyayani%20Sanghasri%202010%20Arnab%20Dutta.JPG",
    blessing: "Strength • courage • removal of obstacles",
  },
  "2026-10-17": {
    day: "Day 7",
    title: "Maa Kalaratri",
    subtitle: "Saptami • Sharad Navratri",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kalratri%20Sanghasri%202010%20Arnab%20Dutta.JPG",
    blessing: "Protection • courage • victory over negativity",
  },
  "2026-10-18": {
    day: "Day 7",
    title: "Maa Kalaratri",
    subtitle: "Saptami continues • Sharad Navratri",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kalratri%20Sanghasri%202010%20Arnab%20Dutta.JPG",
    blessing: "Protection • courage • victory over negativity",
  },
  "2026-10-19": {
    day: "Day 8–9",
    title: "Maa Mahagauri",
    subtitle: "Durga Ashtami • Maha Navami",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mahagauri%20Sanghasri%202010%20Arnab%20Dutta.JPG",
    blessing: "Peace • happiness • prosperity",
  },
  "2026-10-20": {
    day: "Vijayadashami",
    title: "Maa Siddhidatri",
    subtitle: "Dussehra • Navratri Parana",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Siddhidatri%20Sanghasri%202010%20Arnab%20Dutta.JPG",
    blessing: "Success • fulfilment • victory of good over evil",
  },
};

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

const getIndiaDateKey = (date: Date) => {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return `${values.year}-${values.month}-${values.day}`;
};

export default function GlobalStatusBar() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const quote = quotes[now.getDate() % quotes.length];
  const festival = festivalDays[getIndiaDateKey(now)];

  return (
    <header
      className={`global-status-bar${festival ? " global-status-bar--festival" : ""}`}
      aria-label={
        festival
          ? `${festival.title} — ${festival.subtitle}, 2026`
          : "Saurabh Anand daily SEO and motivation quote with current India date and time"
      }
    >
      <div className="global-status-bar__left">
        {festival ? (
          <>
            <img
              className="global-status-bar__festival-image"
              src={festival.image}
              alt={festival.title}
              width="38"
              height="38"
              loading="eager"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div className="global-status-bar__festival-copy">
              <span className="global-status-bar__festival-day">{festival.day}</span>
              <span className="global-status-bar__greeting">{festival.title}</span>
              <span className="global-status-bar__festival-subtitle">{festival.subtitle}</span>
              <span className="global-status-bar__festival-blessing">{festival.blessing}</span>
            </div>
          </>
        ) : (
          <span className="global-status-bar__greeting">“{quote}” — Saurabh Anand</span>
        )}
      </div>
      <div className="global-status-bar__right">
        <span className="global-status-bar__time">{timeFormatter.format(now)}</span>
        <span className="global-status-bar__date">{dateFormatter.format(now)} • IST</span>
      </div>
    </header>
  );
}
