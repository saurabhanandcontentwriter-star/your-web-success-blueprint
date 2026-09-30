import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Instagram, Linkedin, MousePointerClick, Search } from "lucide-react";

const campaigns = [
  {
    platform: "Instagram Ads",
    icon: Instagram,
    badge: "SOCIAL PERFORMANCE",
    title: "Creative Carousel Campaigns",
    description: "Designed scroll-stopping carousel creatives around offers, audience pain points and clear conversion CTAs.",
    work: ["Ad creative direction", "Carousel storytelling", "Audience & funnel mapping", "CTA optimisation"],
    metric: "Creative-led acquisition",
    accent: "from-fuchsia-500/30 via-purple-500/10 to-transparent",
  },
  {
    platform: "LinkedIn Ads",
    icon: Linkedin,
    badge: "B2B DEMAND GEN",
    title: "LinkedIn Lead Generation",
    description: "Built B2B campaign concepts focused on professional audiences, strong value propositions and qualified lead capture.",
    work: ["Audience segmentation", "Lead-gen creative", "Copy & messaging", "Conversion tracking"],
    metric: "Qualified B2B leads",
    accent: "from-sky-500/30 via-blue-500/10 to-transparent",
  },
  {
    platform: "Google Ads",
    icon: Search,
    badge: "SEARCH PERFORMANCE",
    title: "Intent-Based Search Campaigns",
    description: "Structured search campaigns around commercial intent, keyword themes, landing-page alignment and measurable conversions.",
    work: ["Keyword strategy", "Ad copy testing", "Landing-page alignment", "Conversion optimisation"],
    metric: "High-intent acquisition",
    accent: "from-emerald-500/30 via-cyan-500/10 to-transparent",
  },
];

const PaidMediaSection = () => {
  const [active, setActive] = useState(0);
  const campaign = campaigns[active];
  const Icon = campaign.icon;

  const next = () => setActive((current) => (current + 1) % campaigns.length);
  const prev = () => setActive((current) => (current - 1 + campaigns.length) % campaigns.length);

  return (
    <section id="paid-media" className="paid-media-section relative overflow-hidden py-20 md:py-28">
      <div className="paid-media-grid absolute inset-0 pointer-events-none" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="section-label mb-3">Paid Media · Campaign Work</p>
          <h2 className="text-4xl font-display font-bold md:text-6xl">
            Ads that look <span className="gradient-text">real</span>. Strategy that drives action.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            A visual showcase of my performance marketing work across Instagram, LinkedIn and Google Ads — from creative direction to conversion-focused campaign structure.
          </p>
        </div>

        <div className="paid-media-tabs mx-auto mb-10 flex max-w-3xl justify-center gap-2 overflow-x-auto p-2">
          {campaigns.map((item, index) => {
            const TabIcon = item.icon;
            return (
              <button
                key={item.platform}
                onClick={() => setActive(index)}
                className={`paid-media-tab ${active === index ? "paid-media-tab-active" : ""}`}
                aria-label={`Show ${item.platform} campaign`}
              >
                <TabIcon className="h-4 w-4" />
                {item.platform}
              </button>
            );
          })}
        </div>

        <div className="mx-auto max-w-6xl">
          <motion.div
            key={campaign.platform}
            initial={{ opacity: 0, x: 35, rotateY: -8 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="paid-media-card"
          >
            <div className={`paid-media-visual bg-gradient-to-br ${campaign.accent}`}>
              <div className="paid-media-phone-shadow" />
              <div className="paid-media-ad-window">
                <div className="paid-media-ad-top">
                  <div className="flex items-center gap-2">
                    <div className="paid-media-avatar">SA</div>
                    <div>
                      <div className="text-xs font-bold">Saurabh Anand</div>
                      <div className="text-[9px] text-white/50">{campaign.platform} · Sponsored</div>
                    </div>
                  </div>
                  <span className="paid-media-live">LIVE</span>
                </div>

                <div className="paid-media-creative">
                  <div className="paid-media-creative-glow" />
                  <span className="paid-media-kicker">{campaign.badge}</span>
                  <strong>{campaign.title}</strong>
                  <span>Turn attention into measurable growth.</span>
                  <div className="paid-media-cta">Learn More <MousePointerClick className="h-3.5 w-3.5" /></div>
                </div>

                <div className="paid-media-ad-actions">
                  <span>♡</span><span>◌</span><span>↗</span><span className="ml-auto">•••</span>
                </div>
              </div>
              <div className="paid-media-floating paid-media-floating-one">{campaign.metric}</div>
              <div className="paid-media-floating paid-media-floating-two">3D CAMPAIGN VIEW</div>
            </div>

            <div className="paid-media-copy">
              <div className="mb-5 flex items-center gap-3">
                <div className="paid-media-platform-icon"><Icon className="h-5 w-5" /></div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.18em] text-primary">{campaign.badge}</p>
                  <h3 className="text-2xl font-display font-bold">{campaign.platform}</h3>
                </div>
              </div>
              <h4 className="text-3xl font-display font-bold leading-tight">{campaign.title}</h4>
              <p className="mt-4 leading-7 text-muted-foreground">{campaign.description}</p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {campaign.work.map((item) => (
                  <div key={item} className="paid-media-work-chip">{item}</div>
                ))}
              </div>

              <a href="#contact" className="paid-media-project-link mt-7 inline-flex items-center gap-2">
                Discuss a campaign <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button onClick={prev} className="paid-media-arrow" aria-label="Previous campaign"><ChevronLeft /></button>
            <div className="flex gap-2">
              {campaigns.map((item, index) => (
                <button key={item.platform} onClick={() => setActive(index)} className={`paid-media-dot ${active === index ? "paid-media-dot-active" : ""}`} aria-label={`Go to ${item.platform}`} />
              ))}
            </div>
            <button onClick={next} className="paid-media-arrow" aria-label="Next campaign"><ChevronRight /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaidMediaSection;
