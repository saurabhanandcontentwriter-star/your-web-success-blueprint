import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  PieChart, Pie, Cell, Legend, LineChart, Line,
} from "recharts";
import { Download, Lock, RefreshCw, Users, Mail, FileText, MousePointerClick, Satellite, Wifi, HelpCircle } from "lucide-react";
import { MapContainer, TileLayer, CircleMarker, Tooltip as MapTooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";

const ENDPOINT = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/leads-report`;

interface Lead {
  date: string; time: string; event: string; name: string; email: string; message: string;
  city: string; region: string; country: string; ip: string; page: string; referrer: string;
  ua: string; lat: string; lon: string; accuracy: string; locationFull: string; district: string;
}

const COLORS = ["hsl(var(--primary))", "hsl(var(--accent))", "#22d3ee", "#f59e0b", "#a855f7"];

const EVENT_LABELS: Record<string, string> = {
  contact_form: "Contact form",
  hire_click: "Hire Me click",
  resume_download: "Resume download",
  cta_click: "CTA click",
  page_view: "Page view",
};

/** Parses both DD/MM/YYYY (new) and YYYY-MM-DD (legacy) rows. */
function parseLeadDate(v: string): Date | null {
  const s = (v || "").trim();
  let m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(s);
  if (m) return new Date(`${m[3]}-${m[2]}-${m[1]}T00:00:00`);
  m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (m) return new Date(`${s}T00:00:00`);
  return null;
}

/** Normalises any stored date to DD/MM/YYYY for display. */
function displayDate(v: string): string {
  const d = parseLeadDate(v);
  if (!d || isNaN(d.getTime())) return v;
  const p = (n: number) => String(n).padStart(2, "0");
  return `${p(d.getDate())}/${p(d.getMonth() + 1)}/${d.getFullYear()}`;
}

function toLead(r: string[]): Lead {
  const [date = "", time = "", event = "", name = "", email = "", message = "", city = "", region = "",
    country = "", ip = "", page = "", referrer = "", ua = "", lat = "", lon = "", accuracy = "",
    locationFull = "", district = ""] = r;
  const full = locationFull || [city, region, country].filter(Boolean).join(", ") || "Unknown";
  return { date, time, event, name, email, message, city, region, country, ip, page, referrer, ua, lat, lon, accuracy, locationFull: full, district };
}

type SourceKind = "gps" | "ip" | "unknown";

/** Where the stored location came from: precise browser GPS or IP lookup. */
function leadSource(l: Lead): { kind: SourceKind; label: string; detail: string } {
  const lat = Number(l.lat), lon = Number(l.lon);
  if (l.lat && l.lon && !isNaN(lat) && !isNaN(lon)) {
    return { kind: "gps", label: "GPS", detail: l.accuracy ? `precise ±${l.accuracy.replace(/\s*m$/, "")} m` : "precise" };
  }
  if (l.city || l.region || l.country) return { kind: "ip", label: "IP", detail: "approximate (IP lookup)" };
  return { kind: "unknown", label: "Unknown", detail: "no location" };
}

const SOURCE_STYLES: Record<SourceKind, string> = {
  gps: "bg-emerald-500/15 text-emerald-500 border-emerald-500/30",
  ip: "bg-amber-500/15 text-amber-500 border-amber-500/30",
  unknown: "bg-muted text-muted-foreground border-border",
};

const SOURCE_ICONS: Record<SourceKind, typeof Satellite> = { gps: Satellite, ip: Wifi, unknown: HelpCircle };

const SourceBadge = ({ lead }: { lead: Lead }) => {
  const src = leadSource(lead);
  const Icon = SOURCE_ICONS[src.kind];
  return (
    <span
      title={src.detail}
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium ${SOURCE_STYLES[src.kind]}`}
    >
      <Icon className="h-3 w-3" /> {src.label}
    </span>
  );
};

function csvEscape(v: string) {
  return `"${(v ?? "").replace(/"/g, '""')}"`;
}

const LeadsAdminPage = () => {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [header, setHeader] = useState<string[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [range, setRange] = useState<"7" | "30" | "all">("30");
  const [eventFilter, setEventFilter] = useState<string>("all");
  const [countryFilter, setCountryFilter] = useState<string>("all");
  const [regionFilter, setRegionFilter] = useState<string>("all");
  const [cityFilter, setCityFilter] = useState<string>("all");


  const load = async (pw: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ password: pw }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(typeof body?.error === "string" ? body.error : "Could not load leads");
        return false;
      }
      setHeader(body.header ?? []);
      setLeads((body.rows ?? []).map(toLead));
      return true;
    } catch {
      setError("Network error");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ok = await load(password);
    if (ok) setAuthed(true);
  };

  const norm = (v: string) => (v || "").trim();

  const countryOptions = useMemo(
    () => Array.from(new Set(leads.map((l) => norm(l.country)).filter(Boolean))).sort(),
    [leads]
  );
  const regionOptions = useMemo(
    () => Array.from(new Set(leads
      .filter((l) => countryFilter === "all" || norm(l.country) === countryFilter)
      .map((l) => norm(l.region)).filter(Boolean))).sort(),
    [leads, countryFilter]
  );
  const cityOptions = useMemo(
    () => Array.from(new Set(leads
      .filter((l) => (countryFilter === "all" || norm(l.country) === countryFilter) &&
        (regionFilter === "all" || norm(l.region) === regionFilter))
      .map((l) => norm(l.city)).filter(Boolean))).sort(),
    [leads, countryFilter, regionFilter]
  );

  const filtered = useMemo(() => {
    const cutoff = range === "all" ? null : new Date(Date.now() - Number(range) * 86400000);
    return leads.filter((l) => {
      if (eventFilter !== "all" && l.event !== eventFilter) return false;
      if (countryFilter !== "all" && norm(l.country) !== countryFilter) return false;
      if (regionFilter !== "all" && norm(l.region) !== regionFilter) return false;
      if (cityFilter !== "all" && norm(l.city) !== cityFilter) return false;
      if (!cutoff) return true;
      const d = parseLeadDate(l.date);
      return !!d && !isNaN(d.getTime()) && d >= cutoff;
    });
  }, [leads, range, eventFilter, countryFilter, regionFilter, cityFilter]);


  const stats = useMemo(() => {
    const count = (e: string) => filtered.filter((l) => l.event === e).length;
    return {
      total: filtered.length,
      contacts: count("contact_form"),
      hires: count("hire_click"),
      resumes: count("resume_download"),
    };
  }, [filtered]);

  const byEvent = useMemo(() => {
    const map = new Map<string, number>();
    filtered.forEach((l) => map.set(l.event, (map.get(l.event) ?? 0) + 1));
    return [...map].map(([name, value]) => ({ name: EVENT_LABELS[name] ?? name, value }));
  }, [filtered]);

  const byDay = useMemo(() => {
    const map = new Map<string, number>();
    filtered.forEach((l) => {
      const key = displayDate(l.date);
      map.set(key, (map.get(key) ?? 0) + 1);
    });
    return [...map]
      .sort((a, b) => (parseLeadDate(a[0])?.getTime() ?? 0) - (parseLeadDate(b[0])?.getTime() ?? 0))
      .map(([date, count]) => ({ date, count }));
  }, [filtered]);

  const byLocation = useMemo(() => {
    const map = new Map<string, number>();
    filtered.forEach((l) => {
      const key = l.locationFull || "Unknown";
      map.set(key, (map.get(key) ?? 0) + 1);
    });
    return [...map].sort((a, b) => b[1] - a[1]).slice(0, 8).map(([name, count]) => ({ name, count }));
  }, [filtered]);

  const mapPoints = useMemo(
    () =>
      filtered
        .map((l) => ({ lead: l, lat: Number(l.lat), lon: Number(l.lon) }))
        .filter((p) => p.lead.lat && p.lead.lon && !isNaN(p.lat) && !isNaN(p.lon)),
    [filtered],
  );

  const mapCenter: [number, number] = mapPoints.length
    ? [mapPoints[0].lat, mapPoints[0].lon]
    : [22.9734, 78.6569];

  const exportCsv = () => {
    const cols = [
      "Date (DD/MM/YYYY)", "Time (24h IST)", "Event", "Name", "Email", "Message",
      "City", "District", "State", "Country", "Full location", "Location source",
      "Accuracy", "Latitude", "Longitude", "Map link", "Page", "Referrer", "IP", "Device",
    ];
    const rows = filtered
      .slice()
      .sort((a, b) => (parseLeadDate(a.date)?.getTime() ?? 0) - (parseLeadDate(b.date)?.getTime() ?? 0))
      .map((l) => {
        const src = leadSource(l);
        const mapLink = l.lat && l.lon ? `https://www.google.com/maps?q=${l.lat},${l.lon}` : "";
        return [
          displayDate(l.date), l.time, EVENT_LABELS[l.event] ?? l.event, l.name, l.email,
          (l.message || "").replace(/\r?\n/g, " "),
          l.city, l.district, l.region, l.country, l.locationFull, src.label,
          l.accuracy, l.lat, l.lon, mapLink, l.page, l.referrer, l.ip, l.ua,
        ].map(csvEscape).join(",");
      });
    const csv = [cols.map(csvEscape).join(","), ...rows].join("\r\n");
    const url = URL.createObjectURL(new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-background">
        <SEO title="Lead Analytics — Admin" description="Private lead analytics dashboard." noindex />
        <Navbar />
        <div className="flex min-h-[80vh] items-center justify-center px-4">
          <Card className="w-full max-w-sm p-6 space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Lock className="h-5 w-5" />
              <h1 className="font-display text-xl font-bold">Lead Analytics</h1>
            </div>
            <p className="text-sm text-muted-foreground">Enter the admin password to view leads.</p>
            <form onSubmit={submit} className="space-y-3">
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Admin password"
                autoFocus
              />
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" className="w-full" disabled={loading || !password}>
                {loading ? "Checking..." : "Unlock dashboard"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    );
  }

  const statCards = [
    { label: "Total events", value: stats.total, icon: Users },
    { label: "Contact forms", value: stats.contacts, icon: Mail },
    { label: "Hire Me clicks", value: stats.hires, icon: MousePointerClick },
    { label: "Resume downloads", value: stats.resumes, icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Lead Analytics — Admin" description="Private lead analytics dashboard." noindex />
      <Navbar />
      <main className="container mx-auto px-4 py-24 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center justify-between gap-4"
        >
          <div>
            <h1 className="font-display text-3xl font-bold">Lead Analytics</h1>
            <p className="text-sm text-muted-foreground">Live data from your leads sheet.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={() => load(password)} disabled={loading}>
              <RefreshCw className={`mr-2 h-4 w-4 ${loading ? "animate-spin" : ""}`} /> Refresh
            </Button>
            <Button size="sm" onClick={exportCsv}>
              <Download className="mr-2 h-4 w-4" /> Export CSV
            </Button>
          </div>
        </motion.div>

        <div className="flex flex-wrap gap-2">
          {(["7", "30", "all"] as const).map((r) => (
            <Button key={r} size="sm" variant={range === r ? "default" : "outline"} onClick={() => setRange(r)}>
              {r === "all" ? "All time" : `Last ${r} days`}
            </Button>
          ))}
          <select
            className="rounded-md border border-border bg-background px-3 py-1.5 text-sm"
            value={eventFilter}
            onChange={(e) => setEventFilter(e.target.value)}
          >
            <option value="all">All events</option>
            {Object.entries(EVENT_LABELS).map(([k, v]) => (
              <option key={k} value={k}>{v}</option>
            ))}
          </select>
          <select
            className="rounded-md border border-border bg-background px-3 py-1.5 text-sm"
            value={countryFilter}
            onChange={(e) => { setCountryFilter(e.target.value); setRegionFilter("all"); setCityFilter("all"); }}
          >
            <option value="all">All countries</option>
            {countryOptions.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select
            className="rounded-md border border-border bg-background px-3 py-1.5 text-sm"
            value={regionFilter}
            onChange={(e) => { setRegionFilter(e.target.value); setCityFilter("all"); }}
          >
            <option value="all">All states</option>
            {regionOptions.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select
            className="rounded-md border border-border bg-background px-3 py-1.5 text-sm"
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
          >
            <option value="all">All cities</option>
            {cityOptions.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          {(countryFilter !== "all" || regionFilter !== "all" || cityFilter !== "all") && (
            <Button size="sm" variant="ghost" onClick={() => { setCountryFilter("all"); setRegionFilter("all"); setCityFilter("all"); }}>
              Clear location
            </Button>
          )}

        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statCards.map((s) => (
            <Card key={s.label} className="p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{s.label}</p>
                <s.icon className="h-4 w-4 text-primary" />
              </div>
              <p className="mt-2 font-display text-3xl font-bold">{s.value}</p>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="p-5">
            <h2 className="mb-4 font-display text-lg font-semibold">Activity over time</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={byDay}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                  <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="count" stroke="hsl(var(--primary))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-5">
            <h2 className="mb-4 font-display text-lg font-semibold">Event breakdown</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={byEvent} dataKey="value" nameKey="name" innerRadius={50} outerRadius={85}>
                    {byEvent.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                  </Pie>
                  <Legend />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-5 lg:col-span-2">
            <h2 className="mb-4 font-display text-lg font-semibold">Top locations</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={byLocation}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                  <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Bar dataKey="count" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        <Card className="p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-display text-lg font-semibold">Leads on the map</h2>
            <p className="text-xs text-muted-foreground">
              {mapPoints.length} of {filtered.length} events have precise GPS coordinates
            </p>
          </div>
          <div className="h-[420px] overflow-hidden rounded-lg">
            <MapContainer center={mapCenter} zoom={mapPoints.length ? 5 : 4} scrollWheelZoom style={{ height: "100%", width: "100%" }}>
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {mapPoints.map((p, i) => (
                <CircleMarker
                  key={i}
                  center={[p.lat, p.lon]}
                  radius={7}
                  pathOptions={{ color: "hsl(var(--primary))", fillColor: "hsl(var(--primary))", fillOpacity: 0.6 }}
                >
                  <MapTooltip>
                    <span className="text-xs">
                      <strong>{EVENT_LABELS[p.lead.event] ?? p.lead.event}</strong>
                      <br />
                      {p.lead.locationFull}
                      <br />
                      {displayDate(p.lead.date)} {p.lead.time}
                      {p.lead.accuracy ? ` · ±${p.lead.accuracy}` : ""}
                    </span>
                  </MapTooltip>
                </CircleMarker>
              ))}
            </MapContainer>
          </div>
          {mapPoints.length === 0 && (
            <p className="mt-3 text-sm text-muted-foreground">
              No GPS-tagged leads in this range — these visitors were located by IP only.
            </p>
          )}
        </Card>

        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-left">
                <tr>
                  {["Date", "Time", "Event", "Name", "Email", "District", "Location", "Source", "Page"].map((h) => (
                    <th key={h} className="whitespace-nowrap px-4 py-3 font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.slice().reverse().slice(0, 100).map((l, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="whitespace-nowrap px-4 py-2">{displayDate(l.date)}</td>
                    <td className="whitespace-nowrap px-4 py-2">{l.time}</td>
                    <td className="whitespace-nowrap px-4 py-2">{EVENT_LABELS[l.event] ?? l.event}</td>
                    <td className="px-4 py-2">{l.name}</td>
                    <td className="px-4 py-2">{l.email}</td>
                    <td className="px-4 py-2">{l.district || "—"}</td>
                    <td className="px-4 py-2">{l.locationFull}</td>
                    <td className="px-4 py-2"><SourceBadge lead={l} /></td>
                    <td className="px-4 py-2">{l.page}</td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr><td colSpan={9} className="px-4 py-8 text-center text-muted-foreground">No leads in this range.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default LeadsAdminPage;
