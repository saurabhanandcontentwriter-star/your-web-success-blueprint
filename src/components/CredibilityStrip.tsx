import { motion } from "framer-motion";
import { Linkedin, Award, Users, Cpu } from "lucide-react";

const items = [
  { icon: <img src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" alt="Google" className="w-5 h-5" />, label: "Google Certified" },
  { icon: <Linkedin size={18} className="text-[#0A66C2]" />, label: "LinkedIn Top Voice 2024" },
  { icon: <Users size={18} className="text-accent" />, label: "GDG Community Contributor" },
  { icon: <Award size={18} className="text-primary" />, label: "AI SEO Specialist" },
  { icon: <Cpu size={18} className="text-accent" />, label: "Automation Architect" },
];

const CredibilityStrip = () => (
  <section className="py-10">
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="badge-glass border-primary/20 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.25)] transition-all"
          >
            {it.icon}
            <span className="text-xs font-medium">{it.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CredibilityStrip;
