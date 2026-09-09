import { motion } from "framer-motion";
import { ArrowRight, Award, BookOpen, GraduationCap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import aboutPhoto from "@/assets/about-photo.jpg";
import spaceBg from "@/assets/space-bg.jpg";
import "@/styles/education-landing.css";

const EducationPage = () => (
  <div className="education-landing relative min-h-screen">
    <SEO title="Education & Certifications | Saurabh Anand" description="Explore Saurabh Anand's BCA, diploma, certifications and continuous learning journey across technology, SEO, analytics and digital growth." path="/education" />
    <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-25" style={{ backgroundImage: `url(${spaceBg})` }} />
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/50 via-background/85 to-background" />
    <Navbar />

    <main className="container mx-auto px-5 md:px-6 pt-24">
      <section className="education-hero">
        <motion.div initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .75 }}>
          <div className="education-kicker"><Sparkles size={13} /> Learning · Technology · Growth</div>
          <h1 className="education-title mt-5 text-5xl md:text-7xl font-display font-bold leading-[.98] tracking-[-.045em]">
            Education that<br /><span>builds capability.</span>
          </h1>
          <p className="education-hero-copy mt-6">My academic foundation, professional certifications and continuous learning journey — connecting computer applications, digital marketing, SEO, analytics and emerging AI technology.</p>
          <div className="flex flex-wrap gap-3 mt-7">
            <a href="#academic-journey" className="home-hero-primary">Explore Journey <ArrowRight size={16} /></a>
            <Link to="/about" className="home-hero-secondary">View Profile</Link>
          </div>
        </motion.div>

        <motion.div className="education-photo-frame" initial={{ opacity: 0, scale: .9, rotateY: -14 }} animate={{ opacity: 1, scale: 1, rotateY: -8 }} transition={{ duration: .9, delay: .15 }}>
          <img src={aboutPhoto} alt="Saurabh Anand" className="education-photo" />
          <div className="education-float one"><GraduationCap size={15} className="inline mr-2 text-primary" /> BCA · Computer Applications</div>
          <div className="education-float two"><Award size={15} className="inline mr-2 text-accent" /> Certifications · Continuous Learning</div>
        </motion.div>
      </section>

      <section id="academic-journey" className="pb-20">
        <div className="mb-8">
          <p className="section-label mb-2">Academic Journey</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">The foundation behind the work.</h2>
        </div>
        <div className="education-grid">
          <motion.article className="education-card" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="education-card-icon mb-5"><GraduationCap size={24} /></div>
            <h3 className="font-display font-bold text-xl mb-2">Bachelor of Computer Applications</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Allama Iqbal College, Bihar Sharif, Nalanda — Graduated 2024</p>
            <div className="mt-5 text-xs uppercase tracking-[.14em] text-primary">BCA · Technology</div>
          </motion.article>
          <motion.article className="education-card" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .1 }}>
            <div className="education-card-icon mb-5"><BookOpen size={24} /></div>
            <h3 className="font-display font-bold text-xl mb-2">Diploma</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">DPG Polytechnic College — 2021</p>
            <div className="mt-5 text-xs uppercase tracking-[.14em] text-primary">Diploma · Foundation</div>
          </motion.article>
          <motion.article className="education-card" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .2 }}>
            <div className="education-card-icon mb-5"><Award size={24} /></div>
            <h3 className="font-display font-bold text-xl mb-2">Certifications</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Google Digital Marketing Certification</li>
              <li>SEO & Link Building Certification</li>
            </ul>
            <div className="mt-5 text-xs uppercase tracking-[.14em] text-primary">SEO · Marketing · Growth</div>
          </motion.article>
        </div>
      </section>
    </main>
  </div>
);

export default EducationPage;
