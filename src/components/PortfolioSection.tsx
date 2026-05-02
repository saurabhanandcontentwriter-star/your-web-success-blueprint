import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce SEO Overhaul",
    company: "TripzyGo",
    stat: "+120% Traffic",
    description: "A complete technical and content SEO overhaul for a travel booking platform.",
    tags: ["Technical SEO", "Content Strategy", "E-commerce"],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=500&fit=crop",
    url: "https://www.tripzygo.in/",
  },
  {
    title: "SaaS Content Authority",
    company: "Guest Blogging Tech",
    stat: "+85% Leads",
    description: "Building a content engine that drives qualified leads with topic cluster strategy.",
    tags: ["Link Building", "Topic Clusters", "SaaS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    url: "https://guestbloggingtech.com/",
  },
  {
    title: "Local SEO for Multi-location Brand",
    company: "Global Retailer",
    stat: "+200% Visibility",
    description: "Optimized Google Business Profiles and localized content for 50+ locations.",
    tags: ["Local SEO", "GBP Optimization", "Scalable SEO"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop",
    url: "https://crazyseoteam.in/",
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-24">
    <div className="container mx-auto px-6">
      <p className="section-label mb-2">Portfolio</p>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">Featured Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${p.title} case study (opens in new tab)`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card-hover overflow-hidden group block"
          >
            <div className="relative h-48 overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute top-3 right-3 badge-glass font-semibold text-primary">{p.stat}</div>
            </div>
            <div className="p-5">
              <p className="text-xs text-muted-foreground mb-1">{p.company}</p>
              <h3 className="text-lg font-display font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-secondary text-secondary-foreground">{t}</span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary group-hover:gap-2.5 transition-all">
                View Case Study <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
