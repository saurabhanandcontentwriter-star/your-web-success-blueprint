import { motion } from "framer-motion";
import { BookOpen, Building2, GraduationCap, Lightbulb, Monitor, Sparkles } from "lucide-react";

const educationItems = [
  {
    period: "2023 – 2026",
    title: "BCA (3rd Year)",
    subtitle: "Degree Vocational Course",
    institution: "Allama Iqbal College, Bihar Sharif",
    status: "Pursuing",
    icon: GraduationCap,
    tone: "blue",
    description: "Currently in the 3rd year of BCA (Degree Voc), Session 2023–2026. Gaining strong knowledge in computer applications, programming, web development, database management and modern technologies.",
    tags: ["Computer Applications", "Programming", "Web Development", "Database", "IT Fundamentals"],
  },
  {
    period: "2021 – 2023",
    title: "Intermediate (12th)",
    subtitle: "Science Stream",
    institution: "Bihar School Examination Board (BSEB)",
    status: "Completed",
    icon: BookOpen,
    tone: "purple",
    description: "Completed Higher Secondary Education with Science stream. Built a strong foundation in analytical thinking, mathematics and problem-solving skills.",
    tags: ["Mathematics", "Physics", "Chemistry", "Analytical Thinking"],
  },
  {
    period: "2019 – 2021",
    title: "Matriculation (10th)",
    subtitle: "Secondary Education",
    institution: "Bihar School Examination Board (BSEB)",
    status: "Completed",
    icon: BookOpen,
    tone: "teal",
    description: "Completed secondary education and developed a strong academic base with interest in technology and computers.",
    tags: ["General Science", "Mathematics", "Social Science", "Basic Computer Knowledge"],
  },
];

const toneClasses = {
  blue: {
    icon: "bg-blue-500/10 text-blue-600",
    period: "bg-blue-600 text-white",
    dot: "bg-blue-500",
    status: "bg-emerald-500/10 text-emerald-600",
  },
  purple: {
    icon: "bg-violet-500/10 text-violet-600",
    period: "bg-violet-600 text-white",
    dot: "bg-violet-500",
    status: "bg-violet-500/10 text-violet-600",
  },
  teal: {
    icon: "bg-emerald-500/10 text-emerald-600",
    period: "bg-emerald-500 text-white",
    dot: "bg-emerald-500",
    status: "bg-emerald-500/10 text-emerald-600",
  },
};

const EducationSection = () => (
  <section id="education" className="relative overflow-hidden bg-[#f7fbff] py-10 md:py-16">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_45%,rgba(59,130,246,.12),transparent_28%),radial-gradient(circle_at_82%_55%,rgba(99,102,241,.10),transparent_32%)]" />
    <div className="absolute left-10 top-16 h-20 w-20 rounded-full border-[18px] border-blue-400/10" />
    <div className="absolute bottom-12 right-12 h-28 w-28 rounded-full border-[22px] border-indigo-400/10" />

    <div className="container relative mx-auto max-w-[1500px] px-4 sm:px-6">
      <div className="grid items-start gap-7 lg:grid-cols-[0.86fr_1.64fr]">

        {/* LEFT — keep the exact visual language of the supplied design */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative min-h-[760px] overflow-hidden rounded-[38px] bg-gradient-to-br from-[#eef8ff] via-white to-[#edf2ff] px-5 pt-7 shadow-[0_25px_70px_rgba(37,99,235,.10)] md:px-8"
        >
          <div className="absolute left-1/2 top-36 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-300/80 via-blue-500/80 to-indigo-500/75 blur-[1px]" />
          <div className="absolute left-1/2 top-44 h-[500px] w-[500px] -translate-x-1/2 rounded-full border-[18px] border-white/30" />
          <div className="absolute left-1/2 top-52 h-[455px] w-[455px] -translate-x-1/2 rounded-full border-2 border-blue-500/25 border-dashed" />

          <div className="absolute left-3 top-7 z-20 text-3xl font-medium italic leading-[.9] text-blue-600 md:left-8 md:text-5xl" style={{fontFamily:"cursive"}}>
            Saurabh<br /><span className="ml-8">Anand</span>
          </div>

          <div className="absolute left-7 top-44 z-20 max-w-[145px] -rotate-6 text-xl font-medium leading-[1.05] text-blue-600" style={{fontFamily:"cursive"}}>
            Learning<br />Today<br />Building<br />Tomorrow
          </div>

          <div className="absolute right-3 top-9 z-20 text-right text-xl font-medium leading-[1.05] text-blue-600" style={{fontFamily:"cursive"}}>
            Still<br />Learning.<br />Always<br />Growing
          </div>

          <div className="absolute left-6 top-[39%] z-30 rotate-[-7deg] rounded-2xl bg-white/95 px-5 py-4 shadow-[0_12px_30px_rgba(15,23,42,.12)]">
            <div className="flex items-center gap-3">
              <BookOpen className="text-blue-600" size={38} />
              <div className="text-sm font-black leading-tight text-slate-900">Knowledge<br />Today<br />Better Solutions<br />Tomorrow</div>
            </div>
          </div>

          <div className="absolute right-1 top-[30%] z-30 rotate-[7deg] rounded-2xl bg-white/95 px-4 py-4 shadow-[0_12px_30px_rgba(15,23,42,.12)]">
            <div className="flex items-center gap-3">
              <GraduationCap className="text-blue-600" size={38} />
              <div className="text-sm font-black leading-tight text-slate-900">Student<br />Learner<br />Builder</div>
            </div>
          </div>

          <div className="absolute bottom-12 left-5 z-30 rotate-[8deg] rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 px-5 py-4 text-white shadow-[0_15px_35px_rgba(37,99,235,.32)]">
            <div className="flex items-center gap-3">
              <GraduationCap size={38} />
              <div className="text-sm font-bold leading-tight">Education<br />Builds<br />Opportunities</div>
              <span className="text-3xl">↗</span>
            </div>
          </div>

          <div className="absolute bottom-28 right-12 z-20 text-4xl text-amber-400">☀</div>

          <div className="relative z-10 flex h-full flex-col items-center">
            <div className="inline-flex self-center items-center gap-2 rounded-full bg-blue-600/10 px-5 py-2 text-xs font-black uppercase tracking-[.15em] text-blue-700">
              <GraduationCap size={16} /> My Education
            </div>

            <div className="relative mt-12 flex h-[535px] w-full items-end justify-center">
              <div className="absolute bottom-0 h-[470px] w-[430px] rounded-full bg-gradient-to-br from-sky-300/70 via-blue-500/75 to-indigo-600/70" />
              <div className="relative z-10 h-[555px] w-[375px] overflow-hidden rounded-[45%_45%_14%_14%]">
                <img src="/saurabh-anand-hero.webp" alt="Saurabh Anand" className="h-full w-full object-cover object-top" loading="eager" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — timeline from the supplied design */}
        <div className="relative pt-2">
          <div className="mb-7 grid items-end gap-5 md:grid-cols-[1fr_.75fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-5 py-2 text-xs font-black uppercase tracking-[.15em] text-blue-700">
                <GraduationCap size={16} /> My Education
              </div>
              <h2 className="mt-5 text-5xl font-black leading-[.95] tracking-[-.055em] text-[#0d1648] md:text-6xl xl:text-[68px]">
                My Education
                <br /><span className="text-blue-600">Journey</span>
              </h2>
            </div>
            <p className="pb-1 text-sm leading-6 text-slate-600 md:text-base">
              Education has given me the foundation to think, learn and grow. It helped me develop problem-solving skills, a curious mindset and a passion for technology.
            </p>
          </div>

          <div className="relative pl-0 md:pl-0">
            <div className="absolute left-[18px] top-7 bottom-7 w-[2px] bg-gradient-to-b from-blue-200 via-violet-200 to-emerald-200 md:left-[183px]" />

            <div className="space-y-4">
              {educationItems.map((item, index) => {
                const Icon = item.icon;
                const tone = toneClasses[item.tone as keyof typeof toneClasses];
                return (
                  <motion.article
                    key={item.period}
                    initial={{opacity:0,x:25}}
                    whileInView={{opacity:1,x:0}}
                    viewport={{once:true,amount:.15}}
                    transition={{delay:index*.08}}
                    className="relative md:grid md:grid-cols-[165px_1fr] md:gap-6"
                  >
                    <div className="hidden pt-5 md:block">
                      <span className={`ml-auto flex w-fit rounded-xl px-4 py-2 text-sm font-black shadow-sm ${tone.period}`}>{item.period}</span>
                    </div>
                    <div className="relative pl-10 md:pl-0">
                      <span className={`absolute left-[9px] top-7 z-10 h-5 w-5 rounded-full border-4 border-[#f7fbff] shadow ${tone.dot} md:-left-[35px]`} />
                      <div className="rounded-[20px] border border-white bg-white/95 px-5 py-4 shadow-[0_10px_30px_rgba(15,23,42,.07)] md:px-5 md:py-4">
                        <div className="flex items-start gap-4">
                          <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${tone.icon}`}>
                            <Icon size={32} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <h3 className="text-xl font-black tracking-tight text-[#0d1648] md:text-2xl">{item.title}</h3>
                                <p className="mt-0.5 font-semibold text-blue-600">{item.subtitle}</p>
                                <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-600"><Building2 size={14} /> {item.institution}</p>
                              </div>
                              <span className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold ${tone.status}`}>{item.status}</span>
                            </div>
                            <p className="mt-3 text-sm leading-5 text-slate-600">{item.description}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {item.tags.map(tag => <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-medium text-blue-700">{tag}</span>)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-0 overflow-hidden rounded-[20px] border border-white bg-white/95 shadow-[0_10px_30px_rgba(15,23,42,.07)] sm:grid-cols-4">
            <div className="flex items-center gap-3 border-r border-slate-200 p-4"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-600"><GraduationCap size={24}/></span><div><b className="block text-lg font-black text-[#0d1648]">3+</b><span className="text-xs text-slate-600">Years<br/>in BCA</span></div></div>
            <div className="flex items-center gap-3 border-r border-slate-200 p-4"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600"><BookOpen size={24}/></span><div><b className="block text-lg font-black text-[#0d1648]">Strong</b><span className="text-xs text-slate-600">Academic<br/>Foundation</span></div></div>
            <div className="flex items-center gap-3 border-r border-slate-200 p-4"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-600"><Monitor size={24}/></span><div><b className="block text-lg font-black text-[#0d1648]">Continuous</b><span className="text-xs text-slate-600">Learning<br/>Mindset</span></div></div>
            <div className="flex items-center gap-3 p-4"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-600"><Lightbulb size={24}/></span><div><b className="block text-lg font-black text-[#0d1648]">Always</b><span className="text-xs text-slate-600">Exploring<br/>New Technologies</span></div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
