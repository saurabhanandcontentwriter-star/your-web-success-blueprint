import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CredibilityStrip from "@/components/CredibilityStrip";
import ToolsMarquee from "@/components/ToolsMarquee";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioSection from "@/components/PortfolioSection";
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

  return (
    <div className="relative min-h-screen">
      <SEO
        isHome
        title="Saurabh Anand | Data Analyst | SEO & Digital Marketing Professional"
        description="Saurabh Anand — Data Analyst and Digital Marketing Professional. Turning data into insights with SQL, Python, Power BI, Tableau, GA4 and driving growth via SEO, analytics and AI."
        path="/"
        keywords="Saurabh Anand, Data Analyst, SEO, Digital Marketing, Power BI, Tableau, SQL, Python, GA4, Looker Studio, Data Visualization, Dashboard Development, AI Analytics"
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
