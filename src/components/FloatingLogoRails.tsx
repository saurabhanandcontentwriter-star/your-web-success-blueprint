import { Bot, Search, Linkedin, type LucideIcon } from "lucide-react";

type LogoItem =
  | { label: string; src: string; icon?: never }
  | { label: string; icon: LucideIcon; src?: never };

const leftLogos: LogoItem[] = [
  {
    label: "Google Developer Groups Ranchi",
    src: "https://developers.google.com/static/program/images/gdp/community-1-gdg.svg",
  },
  {
    label: "LinkedIn Creator",
    icon: Linkedin,
  },
];

const rightLogos: LogoItem[] = [
  {
    label: "SEO",
    icon: Search,
  },
  {
    label: "AI Automation",
    icon: Bot,
  },
];

const LogoButton = ({ item }: { item: LogoItem }) => {
  const Icon = "icon" in item ? item.icon : null;

  return (
    <a
      href="#top"
      aria-label={item.label}
      title={item.label}
      className="floating-logo-button"
    >
      {"src" in item ? (
        <img src={item.src} alt="" aria-hidden="true" />
      ) : Icon ? (
        <Icon aria-hidden="true" strokeWidth={2.2} />
      ) : null}
    </a>
  );
};

const FloatingLogoRails = () => (
  <aside className="floating-logo-rails" aria-label="Professional logos">
    <div className="floating-logo-rail floating-logo-rail-left">
      {leftLogos.map((item) => (
        <LogoButton key={item.label} item={item} />
      ))}
    </div>

    <div className="floating-logo-rail floating-logo-rail-right">
      {rightLogos.map((item) => (
        <LogoButton key={item.label} item={item} />
      ))}
    </div>
  </aside>
);

export default FloatingLogoRails;
