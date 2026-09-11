import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Keep the first paint small; secondary routes and non-critical widgets load on demand.
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ExperiencePage = lazy(() => import("./pages/ExperiencePage"));
const SkillsPage = lazy(() => import("./pages/SkillsPage"));
const NowPage = lazy(() => import("./pages/NowPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const PortfolioProjectPage = lazy(() => import("./pages/PortfolioProjectPage"));
const ExperienceRolePage = lazy(() => import("./pages/ExperienceRolePage"));
const GalleryEventPage = lazy(() => import("./pages/GalleryEventPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const EducationPage = lazy(() => import("./pages/EducationPage"));
const CrawlerCheckPage = lazy(() => import("./pages/CrawlerCheckPage"));
const NewsletterPage = lazy(() => import("./pages/NewsletterPage"));
const DevFestRanchiPage = lazy(() => import("./pages/DevFestRanchiPage"));
const LeadsAdminPage = lazy(() => import("./pages/LeadsAdminPage"));

const CookieConsent = lazy(() => import("./components/CookieConsent"));
const MobileFab = lazy(() => import("./components/MobileFab"));
const AuroraBackground = lazy(() => import("./components/AuroraBackground"));
const AIChatWidget = lazy(() => import("./components/AIChatWidget"));
const WebsiteTour = lazy(() => import("./components/WebsiteTour"));
const StickyHireMe = lazy(() => import("./components/StickyHireMe"));
const ExitIntentPopup = lazy(() => import("./components/ExitIntentPopup"));
const NewsletterPopup = lazy(() => import("./components/NewsletterPopup"));
const FloatingLogoRails = lazy(() => import("./components/FloatingLogoRails"));
import { ThemeProvider } from "./components/ThemeProvider";
import { useVisitorLocation } from "./hooks/useVisitorLocation";
import "@/styles/site-3d.css";
import "@/styles/floating-logo-rails.css";
import "@/styles/hero-reset.css";

const queryClient = new QueryClient();

const VisitorTracker = () => {
  useVisitorLocation();
  return null;
};

const LoadingFallback = () => <div className="min-h-[20vh]" aria-hidden="true" />;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<LoadingFallback />}>
              <AuroraBackground />
              <VisitorTracker />
              <div id="top" className="site-3d-shell">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/experience" element={<ExperiencePage />} />
                  <Route path="/experience/:slug" element={<ExperienceRolePage />} />
                  <Route path="/skills" element={<SkillsPage />} />
                  <Route path="/now" element={<NowPage />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/portfolio/:slug" element={<PortfolioProjectPage />} />
                  <Route path="/gallery" element={<GalleryPage />} />
                  <Route path="/gallery/:slug" element={<GalleryEventPage />} />
                  <Route path="/education" element={<EducationPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/crawler-check" element={<CrawlerCheckPage />} />
                  <Route path="/newsletter" element={<NewsletterPage />} />
                  <Route path="/devfest-ranchi" element={<DevFestRanchiPage />} />
                  <Route path="/services" element={<Navigate to="/" replace />} />
                  <Route path="/services/:slug" element={<Navigate to="/" replace />} />
                  <Route path="/admin/leads" element={<LeadsAdminPage />} />
                  <Route path="/experince" element={<Navigate to="/experience" replace />} />
                  <Route path="/experince/:slug" element={<Navigate to="/experience" replace />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <FloatingLogoRails />
              <MobileFab />
              <StickyHireMe />
              <AIChatWidget />
              <WebsiteTour />
              <ExitIntentPopup />
              <NewsletterPopup />
              <CookieConsent />
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
