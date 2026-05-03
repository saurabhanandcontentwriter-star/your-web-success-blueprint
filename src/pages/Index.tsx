import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ToolsMarquee from "@/components/ToolsMarquee";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import NowSection from "@/components/NowSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import GallerySection from "@/components/GallerySection";
import PageBackground from "@/components/PageBackground";
import HomeBgAdmin from "@/components/HomeBgAdmin";
import { useHomeBgSettings } from "@/components/useHomeBgSettings";

const Index = () => {
  const { settings } = useHomeBgSettings();
  const isAdmin = typeof window !== "undefined" && new URLSearchParams(window.location.search).get("admin") === "1";

  return (
    <div className="relative min-h-screen">
      <PageBackground variant={settings.variant} opacity={settings.opacity} />

      <Navbar />
    <HeroSection />
    <ToolsMarquee />
    <ExperienceSection />
    <PortfolioSection />
    <AboutSection />
    <SkillsSection />
    <GallerySection />
    <NowSection />
    <EducationSection />
    <ContactSection />

    <Footer />

export default Index;
