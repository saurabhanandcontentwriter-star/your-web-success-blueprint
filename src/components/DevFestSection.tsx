import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Calendar, Mic, Users, ArrowRight, MapPin } from "lucide-react";

const TARGET = new Date("2026-09-05T00:00:00+05:30").getTime();

const useCountdown = () => {
  const [t, setT] = useState(() => Math.max(0, TARGET - Date.now()));

  useEffect(() => {
    const i = setInterval(() => {
      setT(Math.max(0, TARGET - Date.now()));
    }, 1000);

    return () => clearInterval(i);
  }, []);

  const d = Math.floor(t / 86400000);
  const h = Math.floor((t % 86400000) / 3600000);
  const m = Math.floor((t % 3600000) / 60000);
  const s = Math.floor((t % 60000) / 1000);

  return { d, h, m, s };
};

const GDGS = [
  "GDG Ranchi",
  "GDG Delhi",
  "GDG Noida",
  "GDG Gurugram",
  "GDG Patna",
];

const DevFestSection = () => {
  const { d, h, m, s } = useCountdown();

  const boxes = [
    { label: "Days", v: d },
    { label: "Hours", v: h },
    { label: "Minutes", v: m },
    { label: "Seconds", v: s },
  ];

  return (
    <section id="devfest" className="py-24">
      <div className="container mx-auto px-6">
        <div className="glass-card p-8 md:p-12 border-primary/30 relative overflow-hidden">

          {/* Background Effects */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative">

            {/* Event Status */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="badge-glass border-primary/40">
                <Calendar size={14} className="text-primary" />
                Upcoming Event
              </span>

              <span className="badge-glass border-accent/40 text-accent">
                5 September 2026
              </span>
            </div>

            {/* Event Title */}
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-3">
              Google{" "}
              <span className="gradient-text">
                DevFest Ranchi 2026
              </span>
            </h2>

            {/* Event Description */}
            <p className="text-muted-foreground max-w-2xl mb-5">
              Join developers, students, tech enthusiasts, speakers, and
              community leaders for DevFest Ranchi 2026 — a day of technology,
              learning, networking, and innovation.
            </p>

            {/* Date + Location */}
            <div className="flex flex-wrap gap-3 mt-5">

              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl glass-card border-primary/20">
                <Calendar size={18} className="text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    Date
                  </p>
                  <p className="font-semibold">
                    5 September 2026
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl glass-card border-accent/20">
                <MapPin size={18} className="text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    Venue
                  </p>
                  <p className="font-semibold">
                    BIT Mesra Auditorium
                  </p>
                </div>
              </div>

            </div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
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

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-8">

              <a
                href="mailto:saurabhanandseo@gmail.com?subject=DevFest%20Ranchi%202026%20-%20Registration%20Interest"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Register Interest
                <ArrowRight size={15} />
              </a>

              <a
                href="mailto:saurabhanandseo@gmail.com?subject=DevFest%20Ranchi%202026%20-%20Speaker%20Application"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-primary/40 text-sm font-medium hover:bg-primary/10 transition-colors"
              >
                <Mic size={15} />
                Become a Speaker
              </a>

              <a
                href="https://gdg.community.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm font-medium hover:bg-secondary transition-colors"
              >
                <Users size={15} />
                Join GDG Ranchi
              </a>

            </div>

            {/* Location */}
            <div className="mt-8 p-5 rounded-2xl border border-primary/20 bg-primary/5">
              <div className="flex items-start gap-3">
                <MapPin
                  size={22}
                  className="text-primary mt-1 shrink-0"
                />

                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                    Event Venue
                  </p>

                  <h3 className="text-lg font-semibold">
                    BIT Mesra Auditorium
                  </h3>

                  <p className="text-sm text-muted-foreground mt-1">
                    Birla Institute of Technology, Mesra, Ranchi, Jharkhand
                  </p>
                </div>
              </div>
            </div>

            {/* Community Highlights */}
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
