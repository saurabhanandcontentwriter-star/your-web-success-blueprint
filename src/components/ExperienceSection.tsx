import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { jobs } from "@/data/experience";

const ExperienceSection = () => (
  <section id="experience" className="relative py-24">
    <div className="container mx-auto px-6 relative">
      <p className="section-label mb-2">Career Path</p>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Work Experience</h2>
      <p className="text-muted-foreground max-w-xl mb-12">
        A track record of delivering measurable organic growth for diverse businesses, from startups to established enterprises.
      </p>

      <div className="space-y-8">
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card-hover p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
              <span className="text-xs text-muted-foreground font-mono shrink-0 pt-1">{job.period}</span>
              <div className="flex-1">
                <h3 className="text-xl font-display font-semibold mb-1">{job.title}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <img src={job.favicon} alt={job.company} className="w-5 h-5 rounded" />
                  <span className="text-sm text-muted-foreground">{job.company}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tools.map((t) => (
                    <span key={t} className="badge-glass text-[11px]">{t}</span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                <ul className="space-y-2">
                  {job.achievements.map((a, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-secondary-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
                <Link to={`/experience/${job.slug}`} className="inline-block mt-4 text-xs text-primary hover:underline">
                  View role details →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
