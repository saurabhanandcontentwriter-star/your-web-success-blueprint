import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Calendar,
  Mic,
  Users,
  ArrowRight,
  MapPin,
} from "lucide-react";

const TARGET = new Date("2026-09-05T10:00:00+05:30").getTime();

const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(() =>
    Math.max(0, TARGET - Date.now())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(Math.max(0, TARGET - Date.now()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor(
    (timeLeft % (1000 * 60)) / 1000
  );

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

const GDGS = [
  "GDG Ranchi",
  "GDG Delhi",
  "GDG Noida",
  "GDG Gurugram",
  "GDG Patna",
];

const DevFestSection = () => {
  const { days, hours, minutes, seconds } = useCountdown();

  const countdownBoxes = [
    {
      label: "Days",
      value: days,
    },
    {
      label: "Hours",
      value: hours,
    },
    {
      label: "Minutes",
      value: minutes,
    },
    {
      label: "Seconds",
      value: seconds,
    },
  ];

  return (
    <section id="devfest" className="py-24">
      <div className="container mx-auto px-6">
        <div className="glass-card relative overflow-hidden border border-primary/30 p-8 md:p-12">

          {/* Background Glow */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative">

            {/* Event Status */}
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="badge-glass flex items-center gap-2 border-primary/40">
                <Calendar size={14} className="text-primary" />
                Upcoming Event
              </span>

              <span className="badge-glass border-accent/40 text-accent">
                5 September 2026
              </span>
            </div>

            {/* Title */}
            <h2 className="mb-3 text-3xl font-display font-bold md:text-5xl">
              Google{" "}
              <span className="gradient-text">
                DevFest Ranchi 2026
              </span>
            </h2>

            {/* Description */}
            <p className="mb-6 max-w-2xl text-muted-foreground">
              Join developers, students, tech enthusiasts, speakers,
              and community leaders for DevFest Ranchi 2026 — a day
              focused on technology, learning, networking, innovation,
              and community.
            </p>

            {/* Date & Location */}
            <div className="flex flex-wrap gap-4">

              {/* Date */}
              <div className="glass-card flex items-center gap-3 border border-primary/20 p-4">
                <Calendar
                  size={22}
                  className="shrink-0 text-primary"
                />

                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Date
                  </p>

                  <p className="font-semibold">
                    5 September 2026
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="glass-card flex items-center gap-3 border border-accent/20 p-4">
                <MapPin
                  size={22}
                  className="shrink-0 text-accent"
                />

                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
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
              className="mt-8 grid max-w-xl grid-cols-4 gap-3 md:gap-4"
            >
              {countdownBoxes.map((box) => (
                <div
                  key={box.label}
                  className="glass-card border border-primary/20 p-4 text-center"
                >
                  <p className="tabular-nums text-2xl font-display font-bold gradient-text md:text-4xl">
                    {String(box.value).padStart(2, "0")}
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                    {box.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">

              {/* Register */}
              <a
                href="mailto:saurabhanandseo@gmail.com?subject=DevFest%20Ranchi%202026%20-%20Registration%20Interest"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Register Interest
                <ArrowRight size={15} />
              </a>

              {/* Speaker */}
              <a
                href="mailto:saurabhanandseo@gmail.com?subject=DevFest%20Ranchi%202026%20-%20Speaker%20Application"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-5 py-3 text-sm font-medium transition-colors hover:bg-primary/10"
              >
                <Mic size={15} />
                Become a Speaker
              </a>

              {/* GDG */}
              <a
                href="https://gdg.community.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
              >
                <Users size={15} />
                Join GDG Ranchi
              </a>

            </div>

            {/* Venue Information */}
            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <div className="flex items-start gap-3">

                <MapPin
                  size={22}
                  className="mt-1 shrink-0 text-primary"
                />

                <div>
                  <p className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">
                    Event Venue
                  </p>

                  <h3 className="text-lg font-semibold">
                    BIT Mesra Auditorium
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Birla Institute of Technology, Mesra, Ranchi,
                    Jharkhand, India
                  </p>
                </div>

              </div>
            </div>

            {/* Community Highlights */}
            <div className="mt-10 border-t border-border/40 pt-6">

              <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
                Community Highlights
              </p>

              <div className="flex flex-wrap gap-2">
                {GDGS.map((gdg) => (
                  <span
                    key={gdg}
                    className="badge-glass"
                  >
                    {gdg}
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
