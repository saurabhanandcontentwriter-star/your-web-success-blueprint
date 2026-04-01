import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce SEO Overhaul",
    company: "TripzyGo",
    stat: "+120% Traffic",
    description: "A complete technical and content SEO overhaul for a travel booking platform.",
    tags: ["Technical SEO", "Content Strategy", "E-commerce"],
    image: "https://picsum.photos/seed/ecommerce-seo/800/500",
  },
  {
    title: "SaaS Content Authority",
    company: "Guest Blogging Tech",
    stat: "+85% Leads",
    description: "Building a content engine that drives qualified leads with topic cluster strategy.",
    tags: ["Link Building", "Topic Clusters", "SaaS"],
    image: "https://picsum.photos/seed/saas-seo/800/500",
  },
  {
    title: "Local SEO for Multi-location Brand",
    company: "Global Retailer",
    stat: "+200% Visibility",
    description: "Optimized Google Business Profiles and localized content for 50+ locations.",
    tags: ["Local SEO", "GBP Optimization", "Scalable SEO"],
    image: "https://picsum.photos/seed/local-seo-case/800/500",
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-24">
    <div className="container mx-auto px-6">
      <p className="section-label mb-2">Portfolio</p>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">Featured Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card-hover overflow-hidden group"
          >
            <div className="relative h-48 overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute top-3 right-3 badge-glass font-semibold text-primary">{p.stat}</div>
            </div>
            <div className="p-5">
              <p className="text-xs text-muted-foreground mb-1">{p.company}</p>
              <h3 className="text-lg font-display font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-secondary text-secondary-foreground">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
