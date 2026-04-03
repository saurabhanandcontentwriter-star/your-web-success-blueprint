import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Github, Mail } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/saurabh-anand-seo/", label: "LinkedIn", color: "hover:bg-[#0A66C2]" },
  { icon: Twitter, href: "https://twitter.com/", label: "Twitter / X", color: "hover:bg-[#1DA1F2]" },
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram", color: "hover:bg-[#E4405F]" },
  { icon: Github, href: "https://github.com/", label: "GitHub", color: "hover:bg-[#333]" },
  { icon: Mail, href: "mailto:saurabhanand@example.com", label: "Email", color: "hover:bg-primary" },
];

const SocialSidebar = () => (
  <motion.div
    initial={{ x: -60, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 1, duration: 0.5 }}
    className="fixed left-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3 hidden md:flex"
  >
    {socials.map(({ icon: Icon, href, label, color }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`group flex items-center justify-center w-10 h-10 rounded-full glass-card border border-border/40 text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300 ${color} hover:border-transparent hover:shadow-lg`}
      >
        <Icon size={18} />
      </a>
    ))}
    <div className="w-px h-16 bg-border/40 mx-auto mt-2" />
  </motion.div>
);

export default SocialSidebar;
