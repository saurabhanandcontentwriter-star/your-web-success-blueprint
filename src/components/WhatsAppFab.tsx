import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const PHONE = "917209742159"; // +91 7209742159 — no plus, no spaces
const MESSAGE = encodeURIComponent(
  "Hi Saurabh, I came across your portfolio and would love to discuss a project.",
);

/**
 * Floating WhatsApp chat button — bottom-left to avoid the AI chat widget (bottom-right)
 * and the mobile FAB (bottom-right on mobile).
 */
const WhatsAppFab = () => {
  return (
    <motion.a
      href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Saurabh on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed left-4 z-[55] h-14 w-14 rounded-full flex items-center justify-center text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] ring-1 ring-white/20"
      style={{
        bottom: "calc(env(safe-area-inset-bottom) + 1rem)",
        background: "linear-gradient(135deg,#25D366,#128C7E)",
      }}
    >
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40 -z-10" />
      <MessageCircle size={24} fill="currentColor" strokeWidth={0} />
    </motion.a>
  );
};

export default WhatsAppFab;
