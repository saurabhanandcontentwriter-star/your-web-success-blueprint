import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { logLead } from "@/lib/leadLog";
import "@/styles/home-hero.css";
import "@/styles/hero-modern.css";

const HeroSection = () => (
  <section className="reference-hero-image-only" aria-label="Saurabh Anand SEO and digital growth">
    <img
      className="reference-hero-art"
      src="/images/hero-reference.webp"
      alt="Saurabh Anand SEO — AI-powered digital growth specialist"
    />

    <div className="reference-hero-hotspots" aria-label="Hero navigation">
      <Link className="reference-hotspot hs-home" to="/" aria-label="Home" />
      <Link className="reference-hotspot hs-about" to="/about" aria-label="About" />
      <Link className="reference-hotspot hs-services" to="/skills" aria-label="Services" />
      <Link className="reference-hotspot hs-experience" to="/experience" aria-label="Experience" />
      <Link className="reference-hotspot hs-gallery" to="/gallery" aria-label="Gallery" />
      <Link className="reference-hotspot hs-education" to="/education" aria-label="Education" />
      <Link className="reference-hotspot hs-devfest" to="/devfest-ranchi" aria-label="DevFest" />
      <Link className="reference-hotspot hs-contact" to="/contact" aria-label="Contact" />
      <a
        className="reference-hotspot hs-hire"
        href="mailto:saurabhanandshahi@gmail.com?subject=Hire%20Inquiry"
        onClick={() => logLead({ event: "hire_click" })}
        aria-label="Hire Me"
      />
      <a
        className="reference-hotspot hs-hero-hire"
        href="mailto:saurabhanandshahi@gmail.com?subject=Hire%20Inquiry"
        onClick={() => logLead({ event: "hire_click" })}
        aria-label="Hire Me"
      />
      <Link className="reference-hotspot hs-work" to="/portfolio" aria-label="View My Work" />
      <a className="reference-hotspot hs-site" href="https://saurabhanandseo.com/" aria-label="saurabhanandseo.com" />
    </div>

    <div className="reference-hero-sr">
      <h1>Saurabh Anand SEO</h1>
      <p>SEO & Digital Growth Specialist helping brands grow with AI-powered SEO, data-driven strategies and high-performance websites.</p>
      <Link to="/portfolio">View My Work <ArrowRight size={14} /></Link>
    </div>
  </section>
);

export default HeroSection;
