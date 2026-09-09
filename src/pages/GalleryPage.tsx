import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Camera, Images, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import GallerySection from "@/components/GallerySection";
import SEO from "@/components/SEO";
import spaceBg from "@/assets/space-bg.jpg";
import { events } from "@/data/gallery";
import "@/styles/gallery-landing.css";

const GalleryPage = () => {
  const photos = events.flatMap((event) => event.photos);
  const previewPhotos = photos.slice(0, 3);
  const photoCount = photos.length;

  return (
    <div className="gallery-landing relative min-h-screen">
      <SEO
        title="Gallery | Saurabh Anand"
        description="A visual gallery of conferences, community events, speaking moments and professional experiences from Saurabh Anand's digital growth journey."
        path="/gallery"
      />

      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ backgroundImage: `url(${spaceBg})` }}
      />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/45 via-background/85 to-background" />
      <Navbar />

      <main>
        <section className="gallery-hero container mx-auto px-5 md:px-6 pt-28 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="gallery-hero-content"
          >
            <div className="gallery-kicker">
              <Camera size={14} />
              <span>Visual archive · 2026</span>
            </div>

            <h1 className="gallery-title mt-6 text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-[-0.05em]">
              Moments that
              <br />
              <span>tell the story.</span>
            </h1>

            <p className="gallery-hero-copy mt-7">
              Conferences, communities, stages and people — a curated visual journey through the experiences that shaped my work in SEO, digital marketing, AI and developer communities.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-8">
              <a href="#gallery-collection" className="home-hero-primary">
                Explore the gallery <ArrowRight size={16} />
              </a>
              <Link to="/devfest-ranchi" className="home-hero-secondary">
                DevFest Ranchi
              </Link>
            </div>

            <div className="gallery-stats mt-10">
              <div><strong>{events.length}</strong><span>Events</span></div>
              <div><strong>{photoCount}+</strong><span>Moments</span></div>
              <div><strong>∞</strong><span>Stories</span></div>
            </div>
          </motion.div>

          <motion.div
            className="gallery-collage"
            initial={{ opacity: 0, scale: 0.86, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.12, ease: "easeOut" }}
          >
            {previewPhotos.map((photo, index) => (
              <motion.img
                key={`${photo.src}-${index}`}
                src={photo.src}
                alt={photo.alt}
                loading={index === 0 ? "eager" : "lazy"}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.25 + index * 0.12 }}
              />
            ))}

            <div className="gallery-float gallery-float-one">
              <Images size={15} />
              <span>{events.length} Events</span>
            </div>
            <div className="gallery-float gallery-float-two">
              <Sparkles size={15} />
              <span>Real moments · Real people</span>
            </div>
          </motion.div>
        </section>

        <div className="gallery-scroll-hint" aria-hidden="true">
          <ArrowDown size={15} /> Scroll to explore
        </div>

        <section id="gallery-collection" className="container mx-auto px-5 md:px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="gallery-collection-header"
          >
            <div>
              <p className="section-label mb-2">The collection</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
                Conference & community highlights
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground leading-7">
                Every frame captures a different part of the journey — learning, speaking, building, networking and creating with the community.
              </p>
            </div>
            <div className="gallery-count-pill">
              <Images size={15} /> {photoCount} photos
            </div>
          </motion.div>

          <div className="gallery-event">
            <GallerySection />
          </div>
        </section>
      </main>
    </div>
  );
};

export default GalleryPage;
