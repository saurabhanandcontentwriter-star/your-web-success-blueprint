import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = ["About", "Experience", "Skills", "Now", "Portfolio", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-t-0 rounded-none border-x-0"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
          <img src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" alt="logo" className="w-6 h-6" />
          <span className="text-lg font-display font-bold tracking-tight text-foreground">SAURABH<span className="text-primary">.</span></span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l}
            </button>
          ))}
          <button onClick={() => scrollTo("contact")} className="px-5 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity">
            Hire Me
          </button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:hidden glass-card mx-4 mb-4 rounded-xl p-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="text-sm text-muted-foreground hover:text-foreground py-2">
              {l}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
