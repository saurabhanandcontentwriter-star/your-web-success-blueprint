import { motion } from "framer-motion";
import {
  BarChart3,
  Bot,
  Code2,
  Lightbulb,
  Search,
  Target,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";

type Skill = {
  name: string;
  value: number;
};

type SkillGroup = {
  title: string;
  overall: number;
  icon: typeof Search;
  tone: "blue" | "purple" | "teal" | "orange" | "pink" | "indigo";
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "SEO & Digital Marketing",
    overall: 95,
    icon: Search,
    tone: "blue",
    skills: [
      { name: "Technical SEO", value: 95 },
      { name: "On-Page SEO", value: 92 },
      { name: "Off-Page SEO", value: 90 },
      { name: "Keyword Research", value: 92 },
      { name: "Google Search Console", value: 90 },
      { name: "Google Analytics (GA4)", value: 88 },
      { name: "Content Strategy", value: 90 },
    ],
  },
  {
    title: "Web Development",
    overall: 90,
    icon: Code2,
    tone: "purple",
    skills: [
      { name: "React.js", value: 90 },
      { name: "Next.js", value: 85 },
      { name: "JavaScript", value: 88 },
      { name: "HTML & CSS", value: 92 },
      { name: "Tailwind CSS", value: 88 },
      { name: "Framer Motion", value: 82 },
    ],
  },
  {
    title: "Data & Analytics",
    overall: 85,
    icon: BarChart3,
    tone: "teal",
    skills: [
      { name: "Excel", value: 88 },
      { name: "SQL", value: 90 },
      { name: "Power BI", value: 85 },
      { name: "Python", value: 82 },
      { name: "Data Visualization", value: 88 },
      { name: "Statistics", value: 80 },
    ],
  },
  {
    title: "AI & Automation",
    overall: 85,
    icon: Bot,
    tone: "orange",
    skills: [
      { name: "ChatGPT & AI Tools", value: 90 },
      { name: "Prompt Engineering", value: 85 },
      { name: "AI Automation", value: 80 },
      { name: "LLMs & AI Agents", value: 82 },
      { name: "Make / Zapier", value: 78 },
      { name: "ElevenLabs (Voice AI)", value: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    overall: 90,
    icon: Wrench,
    tone: "pink",
    skills: [
      { name: "Ahrefs", value: 90 },
      { name: "Semrush", value: 88 },
      { name: "Screaming Frog", value: 85 },
      { name: "Lighthouse", value: 88 },
      { name: "Figma", value: 82 },
      { name: "Git & GitHub", value: 85 },
    ],
  },
  {
    title: "Soft Skills",
    overall: 90,
    icon: Users,
    tone: "indigo",
    skills: [
      { name: "Problem Solving", value: 92 },
      { name: "Communication", value: 90 },
      { name: "Project Management", value: 88 },
      { name: "Team Collaboration", value: 90 },
      { name: "Adaptability", value: 92 },
      { name: "Continuous Learning", value: 95 },
    ],
  },
];

const toneClasses = {
  blue: {
    icon: "bg-blue-600/10 text-blue-600",
    bar: "from-blue-600 to-sky-400",
    soft: "bg-blue-50/70 dark:bg-blue-950/20",
  },
  purple: {
    icon: "bg-purple-600/10 text-purple-600",
    bar: "from-purple-600 to-violet-400",
    soft: "bg-purple-50/70 dark:bg-purple-950/20",
  },
  teal: {
    icon: "bg-teal-500/10 text-teal-600",
    bar: "from-teal-600 to-emerald-400",
    soft: "bg-teal-50/70 dark:bg-teal-950/20",
  },
  orange: {
    icon: "bg-orange-500/10 text-orange-600",
    bar: "from-orange-500 to-amber-400",
    soft: "bg-orange-50/70 dark:bg-orange-950/20",
  },
  pink: {
    icon: "bg-pink-500/10 text-pink-600",
    bar: "from-pink-500 to-rose-400",
    soft: "bg-pink-50/70 dark:bg-pink-950/20",
  },
  indigo: {
    icon: "bg-indigo-600/10 text-indigo-600",
    bar: "from-indigo-600 to-violet-400",
    soft: "bg-indigo-50/70 dark:bg-indigo-950/20",
  },
};

const SkillRow = ({ skill, tone }: { skill: Skill; tone: SkillGroup["tone"] }) => (
  <div className="group/skill">
    <div className="mb-1.5 flex items-center justify-between gap-3 text-[12px] md:text-[13px]">
      <span className="truncate text-slate-700 dark:text-slate-300">{skill.name}</span>
      <span className="shrink-0 font-medium text-slate-500 dark:text-slate-400">{skill.value}%</span>
    </div>
    <div className="h-2 overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-700/70">
      <motion.div
        className={`h-full rounded-full bg-gradient-to-r ${toneClasses[tone].bar}`}
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.value}%` }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      />
    </div>
  </div>
);

const SkillsSection = () => (
  <section id="skills" className="relative overflow-hidden py-8 md:py-12">
    <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl" />
    <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-violet-400/10 blur-3xl" />

    <div className="relative grid gap-7 lg:grid-cols-[0.72fr_1.55fr]">
      <motion.aside
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative h-fit min-h-[500px] self-start overflow-hidden rounded-[30px] border border-blue-100/80 bg-gradient-to-br from-white via-blue-50/70 to-indigo-50/80 p-7 shadow-[0_25px_80px_rgba(37,99,235,0.10)] dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/40 md:p-9"
      >
        <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border-[24px] border-blue-500/10" />
        <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full border-[28px] border-violet-500/10" />

        <div className="relative flex h-full flex-col">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-600/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
            <Target size={15} />
            My Skills
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border-4 border-white bg-blue-100 shadow-xl shadow-blue-500/20 dark:border-slate-700">
              <img src="/saurabh-anand-hero.webp" alt="Saurabh Anand" className="h-full w-full object-cover object-top" loading="eager" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Saurabh Anand</p>
              <h3 className="text-2xl font-black tracking-tight text-slate-950 dark:text-white">Skills That Create Impact</h3>
            </div>
          </div>

          <div className="mt-9">
            <h2 className="text-4xl font-black leading-[1.02] tracking-[-0.04em] text-slate-950 dark:text-white md:text-5xl">
              Skills That
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Drive My Work</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">
              A practical mix of SEO, digital marketing, web development, data analytics and AI that turns ideas into measurable, scalable digital solutions.
            </p>
            <p className="mt-3 max-w-md text-xs leading-5 text-slate-500 dark:text-slate-400">
              From technical audits and content systems to dashboards, websites and AI workflows, I focus on skills that move projects from idea to execution.
            </p>
          </div>

          <div className="mt-7 rounded-2xl border border-blue-100/80 bg-white/60 p-4 dark:border-slate-700 dark:bg-slate-800/50">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-300">Core toolkit</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["SEO", "React", "SQL", "Power BI", "Python", "AI"].map((item) => (
                <span key={item} className="rounded-full bg-blue-600/10 px-3 py-1.5 text-[11px] font-semibold text-blue-700 dark:bg-blue-400/10 dark:text-blue-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/80 bg-white/75 p-4 backdrop-blur dark:border-slate-700 dark:bg-slate-800/70">
              <Lightbulb className="mb-3 text-amber-500" size={22} />
              <p className="text-sm font-bold text-slate-900 dark:text-white">Learn · Build · Grow</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Continuous learning</p>
            </div>
            <div className="rounded-2xl border border-white/80 bg-white/75 p-4 backdrop-blur dark:border-slate-700 dark:bg-slate-800/70">
              <Code2 className="mb-3 text-indigo-600" size={22} />
              <p className="text-sm font-bold text-slate-900 dark:text-white">Strategy → Execution</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Real-world application</p>
            </div>
          </div>
        </div>
      </motion.aside>

      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          const tone = toneClasses[group.tone];

          return (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              className="overflow-hidden rounded-[22px] border border-slate-200/80 bg-white/90 shadow-[0_14px_40px_rgba(15,23,42,0.06)] backdrop-blur dark:border-slate-700 dark:bg-slate-900/90"
            >
              <div className={`flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-3.5 ${tone.soft} dark:border-slate-700 md:px-5`}>
                <div className="flex min-w-0 items-center gap-3">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tone.icon}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="truncate text-sm font-extrabold text-slate-900 dark:text-white md:text-[15px]">{group.title}</h3>
                </div>
                <span className="shrink-0 text-xs font-bold text-slate-500 dark:text-slate-300">{group.overall}%</span>
              </div>

              <div className="space-y-3.5 p-4 md:p-5">
                {group.skills.map((skill) => (
                  <SkillRow key={skill.name} skill={skill} tone={group.tone} />
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-6 grid grid-cols-2 overflow-hidden rounded-[24px] border border-slate-200/80 bg-white/90 shadow-[0_14px_40px_rgba(15,23,42,0.06)] dark:border-slate-700 dark:bg-slate-900/90 md:grid-cols-4"
    >
      {[
        { icon: Trophy, value: "10+", label: "Tools Proficient" },
        { icon: Users, value: "5+", label: "Core Domains" },
        { icon: Lightbulb, value: "100%", label: "Passion for Learning" },
        { icon: Target, value: "Real", label: "World Application" },
      ].map(({ icon: Icon, value, label }, index) => (
        <div key={label} className={`flex items-center gap-3 p-5 md:p-6 ${index < 3 ? "border-b md:border-b-0 md:border-r border-slate-200/80 dark:border-slate-700" : ""} ${index === 1 ? "border-r border-slate-200/80 dark:border-slate-700 md:border-r" : ""}`}>
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-300">
            <Icon size={21} />
          </div>
          <div>
            <p className="text-2xl font-black tracking-tight text-slate-950 dark:text-white">{value}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{label}</p>
          </div>
        </div>
      ))}
    </motion.div>
  </section>
);

export default SkillsSection;
