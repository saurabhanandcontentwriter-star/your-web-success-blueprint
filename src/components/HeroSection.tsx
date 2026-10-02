import type { CSSProperties } from "react";
import { ArrowRight, BarChart3, Bot, FileText, Search, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import "@/styles/hero-modern.css";

const HeroSection = () => (
  <section className="sa-hero-new" aria-label="Saurabh Anand SEO and digital growth">
    <div className="sa-hero-grid" aria-hidden="true" />
    <div className="sa-hero-glow sa-hero-glow-a" aria-hidden="true" />
    <div className="sa-hero-glow sa-hero-glow-b" aria-hidden="true" />

    <div className="sa-hero-copy">
      <h1>SAURABH ANAND <span>SEO</span></h1>
      <h2>SEO &amp; DIGITAL GROWTH SPECIALIST</h2>
      <p>Helping brands grow with AI-powered SEO, data-driven strategies and high-performance websites.</p>

      <div className="sa-hero-services">
        <div><Search /><b>Technical SEO</b></div>
        <div><Bot /><b>AI SEO</b></div>
        <div><FileText /><b>Content Strategy</b></div>
        <div><BarChart3 /><b>Analytics</b></div>
        <div><TrendingUp /><b>Digital Growth</b></div>
      </div>

      <div className="sa-hero-actions">
        <a className="sa-hero-primary" href="mailto:saurabhanandshahi@gmail.com?subject=Hire%20Inquiry">Hire Me <ArrowRight size={18}/></a>
        <Link className="sa-hero-secondary" to="/portfolio">View My Work <ArrowRight size={18}/></Link>
      </div>

      <div className="sa-hero-site">🌐 <span>saurabhanandseo.com</span></div>

      <div className="sa-hero-stats">
        <div><strong>+128%</strong><span>Organic Growth</span></div>
        <div><strong>Top 3</strong><span>Keyword Rankings</span></div>
        <div><strong>10K+</strong><span>Leads Generated</span></div>
      </div>
    </div>

    <div className="sa-hero-visual">
      <div className="sa-orbit sa-orbit-one" aria-hidden="true" />
      <div className="sa-orbit sa-orbit-two" aria-hidden="true" />
      <div className="sa-portrait-glow" aria-hidden="true" />
      <div className="sa-portrait-frame">
        <img src="/images/saurabh-anand-hero.webp" alt="Saurabh Anand — SEO and digital growth specialist" />
      </div>
      <div className="sa-tools-orbit" aria-label="Technology tools orbit">
        <div className="sa-tool sa-orbit-tool" style={{"--sa-angle":"0deg","--sa-radius":"240px"} as CSSProperties}>G</div>
        <div className="sa-tool sa-orbit-tool" style={{"--sa-angle":"24deg","--sa-radius":"240px"} as CSSProperties}>GD</div>
        <div className="sa-tool sa-orbit-tool" style={{"--sa-angle":"48deg","--sa-radius":"240px"} as CSSProperties}>GH</div>
        <div className="sa-tool sa-orbit-tool" style={{"--sa-angle":"72deg","--sa-radius":"240px"} as CSSProperties}>S</div>
        <div className="sa-tool sa-orbit-tool" style={{"--sa-angle":"96deg","--sa-radius":"240px"} as CSSProperties}>aH</div>
        <div className="sa-tool sa-orbit-tool" style={{"--sa-angle":"120deg","--sa-radius":"240px"} as CSSProperties}>GA</div>
        <div className="sa-tool sa-orbit-tool" style={{"--sa-angle":"144deg","--sa-radius":"240px"} as CSSProperties}>SC</div>
        <div className="sa-tool sa-orbit-tool" style={{"--sa-angle":"168deg","--sa-radius":"240px"} as CSSProperties}>✦</div>
        <div className="sa-tool sa-orbit-tool" style={{"--sa-angle":"192deg","--sa-radius":"240px"} as CSSProperties}>🔥</div>
        <div className="sa-tool sa-orbit-tool" style={{"--sa-angle":"216deg","--sa-radius":"240px"} as CSSProperties}>F</div>
        <div className="sa-tool sa-orbit-tool" style={{"--sa-angle":"240deg","--sa-radius":"240px"} as CSSProperties}>W</div>
        <div className="sa-tool sa-orbit-tool" style={{"--sa-angle":"264deg","--sa-radius":"240px"} as CSSProperties}>&lt;/&gt;</div>
        <div className="sa-tool sa-orbit-tool" style={{"--sa-angle":"288deg","--sa-radius":"240px"} as CSSProperties}>S</div>
        <div className="sa-tool sa-orbit-tool" style={{"--sa-angle":"312deg","--sa-radius":"240px"} as CSSProperties}>⚛</div>
        <div className="sa-tool sa-orbit-tool" style={{"--sa-angle":"336deg","--sa-radius":"240px"} as CSSProperties}>▶</div>
      </div>
      <div className="sa-card sa-card-performance"><small>SEO Performance</small><strong>+128%</strong><span>Organic Traffic ↗</span></div>
      <div className="sa-card sa-card-visibility"><small>Search Visibility</small><strong>↑ 42.8%</strong><span>Growing steadily</span></div>
    </div>
  </section>
);

export default HeroSection;
