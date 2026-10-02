import { motion } from "framer-motion";
import { ArrowRight, BarChart3, BrainCircuit, Code2, Database, Download, Github, Globe2, Linkedin, Search, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState, type PointerEvent } from "react";
import "@/styles/home-hero.css";
import "@/styles/hero-modern.css";

const ROLES = ["SEO & Digital Growth Specialist", "AI SEO Strategist", "Data Analytics Professional", "Technical SEO Specialist"];
const useTyped = () => {
  const [i, setI] = useState(0), [text, setText] = useState(""), [del, setDel] = useState(false);
  useEffect(() => {
    const full = ROLES[i % ROLES.length];
    const t = setTimeout(() => {
      if (!del) {
        if (text.length < full.length) setText(full.slice(0, text.length + 1));
        else setDel(true);
      } else if (text.length > 0) setText(full.slice(0, text.length - 1));
      else { setDel(false); setI(p => p + 1); }
    }, del ? 30 : text.length === full.length ? 1500 : 55);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return text;
};

const logoItems = [
  { cls: "hero-logo-google", mark: "G", label: "Google", tone: "google" },
  { cls: "hero-logo-gdeveloper", mark: "GD", label: "Google Developer", tone: "dev" },
  { cls: "hero-logo-github", label: "GitHub", tone: "github", icon: Github },
  { cls: "hero-logo-semrush", mark: "S", label: "Semrush", tone: "semrush" },
  { cls: "hero-logo-ahrefs", mark: "aH", label: "Ahrefs", tone: "ahrefs" },
  { cls: "hero-logo-analytics", mark: "GA", label: "Analytics", tone: "analytics" },
  { cls: "hero-logo-search", mark: "SC", label: "Search Console", tone: "search" },
  { cls: "hero-logo-gemini", mark: "✦", label: "Gemini", tone: "gemini" },
  { cls: "hero-logo-firebase", mark: "F", label: "Firebase", tone: "firebase" },
  { cls: "hero-logo-figma", mark: "F", label: "Figma", tone: "figma" },
  { cls: "hero-logo-wordpress", mark: "W", label: "WordPress", tone: "wordpress" },
  { cls: "hero-logo-vscode", mark: "⌁", label: "VS Code", tone: "vscode" },
  { cls: "hero-logo-shopify", mark: "S", label: "Shopify", tone: "shopify" },
  { cls: "hero-logo-react", mark: "⚛", label: "React", tone: "react" },
  { cls: "hero-logo-youtube", mark: "▶", label: "YouTube", tone: "youtube" },
];


const HeroSection = () => {
  const typed = useTyped();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const move = (e: PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPointer({
      x: ((e.clientX - r.left) / r.width - .5) * 2,
      y: ((e.clientY - r.top) / r.height - .5) * 2,
    });
  };

  return (
    <section
      className="home-hero-3d hero-reference-exact relative min-h-[100svh] flex items-center overflow-hidden pt-24 pb-10"
      onPointerMove={move}
      onPointerLeave={() => setPointer({ x: 0, y: 0 })}
    >
      <div className="home-hero-grid absolute inset-0 pointer-events-none" />
      <div className="home-hero-noise absolute inset-0 pointer-events-none" />
      <div className="hero-reference-bg-glow" />

      <div className="container relative z-10 mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-[.82fr_1.18fr] gap-4 xl:gap-8 items-center">
          <motion.div
            className="hero-reference-copy space-y-5"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            style={{ transform: `translate3d(${pointer.x * 3}px,${pointer.y * 2}px,0)` }}
          >
            <div className="hero-kicker"><span>SEO</span><i>•</i><span>AI</span><i>•</i><span>DATA</span><i>•</i><span>WEB</span></div>
            <div>
              <h1 className="home-hero-title hero-reference-title">
                SAURABH ANAND<br />
                <span className="gradient-text">SEO</span>
              </h1>
              <h2 className="hero-reference-subtitle">SEO &amp; DIGITAL GROWTH SPECIALIST</h2>
            </div>
            <p className="hero-reference-description">
              Helping brands grow with AI-powered SEO, data-driven strategies and high-performance websites.
            </p>

            <div className="hero-reference-services">
              <span><Search /> <b>Technical</b><small>SEO</small></span>
              <span><Sparkles /> <b>AI SEO</b><small>&nbsp;</small></span>
              <span><Code2 /> <b>Content</b><small>Strategy</small></span>
              <span><BarChart3 /> <b>Analytics</b><small>&nbsp;</small></span>
              <span><Globe2 /> <b>Digital</b><small>Growth</small></span>
            </div>

            <div className="hero-reference-actions">
              <a href="#selected-work" className="home-hero-primary">Hire Me <ArrowRight size={17} /></a>
              <Link to="/portfolio" className="home-hero-secondary">View My Work <span className="hero-play-dot">▶</span></Link>
            </div>

            <div className="hero-site-pill hero-reference-site"><Globe2 size={17} /><strong>saurabhanandseo.com</strong><ArrowRight size={14} /></div>

            <div className="hero-reference-stats">
              <div><strong>↗ +128%</strong><span>Organic Growth</span></div>
              <div><strong>🏆 Top 3</strong><span>Keyword Rankings</span></div>
              <div><strong>👥 10K+</strong><span>Leads Generated</span></div>
            </div>

            <div className="hero-reference-typed"><span>I&apos;m</span><strong>{typed}</strong><i className="home-hero-cursor" /></div>
          </motion.div>

          <motion.div
            className="hero-reference-visual relative mx-auto w-full"
            initial={{ opacity: 0, scale: .96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .9, delay: .1 }}
          >
            <div className="hero-reference-stage" style={{ transform: `perspective(1500px) rotateX(${pointer.y * -1.2}deg) rotateY(${pointer.x * 2.5}deg)` }}>
              <div className="hero-reference-circuit" />
              <div className="hero-reference-orbit orbit-a" />
              <div className="hero-reference-orbit orbit-b" />

              <div
                className="hero-reference-person"
                style={{ transform: `translate3d(${pointer.x * 5}px,${pointer.y * 3}px,150px) rotateY(${pointer.x * -3}deg)` }}
              >
                <img src="/images/saurabh-anand-hero.webp" alt="Saurabh Anand" />
                <span className="hero-eye-blink hero-eye-left" aria-hidden="true" />
                <span className="hero-eye-blink hero-eye-right" aria-hidden="true" />
              </div>

              <div className="hero-brand-orbit hero-reference-logo-orbit" aria-label="SEO and developer platforms">
                {logoItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className={`hero-logo-capsule hero-reference-logo ${item.cls} ${item.tone}`} title={item.label}>
                      {Icon ? <Icon size={29} /> : <strong>{item.mark}</strong>}
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>

              <div className="hero-reference-dashboard hero-reference-performance">
                <small>SEO Performance ↗</small><b>+128%</b><span>Organic Traffic</span>
                <div className="hero-ref-chart"><i /><i /><i /><i /><i /><i /></div>
              </div>

              <div className="hero-reference-dashboard hero-reference-visibility">
                <small>Search Visibility ↗</small><b>↑ 42.8%</b><span>Top rankings growing</span>
                <div className="hero-ref-bars"><i /><i /><i /><i /><i /><i /></div>
              </div>

              <div className="hero-reference-dashboard hero-reference-rank">
                <small>Top Rankings</small>
                <span><b>G</b> seo services <em>↑</em></span>
                <span><b>2</b> digital marketing <em>↑</em></span>
                <span><b>3</b> ai seo strategy <em>↑</em></span>
              </div>

              <div className="hero-reference-laptop" style={{ transform: `translate3d(${pointer.x * -3}px,${pointer.y * -2}px,90px) rotateY(${pointer.x * 1.5}deg)` }}>
                <div className="hero-reference-screen">
                  <img src="/images/saurabh-anand-hero.webp" alt="" aria-hidden="true" />
                  <video src="/videos/1000522166.mp4" poster="/images/saurabh-anand-hero.webp" autoPlay muted loop playsInline preload="auto" aria-label="Saurabh Anand SEO promotional video" />
                  <div className="hero-reference-video-overlay">
                    <strong>AI-POWERED<br />DIGITAL GROWTH<br />IN 2026</strong>
                    <span>▶</span>
                  </div>
                </div>
                <div className="hero-reference-laptop-base"><i /></div>
              </div>

              <div className="hero-reference-table-shadow" />
              <div className="hero-reference-cup">GOOD IDEAS<br />HIGHER<br />RANKINGS</div>
            </div>
          </motion.div>
        </div>

        <motion.div className="mt-5 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[.3em] text-muted-foreground" animate={{ y: [0, 4, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
          <span>Scroll to explore</span><ArrowRight size={13} className="rotate-90" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
