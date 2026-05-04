import { motion } from "framer-motion";

interface IPhoneMockupProps {
  src?: string;
  className?: string;
  label?: string;
}

/**
 * Realistic iPhone 15 Pro–style mockup with Dynamic Island,
 * side buttons and a live iframe preview of the site.
 */
const IPhoneMockup = ({
  src = "/",
  className = "",
  label = "Live preview",
}: IPhoneMockupProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -4 }}
      whileInView={{ opacity: 1, y: 0, rotate: -6 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative ${className}`}
      aria-label={label}
    >
      {/* Glow */}
      <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl rounded-[3rem] -z-10" />

      {/* Outer titanium frame */}
      <div className="relative w-[220px] h-[450px] rounded-[2.6rem] bg-gradient-to-br from-zinc-700 via-zinc-900 to-black p-[3px] shadow-[0_25px_60px_-15px_hsl(var(--primary)/0.6)]">
        {/* Inner bezel */}
        <div className="relative w-full h-full rounded-[2.45rem] bg-black p-[6px] overflow-hidden">
          {/* Side buttons */}
          <span className="absolute -left-[3px] top-20 h-8 w-[3px] rounded-l-md bg-zinc-700" />
          <span className="absolute -left-[3px] top-32 h-12 w-[3px] rounded-l-md bg-zinc-700" />
          <span className="absolute -left-[3px] top-48 h-12 w-[3px] rounded-l-md bg-zinc-700" />
          <span className="absolute -right-[3px] top-28 h-16 w-[3px] rounded-r-md bg-zinc-700" />

          {/* Screen */}
          <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-background">
            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 h-6 w-20 rounded-full bg-black flex items-center justify-end pr-2 gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
            </div>

            {/* Iframe — live website running */}
            <iframe
              src={src}
              title="Website running on iPhone"
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0 origin-top-left scale-[0.55]"
              style={{ width: "182%", height: "182%" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IPhoneMockup;
