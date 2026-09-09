import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, BrainCircuit, Code2, Layers3, MousePointer2, Search, Sparkles, Zap } from "lucide-react";
import { projects } from "@/data/portfolio";

const skills = ["SEO Strategy", "AI Automation", "Data Analytics", "Vibe Coding", "Content Systems", "Growth Marketing"];

const PortfolioSection = () => {
  const [activeTag, setActiveTag] = useState<string>("All");
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = activeTag === "All" ? projects : projects.filter((p) => p.tags.includes(activeTag));

  const handlePointerMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };

  return (
    <section id="portfolio" onMouseMove={handlePointerMove} onMouseLeave={() => setPointer({ x: 0, y: 0 })} className="portfolio-3d-shell relative overflow-hidden py-12 md:py-20">
      <div className="portfolio-grid absolute inset-0 pointer-events-none" />
      <div className="portfolio-orb portfolio-orb-one" />
      <div className="portfolio-orb portfolio-orb-two" />

      {/* 3D HERO */}
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid min-h-[620px] items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div
            style={{ x: pointer.x * -8, y: pointer.y * -5 }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="relative z-20 max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5" />
              Saurabh Anand · Digital Portfolio
            </div>
            <h1 className="text-5xl font-display font-bold leading-[.98] tracking-tight sm:text-6xl md:text-8xl">
              I build <span className="gradient-text">growth systems</span> that move.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground md:text-xl">
              SEO strategy, AI automation, data analytics and creative technology — brought together in one interactive portfolio.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#featured-work" className="portfolio-hero-button">
                Explore my work <ArrowDown className="h-4 w-4" />
              </a>
              <div className="portfolio-pill"><MousePointer2 className="h-4 w-4 text-primary" /> Move your cursor</div>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {[{ n: "SEO", i: Search }, { n: "AI", i: BrainCircuit }, { n: "Code", i: Code2 }].map(({ n, i: Icon }) => (
                <div key={n} className="portfolio-mini-card">
                  <Icon className="mb-3 h-5 w-5 text-primary" />
                  <span>{n}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative mx-auto h-[480px] w-full max-w-[520px]" style={{ perspective: "1200px" }}>
            <motion.div
              animate={{ rotateY: pointer.x * 10, rotateX: pointer.y * -8, x: pointer.x * 12, y: pointer.y * 8 }}
              transition={{ type: "spring", stiffness: 70, damping: 18 }}
              className="portfolio-3d-stage"
            >
              <div className="portfolio-3d-ring ring-a" />
              <div className="portfolio-3d-ring ring-b" />
              <div className="portfolio-3d-ring ring-c" />
              <div className="portfolio-core">
                <div className="portfolio-core-inner">
                  <Sparkles className="h-10 w-10 text-primary" />
                  <strong>GROWTH</strong>
                  <span>ENGINE</span>
                </div>
              </div>
              <div className="portfolio-float-chip chip-seo"><Search /> SEO</div>
              <div className="portfolio-float-chip chip-ai"><BrainCircuit /> AI</div>
              <div className="portfolio-float-chip chip-data"><Zap /> DATA</div>
              <div className="portfolio-float-chip chip-code"><Code2 /> CODE</div>
            </motion.div>
          </div>
        </div>

        {/* 3D SKILL CLOUD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-5xl"
        >
          <div className="mb-5 text-center text-xs font-semibold uppercase tracking-[.25em] text-muted-foreground">Core stack</div>
          <div className="portfolio-skill-cloud">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                animate={{ y: [0, index % 2 ? -8 : 8, 0], rotateZ: [0, index % 2 ? 1 : -1, 0] }}
                transition={{ duration: 4 + index * .35, repeat: Infinity, ease: "easeInOut" }}
                className="portfolio-skill-3d"
              >
                <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div id="featured-work" className="mx-auto mb-12 max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary backdrop-blur-xl">
            <Layers3 className="h-3.5 w-3.5" /> Selected Work
          </div>
          <h2 className="text-4xl font-display font-bold sm:text-5xl md:text-6xl">Projects in another dimension.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Real projects, measurable outcomes and the strategy behind the growth.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <div className="portfolio-pill"><Layers3 className="h-4 w-4 text-primary" /> {projects.length} Featured Projects</div>
            <div className="portfolio-pill"><Zap className="h-4 w-4 text-primary" /> Performance Driven</div>
            <div className="portfolio-pill"><Sparkles className="h-4 w-4 text-primary" /> AI + SEO</div>
          </div>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter projects by tag">
          {allTags.map((tag) => {
            const isActive = activeTag === tag;
            return <button key={tag} role="tab" aria-selected={isActive} onClick={() => setActiveTag(tag)} className={`portfolio-filter ${isActive ? "portfolio-filter-active" : ""}`}>{tag}</button>;
          })}
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3" style={{ perspective: "1600px" }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div key={p.title} layout initial={{ opacity: 0, y: 50, rotateX: 12 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} exit={{ opacity: 0, scale: .94, y: 20 }} transition={{ delay: i * .08, duration: .55, type: "spring", stiffness: 90 }} className="portfolio-card-3d group">
                <Link to={`/portfolio/${p.slug}`} aria-label={`Open ${p.title} case study`} className="block h-full">
                  <div className="portfolio-card-glow" />
                  <div className="relative h-60 overflow-hidden rounded-t-[1.35rem]">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
                    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-xl"><span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" /> Case Study</div>
                    <div className="absolute bottom-4 right-4 rounded-xl border border-white/20 bg-black/35 px-3 py-2 text-sm font-bold text-white backdrop-blur-xl">{p.stat}</div>
                  </div>
                  <div className="relative flex h-[260px] flex-col rounded-b-[1.35rem] border-x border-b border-white/10 bg-card/75 p-6 backdrop-blur-2xl">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">{p.company}</p>
                    <div className="flex items-start justify-between gap-4"><h3 className="text-xl font-display font-bold leading-tight">{p.title}</h3><span className="shrink-0 rounded-full border border-border/60 bg-background/40 p-2 text-muted-foreground transition group-hover:border-primary/40 group-hover:text-primary"><ArrowUpRight className="h-4 w-4" /></span></div>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">{p.description}</p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-5">{p.tags.map((t) => <span key={t} className="rounded-lg border border-border/50 bg-secondary/60 px-2.5 py-1 text-[10px] font-medium text-secondary-foreground backdrop-blur-sm">{t}</span>)}</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && <p className="mt-8 text-center text-sm text-muted-foreground">No projects match this tag yet.</p>}
      </div>
    </section>
  );
};

export default PortfolioSection;
