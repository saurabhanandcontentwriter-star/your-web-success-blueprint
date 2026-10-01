import { motion } from "framer-motion";

const items = [
  "Google Certified",
  "LinkedIn Top Voice 2024",
  "GDG Community Contributor",
  "AI SEO Specialist",
  "Automation Architect",
];

const CredibilityStrip = () => (
  <section className="py-10">
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        {items.map((label, i) => (
          <motion.div key={label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="badge-glass border-primary/20 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.25)] transition-all">
            <span className="text-xs font-medium">{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CredibilityStrip;
