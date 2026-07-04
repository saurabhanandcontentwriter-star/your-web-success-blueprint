import { motion } from "framer-motion";
import { BarChart3, Database, LineChart, PieChart, TrendingUp, Plane } from "lucide-react";

const projects = [
  {
    icon: BarChart3,
    title: "Sales Dashboard using Power BI",
    desc: "Interactive Power BI dashboard tracking revenue, region performance, product mix and YoY growth with drill-through KPIs.",
    tags: ["Power BI", "DAX", "KPI Reporting"],
  },
  {
    icon: LineChart,
    title: "Customer Churn Analysis with Python",
    desc: "End-to-end churn model using Pandas, NumPy and Matplotlib — EDA, feature engineering and retention insights for a subscription business.",
    tags: ["Python", "Pandas", "EDA"],
  },
  {
    icon: PieChart,
    title: "E-commerce KPI Dashboard",
    desc: "Unified dashboard for conversion rate, AOV, CAC, LTV and funnel drop-offs across paid and organic channels.",
    tags: ["Tableau", "SQL", "GA4"],
  },
  {
    icon: TrendingUp,
    title: "Website Traffic Analysis using GA4 & SQL",
    desc: "GA4 + BigQuery SQL pipeline surfacing landing page performance, engagement quality and SEO revenue attribution.",
    tags: ["GA4", "BigQuery", "SQL"],
  },
  {
    icon: Database,
    title: "Competitor Analysis Dashboard",
    desc: "Automated competitor tracking dashboard combining SEO share of voice, keyword gaps and content velocity signals.",
    tags: ["Looker Studio", "SEO Analytics"],
  },
  {
    icon: Plane,
    title: "Travel Industry Data Insights",
    desc: "Deep-dive analytics on booking behaviour, destination demand and seasonality — built on real Tripzygo experience.",
    tags: ["Python", "Power BI", "Travel"],
  },
];

const DataAnalyticsSection = () => (
  <section id="data-analytics" className="py-24">
    <div className="container mx-auto px-6">
      <p className="section-label mb-2">Data Analytics</p>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
        Data Analytics Projects, Dashboards &amp; Case Studies
      </h2>
      <p className="text-muted-foreground max-w-2xl mb-12">
        A selection of Power BI dashboards, SQL case studies and Python data analysis projects — built to turn
        raw data into insights that drive real business outcomes.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card-hover p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <Icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/50">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default DataAnalyticsSection;
