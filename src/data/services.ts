export type FAQ = { q: string; a: string };
export type Section = { h2: string; intro?: string; h3s: { title: string; body: string }[] };

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  icon: string; // emoji for now
  h1: string;
  intro: string;
  keywords: string;
  sections: Section[];
  geo: string[]; // GEO optimization bullets
  llm: string[]; // LLM optimization bullets
  faqs: FAQ[];
};

export const services: Service[] = [
  {
    slug: "ai-seo",
    name: "AI SEO",
    tagline: "Rank in Google + AI Overviews + ChatGPT + Gemini + Perplexity.",
    icon: "🤖",
    h1: "AI SEO Services — Win Search, AI Overviews & LLM Answers",
    intro:
      "AI SEO blends traditional search optimization with Generative Engine Optimization (GEO) and Large Language Model Optimization (LLMO). I help brands earn visibility across Google, Bing, Google AI Overviews, ChatGPT, Gemini, Claude, Copilot and Perplexity — so your business is the answer, not just a result.",
    keywords:
      "AI SEO consultant, AI SEO services, AI search optimization, AI Overviews SEO, GEO SEO, LLM SEO, ChatGPT SEO, Gemini SEO, Perplexity SEO",
    sections: [
      {
        h2: "What is AI SEO?",
        intro:
          "AI SEO is the practice of optimizing content, entities, and technical signals for both traditional search engines and generative AI systems. It combines E-E-A-T, schema, semantic content design, and brand authority signals that LLMs reuse when forming answers.",
        h3s: [
          { title: "Traditional SEO foundations", body: "Crawlability, indexing, Core Web Vitals, internal linking, and topical authority — still the foundation of every AI search win." },
          { title: "Generative search layer (GEO)", body: "Optimize for how AI Overviews and answer engines select, summarize, and cite sources — including passage-level relevance and entity grounding." },
          { title: "LLM training-data influence (LLMO)", body: "Build a strong, citable digital footprint across high-authority sources LLMs ingest, so your brand is mentioned in ChatGPT, Gemini, Claude, and Perplexity answers." },
        ],
      },
      {
        h2: "What's included in an AI SEO engagement",
        h3s: [
          { title: "AI visibility audit", body: "Where do you appear (or not) across Google AI Overviews, ChatGPT, Gemini, Claude, Perplexity, and Copilot? Baseline + opportunity map." },
          { title: "Entity & brand graph optimization", body: "Wikipedia/Wikidata, knowledge panel, schema, and unstructured brand mentions — the inputs LLMs use to know who you are." },
          { title: "Content & passage optimization", body: "Question-led, citation-friendly content with clear answers, evidence, and schema so AI engines can quote you confidently." },
          { title: "Technical AI-readability", body: "llms.txt, robots policy for AI crawlers, structured data, and clean HTML semantics for reliable model ingestion." },
        ],
      },
    ],
    geo: [
      "Answer-first content blocks within the first 100 words",
      "FAQ + HowTo + Article schema on every key page",
      "Citations to original data, studies, and named sources",
      "Author entity markup with verifiable expertise signals",
    ],
    llm: [
      "Consistent brand entity across Wikipedia, LinkedIn, Crunchbase, GitHub",
      "llms.txt + llms-full.txt published at the domain root",
      "High-authority guest mentions LLMs are likely to ingest",
      "Schema-rich content that survives summarization without losing meaning",
    ],
    faqs: [
      { q: "How is AI SEO different from traditional SEO?", a: "Traditional SEO targets blue links. AI SEO additionally targets AI Overviews, chat answers, and LLM citations — which means optimizing for entities, passages, and brand authority, not just keywords." },
      { q: "How long until I see AI search results?", a: "Technical and on-page wins surface in Google within 4–8 weeks. LLM citations typically build over 3–6 months as your brand footprint and authority grow." },
      { q: "Do you optimize for ChatGPT and Perplexity specifically?", a: "Yes — each engine has different retrieval and citation behavior. The plan covers Google AI Overviews, ChatGPT, Gemini, Claude, Copilot, and Perplexity." },
    ],
  },
  {
    slug: "geo",
    name: "GEO",
    tagline: "Generative Engine Optimization for AI Overviews & answer engines.",
    icon: "✨",
    h1: "GEO Services — Generative Engine Optimization",
    intro:
      "Generative Engine Optimization (GEO) is the discipline of getting your brand cited, summarized, and recommended inside AI-generated answers. I make your content the source AI Overviews and answer engines reach for first.",
    keywords: "GEO, generative engine optimization, AI Overviews optimization, answer engine optimization, AEO",
    sections: [
      {
        h2: "How GEO works",
        h3s: [
          { title: "Retrieval", body: "Engines pull a shortlist of pages based on semantic match, freshness, and authority." },
          { title: "Synthesis", body: "An LLM summarizes the shortlist into a single answer, choosing whom to quote and link." },
          { title: "Citation", body: "Your goal: be in the shortlist AND structured so the model trusts you enough to cite you." },
        ],
      },
      {
        h2: "GEO deliverables",
        h3s: [
          { title: "Answer-first rewrites", body: "Reformat existing pages with TL;DR blocks, definitions, and citable stats." },
          { title: "Passage-level schema", body: "FAQPage, HowTo, Article, and Speakable markup so models can lift content cleanly." },
          { title: "Source authority building", body: "Earn mentions on the high-trust pages AI engines weight most heavily." },
        ],
      },
    ],
    geo: [
      "TL;DR + bullet summaries at the top of every key page",
      "Statistical claims with named sources and dates",
      "Schema.org structured data on every monetizable page",
      "Internal cross-linking between related entities",
    ],
    llm: [
      "Crawlable by GPTBot, Google-Extended, ClaudeBot, PerplexityBot",
      "Stable URLs and canonical tags so citations don't decay",
      "Consistent entity descriptions across the web",
    ],
    faqs: [
      { q: "Is GEO the same as AEO?", a: "Closely related. AEO targets answer boxes broadly; GEO specifically targets generative AI engines like Google AI Overviews and Perplexity." },
      { q: "Will GEO hurt my normal Google rankings?", a: "No — well-implemented GEO reinforces classic SEO signals like clarity, structure, and authority." },
    ],
  },
  {
    slug: "llm-optimization",
    name: "LLM Optimization",
    tagline: "Be the brand LLMs cite in ChatGPT, Gemini, Claude & Perplexity.",
    icon: "🧠",
    h1: "LLM Optimization — Get Cited in ChatGPT, Gemini, Claude & Perplexity",
    intro:
      "LLM Optimization (LLMO) makes your brand recognizable to large language models. When users ask ChatGPT or Gemini for recommendations, your name, products, and content show up — because the model has learned to trust you.",
    keywords: "LLM optimization, LLMO, ChatGPT SEO, Gemini SEO, Claude SEO, Perplexity SEO, AI citations",
    sections: [
      {
        h2: "The 3 layers of LLM Optimization",
        h3s: [
          { title: "Entity layer", body: "Make your brand a clean, unambiguous entity in Wikidata, Wikipedia, LinkedIn, Crunchbase, and schema." },
          { title: "Corpus layer", body: "Get your content into the high-authority sources LLMs train on or retrieve from at inference time." },
          { title: "Retrieval layer", body: "Optimize for real-time web retrieval used by Perplexity, ChatGPT Search, and Gemini." },
        ],
      },
      {
        h2: "Implementation playbook",
        h3s: [
          { title: "llms.txt + llms-full.txt", body: "Publish a machine-readable map of your site so LLMs can ingest it efficiently." },
          { title: "Author & organization schema", body: "Verify expertise, employer, and credentials in structured data." },
          { title: "Citable assets", body: "Original research, frameworks, glossaries, and data — the things LLMs love to quote." },
        ],
      },
    ],
    geo: [
      "Entity disambiguation via sameAs links",
      "Glossary pages for every core term you own",
      "Public data assets with clean tables and labels",
    ],
    llm: [
      "Allow LLM crawlers (or selectively block) via robots.txt",
      "Publish /llms.txt at the domain root",
      "Maintain a stable About page with full bio + credentials",
      "Cross-platform consistency: same bio, photo, links everywhere",
    ],
    faqs: [
      { q: "Can you guarantee ChatGPT will mention my brand?", a: "No serious consultant can guarantee an LLM output. What we can do is maximize the probability through entity strength, corpus presence, and retrieval-layer optimization." },
      { q: "How do you measure LLM visibility?", a: "We run prompt panels across ChatGPT, Gemini, Claude, and Perplexity weekly and track citation frequency, sentiment, and competitor share of voice." },
    ],
  },
  {
    slug: "technical-seo",
    name: "Technical SEO",
    tagline: "Crawlable, fast, schema-rich — the foundation under every AI win.",
    icon: "⚙️",
    h1: "Technical SEO Services — Built for AI-Era Crawlers",
    intro:
      "Technical SEO is the unglamorous foundation that decides whether Google, AI Overviews, and LLM crawlers can even understand your site. I fix the plumbing so the rest of your strategy compounds.",
    keywords: "technical SEO, Core Web Vitals, schema markup, crawlability, indexing, site architecture",
    sections: [
      {
        h2: "Areas covered",
        h3s: [
          { title: "Crawl & indexation", body: "robots.txt, sitemaps, canonicals, parameter handling, and pagination — done right." },
          { title: "Core Web Vitals", body: "LCP, INP, and CLS optimization at the code and asset level, not just lighthouse cosmetics." },
          { title: "Structured data", body: "Schema.org coverage with validation in Google Rich Results and Schema.org Validator." },
          { title: "Site architecture", body: "URL design, internal linking, and hub/spoke topical clusters that signal authority." },
        ],
      },
      {
        h2: "AI-era technical additions",
        h3s: [
          { title: "AI crawler policy", body: "Decide what to allow for GPTBot, Google-Extended, ClaudeBot, PerplexityBot, CCBot — and document it in robots.txt." },
          { title: "llms.txt", body: "Publish a curated map of your most important pages for LLM ingestion." },
          { title: "Rendering audit", body: "Confirm AI crawlers (which often don't execute JS) can read your content server-side or pre-rendered." },
        ],
      },
    ],
    geo: ["Validated FAQ/HowTo/Article schema", "Stable canonical URLs", "Fast LCP under 2.5s on mobile"],
    llm: ["AI bot access documented in robots.txt", "llms.txt + llms-full.txt at root", "Server-rendered or pre-rendered critical content"],
    faqs: [
      { q: "Do I need server-side rendering for AI SEO?", a: "Many AI crawlers don't execute JavaScript reliably. SSR, SSG, or pre-rendering of key pages is strongly recommended." },
      { q: "How long does a technical SEO project take?", a: "A typical audit + implementation cycle runs 4–8 weeks depending on stack complexity and dev bandwidth." },
    ],
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    tagline: "Automate SEO ops, content workflows, reporting & lead routing.",
    icon: "⚡",
    h1: "AI Automation Services — Scale SEO & Marketing Operations",
    intro:
      "I build AI-powered automation systems that take repetitive SEO, content, and marketing work off your team — from keyword research and brief generation to reporting and lead routing.",
    keywords: "AI automation, SEO automation, workflow automation, n8n, Make, Zapier, OpenAI workflows",
    sections: [
      {
        h2: "What gets automated",
        h3s: [
          { title: "Content production", body: "Brief generation, outline drafting, internal link suggestions, and meta data — with human-in-the-loop quality gates." },
          { title: "SEO operations", body: "Rank tracking, SERP monitoring, content decay alerts, and competitor diffs delivered to Slack or email." },
          { title: "Reporting", body: "Auto-generated weekly client reports pulling from GSC, GA4, Ahrefs/Semrush, and AI visibility tools." },
          { title: "Lead handling", body: "Form-to-CRM enrichment, qualification scoring, and routing using LLMs + n8n/Make." },
        ],
      },
    ],
    geo: ["Structured outputs ready for schema", "Consistent tone via prompt libraries"],
    llm: ["Brand-voice prompts versioned in Git", "Eval suites to prevent quality drift"],
    faqs: [
      { q: "Which tools do you use?", a: "n8n, Make, Zapier, Supabase, OpenAI, Anthropic, Google Gemini, and custom edge functions — chosen per use case." },
      { q: "Is the automation safe for SEO?", a: "Yes — every workflow includes editorial review checkpoints. We never auto-publish AI content without human approval." },
    ],
  },
  {
    slug: "agentic-ai",
    name: "Agentic AI",
    tagline: "Multi-step AI agents that plan, act, and report.",
    icon: "🛰️",
    h1: "Agentic AI Solutions — Autonomous Workflows That Ship Outcomes",
    intro:
      "Agentic AI moves beyond single-prompt chatbots. I design and deploy AI agents that plan, use tools, browse, query data, and complete real business outcomes — from SEO audits to lead qualification to research.",
    keywords: "agentic AI, AI agents, autonomous AI, multi-step AI, tool-using AI, LangGraph, AI SDK",
    sections: [
      {
        h2: "Agent patterns I build",
        h3s: [
          { title: "Research agents", body: "Multi-source research with citation, summarization, and structured output." },
          { title: "SEO audit agents", body: "Crawl, analyze, and produce prioritized fix lists with code-level suggestions." },
          { title: "Sales & support agents", body: "Qualify leads, answer product questions, and escalate to humans cleanly." },
        ],
      },
      {
        h2: "Stack & guardrails",
        h3s: [
          { title: "Modern frameworks", body: "Vercel AI SDK, LangGraph, OpenAI Agents SDK — chosen for reliability, observability, and cost." },
          { title: "Evals & tracing", body: "Every agent ships with traces, evals, and human-approval gates for irreversible actions." },
        ],
      },
    ],
    geo: ["Agent outputs structured for schema reuse"],
    llm: ["Versioned tools and prompts", "Eval-driven prompt updates"],
    faqs: [
      { q: "Are AI agents reliable enough for production?", a: "With the right scope, tool design, and human approval gates — yes. I scope agents narrowly and add evals before shipping." },
      { q: "What does an agent project cost?", a: "Discovery + MVP typically runs 4–6 weeks. Pricing depends on integrations and infra; ask for a scoped quote." },
    ],
  },
  {
    slug: "vibe-coding",
    name: "Vibe Coding",
    tagline: "Ship production apps fast with AI-first development.",
    icon: "🎯",
    h1: "Vibe Coding — Ship AI-Native Products in Days, Not Months",
    intro:
      "Vibe Coding is AI-first product development: pairing with tools like Lovable, Cursor, Claude Code, and the AI SDK to design, build, and ship production-grade web apps at startup speed.",
    keywords: "vibe coding, AI development, Lovable, Cursor, Claude Code, AI SDK, rapid prototyping",
    sections: [
      {
        h2: "What I build",
        h3s: [
          { title: "AI-native marketing sites", body: "Conversion-focused sites with built-in AI chat, semantic search, and personalization." },
          { title: "Internal AI tools", body: "Dashboards, copilots, and workflow tools for marketing, sales, and ops teams." },
          { title: "MVP products", body: "End-to-end MVPs with auth, billing, AI features, and clean component architecture." },
        ],
      },
      {
        h2: "How vibe coding stays production-safe",
        h3s: [
          { title: "Typed, tested, reviewed", body: "TypeScript, schema validation, and PR review — AI speed without throwaway code." },
          { title: "Modern stack", body: "React, Vite, Tailwind, shadcn/ui, Supabase, and the Vercel AI SDK." },
        ],
      },
    ],
    geo: ["SEO-ready routes with per-page metadata and JSON-LD"],
    llm: ["llms.txt shipped by default", "Server-rendered content for AI crawlers when needed"],
    faqs: [
      { q: "Is vibe-coded code maintainable?", a: "Yes — when paired with types, tests, and review. The output is normal React/TypeScript that any engineer can extend." },
      { q: "Do you hand off the code?", a: "Always. You own the repo, the deployment, and the data from day one." },
    ],
  },
  {
    slug: "saas-seo",
    name: "SaaS SEO",
    tagline: "Programmatic, product-led SEO for B2B SaaS growth.",
    icon: "📈",
    h1: "SaaS SEO Services — Programmatic, Product-Led, AI-Ready",
    intro:
      "SaaS SEO is different. Long sales cycles, multi-stakeholder buying, programmatic page opportunities, and AI search disruption all converge. I build SEO engines that compound across content, product, and AI surfaces.",
    keywords: "SaaS SEO, B2B SEO, programmatic SEO, product-led SEO, integration pages, comparison pages",
    sections: [
      {
        h2: "The SaaS SEO engine",
        h3s: [
          { title: "Bottom-of-funnel pages", body: "Comparison, alternative, integration, and use-case pages that convert demos." },
          { title: "Programmatic SEO", body: "Templated pages at scale — directories, integrations, locations — with quality controls." },
          { title: "Topical authority", body: "Hub-and-spoke clusters around your core categories to win Google + AI Overviews." },
        ],
      },
    ],
    geo: ["Comparison pages with structured pros/cons tables", "FAQ schema on every BOFU page"],
    llm: ["G2/Capterra/Trustpilot presence for entity strength", "Consistent product positioning across all owned and earned channels"],
    faqs: [
      { q: "How is SaaS SEO different from ecommerce SEO?", a: "SaaS sells subscriptions to multi-stakeholder buyers. The keyword sets, page types (vs/alternatives/integrations), and conversion paths are fundamentally different." },
      { q: "Do you work with PLG companies?", a: "Yes — product-led growth and SEO are deeply complementary. We integrate signup flows directly into SEO landing pages." },
    ],
  },
  {
    slug: "ai-consulting",
    name: "AI Consulting",
    tagline: "Strategy, roadmap, and execution support for AI-driven growth.",
    icon: "🧭",
    h1: "AI Consulting — Strategy, Roadmap & Execution",
    intro:
      "Most teams know AI matters but don't know where to start. I help leadership teams cut through hype, identify high-leverage AI opportunities, and execute against a measurable roadmap.",
    keywords: "AI consulting, AI strategy, AI roadmap, AI implementation, fractional AI consultant",
    sections: [
      {
        h2: "Engagement formats",
        h3s: [
          { title: "AI opportunity audit", body: "2–4 week deep dive into your business, customer, and stack — output is a prioritized AI roadmap." },
          { title: "Fractional AI lead", body: "Ongoing strategic support: weekly working sessions, vendor selection, and execution oversight." },
          { title: "Workshops & training", body: "Team workshops on AI SEO, GEO, LLMO, vibe coding, and agentic AI — tailored to your stack." },
        ],
      },
    ],
    geo: ["Strategy docs structured for internal reuse and schema"],
    llm: ["Frameworks published as citable assets to build authority"],
    faqs: [
      { q: "Who do you typically work with?", a: "Founders, CMOs, and Heads of SEO/Growth at B2B SaaS, ecommerce, and media companies — from seed-stage to scale-up." },
      { q: "How do engagements start?", a: "Always with a discovery call. If there's fit, we scope a fixed-fee audit or a monthly fractional engagement." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
