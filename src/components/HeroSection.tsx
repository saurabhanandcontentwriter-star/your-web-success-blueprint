import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, Sparkles, Cpu, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-portrait.png";

const ROLES = [
  "AI SEO Expert",
  "Technical SEO Consultant",
  "SaaS SEO Strategist",
  "Prompt Engineer",
  "Vibe Coding Specialist",
  "Automation Architect",
  "Agentic AI Builder",
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
        else setTimeout(() => setDel(true), 1500);
      } else {
        if (text.length > 0) setText(full.slice(0, text.length - 1));
        else { setDel(false); setI((p) => p + 1); }
      }
    }, del ? 35 : 70);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return text;
};

const HeroSection = () => {
  const typed = useTyped();
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Floating AI icons */}
      <motion.div className="pointer-events-none absolute top-32 left-10 text-primary/30" animate={{ y: [0, -16, 0] }} transition={{ duration: 6, repeat: Infinity }}>
        <Sparkles size={28} />
      </motion.div>
      <motion.div className="pointer-events-none absolute bottom-40 right-16 text-accent/30" animate={{ y: [0, 18, 0] }} transition={{ duration: 7, repeat: Infinity, delay: 1 }}>
        <Bot size={32} />
      </motion.div>
      <motion.div className="pointer-events-none absolute top-1/2 left-1/3 text-primary/20" animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 2 }}>
        <Cpu size={26} />
      </motion.div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="space-y-6">
          <div className="flex flex-wrap gap-3">
            <a href="https://www.linkedin.com/in/saurabhanandseo/" target="_blank" rel="noopener noreferrer" className="badge-glass hover:border-primary/40 transition-colors">
              <Linkedin size={16} className="text-[#0A66C2]" />
              LinkedIn Top Voice 2024
            </a>
            <span className="badge-glass">
              <img src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" alt="Google" className="w-4 h-4" />
              Google Certified
            </span>
            <span className="badge-glass">
              <Sparkles size={14} className="text-accent" />
              GDG Contributor
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-bold leading-[1.1]">
            <span className="gradient-text">AI SEO Strategist</span>
            <span className="text-muted-foreground font-light"> • </span>
            <span>Vibe Coder</span>
            <span className="text-muted-foreground font-light"> • </span>
            <span className="gradient-text">Automation Builder</span>
          </h1>

          <div className="h-8 text-lg md:text-xl font-display text-foreground/90">
            <span className="text-muted-foreground">I'm </span>
            <span className="text-primary">{typed}</span>
            <span className="inline-block w-[2px] h-5 bg-primary ml-1 animate-pulse align-middle" />
          </div>

          <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
            Helping brands scale using AI SEO, Prompt Engineering, Technical SEO, SaaS SEO, and Intelligent Automation Systems.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link to="/portfolio" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium text-sm hover:opacity-90 transition-all hover:shadow-[0_8px_30px_-5px_hsl(var(--primary)/0.5)]">
              View Portfolio <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity">
              Hire Me
            </Link>
            <a href="#vibe-coding" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-primary/40 text-foreground font-medium text-sm hover:bg-primary/10 transition-colors">
              <Sparkles size={15} /> Explore AI Projects
            </a>
            <a href="/Saurabh_Anand_Resume.pdf" download className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors">
              Download Resume <Download size={15} />
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl rounded-full" />
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-primary/30 shadow-[0_20px_60px_-10px_hsl(var(--primary)/0.4)]">
            <img src={heroImg} alt="Saurabh Anand — AI SEO & Automation Expert" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card px-4 py-3 flex items-center gap-3 border-primary/30">
            <img src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" alt="Google" className="w-8 h-8" />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Expertise in</p>
              <p className="text-sm font-display font-semibold">AI SEO & Vibe Coding</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
