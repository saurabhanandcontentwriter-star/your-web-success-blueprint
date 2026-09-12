create extension if not exists pgcrypto;

create table if not exists public.site_knowledge (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  url text not null,
  content text not null,
  keywords text not null default '',
  active boolean not null default true,
  updated_at timestamptz not null default now(),
  search_vector tsvector generated always as (
    to_tsvector('simple', coalesce(title, '') || ' ' || coalesce(content, '') || ' ' || coalesce(keywords, ''))
  ) stored
);

create index if not exists site_knowledge_search_idx
  on public.site_knowledge using gin (search_vector);

alter table public.site_knowledge enable row level security;

-- Knowledge is read by the server-side chat function only. No public browser policy is created.

do $$
begin
  if not exists (select 1 from pg_trigger where tgname = 'site_knowledge_updated_at') then
    create or replace function public.set_site_knowledge_updated_at()
    returns trigger
    language plpgsql
    as $$fn$$
    begin
      new.updated_at = now();
      return new;
    end;
    $$fn$$;

    create trigger site_knowledge_updated_at
      before update on public.site_knowledge
      for each row execute function public.set_site_knowledge_updated_at();
  end if;
end
$$;

insert into public.site_knowledge (slug, title, url, content, keywords) values
('home', 'Home — Saurabh Anand', '/', 'The main portfolio homepage presents Saurabh Anand as an SEO, digital marketing, data analytics, AI automation and vibe-coding professional. It highlights his profile, capabilities, selected work, credibility, current focus, tools, contact options and AI portfolio assistant.', 'home portfolio SEO digital marketing data analytics AI automation vibe coding'),
('about', 'About Saurabh Anand', '/about', 'The About page explains Saurabh Anand’s professional profile, positioning and approach to combining SEO, data, content, AI automation and growth. Visitors can use it to understand his background and working style.', 'about profile professional SEO AI growth'),
('experience', 'Experience', '/experience', 'The Experience page contains Saurabh’s professional timeline. Current verified roles include SEO Executive at TripzyGo from Mar 2024 to Aug 2026, SEO Analyst at Guest Blogging Technology from Mar 2022 to Mar 2023, and Digital Marketing Intern at TripzyGo International. Tools and achievements include Google Analytics, Search Console, Ahrefs, Semrush, Moz, BuzzStream, Screaming Frog, Canva, Hootsuite and WordPress.', 'experience career jobs TripzyGo Guest Blogging Technology SEO Executive SEO Analyst Digital Marketing Intern'),
('experience-tripzygo', 'TripzyGo SEO Executive Experience', '/experience/tripzygo-seo-executive', 'At TripzyGo, Saurabh led organic growth work including technical SEO audits, crawl and indexation improvements, Core Web Vitals, keyword research, content briefs, on-page optimization and coordination with developers and content teams. The portfolio data records 80% organic traffic growth within 6 months, 500+ high-intent landing pages optimized, advanced schema implementation and a 50+ article monthly SEO content calendar.', 'TripzyGo SEO technical SEO Core Web Vitals Search Console Ahrefs Semrush content'),
('experience-guest-blogging', 'Guest Blogging Technology SEO Analyst Experience', '/experience/guest-blogging-technology-seo-analyst', 'At Guest Blogging Technology, Saurabh focused on link building, digital PR, outreach, backlink health, toxic-link monitoring and weekly SEO reporting. Verified portfolio data records 200+ high-DA backlinks, a 15-point average Domain Authority increase, 30% lower bounce rate through content UX optimization and weekly stakeholder reporting.', 'Guest Blogging Technology SEO Analyst link building digital PR outreach backlinks Moz BuzzStream Screaming Frog'),
('experience-internship', 'TripzyGo International Digital Marketing Internship', '/experience/tripzygo-international-intern', 'During his Digital Marketing Intern experience at TripzyGo International, Saurabh supported keyword research, on-page SEO, legacy content refreshes, social media publishing and email marketing. The verified portfolio records a 70% blog traffic increase, 20% social engagement growth, 100+ optimized legacy posts and support for 3 email campaigns.', 'TripzyGo International internship digital marketing WordPress Canva Hootsuite email marketing'),
('skills', 'Skills', '/skills', 'The Skills page covers technical SEO, on-page SEO, off-page SEO, content strategy, link building, organic growth, AI marketing, social media analytics, Google Analytics, GA4, Google Search Console, keyword research, competitive analysis, data analytics and AI automation. It is designed to help recruiters and clients quickly evaluate capabilities.', 'skills technical SEO on-page off-page content strategy link building GA4 Search Console analytics AI automation'),
('now', 'Now', '/now', 'The Now page communicates what Saurabh is currently focused on, including SEO growth, data analytics, AI automation, vibe coding, community activity and new professional opportunities. It is the current-state page of the portfolio.', 'now current focus AI automation data analytics SEO vibe coding opportunities'),
('portfolio', 'Portfolio / Selected Work', '/portfolio', 'The Portfolio page presents selected SEO and growth projects. Verified projects include TripzyGo E-commerce SEO Overhaul, Guest Blogging Tech SaaS Content Authority, and Local SEO for a multi-location brand.', 'portfolio case studies projects SEO growth'),
('portfolio-tripzygo', 'TripzyGo E-commerce SEO Overhaul', '/portfolio/tripzygo-ecommerce-seo', 'TripzyGo is described as a travel booking platform. The SEO case study covers a technical and content overhaul: crawlability, indexation, Core Web Vitals, intent-aligned destination and package pages, Tour/Product/Breadcrumb schema and topic clusters. Recorded results include +120% organic traffic in 6 months, 500+ landing pages optimized and top-3 rankings on dozens of competitive destination terms.', 'TripzyGo ecommerce SEO technical SEO content strategy schema Core Web Vitals +120% traffic'),
('portfolio-guest-blogging', 'Guest Blogging Tech SaaS Content Authority', '/portfolio/guest-blogging-tech-saas', 'This SaaS case study focuses on authority content, topic clusters, commercial-intent pillar pages, contextual backlink outreach, on-page SEO and funnel CTAs. Recorded results include +85% qualified leads quarter over quarter, 200+ contextual backlinks from DA 50+ sites and a 15-point average Domain Authority lift across the portfolio.', 'Guest Blogging Tech SaaS content authority topic clusters backlinks leads'),
('portfolio-local-seo', 'Local SEO for Multi-location Brand', '/portfolio/local-seo-multi-location', 'This local SEO case study covers 50+ Google Business Profiles, NAP standardization, city-level landing pages, GBP categories/services/posts, review workflows and LocalBusiness schema. Recorded results include +200% local search visibility, Map Pack rankings across 40+ cities and increased direction requests and calls.', 'local SEO Google Business Profile GBP NAP Map Pack LocalBusiness schema'),
('gallery', 'Gallery', '/gallery', 'The Gallery page showcases visual highlights from Saurabh’s professional and community work, including AI, DevFest and event-related media. Individual gallery items can be opened through dynamic gallery event routes.', 'gallery events photos DevFest AI community'),
('gallery-events', 'Gallery Event Pages', '/gallery/:slug', 'Dynamic gallery event pages provide detail for individual event or project galleries. The current repository includes DevFest and AI-summit related visual assets and event media.', 'gallery event DevFest AI summit photos'),
('education', 'Education', '/education', 'The Education page presents Saurabh’s education and learning background with dedicated visual assets for degree, books and certification. It is intended to give recruiters and collaborators a concise view of academic and continuous-learning context.', 'education degree certification learning'),
('contact', 'Contact Saurabh Anand', '/contact', 'The Contact page is for Data Analyst roles, SEO and Digital Marketing consulting, AI automation, freelance projects, collaborations and hiring discussions. Current public contact email is saurabhanandshahi@gmail.com. Public LinkedIn is https://www.linkedin.com/in/saurabhanandseo/. Location shown on the page is New Delhi, India. The contact form validates name, email and message and logs the lead before opening the email client.', 'contact hire email consulting Data Analyst SEO AI automation freelance LinkedIn'),
('newsletter', 'Newsletter', '/newsletter', 'The Newsletter page is the portfolio’s subscription and update area for people who want ongoing insights or updates from Saurabh. It is separate from the contact page.', 'newsletter subscribe updates'),
('devfest-ranchi', 'Google DevFest Ranchi 2026 — Community 2.0', '/devfest-ranchi', 'DevFest Ranchi 2026 is presented as Community 2.0 by GDG Ranchi. The portfolio page currently lists 31 October 2026, 9:00 AM IST, at BIT Mesra Auditorium, Ranchi. It covers AI & Gemini, Cloud & Firebase, Web & App Development, Community & Networking, speakers, schedule, partners, venue, FAQs and registration. The page also includes a countdown and animated Google-inspired background. Registration points to the GDG Ranchi community page. Google’s official DevFest program runs October 1 through December 31, 2026 and describes DevFest as a community-driven technology conference series for developers, AI builders and tech enthusiasts.', 'DevFest Ranchi 2026 Community 2.0 GDG Ranchi BIT Mesra AI Gemini Cloud Firebase Web October 31 2026'),
('crawler-check', 'Crawler Check', '/crawler-check', 'The Crawler Check page is a technical SEO and AI-crawler inspection utility within the portfolio. It helps inspect whether important page information is visible and structured for crawlers and AI discovery.', 'crawler check technical SEO AI crawler'),
('admin-leads', 'Leads Admin', '/admin/leads', 'The Leads Admin page is an internal dashboard for reviewing lead activity captured by the portfolio’s lead logging system. It is not a public marketing page.', 'admin leads dashboard internal'),
('contact-details', 'Canonical Contact Details', 'site-wide', 'Use the current contact details consistently across the chatbot and portfolio: Email: saurabhanandshahi@gmail.com. LinkedIn: https://www.linkedin.com/in/saurabhanandseo/. Location: New Delhi, India. The chatbot must never invent a different email address.', 'email contact LinkedIn Saurabh Anand'),
('devfest-faq', 'DevFest Ranchi 2026 FAQ Knowledge', '/devfest-ranchi#faq', 'For DevFest questions: the event is for developers, students, designers, founders, creators and technology enthusiasts. The page describes sessions around Google technologies, AI & Gemini, Cloud, Firebase, Web and app development, plus networking and community activities. The listed venue is BIT Mesra Auditorium, Ranchi, on 31 October 2026.', 'DevFest FAQ attendees venue schedule registration'),
('site-routes', 'Complete Portfolio Route Map', 'site-wide', 'Public portfolio routes include /, /about, /experience, /experience/:slug, /skills, /now, /portfolio, /portfolio/:slug, /gallery, /gallery/:slug, /education, /contact, /crawler-check, /newsletter and /devfest-ranchi. /services redirects to the homepage, /services/:slug redirects to the homepage, and typo routes /experince and /experince/:slug redirect to /experience. /admin/leads is an internal leads dashboard.', 'routes pages navigation sitemap site map')
on conflict (slug) do update set
  title = excluded.title,
  url = excluded.url,
  content = excluded.content,
  keywords = excluded.keywords,
  active = true,
  updated_at = now();
