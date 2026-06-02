import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <p className="section-label mb-2">Academic Background</p>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">Education</h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-6">
          <GraduationCap className="w-8 h-8 text-primary mb-3" />
          <h3 className="font-display font-semibold text-lg mb-1">Bachelor of Computer Applications (BCA)</h3>
          <p className="text-sm text-muted-foreground">Allama Iqbal College, Bihar Sharif, Nalanda – Graduated 2024</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-6">
          <GraduationCap className="w-8 h-8 text-primary mb-3" />
          <h3 className="font-display font-semibold text-lg mb-1">Diploma</h3>
          <p className="text-sm text-muted-foreground">DPG Polytechnic College – 2021</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-card p-6 md:col-span-2">
          <Award className="w-8 h-8 text-accent mb-3" />
          <h3 className="font-display font-semibold text-lg mb-3">Certifications</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              Google Digital Marketing Certification
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              SEO & Link Building Certification
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default EducationSection;
