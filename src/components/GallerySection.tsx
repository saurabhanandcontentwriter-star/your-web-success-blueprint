import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { events } from "@/data/gallery";

const allPhotos = events.flatMap((e) => e.photos);

const GallerySection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (globalIndex: number) => setLightboxIndex(globalIndex);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + allPhotos.length) % allPhotos.length : null));
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % allPhotos.length : null));

  let globalCounter = 0;

  return (
    <>
      <section id="gallery" className="py-24">
        <div className="container mx-auto px-6">
          <p className="section-label mb-2">Events & Gallery</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">Conference Highlights</h2>

          <div className="space-y-16">
            {events.map((event, ei) => {
              const startIndex = globalCounter;
              globalCounter += event.photos.length;
              return (
                <motion.div
                  key={ei}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-6 flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-display font-semibold">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">{event.subtitle}</p>
                    </div>
                    <Link to={`/gallery/${event.slug}`} className="text-xs text-primary hover:underline shrink-0">
                      View event →
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {event.photos.map((photo, pi) => (
                      <motion.div
                        key={pi}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: pi * 0.1 }}
                        onClick={() => openLightbox(startIndex + pi)}
                        className="group relative overflow-hidden rounded-xl border border-border/40 aspect-[3/4] md:aspect-square cursor-pointer"
                      >
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <span className="text-xs text-foreground font-medium">{photo.alt}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors z-10">
              <X size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 text-foreground hover:text-primary transition-colors z-10"
            >
              <ChevronLeft size={36} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 text-foreground hover:text-primary transition-colors z-10"
            >
              <ChevronRight size={36} />
            </button>

            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={allPhotos[lightboxIndex].src}
              alt={allPhotos[lightboxIndex].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-6 text-center text-sm text-muted-foreground">
              {allPhotos[lightboxIndex].alt} · {lightboxIndex + 1} / {allPhotos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;
