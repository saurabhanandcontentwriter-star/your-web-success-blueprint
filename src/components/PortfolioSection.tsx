import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Layers3, Sparkles, Zap } from "lucide-react";
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
    <section id="portfolio" className="portfolio-3d-shell relative overflow-hidden py-20 md:py-28">
      <div className="portfolio-grid absolute inset-0 pointer-events-none" />
      <div className="portfolio-orb portfolio-orb-one" />
      <div className="portfolio-orb portfolio-orb-two" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5" />
            Digital Lab · Selected Work
          </div>
          <h1 className="text-4xl font-display font-bold leading-tight sm:text-5xl md:text-7xl">
            My work, <span className="gradient-text">in another dimension.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            SEO strategy, content systems and growth experiments presented as an interactive 3D portfolio.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { icon: Layers3, text: `${projects.length} Featured Projects` },
              { icon: Zap, text: "Performance Driven" },
              { icon: Sparkles, text: "AI + SEO" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="portfolio-pill">
                <Icon className="h-4 w-4 text-primary" />
                {text}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mb-12 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter projects by tag">
          {allTags.map((tag) => {
            const isActive = activeTag === tag;
            return (
              <button
                key={tag}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTag(tag)}
                className={`portfolio-filter ${isActive ? "portfolio-filter-active" : ""}`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3" style={{ perspective: "1600px" }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 50, rotateX: 12 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 20 }}
                transition={{ delay: i * 0.08, duration: 0.55, type: "spring", stiffness: 90 }}
                className="portfolio-card-3d group"
              >
                <Link to={`/portfolio/${p.slug}`} aria-label={`Open ${p.title} case study`} className="block h-full">
                  <div className="portfolio-card-glow" />
                  <div className="relative h-60 overflow-hidden rounded-t-[1.35rem]">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
                    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-xl">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
                      Case Study
                    </div>
                    <div className="absolute bottom-4 right-4 rounded-xl border border-white/20 bg-black/35 px-3 py-2 text-sm font-bold text-white backdrop-blur-xl">
                      {p.stat}
                    </div>
                  </div>

                  <div className="relative flex h-[260px] flex-col rounded-b-[1.35rem] border-x border-b border-white/10 bg-card/75 p-6 backdrop-blur-2xl">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">{p.company}</p>
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="text-xl font-display font-bold leading-tight">{p.title}</h2>
                      <span className="shrink-0 rounded-full border border-border/60 bg-background/40 p-2 text-muted-foreground transition group-hover:border-primary/40 group-hover:text-primary">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">{p.description}</p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-5">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-lg border border-border/50 bg-secondary/60 px-2.5 py-1 text-[10px] font-medium text-secondary-foreground backdrop-blur-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="mt-8 text-center text-sm text-muted-foreground">No projects match this tag yet.</p>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
