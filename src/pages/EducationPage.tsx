import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EducationSection from "@/components/EducationSection";
import SEO from "@/components/SEO";
import spaceBg from "@/assets/space-bg.jpg";

const EducationPage = () => (
  <div className="relative min-h-screen">
    <SEO title="Education & Certifications" description="Explore Saurabh Anand's academic background, Google certifications, and professional training in SEO and digital marketing." path="/education" />
    <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: `url(${spaceBg})` }} />
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    <Navbar />
    <div className="pt-24">
      <EducationSection />
    </div>
  </div>
);

export default EducationPage;
