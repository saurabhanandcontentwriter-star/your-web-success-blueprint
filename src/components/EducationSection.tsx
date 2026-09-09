import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Award, ArrowRight, Sparkles } from "lucide-react";
import aboutPhoto from "@/assets/about-photo.jpg";
import spaceBg from "@/assets/space-bg.jpg";

const EducationSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-[.78fr_1.22fr] gap-10 items-start mb-12">
        <motion.div
          className="site-3d-image site-3d-float p-2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
            <img src={aboutPhoto} alt="Saurabh Anand" className="w-full h-full object-cover" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-black/35 backdrop-blur-xl px-4 py-3">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[.14em] uppercase">
                <Sparkles size={14} className="text-primary" /> Learning & Growth
              </div>
              <p className="mt-1 text-xs text-white/65">Academic foundation · professional certifications · continuous learning</p>
            </div>
          </div>
        </motion.div>

        <div>
          <p className="section-label mb-2">Academic Background</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Education</h2>
          <p className="max-w-2xl text-muted-foreground leading-relaxed">
            A practical mix of computer applications, digital marketing, SEO and data-focused learning — presented with the same modern visual system used across the portfolio.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-6 relative overflow-hidden">
          <GraduationCap className="w-8 h-8 text-primary mb-3" />
          <h3 className="font-display font-semibold text-lg mb-1">Bachelor of Computer Applications (BCA)</h3>
          <p className="text-sm text-muted-foreground">Allama Iqbal College, Bihar Sharif, Nalanda – Graduated 2024</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-6 relative overflow-hidden">
          <GraduationCap className="w-8 h-8 text-primary mb-3" />
          <h3 className="font-display font-semibold text-lg mb-1">Diploma</h3>
          <p className="text-sm text-muted-foreground">DPG Polytechnic College – 2021</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass-card p-6 md:col-span-2 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full overflow-hidden opacity-25 pointer-events-none">
            <img src={spaceBg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          </div>
          <Award className="w-8 h-8 text-accent mb-3 relative z-10" />
          <h3 className="font-display font-semibold text-lg mb-3 relative z-10">Certifications</h3>
          <ul className="space-y-2 relative z-10">
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

      <div className="mt-8 flex justify-center">
        <Link to="/about" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/40 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors">
          View Full Profile <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  </section>
);

export default EducationSection;
