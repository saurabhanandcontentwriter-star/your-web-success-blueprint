import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, BrainCircuit, Sparkles, Target, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import spaceBg from "@/assets/space-bg.jpg";
import aboutPhoto from "@/assets/about-photo.jpg";
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
    url: "https://saurabh-anand-seo.com/about",
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
        <section className="about-hero container mx-auto px-5 md:px-6 pt-28 md:pt-32">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
            <div className="about-kicker"><UserRound size={14} /> About the builder · SEO · Data · AI</div>
            <h1 className="about-title mt-6 text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[.95] tracking-[-.05em]">
              I build growth systems.
              <br /><span>Not just campaigns.</span>
            </h1>
            <p className="about-lead mt-7">I’m Saurabh Anand — a data-driven SEO and digital marketing professional working at the intersection of organic growth, analytics, prompt engineering, AI automation and modern search.</p>
            <div className="about-actions mt-8">
              <a href="#about-story" className="home-hero-primary">Explore my story <ArrowRight size={16} /></a>
              <Link to="/contact" className="home-hero-secondary">Let’s work together</Link>
            </div>
            <div className="about-stats mt-10">
              <div><strong>SEO + AI</strong><span>Core focus</span></div>
              <div><strong>Data-led</strong><span>Decision making</span></div>
              <div><strong>Builder</strong><span>Mindset</span></div>
            </div>
          </motion.div>

          <motion.div className="about-visual" initial={{ opacity: 0, scale: .86, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: .1 }}>
            <div className="about-orbit about-orbit-one" />
            <div className="about-orbit about-orbit-two" />
            <div className="about-portrait-frame"><img src={aboutPhoto} alt="Saurabh Anand" /></div>
            <div className="about-float about-float-one"><BrainCircuit size={15} /> AI-first growth</div>
            <div className="about-float about-float-two"><Target size={15} /> Search → Visibility → Growth</div>
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
