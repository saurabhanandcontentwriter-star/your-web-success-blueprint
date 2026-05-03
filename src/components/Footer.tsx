import { Link } from "react-router-dom";

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
];

const Footer = () => (
  <footer className="border-t border-border/40 py-12 mt-20">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-display font-semibold text-sm mb-3">Saurabh Anand</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            SEO Analyst & Digital Marketing Professional based in New Delhi, India.
          </p>
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
          <h3 className="font-display font-semibold text-sm mb-3">My Websites</h3>
          <ul className="space-y-2">
            <li><a href="https://crazyseoteam.in" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">crazyseoteam.in</a></li>
            <li><a href="https://www.papajupiter.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">papajupiter.com</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display font-semibold text-sm mb-3">Connect</h3>
          <ul className="space-y-2">
            <li><a href="https://www.linkedin.com/in/saurabhanandseo/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a></li>
            <li><a href="https://x.com/saurabhanandseo" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Twitter / X</a></li>
            <li><a href="https://instagram.com/saurabhanandseo" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Instagram</a></li>
            <li><a href="https://github.com/saurabhanandseo" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40 pt-6 text-center">
        <p className="text-xs text-muted-foreground">© 2025 Saurabh Anand. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
