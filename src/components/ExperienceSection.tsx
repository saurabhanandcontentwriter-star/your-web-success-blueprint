import { motion } from "framer-motion";

const jobs = [
  {
    period: "Mar 2024 – Present",
    title: "SEO Executive",
    company: "TripzyGo",
    favicon: "https://www.google.com/s2/favicons?domain=tripzygo.in&sz=64",
    tools: ["Google Analytics", "Search Console", "Ahrefs", "Semrush"],
    description: "Spearheading the organic growth strategy for a leading travel platform. Deep technical audits, advanced keyword research, and high-impact content strategy.",
    achievements: [
      "Achieved 80% increase in organic traffic within 6 months",
      "Optimized 500+ high-intent landing pages for conversion",
      "Implemented advanced schema markup for rich snippets",
      "Managed a monthly content calendar of 50+ SEO-optimized articles",
    ],
  },
  {
    period: "Mar 2022 – Mar 2023",
    title: "SEO Analyst",
    company: "Guest Blogging Technology",
    favicon: "https://www.google.com/s2/favicons?domain=guestbloggingtechnology.com&sz=64",
    tools: ["Google Analytics", "Moz", "BuzzStream", "Screaming Frog"],
    description: "Focused on building high-authority backlink profiles and executing large-scale outreach campaigns.",
    achievements: [
      "Secured 200+ high-DA backlinks through strategic outreach",
      "Increased average Domain Authority by 15 points across portfolio",
      "Reduced bounce rate by 30% through content UX optimization",
      "Conducted weekly SEO performance reporting for key stakeholders",
    ],
  },
  {
    period: "Internship",
    title: "Digital Marketing Intern",
    company: "TripzyGo International",
    favicon: "https://www.google.com/s2/favicons?domain=tripzygo.in&sz=64",
    tools: ["Google Analytics", "Canva", "Hootsuite", "WordPress"],
    description: "Learned the fundamentals of SEO and digital marketing by supporting senior analysts.",
    achievements: [
      "Contributed to a 70% traffic increase for the main blog",
      "Managed social media accounts with 20% growth in engagement",
      "Optimized 100+ legacy posts for current SEO standards",
      "Assisted in the launch of 3 successful email marketing campaigns",
    ],
  },
];

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
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
