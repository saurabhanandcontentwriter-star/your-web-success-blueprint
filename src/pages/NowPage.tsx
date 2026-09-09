import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, BrainCircuit, Compass, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import NowSection from "@/components/NowSection";
import SEO from "@/components/SEO";
import spaceBg from "@/assets/space-bg.jpg";
import "@/styles/now-landing.css";

const NowPage = () => (
  <div className="now-landing relative min-h-screen">
    <SEO
      title="What I'm Doing Now | Saurabh Anand"
      description="See what Saurabh Anand is focused on now: AI SEO, analytics, digital marketing, automation, community building and continuous experimentation."
      path="/now"
    />
    <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-25" style={{ backgroundImage: `url(${spaceBg})` }} />
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/85 to-background" />
    <Navbar />

    <main>
      <section className="now-hero container mx-auto px-5 md:px-6 pt-28 md:pt-32">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
          <div className="now-kicker"><i /> Live focus · September 2026</div>
          <h1 className="now-title mt-6 text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[.95] tracking-[-.05em]">
            Always learning.
            <br /><span>Always building.</span>
          </h1>
          <p className="now-lead mt-7">The Now page is a live snapshot of what I’m exploring, testing and building across AI SEO, analytics, automation, digital marketing and developer communities.</p>
          <div className="now-actions mt-8">
            <a href="#current-focus" className="home-hero-primary">See current focus <ArrowRight size={16} /></a>
            <Link to="/experience" className="home-hero-secondary">View experience</Link>
          </div>
          <div className="now-stats mt-10">
            <div><strong>AI SEO</strong><span>Current priority</span></div>
            <div><strong>Experiment</strong><span>Build mindset</span></div>
            <div><strong>Community</strong><span>Stay connected</span></div>
          </div>
        </motion.div>

        <motion.div className="now-visual" initial={{ opacity: 0, scale: .84, rotate: -4 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: .1 }}>
          <div className="now-orbit now-orbit-one" />
          <div className="now-orbit now-orbit-two" />
          <div className="now-core">
            <BrainCircuit size={32} className="text-primary" />
            <strong>In motion</strong>
            <small>Learn · Build · Share</small>
          </div>
          <div className="now-float now-float-one"><Zap size={14} className="inline mr-1 text-primary" /> AI experiments</div>
          <div className="now-float now-float-two"><Compass size={14} className="inline mr-1 text-primary" /> Search evolution</div>
          <div className="now-float now-float-three"><Sparkles size={14} className="inline mr-1 text-primary" /> Community</div>
        </motion.div>
      </section>

      <div className="now-scroll"><ArrowDown size={15} /> Scroll to explore</div>

      <section id="current-focus" className="container mx-auto px-5 md:px-6 pb-24">
        <div className="mb-6">
          <p className="section-label mb-2">Current focus</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">What I’m working on now</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground leading-7">A focused view of the skills, experiments and community work currently getting my attention.</p>
        </div>
        <div className="now-content-shell"><NowSection /></div>

        <motion.div className="now-cta" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7 }}>
          <p className="section-label mb-2">Keep building</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">Want to build something next?</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-7">If you’re exploring SEO, AI automation, analytics or a new digital growth idea, let’s turn the experiment into something useful.</p>
          <div className="flex flex-wrap gap-3 mt-7">
            <Link to="/contact" className="home-hero-primary">Start a conversation <ArrowRight size={16} /></Link>
            <Link to="/skills" className="home-hero-secondary">Explore skills</Link>
          </div>
        </motion.div>
      </section>
    </main>
  </div>
);

export default NowPage;
