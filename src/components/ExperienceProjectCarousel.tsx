import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import aboutPhoto from "@/assets/about-photo.jpg";

const items = [
  { key:"experience", label:"Experience", target:"#experience", image:"/portfolio/tripzygo-seo.svg", eyebrow:"PROFESSIONAL EXPERIENCE", title:"SEO & Digital Marketing", text:"Hands-on experience across technical SEO, content strategy, AI SEO, analytics, digital marketing and growth workflows.", points:["Technical & On-Page SEO","Content & Keyword Strategy","SEO Audits & Core Web Vitals","AI SEO / GEO & Automation"], meta:"SEO · Digital Marketing · AI" },
  { key:"projects", label:"Projects", target:"#featured-work", image:"/portfolio/crazy-seo-team-ideas.svg", eyebrow:"SELECTED PROJECTS", title:"Real Projects, Practical Execution", text:"A portfolio of digital projects combining SEO, analytics, AI, web development and growth strategy.", points:["CampusSphere AI","Crazy SEO Team Ideas","E-commerce SEO Overhaul","Analytics & Dashboard Work"], meta:"Projects · Case Studies · Execution" },
  { key:"education", label:"Education", target:"#education", image:aboutPhoto, eyebrow:"EDUCATION", title:"BCA / Degree Voc", text:"Academic foundation in computer applications, technology and practical digital skills.", points:["Allama Iqbal College, Bihar Sharif","BCA / Degree Voc","Session 2023–2026","Practical technology & project work"], meta:"Education · Technology · Projects" },
  { key:"skills", label:"Skills", target:"#skills", image:"/portfolio/local-seo-gbp.svg", eyebrow:"SKILLS & TOOLKIT", title:"Modern Digital & Data Stack", text:"A cross-functional skill set connecting SEO, data analytics, AI and digital product execution.", points:["SEO · Technical SEO · GEO","SQL · Python · Excel","Power BI · Tableau · GA4","AI · Automation · Web Development"], meta:"SEO · Data · AI · Web" },
];

const ExperienceProjectCarousel = () => {
  const [active,setActive]=useState(0);
  const next=()=>setActive(v=>(v+1)%items.length);
  const prev=()=>setActive(v=>(v-1+items.length)%items.length);

  useEffect(() => {
    const timer = window.setInterval(next, 4500);
    return () => window.clearInterval(timer);
  }, []);

  const item=items[active];

  return (
    <section id="experience-projects" className="ep-carousel relative overflow-hidden py-20 md:py-28">
      <div className="ep-grid absolute inset-0 pointer-events-none"/>
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="section-label mb-3">Experience · Projects · Education · Skills</p>
          <h2 className="text-4xl font-display font-bold md:text-6xl">What I <span className="gradient-text">bring</span> to the table.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">Explore my professional experience, selected projects, academic background and core skills in one interactive portfolio view.</p>
        </div>

        <div className="ep-tabs mx-auto mb-10 flex max-w-4xl justify-center gap-2 overflow-x-auto p-2">
          {items.map((x,i)=><a key={x.key} href={x.target} onClick={()=>setActive(i)} className={`ep-tab ${active===i?"ep-tab-active":""}`}>{x.label}</a>)}
        </div>

        <div className="mx-auto max-w-6xl">
          <motion.div key={item.key} initial={{opacity:0,x:45,rotateY:-10}} animate={{opacity:1,x:0,rotateY:0}} transition={{duration:.45}} className="ep-card">
            <div className="ep-stage">
              <div className="ep-image-wrap">
                <img src={item.image} alt={item.label} className="ep-image" />
                <div className="ep-image-overlay" />
              </div>
              <div className="ep-floating ep-floating-top">{item.label.toUpperCase()}</div>
              <div className="ep-floating ep-floating-bottom">{item.meta}</div>
              <div className="ep-number">0{active+1}</div>
            </div>
            <div className="ep-copy">
              <p className="text-xs font-semibold uppercase tracking-[.18em] text-primary mb-5">{item.eyebrow}</p>
              <h3 className="text-3xl font-display font-bold md:text-4xl">{item.title}</h3>
              <p className="mt-4 leading-7 text-muted-foreground">{item.text}</p>
              <div className="mt-7 grid grid-cols-2 gap-3">{item.points.map(p=><div key={p} className="ep-chip">{p}</div>)}</div>
              <a href={item.target} className="mt-7 inline-flex text-sm font-semibold text-primary hover:underline">Explore {item.label} →</a>
            </div>
          </motion.div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button onClick={prev} className="ep-arrow" aria-label="Previous section"><ChevronLeft/></button>
            <div className="flex gap-2">{items.map((x,i)=><button key={x.key} onClick={()=>setActive(i)} className={`ep-dot ${active===i?"ep-dot-active":""}`} aria-label={x.label}/>)}</div>
            <button onClick={next} className="ep-arrow" aria-label="Next section"><ChevronRight/></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceProjectCarousel;
