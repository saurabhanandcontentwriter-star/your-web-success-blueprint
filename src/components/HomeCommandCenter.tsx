import { ArrowUpRight, Bot, BarChart3, Code2, Database, Gauge, Search, Sparkles, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import "@/styles/home-command-center.css";

const systems = [
  { id:"01", title:"SEARCH", label:"SEO + GEO", text:"Technical SEO, content systems and AI-search visibility built around real search intent.", icon:Search },
  { id:"02", title:"DATA", label:"ANALYTICS", text:"SQL, Python, Power BI and GA4 workflows that turn scattered data into useful decisions.", icon:BarChart3 },
  { id:"03", title:"BUILD", label:"WEB + AI", text:"Fast web experiences, automation and AI agents that turn strategy into something people can use.", icon:Code2 },
];
const builds = [
  { tag:"AI + AUTOMATION", title:"CampusSphere AI", text:"Academic administration reimagined through unified digital services, automation, analytics and responsible AI.", href:"https://campus-ai-psi-eosin.vercel.app/", image:"/og-thumbnail.jpg", icon:Bot },
  { tag:"COMMUNITY + AI", title:"Google DevFest Ranchi 2026", text:"A Community 2.0 event experience connecting developers with AI, Gemini, Cloud and the Google ecosystem.", href:"/devfest-ranchi", image:"https://image.thum.io/get/width/900/crop/500/noanimate/https://saurabhanandseo.com/devfest-ranchi", icon:Sparkles },
  { tag:"AI + VOICE", title:"Sneha — AI Calling Agent", text:"A voice-first conversational system designed to understand requirements, explain services and collect leads.", href:"https://www.crazyseoteam.in/", image:"https://image.thum.io/get/width/900/crop/500/noanimate/https://www.crazyseoteam.in/", icon:Workflow },
];

const HomeCommandCenter = () => (
  <main className="sa-command-home">
    <div className="sa-command-noise" aria-hidden="true" />
    <section className="sa-command-intro">
      <div className="sa-command-intro-copy">
        <div className="sa-command-kicker"><span className="sa-command-pulse" /> SAURABH ANAND / DIGITAL GROWTH CONTROL ROOM</div>
        <h2>Not a résumé.<br /><span>A working system.</span></h2>
        <p>I connect <b>search, data, AI and web development</b> into practical digital systems — then turn the output into growth people can actually measure.</p>
        <div className="sa-command-actions">
          <Link to="/portfolio" className="sa-command-main-btn">Explore the system <ArrowUpRight size={17}/></Link>
          <Link to="/experience" className="sa-command-ghost-btn">See experience</Link>
        </div>
      </div>
      <div className="sa-command-core" aria-label="Digital growth loop">
        <div className="sa-core-ring sa-core-ring-a" /><div className="sa-core-ring sa-core-ring-b" />
        <div className="sa-core-center"><span>GROWTH</span><strong>LOOP</strong><small>SEARCH → DATA → BUILD</small></div>
        <div className="sa-core-node sa-node-top"><Search size={15}/> Search</div>
        <div className="sa-core-node sa-node-right"><Database size={15}/> Data</div>
        <div className="sa-core-node sa-node-bottom"><Gauge size={15}/> Measure</div>
        <div className="sa-core-node sa-node-left"><Bot size={15}/> AI</div>
      </div>
    </section>

    <section className="sa-system-grid" aria-label="Core systems">
      {systems.map(({id,title,label,text,icon:Icon}) => (
        <article className="sa-system-card" key={id}>
          <div className="sa-system-top"><span>{id}</span><Icon size={18}/></div>
          <div className="sa-system-title">{title}</div><div className="sa-system-label">{label}</div>
          <p>{text}</p><div className="sa-system-meter"><span/></div>
        </article>
      ))}
    </section>

    <section className="sa-workbench">
      <div className="sa-workbench-head">
        <div><span className="sa-section-index">03 / PROOF OF WORK</span><h3>Things I have actually built.</h3></div>
        <Link to="/portfolio">View all projects <ArrowUpRight size={16}/></Link>
      </div>
      <div className="sa-build-grid">
        {builds.map(({tag,title,text,href,image,icon:Icon},index) => (
          <a className="sa-build-card" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} key={title}>
            <div className="sa-build-number">0{index+1}</div>
            <div className="sa-build-image-wrap"><img className="sa-build-image" src={image} alt="" loading="lazy" /></div>
            <div className="sa-build-icon"><Icon size={20}/></div>
            <span>{tag}</span><h4>{title}</h4><p>{text}</p><div className="sa-build-link">Open build <ArrowUpRight size={15}/></div>
          </a>
        ))}
      </div>
    </section>

    <section className="sa-operating-model">
      <div className="sa-model-label">HOW I THINK</div>
      <div className="sa-model-track"><span>01 DISCOVER</span><i/><span>02 ANALYZE</span><i/><span>03 STRATEGIZE</span><i/><span>04 BUILD</span><i/><span>05 AUTOMATE</span><i/><span>06 MEASURE</span></div>
      <p>Every project starts with a problem, not a tool. The stack changes; the operating model stays.</p>
    </section>

    <section className="sa-recruiter-panel">
      <div><span>FAST TRACK</span><h3>Need the useful version in 60 seconds?</h3><p>Jump straight to the page that matters — work, skills, education or a direct conversation.</p></div>
      <div className="sa-recruiter-links">
        <Link to="/portfolio">Projects <ArrowUpRight size={15}/></Link><Link to="/skills">Skills <ArrowUpRight size={15}/></Link>
        <Link to="/education">Education <ArrowUpRight size={15}/></Link><a href="mailto:saurabhanandshahi@gmail.com?subject=Let's%20work%20together">Contact <ArrowUpRight size={15}/></a>
      </div>
    </section>
  </main>
);
export default HomeCommandCenter;
