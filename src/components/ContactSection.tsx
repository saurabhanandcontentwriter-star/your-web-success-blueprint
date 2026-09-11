import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { MapPin, Send, Linkedin, Mail, Download, FileText, Sparkles, ArrowUpRight, Clock3 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { logLead } from "@/lib/leadLog";
import "@/styles/contact-modern.css";

const EMAIL = "saurabhanandshahi@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/saurabhanandseo/";
const RESUME_URL = "/Saurabh_Anand_Resume.pdf";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Saurabh Anand",
  description: "Get in touch with Saurabh Anand — Data Analyst and SEO & Digital Marketing Professional — for consulting, collaborations, or full-time roles.",
  url: "https://saurabhanandseo.com/#contact",
  mainEntity: {
    "@type": "Person",
    name: "Saurabh Anand",
    email: `mailto:${EMAIL}`,
    url: "https://saurabhanandseo.com/",
    sameAs: [LINKEDIN],
    address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" },
    contactPoint: [{ "@type": "ContactPoint", contactType: "Consulting & Hiring Inquiries", email: EMAIL, areaServed: "Worldwide", availableLanguage: ["English", "Hindi"] }],
  },
};

const fadeIn = { initial: { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.65, ease: "easeOut" as const } } as const;
const item = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } } };

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [sending, setSending] = useState(false);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const mountedAtRef = useRef<number>(Date.now());

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: { name?: string; email?: string; message?: string } = {};
      result.error.errors.forEach((err) => {
        const key = err.path[0] as keyof typeof fieldErrors;
        if (!fieldErrors[key]) fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      toast.error("Please fix the highlighted fields before sending.");
      return;
    }
    setErrors({});
    setSending(true);
    const { name, email, message } = result.data;
    const logged = await logLead({ event: "contact_form", name, email, message, hp: honeypotRef.current?.value ?? "", elapsed: Date.now() - mountedAtRef.current });
    if (!logged.ok) {
      toast.error(logged.error ?? "Could not send your message. Please try again.");
      setSending(false);
      return;
    }
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Message received — opening your email client…");
      setForm({ name: "", email: "", message: "" });
      mountedAtRef.current = Date.now();
      setSending(false);
    }, 400);
  };

  return (
    <section id="contact" className="contact-page-modern py-24 md:py-32">
      <Helmet><script type="application/ld+json">{JSON.stringify(contactJsonLd)}</script></Helmet>
      <div className="contact-orb contact-orb-one" aria-hidden="true" />
      <div className="contact-orb contact-orb-two" aria-hidden="true" />
      <div className="contact-orb contact-orb-three" aria-hidden="true" />
      <div className="container contact-shell mx-auto px-5 md:px-6">
        <motion.div {...fadeIn} className="mb-12 md:mb-16">
          <div className="contact-eyebrow mb-5"><Sparkles size={14} /> Let&apos;s build something that grows</div>
          <h2 className="contact-title max-w-4xl text-5xl sm:text-6xl md:text-7xl xl:text-[5.8rem] font-display font-bold leading-[.96] tracking-[-0.045em]">Turn ideas into <span>digital growth.</span></h2>
          <p className="contact-subtitle mt-6">Available for Data Analyst roles, SEO & Digital Marketing consulting, AI automation, and freelance projects. Tell me what you&apos;re building and let&apos;s map the next move.</p>
        </motion.div>

        <div className="grid lg:grid-cols-[.82fr_1.18fr] gap-6 lg:gap-8 max-w-6xl">
          <motion.div {...fadeIn} transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }} className="contact-info-card">
            <div className="relative z-10 space-y-7">
              <div>
                <div className="contact-status mb-4">Open for new opportunities</div>
                <h3 className="contact-info-heading text-2xl">Let&apos;s connect.</h3>
                <p className="contact-info-copy mt-3">Ready to turn search, data and intelligent automation into measurable growth? Reach out for a project, collaboration, hiring discussion, or analytics/SEO consultation.</p>
              </div>

              <motion.div className="space-y-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
                <motion.a variants={item} href={`mailto:${EMAIL}`} className="contact-detail">
                  <span className="contact-detail-icon"><Mail size={18} /></span><span className="contact-detail-text">{EMAIL}</span><ArrowUpRight size={15} className="ml-auto text-muted-foreground" />
                </motion.a>
                <motion.div variants={item} className="contact-detail">
                  <span className="contact-detail-icon"><MapPin size={18} /></span><span className="contact-detail-text">New Delhi, India</span>
                </motion.div>
                <motion.a variants={item} href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="contact-detail">
                  <span className="contact-detail-icon"><Linkedin size={18} /></span><span className="contact-detail-text">linkedin.com/in/saurabhanandseo</span><ArrowUpRight size={15} className="ml-auto text-muted-foreground" />
                </motion.a>
                <motion.div variants={item} className="contact-detail">
                  <span className="contact-detail-icon"><Clock3 size={18} /></span><span className="contact-detail-text">Consulting & hiring inquiries · Worldwide</span>
                </motion.div>
              </motion.div>

              <div className="contact-action-row">
                <a href={RESUME_URL} download="Saurabh_Anand_Resume.pdf" onClick={() => logLead({ event: "resume_download" })} className="contact-action"><Download size={15} /> Resume</a>
                <a href={`mailto:${EMAIL}?subject=Hire%20Inquiry`} onClick={() => logLead({ event: "hire_click" })} className="contact-action"><Mail size={15} /> Email Me</a>
              </div>
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} {...fadeIn} transition={{ duration: 0.65, delay: 0.18, ease: "easeOut" }} className="contact-form-card">
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div><p className="contact-form-title">Start a conversation</p><p className="text-xs text-muted-foreground mt-1">I&apos;ll get back to you with the next step.</p></div>
                <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-[10px] uppercase tracking-[.14em] text-primary">Secure form</span>
              </div>
              <input ref={honeypotRef} type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 opacity-0" />
              <motion.div className="space-y-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.07 } } }}>
                <motion.div variants={item} className="space-y-1"><input type="text" name="name" placeholder="Your name" required minLength={2} maxLength={100} value={form.name} onChange={handleChange} aria-invalid={errors.name ? "true" : "false"} aria-describedby={errors.name ? "name-error" : undefined} className="w-full text-sm placeholder:text-muted-foreground focus:outline-none" />{errors.name && <p id="name-error" className="text-xs text-destructive">{errors.name}</p>}</motion.div>
                <motion.div variants={item} className="space-y-1"><input type="email" name="email" placeholder="Work email" required maxLength={255} value={form.email} onChange={handleChange} aria-invalid={errors.email ? "true" : "false"} aria-describedby={errors.email ? "email-error" : undefined} className="w-full text-sm placeholder:text-muted-foreground focus:outline-none" />{errors.email && <p id="email-error" className="text-xs text-destructive">{errors.email}</p>}</motion.div>
                <motion.div variants={item} className="space-y-1"><textarea name="message" placeholder="Tell me about your project, role, or goal…" rows={6} required minLength={10} maxLength={1000} value={form.message} onChange={handleChange} aria-invalid={errors.message ? "true" : "false"} aria-describedby={errors.message ? "message-error" : undefined} className="w-full text-sm placeholder:text-muted-foreground focus:outline-none resize-none" />{errors.message && <p id="message-error" className="text-xs text-destructive">{errors.message}</p>}</motion.div>
                <motion.div variants={item}>
                  <motion.button type="submit" disabled={sending} whileHover={{ scale: 1.01, y: -2 }} whileTap={{ scale: .98 }} className="contact-action contact-submit py-3.5 text-primary-foreground disabled:opacity-60">{sending ? "Sending…" : "Send Message"}<Send size={16} /></motion.button>
                </motion.div>
              </motion.div>
              <div className="flex items-center justify-between gap-4 mt-5"><span className="text-[10px] text-muted-foreground">By submitting, you agree to be contacted about your inquiry.</span><FileText size={14} className="text-muted-foreground shrink-0" /></div>
            </div>
          </motion.form>
        </div>
        <p className="contact-bottom-note mt-10">SEO · AI Automation · Data Analytics · Vibe Coding</p>
      </div>
    </section>
  );
};

export default ContactSection;
