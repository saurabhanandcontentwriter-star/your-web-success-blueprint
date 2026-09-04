import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search,
  Bot,
  BarChart3,
  Code2,
  ArrowUpRight,
  Gauge,
  Layers,
} from "lucide-react";

/**
 * SaaS-style bento grid: modular capability tiles that summarise the
 * SEO x AI x DATA x WEB identity in one scannable block.
 */

const pillars = [
  {
    key: "SEO",
    label: "Search Visibility",
    icon: Search,
    tone: "text-primary",
    ring: "hover:border-primary/50",
    points: ["Technical SEO", "On-page & Content", "Search Console", "Schema"],
  },
  {
    key: "AI",
    label: "Intelligent Workflows",
    icon: Bot,
    tone: "text-accent",
    ring: "hover:border-accent/50",
    points: ["AI Search / GEO", "Prompt Engineering", "Automation", "AI-assisted SEO"],
  },
  {
    key: "DATA",
    label: "Insights & Analytics",
    icon: BarChart3,
    tone: "text-emerald-400",
    ring: "hover:border-emerald-400/50",
    points: ["SQL & Python", "Power BI / Tableau", "GA4 & Looker", "Dashboards"],
  },
  {
    key: "WEB",
    label: "Modern Development",
    icon: Code2,
    tone: "text-amber-400",
    ring: "hover:border-amber-400/50",
    points: ["HTML / CSS / JS", "React", "Tailwind CSS", "Vibe coding"],
  },
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const BentoSection = () => (
  <section id="capabilities" className="relative py-24">
    <div className="pointer-events-none absolute inset-0 bento-grid-bg opacity-[0.18]" aria-hidden="true" />

    <div className="container relative mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-12 max-w-2xl"
      >
        <p className="section-label mb-3">The Intersection</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.05]">
          SEO <span className="text-muted-foreground">×</span> AI{" "}
          <span className="text-muted-foreground">×</span> DATA{" "}
          <span className="text-muted-foreground">×</span>{" "}
          <span className="gradient-text">WEB</span>
        </h2>
        <p className="mt-4 text-muted-foreground md:text-lg">
          Four disciplines, one workflow — search-driven digital experiences built with
          analytics, automation and modern web engineering.
        </p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2">
        {pillars.map((p, i) => (
          <motion.article
            key={p.key}
            custom={i}
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className={`bento-tile ${p.ring} ${i === 0 ? "md:col-span-2 md:row-span-1" : ""}`}
          >
            <p.icon size={20} className={`${p.tone} mb-4`} aria-hidden="true" />
            <h3 className="font-display text-2xl font-bold tracking-tight">{p.key}</h3>
            <p className="text-sm text-muted-foreground">{p.label}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.points.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border/60 bg-secondary/50 px-2.5 py-1 text-xs text-secondary-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}

        {/* Wide CTA tile */}
        <motion.div
          custom={4}
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="bento-tile md:col-span-2 flex flex-col justify-between"
        >
          <div>
            <Layers size={20} className="text-primary mb-4" aria-hidden="true" />
            <h3 className="font-display text-xl font-bold">Selected work</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              CampusSphere AI, Crazy SEO Team and an admin dashboard & CRM concept —
              built end to end.
            </p>
          </div>
          <a
            href="#selected-work"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
          >
            View projects <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div
          custom={5}
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="bento-tile md:col-span-2 flex flex-col justify-between"
        >
          <div>
            <Gauge size={20} className="text-accent mb-4" aria-hidden="true" />
            <h3 className="font-display text-xl font-bold">Ready for AI search</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Content and structured data tuned for Google AI Overviews, ChatGPT,
              Gemini, Claude and Perplexity.
            </p>
          </div>
          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
          >
            More about me <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default BentoSection;
