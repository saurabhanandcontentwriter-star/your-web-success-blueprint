import { motion } from "framer-motion";

const analyticsImages: Record<string, string> = {
  "Power BI": "https://image.thum.io/get/width/1000/crop/620/noanimate/https://learn.microsoft.com/en-us/power-bi/explore-reports/end-user-dashboard-open",
  Python: "https://image.thum.io/get/width/1000/crop/620/noanimate/https://infinite-worlds.enterprise.anvil.works/learn/examples/dashboard",
  Tableau: "https://image.thum.io/get/width/1000/crop/620/noanimate/https://www.tableau.com/data-insights/dashboard-showcase",
  GA4: "https://image.thum.io/get/width/1000/crop/620/noanimate/https://support.google.com/analytics/answer/9925281?hl=en",
  "Looker Studio": "https://image.thum.io/get/width/1000/crop/620/noanimate/https://nadiamohamed.me/insights/looker-studio-seo-dashboard/",
  Travel: "https://image.thum.io/get/width/1000/crop/620/noanimate/https://www.wolkcle.com/features/analytics",
};

const projects = [
  { image: analyticsImages["Power BI"], title: "Sales Dashboard using Power BI", desc: "Interactive Power BI dashboard tracking revenue, region performance, product mix and YoY growth with drill-through KPIs.", tags: ["Power BI", "DAX", "KPI Reporting"] },
  { image: analyticsImages.Python, title: "Customer Churn Analysis with Python", desc: "End-to-end churn analysis using Pandas, NumPy and Matplotlib — EDA, feature engineering and retention insights.", tags: ["Python", "Pandas", "EDA"] },
  { image: analyticsImages.Tableau, title: "E-commerce KPI Dashboard", desc: "Unified dashboard for conversion rate, AOV, CAC, LTV and funnel drop-offs across paid and organic channels.", tags: ["Tableau", "SQL", "GA4"] },
  { image: analyticsImages.GA4, title: "Website Traffic Analysis using GA4 & SQL", desc: "GA4 + BigQuery SQL analysis surfacing landing-page performance, engagement quality and SEO revenue attribution.", tags: ["GA4", "BigQuery", "SQL"] },
  { image: analyticsImages["Looker Studio"], title: "Competitor Analysis Dashboard", desc: "Automated competitor tracking combining SEO share of voice, keyword gaps and content velocity signals.", tags: ["Looker Studio", "SEO Analytics"] },
  { image: analyticsImages.Travel, title: "Travel Industry Data Insights", desc: "Deep-dive analytics on booking behaviour, destination demand and seasonality — connected to real Tripzygo experience.", tags: ["Python", "Power BI", "Travel"] },
];

const DataAnalyticsSection = () => (
  <section id="data-analytics" className="py-24">
    <div className="container mx-auto px-6">
      <p className="section-label mb-2">Data Analytics</p>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Data Analytics Projects, Dashboards &amp; Case Studies</h2>
      <p className="text-muted-foreground max-w-2xl mb-12">A selection of Power BI dashboards, SQL case studies and Python data analysis projects — built to turn raw data into insights that drive real business outcomes.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card-hover overflow-hidden">
            <div className="aspect-[16/9] overflow-hidden bg-background/60 border-b border-border/40">
              <img src={p.image} alt={p.title} className="w-full h-full object-contain p-3 transition-transform duration-500 hover:scale-[1.03]" loading="lazy" />
            </div>
            <div className="p-6">
              <h3 className="font-display font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/50">{t}</span>)}</div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default DataAnalyticsSection;
