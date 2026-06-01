import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, XCircle, ArrowLeft, Globe, FileCheck2 } from "lucide-react";
import SEO from "@/components/SEO";

type Rule = { ua: string; allow: string[]; disallow: string[] };

const BOTS = [
  "Googlebot",
  "Bingbot",
  "GPTBot",
  "ClaudeBot",
  "PerplexityBot",
  "LinkedInBot",
  "Twitterbot",
];

const TEST_PATHS = ["/", "/portfolio", "/contact", "/gallery", "/llms.txt"];

function parseRobots(txt: string): { rules: Rule[]; sitemaps: string[] } {
  const rules: Rule[] = [];
  const sitemaps: string[] = [];
  let current: Rule | null = null;
  for (const raw of txt.split(/\r?\n/)) {
    const line = raw.replace(/#.*$/, "").trim();
    if (!line) continue;
    const [k, ...rest] = line.split(":");
    const v = rest.join(":").trim();
    const key = k.toLowerCase();
    if (key === "user-agent") {
      current = { ua: v, allow: [], disallow: [] };
      rules.push(current);
    } else if (key === "allow" && current) current.allow.push(v);
    else if (key === "disallow" && current) current.disallow.push(v);
    else if (key === "sitemap") sitemaps.push(v);
  }
  return { rules, sitemaps };
}

function isAllowed(rules: Rule[], ua: string, path: string): boolean {
  const match = rules.find((r) => r.ua.toLowerCase() === ua.toLowerCase())
    || rules.find((r) => r.ua === "*");
  if (!match) return true;
  const longest = (list: string[]) =>
    list.filter((p) => p && path.startsWith(p)).sort((a, b) => b.length - a.length)[0];
  const a = longest(match.allow);
  const d = longest(match.disallow);
  if (!d) return true;
  if (!a) return d !== "";
  return a.length >= d.length;
}

const CrawlerCheckPage = () => {
  const [robotsTxt, setRobotsTxt] = useState<string>("");
  const [parsed, setParsed] = useState<{ rules: Rule[]; sitemaps: string[] } | null>(null);
  const [sitemapOk, setSitemapOk] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("/robots.txt").then((r) => r.text()).then((t) => {
      setRobotsTxt(t);
      setParsed(parseRobots(t));
    }).catch(() => setRobotsTxt("Failed to load /robots.txt"));
    fetch("/sitemap.xml").then((r) => setSitemapOk(r.ok)).catch(() => setSitemapOk(false));
  }, []);

  const canonical = typeof window !== "undefined" ? document.querySelector('link[rel="canonical"]')?.getAttribute("href") : null;

  return (
    <div className="min-h-screen pt-24 pb-20">
      <SEO
        title="Crawler Verification Dashboard | Saurabh Anand"
        description="Technical SEO dashboard: robots.txt parser, user-agent simulation, sitemap & canonical validation for AI and search crawlers."
        path="/crawler-check"
      />
      <div className="container mx-auto px-6 max-w-5xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <p className="section-label mb-2">Technical SEO</p>
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-3">
          Crawler <span className="gradient-text">Verification Dashboard</span>
        </h1>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Live robots.txt parser + user-agent simulation for AI and search crawlers. Tests how this site is interpreted by Google, Bing, OpenAI, Anthropic, Perplexity, LinkedIn, and X.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mb-10">
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 mb-2"><FileCheck2 size={18} className="text-primary" /><h3 className="font-display font-semibold">Sitemap</h3></div>
            <p className="text-sm flex items-center gap-2">
              {sitemapOk === null ? "Checking…" : sitemapOk ? (
                <><CheckCircle2 size={16} className="text-emerald-500" /> /sitemap.xml available</>
              ) : (
                <><XCircle size={16} className="text-destructive" /> /sitemap.xml missing</>
              )}
            </p>
            <p className="text-xs text-muted-foreground mt-2 break-all">{parsed?.sitemaps?.[0] || "no Sitemap: directive"}</p>
          </div>
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 mb-2"><Globe size={18} className="text-accent" /><h3 className="font-display font-semibold">Canonical</h3></div>
            <p className="text-sm flex items-center gap-2">
              {canonical ? (
                <><CheckCircle2 size={16} className="text-emerald-500" /> Present</>
              ) : (
                <><XCircle size={16} className="text-destructive" /> Missing</>
              )}
            </p>
            <p className="text-xs text-muted-foreground mt-2 break-all">{canonical || "—"}</p>
          </div>
        </div>

        <div className="glass-card overflow-hidden">
          <div className="px-5 py-4 border-b border-border bg-secondary/30">
            <h3 className="font-display font-semibold">Crawler Simulation</h3>
            <p className="text-xs text-muted-foreground mt-1">Allow/Disallow per user-agent for representative paths.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-widest text-muted-foreground">
                  <th className="px-5 py-3">User-Agent</th>
                  {TEST_PATHS.map((p) => <th key={p} className="px-3 py-3 font-mono">{p}</th>)}
                </tr>
              </thead>
              <tbody>
                {BOTS.map((bot) => (
                  <tr key={bot} className="border-t border-border/40">
                    <td className="px-5 py-3 font-medium">{bot}</td>
                    {TEST_PATHS.map((p) => {
                      const ok = parsed ? isAllowed(parsed.rules, bot, p) : true;
                      return (
                        <td key={p} className="px-3 py-3">
                          {ok ? (
                            <span className="inline-flex items-center gap-1 text-emerald-500 text-xs"><CheckCircle2 size={14} /> Allow</span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-destructive text-xs"><XCircle size={14} /> Block</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <details className="mt-6 glass-card p-5">
          <summary className="cursor-pointer text-sm font-medium">View raw robots.txt</summary>
          <pre className="mt-3 text-xs text-muted-foreground whitespace-pre-wrap font-mono">{robotsTxt}</pre>
        </details>
      </div>
    </div>
  );
};

export default CrawlerCheckPage;
