import Navbar from "@/components/Navbar";
import GallerySection from "@/components/GallerySection";
import spaceBg from "@/assets/space-bg.jpg";

const GalleryPage = () => (
  <div className="relative min-h-screen">
    <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: `url(${spaceBg})` }} />
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    <Navbar />
    <div className="pt-24">
      <GallerySection />
    </div>
  </div>
);

export default GalleryPage;
