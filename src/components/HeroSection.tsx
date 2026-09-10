import { motion } from "framer-motion";
import { ArrowRight, Bot, BrainCircuit, Code2, Download, Linkedin, MousePointer2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState, type MouseEvent } from "react";
import "@/styles/home-hero.css";
import "@/styles/hero-modern.css";

const ROLES = [
  "Data Analyst",
  "SEO & Digital Marketing Professional",
  "Power BI & Tableau Developer",
  "SQL & Python Analyst",
  "GA4 & Looker Studio Expert",
  "AI SEO Strategist",
  "Automation Architect",
];

const useTyped = () => {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const full = ROLES[i % ROLES.length];
    const t = setTimeout(() => {
      if (!del) {
        if (text.length < full.length) setText(full.slice(0, text.length + 1));
        else setDel(true);
      } else if (text.length > 0) setText(full.slice(0, text.length - 1));
      else { setDel(false); setI((p) => p + 1); }
    }, del ? 35 : text.length === full.length ? 1500 : 65);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return text;
};

const HeroSection = () => {
  const typed = useTyped();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({ x: ((event.clientX - rect.left) / rect.width - 0.5) * 2, y: ((event.clientY - rect.top) / rect.height - 0.5) * 2 });
  };
  const handlePointerLeave = () => setPointer({ x: 0, y: 0 });

  return (
    <section className="home-hero-3d relative min-h-[100svh] flex items-center overflow-hidden pt-24 pb-16" onMouseMove={handlePointerMove} onMouseLeave={handlePointerLeave}>
      <div className="home-hero-grid absolute inset-0 pointer-events-none" />
      <div className="home-hero-noise absolute inset-0 pointer-events-none" />
      <div className="home-hero-orb home-hero-orb-one" /><div className="home-hero-orb home-hero-orb-two" /><div className="home-hero-orb home-hero-orb-three" />

      <motion.div className="absolute top-28 left-[8%] hidden md:block text-primary/40" animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }} transition={{ duration: 7, repeat: Infinity }}><Sparkles size={25} /></motion.div>
      <motion.div className="absolute bottom-28 right-[9%] hidden md:block text-accent/40" animate={{ y: [0, 16, 0], rotate: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 1 }}><Bot size={30} /></motion.div>

      <div className="container relative z-10 mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-12 xl:gap-20 items-center">
          <motion.div className="space-y-6" initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75 }} style={{ transform: `translate3d(${pointer.x * 5}px, ${pointer.y * 3}px, 0)` }}>
            <div className="flex flex-wrap gap-2.5">
              <a href="https://www.linkedin.com/in/saurabhanandseo/" target="_blank" rel="noopener noreferrer" className="badge-glass home-hero-badge hover:border-primary/40"><Linkedin size={15} className="text-[#0A66C2]" /> LinkedIn Top Voice 2024</a>
              <span className="badge-glass"><Sparkles size={14} className="text-accent" /> AI Growth Builder</span>
              <span className="badge-glass"><BrainCircuit size={14} className="text-primary" /> GDG Contributor</span>
            </div>
            <div>
              <p className="section-label mb-4">Saurabh Anand · Digital Growth Portfolio</p>
              <h1 className="home-hero-title text-5xl sm:text-6xl md:text-7xl xl:text-[5.8rem] font-display font-bold leading-[.96] tracking-[-0.045em]">I build<br /><span className="gradient-text">growth systems</span><br />that move.</h1>
            </div>
            <div className="flex items-center gap-2 text-base md:text-lg font-display"><span className="text-muted-foreground">I&apos;m</span><span className="text-primary font-semibold min-w-[14ch]">{typed}</span><span className="home-hero-cursor" /></div>
            <p className="max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground">SEO × AI Automation × Data Analytics × Vibe Coding. I turn search, data and intelligent automation into measurable digital growth.</p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a href="#selected-work" className="home-hero-primary">Explore My Work <ArrowRight size={17} /></a>
              <Link to="/contact" className="home-hero-secondary">Let&apos;s Work Together</Link>
              <a href="/Saurabh_Anand_Resume.pdf" download target="_blank" rel="noopener noreferrer" className="home-hero-secondary">Resume <Download size={15} /></a>
            </div>
            <div className="grid grid-cols-3 gap-3 max-w-xl pt-3">{[["SEO", "Search systems"], ["AI", "Automation"], ["DATA", "Decision intelligence"]].map(([title, sub]) => <div key={title} className="home-hero-mini-card"><span>{title}</span><small>{sub}</small></div>)}</div>
          </motion.div>

          <motion.div className="home-hero-visual relative mx-auto w-full max-w-[620px] aspect-square" initial={{ opacity: 0, scale: .88, rotateY: 8 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ duration: 1, delay: .15 }} style={{ transform: `perspective(1200px) rotateX(${pointer.y * -3}deg) rotateY(${pointer.x * 5}deg)` }}>
            <div className="home-hero-stage absolute inset-0">
              <div className="home-hero-ring ring-one" /><div className="home-hero-ring ring-two" /><div className="home-hero-ring ring-three" /><div className="home-hero-core-glow" />
              <div className="home-hero-portrait-wrap"><img src="/hero-replacement.svg" alt="Saurabh Anand — Data Analyst, SEO and Digital Growth Professional" className="home-hero-portrait" /><div className="home-hero-portrait-shine" /></div>

              <a href="https://gdg.community.dev/" target="_blank" rel="noopener noreferrer" className="home-hero-gdg-badge" aria-label="Google Developer Groups community">
                <img src="https://developers.google.com/static/program/images/gdp/community-1-gdg.svg" alt="Google Developer Groups" className="home-hero-gdg-logo" />
                <span><strong>Google Developer Groups</strong><small>Community</small></span>
              </a>

              <div className="home-hero-engine"><div className="home-hero-engine-icon"><BrainCircuit size={20} /></div><div><strong>GROWTH ENGINE</strong><span>AI · DATA · SEARCH · WEB</span></div></div>
              <div className="home-hero-chip chip-top-left"><Sparkles size={15} /> SEO</div><div className="home-hero-chip chip-top-right"><Bot size={15} /> AI</div><div className="home-hero-chip chip-bottom-right"><BrainCircuit size={15} /> DATA</div><div className="home-hero-chip chip-bottom-left"><Code2 size={15} /> CODE</div>
              <div className="home-hero-pointer"><MousePointer2 size={13} /> Move your cursor</div>
            </div>
          </motion.div>
        </div>
        <motion.div className="mt-10 md:mt-14 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[.3em] text-muted-foreground" animate={{ y: [0, 5, 0] }} transition={{ duration: 2.5, repeat: Infinity }}><span>Scroll to explore</span><ArrowRight size={13} className="rotate-90" /></motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
