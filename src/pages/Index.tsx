import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CredibilityStrip from "@/components/CredibilityStrip";
import SEO from "@/components/SEO";
import { useHomeBgSettings } from "@/components/useHomeBgSettings";
import "@/styles/growth-engine-3d.css";

const BentoSection = lazy(() => import("@/components/BentoSection"));
const ToolsMarquee = lazy(() => import("@/components/ToolsMarquee"));
const AIPortfolioCategories = lazy(() => import("@/components/AIPortfolioCategories"));
const SelectedWork = lazy(() => import("@/components/SelectedWork"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const PortfolioSection = lazy(() => import("@/components/PortfolioSection"));
const DataAnalyticsSection = lazy(() => import("@/components/DataAnalyticsSection"));
const VibeCodingSection = lazy(() => import("@/components/VibeCodingSection"));
const AgenticAISection = lazy(() => import("@/components/AgenticAISection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const DevFestSection = lazy(() => import("@/components/DevFestSection"));
const GallerySection = lazy(() => import("@/components/GallerySection"));
const NowSection = lazy(() => import("@/components/NowSection"));
const EducationSection = lazy(() => import("@/components/EducationSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));
const PageBackground = lazy(() => import("@/components/PageBackground"));
const HomeBgAdmin = lazy(() => import("@/components/HomeBgAdmin"));

const DeferredHomeContent = ({ isAdmin }: { isAdmin: boolean }) => (
  <Suspense fallback={<div className="min-h-[40vh]" aria-hidden="true" />}>
    <PageBackground />
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
  </Suspense>
);

const Index = () => {
  const { settings } = useHomeBgSettings();
  const isAdmin = typeof window !== "undefined" && new URLSearchParams(window.location.search).get("admin") === "1";

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Saurabh Anand",
    url: "https://saurabhanandseo.com/",
    jobTitle: "Data Analyst | SEO & Digital Marketing Professional",
    description: "Data Analyst and Digital Marketing professional turning raw data into business insights using Excel, SQL, Python, Power BI, Tableau and GA4 — while scaling brands through SEO, content strategy and AI.",
    sameAs: ["https://www.linkedin.com/in/saurabhanandseo/"],
    address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" },
    knowsAbout: ["Data Analytics", "SQL", "Python", "Power BI", "Tableau", "Google Analytics 4", "Looker Studio", "SEO", "Digital Marketing", "AI SEO"],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Saurabh Anand",
    url: "https://saurabhanandseo.com/",
    inLanguage: "en",
    publisher: { "@type": "Person", name: "Saurabh Anand" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Who is Saurabh Anand?", acceptedAnswer: { "@type": "Answer", text: "Saurabh Anand is a Data Analyst and SEO & Digital Marketing professional based in New Delhi, India, combining SQL, Python, Power BI, Tableau and GA4 analytics with technical and AI-driven SEO." } },
      { "@type": "Question", name: "What does Saurabh Anand do?", acceptedAnswer: { "@type": "Answer", text: "He builds analytics dashboards and reporting systems, runs technical and content SEO programs, and optimizes brands for AI search surfaces such as Google AI Overviews, ChatGPT, Gemini, Claude and Perplexity." } },
      { "@type": "Question", name: "What tools and skills does Saurabh Anand use?", acceptedAnswer: { "@type": "Answer", text: "Advanced Excel, SQL, Python (Pandas, NumPy, Matplotlib), Power BI, Tableau, Looker Studio, Google Analytics 4, Google Search Console, Ahrefs, Semrush and Screaming Frog, plus AI automation and agentic workflows." } },
      { "@type": "Question", name: "Is Saurabh Anand available for hire?", acceptedAnswer: { "@type": "Answer", text: "Yes. He takes on SEO audits, AI SEO/GEO programs, analytics and dashboard projects, and is open to full-time Data Analyst and SEO roles. Contact: saurabhanandseo@gmail.com." } },
      { "@type": "Question", name: "Where is Saurabh Anand based?", acceptedAnswer: { "@type": "Answer", text: "New Delhi, India. He works remotely with global clients in the IST timezone." } },
    ],
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
      <Navbar />
      <HeroSection />
      <CredibilityStrip />
      <DeferredHomeContent isAdmin={isAdmin} />
    </div>
  );
};

export default Index;
