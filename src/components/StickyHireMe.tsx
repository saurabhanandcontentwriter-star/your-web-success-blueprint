import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

/**
 * Desktop sticky "Hire Me" CTA — appears on all pages.
 * Mobile already has the MobileFab with Hire Me, so we hide on small screens.
 */
const StickyHireMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 220, damping: 22 }}
      className="hidden md:block fixed right-5 bottom-24 z-[50]"
    >
      <Link
        to="/contact"
        className="group relative inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold shadow-[0_10px_30px_-5px_hsl(var(--primary)/0.6)] ring-1 ring-primary/40 hover:shadow-[0_15px_40px_-5px_hsl(var(--primary)/0.7)] transition-shadow"
        aria-label="Hire Saurabh Anand"
      >
        <span className="absolute inset-0 rounded-full bg-primary/30 blur-xl opacity-50 group-hover:opacity-80 transition-opacity -z-10" />
        <Sparkles size={16} />
        Hire Me
      </Link>
    </motion.div>
  );
};

export default StickyHireMe;
