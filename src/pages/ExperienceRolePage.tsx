import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import spaceBg from "@/assets/space-bg.jpg";
import { getJob } from "@/data/experience";

const ExperienceRolePage = () => {
  const { slug = "" } = useParams();
  const job = getJob(slug);
  if (!job) return <Navigate to="/experience" replace />;

  return (
    <div className="relative min-h-screen">
      <SEO
        title={`${job.title} at ${job.company}`}
        description={`${job.title} at ${job.company} (${job.period}). ${job.description}`}
        path={`/experience/${job.slug}`}
      />
      <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: `url(${spaceBg})` }} />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      <Navbar />
      <article className="pt-24 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link to="/experience" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft size={14} /> Back to experience
          </Link>

          <p className="section-label mb-2">{job.period}</p>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-3">{job.title}</h1>
          <div className="flex items-center gap-2 mb-8">
            <img src={job.favicon} alt={job.company} className="w-5 h-5 rounded" />
            <span className="text-muted-foreground">{job.company}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {job.tools.map((t) => (
              <span key={t} className="badge-glass text-[11px]">{t}</span>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8">{job.description}</p>

          <section className="glass-card p-6 md:p-8 mb-6">
            <h2 className="text-xl font-display font-semibold mb-4">Responsibilities</h2>
            <ul className="space-y-2">
              {job.responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-secondary-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </section>

          <section className="glass-card p-6 md:p-8">
            <h2 className="text-xl font-display font-semibold mb-4">Key Achievements</h2>
            <ul className="space-y-2">
              {job.achievements.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm text-secondary-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
};

export default ExperienceRolePage;
