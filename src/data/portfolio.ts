import crazySeoImg from "@/assets/crazyseo-site.png";
import campussphereImg from "@/assets/work-campussphere.jpg";
import devfestImg from "@/assets/devfest-bit-mesra.jpg";
import personalImg from "@/assets/saurabh-seo.jpg";
import dataDashboardImg from "@/assets/work-admin-crm.jpg";
import snehaAiCallingAgentImg from "@/assets/sneha-ai-calling-agent-new.jpg";

export interface Project {
  slug: string;
  title: string;
  company: string;
  stat: string;
  description: string;
  tags: string[];
  image: string;
  url: string;
  overview: string;
  challenge: string;
  approach: string[];
  results: string[];
}

export const projects: Project[] = [
  {
    slug: "campussphere-ai",
    title: "CampusSphere AI",
    company: "Academic Project",
    stat: "AI + AUTOMATION",
    description: "A 120-page academic project on unified digital services, automation, analytics and responsible AI for academic administration.",
    tags: ["AI", "Automation", "Education", "Analytics"],
    image: campussphereImg,
    url: "https://campus-ai-psi-eosin.vercel.app/",
    overview: "CampusSphere AI is an academic project designed around unified digital services, administrative automation, analytics and responsible AI.",
    challenge: "Bring fragmented academic administration workflows together into a more unified digital system.",
    approach: [
      "Designed a unified concept for academic digital services and administration.",
      "Explored automation for repetitive academic workflows.",
      "Included analytics for data-driven academic operations.",
      "Applied responsible AI principles to the project architecture.",
    ],
    results: ["Developed the CampusSphere AI academic project", "Combined digital services, automation and analytics", "Included responsible AI as a core project principle"],
  },
  {
    slug: "google-devfest-ranchi-2026",
    title: "Google DevFest Ranchi 2026",
    company: "GDG Ranchi",
    stat: "COMMUNITY + AI",
    description: "Event website with countdown, speaker listing, agenda and Community 2.0 storytelling for Google DevFest Ranchi 2026.",
    tags: ["React", "Event Management", "UI/UX", "AI & Gemini"],
    image: devfestImg,
    url: "/devfest-ranchi",
    overview: "A portfolio showcase for Google DevFest Ranchi 2026 at BIT Mesra Auditorium, Ranchi.",
    challenge: "Present the event, community focus and technology sessions as a polished digital experience.",
    approach: [
      "Created a dedicated DevFest Ranchi event experience.",
      "Added countdown and event status handling.",
      "Highlighted AI with Gemini, Cloud and the Google developer ecosystem.",
      "Connected visitors to event information and registration.",
    ],
    results: ["Dedicated DevFest Ranchi 2026 experience", "Community 2.0 event storytelling", "Clear pathway to event information and registration"],
  },
  {
    slug: "sneha-ai-calling-agent",
    title: "Sneha — AI Calling Agent",
    company: "Crazy SEO Team",
    stat: "AI + VOICE",
    description: "A voice-first conversational system designed to understand requirements, explain services and collect leads.",
    tags: ["ElevenLabs", "AI", "Automation", "Voice AI"],
    image: snehaAiCallingAgentImg,
    url: "https://www.crazyseoteam.in/",
    overview: "Sneha is a conversational AI calling agent created for Crazy SEO Team.",
    challenge: "Create a natural voice-first experience for business enquiries and lead qualification.",
    approach: [
      "Designed a conversational voice-agent experience around business enquiries.",
      "Structured the agent to understand requirements and explain relevant services.",
      "Included lead-detail collection in the conversation flow.",
      "Connected the agent experience to the Crazy SEO Team ecosystem.",
    ],
    results: ["Dedicated AI calling-agent project", "Voice-first conversational experience", "Lead qualification through AI conversation"],
  },
  {
    slug: "anvya",
    title: "Anvya — Idea Sharing Platform",
    company: "Saurabh Anand",
    stat: "AI + COMMUNITY",
    description: "An AI-powered idea discovery and sharing experience built around search, learning, community and turning ideas into impact.",
    tags: ["AI", "Community", "Web Development", "Digital Experience"],
    image: "https://media.licdn.com/dms/image/v2/D4D12AQFrfG-HoCbowA/article-cover_image-shrink_720_1280/B4DaDEnjx.IoAQ-/0/1790005105986?e=2147483647&t=8E007zC1n-orewm8GwNJp1AiGDfPnsBToj8MU0LhJpc&v=beta",
    url: "https://www.crazyseoteam.in/anvya/",
    overview: "Anvya is an idea-sharing platform where people can publish ideas, explore perspectives, connect through creativity and turn ideas into impact.",
    challenge: "Create a modern digital experience that makes sharing, discovering and discussing ideas simple and engaging.",
    approach: [
      "Designed the experience around discover, learn, share and grow.",
      "Combined community features with AI-powered idea discovery.",
      "Focused on search, clarity and memorable digital interactions.",
      "Connected the product story to creativity, technology and collaboration.",
    ],
    results: ["Dedicated Anvya digital experience", "Idea discovery and community-focused workflow", "AI-powered positioning for modern knowledge sharing"],
  },
  {
    slug: "crazy-seo-team",
    title: "Crazy SEO Team",
    company: "Crazy SEO Team",
    stat: "SEO + AI",
    description: "A full-service digital marketing agency website with SEO, AI and automation systems.",
    tags: ["Next.js", "SEO", "Digital Marketing", "Automation"],
    image: crazySeoImg,
    url: "https://www.crazyseoteam.in/",
    overview: "Crazy SEO Team brings together SEO strategy, AI-assisted search optimization, content systems, analytics and automation.",
    challenge: "Build a practical digital growth ecosystem that connects search visibility, content, AI workflows and web execution.",
    approach: ["Applied technical and on-page SEO principles.", "Connected AI SEO and content strategy with growth workflows.", "Used analytics and automation to support execution.", "Focused on discoverability, performance and clear digital experiences."],
    results: ["Built a dedicated SEO and digital growth ecosystem", "Connected SEO, AI, analytics and automation", "Created reusable growth workflows"],
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    company: "Saurabh Anand",
    stat: "CREATIVE + TECHNOLOGY",
    description: "Personal portfolio showcasing SEO, digital marketing, web development, AI, experience and projects.",
    tags: ["React", "Framer Motion", "SEO", "Web Development"],
    image: personalImg,
    url: "https://saurabhanandseo.com/",
    overview: "A personal portfolio connecting SEO, AI, digital marketing, analytics and modern web development.",
    challenge: "Create a memorable personal digital presence without relying on a generic resume layout.",
    approach: ["Combined professional storytelling with a modern interactive interface.", "Organized skills, projects and experience into clear journeys.", "Focused on performance, SEO and accessible interactions."],
    results: ["Modern personal portfolio experience", "Clear showcase of skills and projects", "SEO-focused professional presence"],
  },
  {
    slug: "data-analytics-dashboard",
    title: "Data Analytics Dashboard",
    company: "Analytics Project",
    stat: "DATA + ANALYTICS",
    description: "Interactive Power BI-style dashboard concept for business insights, data modeling and decision support.",
    tags: ["Power BI", "Data Analysis", "DAX", "Analytics"],
    image: dataDashboardImg,
    url: "/portfolio/data-analytics-dashboard",
    overview: "A data analytics dashboard concept focused on business insights and visual decision support.",
    challenge: "Turn scattered business data into a clear, actionable analytical interface.",
    approach: ["Structured business metrics into dashboard views.", "Used data modeling and DAX-oriented thinking.", "Focused on visual storytelling and decision-ready insights."],
    results: ["Business dashboard concept", "Data modeling and visualization workflow", "Decision-focused analytics presentation"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
