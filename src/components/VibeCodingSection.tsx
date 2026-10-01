import { motion } from "framer-motion";
import { Terminal, Sparkles, Workflow, Zap, Download } from "lucide-react";

const keywordImages: Record<string, string> = {
  "AI SEO Dashboards": "https://image.thum.io/get/width/900/crop/560/noanimate/https://lookerstudio.google.com/",
  "GPT Workflows": "https://image.thum.io/get/width/900/crop/560/noanimate/https://platform.openai.com/playground",
  "SEO Agents": "https://image.thum.io/get/width/900/crop/560/noanimate/https://www.screamingfrog.co.uk/seo-spider/",
  "Productivity Tools": "https://image.thum.io/get/width/900/crop/560/noanimate/https://www.notion.com/product",
};

const lines = [
  { p: "$ ", t: "prompt 'rank #1 for ai seo agency in india'" },
  { p: "→ ", t: "spawning agents: keyword, content, technical, link" },
  { p: "✓ ", t: "300 cluster pages drafted in 12 minutes" },
  { p: "✓ ", t: "schema + internal links + canonical injected" },
  { p: "✓ ", t: "deployed → indexing → tracking visibility" },
];

const VibeCodingSection = () => (
  <section id="vibe-coding" className="py-24">
    <div className="container mx-auto px-6">
      <p className="section-label mb-2">Vibe Coding</p>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
        From <span className="gradient-text">prompt</span> to <span className="gradient-text">product</span>
      </h2>
      <p className="text-muted-foreground max-w-2xl mb-12">
        I ship SEO tools, dashboards, and AI workflows by pair-programming with LLMs — turning ideas into deployed software in hours, not weeks.
      </p>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Terminal mock */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card overflow-hidden border-primary/30">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/40">
            <div className="w-3 h-3 rounded-full bg-destructive/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
            <span className="ml-3 text-xs text-muted-foreground font-mono">saurabh@vibe-coder ~ %</span>
          </div>
          <div className="p-5 font-mono text-sm space-y-2 min-h-[280px]">
            {lines.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.25 }}
                className="flex gap-2"
              >
                <span className="text-accent">{l.p}</span>
                <span className="text-foreground/90">{l.t}</span>
              </motion.div>
            ))}
            <motion.span
              className="inline-block w-2 h-4 bg-primary ml-1 align-middle"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Build cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { icon: Sparkles, title: "AI SEO Dashboards", desc: "Live visibility, rank tracking & GEO scoring." },
            { icon: Workflow, title: "GPT Workflows", desc: "Briefs → drafts → publish, fully automated." },
            { icon: Terminal, title: "SEO Agents", desc: "Crawl + analyze + ship fixes autonomously." },
            { icon: Zap, title: "Productivity Tools", desc: "Internal ops automated end-to-end." },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-5 hover:border-accent/40 hover:shadow-[0_10px_30px_-10px_hsl(var(--accent)/0.4)] transition-all"
            >
              <div className="mb-4 overflow-hidden rounded-xl border border-border/40 bg-background/50">
                <img src={keywordImages[c.title]} alt={c.title + " real interface"} className="w-full h-32 object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <c.icon size={18} className="text-accent" />
                <h3 className="font-display font-semibold">{c.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <a
          href="/Saurabh_Anand_Vibe_Coding_Resume.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-primary/40 text-sm font-medium hover:bg-primary/10 transition-colors"
        >
          <Download size={15} /> Download Vibe Coding Resume
        </a>
      </div>
    </div>
  </section>
);

export default VibeCodingSection;
