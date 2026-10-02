import { ArrowRight, BarChart3, Bot, FileText, Search, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import "@/styles/hero-modern.css";

const HeroSection = () => (
  <section className="sa-hero-new" aria-label="Saurabh Anand SEO and digital growth">
    <div className="sa-hero-grid" aria-hidden="true" />
    <div className="sa-hero-glow sa-hero-glow-a" aria-hidden="true" />
    <div className="sa-hero-glow sa-hero-glow-b" aria-hidden="true" />

    <div className="sa-hero-copy">
      <div className="sa-hero-kicker">SEO <i>•</i> AI <i>•</i> DATA <i>•</i> WEB</div>
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
      <div className="sa-tool sa-tool-google">G</div>
      <div className="sa-tool sa-tool-gdg">GD</div>
      <div className="sa-tool sa-tool-github">GH</div>
      <div className="sa-tool sa-tool-semrush">S</div>
      <div className="sa-tool sa-tool-ahrefs">aH</div>
      <div className="sa-tool sa-tool-analytics">GA</div>
      <div className="sa-tool sa-tool-console">SC</div>
      <div className="sa-tool sa-tool-gemini">✦</div>
      <div className="sa-tool sa-tool-firebase">🔥</div>
      <div className="sa-tool sa-tool-figma">F</div>
      <div className="sa-tool sa-tool-wordpress">W</div>
      <div className="sa-tool sa-tool-vscode">&lt;/&gt;</div>
      <div className="sa-tool sa-tool-shopify">S</div>
      <div className="sa-tool sa-tool-react">⚛</div>
      <div className="sa-tool sa-tool-youtube">▶</div>
      <div className="sa-card sa-card-performance"><small>SEO Performance</small><strong>+128%</strong><span>Organic Traffic ↗</span></div>
      <div className="sa-card sa-card-visibility"><small>Search Visibility</small><strong>↑ 42.8%</strong><span>Growing steadily</span></div>
    </div>
  </section>
);

export default HeroSection;
