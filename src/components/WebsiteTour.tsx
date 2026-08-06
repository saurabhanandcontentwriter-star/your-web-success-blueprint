import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const STORAGE_KEY = "site-tour-completed-v1";

type Step = {
  title: string;
  body: string;
  cta?: { label: string; action: () => void };
};

const WebsiteTour = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        if (!localStorage.getItem(STORAGE_KEY)) setOpen(true);
      } catch {
        setOpen(true);
      }
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  const finish = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setOpen(false);
    setStep(0);
  };

  const steps: Step[] = [
    {
      title: "Welcome to Saurabh Anand's AI SEO & Vibe Coding Portfolio",
      body: "A quick 30-second tour of what you'll find here — feel free to skip anytime.",
    },
    {
      title: "Explore AI SEO, GEO & LLM Optimization Expertise",
      body: "Discover how I help brands win in AI-driven search, generative engines, and large language models.",
    },
    {
      title: "View Projects & Case Studies",
      body: "Browse real client work, vibe-coded products, and measurable SEO growth stories.",
      cta: { label: "Open Portfolio", action: () => navigate("/portfolio") },
    },
    {
      title: "Read Latest AI SEO Insights",
      body: "Stay updated with my latest thinking on AI SEO, automation, and Google Developer Community work.",
      cta: { label: "About & Insights", action: () => navigate("/about") },
    },
    {
      title: "Chat with the AI Assistant",
      body: "Tap the chat bubble (bottom-right) to ask anything about my work, expertise, or how to collaborate.",
    },
    {
      title: "Book a Consultation or Hire Me",
      body: "Ready to grow? Use the Hire Me button or contact form to start a conversation.",
      cta: { label: "Contact Me", action: () => navigate("/contact") },
    },
  ];

  const total = steps.length;
  const current = steps[step];
  const isLast = step === total - 1;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-background/70 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="tour-title"
        >
          <motion.div
            initial={{ y: 40, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 40, scale: 0.96, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="glass-card relative w-full max-w-md p-6 sm:p-7 border-primary/30 shadow-[0_20px_60px_-10px_hsl(var(--primary)/0.5)]"
          >
            <button
              onClick={finish}
              aria-label="Skip tour"
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="h-8 w-8 rounded-full bg-primary/15 text-primary flex items-center justify-center">
                <Sparkles size={16} />
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                Step {step + 1} of {total}
              </span>
            </div>

            <h3 id="tour-title" className="text-lg sm:text-xl font-bold text-foreground leading-snug">
              {current.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{current.body}</p>

            {/* Progress dots */}
            <div className="mt-5 flex items-center gap-1.5">
              {steps.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === step ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between gap-2">
              <button
                onClick={finish}
                className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Skip tour
              </button>
              <div className="flex items-center gap-2">
                {step > 0 && (
                  <button
                    onClick={() => setStep((s) => s - 1)}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-full border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                  >
                    <ChevronLeft size={14} /> Back
                  </button>
                )}
                {current.cta && (
                  <button
                    onClick={() => {
                      current.cta!.action();
                      finish();
                    }}
                    className="px-3 py-2 rounded-full border border-primary/40 text-xs font-semibold text-primary hover:bg-primary/10 transition-colors"
                  >
                    {current.cta.label}
                  </button>
                )}
                <button
                  onClick={() => (isLast ? finish() : setStep((s) => s + 1))}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity"
                >
                  {isLast ? "Finish" : "Next"} {!isLast && <ChevronRight size={14} />}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WebsiteTour;
