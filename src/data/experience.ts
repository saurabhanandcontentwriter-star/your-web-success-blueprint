export interface Job {
  slug: string;
  period: string;
  title: string;
  company: string;
  favicon: string;
  tools: string[];
  description: string;
  achievements: string[];
  responsibilities: string[];
}

export const jobs: Job[] = [
  {
    slug: "tripzygo-seo-executive",
    period: "Mar 2024 – Aug 2026",
    title: "SEO Executive",
    company: "TripzyGo",
    favicon: "https://www.google.com/s2/favicons?domain=tripzygo.in&sz=64",
    tools: ["Google Analytics", "Search Console", "Ahrefs", "Semrush"],
    description:
      "Spearheading the organic growth strategy for a leading travel platform. Deep technical audits, advanced keyword research, and high-impact content strategy.",
    achievements: [
      "Achieved 80% increase in organic traffic within 6 months",
      "Optimized 500+ high-intent landing pages for conversion",
      "Implemented advanced schema markup for rich snippets",
      "Managed a monthly content calendar of 50+ SEO-optimized articles",
    ],
    responsibilities: [
      "Own the end-to-end SEO roadmap and reporting cadence.",
      "Run technical audits, fix crawl/indexation issues, and improve Core Web Vitals.",
      "Lead keyword research, content briefs, and on-page optimization.",
      "Coordinate with developers and content teams to ship SEO initiatives.",
    ],
  },
  {
    slug: "guest-blogging-technology-seo-analyst",
    period: "Mar 2022 – Mar 2023",
    title: "SEO Analyst",
    company: "Guest Blogging Technology",
    favicon: "https://www.google.com/s2/favicons?domain=guestbloggingtechnology.com&sz=64",
    tools: ["Google Analytics", "Moz", "BuzzStream", "Screaming Frog"],
    description:
      "Focused on building high-authority backlink profiles and executing large-scale outreach campaigns.",
    achievements: [
      "Secured 200+ high-DA backlinks through strategic outreach",
      "Increased average Domain Authority by 15 points across portfolio",
      "Reduced bounce rate by 30% through content UX optimization",
      "Conducted weekly SEO performance reporting for key stakeholders",
    ],
    responsibilities: [
      "Plan and execute link-building and digital PR campaigns.",
      "Identify guest post and outreach opportunities at scale.",
      "Monitor backlink health and disavow toxic links.",
      "Deliver weekly performance and outreach reports.",
    ],
  },
  {
    slug: "tripzygo-international-intern",
    period: "Internship",
    title: "Digital Marketing Intern",
    company: "TripzyGo International",
    favicon: "https://www.google.com/s2/favicons?domain=tripzygo.in&sz=64",
    tools: ["Google Analytics", "Canva", "Hootsuite", "WordPress"],
    description:
      "Learned the fundamentals of SEO and digital marketing by supporting senior analysts.",
    achievements: [
      "Contributed to a 70% traffic increase for the main blog",
      "Managed social media accounts with 20% growth in engagement",
      "Optimized 100+ legacy posts for current SEO standards",
      "Assisted in the launch of 3 successful email marketing campaigns",
    ],
    responsibilities: [
      "Support keyword research and on-page optimization tasks.",
      "Refresh and re-optimize legacy blog posts.",
      "Schedule and publish social media content.",
      "Help draft email marketing copy and reports.",
    ],
  },
];

export const getJob = (slug: string) => jobs.find((j) => j.slug === slug);
