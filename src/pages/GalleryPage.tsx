import { motion } from "framer-motion";
import { ArrowRight, Camera, Images, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import GallerySection from "@/components/GallerySection";
import SEO from "@/components/SEO";
import spaceBg from "@/assets/space-bg.jpg";
import { events } from "@/data/gallery";
import "@/styles/gallery-landing.css";

const GalleryPage = () => {
  const previewPhotos = events.flatMap((event) => event.photos).slice(0, 3);

  return (
    <div className="gallery-landing relative min-h-screen">
      <SEO title="Conference & Event Gallery | Saurabh Anand" description="Explore conference, speaking, community and professional event moments from Saurabh Anand's digital growth journey." path="/gallery" />
      <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-25" style={{ backgroundImage: `url(${spaceBg})` }} />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/50 via-background/85 to-background" />
      <Navbar />

      <main className="container mx-auto px-5 md:px-6 pt-24">
        <section className="gallery-hero">
          <motion.div initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .75 }}>
            <div className="gallery-kicker"><Camera size={13} /> Moments · Community · Growth</div>
            <h1 className="gallery-title mt-5 text-5xl md:text-7xl font-display font-bold leading-[.98] tracking-[-.045em]">Stories captured<br /><span>beyond the screen.</span></h1>
            <p className="gallery-hero-copy mt-6">A visual archive of conferences, community events, speaking moments and professional experiences — built around people, ideas and digital growth.</p>
            <div className="flex flex-wrap gap-3 mt-7">
              <a href="#gallery-collection" className="home-hero-primary">Explore Gallery <ArrowRight size={16} /></a>
              <Link to="/devfest-ranchi" className="home-hero-secondary">DevFest Ranchi</Link>
            </div>
          </motion.div>

          <motion.div className="gallery-collage" initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .15 }}>
            {previewPhotos.map((photo, index) => <img key={index} src={photo.src} alt={photo.alt} />)}
            <div className="gallery-float education-float one"><Images size={14} className="inline mr-2 text-primary" /> {events.length} Events</div>
            <div className="gallery-float education-float two"><Sparkles size={14} className="inline mr-2 text-accent" /> Real moments · Real people</div>
          </motion.div>
        </section>

        <section id="gallery-collection">
          <div className="gallery-event">
            <div className="flex items-end justify-between gap-4 mb-2">
              <div><p className="section-label mb-2">Visual Archive</p><h2 className="text-3xl md:text-4xl font-display font-bold">Conference Highlights</h2></div>
              <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground"><Images size={15} /> {events.reduce((n, e) => n + e.photos.length, 0)} photos</div>
            </div>
            <GallerySection />
          </div>
        </section>
      </main>
    </div>
  );
};

export default GalleryPage;
