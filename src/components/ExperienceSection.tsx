import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { jobs } from "@/data/experience";

const projectExperience = [
  {
    name: "Crazy SEO Team",
    type: "SEO, AI & Digital Growth Experience",
    description:
      "Hands-on experience across technical SEO, AI SEO, content strategy, analytics, digital marketing, automation and high-performance web projects.",
    tools: ["SEO", "AI SEO", "Analytics", "Automation", "Web Development"],
    href: "https://www.crazyseoteam.in/",
  },
  {
    name: "Anvaya",
    type: "Web & Digital Project Experience",
    description:
      "Practical experience working on a digital product and website workflow, covering implementation, content, UX and ongoing web optimization.",
    tools: ["Web", "UX", "Content", "SEO"],
    href: "https://www.crazyseoteam.in/anvya",
  },
  {
    name: "CampusSphere AI",
    type: "Academic Project Experience",
    description:
      "Academic project experience focused on transforming academic administration through unified digital services, automation, analytics and responsible AI.",
    tools: ["AI", "Automation", "Analytics", "Digital Administration", "Responsible AI"],
    href: null,
  },
];

const ExperienceSection = () => (
  <section id="experience" className="relative py-24">
    <div className="container mx-auto px-6 relative">
      <p className="section-label mb-2">Career Path</p>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Work Experience</h2>
      <p className="text-muted-foreground max-w-xl mb-12">
        Professional roles and project experience across SEO, digital growth, analytics, AI and web execution.
      </p>

      <div className="space-y-8">
        {jobs.map((job, i) => (
          <motion.div
            key={job.slug}
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

      <div className="mt-20">
        <p className="section-label mb-2">Project Experience</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Selected projects I’ve worked on</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">
          Project work presented as part of the experience record, with the focus on the responsibilities, skills and systems involved.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {projectExperience.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              className="glass-card-hover p-6 flex flex-col"
            >
              <span className="text-xs uppercase tracking-[0.14em] text-primary mb-3">{project.type}</span>
              <h3 className="text-xl font-display font-semibold mb-3">{project.name}</h3>
              <p className="text-sm text-muted-foreground leading-6 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tools.map((tool) => (
                  <span key={tool} className="badge-glass text-[11px]">{tool}</span>
                ))}
              </div>

              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-xs text-primary hover:underline"
                >
                  View project <ExternalLink size={13} />
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
