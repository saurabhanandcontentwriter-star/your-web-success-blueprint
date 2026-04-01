import { motion } from "framer-motion";

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
            Content is the bridge between your brand and your audience. I help create valuable, high-intent assets that not only rank but also earn backlinks naturally and convert visitors into loyal customers.
          </p>
        </motion.div>
      </div>

      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="glass-card p-8 max-w-3xl border-l-4 border-l-primary"
      >
        <p className="text-lg italic text-foreground/90 mb-4">
          "My philosophy is simple: Don't build for search engines. Build for people, and optimize for search engines. That's how you achieve sustainable growth."
        </p>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">SA</div>
          <div>
            <p className="text-sm font-medium">Saurabh Anand</p>
            <p className="text-xs text-muted-foreground">SEO Analyst</p>
          </div>
        </div>
      </motion.blockquote>
    </div>
  </section>
);

export default AboutSection;
