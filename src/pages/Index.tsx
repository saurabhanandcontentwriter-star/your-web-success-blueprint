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

    <footer className="border-t border-border/40 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display font-semibold text-sm mb-3">Saurabh Anand</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">SEO Analyst & Digital Marketing Professional based in New Delhi, India.</p>
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
  </div>
);

export default Index;
