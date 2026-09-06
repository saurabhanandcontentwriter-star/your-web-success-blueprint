import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Calendar, Mic, Users, ArrowRight, MapPin, Sparkles, X, Info } from "lucide-react";
import bitMesraImg from "@/assets/devfest-bit-mesra.jpg";

const TARGET = new Date("2026-09-05T00:00:00").getTime();
const EVENT_END = TARGET + 86400000; // auto-switches 24 hours after the event starts

type Phase = "upcoming" | "live" | "past";

const getPhase = (now: number): Phase =>
  now < TARGET ? "upcoming" : now < EVENT_END ? "live" : "past";

const currentPhase = getPhase(Date.now());

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

const ABOUT_DEVFEST = {
  title: "About Google DevFest Ranchi 2026",
  body: `DevFest is the largest annual community-led developer conference series organised worldwide by Google Developer Groups (GDG). DevFest Ranchi 2026 brings developers, students, designers, founders and tech enthusiasts together for a full day of learning, networking and hands-on inspiration.

In 2026 the event lands at BIT Mesra Auditorium, Ranchi on 31st October 2026 with the theme “Community 2.0” — a celebration of the next chapter of GDG communities in Jharkhand and beyond.

Expect deep-dive sessions on Android, Web, Cloud, Firebase, Flutter and AI with Gemini; live demos; speaker stories; networking breaks; and community-led workshops led by GDG organisers, Google Developer Experts and local tech leaders.

Whether you are building your first app, scaling a startup, or exploring AI and agentic workflows, DevFest Ranchi is the place to learn, share and grow with the Google developer ecosystem.`
};

const DevFestSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const phase = currentPhase;

  const statusBadge =
    phase === "upcoming"
      ? "📅 Upcoming Event"
      : phase === "live"
      ? "🔴 Happening Today"
      : "✅ Event Completed";

  return (
    <section id="devfest" className="py-24">
      <div className="container mx-auto px-6">
        <div className="glass-card p-8 md:p-12 border-primary/30 relative overflow-hidden">

          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />

          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative">

            <div className="flex flex-wrap items-center gap-3 mb-4">

              <span className="badge-glass border-primary/40">
                <Calendar size={14} className="text-primary" /> {statusBadge}
              </span>

              <span className="badge-glass border-accent/40 text-accent">
                🗓️ 31st October 2026
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

            <p className="text-muted-foreground max-w-2xl mb-4">
              {phase === "past" ? (
                <>
                  Google DevFest Ranchi 2026 took place on{" "}
                  <strong className="text-foreground">5 September 2026</strong> at{" "}
                  <strong className="text-foreground">BIT Mesra Auditorium, Ranchi</strong>
                  . Thank you to everyone who joined the sessions on Google
                  technologies, AI and Gemini, Cloud and the wider developer
                  ecosystem.
                </>
              ) : phase === "live" ? (
                <>
                  DevFest Ranchi 2026 is happening{" "}
                  <strong className="text-foreground">today</strong> at{" "}
                  <strong className="text-foreground">BIT Mesra Auditorium, Ranchi</strong>{" "}
                  — a full day of Google technologies, AI, Cloud, talks,
                  workshops and community networking.
                </>
              ) : (
                <>
                  Join us on{" "}
                  <strong className="text-foreground">5 September 2026</strong> at{" "}
                  <strong className="text-foreground">BIT Mesra Auditorium, Ranchi</strong>{" "}
                  for a full day of Google technologies, AI, Cloud, and the
                  developer ecosystem — talks, workshops, networking, and
                  community magic.
                </>
              )}
            </p>

            <p className="text-sm text-muted-foreground max-w-2xl mb-2">
              <strong className="text-foreground">About Google DevFest:</strong>{" "}
              DevFest is the largest annual community-led developer conference
              series, organised worldwide by Google Developer Groups (GDG).
              Every edition brings developers, students, designers and founders
              together for hands-on sessions on Android, Web, Cloud, Firebase,
              Flutter and AI with Gemini — led by GDG organisers, Google
              Developer Experts and local tech leaders.
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

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setShowPopup(true)}
              className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full border border-primary/40 text-sm font-medium hover:bg-primary/10 transition-colors cursor-pointer"
              aria-label="Open About DevFest popup"
            >
              <Info size={16} className="text-primary" /> About DevFest
            </motion.button>

            {phase === "past" && (
              <p className="mt-4 text-sm text-muted-foreground">
                Stay tuned for highlights and photos from DevFest Ranchi 2026.
              </p>
            )}

            <div className="flex flex-wrap gap-3 mt-8">

              <a
                href={
                  phase === "past"
                    ? "mailto:saurabhanandseo@gmail.com?subject=DevFest%20Ranchi%202026%20-%20Event%20Highlights"
                    : "mailto:saurabhanandseo@gmail.com?subject=DevFest%20Ranchi%202026%20-%20Registration%20Interest"
                }
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                {phase === "past" ? "Get Event Highlights" : phase === "live" ? "Join Now" : "Register Interest"} <ArrowRight size={15} />
              </a>

              <a
                href="mailto:saurabhanandseo@gmail.com?subject=DevFest%20Ranchi%202026%20-%20Speaker%20Application"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-primary/40 text-sm font-medium hover:bg-primary/10 transition-colors"
              >
                <Mic size={15} /> {phase === "past" ? "Share Feedback" : "Become a Speaker"}
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
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
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
                <h3 id="devfest-popup-title" className="text-2xl md:text-3xl font-display font-bold">
                  {ABOUT_DEVFEST.title}
                </h3>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed whitespace-pre-line">
                {ABOUT_DEVFEST.body.split("\n\n").map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
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
                  Register Interest <ArrowRight size={15} />
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
