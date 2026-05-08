import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "SEO Mastery",
    skills: ["Keyword Research", "On-Page Optimization", "Off-Page & Link Building", "Technical SEO", "HTML SEO Optimization"],
  },
  {
    title: "Digital Marketing",
    skills: ["Content Strategy", "Guest Blogging", "Google Analytics", "Search Console", "Marketing Strategy,"Google Ads",]
  },
  {
    title: "Design & UX",
    skills: ["UI Design Fundamentals", "UX Optimization", "User Behavior Analysis", "Figma", "Visual Design"],
  },
  {
    title: "Development",
    skills: ["Web Development Basics", "HTML/CSS", "AI Ethics", "Github",]
  },
];

const stats = [
  { label: "Organic Traffic", value: "+80%", sub: "Increase in monthly unique visitors" },
  { label: "Keyword Rankings", value: "Top 3", sub: "For high-volume competitive keywords" },
  { label: "Conversion Rate", value: "25%", sub: "Boost in lead generation" },
];

const SkillsSection = () => (
  <section id="skills" className="py-24">
    <div className="container mx-auto px-6">
      <p className="section-label mb-2">Expertise</p>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">Technical Skills</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 text-center"
          >
            <p className="text-xs text-muted-foreground mb-1">{s.label}</p>
            <p className="text-3xl font-display font-bold gradient-text mb-1">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((g, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass-card-hover p-5"
          >
            <h3 className="font-display font-semibold mb-4 text-sm">{g.title}</h3>
            <ul className="space-y-2.5">
              {g.skills.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
