import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import SkillsPage from "./pages/SkillsPage";
import NowPage from "./pages/NowPage";
import PortfolioPage from "./pages/PortfolioPage";
import PortfolioProjectPage from "./pages/PortfolioProjectPage";
import ExperienceRolePage from "./pages/ExperienceRolePage";
import GalleryEventPage from "./pages/GalleryEventPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import EducationPage from "./pages/EducationPage";
import CrawlerCheckPage from "./pages/CrawlerCheckPage";
import NewsletterPage from "./pages/NewsletterPage";
import CookieConsent from "./components/CookieConsent";
import MobileFab from "./components/MobileFab";
import AuroraBackground from "./components/AuroraBackground";
import AIChatWidget from "./components/AIChatWidget";
import WebsiteTour from "./components/WebsiteTour";
import StickyHireMe from "./components/StickyHireMe";
import WhatsAppFab from "./components/WhatsAppFab";
import ExitIntentPopup from "./components/ExitIntentPopup";
import NewsletterPopup from "./components/NewsletterPopup";
import { ThemeProvider } from "./components/ThemeProvider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuroraBackground />
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

            {/* Common typo redirects */}
            <Route path="/experince" element={<Navigate to="/experience" replace />} />
            <Route path="/experince/:slug" element={<Navigate to="/experience" replace />} />

            {/* 404 fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <MobileFab />
          <StickyHireMe />
          <WhatsAppFab />
          <AIChatWidget />
          <WebsiteTour />
          <ExitIntentPopup />
          <NewsletterPopup />
          <CookieConsent />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
