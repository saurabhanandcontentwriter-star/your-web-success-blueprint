import { motion } from "framer-motion";
import aiSummitFlags from "@/assets/gallery/ai-summit-flags.png";
import aiSummitFountain from "@/assets/gallery/ai-summit-fountain.jpg";
import aiSummitBanner from "@/assets/gallery/ai-summit-banner.jpg";
import aiSummitInvite from "@/assets/gallery/ai-summit-invite.jpg";
import devfestStage from "@/assets/gallery/devfest-stage.jpg";
import devfestVenue from "@/assets/gallery/devfest-venue.jpg";

const events = [
  {
    title: "AI Impact Summit India 2026",
    subtitle: "Central Government Initiative · Bharat Mandapam, New Delhi",
    photos: [
      { src: aiSummitInvite, alt: "AI Impact Summit 2026 - Official Delegate Invitation" },
      { src: aiSummitFlags, alt: "AI Impact Summit 2026 - With International Flags" },
      { src: aiSummitFountain, alt: "AI Impact Summit 2026 - At Bharat Mandapam" },
      { src: aiSummitBanner, alt: "AI Impact Summit 2026 - Event Banner" },
    ],
  },
  {
    title: "Google DevFest Ranchi 2025",
    subtitle: "Google Developer Groups · Ranchi",
    photos: [
      { src: devfestVenue, alt: "Google DevFest 2025 - Main Stage" },
      { src: devfestStage, alt: "Google DevFest 2025 - Sponsor Wall" },
    ],
  },
];

const GallerySection = () => (
  <section id="gallery" className="py-24">
    <div className="container mx-auto px-6">
      <p className="section-label mb-2">Events & Gallery</p>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
        Conference Highlights
      </h2>

      <div className="space-y-16">
        {events.map((event, ei) => (
          <motion.div
            key={ei}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <h3 className="text-xl font-display font-semibold">{event.title}</h3>
              <p className="text-sm text-muted-foreground">{event.subtitle}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {event.photos.map((photo, pi) => (
                <motion.div
                  key={pi}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: pi * 0.1 }}
                  className="group relative overflow-hidden rounded-xl border border-border/40 aspect-[3/4] md:aspect-square"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
