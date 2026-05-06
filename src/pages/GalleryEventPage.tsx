import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import spaceBg from "@/assets/space-bg.jpg";
import { getEvent } from "@/data/gallery";

const GalleryEventPage = () => {
  const { slug = "" } = useParams();
  const event = getEvent(slug);
  const [idx, setIdx] = useState<number | null>(null);
  if (!event) return <Navigate to="/gallery" replace />;

  const close = () => setIdx(null);
  const prev = () => setIdx((i) => (i !== null ? (i - 1 + event.photos.length) % event.photos.length : null));
  const next = () => setIdx((i) => (i !== null ? (i + 1) % event.photos.length : null));

  return (
    <div className="relative min-h-screen">
      <SEO
        title={event.title}
        description={`${event.title} – ${event.subtitle}. ${event.about}`}
        path={`/gallery/${event.slug}`}
        image={event.photos[0]?.src}
      />
      <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: `url(${spaceBg})` }} />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      <Navbar />
      <article className="pt-24 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <Link to="/gallery" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft size={14} /> Back to gallery
          </Link>

          <p className="section-label mb-2">{event.date}</p>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-3">{event.title}</h1>
          <p className="text-muted-foreground mb-6">{event.subtitle}</p>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">{event.about}</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {event.photos.map((photo, pi) => (
              <button
                key={pi}
                onClick={() => setIdx(pi)}
                className="group relative overflow-hidden rounded-xl border border-border/40 aspect-square"
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </button>
            ))}
          </div>
        </div>
      </article>

      <AnimatePresence>
        {idx !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md"
          >
            <button onClick={close} className="absolute top-6 right-6 text-foreground hover:text-primary z-10"><X size={28} /></button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 md:left-8 text-foreground hover:text-primary z-10"><ChevronLeft size={36} /></button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 md:right-8 text-foreground hover:text-primary z-10"><ChevronRight size={36} /></button>
            <motion.img
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              src={event.photos[idx].src}
              alt={event.photos[idx].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl"
            />
            <div className="absolute bottom-6 text-center text-sm text-muted-foreground">
              {event.photos[idx].alt} · {idx + 1} / {event.photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryEventPage;
