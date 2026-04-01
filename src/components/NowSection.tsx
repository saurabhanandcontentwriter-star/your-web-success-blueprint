import { motion } from "framer-motion";
import { TrendingUp, Palette, MessageCircle } from "lucide-react";
import aboutPhoto from "@/assets/about-photo.jpg";

const focusItems = [
  {
    icon: <TrendingUp className="w-5 h-5 text-primary" />,
    title: "SEO Trends",
    description: "Analyzing the impact of Search Generative Experience (SGE) on organic traffic and adapting strategies for AI-first search.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=300&h=200&fit=crop",
  },
  {
    icon: <Palette className="w-5 h-5 text-primary" />,
    title: "UI/UX Skills",
    description: "Enhancing my design skills to better align SEO performance with superior user experience and conversion optimization.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop",
  },
  {
    icon: <MessageCircle className="w-5 h-5 text-primary" />,
    title: "LinkedIn Voice",
    description: "Consistently sharing insights as a LinkedIn Top Voice 2024 to help the community navigate digital marketing challenges.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=200&fit=crop",
  },
];

const NowSection = () => (
  <section id="now" className="py-24">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Current Focus
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-[1.1] mb-4">
            What I'm<br />
            <span className="italic text-muted-foreground font-light">Doing Now</span>
          </h2>
          <p className="text-muted-foreground max-w-md leading-relaxed mb-8">
            A snapshot of my current professional focus, industry involvement, and personal growth journey in the ever-evolving digital landscape.
          </p>

          {/* Availability card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-4 flex items-center gap-4 max-w-sm"
          >
            <img src={aboutPhoto} alt="Saurabh Anand" className="w-12 h-12 rounded-lg object-cover object-top" />
            <div>
              <p className="font-display font-semibold text-sm">Saurabh Anand</p>
              <p className="text-xs text-muted-foreground">SEO Analyst & Content Strategist</p>
              <p className="text-[10px] uppercase tracking-widest text-primary font-semibold mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Available for Projects
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right — focus cards */}
        <div className="space-y-4">
          {focusItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-4 flex gap-4 items-start"
            >
              <img src={item.image} alt={item.title} className="w-16 h-16 rounded-lg object-cover shrink-0" loading="lazy" />
              <div>
                <h3 className="font-display font-semibold text-sm flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default NowSection;
