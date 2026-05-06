import { useParams, Link, Navigate } from "react-router-dom";
import { ExternalLink, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import PageBackground from "@/components/PageBackground";
import { getProject } from "@/data/portfolio";

const PortfolioProjectPage = () => {
  const { slug = "" } = useParams();
  const project = getProject(slug);
  if (!project) return <Navigate to="/portfolio" replace />;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    about: project.description,
    author: { "@type": "Person", name: "Saurabh Anand" },
    url: `https://saurabhanandseo.com/portfolio/${project.slug}`,
  };

  return (
    <div className="relative min-h-screen">
      <SEO
        title={`${project.title} – ${project.company}`}
        description={project.description}
        path={`/portfolio/${project.slug}`}
        image={project.image}
        jsonLd={jsonLd}
      />
      <PageBackground variant="portfolio" />
      <Navbar />
      <article className="pt-24 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft size={14} /> Back to portfolio
          </Link>

          <p className="section-label mb-2">Case Study</p>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-3">{project.title}</h1>
          <p className="text-muted-foreground mb-6">{project.company} · <span className="text-primary font-semibold">{project.stat}</span></p>

          <div className="rounded-2xl overflow-hidden border border-border/40 mb-10">
            <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">{t}</span>
            ))}
          </div>

          <section className="glass-card p-6 md:p-8 mb-6">
            <h2 className="text-xl font-display font-semibold mb-3">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
          </section>

          <section className="glass-card p-6 md:p-8 mb-6">
            <h2 className="text-xl font-display font-semibold mb-3">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
          </section>

          <section className="glass-card p-6 md:p-8 mb-6">
            <h2 className="text-xl font-display font-semibold mb-4">Approach</h2>
            <ul className="space-y-2">
              {project.approach.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm text-secondary-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </section>

          <section className="glass-card p-6 md:p-8 mb-8">
            <h2 className="text-xl font-display font-semibold mb-4">Results</h2>
            <ul className="space-y-2">
              {project.results.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-secondary-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </section>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Visit live site <ExternalLink size={14} />
          </a>
        </div>
      </article>
    </div>
  );
};

export default PortfolioProjectPage;
