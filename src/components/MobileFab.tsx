import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Home, User, Briefcase, Image as ImageIcon, GraduationCap, Mail } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";

const items = [
  { label: "Home", path: "/", icon: Home },
  { label: "About", path: "/about", icon: User },
  { label: "Portfolio", path: "/portfolio", icon: Briefcase },
  { label: "Gallery", path: "/gallery", icon: ImageIcon },
  { label: "Education", path: "/education", icon: GraduationCap },
];

const MobileFab = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close on route change
  useEffect(() => setOpen(false), [location.pathname]);

  const go = (path: string) => {
    setOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="md:hidden fixed right-4 z-[55]"
      style={{ bottom: "calc(env(safe-area-inset-bottom) + 1rem)" }}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="absolute bottom-16 right-0 w-56 glass-card p-2 shadow-[0_15px_50px_-10px_hsl(var(--primary)/0.5)] border-primary/30"
          >
            {items.map(({ label, path, icon: Icon }) => (
              <button
                key={label}
                onClick={() => go(path)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
              >
                <Icon size={16} className="text-primary" /> {label}
              </button>
            ))}
            <ContactDialog
              trigger={
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors">
                  <Mail size={16} className="text-primary" /> Contact
                </button>
              }
            />
            <a
              href="tel:+917209742159"
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
            >
              <Phone size={16} className="text-primary" /> Call
            </a>
            <a
              href="mailto:saurabhanandseo@gmail.com?subject=Hire%20Inquiry"
              className="mt-1 w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.92 }}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-[0_10px_30px_-5px_hsl(var(--primary)/0.6)] flex items-center justify-center ring-1 ring-primary/40"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <Menu size={22} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default MobileFab;
