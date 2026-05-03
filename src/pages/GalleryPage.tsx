import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import SEO from "@/components/SEO";
import spaceBg from "@/assets/space-bg.jpg";

const GalleryPage = () => (
  <div className="relative min-h-screen">
    <SEO title="Conference & Event Gallery" description="View photos from conferences, events, and professional meetups attended by Saurabh Anand in the SEO and digital marketing space." path="/gallery" />
    <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: `url(${spaceBg})` }} />
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    <Navbar />
    <div className="pt-24">
      <GallerySection />
    </div>
    <Footer />
  </div>
);

export default GalleryPage;
