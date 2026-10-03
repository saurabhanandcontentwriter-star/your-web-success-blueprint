import type { CSSProperties } from "react";
import { ArrowRight, BarChart3, Bot, FileText, Search, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import "@/styles/hero-modern.css";

const tools = [
  ["Google","https://cdn.simpleicons.org/google/4285F4"],
  ["Google Developers","https://upload.wikimedia.org/wikipedia/commons/0/05/Google_Developers_logo.svg"],
  ["GitHub","https://cdn.simpleicons.org/github/111827"],
  ["Semrush","https://cdn.simpleicons.org/semrush/FF642D"],
  ["Ahrefs","/logos/ahrefs.svg"],
  ["Google Analytics","https://cdn.simpleicons.org/googleanalytics/E37400"],
  ["Search Console","https://cdn.simpleicons.org/googlesearchconsole/4285F4"],
  ["Gemini","https://cdn.simpleicons.org/googlegemini/8E75FF"],
  ["Firebase","https://cdn.simpleicons.org/firebase/FFCA28"],
  ["Figma","https://cdn.simpleicons.org/figma/F24E1E"],
  ["WordPress","https://cdn.simpleicons.org/wordpress/21759B"],
  ["VS Code","/logos/visual-studio-code.svg"],
  ["Shopify","https://cdn.simpleicons.org/shopify/7AB55C"],
  ["React","https://cdn.simpleicons.org/react/61DAFB"],
  ["YouTube","https://cdn.simpleicons.org/youtube/FF0000"],
] as const;

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
        <img src="/saurabh-anand-hero.webp" alt="Saurabh Anand — SEO and digital growth specialist" />
      </div>

      <div className="sa-tools-orbit" aria-label="Technology tools orbit">
        {tools.map(([name, src], index) => (
          <div
            className="sa-tool sa-orbit-tool"
            key={name}
            style={{
              "--sa-angle": `${index * 24}deg`,
              "--sa-radius": "240px",
            } as CSSProperties}
            title={name}
          >
            <img className="sa-tool-logo" src={src} alt={name} loading="lazy" decoding="async" />
            <span className="sa-tool-name">{name}</span>
          </div>
        ))}
      </div>

      <div className="sa-card sa-card-performance">
        <small>SEO Performance</small><strong>+128%</strong><span>Organic Traffic ↗</span>
      </div>
      <div className="sa-card sa-card-visibility">
        <small>Search Visibility</small><strong>↑ 42.8%</strong><span>Growing steadily</span>
      </div>
    </div>
  </section>
);

export default HeroSection;
