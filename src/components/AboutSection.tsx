import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const backgroundAreas = [
  "SEO Strategy",
  "Technical SEO",
  "AI Search Optimization",
  "SaaS Marketing",
  "Digital Marketing",
  "AI Automation",
  "Agentic AI Workflows",
  "Vibe Coding Projects",
];

const communities = [
  "Google Developer Groups",
  "Developer Conferences",
  "AI Communities",
  "Technical Workshops",
  "Startup Events",
];

const expertise = [
  { title: "Technical SEO", desc: "Website architecture, indexing, crawling, Core Web Vitals and search visibility." },
  { title: "AI SEO", desc: "Optimizing content for AI-powered search experiences." },
  { title: "GEO", desc: "Improving visibility within generative AI platforms and AI answer engines." },
  { title: "LLM Optimization", desc: "Helping brands become discoverable inside AI assistants and large language models." },
  { title: "Automation", desc: "Building AI workflows that save time and improve efficiency." },
  { title: "Vibe Coding", desc: "Rapid prototyping and AI-assisted software development." },
];

const whyWork = [
  "AI-first mindset",
  "Technical SEO expertise",
  "Community leadership",
  "Automation experience",
  "Future-ready strategies",
  "Proven digital marketing experience",
];

const faqs = [
  { q: "What is AI SEO?", a: "AI SEO focuses on optimizing content and websites for AI-powered search experiences." },
  { q: "What is GEO?", a: "Generative Engine Optimization improves brand visibility within AI-generated answers." },
  { q: "What is LLM Optimization?", a: "LLM Optimization helps businesses become discoverable in large language models and AI assistants." },
  { q: "What services does Saurabh Anand provide?", a: "AI SEO, Technical SEO, GEO, Automation Systems, Vibe Coding and AI Consulting." },
  { q: "Does Saurabh work with startups?", a: "Yes. Startup founders, SaaS companies, agencies and enterprise organizations are supported." },
];

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-6 max-w-4xl">
      <p className="section-label mb-2">About</p>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About Saurabh Anand</h1>

      {/* Intro */}
      <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
        Helping Businesses Grow Through AI SEO, GEO and Automation
      </h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed mb-12">
        <p>
          Saurabh Anand is an AI SEO Consultant, Technical SEO Specialist, Vibe Coder, and Automation
          Strategist focused on helping businesses improve visibility across search engines, AI search
          platforms, and large language models.
        </p>
        <p>
          With expertise in Technical SEO, Generative Engine Optimization (GEO), LLM Optimization, SaaS
          SEO, and AI-powered marketing systems, he helps organizations prepare for the future of search.
        </p>
        <p>
          As a LinkedIn Top Voice 2024 and active contributor within Google Developer Groups, Saurabh
          combines community leadership with practical implementation of modern AI technologies.
        </p>
      </div>

      {/* Professional Background */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl font-display font-semibold mb-4">Professional Background</h2>
        <p className="text-muted-foreground mb-4">Over the years, Saurabh has worked across:</p>
        <div className="grid sm:grid-cols-2 gap-2">
          {backgroundAreas.map((a) => (
            <div key={a} className="glass-card px-4 py-2 text-sm">{a}</div>
          ))}
        </div>
        <p className="text-muted-foreground mt-4">
          His work focuses on combining human creativity with AI systems to build scalable growth frameworks.
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
          <li>• Digital Marketing</li>
          <li>• AI Systems</li>
          <li>• Search Technologies</li>
        </ul>
      </motion.div>

      {/* Community Leadership */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-2xl font-display font-semibold mb-4">Community Leadership</h2>
        <p className="text-muted-foreground mb-4">Saurabh actively contributes to developer communities including:</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {communities.map((c) => (
            <span key={c} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20">{c}</span>
          ))}
        </div>
        <p className="text-muted-foreground">
          He regularly shares insights on AI SEO, automation, LLM optimization, and emerging search technologies.
        </p>
      </motion.div>

      {/* Areas of Expertise */}
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

      {/* Why Work With */}
      <div className="mb-12">
        <h2 className="text-2xl font-display font-semibold mb-4">Why Work With Saurabh Anand</h2>
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

      {/* Link to full About page */}
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
          Read Full Bio & FAQ <ArrowRight size={16} />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
