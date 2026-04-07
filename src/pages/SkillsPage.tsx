import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/SkillsSection";
import SEO from "@/components/SEO";
import spaceBg from "@/assets/space-bg.jpg";

const SkillsPage = () => (
  <div className="relative min-h-screen">
    <SEO title="Technical Skills" description="Discover Saurabh Anand's technical skills in SEO tools, analytics platforms, AI marketing, content strategy, and digital marketing technologies." path="/skills" />
    <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: `url(${spaceBg})` }} />
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    <Navbar />
    <div className="pt-24">
      <SkillsSection />
    </div>
  </div>
);

export default SkillsPage;
