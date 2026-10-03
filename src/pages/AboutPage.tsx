import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
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
        image="/about-modern.svg"
        jsonLd={[personJsonLd, faqJsonLd]}
      />
      <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-25" style={{ backgroundImage: `url(${spaceBg})` }} />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/85 to-background" />
      <Navbar />

      <main>
        <section className="about-hero container mx-auto px-4 md:px-6 pt-24 md:pt-28">
          <motion.div
            className="relative grid w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#071225]/90 shadow-2xl lg:grid-cols-[.9fr_1.1fr]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >
            <div className="relative min-h-[620px] overflow-hidden p-6 md:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_45%,rgba(34,211,238,.16),transparent_52%)]" />
              <div className="relative flex h-full min-h-[570px] flex-col items-center justify-center">
                <div className="absolute left-2 top-8 rounded-full border border-cyan-300/30 bg-[#071225]/90 px-4 py-2 text-xs font-bold tracking-wide text-cyan-100 md:left-5">
                  DIGITAL MARKETING
                </div>
                <div className="absolute bottom-28 right-2 rounded-full border border-violet-400/30 bg-[#071225]/90 px-4 py-2 text-xs font-bold text-violet-100 md:right-5">
                  SEO STRATEGY
                </div>
                <div className="absolute bottom-8 left-2 rounded-full border border-cyan-300/30 bg-[#071225]/90 px-4 py-2 text-xs font-bold text-cyan-100 md:left-5">
                  AI &amp; AUTOMATION
                </div>
                <div className="absolute bottom-2 right-3 rounded-full border border-indigo-400/30 bg-[#071225]/90 px-4 py-2 text-xs font-bold text-indigo-100 md:right-6">
                  WEB DEVELOPMENT
                </div>
                <div className="relative z-10 h-[430px] w-full max-w-[380px] overflow-hidden rounded-[32px] border border-cyan-300/20 bg-slate-900 shadow-[0_30px_80px_rgba(0,0,0,.45)]">
                  <img
                    src="/saurabh-anand-hero.webp"
                    alt="Saurabh Anand"
                    className="h-full w-full object-cover object-center"
                    width={800}
                    height={900}
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            <div className="relative flex flex-col justify-center p-7 md:p-12 lg:p-16">
              <div className="mb-3 text-sm font-extrabold tracking-[.28em] text-cyan-300">ABOUT ME</div>
              <div className="mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-300 to-indigo-500" />
              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl xl:text-6xl">Hi, I’m Saurabh Anand</h1>
              <p className="mt-5 text-sm font-bold tracking-[.12em] text-indigo-200 md:text-base">
                SEO SPECIALIST | DIGITAL MARKETER | TECH ENTHUSIAST
              </p>
              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                I help businesses grow through data-driven SEO, digital marketing, AI automation and modern web solutions — turning search visibility and technology into practical digital growth.
              </p>

              <div className="mt-9 grid grid-cols-1 gap-6 border-b border-white/10 pb-8 sm:grid-cols-3">
                <div><strong className="block text-3xl font-extrabold text-cyan-300">4+</strong><span className="text-[11px] font-semibold tracking-wider text-slate-400">YEARS EXPERIENCE</span></div>
                <div><strong className="block text-3xl font-extrabold text-violet-300">20K+</strong><span className="text-[11px] font-semibold tracking-wider text-slate-400">LINKEDIN COMMUNITY</span></div>
                <div><strong className="block text-3xl font-extrabold text-cyan-300">10+</strong><span className="text-[11px] font-semibold tracking-wider text-slate-400">PROJECTS COMPLETED</span></div>
              </div>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
                Focused on continuous learning across AI, SEO, analytics, automation and modern web technologies to build better digital experiences.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/portfolio" className="rounded-full bg-gradient-to-r from-cyan-300 to-indigo-500 px-6 py-3 text-sm font-extrabold text-slate-950 shadow-lg shadow-cyan-500/10">
                  View My Work
                </Link>
                <a href="/Saurabh-Anand-Resume.pdf" download className="rounded-full border border-indigo-300/40 bg-slate-900/70 px-6 py-3 text-sm font-extrabold text-indigo-100">
                  Download CV
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
