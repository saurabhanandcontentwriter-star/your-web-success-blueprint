import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
// project images imported below
import campussphereImg from "@/assets/work-campussphere.jpg";
import adminCrmImg from "@/assets/work-admin-crm.jpg";
import crazyseoSite from "@/assets/crazyseo-site.png";
import crazyseoLogo from "@/assets/crazyseo-logo.jpg";

interface Work {
  no: string;
  name: string;
  category: string;
  kicker: string;
  description: string;
  tech: string[];
  url?: string;
  cta: string;
  image: string;
  imageAlt: string;
  logo?: string;
}

const works: Work[] = [
  {
    no: "01",
    name: "CampusSphere AI",
    category: "AI / EDTECH / WEB PLATFORM",
    kicker: "AI × EDTECH",
    description:
      "An AI-powered academic platform designed to bring academic administration, digital services, automation, analytics and intelligent workflows into one unified ecosystem.",
    tech: ["AI", "EdTech", "Web Platform", "Automation", "Analytics"],
    url: "https://campus-ai-psi-eosin.vercel.app/",
    cta: "View Live Project",
    image: campussphereImg,
    imageAlt: "CampusSphere AI platform dashboard preview",
  },
  {
    no: "02",
    name: "Crazy SEO Team",
    category: "SEO / DIGITAL MARKETING",
    kicker: "SEO × DIGITAL GROWTH",
    description:
      "An SEO and digital marketing platform focused on search visibility, content, analytics, digital growth and modern SEO strategies.",
    tech: ["Technical SEO", "Content", "Analytics", "Digital Growth"],
    url: "https://www.crazyseoteam.in/",
    cta: "Visit Website",
    image: crazyseoSite.url,
    imageAlt: "Crazy SEO Team website preview — Rank Higher. Grow Faster.",
    logo: crazyseoLogo.url,
  },
  {
    no: "03",
    name: "Admin Dashboard & CRM",
    category: "ADMIN / CRM / ANALYTICS",
    kicker: "CRM × ANALYTICS",
    description:
      "A modern dashboard and CRM concept focused on administration, lead management, analytics, data visualization and workflow management.",
    tech: ["CRM", "Dashboards", "Data Visualization", "Workflows"],
    cta: "Private / Demo Project",
    image: adminCrmImg,
    imageAlt: "Admin Dashboard and CRM analytics interface preview",
  },
];


const SelectedWork = () => (
  <section id="selected-work" className="py-24 scroll-mt-24" aria-labelledby="selected-work-title">
    <div className="container mx-auto px-6">
      <p className="section-label mb-2">Selected Work</p>
      <h2 id="selected-work-title" className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-3">
        Selected Work
      </h2>
      <p className="text-muted-foreground max-w-2xl mb-14">
        Projects across AI, SEO, analytics, web development and digital systems.
      </p>

      <div className="space-y-10">
        {works.map((w, i) => (
          <motion.article
            key={w.no}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="group relative glass-card-hover overflow-hidden rounded-2xl border border-border/60"
          >
            <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative min-h-[220px] lg:min-h-[320px] overflow-hidden">
                <img
                  src={w.image}
                  alt={w.imageAlt}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {w.logo && (
                  <img
                    src={w.logo}
                    alt={`${w.name} logo`}
                    width={56}
                    height={56}
                    loading="lazy"
                    className="absolute bottom-4 left-4 w-14 h-14 rounded-full border border-border/60 bg-background/80 backdrop-blur-sm object-cover shadow-lg"
                  />
                )}
              </div>

              <div className="p-6 md:p-10 flex flex-col justify-center gap-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-display font-bold text-4xl md:text-6xl text-foreground/10 group-hover:text-primary/30 transition-colors">
                    {w.no}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{w.category}</span>
                </div>

                <h3 className="text-2xl md:text-4xl font-display font-bold tracking-tight transition-transform duration-500 group-hover:translate-x-1">
                  {w.name}
                </h3>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">{w.description}</p>

                <div className="flex flex-wrap gap-2">
                  {w.tech.map((t) => (
                    <span key={t} className="text-[11px] px-3 py-1 rounded-full border border-border bg-secondary/40 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                {w.url ? (
                  <a
                    href={w.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex w-fit items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    aria-label={`${w.cta}: ${w.name} (opens in a new tab)`}
                  >
                    {w.cta}
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                ) : (
                  <span className="mt-2 inline-flex w-fit items-center gap-2 px-5 py-3 rounded-full border border-border text-muted-foreground text-sm font-medium">
                    <Lock size={14} /> {w.cta}
                  </span>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default SelectedWork;
