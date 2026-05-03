import Navbar from "@/components/Navbar";
import NowSection from "@/components/NowSection";
import SEO from "@/components/SEO";
import spaceBg from "@/assets/space-bg.jpg";

const NowPage = () => (
  <div className="relative min-h-screen">
    <SEO title="What I'm Doing Now" description="See what Saurabh Anand is currently focused on – latest SEO trends, LinkedIn content creation, AI marketing experiments, and professional development." path="/now" />
    <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: `url(${spaceBg})` }} />
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    <Navbar />
    <div className="pt-24">
      <NowSection />
    </div>
  </div>
);

export default NowPage;
