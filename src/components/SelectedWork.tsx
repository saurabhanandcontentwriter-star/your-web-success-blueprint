import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import campussphereImg from "@/assets/work-campussphere.jpg";
import crazyseoImg from "@/assets/work-crazyseo.jpg";
import adminCrmImg from "@/assets/work-admin-crm.jpg";

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
  },
];

/** Illustrative dashboard preview — all figures are demonstration data. */
const DashboardPreview = () => (
  <div className="w-full h-full p-4 sm:p-6 flex flex-col gap-3 bg-gradient-to-br from-secondary/40 to-background">
    <div className="flex items-center justify-between">
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Demo data</p>
      <div className="flex gap-1">
        {["", "", ""].map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
        ))}
      </div>
    </div>
    <div className="grid grid-cols-3 gap-2">
      {[
        { l: "Leads", v: "1,248" },
        { l: "Conversion", v: "4.6%" },
        { l: "Pipeline", v: "₹8.2L" },
      ].map((k) => (
        <div key={k.l} className="glass-card p-3">
          <p className="text-[10px] text-muted-foreground">{k.l}</p>
          <p className="text-sm font-display font-semibold">{k.v}</p>
        </div>
      ))}
    </div>
    <div className="glass-card p-3 flex-1 flex items-end gap-1.5" aria-hidden="true">
      {[35, 55, 42, 70, 60, 85, 74, 92, 66, 80].map((h, i) => (
        <span
          key={i}
          className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-accent/70"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
    <div className="grid grid-cols-2 gap-2">
      {["Lead pipeline", "User management", "CRM activity", "Recent activity"].map((t) => (
        <div key={t} className="glass-card px-3 py-2 text-[11px] text-muted-foreground">
          {t}
        </div>
      ))}
    </div>
  </div>
);

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
                {w.no === "03" ? (
                  <DashboardPreview />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/15 via-background to-accent/15 transition-transform duration-700 group-hover:scale-[1.04]">
                    <span className="font-display font-bold text-4xl md:text-6xl tracking-tight gradient-text text-center px-6">
                      {w.kicker}
                    </span>
                  </div>
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
