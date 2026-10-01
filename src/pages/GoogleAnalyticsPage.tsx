import { BarChart3, ExternalLink, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";

const GOOGLE_ANALYTICS_URL = "https://analytics.google.com/analytics/web/#/a244846657p531200069/reports/intelligenthome";
const SEARCH_CONSOLE_URL = "https://search.google.com/search-console?resource_id=https%3A%2F%2Fsaurabhanandseo.com%2F";

const GoogleAnalyticsPage = () => (
  <div className="min-h-screen bg-background">
    <SEO title="Google Analytics & Search Console — Admin" description="Quick access to Google Analytics and Google Search Console for saurabhanandseo.com." noindex />
    <Navbar />
    <main className="container mx-auto px-4 py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        <div>
          <p className="text-sm font-medium text-primary">Website Analytics</p>
          <h1 className="font-display text-3xl font-bold">Google Analytics & Search Console</h1>
          <p className="mt-2 text-muted-foreground">Open the official Google dashboards to review visitors, engagement, search clicks, impressions, queries, pages and indexing performance.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Card className="p-6">
            <div className="mb-4 flex items-center gap-3">
              <BarChart3 className="h-6 w-6 text-primary" />
              <div>
                <h2 className="font-semibold">Google Analytics</h2>
                <p className="text-sm text-muted-foreground">Visitors & website behaviour</p>
              </div>
            </div>
            <ul className="mb-5 space-y-2 text-sm text-muted-foreground">
              <li>• Users and sessions</li>
              <li>• Pages viewed</li>
              <li>• Engagement / time spent</li>
              <li>• Traffic sources and events</li>
            </ul>
            <Button asChild className="w-full">
              <a href={GOOGLE_ANALYTICS_URL} target="_blank" rel="noopener noreferrer">
                Open Google Analytics <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </Card>

          <Card className="p-6">
            <div className="mb-4 flex items-center gap-3">
              <Search className="h-6 w-6 text-primary" />
              <div>
                <h2 className="font-semibold">Google Search Console</h2>
                <p className="text-sm text-muted-foreground">Google Search performance</p>
              </div>
            </div>
            <ul className="mb-5 space-y-2 text-sm text-muted-foreground">
              <li>• Search clicks and impressions</li>
              <li>• Queries / keywords</li>
              <li>• Pages and CTR</li>
              <li>• Average position and indexing</li>
            </ul>
            <Button asChild variant="outline" className="w-full">
              <a href={SEARCH_CONSOLE_URL} target="_blank" rel="noopener noreferrer">
                Open Search Console <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </main>
  </div>
);

export default GoogleAnalyticsPage;
