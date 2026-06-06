import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageBackground from "@/components/PageBackground";
import { getService, services } from "@/data/services";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const ServicePage = () => {
  const { slug = "" } = useParams();
  const service = getService(slug);

  if (!service) return <Navigate to="/services" replace />;

  const url = `https://saurabhanandseo.com/services/${service.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.tagline,
    provider: {
      "@type": "Person",
      name: "Saurabh Anand",
      url: "https://saurabhanandseo.com",
    },
    areaServed: "Worldwide",
    url,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://saurabhanandseo.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://saurabhanandseo.com/services" },
      { "@type": "ListItem", position: 3, name: service.name, item: url },
    ],
  };

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={`${service.name} Services`}
        description={service.tagline}
        path={`/services/${service.slug}`}
        keywords={service.keywords}
        jsonLd={[serviceSchema, faqSchema, breadcrumbSchema]}
      />
      <PageBackground />
      <Navbar />

      <main className="container mx-auto px-6 pt-32 pb-20 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="text-xs text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/services" className="hover:text-foreground">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{service.name}</span>
        </nav>

        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14"
        >
          <div className="text-4xl mb-4">{service.icon}</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-5 leading-tight">
            {service.h1}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">{service.intro}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Book a discovery call <ArrowRight size={14} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-secondary transition-colors"
            >
              All services
            </Link>
          </div>
        </motion.header>

        {/* Sections (H2 + H3) */}
        {service.sections.map((section, idx) => (
          <motion.section
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
              {section.h2}
            </h2>
            {section.intro && (
              <p className="text-muted-foreground leading-relaxed mb-6">{section.intro}</p>
            )}
            <div className="grid md:grid-cols-2 gap-4">
              {section.h3s.map((h3, j) => (
                <div key={j} className="glass-card p-5">
                  <h3 className="font-display text-base font-semibold mb-2 text-primary">
                    {h3.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{h3.body}</p>
                </div>
              ))}
            </div>
          </motion.section>
        ))}

        {/* GEO & LLM Optimization */}
        <section className="grid md:grid-cols-2 gap-5 mb-14">
          <div className="glass-card p-6 border-primary/30">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={16} className="text-primary" />
              <h2 className="font-display text-lg font-semibold">GEO Optimization</h2>
            </div>
            <ul className="space-y-2">
              {service.geo.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <Check size={14} className="text-primary shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-6 border-accent/30">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={16} className="text-accent" />
              <h2 className="font-display text-lg font-semibold">LLM Optimization</h2>
            </div>
            <ul className="space-y-2">
              {service.llm.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <Check size={14} className="text-accent shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-14">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-6">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
              <details key={i} className="glass-card p-5 group">
                <summary className="cursor-pointer font-medium text-base list-none flex justify-between items-center">
                  <span>{faq.q}</span>
                  <span className="text-primary group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="glass-card p-8 text-center mb-14 border-primary/30">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">
            Ready to win AI search?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Get a free AI visibility audit and a 90-day roadmap tailored to your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Hire Saurabh <ArrowRight size={14} />
          </Link>
        </section>

        {/* Related */}
        <section>
          <h2 className="font-display text-xl font-semibold mb-4">Related services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/services/${r.slug}`}
                className="glass-card p-4 hover:border-primary/50 transition-all"
              >
                <div className="text-2xl mb-2">{r.icon}</div>
                <p className="font-medium text-sm mb-1">{r.name}</p>
                <p className="text-xs text-muted-foreground line-clamp-2">{r.tagline}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServicePage;
