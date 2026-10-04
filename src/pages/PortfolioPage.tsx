import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";
import SEO from "@/components/SEO";
import PageBackground from "@/components/PageBackground";
import { projects } from "@/data/portfolio";

const PortfolioPage = () => {
  const itemListLd = {
    "@type": "ItemList",
    "@id": "https://saurabhanandseo.com/portfolio#project-list",
    name: "Saurabh Anand Projects",
    description: "Selected projects across AI, SEO, digital marketing, analytics, voice AI and web development.",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: `https://saurabhanandseo.com/portfolio/${project.slug}`,
      description: project.description,
    })),
  };

  const faqLd = {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What projects has Saurabh Anand built?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Saurabh Anand's portfolio includes CampusSphere AI, Google DevFest Ranchi 2026, Sneha AI Calling Agent, Anvya, Crazy SEO Team, a personal portfolio and data analytics dashboard work.",
        },
      },
      {
        "@type": "Question",
        name: "What services and skills are demonstrated in the portfolio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The portfolio demonstrates technical SEO, AI SEO, GEO, AEO, analytics, AI automation, voice AI, digital marketing, web development and data visualization.",
        },
      },
      {
        "@type": "Question",
        name: "Can I hire Saurabh Anand?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Contact Saurabh Anand for SEO, AI search optimization, analytics, digital growth, automation and web projects.",
        },
      },
    ],
  };

  return (
    <div className="relative min-h-screen">
      <SEO
        title="SEO, AI & Digital Marketing Portfolio | Saurabh Anand"
        description="Explore Saurabh Anand's portfolio of SEO, AI search, GEO, AEO, analytics, automation, voice AI, web development and digital marketing projects."
        path="/portfolio"
        keywords="Saurabh Anand portfolio, SEO portfolio, technical SEO projects, AI SEO portfolio, GEO consultant, AEO, LLM optimization, digital marketing projects, AI automation, data analytics portfolio"
        jsonLd={[itemListLd, faqLd]}
      />
      <PageBackground variant="portfolio" />
      <Navbar />
      <main className="pt-24">
        <PortfolioSection />
      </main>
    </div>
  );
};

export default PortfolioPage;
