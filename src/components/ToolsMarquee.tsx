import { motion } from "framer-motion";
import React from "react";
import type { CSSProperties } from "react";
import { Search, Bot, Workflow, BarChart3, ArrowUpRight } from "lucide-react";
import workCrazySeo from "@/assets/work-crazyseo.jpg";
import workAdminCrm from "@/assets/work-admin-crm.jpg";
import crazyseoSite from "@/assets/crazyseo-site.png";
import workCampussphere from "@/assets/work-campussphere.jpg";

const keywordScreenshots: Record<string, string> = {
  Ahrefs: "https://image.thum.io/get/width/520/crop/700/noanimate/https://ahrefs.com/dashboard",
  Semrush: "https://image.thum.io/get/width/520/crop/700/noanimate/https://www.semrush.com/",
  "Screaming Frog": "https://image.thum.io/get/width/520/crop/700/noanimate/https://www.screamingfrog.co.uk/seo-spider/",
  Sitebulb: "https://image.thum.io/get/width/520/crop/700/noanimate/https://sitebulb.com/",
  Botify: "https://image.thum.io/get/width/520/crop/700/noanimate/https://www.botify.com/",
  BrightEdge: "https://image.thum.io/get/width/520/crop/700/noanimate/https://www.brightedge.com/",
  Conductor: "https://image.thum.io/get/width/520/crop/700/noanimate/https://www.conductor.com/",
  ChatGPT: "https://image.thum.io/get/width/520/crop/700/noanimate/https://chatgpt.com/",
  Claude: "https://image.thum.io/get/width/520/crop/700/noanimate/https://claude.ai/",
  Perplexity: "https://image.thum.io/get/width/520/crop/700/noanimate/https://www.perplexity.ai/",
  Gemini: "https://image.thum.io/get/width/520/crop/700/noanimate/https://gemini.google.com/",
  Grok: "https://image.thum.io/get/width/520/crop/700/noanimate/https://grok.com/",
  Manus: "https://image.thum.io/get/width/520/crop/700/noanimate/https://manus.im/",
  Cursor: "https://image.thum.io/get/width/520/crop/700/noanimate/https://www.cursor.com/",
  Windsurf: "https://image.thum.io/get/width/520/crop/700/noanimate/https://windsurf.com/",
  n8n: "https://image.thum.io/get/width/520/crop/700/noanimate/https://n8n.io/",
  Make: "https://image.thum.io/get/width/520/crop/700/noanimate/https://www.make.com/",
  Zapier: "https://image.thum.io/get/width/520/crop/700/noanimate/https://zapier.com/",
  Airtable: "https://image.thum.io/get/width/520/crop/700/noanimate/https://www.airtable.com/",
  "Notion AI": "https://image.thum.io/get/width/520/crop/700/noanimate/https://www.notion.com/product/ai",
  GA4: "https://image.thum.io/get/width/520/crop/700/noanimate/https://analytics.google.com/",
  BigQuery: "https://image.thum.io/get/width/520/crop/700/noanimate/https://cloud.google.com/bigquery",
  "Looker Studio": "https://image.thum.io/get/width/520/crop/700/noanimate/https://lookerstudio.google.com/",
  Hotjar: "https://image.thum.io/get/width/520/crop/700/noanimate/https://www.hotjar.com/",
  Mixpanel: "https://image.thum.io/get/width/520/crop/700/noanimate/https://mixpanel.com/",
  Heap: "https://image.thum.io/get/width/520/crop/700/noanimate/https://www.heap.io/",
};

const categories = [
  {
    title: "SEO Platforms",
    icon: <Search size={16} className="text-primary" />,
    color: "border-primary/30",
    image: workCrazySeo,
    imageAlt: "SEO project dashboard and website work",
    tools: ["Ahrefs", "Semrush", "Screaming Frog", "Sitebulb", "Botify", "BrightEdge", "Conductor"],
  },
  {
    title: "AI & GEO Tools",
    icon: <Bot size={16} className="text-accent" />,
    color: "border-accent/30",
    image: workAdminCrm,
    imageAlt: "AI powered CRM and automation project interface",
    tools: ["ChatGPT", "Claude", "Perplexity", "Gemini", "Grok", "Manus", "Cursor", "Windsurf"],
  },
  {
    title: "Automation",
    icon: <Workflow size={16} className="text-emerald-400" />,
    color: "border-emerald-400/30",
    image: crazyseoSite,
    imageAlt: "Crazy SEO Team website automation and digital workflow",
    tools: ["n8n", "Make", "Zapier", "Airtable", "Notion AI"],
  },
  {
    title: "Analytics",
    icon: <BarChart3 size={16} className="text-amber-400" />,
    color: "border-amber-400/30",
    image: workCampussphere,
    imageAlt: "CampusSphere AI analytics and data project",
    tools: ["GA4", "BigQuery", "Looker Studio", "Hotjar", "Mixpanel", "Heap"],
  },
];

const ToolsMarquee = () => (
  <section className="tools-stack-section py-16 border-y border-border/40">
    <div className="container mx-auto px-6">
      <p className="section-label text-center mb-2">Stack</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
        AI & SEO Tech Stack
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((cat, i) => (
          <ToolCard key={cat.title} cat={cat} index={i} />
        ))}
      </div>
    </div>
  </section>
);

type ToolCategory = (typeof categories)[number];

const ToolCard = ({ cat, index }: { cat: ToolCategory; index: number }) => {
  const [mouse, setMouse] = React.useState({ x: 50, y: 50 });

  const rotateX = (50 - mouse.y) * 0.08;
  const rotateY = (mouse.x - 50) * 0.08;

  const cardStyle = {
    "--cursor-x": `${mouse.x}%`,
    "--cursor-y": `${mouse.y}%`,
    transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`,
  } as CSSProperties;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`tools-stack-card glass-card p-4 ${cat.color}`}
      style={cardStyle}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setMouse({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
        });
      }}
      onMouseLeave={() => setMouse({ x: 50, y: 50 })}
    >
      <div className="tools-stack-card-image mb-4">
        <img src={cat.image} alt={cat.imageAlt} loading="lazy" />
        <div className="tools-stack-card-shine" />
        <div className="tools-stack-card-cursor" />
        <span className="tools-stack-card-number">0{index + 1}</span>
        <span className="tools-stack-card-link" aria-hidden="true">
          <ArrowUpRight size={14} />
        </span>
      </div>

      <div className="flex items-center gap-2 mb-4">
        {cat.icon}
        <h3 className="font-display font-semibold text-sm">{cat.title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {cat.tools.map((tool, toolIndex) => (
          <span
            key={tool}
            className="tools-stack-keyword"
            style={{ "--keyword-index": toolIndex } as CSSProperties}
          >
            <img src={keywordScreenshots[tool]} alt={`${tool} interface`} loading="lazy" />
            <span>{tool}</span>
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ToolsMarquee;
