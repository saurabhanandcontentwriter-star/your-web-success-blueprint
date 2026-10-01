import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, BarChart3, BrainCircuit, CheckCircle2, Code2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/SkillsSection";
import SEO from "@/components/SEO";
import spaceBg from "@/assets/space-bg.jpg";
import { jobs } from "@/data/experience";
import "@/styles/skills-landing.css";

const capabilityCards = [
  { icon: BrainCircuit, title: "SEO & Organic Growth", text: "Technical SEO, on-page optimization, content strategy, keyword research, link building and search performance." },
  { icon: BarChart3, title: "Analytics & BI", text: "GA4, Search Console, Excel, SQL, Power BI, Tableau, Looker Studio and KPI-driven reporting." },
  { icon: Code2, title: "AI & Automation", text: "AI-assisted marketing workflows, data workflows and practical automation that turn repetitive work into scalable systems." },
  { icon: CheckCircle2, title: "Execution Mindset", text: "Strategy backed by measurement, experimentation, clean processes and a strong focus on business outcomes." },
];

const SkillsPage = () => {
  const toolCount = new Set(jobs.flatMap((job) => job.tools)).size;

  return (
    <div className="skills-landing relative min-h-screen">
      <SEO title="Skills | Saurabh Anand" description="Explore Saurabh Anand's skills across SEO, digital marketing, analytics, business intelligence, AI automation and content strategy." path="/skills" />
      <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-25" style={{ backgroundImage: `url(${spaceBg})` }} />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/85 to-background" />
      <Navbar />

      <main>
        <section className="skills-hero container mx-auto px-5 md:px-6 pt-28 md:pt-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
            <div className="skills-kicker"><Sparkles size={14} /> Skills · Systems · Growth</div>
            <h1 className="skills-title mt-6 text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[.95] tracking-[-.05em]">
              Skills that turn
              <br />
              <span>data into growth.</span>
            </h1>
            <p className="skills-lead mt-7">A practical growth stack combining SEO, digital marketing, analytics, business intelligence and AI-powered workflows — built to move from insight to execution.</p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#skill-stack" className="home-hero-primary">Explore skill stack <ArrowRight size={16} /></a>
              <Link to="/experience" className="home-hero-secondary">See experience</Link>
            </div>
            <div className="skills-stats mt-10">
              <div><strong>{toolCount}+</strong><span>Tools & platforms</span></div>
              <div><strong>4</strong><span>Core disciplines</span></div>
              <div><strong>SEO + AI</strong><span>Growth focus</span></div>
            </div>
          </motion.div>

          <motion.div className="skills-radar" initial={{ opacity: 0, scale: .84, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: .1 }}>
            <div className="skills-ring one" />
            <div className="skills-ring two" />
            <div className="skills-ring three" />
            <div className="skills-core"><Sparkles size={27} /><strong>Growth Stack</strong><small>SEO · Data · AI</small></div>
            <div className="skills-float a"><BarChart3 size={14} /> Analytics-first</div>
            <div className="skills-float b"><BrainCircuit size={14} /> AI-powered workflows</div>
            <div className="skills-float c"><Code2 size={14} /> Strategy → Execution</div>
          </motion.div>
        </section>

        <div className="skills-scroll"><ArrowDown size={15} /> Scroll to explore</div>

        <section className="container mx-auto px-5 md:px-6 pb-24">
          <div className="skills-section-heading">
            <div>
              <p className="section-label mb-2">Core capabilities</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">A multidisciplinary growth toolkit</h2>
              <p className="mt-3 max-w-2xl text-muted-foreground leading-7">The strongest results come from connecting search, content, data and automation instead of treating each skill as a separate silo.</p>
            </div>
            <div className="skills-count"><Sparkles size={15} /> {toolCount}+ tools</div>
          </div>

          <div className="skills-pill-grid">
            {capabilityCards.map(({ icon: Icon, title, text }, index) => (
              <motion.div key={title} className="skills-pill" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}>
                <Icon size={19} className="text-primary mb-4" />
                <strong>{title}</strong>
                <span>{text}</span>
              </motion.div>
            ))}
          </div>

          <div id="skill-stack" className="skills-panel mt-8">
            <SkillsSection />
          </div>

          <motion.div className="skills-cta" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label">Ready to build?</p>
            <h2>Let’s turn your growth goals into a system.</h2>
            <p>Whether the challenge is organic visibility, reporting, content performance or AI-assisted workflows, I bring strategy, execution and measurement together.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="home-hero-primary">Let’s work together <ArrowRight size={16} /></Link>
              <Link to="/portfolio" className="home-hero-secondary">View portfolio</Link>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default SkillsPage;
