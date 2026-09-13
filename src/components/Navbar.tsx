import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpeg";
import ContactDialog from "@/components/ContactDialog";
import FestivalCelebration from "@/components/FestivalCelebration";
import ThemeToggle from "@/components/ThemeToggle";
import { logLead } from "@/lib/leadLog";
import "@/styles/navbar-responsive.css";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/portfolio" },
  { label: "Skills", path: "/skills" },
  { label: "Experience", path: "/experience" },
  { label: "Gallery", path: "/gallery" },
  { label: "Education", path: "/education" },
  { label: "Now", path: "/now" },
  { label: "DevFest", path: "/devfest-ranchi" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (link: { label: string; path: string }) => {
    setOpen(false);
    if (link.path === "/") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (location.pathname === "/") {
      const el = document.getElementById(link.label.toLowerCase());
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    navigate(link.path);
  };

  return (
    <motion.nav initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="site-navbar fixed top-0 left-0 right-0 z-50 glass-card border-t-0 rounded-none border-x-0">
      <div className="site-navbar-inner container mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => { setOpen(false); navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="site-navbar-brand" aria-label="Go to Saurabh Anand home">
          <FestivalCelebration fallback={<img src={logo} alt="Saurabh Anand logo" className="site-navbar-logo" />} />
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button key={l.label} onClick={() => handleNav(l)} className={`text-sm transition-colors ${location.pathname === l.path ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              {l.label === "DevFest" ? "🎉 DevFest" : l.label}
            </button>
          ))}
          <ContactDialog trigger={<button className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</button>} />
          <ThemeToggle />
          <a onClick={() => logLead({ event: "hire_click" })} href="mailto:saurabhanandshahi@gmail.com?subject=Hire%20Inquiry" className="px-5 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity">Hire Me</a>
        </div>

        <div className="site-navbar-mobile md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} className="text-foreground p-2" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="site-navbar-menu md:hidden glass-card mx-4 mb-4 rounded-xl p-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <button key={l.label} onClick={() => handleNav(l)} className={`text-sm py-2 text-left transition-colors ${location.pathname === l.path ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              {l.label === "DevFest" ? "🎉 DevFest Ranchi" : l.label}
            </button>
          ))}
          <ContactDialog trigger={<button className="text-sm text-muted-foreground hover:text-foreground py-2 text-left">Contact</button>} />
          <a onClick={() => logLead({ event: "hire_click" })} href="mailto:saurabhanandshahi@gmail.com?subject=Hire%20Inquiry" className="text-sm font-medium py-2 text-left">Hire Me</a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
