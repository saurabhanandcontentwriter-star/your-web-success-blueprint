import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/PortfolioSection";
import SEO from "@/components/SEO";
import PageBackground from "@/components/PageBackground";

const PortfolioPage = () => (
  <div className="relative min-h-screen">
    <SEO title="Portfolio & Projects" description="Browse Saurabh Anand's featured SEO and digital marketing projects, case studies, and successful campaigns with measurable results." path="/portfolio" />
    <PageBackground variant="portfolio" />
    <Navbar />
    <div className="pt-24">
      <PortfolioSection />
    </div>
    <Footer />
  </div>
);

export default PortfolioPage;
