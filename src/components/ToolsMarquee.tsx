const tools = [
  { name: "Google Analytics", icon: "https://www.gstatic.com/images/branding/product/1x/analytics_48dp.png" },
  { name: "Search Console", icon: "https://www.gstatic.com/images/branding/product/1x/search_console_48dp.png" },
  { name: "Ahrefs", icon: "https://www.google.com/s2/favicons?domain=ahrefs.com&sz=128" },
  { name: "SEMrush", icon: "https://www.google.com/s2/favicons?domain=semrush.com&sz=128" },
  { name: "Screaming Frog", icon: "https://www.google.com/s2/favicons?domain=screamingfrog.co.uk&sz=128" },
  { name: "Moz", icon: "https://www.google.com/s2/favicons?domain=moz.com&sz=128" },
  { name: "Ubersuggest", icon: "https://www.google.com/s2/favicons?domain=neilpatel.com&sz=128" },
  { name: "Surfer SEO", icon: "https://www.google.com/s2/favicons?domain=surferseo.com&sz=128" },
  { name: "ChatGPT", icon: "https://www.google.com/s2/favicons?domain=openai.com&sz=128" },
  { name: "Gemini", icon: "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=128" },
  { name: "Claude", icon: "https://www.google.com/s2/favicons?domain=anthropic.com&sz=128" },
  { name: "OpenAI", icon: "https://www.google.com/s2/favicons?domain=openai.com&sz=128" },
  { name: "Google AI", icon: "https://www.google.com/s2/favicons?domain=ai.google&sz=128" },
  { name: "Perplexity", icon: "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=128" },
  { name: "Google Ads", icon: "https://www.gstatic.com/images/branding/product/1x/ads_48dp.png" },
];

const ToolsMarquee = () => (
  <section className="py-12 border-y border-border/40 overflow-hidden">
    <p className="section-label text-center mb-8">AI & SEO Tools I Work With</p>
    <div className="relative">
      <div className="flex gap-14 marquee-track w-max">
        {[...tools, ...tools].map((t, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0 group">
            <div className="p-2 rounded-lg bg-secondary/40 border border-border/40 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all">
              <img src={t.icon} alt={t.name} className="w-7 h-7 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide whitespace-nowrap group-hover:text-foreground transition-colors">
              {t.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ToolsMarquee;
