/**
 * Decorative animated aurora background — pure CSS/SVG, no images.
 * Sits above the static PageBackground but below content.
 */
const AuroraBackground = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    {/* Soft animated gradient orbs */}
    <div
      className="absolute -top-32 -left-32 h-[60vw] w-[60vw] max-w-[700px] max-h-[700px] rounded-full opacity-40 blur-3xl animate-aurora-1"
      style={{ background: "radial-gradient(circle at 30% 30%, hsl(265 85% 65% / 0.55), transparent 60%)" }}
    />
    <div
      className="absolute top-1/3 -right-40 h-[55vw] w-[55vw] max-w-[650px] max-h-[650px] rounded-full opacity-35 blur-3xl animate-aurora-2"
      style={{ background: "radial-gradient(circle at 60% 40%, hsl(200 95% 55% / 0.5), transparent 60%)" }}
    />
    <div
      className="absolute bottom-[-20%] left-1/3 h-[50vw] w-[50vw] max-w-[600px] max-h-[600px] rounded-full opacity-30 blur-3xl animate-aurora-3"
      style={{ background: "radial-gradient(circle at 50% 50%, hsl(290 80% 60% / 0.45), transparent 60%)" }}
    />

    {/* Subtle grid + noise overlay */}
    <div
      className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--foreground) / 0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.6) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
      }}
    />
  </div>
);

export default AuroraBackground;
