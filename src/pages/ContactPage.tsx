import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/SEO";
import spaceBg from "@/assets/space-bg.jpg";

const ContactPage = () => (
  <div className="relative min-h-screen">
    <SEO title="Contact Me" description="Get in touch with Saurabh Anand for SEO consulting, digital marketing collaborations, speaking opportunities, or professional inquiries." path="/contact" />
    <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: `url(${spaceBg})` }} />
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    <Navbar />
    <div className="pt-24">
      <ContactSection />
    </div>
  </div>
);

export default ContactPage;
