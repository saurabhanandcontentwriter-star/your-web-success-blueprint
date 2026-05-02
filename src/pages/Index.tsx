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

    <footer className="border-t border-border/40 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-display font-semibold text-sm mb-3">Saurabh Anand</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">SEO Analyst & Digital Marketing Professional based in New Delhi, India.</p>
          </div>
          <div>
            <h3 className="font-display font-semibold text-sm mb-3">Explore</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="/experience" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Experience</a></li>
              <li><a href="/skills" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Skills</a></li>
              <li><a href="/now" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Now</a></li>
              <li><a href="/portfolio" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Portfolio</a></li>
              <li><a href="/gallery" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Gallery</a></li>
              <li><a href="/education" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Education</a></li>
              <li><a href="/contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold text-sm mb-3">My Websites</h3>
            <ul className="space-y-2">
              <li><a href="https://crazyseoteam.in" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">crazyseoteam.in</a></li>
              <li><a href="https://www.papajupiter.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">papajupiter.com</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold text-sm mb-3">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/in/saurabhanandseo/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a></li>
              <li><a href="https://x.com/saurabhanandseo" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Twitter / X</a></li>
              <li><a href="https://instagram.com/saurabhanandseo" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Instagram</a></li>
              <li><a href="https://github.com/saurabhanandseo" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/40 pt-6 text-center">
          <p className="text-xs text-muted-foreground">© 2025 Saurabh Anand. All rights reserved.</p>
        </div>
      </div>
    </footer>
      {isAdmin && <HomeBgAdmin />}
    </div>
  );
};

export default Index;
