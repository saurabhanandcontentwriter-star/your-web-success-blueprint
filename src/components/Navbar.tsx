import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import ContactDialog from "@/components/ContactDialog";
import ThemeToggle from "@/components/ThemeToggle";
import { logLead } from "@/lib/leadLog";
import { Button } from "@/components/ui/button";
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
    <motion.nav initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="site-navbar fixed left-0 right-0 z-50">
      <div className="site-navbar-inner container mx-auto flex items-center justify-between px-6 py-4">
        <Button variant="ghost" onClick={() => { setOpen(false); navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="site-navbar-brand" aria-label="Go to Saurabh Anand home">
          <span className="site-navbar-brand-content">
            <img src={logo} alt="Saurabh Anand logo" className="site-navbar-logo" />
          </span>
        </Button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Button variant="ghost" key={l.label} onClick={() => handleNav(l)} className={`site-navbar-link ${location.pathname === l.path ? "site-navbar-link-active" : ""}`}>
              {l.label === "DevFest" ? "🎉 DevFest" : l.label}
            </Button>
          ))}
          <ContactDialog trigger={<Button variant="ghost" className="site-navbar-link">Contact</Button>} />
          <ThemeToggle />
          <Button asChild className="site-navbar-hire"><a onClick={() => logLead({ event: "hire_click" })} href="mailto:saurabhanandshahi@gmail.com?subject=Hire%20Inquiry">Hire Me <ArrowRight size={16} /></a></Button>
        </div>

        <div className="site-navbar-mobile md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="site-navbar-menu md:hidden flex flex-col gap-2">
          {navLinks.map((l) => (
            <Button variant="ghost" key={l.label} onClick={() => handleNav(l)} className={`justify-start ${location.pathname === l.path ? "bg-primary/15 text-foreground" : "text-muted-foreground"}`}>
              {l.label === "DevFest" ? "🎉 DevFest Ranchi" : l.label}
            </Button>
          ))}
          <ContactDialog trigger={<Button variant="ghost" className="w-full justify-start text-muted-foreground">Contact</Button>} />
          <a onClick={() => logLead({ event: "hire_click" })} href="mailto:saurabhanandshahi@gmail.com?subject=Hire%20Inquiry" className="text-sm font-medium py-2 text-left">Hire Me</a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
