import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/SEO";
import spaceBg from "@/assets/space-bg.jpg";

const ContactPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Saurabh Anand",
    url: "https://saurabhanandseo.com/contact",
    description:
      "Contact Saurabh Anand — Data Analyst and SEO & Digital Marketing Professional. Download resume, email, or send a message for consulting and full-time roles.",
    significantLink: "https://saurabhanandseo.com/Saurabh_Anand_Resume.pdf",
    mainEntity: {
      "@type": "Person",
      name: "Saurabh Anand",
      email: "mailto:saurabhanandseo@gmail.com",
      telephone: "+91 7209742159",
      sameAs: ["https://www.linkedin.com/in/saurabhanandseo/"],
    },
  };

  return (
    <div className="relative min-h-screen">
      <SEO
        title="Contact Saurabh Anand | Data Analyst & SEO Consultant — Resume Download"
        description="Contact Saurabh Anand for Data Analyst roles, SEO & Digital Marketing consulting, or freelance projects. Download resume, email, or send a message directly."
        path="/contact"
        keywords="Contact Saurabh Anand, hire data analyst, SEO consultant India, resume download, digital marketing consultant, LinkedIn Saurabh Anand"
        jsonLd={jsonLd}
      />
      <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: `url(${spaceBg})` }} />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      <Navbar />
      <div className="pt-24">
        <ContactSection />
      </div>
    </div>
  );
};

export default ContactPage;
