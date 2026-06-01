import { motion } from "framer-motion";
import { Bot, Sparkles, Search, Cpu, Network, Globe, Code2, LineChart, Boxes } from "lucide-react";
import { Link } from "react-router-dom";

const cats = [
  { icon: Search, title: "SaaS SEO", desc: "Programmatic + product-led SEO for SaaS growth.", grad: "from-primary/30 to-accent/10" },
  { icon: Sparkles, title: "AI SEO", desc: "Optimization aligned with AI search & summaries.", grad: "from-accent/30 to-primary/10" },
  { icon: Cpu, title: "Technical SEO", desc: "Crawl, render, index — engineering-grade audits.", grad: "from-primary/30 to-primary/10" },
  { icon: Bot, title: "AI Automation", desc: "Workflows that replace manual SEO chores.", grad: "from-accent/30 to-accent/10" },
  { icon: Network, title: "Agentic AI", desc: "Multi-agent orchestration for content & ops.", grad: "from-primary/40 to-accent/20" },
  { icon: Globe, title: "GEO Optimization", desc: "Generative Engine Optimization for LLMs.", grad: "from-accent/40 to-primary/20" },
  { icon: LineChart, title: "AI Search Visibility", desc: "Brand presence inside ChatGPT, Gemini, Perplexity.", grad: "from-primary/30 to-accent/30" },
  { icon: Boxes, title: "LLM Optimization", desc: "Entity, schema & semantic structure for LLMs.", grad: "from-accent/30 to-primary/30" },
  { icon: Code2, title: "Vibe Coding", desc: "Prompt-to-product builds powered by AI.", grad: "from-primary/40 to-accent/40" },
];

const AIPortfolioCategories = () => (
  <section id="ai-portfolio" className="py-24">
    <div className="container mx-auto px-6">
      <p className="section-label mb-2">AI SEO • SaaS • Automation</p>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
        Where <span className="gradient-text">AI meets growth</span>
      </h2>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        Specialized capabilities I deliver — from technical SEO foundations to agentic AI systems that compound your traffic.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cats.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass-card p-6 group hover:border-primary/40 hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.4)] transition-all relative overflow-hidden"
          >
            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${c.grad} blur-2xl opacity-60 group-hover:opacity-100 transition-opacity`} />
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-[0_8px_20px_-5px_hsl(var(--primary)/0.5)]">
                <c.icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link to="/portfolio" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
          View Detailed Case Studies
        </Link>
        <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm font-medium hover:bg-secondary transition-colors">
          Discuss Your Project
        </Link>
      </div>
    </div>
  </section>
);

export default AIPortfolioCategories;
