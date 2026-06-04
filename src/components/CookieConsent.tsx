import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const STORAGE_KEY = "cookie-consent-v2";

type Prefs = {
  essential: true; // always on
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  decidedAt: string;
};

const defaultPrefs: Prefs = {
  essential: true,
  analytics: false,
  marketing: false,
  functional: false,
  decidedAt: "",
};

const load = (): Prefs | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Prefs) : null;
  } catch {
    return null;
  }
};

const save = (p: Prefs) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {}
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(defaultPrefs);

  useEffect(() => {
    const t = setTimeout(() => {
      const existing = load();
      if (!existing) setVisible(true);
      else setPrefs(existing);
    }, 900);
    return () => clearTimeout(t);
  }, []);

  // Re-open via global event for "Cookie settings" links anywhere
  useEffect(() => {
    const handler = () => {
      const existing = load();
      if (existing) setPrefs(existing);
      setShowPrefs(true);
      setVisible(true);
    };
    window.addEventListener("open-cookie-settings", handler);
    return () => window.removeEventListener("open-cookie-settings", handler);
  }, []);

  const decide = (p: Prefs) => {
    const finalPrefs = { ...p, essential: true as const, decidedAt: new Date().toISOString() };
    save(finalPrefs);
    setPrefs(finalPrefs);
    setVisible(false);
    setShowPrefs(false);
  };

  const acceptAll = () =>
    decide({ essential: true, analytics: true, marketing: true, functional: true, decidedAt: "" });
  const rejectNonEssential = () =>
    decide({ essential: true, analytics: false, marketing: false, functional: false, decidedAt: "" });
  const saveCustom = () => decide(prefs);

  const categories: {
    key: keyof Omit<Prefs, "essential" | "decidedAt">;
    title: string;
    desc: string;
    locked?: boolean;
  }[] = [
    { key: "analytics", title: "Analytics", desc: "Help us understand site usage to improve content." },
    { key: "marketing", title: "Marketing", desc: "Personalized ads and remarketing campaigns." },
    { key: "functional", title: "Functional", desc: "Enable enhanced features like chat history and preferences." },
  ];

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
          <div className="glass-card p-4 sm:p-5 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.4)] border-primary/30">
            <div className="flex items-start gap-3">
              <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Cookie size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground font-medium leading-snug">
                  {showPrefs ? "Cookie preferences" : "We use cookies"}
                </p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  We use cookies to improve website performance, analytics, and user experience.
                </p>

                <AnimatePresence initial={false}>
                  {showPrefs && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 space-y-2.5 border-t border-border pt-3">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-xs font-semibold text-foreground">Essential</p>
                            <p className="text-[11px] text-muted-foreground leading-snug">
                              Required for the site to function. Always on.
                            </p>
                          </div>
                          <Switch checked disabled />
                        </div>
                        {categories.map((c) => (
                          <div key={c.key} className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-xs font-semibold text-foreground">{c.title}</p>
                              <p className="text-[11px] text-muted-foreground leading-snug">{c.desc}</p>
                            </div>
                            <Switch
                              checked={prefs[c.key]}
                              onCheckedChange={(v) => setPrefs((p) => ({ ...p, [c.key]: v }))}
                            />
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {!showPrefs ? (
                    <>
                      <button
                        onClick={acceptAll}
                        className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity"
                      >
                        Accept all
                      </button>
                      <button
                        onClick={rejectNonEssential}
                        className="px-4 py-2 rounded-full border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                      >
                        Reject non-essential
                      </button>
                      <button
                        onClick={() => setShowPrefs(true)}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                      >
                        <Settings size={12} /> Customize
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={saveCustom}
                        className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity"
                      >
                        Save preferences
                      </button>
                      <button
                        onClick={acceptAll}
                        className="px-4 py-2 rounded-full border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                      >
                        Accept all
                      </button>
                    </>
                  )}
                </div>
              </div>
              <button
                onClick={rejectNonEssential}
                aria-label="Close cookie banner"
                className="text-muted-foreground hover:text-foreground transition-colors -mr-1 -mt-1"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
