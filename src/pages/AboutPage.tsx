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
            className="w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl"
            initial={{ opacity: 0, y: 28, scale: .98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: .8 }}
          >
            <img
              src="/about-modern.svg"
              alt="About Saurabh Anand — SEO Specialist, Digital Marketer and Tech Enthusiast"
              className="block h-auto w-full"
              width={1536}
              height={1024}
              fetchPriority="high"
              decoding="async"
            />
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
