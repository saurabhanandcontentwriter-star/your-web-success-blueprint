import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import SocialSidebar from "@/components/SocialSidebar";
import spaceBg from "@/assets/space-bg.jpg";

const ContactPage = () => (
  <div className="relative min-h-screen">
    <SocialSidebar />
    <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: `url(${spaceBg})` }} />
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    <Navbar />
    <div className="pt-24">
      <ContactSection />
    </div>
  </div>
);

export default ContactPage;
