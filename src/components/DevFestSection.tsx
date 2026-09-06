import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Calendar,
  Mic,
  Users,
  ArrowRight,
  MapPin,
  Sparkles,
  X,
  Info,
} from "lucide-react";
import bitMesraImg from "@/assets/devfest-bit-mesra.jpg";

/* =========================================================
   EVENT CONFIGURATION
========================================================= */

const TARGET = new Date("2026-10-31T09:00:00+05:30").getTime();

// Event remains LIVE for 24 hours
const EVENT_END = TARGET + 24 * 60 * 60 * 1000;

type Phase = "upcoming" | "live" | "past";

const getPhase = (now: number): Phase => {
  if (now < TARGET) return "upcoming";
  if (now < EVENT_END) return "live";
  return "past";
};

/* =========================================================
   COUNTDOWN
========================================================= */

const getCountdown = () => {
  const difference = TARGET - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: true,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    expired: false,
  };
};

/* =========================================================
   DATA
========================================================= */

const GDGS = [
  "GDG Ranchi",
  "GDG Delhi",
  "GDG Noida",
  "GDG Gurugram",
  "GDG Patna",
];

const FOCUS_AREAS = [
  "Google Technologies",
  "AI & Gemini",
  "Cloud",
  "Developer Ecosystem",
];

const ABOUT_DEVFEST = {
  title: "About Google DevFest Ranchi 2026",

  body: `Google DevFest Ranchi 2026 is coming soon to BIT Mesra Auditorium, Ranchi on 31st October 2026, bringing developers, students, designers, founders and tech enthusiasts together for a full day of learning, networking and innovation.

DevFest is the largest annual community-led developer conference series organised worldwide by Google Developer Groups (GDG). The 2026 edition of DevFest Ranchi follows the theme “Community 2.0” — celebrating the next chapter of GDG communities in Jharkhand and beyond.

Attendees can look forward to deep-dive sessions on Android, Web, Cloud, Firebase, Flutter and AI with Gemini; live demos; expert talks; networking opportunities; and community-led workshops featuring GDG organisers, Google Developer Experts and local technology leaders.

Whether you are building your first app, scaling a startup, or exploring AI and agentic workflows, DevFest Ranchi 2026 is an opportunity to learn, connect, share ideas and grow with the Google developer ecosystem. Get ready for an exciting community-driven technology experience.`,
};

/* =========================================================
   COMPONENT
========================================================= */

const DevFestSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  const [phase, setPhase] = useState<Phase>(() =>
    getPhase(Date.now())
  );

  const [countdown, setCountdown] = useState(getCountdown());

  /* =======================================================
     LIVE TIMER
  ======================================================= */

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdown());
      setPhase(getPhase(Date.now()));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  /* =======================================================
     STATUS
  ======================================================= */

  const statusBadge =
    phase === "upcoming"
      ? "🚀 Coming Soon"
      : phase === "live"
        ? "🔴 Happening Today"
        : "✅ Event Completed";

  return (
    <section id="devfest" className="py-24">
      <div className="container mx-auto px-6">

        <div className="glass-card p-8 md:p-12 border-primary/30 relative overflow-hidden">

          {/* Background Effects */}

          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />

          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative">

            {/* =================================================
                EVENT BADGES
            ================================================= */}

            <div className="flex flex-wrap items-center gap-3 mb-4">

              <span className="badge-glass border-primary/40">
                <Calendar size={14} className="text-primary" />
                {statusBadge}
              </span>

              <span className="badge-glass border-accent/40 text-accent">
                🗓️ 31st October 2026
              </span>

              <span className="badge-glass border-border/60">
                <MapPin size={14} className="text-accent" />
                📍 BIT Mesra Auditorium, Ranchi
              </span>

              <span className="badge-glass border-accent/40">
                <Sparkles size={14} className="text-primary" />
                🚀 Community 2.0
              </span>

            </div>

            {/* =================================================
                TITLE
            ================================================= */}

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

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p className="text-muted-foreground max-w-2xl mb-4">

              {phase === "upcoming" ? (
                <>
                  <strong className="text-foreground">
                    Google DevFest Ranchi 2026 is coming soon on 31st October
                    2026 at BIT Mesra Auditorium, Ranchi.
                  </strong>{" "}
                  Join developers, students, designers, and technology
                  enthusiasts for engaging sessions on Google technologies,
                  AI & Gemini, Cloud, and the wider developer ecosystem.
                  Get ready to learn, connect, and explore the latest
                  innovations together.
                </>
              ) : phase === "live" ? (
                <>
                  <strong className="text-foreground">
                    Google DevFest Ranchi 2026 is happening today
                  </strong>{" "}
                  at{" "}
                  <strong className="text-foreground">
                    BIT Mesra Auditorium, Ranchi
                  </strong>
                  . Enjoy a full day of Google technologies, AI, Cloud,
                  talks, workshops and community networking.
                </>
              ) : (
                <>
                  Google DevFest Ranchi 2026 took place on{" "}
                  <strong className="text-foreground">
                    31st October 2026
                  </strong>{" "}
                  at{" "}
                  <strong className="text-foreground">
                    BIT Mesra Auditorium, Ranchi
                  </strong>
                  . Thank you to everyone who joined the sessions on Google
                  technologies, AI and Gemini, Cloud and the wider developer
                  ecosystem.
                </>
              )}

            </p>

            {/* =================================================
                COUNTDOWN
            ================================================= */}

            {phase === "upcoming" && (

              <div className="my-10">

                <div className="text-center mb-6">

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                    🚀 Event Countdown
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold">
                    DevFest Ranchi 2026 Starts In
                  </h3>

                  <p className="text-sm text-muted-foreground mt-2">
                    31st October 2026 • 9:00 AM IST
                  </p>

                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">

                  {/* DAYS */}

                  <div className="glass-card p-5 md:p-6 text-center border-primary/20 hover:border-primary/50 transition-all">

                    <div className="text-4xl md:text-5xl font-bold gradient-text tabular-nums">
                      {String(countdown.days).padStart(2, "0")}
                    </div>

                    <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Days
                    </div>

                  </div>

                  {/* HOURS */}

                  <div className="glass-card p-5 md:p-6 text-center border-primary/20 hover:border-primary/50 transition-all">

                    <div className="text-4xl md:text-5xl font-bold gradient-text tabular-nums">
                      {String(countdown.hours).padStart(2, "0")}
                    </div>

                    <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Hours
                    </div>

                  </div>

                  {/* MINUTES */}

                  <div className="glass-card p-5 md:p-6 text-center border-primary/20 hover:border-primary/50 transition-all">

                    <div className="text-4xl md:text-5xl font-bold gradient-text tabular-nums">
                      {String(countdown.minutes).padStart(2, "0")}
                    </div>

                    <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Minutes
                    </div>

                  </div>

                  {/* SECONDS */}

                  <div className="glass-card p-5 md:p-6 text-center border-primary/20 hover:border-primary/50 transition-all">

                    <div className="text-4xl md:text-5xl font-bold gradient-text tabular-nums">
                      {String(countdown.seconds).padStart(2, "0")}
                    </div>

                    <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Seconds
                    </div>

                  </div>

                </div>

                <p className="text-center text-xs text-muted-foreground mt-5">
                  Get ready to learn, connect, build and grow with the
                  Google developer community.
                </p>

              </div>
            )}

            {/* =================================================
                LIVE EVENT
            ================================================= */}

            {phase === "live" && (

              <div className="my-8 p-7 rounded-2xl border border-primary/30 bg-primary/5 text-center">

                <div className="text-4xl mb-3">
                  🔴
                </div>

                <h3 className="text-2xl md:text-3xl font-bold">
                  Google DevFest Ranchi 2026 is Live!
                </h3>

                <p className="text-muted-foreground mt-2">
                  Welcome to DevFest Ranchi 2026. Enjoy the sessions,
                  workshops, networking and community experience.
                </p>

              </div>
            )}

            {/* =================================================
                ABOUT GOOGLE DEVFEST
            ================================================= */}

            <p className="text-sm text-muted-foreground max-w-2xl mb-2">

              <strong className="text-foreground">
                About Google DevFest:
              </strong>{" "}
              DevFest is the largest annual community-led developer
              conference series, organised worldwide by Google Developer
              Groups (GDG). Every edition brings developers, students,
              designers and founders together for hands-on sessions on
              Android, Web, Cloud, Firebase, Flutter and AI with Gemini.

            </p>

            {/* =================================================
                FOCUS AREAS
            ================================================= */}

            <div className="flex flex-wrap gap-2 mb-2">

              {FOCUS_AREAS.map((f) => (
                <span key={f} className="badge-glass">
                  {f}
                </span>
              ))}

            </div>

            {/* =================================================
                VENUE IMAGE
            ================================================= */}

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

            {/* =================================================
                ABOUT BUTTON
            ================================================= */}

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setShowPopup(true)}
              className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full border border-primary/40 text-sm font-medium hover:bg-primary/10 transition-colors cursor-pointer"
              aria-label="Open About DevFest popup"
            >
              <Info size={16} className="text-primary" />
              About DevFest
            </motion.button>

            {/* =================================================
                CTA BUTTONS
            ================================================= */}

            <div className="flex flex-wrap gap-3 mt-8">

              <a
                href="mailto:saurabhanandseo@gmail.com?subject=DevFest%20Ranchi%202026%20-%20Registration%20Interest"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                {phase === "past"
                  ? "Get Event Highlights"
                  : phase === "live"
                    ? "Join Now"
                    : "Register Interest"}

                <ArrowRight size={15} />
              </a>

              <a
                href="mailto:saurabhanandseo@gmail.com?subject=DevFest%20Ranchi%202026%20-%20Speaker%20Application"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-primary/40 text-sm font-medium hover:bg-primary/10 transition-colors"
              >
                <Mic size={15} />
                {phase === "past"
                  ? "Share Feedback"
                  : "Become a Speaker"}
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

            {/* =================================================
                COMMUNITY
            ================================================= */}

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

      {/* =====================================================
          ABOUT POPUP
      ===================================================== */}

      <AnimatePresence>

        {showPopup && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="devfest-popup-title"
          >

            <motion.div
              initial={{
                scale: 0.92,
                opacity: 0,
                y: 20,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.92,
                opacity: 0,
                y: 20,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
              }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card w-full max-w-2xl max-h-[85vh] overflow-y-auto border-primary/30 p-6 md:p-10 relative"
            >

              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Close About DevFest popup"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-4">

                <svg
                  className="w-8 h-8 md:w-10 md:h-10 shrink-0"
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

                <h3
                  id="devfest-popup-title"
                  className="text-2xl md:text-3xl font-display font-bold"
                >
                  {ABOUT_DEVFEST.title}
                </h3>

              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed whitespace-pre-line">

                {ABOUT_DEVFEST.body
                  .split("\n\n")
                  .map((paragraph, idx) => (
                    <p key={idx}>
                      {paragraph}
                    </p>
                  ))}

              </div>

              <div className="mt-6 flex flex-wrap gap-2">

                {FOCUS_AREAS.map((f) => (
                  <span key={f} className="badge-glass">
                    {f}
                  </span>
                ))}

              </div>

              <div className="mt-8 flex flex-wrap gap-3">

                <a
                  href="mailto:saurabhanandseo@gmail.com?subject=DevFest%20Ranchi%202026%20-%20Registration%20Interest"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Register Interest
                  <ArrowRight size={15} />
                </a>

                <button
                  onClick={() => setShowPopup(false)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-secondary transition-colors"
                >
                  Close
                </button>

              </div>

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>

    </section>
  );
};

export default DevFestSection;
