import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const pillars = [
  { key:"SEO", label:"Search Visibility", image:"/portfolio/tripzygo-seo.svg", points:["Technical SEO","On-page & Content","Search Console","Schema"], description:"Technical and content systems built around search intent, crawlability and measurable organic growth." },
  { key:"AI", label:"Intelligent Workflows", image:"/portfolio/crazy-seo-team-ideas.svg", points:["AI Search / GEO","Prompt Engineering","Automation","AI-assisted SEO"], description:"AI-powered workflows that connect prompt engineering, search visibility and scalable execution." },
  { key:"DATA", label:"Insights & Analytics", image:"/portfolio/guest-blogging-saas.svg", points:["SQL & Python","Power BI / Tableau","GA4 & Looker","Dashboards"], description:"Analytics systems that turn search, marketing and product data into clear business decisions." },
  { key:"WEB", label:"Modern Development", image:"/portfolio/anvya.svg", points:["HTML / CSS / JS","React","Tailwind CSS","Vibe coding"], description:"Modern web experiences combining performance, interaction, discoverability and product thinking." },
];

const BentoSection = () => {
  const [active, setActive] = useState(0);
  const next = () => setActive((v) => (v + 1) % pillars.length);
  const prev = () => setActive((v) => (v - 1 + pillars.length) % pillars.length);

  useEffect(() => {
    const timer = window.setInterval(next, 4500);
    return () => window.clearInterval(timer);
  }, []);

  const item = pillars[active];

  return (
    <section id="capabilities" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bento-grid-bg opacity-[0.18]" aria-hidden="true" />
      <div className="container relative mx-auto px-6">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:.5 }} className="mb-12 max-w-3xl">
          <p className="section-label mb-3">The Intersection</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.05]">
            SEO <span className="text-muted-foreground">×</span> AI <span className="text-muted-foreground">×</span> DATA <span className="text-muted-foreground">×</span> <span className="gradient-text">WEB</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">Four disciplines, one workflow — search-driven digital experiences built with analytics, automation and modern web engineering.</p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex justify-center gap-2 overflow-x-auto pb-2">
            {pillars.map((p, i) => (
              <button key={p.key} onClick={() => setActive(i)} className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[.16em] transition-all ${active===i ? "border-primary/50 bg-primary/15 text-primary shadow-[0_0_25px_hsl(var(--primary)/.15)]" : "border-border/60 bg-card/45 text-muted-foreground hover:border-primary/30"}`}>
                {p.key}
              </button>
            ))}
          </div>

          <motion.div key={item.key} initial={{ opacity:0, x:50, rotateY:-8 }} animate={{ opacity:1, x:0, rotateY:0 }} transition={{ duration:.45 }} className="overflow-hidden rounded-[2rem] border border-border/50 bg-card/55 shadow-[0_30px_90px_hsl(0_0%_0%/.25)] backdrop-blur-xl">
            <div className="grid min-h-[460px] lg:grid-cols-[1.05fr_.95fr]">
              <div className="relative min-h-[300px] overflow-hidden bg-background/50 p-5 md:p-7">
                <div className="relative h-full min-h-[300px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70">
                  <img src={item.image} alt={`${item.key} — ${item.label}`} className="h-full w-full object-contain p-3 md:p-5 transition-transform duration-700 hover:scale-[1.025]" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-primary/10 pointer-events-none" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs font-bold tracking-[.2em] text-white backdrop-blur-xl">{item.key}</div>
                </div>
              </div>

              <div className="flex flex-col justify-center p-7 md:p-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-primary">{item.label}</p>
                <h3 className="font-display text-3xl font-bold md:text-5xl">{item.key}</h3>
                <p className="mt-4 max-w-xl leading-7 text-muted-foreground">{item.description}</p>
                <div className="mt-7 grid grid-cols-2 gap-3">
                  {item.points.map((point) => <div key={point} className="rounded-xl border border-border/50 bg-background/35 px-3 py-3 text-sm text-muted-foreground">{point}</div>)}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-6 flex items-center justify-center gap-5">
            <button onClick={prev} className="h-10 w-10 rounded-full border border-border/60 bg-card/50 text-lg text-muted-foreground transition hover:border-primary/40 hover:text-foreground" aria-label="Previous discipline">‹</button>
            <div className="flex gap-2">
              {pillars.map((p, i) => <button key={p.key} onClick={() => setActive(i)} aria-label={p.key} className={`h-2 rounded-full transition-all ${active===i ? "w-9 bg-primary" : "w-2 bg-border"}`} />)}
            </div>
            <button onClick={next} className="h-10 w-10 rounded-full border border-border/60 bg-card/50 text-lg text-muted-foreground transition hover:border-primary/40 hover:text-foreground" aria-label="Next discipline">›</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoSection;
