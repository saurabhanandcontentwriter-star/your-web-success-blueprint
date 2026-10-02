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
    setPointer({ x: ((e.clientX - r.left) / r.width - .5) * 2, y: ((e.clientY - r.top) / r.height - .5) * 2 });
  };

  return <section className="home-hero-3d relative min-h-[100svh] flex items-center overflow-hidden pt-24 pb-16" onPointerMove={move} onPointerLeave={() => setPointer({ x: 0, y: 0 })}>
    <div className="home-hero-grid absolute inset-0 pointer-events-none" />
    <div className="home-hero-noise absolute inset-0 pointer-events-none" />
    <div className="home-hero-orb home-hero-orb-one" />
    <div className="home-hero-orb home-hero-orb-two" />
    <div className="home-hero-orb home-hero-orb-three" />

    <div className="container relative z-10 mx-auto px-5 md:px-6">
      <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-10 xl:gap-14 items-center">
        <motion.div className="space-y-6" initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .75 }} style={{ transform: `translate3d(${pointer.x * 4}px,${pointer.y * 2}px,0)` }}>
          <div className="hero-kicker"><span>SEO</span><i>•</i><span>AI</span><i>•</i><span>DATA</span><i>•</i><span>WEB</span></div>
          <div>
            <p className="section-label mb-3">Saurabh Anand · Digital Growth Portfolio</p>
            <h1 className="home-hero-title text-5xl sm:text-6xl md:text-7xl xl:text-[5.7rem] font-display font-bold leading-[.92] tracking-[-0.05em]">
              SAURABH ANAND<br/><span className="gradient-text">SEO</span>
            </h1>
            <h2 className="mt-4 text-xl md:text-2xl font-display font-semibold tracking-tight">SEO &amp; DIGITAL GROWTH SPECIALIST</h2>
          </div>
          <div className="flex items-center gap-2 text-base md:text-lg font-display">
            <span className="text-muted-foreground">I&apos;m</span><span className="text-primary font-semibold min-w-[14ch]">{typed}</span><span className="home-hero-cursor" />
          </div>
          <p className="max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground">Helping brands grow with AI-powered SEO, data-driven strategies and high-performance websites.</p>
          <div className="hero-service-row">
            <span><Search /> Technical SEO</span><span><Sparkles /> AI SEO</span><span><Code2 /> Content</span><span><BarChart3 /> Analytics</span><span><Globe2 /> Digital Growth</span>
          </div>
          <div className="flex flex-wrap gap-3 pt-1">
            <a href="#selected-work" className="home-hero-primary">Hire Me <ArrowRight size={17} /></a>
            <Link to="/portfolio" className="home-hero-secondary">View My Work</Link>
            <a href="/Saurabh_Anand_Resume.pdf" download target="_blank" rel="noopener noreferrer" className="home-hero-secondary">Resume <Download size={15} /></a>
          </div>
          <div className="hero-site-pill"><Globe2 size={17} /><strong>saurabhanandseo.com</strong><ArrowRight size={14} /></div>
          <div className="grid grid-cols-3 gap-3 max-w-xl pt-1">
            {[["+128%", "Organic Growth"], ["Top 3", "Keyword Rankings"], ["10K+", "Leads Generated"]].map(([title, sub]) => <div key={title} className="home-hero-mini-card"><span>{title}</span><small>{sub}</small></div>)}
          </div>
        </motion.div>

        <motion.div className="home-hero-visual relative mx-auto w-full max-w-[760px] aspect-square" initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .15 }}>
          <div className="home-hero-stage absolute inset-0" style={{ transform: `perspective(1400px) rotateX(${pointer.y * -2}deg) rotateY(${pointer.x * 4}deg)` }}>
            <div className="hero-promo-glow" />
            <div className="hero-orbit-ring hero-orbit-ring-one" />
            <div className="hero-orbit-ring hero-orbit-ring-two" />

            <div className="hero-promo-portrait" style={{ transform: `translate3d(${pointer.x * 7}px,${pointer.y * 4}px,190px) rotateY(${pointer.x * -5}deg) rotateX(${pointer.y * 1.5}deg)` }}>
              <img className="hero-portrait-life" src="/images/saurabh-anand-hero.webp" alt="Saurabh Anand" />
              <span className="hero-eye-blink hero-eye-left" aria-hidden="true" /><span className="hero-eye-blink hero-eye-right" aria-hidden="true" /><span className="hero-face-shine" aria-hidden="true" />
            </div>

            <div className="hero-brand-orbit" aria-label="SEO tools and developer platforms">
              {logoItems.map((item) => {
                const Icon = item.icon;
                return <div key={item.label} className={`hero-logo-capsule ${item.cls} ${item.tone}`} title={item.label}>
                  {Icon ? <Icon size={30} /> : <strong>{item.mark}</strong>}<span>{item.label}</span>
                </div>;
              })}
            </div>

            <div className="hero-laptop" aria-label="Saurabh Anand SEO promotional dashboard" style={{ transform: `translate3d(${pointer.x * -5}px,${pointer.y * -3}px,120px) rotateY(${pointer.x * 2}deg)` }}>
              <div className="hero-laptop-screen">
                <img src="/images/saurabh-anand-hero.webp" alt="" aria-hidden="true" />
                <video src="/videos/1000522166.mp4" poster="/images/saurabh-anand-hero.webp" autoPlay muted loop playsInline preload="auto" aria-label="Saurabh Anand SEO promotional video" />
                <div className="hero-laptop-ui"><span>SAURABH ANAND SEO</span><small>SEO &amp; DIGITAL GROWTH</small><div className="hero-metric"><b>+128%</b><em> Organic Growth</em></div><div className="hero-chart"><i /><i /><i /><i /><i /><i /><i /></div></div>
              </div>
              <div className="hero-laptop-base"><span /></div>
            </div>

            <div className="hero-dashboard-card hero-dashboard-performance"><small>SEO PERFORMANCE</small><b>+128%</b><span>Organic Traffic ↗</span><div className="hero-mini-line" /></div>
            <div className="hero-dashboard-card hero-dashboard-visibility"><small>SEARCH VISIBILITY</small><b>↑ 42.8%</b><span>Top rankings growing</span><div className="hero-mini-bars"><i /><i /><i /><i /><i /><i /></div></div>
            <div className="hero-dashboard-card hero-dashboard-rank"><small>TOP RANKINGS</small><span>01&nbsp; seo services&nbsp; ↑</span><span>02&nbsp; digital marketing&nbsp; ↑</span><span>03&nbsp; ai seo strategy&nbsp; ↑</span></div>
            <div className="hero-promo-copy"><strong>AI · SEO · DATA · WEB</strong><span>saurabhanandseo.com</span></div>
            <div className="home-hero-name-3d">SAURABH ANAND</div>
            <div className="home-hero-engine"><div className="home-hero-engine-icon"><BrainCircuit size={20} /></div><div><strong>GROWTH ENGINE</strong><span>AI · DATA · SEARCH · WEB</span></div></div>
          </div>
        </motion.div>
      </div>
      <motion.div className="mt-10 md:mt-14 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[.3em] text-muted-foreground" animate={{ y: [0, 5, 0] }} transition={{ duration: 2.5, repeat: Infinity }}><span>Scroll to explore</span><ArrowRight size={13} className="rotate-90" /></motion.div>
    </div>
  </section>;
};

export default HeroSection;
