import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import SEO from "@/components/SEO";
import spaceBg from "@/assets/space-bg.jpg";

const AboutPage = () => (
  <div className="relative min-h-screen">
    <SEO title="About Me" description="Learn about Saurabh Anand – SEO Analyst & Digital Marketing Professional with 2+ years of experience in SEO, content strategy, and organic growth." path="/about" />
    <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: `url(${spaceBg})` }} />
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    <Navbar />
    <div className="pt-24">
      <AboutSection />
    </div>
    <Footer />
  </div>
);

export default AboutPage;
