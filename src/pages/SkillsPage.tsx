import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/SkillsSection";
import SEO from "@/components/SEO";
import "@/styles/skills-landing.css";

const SkillsPage = () => (
  <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
    <SEO
      title="Skills | Saurabh Anand"
      description="Explore Saurabh Anand's skills across SEO, digital marketing, web development, data analytics, AI automation and modern growth tools."
      path="/skills"
    />

    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-200/35 blur-3xl dark:bg-blue-900/20" />
      <div className="absolute right-[-8rem] top-1/3 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl dark:bg-indigo-900/20" />
      <div className="absolute bottom-[-10rem] left-1/3 h-96 w-96 rounded-full bg-sky-200/25 blur-3xl dark:bg-sky-900/10" />
    </div>

    <Navbar />

    <main className="container mx-auto px-5 pb-20 pt-28 md:px-6 md:pt-32">
      <motion.header
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="mx-auto mb-10 max-w-5xl text-center"
      >
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
          <Sparkles size={15} />
          My Skills
        </div>

        <h1 className="mt-6 text-5xl font-black tracking-[-0.055em] text-slate-950 dark:text-white md:text-7xl">
          Skills That
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
            Power My Work
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300 md:text-lg">
          A blend of SEO, digital marketing, web development, data analysis and AI tools that help me build, optimize and grow impactful digital solutions.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href="#skills" className="home-hero-primary">
            Explore my skills <ArrowRight size={16} />
          </a>
          <Link to="/portfolio" className="home-hero-secondary">
            View projects
          </Link>
        </div>
      </motion.header>

      <SkillsSection />
    </main>
  </div>
);

export default SkillsPage;
