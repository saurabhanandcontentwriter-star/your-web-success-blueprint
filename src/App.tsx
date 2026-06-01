import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import CookieConsent from "./components/CookieConsent";
import MobileFab from "./components/MobileFab";
import AuroraBackground from "./components/AuroraBackground";
import AIChatWidget from "./components/AIChatWidget";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
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

            {/* 404 fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <MobileFab />
          <AIChatWidget />
          <CookieConsent />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
