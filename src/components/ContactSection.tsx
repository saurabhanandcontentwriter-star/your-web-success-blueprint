import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  MapPin,
  Send,
  Linkedin,
  Mail,
  Download,
  FileText,
} from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const EMAIL = "saurabhanandseo@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/saurabhanandseo/";
const RESUME_URL = "/Saurabh_Anand_Resume.pdf";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

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
        areaServed: "Worldwide",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const },
} as const;

const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.1 },
} as const;

const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.2 },
} as const;

const smoothContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const smoothItem = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: { name?: string; email?: string; message?: string } =
        {};
      result.error.errors.forEach((err) => {
        const key = err.path[0] as keyof typeof fieldErrors;
        if (!fieldErrors[key]) {
          fieldErrors[key] = err.message;
        }
      });
      setErrors(fieldErrors);
      toast.error("Please fix the highlighted fields before sending.");
      return;
    }

    setErrors({});
    setSending(true);

    const { name, email, message } = result.data;
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
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          viewport={fadeInUp.viewport}
          transition={fadeInUp.transition}
        >
          <p className="section-label mb-2">Get in touch</p>

          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Let&apos;s work{" "}
            <span className="italic text-muted-foreground font-light">
              together.
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mb-10">
            Available for Data Analyst roles, SEO & Digital Marketing
            consulting, and freelance projects. Download my resume or send a
            message below.
          </p>

          <motion.div
            className="flex flex-wrap gap-3 mb-12"
            variants={smoothContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a
              href={RESUME_URL}
              download="Saurabh_Anand_Resume.pdf"
              variants={smoothItem}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Download size={16} />
              Download Resume (PDF)
            </motion.a>

            <motion.a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              variants={smoothItem}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm font-medium hover:bg-secondary transition-colors"
            >
              <FileText size={16} />
              View Resume
            </motion.a>

            <motion.a
              href={`mailto:${EMAIL}?subject=Hire%20Inquiry`}
              variants={smoothItem}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm font-medium hover:bg-secondary transition-colors"
            >
              <Mail size={16} />
              Email Me
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
          <motion.div
            initial={fadeInLeft.initial}
            whileInView={fadeInLeft.whileInView}
            viewport={fadeInLeft.viewport}
            transition={fadeInLeft.transition}
            className="space-y-6"
          >
            <p className="text-muted-foreground">
              Ready to turn data into growth? Reach out for analytics
              dashboards, SEO audits, content strategy, or full-time
              opportunities.
            </p>

            <motion.div
              className="space-y-4"
              variants={smoothContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.a
                href={`mailto:${EMAIL}`}
                variants={smoothItem}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={18} className="text-primary shrink-0" />
                {EMAIL}
              </motion.a>

              <motion.div
                variants={smoothItem}
                className="flex items-center gap-3 text-sm text-muted-foreground"
              >
                <MapPin size={18} className="text-primary shrink-0" />
                New Delhi, India
              </motion.div>

              <motion.a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                variants={smoothItem}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={18} className="text-primary shrink-0" />
                linkedin.com/in/saurabhanandseo
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={fadeInRight.initial}
            whileInView={fadeInRight.whileInView}
            viewport={fadeInRight.viewport}
            transition={fadeInRight.transition}
            className="space-y-4"
          >
            <motion.div
              className="space-y-4"
              variants={smoothContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={smoothItem} className="space-y-1">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  minLength={2}
                  maxLength={100}
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                {errors.name && (
                  <p id="name-error" className="text-xs text-destructive">
                    {errors.name}
                  </p>
                )}
              </motion.div>

              <motion.div variants={smoothItem} className="space-y-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                {errors.email && (
                  <p id="email-error" className="text-xs text-destructive">
                    {errors.email}
                  </p>
                )}
              </motion.div>

              <motion.div variants={smoothItem} className="space-y-1">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  required
                  minLength={10}
                  maxLength={1000}
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-destructive">
                    {errors.message}
                  </p>
                )}
              </motion.div>

              <motion.div variants={smoothItem}>
                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {sending ? "Sending…" : "Send Message"}
                  <Send size={16} />
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
