import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, BriefcaseBusiness, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ExperienceSection from "@/components/ExperienceSection";
import SEO from "@/components/SEO";
import spaceBg from "@/assets/space-bg.jpg";
import { jobs } from "@/data/experience";
import "@/styles/experience-landing.css";

const ExperiencePage = () => {
  const latestRole = jobs[0];
  const totalTools = new Set(jobs.flatMap((job) => job.tools)).size;

  return (
    <div className="experience-landing relative min-h-screen">
      <SEO title="Work Experience | Saurabh Anand" description="Explore Saurabh Anand's professional experience across SEO, digital marketing, content strategy, analytics and growth." path="/experience" />
      <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-25" style={{ backgroundImage: `url(${spaceBg})` }} />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/85 to-background" />
      <Navbar />

      <main>
        <section className="experience-hero container mx-auto px-5 md:px-6 pt-28 md:pt-32">
          <motion.div className="experience-hero-copy" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
            <div className="experience-kicker"><BriefcaseBusiness size={14} /> Career journey · Growth · Impact</div>
            <h1 className="experience-title mt-6 text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[.95] tracking-[-.05em]">
              Built by experience.
              <br /><span>Measured by impact.</span>
            </h1>
            <p className="experience-lead mt-7">
              From SEO execution and content strategy to analytics, digital marketing and AI-powered workflows, every role has added a new layer to how I build sustainable organic growth.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#career-timeline" className="home-hero-primary">Explore career <ArrowRight size={16} /></a>
              <Link to="/contact" className="home-hero-secondary">Hire / collaborate</Link>
            </div>
            <div className="experience-stats mt-10">
              <div><strong>{jobs.length}+</strong><span>Roles</span></div>
              <div><strong>{totalTools}+</strong><span>Tools & platforms</span></div>
              <div><strong>SEO + AI</strong><span>Growth stack</span></div>
            </div>
          </motion.div>

          <motion.div className="experience-orbit" initial={{ opacity: 0, scale: .84, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: .1 }}>
            <div className="experience-orbit-ring ring-one" />
            <div className="experience-orbit-ring ring-two" />
            <div className="experience-orbit-ring ring-three" />
            <div className="experience-orbit-core">
              <TrendingUp size={30} />
              <span>Growth<br />in motion</span>
            </div>
            <div className="experience-float-card card-one"><Sparkles size={14} /><span>Strategy → Execution</span></div>
            <div className="experience-float-card card-two"><BriefcaseBusiness size={14} /><span>{latestRole?.title || "Professional Experience"}</span></div>
            <div className="experience-float-card card-three"><CheckCircle2 size={14} /><span>Impact-focused</span></div>
          </motion.div>
        </section>

        <div className="experience-scroll-hint"><ArrowDown size={15} /> Scroll to explore</div>

        <section id="career-timeline" className="container mx-auto px-5 md:px-6 pb-24">
          <div className="experience-section-heading">
            <div>
              <p className="section-label mb-2">Career timeline</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">Where I’ve built experience</h2>
              <p className="mt-3 max-w-2xl text-muted-foreground leading-7">A role-by-role view of responsibilities, tools and achievements — keeping the original experience data intact.</p>
            </div>
            <div className="experience-count-pill"><BriefcaseBusiness size={15} /> {jobs.length} roles</div>
          </div>
          <div className="experience-timeline-shell"><ExperienceSection /></div>
        </section>
      </main>
    </div>
  );
};

export default ExperiencePage;
