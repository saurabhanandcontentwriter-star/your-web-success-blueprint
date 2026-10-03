import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  MapPin,
  Target,
  TrendingUp,
} from "lucide-react";
import { jobs } from "@/data/experience";

const portraitSrc = "data:image/webp;base64,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";

const roleIcons = [TrendingUp, BarChart3, BriefcaseBusiness, Code2];

const ExperienceSection = () => (
  <section id="experience" className="relative overflow-hidden py-12 md:py-20">
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/60 dark:from-slate-950 dark:via-slate-950 dark:to-indigo-950/20" />
    <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
    <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl" />

    <div className="container relative mx-auto px-4 sm:px-6">
      <div className="mb-10 text-center md:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300"
        >
          <BriefcaseBusiness size={15} />
          Work Experience
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 dark:text-white md:text-6xl"
        >
          My Professional <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Journey</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300 md:text-base"
        >
          A journey of learning, building and growing in SEO, digital marketing, web development and AI.
          Here are the roles and experiences that shaped my career.
        </motion.p>
      </div>

      <div className="grid gap-7 lg:grid-cols-[0.72fr_1.55fr]">
        <motion.aside
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative min-h-[560px] overflow-hidden rounded-[32px] border border-blue-100/80 bg-gradient-to-br from-white via-blue-50/80 to-indigo-50/90 p-6 shadow-[0_30px_90px_rgba(37,99,235,0.13)] dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/40 md:p-8"
        >
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border-[28px] border-blue-500/10" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full border-[30px] border-violet-500/10" />

          <div className="relative flex h-full flex-col">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-700 dark:text-blue-300">
                <Target size={15} />
                Professional Experience
              </span>
              <span className="hidden rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-600 sm:inline-flex">
                Growing
              </span>
            </div>

            <div className="relative mx-auto mt-9 flex h-[285px] w-full max-w-[340px] items-end justify-center">
              <div className="absolute bottom-0 h-64 w-64 rounded-full bg-gradient-to-br from-sky-400/90 via-blue-500/90 to-indigo-600/90 shadow-[0_20px_60px_rgba(37,99,235,0.25)]" />
              <div className="absolute bottom-3 h-56 w-56 rounded-full border-2 border-white/50" />
              <div className="relative z-10 h-[300px] w-[235px] overflow-hidden rounded-[42%_42%_18%_18%] border-4 border-white/80 shadow-2xl dark:border-slate-700">
                <img
                  src={portraitSrc}
                  alt="Saurabh Anand"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="relative mt-4">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Saurabh Anand</p>
              <h3 className="mt-1 text-3xl font-black leading-tight tracking-[-0.03em] text-slate-950 dark:text-white">
                Learning.
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Building. Growing.</span>
              </h3>
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">
                SEO, digital marketing, web development, analytics and AI — turning ideas into measurable digital impact.
              </p>
            </div>

            <div className="mt-auto grid grid-cols-2 gap-3 pt-7">
              <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-blue-100 dark:bg-slate-800/70 dark:ring-slate-700">
                <div className="text-2xl font-black text-blue-700 dark:text-blue-300">4+</div>
                <div className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-300">Years of Experience</div>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-blue-100 dark:bg-slate-800/70 dark:ring-slate-700">
                <div className="text-2xl font-black text-indigo-700 dark:text-indigo-300">50+</div>
                <div className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-300">Projects & Websites</div>
              </div>
            </div>
          </div>
        </motion.aside>

        <div className="relative">
          <div className="absolute bottom-5 left-[15px] top-5 w-px bg-gradient-to-b from-blue-200 via-indigo-200 to-transparent dark:from-blue-900 dark:via-indigo-900 md:left-[23px]" />

          <div className="space-y-4 md:space-y-5">
            {jobs.map((job, i) => {
              const Icon = roleIcons[i] ?? BriefcaseBusiness;
              return (
                <motion.article
                  key={job.slug}
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="relative pl-10 md:pl-14"
                >
                  <div className="absolute left-[7px] top-7 z-10 flex h-5 w-5 items-center justify-center rounded-full border-4 border-white bg-blue-600 shadow-md shadow-blue-500/30 dark:border-slate-950 md:left-[15px]" />

                  <div className="group rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.06)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)] dark:border-slate-700 dark:bg-slate-900/85 md:p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                        <Icon size={28} strokeWidth={2.2} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                          <div>
                            <h3 className="text-xl font-black tracking-tight text-slate-950 dark:text-white md:text-2xl">
                              {job.title}
                            </h3>
                            <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                              <span className="font-semibold text-blue-600 dark:text-blue-300">{job.company}</span>
                              <span className="text-slate-300">|</span>
                              <span className="text-slate-500 dark:text-slate-400">Professional Experience</span>
                            </div>
                          </div>
                          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-blue-600/10 px-3 py-1.5 text-xs font-bold text-blue-700 dark:text-blue-300">
                            <CalendarDays size={13} />
                            {job.period}
                          </span>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {job.tools.map((tool) => (
                            <span
                              key={tool}
                              className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-medium text-blue-700 ring-1 ring-blue-100 dark:bg-blue-950/40 dark:text-blue-200 dark:ring-blue-900"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>

                        <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                          {job.description}
                        </p>

                        <ul className="mt-3 space-y-2">
                          {job.achievements.slice(0, 3).map((achievement) => (
                            <li key={achievement} className="flex items-start gap-2 text-sm leading-5 text-slate-700 dark:text-slate-300">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                              {achievement}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-4 flex flex-wrap items-center gap-4">
                          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                            <MapPin size={13} />
                            Remote / India
                          </span>
                          <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 transition-colors hover:text-indigo-600 dark:text-blue-300"
                          >
                            View role details <ArrowUpRight size={13} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
