import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Experience", path: "/experience" },
  { label: "Skills", path: "/skills" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Gallery", path: "/gallery" },
  { label: "Education", path: "/education" },
  { label: "Now", path: "/now" },
  { label: "Contact", path: "/contact" },
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
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-t-0 rounded-none border-x-0"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => { navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-2">
          <img src={logo} alt="Saurabh Anand logo" className="h-8" />
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button key={l.label} onClick={() => handleNav(l)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </button>
          ))}
          <a href="/Saurabh_Anand_Resume.pdf" download className="px-5 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity">
            Hire Me
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:hidden glass-card mx-4 mb-4 rounded-xl p-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <button key={l.label} onClick={() => handleNav(l)} className="text-sm text-muted-foreground hover:text-foreground py-2">
              {l.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
