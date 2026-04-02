import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import heroImg from "@/assets/hero-portrait.png";
import seoImg from "@/assets/saurabh-seo.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-6"
      >
        <div className="flex flex-wrap gap-3">
          <a href="https://www.linkedin.com/in/saurabh-anand-seo/" target="_blank" rel="noopener noreferrer" className="badge-glass hover:border-primary/40 transition-colors">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-4 h-4" />
            LinkedIn Top Voice
          </a>
          <span className="badge-glass">
            <img src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" alt="Google" className="w-4 h-4" />
            Google Certified
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1]">
          Saurabh{" "}
          <span className="italic text-muted-foreground font-light">Anand</span>
        </h1>

        <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
          Results-driven SEO Analyst and Digital Marketing Professional with 2+ years of experience in search engine optimization, content strategy, and organic growth.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <button
            onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
          >
            View Experience <ArrowRight size={16} />
          </button>
          <a
            href="/Saurabh_Anand_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
          >
            Download CV <Download size={16} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative flex justify-center"
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-border/40">
          <img src={heroImg} alt="Saurabh Anand" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card px-4 py-3 flex items-center gap-3">
          <img src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" alt="Google" className="w-8 h-8" />
          <div>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Expertise in</p>
            <p className="text-sm font-display font-semibold">Google SEO</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
