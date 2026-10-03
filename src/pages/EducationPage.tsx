import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  GraduationCap,
  Lightbulb,
  Monitor,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";

const educationItems = [
  {
    period: "2023 – 2026",
    title: "BCA (3rd Year)",
    subtitle: "Degree Vocational Course",
    institution: "Allama Iqbal College, Bihar Sharif",
    status: "Pursuing",
    icon: GraduationCap,
    color: "blue",
    description:
      "Currently in the 3rd year of BCA (Degree Voc), Session 2023–2026. Gaining strong knowledge in computer applications, programming, web development, database management and modern technologies.",
    tags: ["Computer Applications", "Programming", "Web Development", "Database", "IT Fundamentals"],
  },
  {
    period: "2021 – 2023",
    title: "Intermediate (12th)",
    subtitle: "Science Stream",
    institution: "Bihar School Examination Board (BSEB)",
    status: "Completed",
    icon: BookOpen,
    color: "purple",
    description:
      "Completed Higher Secondary Education with Science stream. Built a strong foundation in analytical thinking, mathematics and problem-solving skills.",
    tags: ["Mathematics", "Physics", "Chemistry", "Analytical Thinking"],
  },
  {
    period: "2019 – 2021",
    title: "Matriculation (10th)",
    subtitle: "Secondary Education",
    institution: "Bihar School Examination Board (BSEB)",
    status: "Completed",
    icon: BookOpen,
    color: "green",
    description:
      "Completed secondary education and developed a strong academic base with interest in technology and computers.",
    tags: ["General Science", "Mathematics", "Social Science", "Basic Computer Knowledge"],
  },
];

const colorMap = {
  blue: {
    icon: "bg-blue-50 text-blue-600",
    period: "bg-blue-600 text-white",
    dot: "bg-blue-500",
    status: "bg-emerald-50 text-emerald-600",
  },
  purple: {
    icon: "bg-violet-50 text-violet-600",
    period: "bg-violet-600 text-white",
    dot: "bg-violet-500",
    status: "bg-violet-50 text-violet-600",
  },
  green: {
    icon: "bg-emerald-50 text-emerald-600",
    period: "bg-emerald-500 text-white",
    dot: "bg-emerald-500",
    status: "bg-emerald-50 text-emerald-600",
  },
};

const EducationPage = () => (
  <div className="min-h-screen overflow-hidden bg-[#f7fbff] text-[#10183f]">
    <SEO
      title="Education Journey | Saurabh Anand"
      description="Explore Saurabh Anand's BCA education journey, academic foundation and continuous learning across technology, SEO, data analytics and AI."
      path="/education"
    />
    <Navbar />

    <main>
      <section className="relative scroll-mt-24 overflow-hidden border-b border-blue-100/70 pt-24 lg:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_17%_45%,rgba(59,130,246,.16),transparent_28%),radial-gradient(circle_at_82%_52%,rgba(99,102,241,.10),transparent_32%)]" />
        <div className="absolute left-0 top-0 h-full w-[52%] bg-gradient-to-br from-blue-50/70 via-white/30 to-transparent" />

        <div className="relative mx-auto grid min-h-[calc(100vh-110px)] max-w-[1550px] items-center gap-6 px-5 pb-8 pt-4 lg:grid-cols-[.9fr_1.1fr] lg:px-8 xl:px-10">
          {/* LEFT: supplied visual style */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[700px] overflow-hidden rounded-[34px] bg-gradient-to-br from-[#edf8ff] via-white to-[#eef2ff] shadow-[0_25px_80px_rgba(37,99,235,.10)]"
          >
            <div className="absolute left-1/2 top-[20%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-300 via-blue-500 to-indigo-600 opacity-90" />
            <div className="absolute left-1/2 top-[25%] h-[470px] w-[470px] -translate-x-1/2 rounded-full border-[20px] border-white/30" />
            <div className="absolute left-1/2 top-[28%] h-[430px] w-[430px] -translate-x-1/2 rounded-full border-2 border-dashed border-blue-500/35" />

            <div className="absolute left-7 top-7 z-30 text-4xl font-medium italic leading-[.92] text-blue-600 md:text-5xl" style={{ fontFamily: "cursive" }}>
              Saurabh<br /><span className="ml-8">Anand</span>
            </div>

            <div className="absolute left-7 top-[28%] z-30 -rotate-6 text-lg font-medium leading-[1.08] text-blue-600 md:text-xl" style={{ fontFamily: "cursive" }}>
              Learning<br />Today<br />Building<br />Tomorrow
            </div>

            <div className="absolute right-5 top-8 z-30 text-right text-lg font-medium leading-[1.08] text-blue-600 md:text-xl" style={{ fontFamily: "cursive" }}>
              Still<br />Learning.<br />Always<br />Growing
            </div>

            <div className="absolute right-5 top-[27%] z-30 rotate-6 rounded-2xl bg-white/95 px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,.13)]">
              <div className="flex items-center gap-2">
                <GraduationCap className="text-blue-600" size={34} />
                <div className="text-sm font-black leading-tight">Student<br />Learner<br />Builder</div>
              </div>
            </div>

            <div className="absolute left-5 top-[52%] z-30 -rotate-6 rounded-2xl bg-white/95 px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,.13)]">
              <div className="flex items-center gap-2">
                <BookOpen className="text-blue-600" size={34} />
                <div className="text-sm font-black leading-tight">Knowledge<br />Today<br />Better Solutions<br />Tomorrow</div>
              </div>
            </div>

            <div className="absolute bottom-8 left-6 z-30 rotate-6 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 px-5 py-4 text-white shadow-[0_15px_40px_rgba(37,99,235,.30)]">
              <div className="flex items-center gap-3">
                <GraduationCap size={38} />
                <div className="text-sm font-black leading-tight">Education<br />Builds<br />Opportunities</div>
                <ArrowUpRight size={28} />
              </div>
            </div>

            <div className="absolute bottom-24 right-12 z-20 text-4xl text-amber-400">☀</div>

            <div className="relative z-10 flex h-full min-h-[700px] items-end justify-center">
              <div className="relative h-[620px] w-[430px] max-w-[78%] overflow-hidden rounded-[44%_44%_12%_12%]">
                <img
                  src="/saurabh-anand-hero.webp"
                  alt="Saurabh Anand"
                  className="h-full w-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: exact information hierarchy from supplied design */}
          <div className="relative py-2 lg:pl-2">
            <div className="mb-7 grid items-end gap-5 xl:grid-cols-[1fr_.78fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-5 py-2 text-xs font-black uppercase tracking-[.15em] text-blue-700">
                  <GraduationCap size={16} /> My Education
                </div>
                <h1 className="mt-5 text-5xl font-black leading-[.94] tracking-[-.055em] md:text-6xl xl:text-[68px]">
                  My Education
                  <br />
                  <span className="text-blue-600">Journey</span>
                </h1>
              </div>
              <p className="pb-1 text-sm leading-6 text-slate-600 md:text-base">
                Education has given me the foundation to think, learn and grow. It helped me develop problem-solving skills, a curious mindset and a passion for technology.
              </p>
            </div>

            <div className="relative">
              <div className="absolute bottom-8 left-[184px] top-8 hidden w-0.5 bg-gradient-to-b from-blue-200 via-violet-200 to-emerald-200 md:block" />

              <div className="space-y-4">
                {educationItems.map((item, index) => {
                  const Icon = item.icon;
                  const colors = colorMap[item.color as keyof typeof colorMap];

                  return (
                    <motion.article
                      key={item.period}
                      initial={{ opacity: 0, x: 25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ delay: index * 0.08 }}
                      className="relative md:grid md:grid-cols-[165px_1fr] md:gap-6"
                    >
                      <div className="hidden pt-5 md:block">
                        <span className={`ml-auto flex w-fit rounded-xl px-4 py-2 text-sm font-black shadow-sm ${colors.period}`}>
                          {item.period}
                        </span>
                      </div>

                      <div className="relative">
                        <span className={`absolute -left-[9px] top-7 z-10 hidden h-5 w-5 rounded-full border-4 border-[#f7fbff] shadow md:block ${colors.dot}`} />

                        <div className="rounded-[20px] border border-white bg-white/95 px-5 py-4 shadow-[0_10px_30px_rgba(15,23,42,.07)] md:px-5 md:py-4">
                          <div className="flex items-start gap-4">
                            <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${colors.icon}`}>
                              <Icon size={32} />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <h2 className="text-xl font-black tracking-tight md:text-2xl">{item.title}</h2>
                                  <p className="mt-0.5 font-semibold text-blue-600">{item.subtitle}</p>
                                  <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-600">
                                    <Building2 size={14} /> {item.institution}
                                  </p>
                                </div>
                                <span className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold ${colors.status}`}>
                                  {item.status}
                                </span>
                              </div>

                              <p className="mt-3 text-sm leading-5 text-slate-600">{item.description}</p>

                              <div className="mt-3 flex flex-wrap gap-2">
                                {item.tags.map((tag) => (
                                  <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-medium text-blue-700">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <span className={`mb-2 mt-2 inline-flex rounded-xl px-3 py-1.5 text-xs font-black md:hidden ${colors.period}`}>
                          {item.period}
                        </span>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 overflow-hidden rounded-[20px] border border-white bg-white/95 shadow-[0_10px_30px_rgba(15,23,42,.07)] sm:grid-cols-4">
              <div className="flex items-center gap-3 border-r border-slate-200 p-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-600"><GraduationCap size={24} /></span>
                <div><b className="block text-lg font-black">3+</b><span className="text-xs text-slate-600">Years<br />in BCA</span></div>
              </div>
              <div className="flex items-center gap-3 border-r border-slate-200 p-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600"><BookOpen size={24} /></span>
                <div><b className="block text-lg font-black">Strong</b><span className="text-xs text-slate-600">Academic<br />Foundation</span></div>
              </div>
              <div className="flex items-center gap-3 border-r border-slate-200 p-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-600"><Monitor size={24} /></span>
                <div><b className="block text-lg font-black">Continuous</b><span className="text-xs text-slate-600">Learning<br />Mindset</span></div>
              </div>
              <div className="flex items-center gap-3 p-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-600"><Lightbulb size={24} /></span>
                <div><b className="block text-lg font-black">Always</b><span className="text-xs text-slate-600">Exploring<br />New Technologies</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default EducationPage;
