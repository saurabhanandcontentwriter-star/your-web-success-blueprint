import spaceBg from "@/assets/space-bg.jpg";
import portfolioBg from "@/assets/portfolio-bg.jpg";

export type BackgroundVariant = "default" | "portfolio";

const VARIANTS: Record<BackgroundVariant, string> = {
  default: spaceBg,
  portfolio: portfolioBg,
};

interface PageBackgroundProps {
  variant?: BackgroundVariant;
  opacity?: number; // 0-100, defaults to 30
}

const PageBackground = ({ variant = "default", opacity = 30 }: PageBackgroundProps) => (
  <>
    <div
      className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${VARIANTS[variant]})`, opacity: opacity / 100 }}
    />
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/80 to-background" />
  </>
);

export default PageBackground;
