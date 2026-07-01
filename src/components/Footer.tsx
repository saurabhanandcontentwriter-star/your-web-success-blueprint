import { Link } from "react-router-dom";
import { Linkedin, Github, Mail, MessageCircle, Download, Briefcase, ShieldCheck } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const exploreLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Experience", path: "/experience" },
  { label: "Skills", path: "/skills" },
  { label: "Now", path: "/now" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Gallery", path: "/gallery" },
  { label: "Education", path: "/education" },
  { label: "Contact", path: "/contact" },
  { label: "Crawler Check", path: "/crawler-check" },
];

const Footer = () => (
  <footer className="border-t border-border/40 py-12 mt-20">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-display font-semibold text-sm mb-3">Saurabh Anand</h3>
          <p className="text-xs text-muted-foreground leading-relaxed mb-4">
            AI SEO Strategist • Vibe Coder • Automation Builder — based in New Delhi, India.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-medium hover:opacity-90">
            <Briefcase size={12} /> Hire Me
          </Link>
        </div>
        <div>
          <h3 className="font-display font-semibold text-sm mb-3">Explore</h3>
          <ul className="space-y-2">
            {exploreLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display font-semibold text-sm mb-3">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="/Saurabh_Anand_Resume.pdf" download target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <Download size={12} /> SEO Resume (PDF)
              </a>
            </li>
            <li>
              <a href="/Saurabh_Anand_Vibe_Coding_Resume.pdf" download target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <Download size={12} /> Vibe Coding Resume (PDF)
              </a>
            </li>
            <li>
              <Link to="/crawler-check" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <ShieldCheck size={12} /> Crawler Dashboard
              </Link>
            </li>
            <li><a href="https://crazyseoteam.in" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">crazyseoteam.in</a></li>
            <li><a href="https://www.papajupiter.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">papajupiter.com</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display font-semibold text-sm mb-3">Connect</h3>
          <ul className="space-y-2">
            <li><a href="https://www.linkedin.com/in/saurabhanandseo/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={12} /> LinkedIn</a></li>
            <li><a href="https://github.com/saurabhanandseo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"><Github size={12} /> GitHub</a></li>
            <li><a href="mailto:saurabhanandseo@gmail.com" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"><Mail size={12} /> Email</a></li>
            <li><a href="https://wa.me/917209742159" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"><MessageCircle size={12} /> WhatsApp</a></li>
            <li><a href="https://x.com/saurabhanandseo" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Twitter / X</a></li>
            <li><a href="https://instagram.com/saurabhanandseo" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
        <p className="text-xs text-muted-foreground">© 2026 Saurabh Anand. Technical SEO, GEO, AEO & AI Search Consultant. Operating on Indian Standard Time (IST, UTC+05:30). Available for SaaS, startup, enterprise, and international remote opportunities.</p>
        <button
          onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors underline-offset-2 hover:underline"
        >
          Cookie settings
        </button>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Theme</span>
          <ThemeToggle />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
