import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import spaceBg from "@/assets/space-bg.jpg";

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
    jobTitle: "AI SEO Consultant, Vibe Coder & AI Automation Expert",
    description:
      "AI SEO Consultant, LinkedIn Top Voice 2024, Google Developer Community Contributor, Vibe Coder, GEO Specialist, and AI Automation Expert.",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Allama Iqbal College, Bihar Sharif, Nalanda",
    },
    sameAs: ["https://www.linkedin.com/in/saurabhanandseo/"],
    knowsAbout: [
      "AI SEO",
      "Technical SEO",
      "GEO",
      "LLM Optimization",
      "AI Automation",
      "Vibe Coding",
      "SaaS SEO",
      "Agentic AI",
    ],
  };

  return (
    <div className="relative min-h-screen">
      <SEO
        title="About Saurabh Anand | AI SEO Consultant, GEO & LLMO Expert India"
        description="Saurabh Anand — AI SEO Consultant, GEO & LLMO expert, Vibe Coder and AI Automation strategist. LinkedIn Top Voice 2024 helping brands win in Google, ChatGPT, Gemini & Perplexity."
        path="/about"
        isHome
        keywords="About Saurabh Anand, AI SEO Consultant India, GEO Expert, LLMO Specialist, Technical SEO Consultant, Vibe Coder, AI Automation Expert, LinkedIn Top Voice 2024, Google Developer Community, SaaS SEO Consultant, Generative Engine Optimization, LLM Optimization"
        image="/og-thumbnail.jpg"
        jsonLd={[personJsonLd, faqJsonLd]}
      />
      <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: `url(${spaceBg})` }} />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      <Navbar />
      <div className="pt-24">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
