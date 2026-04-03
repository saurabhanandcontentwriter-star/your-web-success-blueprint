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
import SocialSidebar from "@/components/SocialSidebar";
import spaceBg from "@/assets/space-bg.jpg";

const Index = () => (
  <div className="relative min-h-screen">
    <SocialSidebar />
    {/* Fixed cosmic background */}
    <div
      className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-30"
      style={{ backgroundImage: `url(${spaceBg})` }}
    />
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/80 to-background" />

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

    <footer className="border-t border-border/40 py-8 text-center">
      <p className="text-xs text-muted-foreground">© 2024 Saurabh Anand. All rights reserved.</p>
    </footer>
  </div>
);

export default Index;
