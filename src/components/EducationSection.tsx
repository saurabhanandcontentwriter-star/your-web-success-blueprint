import { motion } from "framer-motion";
import {
  BookOpen,
  Building2,
  GraduationCap,
  Lightbulb,
  Monitor,
} from "lucide-react";

const educationItems = [
  {
    period: "2023 – 2026",
    title: "BCA (3rd Year)",
    subtitle: "Degree Vocational Course",
    institution: "Allama Iqbal College, Bihar Sharif",
    status: "Pursuing",
    icon: GraduationCap,
    tone: "blue",
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
    tone: "purple",
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
    tone: "teal",
    description:
      "Completed secondary education and developed a strong academic base with interest in technology and computers.",
    tags: ["General Science", "Mathematics", "Social Science", "Basic Computer Knowledge"],
  },
];

const toneClasses = {
  blue: {
    icon: "bg-blue-500/10 text-blue-600 dark:text-blue-300",
    period: "bg-blue-600 text-white",
    dot: "bg-blue-500",
    status: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300",
  },
  purple: {
    icon: "bg-purple-500/10 text-purple-600 dark:text-purple-300",
    period: "bg-violet-600 text-white",
    dot: "bg-violet-500",
    status: "bg-violet-500/10 text-violet-600 dark:text-violet-300",
  },
  teal: {
    icon: "bg-teal-500/10 text-teal-600 dark:text-teal-300",
    period: "bg-emerald-500 text-white",
    dot: "bg-emerald-500",
    status: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300",
  },
};

const EducationSection = () => (
  <section id="education" className="relative overflow-hidden py-12 md:py-20">
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/60 dark:from-slate-950 dark:via-slate-950 dark:to-indigo-950/20" />
    <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
    <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl" />

    <div className="container relative mx-auto px-4 sm:px-6">
      <div className="grid gap-7 lg:grid-cols-[0.72fr_1.55fr]">
        <motion.aside
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative min-h-[650px] overflow-hidden rounded-[32px] border border-blue-100/80 bg-gradient-to-br from-white via-blue-50/80 to-indigo-50/90 p-6 shadow-[0_30px_90px_rgba(37,99,235,0.13)] dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/40 md:p-8"
        >
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border-[28px] border-blue-500/10" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full border-[30px] border-violet-500/10" />

          <div className="relative flex h-full flex-col">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-600/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">
              <GraduationCap size={15} />
              My Education
            </div>

            <div className="relative mx-auto mt-8 flex h-[330px] w-full max-w-[360px] items-end justify-center">
              <div className="absolute bottom-0 h-72 w-72 rounded-full bg-gradient-to-br from-sky-400/90 via-blue-500/90 to-indigo-600/90 shadow-[0_20px_60px_rgba(37,99,235,0.25)]" />
              <div className="absolute bottom-4 h-64 w-64 rounded-full border-2 border-white/50" />
              <div className="relative z-10 h-[340px] w-[255px] overflow-hidden rounded-[42%_42%_18%_18%] border-4 border-white/80 shadow-2xl dark:border-slate-700">
                <img
                  src="/saurabh-anand-hero.webp"
                  alt="Saurabh Anand"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="relative mt-4">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Saurabh Anand</p>
              <h2 className="mt-1 text-4xl font-black leading-[1.02] tracking-[-0.04em] text-slate-950 dark:text-white">
                Learning.
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Building. Growing.</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">
                Education has given me the foundation to think, learn and grow. It helped me develop problem-solving skills, a curious mindset and a passion for technology.
              </p>
            </div>

            <div className="mt-auto grid grid-cols-2 gap-3 pt-7">
              <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-blue-100 dark:bg-slate-800/70 dark:ring-slate-700">
                <div className="text-2xl font-black text-blue-700 dark:text-blue-300">3+</div>
                <div className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-300">Years in BCA</div>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-blue-100 dark:bg-slate-800/70 dark:ring-slate-700">
                <div className="text-2xl font-black text-indigo-700 dark:text-indigo-300">2023–26</div>
                <div className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-300">Academic Session</div>
              </div>
            </div>
          </div>
        </motion.aside>

        <div className="relative">
          <div className="mb-9 grid gap-5 md:grid-cols-[1fr_0.78fr] md:items-end">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300"
              >
                <GraduationCap size={15} />
                My Education
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-4 text-5xl font-black leading-[0.98] tracking-[-0.05em] text-slate-950 dark:text-white md:text-6xl"
              >
                My Education
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Journey</span>
              </motion.h2>
            </div>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300 md:pb-2 md:text-base">
              Education has given me the foundation to think, learn and grow. It helped me develop problem-solving skills, a curious mindset and a passion for technology.
            </p>
          </div>

          <div className="relative">
            <div className="absolute bottom-8 left-[15px] top-8 w-px bg-gradient-to-b from-blue-200 via-violet-200 to-emerald-200 dark:from-blue-900 dark:via-violet-900 dark:to-emerald-900 md:left-[23px]" />

            <div className="space-y-4 md:space-y-5">
              {educationItems.map((item, index) => {
                const Icon = item.icon;
                const tone = toneClasses[item.tone as keyof typeof toneClasses];

                return (
                  <motion.article
                    key={item.period}
                    initial={{ opacity: 0, x: 35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.18 }}
                    transition={{ delay: index * 0.08, duration: 0.45 }}
                    className="relative pl-10 md:pl-14"
                  >
                    <span className={`absolute left-[7px] top-7 z-10 h-5 w-5 rounded-full border-4 border-white ${tone.dot} shadow-md dark:border-slate-950 md:left-[15px]`} />

                    <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.06)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)] dark:border-slate-700 dark:bg-slate-900/85 md:p-6">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                        <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${tone.icon}`}>
                          <Icon size={31} strokeWidth={2.2} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                            <div>
                              <h3 className="text-xl font-black tracking-tight text-slate-950 dark:text-white md:text-2xl">{item.title}</h3>
                              <p className="mt-1 font-semibold text-blue-600 dark:text-blue-300">{item.subtitle}</p>
                              <div className="mt-1 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                <Building2 size={15} className="shrink-0" />
                                {item.institution}
                              </div>
                            </div>
                            <span className={`inline-flex w-fit items-center rounded-full px-3 py-1.5 text-xs font-bold ${tone.status}`}>{item.status}</span>
                          </div>

                          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-medium text-blue-700 ring-1 ring-blue-100 dark:bg-blue-950/40 dark:text-blue-200 dark:ring-blue-900">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <span className={`absolute -left-1 top-7 hidden rounded-full px-3 py-1.5 text-xs font-bold shadow-sm md:-left-[130px] md:inline-flex ${tone.period}`}>
                      {item.period}
                    </span>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-[0_12px_35px_rgba(15,23,42,0.05)] dark:border-slate-700 dark:bg-slate-900/85 sm:grid-cols-4">
            <div className="flex items-center gap-3 border-r border-slate-200 pr-3 dark:border-slate-700">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-600"><GraduationCap size={23} /></span>
              <div><b className="block text-lg font-black text-slate-950 dark:text-white">3+</b><span className="text-xs text-slate-500">Years in BCA</span></div>
            </div>
            <div className="flex items-center gap-3 border-r border-slate-200 pr-3 dark:border-slate-700">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600"><BookOpen size={23} /></span>
              <div><b className="block text-lg font-black text-slate-950 dark:text-white">Strong</b><span className="text-xs text-slate-500">Academic Foundation</span></div>
            </div>
            <div className="flex items-center gap-3 border-r border-slate-200 pr-3 dark:border-slate-700">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-600"><Monitor size={23} /></span>
              <div><b className="block text-lg font-black text-slate-950 dark:text-white">Continuous</b><span className="text-xs text-slate-500">Learning Mindset</span></div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-600"><Lightbulb size={23} /></span>
              <div><b className="block text-lg font-black text-slate-950 dark:text-white">Always</b><span className="text-xs text-slate-500">Exploring New Technologies</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
