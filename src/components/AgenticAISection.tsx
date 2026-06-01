import { motion } from "framer-motion";
import { Bot, Network, GitBranch, Layers } from "lucide-react";

const nodes = [
  { x: 50, y: 20, label: "Orchestrator", color: "hsl(var(--primary))" },
  { x: 15, y: 60, label: "Keyword Agent", color: "hsl(var(--accent))" },
  { x: 38, y: 75, label: "Content Agent", color: "hsl(var(--accent))" },
  { x: 62, y: 75, label: "Technical Agent", color: "hsl(var(--accent))" },
  { x: 85, y: 60, label: "Link Agent", color: "hsl(var(--accent))" },
];

const edges = [[0, 1], [0, 2], [0, 3], [0, 4]];

const AgenticAISection = () => (
  <section id="agentic-ai" className="py-24">
    <div className="container mx-auto px-6">
      <p className="section-label mb-2">Automation + Agentic AI</p>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
        <span className="gradient-text">Autonomous</span> SEO Systems
      </h2>
      <p className="text-muted-foreground max-w-2xl mb-12">
        Multi-agent architectures, MCP servers, and prompt chains that run SEO operations 24/7 — so growth compounds while you sleep.
      </p>

      <div className="grid lg:grid-cols-5 gap-8 items-center">
        {/* Network graph */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="lg:col-span-3 glass-card p-6 relative h-[360px] overflow-hidden border-primary/30">
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            {edges.map(([a, b], i) => (
              <motion.line
                key={i}
                x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
                stroke="hsl(var(--primary) / 0.5)"
                strokeWidth="0.3"
                strokeDasharray="2 2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 + i * 0.15 }}
              />
            ))}
            {nodes.map((n, i) => (
              <g key={i}>
                <motion.circle
                  cx={n.x} cy={n.y} r={i === 0 ? 4 : 2.8}
                  fill={n.color}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
                />
                <motion.circle
                  cx={n.x} cy={n.y} r={i === 0 ? 6 : 4.5}
                  fill="none"
                  stroke={n.color}
                  strokeWidth="0.2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.6, 0, 0.6], r: [i === 0 ? 4 : 2.8, i === 0 ? 9 : 7, i === 0 ? 4 : 2.8] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
                />
                <text x={n.x} y={n.y + (i === 0 ? -6 : 8)} textAnchor="middle" fontSize="2.4" fill="hsl(var(--foreground) / 0.8)" className="font-display">
                  {n.label}
                </text>
              </g>
            ))}
          </svg>
        </motion.div>

        {/* Pillars */}
        <div className="lg:col-span-2 space-y-4">
          {[
            { icon: Network, title: "Multi-Agent Systems", desc: "Specialized agents collaborate on SEO outcomes." },
            { icon: Layers, title: "MCP Architecture", desc: "Model Context Protocol servers as tool layer." },
            { icon: GitBranch, title: "Prompt Chaining", desc: "Composable pipelines that reason step-by-step." },
            { icon: Bot, title: "AI Orchestration", desc: "One brain that delegates, validates, ships." },
          ].map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-4 flex gap-4 hover:border-accent/40 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center shrink-0">
                <p.icon size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-sm">{p.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AgenticAISection;
