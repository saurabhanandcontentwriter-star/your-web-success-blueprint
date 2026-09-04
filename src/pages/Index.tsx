import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CredibilityStrip from "@/components/CredibilityStrip";
import BentoSection from "@/components/BentoSection";
import ToolsMarquee from "@/components/ToolsMarquee";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioSection from "@/components/PortfolioSection";
import SelectedWork from "@/components/SelectedWork";
import DataAnalyticsSection from "@/components/DataAnalyticsSection";
import AIPortfolioCategories from "@/components/AIPortfolioCategories";
import VibeCodingSection from "@/components/VibeCodingSection";
import AgenticAISection from "@/components/AgenticAISection";
import DevFestSection from "@/components/DevFestSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import NowSection from "@/components/NowSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import HomeBgAdmin from "@/components/HomeBgAdmin";
import SEO from "@/components/SEO";
import { useHomeBgSettings } from "@/components/useHomeBgSettings";

const Index = () => {
  const { settings } = useHomeBgSettings();
  const isAdmin = typeof window !== "undefined" && new URLSearchParams(window.location.search).get("admin") === "1";

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Saurabh Anand",
    url: "https://saurabhanandseo.com/",
    jobTitle: "Data Analyst | SEO & Digital Marketing Professional",
    description:
      "Data Analyst and Digital Marketing professional turning raw data into business insights using Excel, SQL, Python, Power BI, Tableau and GA4 — while scaling brands through SEO, content strategy and AI.",
    sameAs: ["https://www.linkedin.com/in/saurabhanandseo/"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Data Analytics",
      "SQL",
      "Python",
      "Power BI",
      "Tableau",
      "Google Analytics 4",
      "Looker Studio",
      "SEO",
      "Digital Marketing",
      "AI SEO",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Saurabh Anand",
    url: "https://saurabhanandseo.com/",
    inLanguage: "en",
    publisher: { "@type": "Person", name: "Saurabh Anand" },
  };

  // AEO / GEO: concise, quotable answers for AI answer engines.
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        q: "Who is Saurabh Anand?",
        a: "Saurabh Anand is a Data Analyst and SEO & Digital Marketing professional based in New Delhi, India, combining SQL, Python, Power BI, Tableau and GA4 analytics with technical and AI-driven SEO.",
      },
      {
        q: "What does Saurabh Anand do?",
        a: "He builds analytics dashboards and reporting systems, runs technical and content SEO programs, and optimizes brands for AI search surfaces such as Google AI Overviews, ChatGPT, Gemini, Claude and Perplexity.",
      },
      {
        q: "What tools and skills does Saurabh Anand use?",
        a: "Advanced Excel, SQL, Python (Pandas, NumPy, Matplotlib), Power BI, Tableau, Looker Studio, Google Analytics 4, Google Search Console, Ahrefs, Semrush and Screaming Frog, plus AI automation and agentic workflows.",
      },
      {
        q: "Is Saurabh Anand available for hire?",
        a: "Yes. He takes on SEO audits, AI SEO/GEO programs, analytics and dashboard projects, and is open to full-time Data Analyst and SEO roles. Contact: saurabhanandseo@gmail.com.",
      },
      {
        q: "Where is Saurabh Anand based?",
        a: "New Delhi, India. He works remotely with global clients in the IST timezone.",
      },
    ].map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <div className="relative min-h-screen">
      <SEO
        isHome
        title="Saurabh Anand | Data Analyst | SEO & Digital Marketing Professional"
        description="Saurabh Anand — Data Analyst and Digital Marketing Professional. Turning data into insights with SQL, Python, Power BI, Tableau, GA4 and driving growth via SEO, analytics and AI."
        path="/"
        keywords="Saurabh Anand, Data Analyst, SEO, Digital Marketing, Power BI, Tableau, SQL, Python, GA4, Looker Studio, Data Visualization, Dashboard Development, AI Analytics"
        jsonLd={[personJsonLd, websiteJsonLd, faqJsonLd]}
      />
      <PageBackground variant={settings.variant} opacity={settings.opacity} />

      <Navbar />
    <HeroSection />
    <CredibilityStrip />
    <BentoSection />
    <ToolsMarquee />
    <AIPortfolioCategories />
    <SelectedWork />
    <ExperienceSection />
    <PortfolioSection />
    <DataAnalyticsSection />
    <VibeCodingSection />
    <AgenticAISection />
    <AboutSection />
    <SkillsSection />
    <DevFestSection />
    <GallerySection />
    <NowSection />
    <EducationSection />
    <ContactSection />
    <Footer />

      {isAdmin && <HomeBgAdmin />}
    </div>
  );
};

export default Index;
