import { motion, AnimatePresence } from "framer-motion";
import avatarImg from "@/assets/ai-avatar.jpg";

export type AvatarState = "idle" | "listening" | "thinking" | "speaking";

interface Props {
  state?: AvatarState;
  size?: number; // px
  showWave?: boolean;
  className?: string;
}

/**
 * Premium AI assistant avatar with animated states:
 * - idle: gentle float + soft glow + periodic scanline
 * - listening: concentric mic-pulse rings
 * - thinking: orbiting particles
 * - speaking: pulsing audio-wave rings (lip-sync feel)
 * - showWave: friendly hand wave badge (first visit)
 */
const AIAvatar = ({ state = "idle", size = 40, showWave = false, className = "" }: Props) => {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Holographic outer glow */}
      <span
        className="absolute inset-0 rounded-full blur-md opacity-70"
        style={{
          background: "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))",
        }}
      />

      {/* Listening: concentric pulse rings */}
      {state === "listening" && (
        <>
          <span className="absolute -inset-1 rounded-full border border-primary/60 animate-ping" />
          <span
            className="absolute -inset-2 rounded-full border border-accent/40 animate-ping"
            style={{ animationDelay: "0.4s" }}
          />
        </>
      )}

      {/* Speaking: animated audio-wave ring (pulsing scale) */}
      {state === "speaking" && (
        <motion.span
          className="absolute -inset-1 rounded-full border-2 border-primary/80"
          animate={{ scale: [1, 1.15, 1], opacity: [0.8, 0.2, 0.8] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Thinking: orbiting particles */}
      {state === "thinking" && (
        <motion.span
          className="absolute inset-0 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
        >
          <span
            className="absolute h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]"
            style={{ top: -2, left: "50%", transform: "translateX(-50%)" }}
          />
          <span
            className="absolute h-1 w-1 rounded-full bg-accent shadow-[0_0_8px_hsl(var(--accent))]"
            style={{ bottom: 0, right: 0 }}
          />
        </motion.span>
      )}

      {/* Avatar image (circle-cropped) */}
      <div
        className="relative h-full w-full rounded-full overflow-hidden ring-2 ring-primary/40"
        style={{ boxShadow: "0 0 18px hsl(var(--primary) / 0.45)" }}
      >
        <img
          src={avatarImg}
          alt="Saurabh's AI Assistant avatar"
          className="absolute inset-0 h-full w-full object-cover scale-[1.15] object-top"
          draggable={false}
        />

        {/* Scanline sweep — subtle AI 'alive' effect */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute left-0 right-0 h-1/2 mix-blend-screen"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, hsl(var(--primary) / 0.25) 50%, transparent 100%)",
          }}
          initial={{ y: "-100%" }}
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.4 }}
        />

        {/* Speaking lip flash — quick pulses near mouth area */}
        {state === "speaking" && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full bg-primary/40 mix-blend-screen blur-[3px]"
            style={{ bottom: "26%", width: "35%", height: "8%" }}
            animate={{ opacity: [0.2, 0.8, 0.2], scaleX: [0.9, 1.1, 0.9] }}
            transition={{ duration: 0.35, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>

      {/* First-visit wave badge */}
      <AnimatePresence>
        {showWave && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-background border border-primary/40 shadow flex items-center justify-center text-sm"
            aria-hidden
          >
            <motion.span
              animate={{ rotate: [0, 18, -10, 18, -10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.4 }}
              style={{ display: "inline-block", transformOrigin: "70% 70%" }}
            >
              👋
            </motion.span>
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AIAvatar;
