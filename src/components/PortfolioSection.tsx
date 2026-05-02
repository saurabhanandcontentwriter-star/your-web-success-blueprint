import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "E-commerce SEO Overhaul",
    company: "TripzyGo",
    stat: "+120% Traffic",
    description: "A complete technical and content SEO overhaul for a travel booking platform.",
    tags: ["Technical SEO", "Content Strategy", "E-commerce"],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=500&fit=crop",
    url: "https://www.tripzygo.in/",
  },
  {
    title: "SaaS Content Authority",
    company: "Guest Blogging Tech",
    stat: "+85% Leads",
    description: "Building a content engine that drives qualified leads with topic cluster strategy.",
    tags: ["Link Building", "Topic Clusters", "SaaS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    url: "https://guestbloggingtech.com/",
  },
  {
    title: "Local SEO for Multi-location Brand",
    company: "Global Retailer",
    stat: "+200% Visibility",
    description: "Optimized Google Business Profiles and localized content for 50+ locations.",
    tags: ["Local SEO", "GBP Optimization", "Scalable SEO"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop",
    url: "https://crazyseoteam.in/",
  },
];

const PortfolioSection = () => {
  const [activeTag, setActiveTag] = useState<string>("All");

  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = activeTag === "All" ? projects : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <p className="section-label mb-2">Portfolio</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Featured Projects</h2>

        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter projects by tag">
          {allTags.map((tag) => {
            const isActive = activeTag === tag;
            return (
              <button
                key={tag}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTag(tag)}
                className={
                  "text-xs px-3 py-1.5 rounded-full border transition-colors " +
                  (isActive
                    ? "bg-foreground text-background border-foreground"
                    : "bg-secondary/40 text-muted-foreground border-border hover:text-foreground hover:border-foreground/40")
                }
              >
                {tag}
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${p.title} case study (opens in new tab)`}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.05 }}
                className="glass-card-hover overflow-hidden group block"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute top-3 right-3 badge-glass font-semibold text-primary">{p.stat}</div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-muted-foreground mb-1">{p.company}</p>
                  <h3 className="text-lg font-display font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-secondary text-secondary-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-sm text-muted-foreground text-center mt-8">No projects match this tag yet.</p>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
