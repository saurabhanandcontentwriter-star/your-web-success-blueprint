import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "@/data/portfolio";

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
