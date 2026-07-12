import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  MapPin,
  Phone,
  Send,
  Linkedin,
  Mail,
  Download,
  FileText,
} from "lucide-react";
import { toast } from "sonner";

const EMAIL = "saurabhanandseo@gmail.com";
const PHONE = "+91 7667926418";
const LINKEDIN = "https://www.linkedin.com/in/saurabhanandseo/";
const RESUME_URL = "/Saurabh_Anand_Resume.pdf";

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Saurabh Anand",
  description:
    "Get in touch with Saurabh Anand — Data Analyst and SEO & Digital Marketing Professional — for consulting, collaborations, or full-time roles.",
  url: "https://saurabhanandseo.com/#contact",
  mainEntity: {
    "@type": "Person",
    name: "Saurabh Anand",
    email: `mailto:${EMAIL}`,
    url: "https://saurabhanandseo.com/",
    sameAs: [LINKEDIN],
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Consulting & Hiring Inquiries",
        email: EMAIL,
        telephone: PHONE,
        areaServed: "Worldwide",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  },
};

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) return;

    if (
      name.length > 100 ||
      email.length > 255 ||
      message.length > 1000
    ) {
      toast.error("Please shorten your input and try again.");
      return;
    }

    setSending(true);

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name} (${email})`
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      toast.success("Opening your email client…");
      setForm({
        name: "",
        email: "",
        message: "",
      });
      setSending(false);
    }, 400);
  };

  return (
    <section id="contact" className="py-24">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(contactJsonLd)}
        </script>
      </Helmet>

      <div className="container mx-auto px-6">
        <p className="section-label mb-2">Get in touch</p>

        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Let's work{" "}
          <span className="italic text-muted-foreground font-light">
            together.
          </span>
        </h2>

        <p className="text-muted-foreground max-w-2xl mb-10">
          Available for Data Analyst roles, SEO & Digital Marketing
          consulting, and freelance projects. Download my resume or send a
          message below.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <a
            href={RESUME_URL}
            download="Saurabh_Anand_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Download size={16} />
            Download Resume (PDF)
          </a>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm font-medium hover:bg-secondary transition-colors"
          >
            <FileText size={16} />
            View Resume
          </a>

          <a
            href={`mailto:${EMAIL}?subject=Hire%20Inquiry`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm font-medium hover:bg-secondary transition-colors"
          >
            <Mail size={16} />
            Email Me
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Ready to turn data into growth? Reach out for analytics
              dashboards, SEO audits, content strategy, or full-time
              opportunities.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={18} className="text-primary shrink-0" />
                {EMAIL}
              </a>

              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone size={18} className="text-primary shrink-0" />
                {PHONE}
              </a>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary shrink-0" />
                New Delhi, India
              </div>

              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={18} className="text-primary shrink-0" />
                linkedin.com/in/saurabhanandseo
              </a>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              required
              maxLength={100}
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />

            <input
              type="email"
              placeholder="Email"
              required
              maxLength={255}
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />

            <textarea
              placeholder="Message"
              rows={4}
              required
              maxLength={1000}
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            />

            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send Message"}
              <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
