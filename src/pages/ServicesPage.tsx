import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageBackground from "@/components/PageBackground";
import { services } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

const ServicesPage = () => {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `https://saurabhanandseo.com/services/${s.slug}`,
    })),
  };

  return (
    <>
      <SEO
        title="AI SEO, GEO, LLM Optimization & Automation Services"
        description="AI-native consulting services by Saurabh Anand: AI SEO, GEO, LLM Optimization, Technical SEO, AI Automation, Agentic AI, Vibe Coding, SaaS SEO and AI Consulting."
        path="/services"
        keywords="AI SEO services, GEO services, LLM optimization, technical SEO, AI automation, agentic AI, vibe coding, SaaS SEO, AI consulting"
        jsonLd={itemListSchema}
      />
      <PageBackground />
      <Navbar />

      <main className="container mx-auto px-6 pt-32 pb-20 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Services</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-5">
            AI-Native SEO, GEO & Automation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nine focused services to help your brand win Google, Google AI Overviews, ChatGPT, Gemini, Claude and Perplexity — and ship the AI products around them.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/services/${s.slug}`}
                className="group glass-card p-6 h-full flex flex-col justify-between hover:border-primary/50 transition-all"
              >
                <div>
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h2 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {s.name}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.tagline}</p>
                </div>
                <div className="mt-5 flex items-center gap-1 text-sm text-primary">
                  Explore <ArrowUpRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ServicesPage;
