import { motion } from "framer-motion";

const seoQuotes = [
  {
    quote: "Don't build for search engines. Build for people, and optimize for search engines. That's how you achieve sustainable growth.",
    author: "Saurabh Anand",
    role: "SEO Analyst",
  },
  {
    quote: "The best place to hide a dead body is page 2 of Google search results.",
    author: "SEO Industry Wisdom",
    role: "",
  },
  {
    quote: "SEO is not about gaming the system anymore; it's about learning how to play by the rules.",
    author: "Jordan Teicher",
    role: "",
  },
];

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-6">
      <p className="section-label mb-2">Strategic Approach</p>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
        Sustainable Organic Growth:{" "}
        <span className="italic text-muted-foreground font-light">Building Authority That Lasts</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-6">
          <h3 className="font-display font-semibold text-lg mb-3">Technical Foundation</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            SEO starts with a site that search engines can actually understand. I focus on crawlability, indexability, and site architecture to ensure every piece of content has the best chance to rank.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-6">
          <h3 className="font-display font-semibold text-lg mb-3">Content Authority</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Content is the bridge between your brand and your audience. I help create valuable, high-intent assets that rank and convert.
          </p>
        </motion.div>
      </div>

      {/* SEO Quotes */}
      <div className="space-y-6 max-w-3xl">
        {seoQuotes.map((q, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 border-l-4 border-l-primary"
          >
            <p className="text-base italic text-foreground/90 mb-3">"{q.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                {q.author.split(" ").map(w => w[0]).join("").slice(0, 2)}
              </div>
              <div>
                <p className="text-sm font-medium">{q.author}</p>
                {q.role && <p className="text-xs text-muted-foreground">{q.role}</p>}
              </div>
            </div>
          </motion.blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
