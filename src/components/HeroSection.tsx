import { useEffect, useState } from "react";

const HERO_PARTS = [
  "/images/hero-reference.b64.01",
  "/images/hero-reference.b64.02",
  "/images/hero-reference.b64.03",
  "/images/hero-reference.b64.04",
  "/images/hero-reference.b64.05",
];

const HeroSection = () => {
  const [src, setSrc] = useState("/images/saurabh-anand-hero.webp");

  useEffect(() => {
    let active = true;
    Promise.all(HERO_PARTS.map((part) => fetch(part).then((res) => res.text())))
      .then((parts) => {
        if (active) setSrc(`data:image/webp;base64,${parts.join("")}`);
      })
      .catch(() => {
        // Keep the existing portrait as a safe fallback if the reference asset cannot be assembled.
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="home-hero-reference relative w-full overflow-hidden bg-[#020b18]">
      <img
        src={src}
        alt="Saurabh Anand SEO — AI-Powered Digital Growth"
        className="block h-auto w-full max-w-none object-cover"
      />
    </section>
  );
};

export default HeroSection;
