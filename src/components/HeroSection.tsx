import { useState } from "react";

const HeroSection = () => {
  const [src, setSrc] = useState("/images/hero-reference.webp");

  return (
    <section className="home-hero-reference relative w-full overflow-hidden bg-[#020b18]">
      <div className="w-full">
        <img
          src={src}
          alt="Saurabh Anand SEO — AI-Powered Digital Growth"
          className="block h-auto w-full max-w-none object-cover"
          onError={() => setSrc("/images/saurabh-anand-hero.webp")}
        />
      </div>
    </section>
  );
};

export default HeroSection;
