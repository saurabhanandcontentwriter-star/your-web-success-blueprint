import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const STORAGE_KEY = "sa_exit_intent_shown_v1";
const INACTIVITY_MS = 45_000;

const TRUST = [
  "LinkedIn Top Voice 2024",
  "AI SEO Consultant",
  "Google Developer Community Contributor",
  "AI Search Specialist",
];

const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", website: "" });

  useEffect(() => {
    try { if (localStorage.getItem(STORAGE_KEY)) return; } catch {}

    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      setOpen(true);
      try { localStorage.setItem(STORAGE_KEY, "1"); } catch {}
    };

    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) show();
    };

    let lastY = window.scrollY;
    const onScroll = () => {
      if (window.innerWidth >= 768) return;
      const y = window.scrollY;
      if (y < lastY - 50 && y < 200) show();
      lastY = y;
    };

    let timer = window.setTimeout(show, INACTIVITY_MS);
    const resetTimer = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(show, INACTIVITY_MS);
    };

    history.pushState({ exitGuard: true }, "");
    const onPop = () => {
      show();
      history.pushState({ exitGuard: true }, "");
    };

    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("scroll", onScroll, { passive: true });
    ["mousemove", "keydown", "touchstart", "scroll"].forEach((ev) =>
      window.addEventListener(ev, resetTimer, { passive: true })
    );
    window.addEventListener("popstate", onPop);

    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
      ["mousemove", "keydown", "touchstart", "scroll"].forEach((ev) =>
        window.removeEventListener(ev, resetTimer)
      );
      window.removeEventListener("popstate", onPop);
      window.clearTimeout(timer);
    };
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please enter your name and email.");
      return;
    }
    setSubmitted(true);
    toast.success("Audit request received! Saurabh will be in touch shortly.");
    setTimeout(() => setOpen(false), 2200);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ y: 40, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.97, opacity: 0 }}
            transition={{ type: "spring", stiffness: 240, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg glass-card border-primary/30 shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.6)] p-6 md:p-8 max-h-[92vh] overflow-y-auto"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground"
            >
              <X size={18} />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-primary/15 flex items-center justify-center">
                  <CheckCircle2 className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">You're in! 🎉</h3>
                <p className="text-muted-foreground">Your free AI Visibility Audit request was received.</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-5">
                  <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">🚀 Before You Go…</h2>
                  <p className="text-sm md:text-base text-foreground/80">
                    Discover how <span className="text-primary font-semibold">AI SEO, GEO & LLM Optimization</span> can grow your business.
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-2">
                    Get a <strong>FREE AI Visibility Audit</strong> — rank in Google, AI Overviews, ChatGPT, Gemini, Claude & Perplexity.
                  </p>
                </div>

                <form onSubmit={submit} className="space-y-2.5">
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full Name" className="w-full px-3 py-2 rounded-lg bg-secondary border border-border text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email Address" className="w-full px-3 py-2 rounded-lg bg-secondary border border-border text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                  <div className="grid grid-cols-2 gap-2.5">
                    <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company" className="px-3 py-2 rounded-lg bg-secondary border border-border text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                    <input value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} placeholder="Website URL" className="px-3 py-2 rounded-lg bg-secondary border border-border text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>

                  <button type="submit" className="w-full mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold shadow-[0_10px_30px_-5px_hsl(var(--primary)/0.6)]">
                    <Sparkles size={16} /> Get My Free AI Audit
                  </button>
                  <button type="button" onClick={() => setOpen(false)} className="w-full text-xs text-muted-foreground hover:text-foreground py-1">
                    Continue Browsing
                  </button>
                </form>

                <div className="mt-4 grid grid-cols-2 gap-1.5">
                  {TRUST.map((t) => (
                    <div key={t} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                      <CheckCircle2 size={12} className="text-primary shrink-0" /> {t}
                    </div>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
