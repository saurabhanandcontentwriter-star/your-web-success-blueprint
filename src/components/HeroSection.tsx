import "@/styles/hero-modern.css";
import heroArtwork from "@/assets/saurabh-anand-seo-growth.png.asset.json";

const HeroSection = () => (
  <section className="reference-hero-image-only" aria-label="Saurabh Anand SEO and digital growth">
    <img
      className="reference-hero-art"
      src={heroArtwork.url}
      alt="Saurabh Anand SEO — AI-powered digital growth specialist"
      width={1599}
      height={900}
      fetchPriority="high"
      decoding="async"
    />
  </section>
);

export default HeroSection;
