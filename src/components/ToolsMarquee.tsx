const tools = [
  { name: "Google Analytics", icon: "https://www.gstatic.com/images/branding/product/1x/analytics_48dp.png" },
  { name: "Search Console", icon: "https://www.gstatic.com/images/branding/product/1x/search_console_48dp.png" },
  { name: "Ahrefs", icon: "https://www.google.com/s2/favicons?domain=ahrefs.com&sz=128" },
  { name: "Semrush", icon: "https://www.google.com/s2/favicons?domain=semrush.com&sz=128" },
  { name: "Google Ads", icon: "https://www.gstatic.com/images/branding/product/1x/ads_48dp.png" },
  { name: "Screaming Frog", icon: "https://www.google.com/s2/favicons?domain=screamingfrog.co.uk&sz=128" },
  { name: "Moz", icon: "https://www.google.com/s2/favicons?domain=moz.com&sz=128" },
  { name: "Ubersuggest", icon: "https://www.google.com/s2/favicons?domain=neilpatel.com&sz=128" },
];

const ToolsMarquee = () => (
  <section className="py-12 border-y border-border/40 overflow-hidden">
    <p className="section-label text-center mb-8">Expertise in Industry Standard Tools</p>
    <div className="relative">
      <div className="flex gap-16 marquee-track w-max">
        {[...tools, ...tools].map((t, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0">
            <img src={t.icon} alt={t.name} className="w-8 h-8" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide whitespace-nowrap">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ToolsMarquee;
