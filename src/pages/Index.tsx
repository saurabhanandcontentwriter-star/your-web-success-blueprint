import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CredibilityStrip from "@/components/CredibilityStrip";
import ToolsMarquee from "@/components/ToolsMarquee";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioSection from "@/components/PortfolioSection";
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
    jobTitle: "SEO Analyst & Digital Marketing Professional",
    description:
      "Results-driven SEO Analyst and Digital Marketing Professional with 2+ years of experience in search engine optimization, content strategy, and organic growth.",
    sameAs: ["https://www.linkedin.com/in/saurabhanandseo/"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressCountry: "IN",
    },
    knowsAbout: [
      "SEO",
      "Digital Marketing",
      "Content Strategy",
      "Link Building",
      "AI Marketing",
      "Social Media Analytics",
      "Google Analytics",
    ],
  };

  return (
    <div className="relative min-h-screen">
      <SEO
        isHome
        title="Saurabh Anand | SEO Analyst & Digital Marketing Expert"
        description="Saurabh Anand – Results-driven SEO Analyst & Digital Marketing Professional with 2+ years of experience in SEO, content strategy, link-building, and organic growth. LinkedIn Top Voice 2024."
        path="/"
        keywords="Saurabh Anand, SEO Analyst, Digital Marketing, LinkedIn Top Voice, Google Certified, Content Strategy, Link Building, Social Media Analyst, AI Marketer, SEO Expert India"
        jsonLd={personJsonLd}
      />
      <PageBackground variant={settings.variant} opacity={settings.opacity} />

      <Navbar />
    <HeroSection />
    <CredibilityStrip />
    <ToolsMarquee />
    <AIPortfolioCategories />
    <ExperienceSection />
    <PortfolioSection />
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
