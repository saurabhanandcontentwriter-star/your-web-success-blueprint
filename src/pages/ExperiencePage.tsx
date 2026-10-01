import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  ExternalLink,
  LineChart,
  Search,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
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
  const totalAchievements = jobs.reduce((sum, job) => sum + (job.achievements?.length || 0), 0);

  const capabilityCards = [
    { icon: Search, title: "SEO & Organic Growth", text: "Technical, on-page, content and authority-building workflows focused on sustainable search visibility." },
    { icon: BarChart3, title: "Analytics & Performance", text: "Turn search and marketing data into practical insights, experiments and measurable decisions." },
    { icon: Sparkles, title: "AI-Powered Workflows", text: "Use AI and automation to accelerate research, content operations, reporting and execution." },
    { icon: Target, title: "Strategy to Execution", text: "Connect business goals with campaigns, content systems and day-to-day growth execution." },
  ];

  return (
    <div className="experience-landing relative min-h-screen">
      <SEO
        title="Work Experience | Saurabh Anand"
        description="Explore Saurabh Anand's professional experience across SEO, digital marketing, analytics, content strategy, AI workflows and organic growth."
        path="/experience"
      />

      <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: `url(${spaceBg})` }} />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/30 via-background/88 to-background" />
      <Navbar />

      <main>
        <section className="experience-hero container mx-auto px-5 md:px-6 pt-28 md:pt-32">
          <motion.div
            className="experience-hero-copy"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="experience-kicker"><BriefcaseBusiness size={14} /> Career journey · Growth · Impact</div>
            <h1 className="experience-title mt-6 text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[.94] tracking-[-.055em]">
              Experience that
              <br />
              <span>turns work into impact.</span>
            </h1>
            <p className="experience-lead mt-7">
              A career built across SEO, digital marketing, content strategy, analytics and AI-powered execution — combining creative thinking with measurable growth outcomes.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#career-timeline" className="home-hero-primary">Explore my journey <ArrowRight size={16} /></a>
              <Link to="/contact" className="home-hero-secondary">Let’s work together</Link>
            </div>

            <div className="experience-stats mt-10">
              <div><strong>{jobs.length}+</strong><span>Professional roles</span></div>
              <div><strong>{totalTools}+</strong><span>Tools & platforms</span></div>
              <div><strong>{totalAchievements}+</strong><span>Career highlights</span></div>
            </div>
          </motion.div>

          <motion.div
            className="experience-orbit"
            initial={{ opacity: 0, scale: .82, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: .1, ease: "easeOut" }}
          >
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

        <section className="experience-capabilities container mx-auto px-5 md:px-6 pb-24">
          <div className="experience-section-heading experience-capabilities-heading">
            <div>
              <p className="section-label mb-2">What I bring</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">A growth stack built through experience.</h2>
              <p className="mt-3 max-w-2xl text-muted-foreground leading-7">The roles may be different, but the operating principle stays the same: understand the problem, build the system, measure the outcome and improve it.</p>
            </div>
          </div>

          <div className="experience-capability-grid">
            {capabilityCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  className="experience-capability-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: .55, delay: index * .08 }}
                >
                  <div className="experience-capability-icon"><Icon size={20} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="career-timeline" className="container mx-auto px-5 md:px-6 pb-24">
          <div className="experience-section-heading">
            <div>
              <p className="section-label mb-2">Career timeline</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">Where I’ve built experience</h2>
              <p className="mt-3 max-w-2xl text-muted-foreground leading-7">A role-by-role view of responsibilities, tools and achievements. Explore the detail behind each chapter.</p>
            </div>
            <div className="experience-count-pill"><BriefcaseBusiness size={15} /> {jobs.length} roles</div>
          </div>
          <div className="experience-timeline-shell"><ExperienceSection /></div>
        </section>

        <section className="experience-bottom container mx-auto px-5 md:px-6 pb-28">
          <div className="experience-bottom-panel">
            <div className="experience-bottom-glow" />
            <div className="experience-bottom-copy">
              <p className="section-label mb-2">Next chapter</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">Let’s build something measurable.</h2>
              <p className="mt-4 text-muted-foreground leading-7 max-w-2xl">Looking for an SEO, digital growth, analytics or AI-focused collaborator? Let’s turn the next challenge into a system that performs.</p>
              <div className="flex flex-wrap gap-3 mt-7">
                <Link to="/contact" className="home-hero-primary">Start a conversation <ArrowRight size={16} /></Link>
                <Link to="/portfolio" className="home-hero-secondary"><ExternalLink size={15} /> View portfolio</Link>
              </div>
            </div>
            <div className="experience-bottom-orbit" aria-hidden="true">
              <div><LineChart size={22} /><span>Measure</span></div>
              <div><Code2 size={22} /><span>Build</span></div>
              <div><TrendingUp size={22} /><span>Grow</span></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ExperiencePage;
