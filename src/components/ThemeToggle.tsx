import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

interface Props {
  className?: string;
  size?: number;
}

const ThemeToggle = ({ className = "", size = 18 }: Props) => {
  const { resolved, toggle } = useTheme();
  const isDark = resolved === "dark";
  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      className={`relative inline-flex items-center justify-center h-9 w-9 rounded-full border border-border/50 bg-secondary/60 backdrop-blur-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.2 }}
          className="inline-flex"
        >
          {isDark ? <Moon size={size} /> : <Sun size={size} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
