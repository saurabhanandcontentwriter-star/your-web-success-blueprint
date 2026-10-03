import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BarChart3, BrainCircuit, Code2, FolderOpen, Lightbulb, Rocket, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/portfolio";
import "@/styles/portfolio-modern.css";

const categories = [
  { label: "All", match: null },
  { label: "Web Development", match: "Web Development" },
  { label: "SEO & Marketing", match: "SEO" },
  { label: "AI & Automation", match: "AI" },
  { label: "Data & Analytics", match: "Analytics" },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    const category = categories.find((item) => item.label === activeCategory);
    if (!category?.match) return projects;
    return projects.filter((project) => project.tags.some((tag) => tag.toLowerCase().includes(category.match!.toLowerCase())));
  }, [activeCategory]);

  return (
    <section id="portfolio" className="portfolio-modern-section relative overflow-hidden">
      <div className="portfolio-modern-bg" aria-hidden="true" />
      <div className="portfolio-modern-dots portfolio-modern-dots-top" aria-hidden="true" />
      <div className="portfolio-modern-dots portfolio-modern-dots-bottom" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="portfolio-modern-layout">
          <motion.div
            className="portfolio-modern-person"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: .2 }}
            transition={{ duration: .75 }}
          >
            <div className="portfolio-modern-orbit" aria-hidden="true" />
            <div className="portfolio-modern-glow" aria-hidden="true" />

            <div className="portfolio-modern-signature" aria-hidden="true">
              <span>Turning Ideas</span>
              <span>Into Real</span>
              <span>Projects</span>
              <i>↘</i>
            </div>

            <div className="portfolio-modern-photo">
              <img src="/saurabh-anand-hero.webp" alt="Saurabh Anand — SEO, AI, digital marketing and web projects" width={800} height={900} loading="eager" decoding="async" />
            </div>

            <div className="portfolio-person-chip portfolio-chip-real">
              <span><BarChart3 size={21} /></span>
              <b>Real Projects<br />Real Impact</b>
            </div>

            <div className="portfolio-person-chip portfolio-chip-build">
              <span><Zap size={21} /></span>
              <b>Build<br />Develop<br />Optimize<br />Scale</b>
            </div>

            <div className="portfolio-person-chip portfolio-chip-ideas">
              <span><Lightbulb size={23} /></span>
              <b>Ideas<br />To<br />Solutions</b>
            </div>

            <div className="portfolio-code-mark" aria-hidden="true"><Code2 size={29} /></div>
            <div className="portfolio-doodle portfolio-doodle-top" aria-hidden="true">╱╱</div>
            <div className="portfolio-doodle portfolio-doodle-bottom" aria-hidden="true">╱╲</div>
          </motion.div>

          <div className="portfolio-modern-content">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .65 }}>
              <div className="portfolio-modern-kicker"><FolderOpen size={18} /> MY PROJECTS</div>
              <h1 className="portfolio-modern-title">Featured<br /><span>Projects</span></h1>
              <p className="portfolio-modern-intro">
                Here are some of the key projects I have worked on. Each project reflects my passion
                for SEO, digital marketing, web development, and AI-driven solutions.
              </p>
            </motion.div>

            <div className="portfolio-modern-filters" role="tablist" aria-label="Filter projects">
              {categories.map((category) => {
                const active = activeCategory === category.label;
                return (
                  <button
                    key={category.label}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveCategory(category.label)}
                    className={active ? "portfolio-modern-filter portfolio-modern-filter-active" : "portfolio-modern-filter"}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>

            <div className="portfolio-modern-grid">
              <AnimatePresence mode="popLayout">
                {filtered.map((project, index) => (
                  <motion.article
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: .96 }}
                    transition={{ duration: .45, delay: index * .06 }}
                    className="portfolio-modern-card"
                  >
                    <Link to={`/portfolio/${project.slug}`} className="portfolio-modern-card-link" aria-label={`Open ${project.title} case study`}>
                      <div className="portfolio-modern-card-image">
                        <img src={project.image} alt={`${project.title} — ${project.company} project`} loading={index < 3 ? "eager" : "lazy"} decoding="async" />
                        <span className="portfolio-modern-open"><ArrowUpRight size={21} /></span>
                      </div>
                      <div className="portfolio-modern-card-body">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div className="portfolio-modern-tags">
                          {project.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>

            {filtered.length === 0 && (
              <p className="py-10 text-center text-sm text-slate-500">No projects match this category yet.</p>
            )}

            <div className="portfolio-modern-metrics">
              <div><span><Code2 size={23} /></span><strong>10+</strong><small>Projects Completed</small></div>
              <div><span><BrainCircuit size={23} /></span><strong>20K+</strong><small>Lives/Users Impacted</small></div>
              <div><span><Rocket size={23} /></span><strong>4+</strong><small>Years Experience</small></div>
              <div><span><Sparkles size={23} /></span><strong>Continuous</strong><small>Learning &amp; Building</small></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
