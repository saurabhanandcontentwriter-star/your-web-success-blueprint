import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const backgroundAreas = [
  "AI SEO Strategy",
  "Technical SEO Audits",
  "Generative Engine Optimization (GEO)",
  "LLM Optimization (LLMO)",
  "SaaS SEO & Growth",
  "Digital Marketing & Content Strategy",
  "AI Automation & n8n Workflows",
  "Agentic AI Systems",
  "Vibe Coding & AI-Assisted Development",
  "Programmatic SEO",
];

const communities = [
  "Google Developer Groups (GDG)",
  "DevFest Ranchi Organizer",
  "AI & LLM Communities",
  "Technical SEO Workshops",
  "Startup & SaaS Founder Circles",
];

const expertise = [
  { title: "Technical SEO", desc: "Website architecture, indexing, crawl budget, Core Web Vitals, schema markup and search visibility engineering." },
  { title: "AI SEO", desc: "Optimizing content, structured data and entities for AI-powered search experiences like SGE and AI Overviews." },
  { title: "GEO (Generative Engine Optimization)", desc: "Improving brand visibility inside generative AI platforms — ChatGPT, Gemini, Perplexity, Claude and Grok." },
  { title: "LLM Optimization (LLMO)", desc: "Helping brands become citable and discoverable inside large language models and AI assistants." },
  { title: "AI Automation", desc: "Building n8n, Make and custom AI workflows that scale SEO ops and marketing efficiency." },
  { title: "Vibe Coding", desc: "Rapid prototyping and AI-assisted software development with Lovable, Cursor and modern LLM tooling." },
];

const whyWork = [
  "AI-first SEO mindset",
  "Deep technical SEO expertise",
  "Active community leadership (GDG)",
  "Hands-on automation experience",
  "Future-ready GEO & LLMO strategies",
  "Proven digital marketing execution",
  "LinkedIn Top Voice 2024",
  "Vibe coder & AI builder",
];

const faqs = [
  { q: "Who is Saurabh Anand?", a: "Saurabh Anand is an AI SEO Consultant, Technical SEO Specialist, Vibe Coder and AI Automation Expert based in India. He helps brands, SaaS companies and startups grow through AI-powered search, GEO and LLM optimization." },
  { q: "What is AI SEO?", a: "AI SEO is the practice of optimizing websites and content so they perform well in AI-powered search experiences such as Google AI Overviews, ChatGPT Search, Perplexity and Gemini, in addition to traditional Google rankings." },
  { q: "What is GEO (Generative Engine Optimization)?", a: "GEO improves how often and how accurately your brand is surfaced inside generative AI answer engines. It combines structured data, authoritative content, entity building and citation-worthy assets." },
  { q: "What is LLM Optimization (LLMO)?", a: "LLM Optimization ensures your business, products and expertise are represented inside large language models like GPT, Gemini and Claude — so AI assistants recommend you when users ask relevant questions." },
  { q: "What services does Saurabh Anand provide?", a: "AI SEO, Technical SEO, GEO, LLMO, SaaS SEO, AI Automation, Agentic AI workflows, Vibe Coding and end-to-end AI Consulting for founders and marketing teams." },
  { q: "Does Saurabh work with startups and SaaS companies?", a: "Yes. Startup founders, SaaS companies, D2C brands, agencies and enterprise marketing teams are all supported with tailored AI-first growth strategies." },
  { q: "Where is Saurabh Anand based?", a: "Saurabh is based in India and works with clients globally across the US, UK, UAE and APAC." },
];

const AboutSection = () => {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Saurabh Anand — AI SEO Consultant, GEO & LLMO Expert",
    url: "https://saurabhanandseo.com/about",
    description:
      "About Saurabh Anand — AI SEO Consultant, Technical SEO Specialist, GEO & LLMO expert, Vibe Coder and AI Automation strategist helping brands grow in AI-powered search.",
    mainEntity: {
      "@type": "Person",
      name: "Saurabh Anand",
      jobTitle: "AI SEO Consultant, Vibe Coder & AI Automation Expert",
      url: "https://saurabhanandseo.com/about",
      sameAs: ["https://www.linkedin.com/in/saurabhanandseo/"],
      knowsAbout: [
        "AI SEO", "Technical SEO", "GEO", "LLM Optimization",
        "AI Automation", "Vibe Coding", "SaaS SEO", "Agentic AI",
      ],
    },
  };

  return (
    <section id="about" className="py-24">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(aboutJsonLd)}</script>
      </Helmet>

      <div className="container mx-auto px-6 max-w-4xl">
        <p className="section-label mb-2">About</p>

        {/* SEO-optimized H1 */}
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
          About Saurabh Anand — Data Analyst, SEO &amp; Digital Marketing Professional
        </h1>

        {/* SEO-optimized H2 */}
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
          Turning Data Into Insights and Driving Growth Through Analytics, SEO and AI
        </h2>

        <div className="space-y-4 text-muted-foreground leading-relaxed mb-12">
          <p>
            I am <strong>Saurabh Anand</strong>, a <strong>Data Analyst</strong> and
            <strong> Digital Marketing professional</strong> with experience in SEO, content strategy and
            performance marketing. I specialize in transforming raw data into actionable business insights
            using <strong>Excel, SQL, Python, Power BI and Tableau</strong>.
          </p>
          <p>
            My background in organic growth and analytics enables me to bridge marketing and data — helping
            businesses make <strong>data-driven decisions</strong>, improve user experiences and increase
            measurable results. I am passionate about <strong>dashboard development</strong>,
            <strong> data visualization</strong>, <strong>business intelligence</strong> and
            <strong> AI-powered analytics solutions</strong>.
          </p>
          <p>
            Alongside analytics, I work as an <strong>AI SEO Consultant</strong> and
            <strong> Technical SEO Specialist</strong>, helping brands grow visibility across Google,
            ChatGPT, Gemini and Perplexity through GEO, LLM Optimization and intelligent automation.
            Named a <strong>LinkedIn Top Voice 2024</strong>, I sit at the intersection of data, search
            and AI — building growth engines that are ready for the next decade.
          </p>
        </div>


        {/* Professional Background */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-2xl font-display font-semibold mb-4">Professional Background &amp; Focus Areas</h2>
          <p className="text-muted-foreground mb-4">
            Saurabh's day-to-day work spans strategy, execution and AI systems design across these areas:
          </p>
          <div className="grid sm:grid-cols-2 gap-2">
            {backgroundAreas.map((a) => (
              <div key={a} className="glass-card px-4 py-2 text-sm">{a}</div>
            ))}
          </div>
          <p className="text-muted-foreground mt-4">
            The common thread across every engagement is combining <strong>human creativity</strong> with
            <strong> AI systems</strong> to build scalable, defensible growth — not just rankings, but durable
            visibility across every surface where buyers now search.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 glass-card p-6">
          <h2 className="text-2xl font-display font-semibold mb-3">Education</h2>
          <p className="font-medium">Bachelor's Degree</p>
          <p className="text-muted-foreground mb-4">Allama Iqbal College, Bihar Sharif, Nalanda</p>
          <p className="text-sm font-medium mb-2">Specialized interests:</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Computer Applications</li>
            <li>• Digital Marketing &amp; SEO</li>
            <li>• AI Systems &amp; LLMs</li>
            <li>• Search Technologies &amp; Information Retrieval</li>
          </ul>
        </motion.div>

        {/* Community */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-2xl font-display font-semibold mb-4">Community Leadership &amp; Speaking</h2>
          <p className="text-muted-foreground mb-4">
            Saurabh actively contributes to developer and marketing communities, including:
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {communities.map((c) => (
              <span key={c} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20">{c}</span>
            ))}
          </div>
          <p className="text-muted-foreground">
            He regularly shares insights on <strong>AI SEO</strong>, <strong>automation</strong>,
            <strong> LLM optimization</strong> and emerging search technologies through talks, LinkedIn content,
            open-source experiments and community meetups.
          </p>
        </motion.div>

        {/* Expertise */}
        <div className="mb-12">
          <h2 className="text-2xl font-display font-semibold mb-6">Areas of Expertise</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {expertise.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-5"
              >
                <h3 className="font-display font-semibold mb-2">{e.title}</h3>
                <p className="text-sm text-muted-foreground">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why work */}
        <div className="mb-12">
          <h2 className="text-2xl font-display font-semibold mb-4">Why Work With Saurabh Anand</h2>
          <p className="text-muted-foreground mb-4">
            Clients choose Saurabh because he treats SEO as an engineering and AI problem — not a checklist.
            Every project ships with clear reporting, measurable outcomes and reusable AI systems your team can own.
          </p>
          <div className="grid sm:grid-cols-2 gap-2">
            {whyWork.map((w) => (
              <div key={w} className="flex items-center gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {w}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-8">
          <h2 className="text-2xl font-display font-semibold mb-4">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="glass-card px-6">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/40 last:border-0">
                <AccordionTrigger className="text-left font-display">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity shadow-[0_8px_30px_-5px_hsl(var(--primary)/0.5)]"
          >
            Read Full Bio &amp; FAQ <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
