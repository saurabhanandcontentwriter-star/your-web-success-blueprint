import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Calendar, Mic, Users, ArrowRight, MapPin, Sparkles } from "lucide-react";
import bitMesraImg from "@/assets/devfest-bit-mesra.jpg";

const TARGET = new Date("2026-09-05T00:00:00").getTime();
const EVENT_END = TARGET + 86400000; // auto-switches 24 hours after the event starts

type Phase = "upcoming" | "live" | "past";

const getPhase = (now: number): Phase =>
  now < TARGET ? "upcoming" : now < EVENT_END ? "live" : "past";

const useCountdown = () => {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const i = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(i);
  }, []);

  const phase = getPhase(now);
  const t = Math.max(0, (phase === "live" ? EVENT_END : TARGET) - now);

  const d = Math.floor(t / 86400000);
  const h = Math.floor((t % 86400000) / 3600000);
  const m = Math.floor((t % 3600000) / 60000);
  const s = Math.floor((t % 60000) / 1000);

  return { d, h, m, s, phase };
};

const GDGS = [
  "GDG Ranchi",
  "GDG Delhi",
  "GDG Noida",
  "GDG Gurugram",
  "GDG Patna"
];

const FOCUS_AREAS = [
  "Google Technologies",
  "AI & Gemini",
  "Cloud",
  "Developer Ecosystem",
];

const DevFestSection = () => {
  const { d, h, m, s, phase } = useCountdown();

  const boxes = [
    { label: "Days", v: d },
    { label: "Hours", v: h },
    { label: "Minutes", v: m },
    { label: "Seconds", v: s },
  ];

  const statusBadge =
    phase === "upcoming"
      ? "📅 Upcoming Event"
      : phase === "live"
      ? "🔴 Happening Today"
      : "✅ Event Completed";

  const countdownLabel =
    phase === "upcoming"
      ? "Countdown to DevFest Ranchi 2026"
      : phase === "live"
      ? "Live now — time left today"
      : null;

  return (
    <section id="devfest" className="py-24">
      <div className="container mx-auto px-6">
        <div className="glass-card p-8 md:p-12 border-primary/30 relative overflow-hidden">

          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />

          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative">

            <div className="flex flex-wrap items-center gap-3 mb-4">

              <span className="badge-glass border-primary/40">
                <Calendar size={14} className="text-primary" /> 📅 Upcoming Event
              </span>

              <span className="badge-glass border-accent/40 text-accent">
                🗓️ 5 September 2026
              </span>

              <span className="badge-glass border-border/60">
                <MapPin size={14} className="text-accent" /> 📍 BIT Mesra Auditorium, Ranchi
              </span>

              <span className="badge-glass border-accent/40">
                <Sparkles size={14} className="text-primary" /> 🚀 Community 2.0
              </span>

            </div>

            <div className="flex items-center gap-3 mb-3">
              <svg
                className="w-10 h-10 md:w-12 md:h-12 shrink-0"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Google Developers logo"
              >
                <circle cx="12" cy="12" r="6" fill="#4285F4" />
                <circle cx="36" cy="12" r="6" fill="#EA4335" />
                <circle cx="12" cy="36" r="6" fill="#FBBC05" />
                <circle cx="36" cy="36" r="6" fill="#34A853" />
              </svg>
              <h2 className="text-3xl md:text-5xl font-display font-bold">
                Google{" "}
                <span className="gradient-text">
                  DevFest Ranchi 2026
                </span>
              </h2>
            </div>

            <p className="text-muted-foreground max-w-2xl mb-2">
              Join us on{" "}
              <strong className="text-foreground">
                5 September 2026
              </strong>{" "}
              at{" "}
              <strong className="text-foreground">
                BIT Mesra Auditorium, Ranchi
              </strong>{" "}
              for a full day of Google technologies, AI, Cloud, and the
              developer ecosystem — talks, workshops, networking, and community
              magic.
            </p>

            <div className="flex flex-wrap gap-2 mb-2">

              {FOCUS_AREAS.map((f) => (
                <span key={f} className="badge-glass">
                  {f}
                </span>
              ))}

            </div>

            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 rounded-2xl overflow-hidden border border-primary/20 relative"
            >
              <img
                src={bitMesraImg}
                alt="BIT Mesra Ranchi campus building — venue for Google DevFest Ranchi 2026"
                loading="lazy"
                width={1536}
                height={1024}
                className="w-full h-56 md:h-80 object-cover"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent px-4 py-3 text-xs md:text-sm text-foreground">
                📍 BIT Mesra Auditorium, Ranchi — Google DevFest 2026 · Community 2.0
              </figcaption>
            </motion.figure>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-4 gap-3 md:gap-4 max-w-xl mt-8"
            >

              {boxes.map((b) => (
                <div
                  key={b.label}
                  className="glass-card p-4 text-center border-primary/20"
                >

                  <p className="text-2xl md:text-4xl font-display font-bold gradient-text tabular-nums">
                    {String(b.v).padStart(2, "0")}
                  </p>

                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                    {b.label}
                  </p>

                </div>
              ))}

            </motion.div>

            <div className="flex flex-wrap gap-3 mt-8">

              <a
                href="mailto:saurabhanandseo@gmail.com?subject=DevFest%20Ranchi%202026%20-%20Registration%20Interest"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Register Interest <ArrowRight size={15} />
              </a>

              <a
                href="mailto:saurabhanandseo@gmail.com?subject=DevFest%20Ranchi%202026%20-%20Speaker%20Application"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-primary/40 text-sm font-medium hover:bg-primary/10 transition-colors"
              >
                <Mic size={15} /> Become a Speaker
              </a>

              <a
                href="https://gdg.community.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm font-medium hover:bg-secondary transition-colors"
              >
                <Users size={15} /> Join GDG Ranchi
              </a>

            </div>

            <div className="mt-10 pt-6 border-t border-border/40">

              <p className="text-xs text-muted-foreground mb-3 uppercase tracking-widest">
                Community Highlights
              </p>

              <div className="flex flex-wrap gap-2">

                {GDGS.map((g) => (
                  <span key={g} className="badge-glass">
                    {g}
                  </span>
                ))}

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DevFestSection;
