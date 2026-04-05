import Navbar from "@/components/Navbar";
import ExperienceSection from "@/components/ExperienceSection";
import SocialSidebar from "@/components/SocialSidebar";
import spaceBg from "@/assets/space-bg.jpg";

const ExperiencePage = () => (
  <div className="relative min-h-screen">
    <SocialSidebar />
    <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: `url(${spaceBg})` }} />
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    <Navbar />
    <div className="pt-24">
      <ExperienceSection />
    </div>
  </div>
);

export default ExperiencePage;
