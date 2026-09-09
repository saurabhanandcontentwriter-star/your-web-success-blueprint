import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Calendar, ChevronDown, Clock, MapPin, Mic, Sparkles, Users, ExternalLink, Globe, Play, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const REGISTRATION_URL = "https://gdg.community.dev/gdg-ranchi/";
const EVENT_START = new Date("2026-10-31T09:00:00+05:30").getTime();

const topics = [
  { icon: "🤖", title: "AI & Gemini", text: "Explore practical AI, Gemini and agentic workflows for the next generation of products." },
  { icon: "☁️", title: "Cloud & Firebase", text: "Learn modern cloud, backend and Firebase patterns from the developer ecosystem." },
  { icon: "💻", title: "Web & App Development", text: "Discover tools, frameworks and real-world techniques for building better applications." },
  { icon: "🌐", title: "Community & Networking", text: "Meet developers, students, founders, creators and technology leaders from the region." },
];

const speakers = [
  { name: "Saurabh Anand", role: "Marketing with AI Automation", tag: "Speaker", initials: "SA" },
  { name: "GDG Community", role: "Google Developer Community", tag: "Community", initials: "GDG" },
  { name: "More Speakers", role: "Coming Soon", tag: "TBA", initials: "+" },
];

const schedule = [
  ["09:00 AM", "Registration & Community Networking", "Check-in, connect with attendees and get ready for the day."],
  ["10:00 AM", "Opening Keynote", "Welcome to DevFest Ranchi 2026 and Community 2.0."],
  ["11:00 AM", "Google Technologies & AI", "Talks and demos covering AI, Gemini and the modern developer stack."],
  ["01:00 PM", "Lunch & Networking", "Meet fellow builders and community members."],
  ["02:00 PM", "Workshops & Expert Sessions", "Practical learning with speakers and community leaders."],
  ["05:00 PM", "Community Celebration", "Wrap-up, connections, music, dance and a memorable community experience."],
];

const faqs = [
  ["What is DevFest Ranchi 2026?", "DevFest Ranchi 2026 is a community-led developer event bringing together developers, students, designers, founders and technology enthusiasts."],
  ["When and where is the event?", "The event is scheduled for 31st October 2026 at BIT Mesra Auditorium, Ranchi."],
  ["What will I learn?", "Sessions will focus on Google technologies, AI & Gemini, Cloud, Firebase, Web, app development and developer-community topics."],
  ["Who can attend?", "Developers, students, designers, founders, marketers, creators and anyone interested in technology and innovation can attend."],
];

const partners = ["Google", "GDG Ranchi", "BIT Mesra", "Cyber Space", "Community Partners"];

const DevFestRanchiPage = () => {
  const [now, setNow] = useState(Date.now());
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const countdown = useMemo(() => {
    const diff = Math.max(0, EVENT_START - now);
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff / 3600000) % 24),
      minutes: Math.floor((diff / 60000) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }, [now]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <SEO title="Google DevFest Ranchi 2026 | Community 2.0" description="Google DevFest Ranchi 2026 — Community 2.0. Join developers, students, founders and technology enthusiasts on 31st October 2026 at BIT Mesra Auditorium, Ranchi." path="/devfest-ranchi" keywords="Google DevFest Ranchi 2026, GDG Ranchi, DevFest Ranchi, BIT Mesra, Community 2.0, AI Gemini, Google Developer Groups" image="/og-thumbnail.jpg" />

      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background via-background to-primary/5" />
      <div className="fixed -z-10 top-20 left-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="fixed -z-10 top-80 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <Navbar />

      <main className="pt-24">
        <section className="relative container mx-auto px-6 pt-10 pb-20 md:pt-20 md:pb-28">
          <div className="mx-auto max-w-6xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary"><Sparkles size={14} /> Community 2.0 • GDG Ranchi</div>
            <h1 className="mt-7 text-5xl font-display font-bold leading-tight md:text-8xl">Google <span className="gradient-text">DevFest Ranchi 2026</span></h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-muted-foreground md:text-xl">One community. New ideas. Real technology. A premium community experience for developers, students, creators, founders and technology enthusiasts.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm"><span className="badge-glass"><Calendar size={15} className="text-primary" /> 31st October 2026</span><span className="badge-glass"><MapPin size={15} className="text-accent" /> BIT Mesra Auditorium, Ranchi</span><span className="badge-glass"><Clock size={15} className="text-primary" /> 9:00 AM IST</span></div>
            <div className="mt-9 flex flex-wrap justify-center gap-3"><a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-sm font-bold text-primary-foreground shadow-xl hover:scale-[1.02] transition-transform">Register Now <ArrowRight size={17} /></a><a href="#speakers" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-8 py-4 text-sm font-bold hover:bg-secondary"><Users size={17} /> Meet Speakers</a></div>

            <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">{(["days","hours","minutes","seconds"] as const).map((unit) => <div key={unit} className="glass-card border-primary/20 p-5 text-center"><div className="text-4xl font-bold tabular-nums gradient-text md:text-5xl">{String(countdown[unit]).padStart(2,"0")}</div><div className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{unit}</div></div>)}</div>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-20 md:pb-28"><div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3"><div className="glass-card p-7"><div className="text-3xl">🚀</div><h3 className="mt-4 text-xl font-bold">Community 2.0</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">The next chapter of the developer community in Ranchi and Jharkhand.</p></div><div className="glass-card p-7"><div className="text-3xl">⚡</div><h3 className="mt-4 text-xl font-bold">AI-First Future</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Practical ideas around AI, Gemini, automation and modern development.</p></div><div className="glass-card p-7"><div className="text-3xl">🤝</div><h3 className="mt-4 text-xl font-bold">Real Connections</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Meet builders and community leaders and turn conversations into collaboration.</p></div></div></section>

        <section className="container mx-auto px-6 pb-20 md:pb-28"><div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.15fr_.85fr]"><div className="glass-card p-7 md:p-10"><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">About the event</p><h2 className="mt-3 text-3xl font-display font-bold md:text-4xl">Welcome to Community 2.0</h2><p className="mt-5 leading-7 text-muted-foreground">DevFest Ranchi 2026 brings the Google developer ecosystem closer to the local tech community. Expect expert talks, practical sessions, live demos, workshops and conversations around the technologies shaping the future.</p><p className="mt-4 leading-7 text-muted-foreground">Whether you are writing your first application, building a startup or exploring AI and automation, this is a place to learn, share and build meaningful connections.</p></div><div className="glass-card p-7 md:p-10"><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">At a glance</p><div className="mt-6 space-y-5"><div className="flex gap-4"><Calendar className="mt-1 text-primary" /><div><b>31 October 2026</b><p className="text-sm text-muted-foreground">Saturday • Full-day community event</p></div></div><div className="flex gap-4"><MapPin className="mt-1 text-accent" /><div><b>BIT Mesra Auditorium</b><p className="text-sm text-muted-foreground">Ranchi, Jharkhand</p></div></div><div className="flex gap-4"><Users className="mt-1 text-primary" /><div><b>Developer Community</b><p className="text-sm text-muted-foreground">Developers, students, founders and creators</p></div></div></div></div></div></section>

        <section className="container mx-auto px-6 pb-20 md:pb-28"><div className="mx-auto max-w-6xl"><div className="mb-9 text-center"><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">What to expect</p><h2 className="mt-3 text-3xl font-display font-bold md:text-4xl">Learn. Build. Connect.</h2></div><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{topics.map((topic) => <div key={topic.title} className="glass-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40"><div className="text-3xl">{topic.icon}</div><h3 className="mt-5 text-xl font-bold">{topic.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{topic.text}</p></div>)}</div></div></section>

        <section id="speakers" className="container mx-auto scroll-mt-24 px-6 pb-20 md:pb-28"><div className="mx-auto max-w-6xl"><div className="mb-9 text-center"><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Featured voices</p><h2 className="mt-3 text-3xl font-display font-bold md:text-4xl">Speakers & Community</h2><p className="mt-3 text-muted-foreground">Meet the people helping shape Community 2.0.</p></div><div className="grid gap-5 md:grid-cols-3">{speakers.map((speaker) => <div key={speaker.name} className="glass-card group p-7 text-center transition-all hover:-translate-y-1 hover:border-primary/40"><div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-primary/30 bg-gradient-to-br from-primary/20 to-accent/20 text-2xl font-black gradient-text">{speaker.initials}</div><span className="mt-5 inline-block rounded-full border border-border px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{speaker.tag}</span><h3 className="mt-4 text-xl font-bold">{speaker.name}</h3><p className="mt-2 text-sm text-muted-foreground">{speaker.role}</p></div>)}</div></div></section>

        <section id="schedule" className="container mx-auto scroll-mt-24 px-6 pb-20 md:pb-28"><div className="mx-auto max-w-5xl"><div className="mb-9 text-center"><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Event flow</p><h2 className="mt-3 text-3xl font-display font-bold md:text-4xl">Schedule</h2></div><div className="space-y-3">{schedule.map(([time,title,text]) => <div key={time} className="glass-card grid gap-3 p-5 md:grid-cols-[120px_1fr] md:items-center"><div className="font-bold text-primary">{time}</div><div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm text-muted-foreground">{text}</p></div></div>)}</div></div></section>

        <section className="container mx-auto px-6 pb-20 md:pb-28"><div className="mx-auto max-w-6xl"><div className="mb-9 text-center"><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Partners</p><h2 className="mt-3 text-3xl font-display font-bold md:text-4xl">Built by the Community</h2></div><div className="grid grid-cols-2 gap-3 md:grid-cols-5">{partners.map((partner) => <div key={partner} className="glass-card flex min-h-24 items-center justify-center p-5 text-center font-bold text-muted-foreground transition-colors hover:text-foreground hover:border-primary/30">{partner}</div>)}</div></div></section>

        <section className="container mx-auto px-6 pb-20 md:pb-28"><div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2"><div className="glass-card overflow-hidden"><div className="flex min-h-72 items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10"><MapPin size={46} className="text-primary" /></div><div className="p-7"><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Venue</p><h3 className="mt-2 text-2xl font-bold">BIT Mesra Auditorium</h3><p className="mt-2 text-sm text-muted-foreground">Ranchi, Jharkhand</p><a href="https://www.google.com/maps/search/?api=1&query=BIT+Mesra+Ranchi" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Open in Google Maps <ExternalLink size={15} /></a></div></div><div className="glass-card p-7 md:p-9"><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Community gallery</p><h3 className="mt-2 text-2xl font-bold">Moments from the community</h3><div className="mt-6 grid grid-cols-2 gap-3"><div className="aspect-video rounded-xl border border-primary/20 bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center"><Play size={24} /></div><div className="aspect-video rounded-xl border border-primary/20 bg-gradient-to-br from-accent/15 to-primary/10 flex items-center justify-center"><Sparkles size={24} /></div><div className="aspect-video rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-background flex items-center justify-center"><Users size={24} /></div><div className="aspect-video rounded-xl border border-primary/20 bg-gradient-to-br from-accent/10 to-background flex items-center justify-center"><Globe size={24} /></div></div></div></div></section>

        <section className="container mx-auto px-6 pb-20 md:pb-28"><div className="mx-auto max-w-6xl rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-accent/10 p-8 text-center md:p-14"><Mic className="mx-auto text-primary" size={32} /><h2 className="mt-4 text-3xl font-display font-bold md:text-4xl">Share your expertise</h2><p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Interested in speaking, mentoring or contributing to DevFest Ranchi? Connect with the community team and help make Community 2.0 stronger.</p><a href="mailto:saurabhanandseo@gmail.com?subject=DevFest%20Ranchi%202026%20-%20Speaker%20Application" className="mt-7 inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold hover:bg-primary/10">Become a Speaker <ArrowRight size={16} /></a></div></section>

        <section className="container mx-auto px-6 pb-20 md:pb-28"><div className="mx-auto max-w-3xl"><div className="mb-8 text-center"><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Questions</p><h2 className="mt-3 text-3xl font-display font-bold md:text-4xl">Frequently Asked Questions</h2></div><div className="space-y-3">{faqs.map(([question,answer],index) => <div key={question} className="glass-card overflow-hidden"><button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold"><span>{question}</span><ChevronDown size={18} className={`shrink-0 transition-transform ${openFaq === index ? "rotate-180" : ""}`} /></button>{openFaq === index && <div className="px-5 pb-5 text-sm leading-6 text-muted-foreground">{answer}</div>}</div>)}</div></div></section>

        <section className="container mx-auto px-6 pb-28"><div className="mx-auto max-w-5xl glass-card p-8 text-center md:p-14"><CheckCircle2 className="mx-auto text-primary" size={32} /><h2 className="mt-4 text-3xl font-display font-bold md:text-5xl">See you at DevFest Ranchi 2026.</h2><p className="mx-auto mt-4 max-w-2xl text-muted-foreground">31st October • BIT Mesra Auditorium • Community 2.0</p><a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-sm font-bold text-primary-foreground shadow-xl hover:opacity-90">Register Now <ArrowRight size={17} /></a></div></section>
      </main>

      <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-bold text-primary-foreground shadow-2xl ring-2 ring-background/80 hover:scale-105 transition-transform"><span className="hidden sm:inline">Register Now</span><ArrowRight size={17} /></a>
      <Footer />
    </div>
  );
};

export default DevFestRanchiPage;
