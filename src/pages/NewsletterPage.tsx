import Navbar from "@/components/Navbar";
import RealImage3D from "@/components/RealImage3D";
import newsletterVisual from "@/assets/gallery/ai-summit-invite.jpg";
import SEO from "@/components/SEO";
import NewsletterPopup from "@/components/NewsletterPopup";
import spaceBg from "@/assets/space-bg.jpg";

const NewsletterPage = () => (
  <div className="relative min-h-screen">
    <SEO
      title="AI SEO Newsletter | Saurabh Anand"
      description="Join 10,000+ professionals getting weekly AI SEO, GEO, LLM optimization, automation, and agentic AI insights."
      path="/newsletter"
    />
    <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: `url(${spaceBg})` }} />
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    <Navbar />
      <div className="container mx-auto px-5 md:px-6 pt-6"><RealImage3D src={newsletterVisual} alt="AI & technology insights" eyebrow="Newsletter · Real community" title="AI & technology insights" className="max-w-4xl mx-auto h-[220px] md:h-[300px]" /></div>
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-10">
          <p className="section-label mb-2">Newsletter</p>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-3">The Future of Search, in your inbox</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Weekly insights on AI SEO, GEO, LLM Optimization, Automation Systems, Agentic AI and what's next in Google, ChatGPT, Gemini, Claude & Perplexity.
          </p>
        </div>
        <div className="flex justify-center">
          <NewsletterPopup embedded />
        </div>
      </div>
    </main>
  </div>
);

export default NewsletterPage;
