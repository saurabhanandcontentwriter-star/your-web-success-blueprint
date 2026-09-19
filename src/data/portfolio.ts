export interface Project {
  slug: string;
  title: string;
  company: string;
  stat: string;
  description: string;
  tags: string[];
  image: string;
  url: string;
  overview: string;
  challenge: string;
  approach: string[];
  results: string[];
}

export const projects: Project[] = [\n  {
    slug: "crazy-seo-team-ideas",
    title: "Crazy SEO Team Ideas & Prompt Engineering",
    company: "Crazy SEO Team",
    stat: "AI + SEO",
    description: "An AI-first ideas and prompt engineering project focused on turning SEO strategy, content research and growth workflows into reusable systems.",
    tags: ["Prompt Engineering", "AI SEO", "GEO", "Automation"],
    image: "/portfolio/crazy-seo-team-ideas.svg",
    url: "https://www.crazyseoteam.in/ideas",
    overview:
      "Crazy SEO Team Ideas is a practical project for exploring ideas, prompts and AI-assisted growth workflows across SEO, content and digital marketing.",
    challenge:
      "Modern search and content teams need repeatable ways to turn business questions, search intent and campaign goals into high-quality AI-assisted outputs without losing strategic control.",
    approach: [
      "Designed structured prompts around SEO research, content ideation and marketing workflows.",
      "Connected prompt engineering with search intent, content strategy and AI SEO use cases.",
      "Explored reusable idea systems that can support faster research, drafting and optimization.",
      "Applied an execution-first mindset so AI outputs can move into measurable SEO and growth workflows.",
    ],
    results: [
      "Built a dedicated Ideas experience for AI-assisted SEO and marketing workflows",
      "Positioned Prompt Engineering alongside SEO, GEO and automation skills",
      "Created reusable thinking patterns for content and search strategy",
    ],
  },

  {
    slug: "tripzygo-ecommerce-seo",
    title: "E-commerce SEO Overhaul",
    company: "TripzyGo",
    stat: "+120% Traffic",
    description: "A complete technical and content SEO overhaul for a travel booking platform.",
    tags: ["Technical SEO", "Content Strategy", "E-commerce"],
    image: "/portfolio/tripzygo-seo.svg",
    url: "https://www.tripzygo.in/",
    overview:
      "TripzyGo is a fast-growing travel booking platform offering curated holiday packages. The site needed a top-to-bottom SEO refresh to compete in a saturated travel niche.",
    challenge:
      "Thin destination pages, duplicate itineraries, slow Core Web Vitals, and a weak internal linking structure capped organic visibility despite strong demand.",
    approach: [
      "Completed a deep technical audit covering crawlability, indexation, and Core Web Vitals.",
      "Rebuilt destination and package page templates with intent-aligned content blocks.",
      "Implemented Tour, Product and Breadcrumb schema for richer SERP appearance.",
      "Designed a topic cluster model around destinations, themes and travel guides.",
    ],
    results: [
      "+120% organic traffic in 6 months",
      "500+ landing pages optimized for high-intent keywords",
      "Top-3 rankings on dozens of competitive destination terms",
    ],
  },
  {
    slug: "guest-blogging-tech-saas",
    title: "SaaS Content Authority",
    company: "Guest Blogging Tech",
    stat: "+85% Leads",
    description: "Building a content engine that drives qualified leads with topic cluster strategy.",
    tags: ["Link Building", "Topic Clusters", "SaaS"],
    image: "/portfolio/guest-blogging-saas.svg",
    url: "https://guestbloggingtech.com/",
    overview:
      "A SaaS-focused outreach platform that needed authority content and a steady backlink pipeline to drive qualified demo requests.",
    challenge:
      "Low domain authority, scattered content, and a lack of pillar pages made it hard to convert search visitors into trial signups.",
    approach: [
      "Mapped the buyer journey to a hub-and-spoke topic cluster model.",
      "Produced pillar pages and supporting content tailored to commercial intent.",
      "Ran scaled outreach campaigns to earn high-DA contextual backlinks.",
      "Tightened on-page SEO and CTAs across the funnel.",
    ],
    results: [
      "+85% qualified leads quarter over quarter",
      "200+ contextual backlinks from DA 50+ sites",
      "Average DA lifted by 15 points across the portfolio",
    ],
  },
  {
    slug: "local-seo-multi-location",
    title: "Local SEO for Multi-location Brand",
    company: "Global Retailer",
    stat: "+200% Visibility",
    description: "Optimized Google Business Profiles and localized content for 50+ locations.",
    tags: ["Local SEO", "GBP Optimization", "Scalable SEO"],
    image: "/portfolio/local-seo-gbp.svg",
    url: "https://crazyseoteam.in/",
    overview:
      "A multi-location retailer needed consistent local visibility across 50+ Google Business Profiles and city-specific landing pages.",
    challenge:
      "Inconsistent NAP data, duplicate listings, and generic location pages were hurting Map Pack rankings and store walk-ins.",
    approach: [
      "Audited and standardized NAP details across all locations and citations.",
      "Built scalable city-level landing page templates with unique local content.",
      "Optimized GBP profiles with categories, services, posts and review workflows.",
      "Implemented LocalBusiness schema and a review acquisition program.",
    ],
    results: [
      "+200% local search visibility",
      "Map Pack rankings for primary keywords across 40+ cities",
      "Significant uplift in direction requests and calls",
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
