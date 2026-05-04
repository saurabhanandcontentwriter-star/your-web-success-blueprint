import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "cookie-consent-v1";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
      } catch {
        setVisible(true);
      }
    }, 800);
    return () => clearTimeout(t);
  }, []);

  const decide = (choice: "accepted" | "rejected") => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {}
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 24 }}
          className="fixed left-1/2 -translate-x-1/2 bottom-4 z-[60] w-[calc(100%-1.5rem)] max-w-xl"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
        >
          <div className="glass-card p-4 sm:p-5 flex items-start gap-3 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.4)] border-primary/30">
            <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Cookie size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground font-medium leading-snug">We use cookies</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                This site uses cookies to improve your browsing experience and analyze traffic. You can accept or reject non-essential cookies.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <button
                  onClick={() => decide("accepted")}
                  className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity"
                >
                  Accept all
                </button>
                <button
                  onClick={() => decide("rejected")}
                  className="px-4 py-2 rounded-full border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                >
                  Reject
                </button>
              </div>
            </div>
            <button
              onClick={() => decide("rejected")}
              aria-label="Close cookie banner"
              className="text-muted-foreground hover:text-foreground transition-colors -mr-1 -mt-1"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
