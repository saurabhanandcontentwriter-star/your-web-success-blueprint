import { motion } from "framer-motion";
import {
  Search,
  Bot,
  Workflow,
  BarChart3,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import logo from "@/assets/logo.jpeg";

/** Running flash strip: brand logo + "AI × GROWTH" ticker. */
const FlashStrip = () => {
  const items = Array.from({ length: 8 });
  return (
    <div
      className="relative overflow-hidden border-y border-border/40 bg-secondary/30 py-3 mb-12"
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {[...items, ...items].map((_, i) => (
          <span key={i} className="flex items-center gap-3">
            <img
              src={logo}
              alt=""
              width={28}
              height={28}
              loading="lazy"
              className="w-7 h-7 rounded-full border border-primary/40 object-cover"
            />
            <span className="font-display font-bold text-sm md:text-base tracking-[0.25em] uppercase gradient-text">
              AI × Growth
            </span>
            <Sparkles size={14} className="text-primary" />
            <TrendingUp size={14} className="text-accent" />
          </span>
        ))}
      </div>
    </div>
  );
};

const categories = [
  {
    title: "SEO Platforms",
    icon: <Search size={16} className="text-primary" />,
    color: "border-primary/30",
    tools: [
      "Ahrefs",
      "Semrush",
      "Screaming Frog",
      "Sitebulb",
      "Botify",
      "BrightEdge",
      "Conductor",
    ],
  },
  {
    title: "AI & GEO Tools",
    icon: <Bot size={16} className="text-accent" />,
    color: "border-accent/30",
    tools: [
      "ChatGPT",
      "Claude",
      "Perplexity",
      "Gemini",
      "Grok",
      "Manus",
      "Cursor",
      "Windsurf",
    ],
  },
  {
    title: "Automation",
    icon: <Workflow size={16} className="text-emerald-400" />,
    color: "border-emerald-400/30",
    tools: [
      "n8n",
      "Make",
      "Zapier",
      "Airtable",
      "Notion AI",
    ],
  },
  {
    title: "Analytics",
    icon: <BarChart3 size={16} className="text-amber-400" />,
    color: "border-amber-400/30",
    tools: [
      "GA4",
      "BigQuery",
      "Looker Studio",
      "Hotjar",
      "Mixpanel",
      "Heap",
    ],
  },
];

const ToolsMarquee = () => (
  <section className="py-16 border-y border-border/40">
    <FlashStrip />
    <div className="container mx-auto px-6">
      <p className="section-label text-center mb-2">Stack</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
        AI & SEO Tech Stack
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`glass-card p-5 ${cat.color}`}
          >
            <div className="flex items-center gap-2 mb-4">
              {cat.icon}
              <h3 className="font-display font-semibold text-sm">
                {cat.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-md bg-secondary/60 text-xs text-muted-foreground border border-border/30 hover:text-foreground hover:border-primary/30 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ToolsMarquee;
