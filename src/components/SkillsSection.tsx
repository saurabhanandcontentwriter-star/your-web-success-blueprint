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
        className="relative min-h-[500px] overflow-hidden rounded-[30px] border border-blue-100/80 bg-gradient-to-br from-white via-blue-50/70 to-indigo-50/80 p-7 shadow-[0_25px_80px_rgba(37,99,235,0.10)] dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/40 md:p-9"
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
              <img src="data:image/webp;base64,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" alt="Saurabh Anand" className="h-full w-full object-cover object-top" loading="eager" />
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
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Power My Work</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">
              A blend of SEO, digital marketing, web development, data analysis and AI tools that help me build, optimize and grow impactful digital solutions.
            </p>
          </div>

          <div className="mt-auto grid grid-cols-2 gap-3 pt-10">
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
