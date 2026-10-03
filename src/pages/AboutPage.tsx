import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, BookOpen, Code2, Lightbulb, Megaphone, Rocket, Send, Sparkles, TrendingUp, Trophy, UserRound, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import spaceBg from "@/assets/space-bg.jpg";
import "@/styles/about-landing.css";

const AboutPage = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What is AI SEO?", acceptedAnswer: { "@type": "Answer", text: "AI SEO focuses on optimizing content and websites for AI-powered search experiences." } },
      { "@type": "Question", name: "What is GEO?", acceptedAnswer: { "@type": "Answer", text: "Generative Engine Optimization improves brand visibility within AI-generated answers." } },
      { "@type": "Question", name: "What is LLM Optimization?", acceptedAnswer: { "@type": "Answer", text: "LLM Optimization helps businesses become discoverable in large language models and AI assistants." } },
      { "@type": "Question", name: "What services does Saurabh Anand provide?", acceptedAnswer: { "@type": "Answer", text: "AI SEO, Technical SEO, GEO, Automation Systems, Vibe Coding and AI Consulting." } },
      { "@type": "Question", name: "Does Saurabh work with startups?", acceptedAnswer: { "@type": "Answer", text: "Yes. Startup founders, SaaS companies, agencies and enterprise organizations are supported." } },
    ],
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Saurabh Anand",
    url: "https://saurabhanandseo.com/about",
    jobTitle: "AI SEO Consultant, Prompt Engineer, Vibe Coder & AI Automation Expert",
    description: "AI SEO Consultant and Prompt Engineer focused on SEO, GEO, AI search, content systems, automation and practical AI-assisted growth workflows.",
    alumniOf: { "@type": "CollegeOrUniversity", name: "Allama Iqbal College, Bihar Sharif, Nalanda" },
    sameAs: ["https://www.linkedin.com/in/saurabhanandseo/"],
    knowsAbout: ["AI SEO", "Technical SEO", "GEO", "LLM Optimization", "AI Automation", "Vibe Coding", "SaaS SEO", "Agentic AI", "Prompt Engineering", "AI Content Workflows", "AI SEO Automation"],
  };

  return (
    <div className="about-landing relative min-h-screen">
      <SEO
        title="About Saurabh Anand | AI SEO Consultant, GEO & LLMO Expert India"
        description="Saurabh Anand — AI SEO Consultant, GEO & LLMO expert, Vibe Coder and AI Automation strategist. LinkedIn Top Voice 2024 helping brands win in Google, ChatGPT, Gemini & Perplexity."
        path="/about"
        isHome
        keywords="About Saurabh Anand, AI SEO Consultant India, Prompt Engineering Expert, GEO Expert, LLMO Specialist, Technical SEO Consultant, Vibe Coder, AI Automation Expert, LinkedIn Top Voice 2024, Google Developer Community, SaaS SEO Consultant"
        image="/og-thumbnail.jpg"
        jsonLd={[personJsonLd, faqJsonLd]}
      />
      <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-25" style={{ backgroundImage: `url(${spaceBg})` }} />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/85 to-background" />
      <Navbar />

      <main>
        <section className="about-hero about-modern-hero container mx-auto px-4 md:px-6 pt-24 md:pt-28">
          <motion.div
            className="about-modern-card"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >
            <div className="about-modern-visual">
              <div className="about-modern-blob about-modern-blob-one" aria-hidden="true" />
              <div className="about-modern-blob about-modern-blob-two" aria-hidden="true" />

              <div className="about-signature" aria-hidden="true">
                <span>Saurabh</span>
                <span>Anand</span>
              </div>

              <div className="about-portrait-halo" aria-hidden="true" />
              <div className="about-modern-portrait">
                <img
                  src="/saurabh-anand-hero.webp"
                  alt="Saurabh Anand — SEO Specialist, Digital Marketer and Tech Enthusiast"
                  width={800}
                  height={900}
                  fetchPriority="high"
                  decoding="async"
                />
              </div>

              <div className="about-skill-card about-skill-marketing">
                <span className="about-skill-icon"><Megaphone size={20} /></span>
                <span>Digital<br />Marketing</span>
              </div>
              <div className="about-skill-card about-skill-seo">
                <span className="about-skill-icon"><TrendingUp size={20} /></span>
                <span>SEO<br />Strategy ↗</span>
              </div>
              <div className="about-skill-card about-skill-ai">
                <span className="about-skill-icon"><Lightbulb size={20} /></span>
                <span>AI &amp;<br />Automation</span>
              </div>
              <div className="about-skill-card about-skill-web">
                <span className="about-skill-icon"><Code2 size={20} /></span>
                <span>Web<br />Development</span>
              </div>

              <div className="about-doodle about-doodle-top" aria-hidden="true">╱╲</div>
              <div className="about-doodle about-doodle-bottom" aria-hidden="true">╲╱</div>
            </div>

            <div className="about-modern-copy">
              <div className="about-modern-kicker">
                <span><UserRound size={18} /></span>
                ABOUT ME
              </div>

              <div className="about-title-rule" aria-hidden="true" />

              <h1 className="about-modern-title">
                Hi, I’m<br className="hidden sm:block" /> Saurabh <span>Anand</span>
              </h1>

              <p className="about-modern-role">
                SEO SPECIALIST <b>|</b> DIGITAL MARKETER <b>|</b> TECH ENTHUSIAST
              </p>

              <p className="about-modern-lead">
                I help businesses grow with data-driven SEO strategies, digital marketing,
                AI automation, and modern web solutions. I love building projects, exploring
                new technologies, and turning ideas into real impact.
              </p>

              <div className="about-modern-stats">
                <div className="about-modern-stat">
                  <span className="about-stat-icon"><Trophy size={25} /></span>
                  <strong>4+</strong>
                  <span>Years<br />Experience</span>
                </div>
                <div className="about-modern-stat">
                  <span className="about-stat-icon"><UsersRound size={25} /></span>
                  <strong>20K+</strong>
                  <span>LinkedIn<br />Community</span>
                </div>
                <div className="about-modern-stat">
                  <span className="about-stat-icon"><Rocket size={25} /></span>
                  <strong>10+</strong>
                  <span>Projects<br />Completed</span>
                </div>
                <div className="about-modern-stat">
                  <span className="about-stat-icon"><BookOpen size={25} /></span>
                  <strong>AI &amp; SEO</strong>
                  <span>Continuous<br />Learning</span>
                </div>
              </div>

              <div className="about-modern-actions">
                <Link to="/portfolio" className="about-modern-primary">
                  <Send size={19} /> View My Work <ArrowRight size={18} />
                </Link>
                <a href="/Saurabh-Anand-Resume.pdf" download className="about-modern-secondary">
                  <UserRound size={19} /> Download CV
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        <div className="about-scroll"><ArrowDown size={15} /> Scroll to explore</div>

        <section id="about-story" className="container mx-auto px-5 md:px-6 pb-24">
          <div className="about-section-heading">
            <div>
              <p className="section-label mb-2">The story</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">Where data, search & AI meet</h2>
              <p className="mt-3 max-w-2xl text-muted-foreground leading-7">A deeper look at the experience, expertise, education and community work behind the work.</p>
            </div>
            <div className="about-badge"><Sparkles size={14} /> AI-first growth mindset</div>
          </div>
          <div className="about-content-shell"><AboutSection /></div>

          <motion.div className="about-cta" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7 }}>
            <p className="section-label mb-2">Next step</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold">Have a growth problem worth solving?</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground leading-7">Let’s connect strategy, data and AI into a system your team can actually use.</p>
            <div className="flex flex-wrap gap-3 mt-7">
              <Link to="/contact" className="home-hero-primary">Start a conversation <ArrowRight size={16} /></Link>
              <Link to="/experience" className="home-hero-secondary">View experience</Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
