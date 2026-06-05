import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const STORAGE_KEY = "sa_newsletter_popup_v1";
const DELAY_MS = 25_000;

const BENEFITS = [
  "Weekly AI SEO updates",
  "GEO strategies",
  "LLM optimization tips",
  "Google Search updates",
  "AI marketing insights",
  "Vibe Coding tutorials",
];

const NewsletterPopup = ({ embedded = false }: { embedded?: boolean }) => {
  const [open, setOpen] = useState(embedded);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (embedded) return;
    try { if (localStorage.getItem(STORAGE_KEY)) return; } catch {}
    const t = window.setTimeout(() => {
      setOpen(true);
      try { localStorage.setItem(STORAGE_KEY, "1"); } catch {}
    }, DELAY_MS);
    return () => window.clearTimeout(t);
  }, [embedded]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) { toast.error("Please enter your email."); return; }
    setSubmitted(true);
    toast.success("Subscribed! Check your inbox.");
  };

  const card = (
    <div className="relative w-full max-w-md glass-card border-primary/30 shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.5)] p-6 md:p-7">
      {!embedded && (
        <button onClick={() => setOpen(false)} aria-label="Close" className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground">
          <X size={18} />
        </button>
      )}

      {submitted ? (
        <div className="text-center py-6">
          <div className="mx-auto mb-3 h-14 w-14 rounded-full bg-primary/15 flex items-center justify-center">
            <CheckCircle2 className="text-primary" size={32} />
          </div>
          <h3 className="text-xl font-display font-bold mb-1">🎉 Welcome to the Future of Search!</h3>
          <p className="text-sm text-muted-foreground">Check your inbox for confirmation.</p>
        </div>
      ) : (
        <>
          <div className="text-center mb-4">
            <h2 className="text-xl md:text-2xl font-display font-bold mb-2">📩 Join 10,000+ AI & SEO Professionals</h2>
            <p className="text-sm text-muted-foreground">
              Weekly insights on AI SEO, GEO, LLM Optimization, Automation, Agentic AI & Future Search.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-1.5 mb-4">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <CheckCircle2 size={12} className="text-primary shrink-0" /> {b}
              </li>
            ))}
          </ul>

          <form onSubmit={submit} className="space-y-2.5">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full px-3 py-2 rounded-lg bg-secondary border border-border text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full px-3 py-2 rounded-lg bg-secondary border border-border text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold shadow-[0_10px_30px_-5px_hsl(var(--primary)/0.6)]">
              <Mail size={16} /> Subscribe Now
            </button>
          </form>
        </>
      )}
    </div>
  );

  if (embedded) return card;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[95] flex items-center justify-center p-4 bg-background/70 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ y: 30, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.97, opacity: 0 }}
            transition={{ type: "spring", stiffness: 240, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
          >
            {card}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;
