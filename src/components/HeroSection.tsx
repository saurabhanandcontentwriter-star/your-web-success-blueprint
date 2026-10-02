import "@/styles/hero-modern.css";

const HeroSection = () => (
  <section className="reference-hero-image-only" aria-label="Saurabh Anand SEO and digital growth">
    <img
      className="reference-hero-art"
      src="/images/hero-reference.webp?v=20261002-hero-final"
      alt="Saurabh Anand SEO — AI-powered digital growth specialist"
      width={1599}
      height={900}
      fetchPriority="high"
      decoding="async"
    />
  </section>
);

export default HeroSection;
