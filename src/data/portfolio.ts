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
    slug: "crazy-seo-team",
    title: "Crazy SEO Team",
    company: "Crazy SEO Team",
    stat: "SEO + AI",
    description:
      "A digital growth project covering technical SEO, AI SEO, content strategy, analytics, automation and modern web execution.",
    tags: ["Technical SEO", "AI SEO", "GEO", "Automation", "Web Development"],
    image: "https://image.thum.io/get/width/1200/crop/760/noanimate/https://www.crazyseoteam.in/",
    url: "https://www.crazyseoteam.in/",
    overview:
      "Crazy SEO Team brings together SEO strategy, AI-assisted search optimization, content systems, analytics, automation and high-performance web execution.",
    challenge:
      "Build a practical digital growth ecosystem that connects search visibility, content, AI workflows and modern website experiences.",
    approach: [
      "Applied technical and on-page SEO principles across web experiences.",
      "Connected AI SEO, prompt engineering and content strategy with growth workflows.",
      "Used analytics, automation and modern web development to support execution.",
      "Focused on discoverability, performance and clear digital experiences.",
    ],
    results: [
      "Built a dedicated SEO and digital growth ecosystem",
      "Connected SEO, AI, analytics and automation into practical workflows",
      "Created reusable systems for content, search and web execution",
    ],
  },
  {
    slug: "anvya",
    title: "Anvya — A Creative Digital Experience",
    company: "Created by Saurabh Anand",
    stat: "CREATIVE × TECHNOLOGY",
    description:
      "A creative digital project bringing together web thinking, SEO, AI, technology and a strong focus on digital experience.",
    tags: ["Creative Technology", "SEO", "AI", "Web Development", "Digital Experience"],
    image: "https://image.thum.io/get/width/1200/crop/760/noanimate/https://www.crazyseoteam.in/anvya",
    url: "https://www.crazyseoteam.in/anvya",
    overview:
      "Anvya is a creative digital project shaped around visual thinking, technology, discoverability and user experience.",
    challenge:
      "Create a digital experience that feels intentional and contemporary rather than relying on a generic website formula.",
    approach: [
      "Combined creative thinking with modern web and digital-product principles.",
      "Kept SEO and discoverability in mind alongside the visual experience.",
      "Focused on clarity, interaction and a memorable digital presence.",
      "Explored how AI, technology and creativity can work together in a modern web project.",
    ],
    results: [
      "Created a dedicated Anvya digital experience",
      "Expressed a creative and technology-focused approach",
      "Connected creativity, SEO, AI and web thinking in one project story",
    ],
  },
  {
    slug: "campussphere-ai",
    title: "CampusSphere AI",
    company: "Academic Project",
    stat: "AI + AUTOMATION",
    description:
      "An academic project focused on transforming academic administration through unified digital services, automation, analytics and responsible AI.",
    tags: ["AI", "Automation", "Analytics", "Digital Administration", "Responsible AI"],
    image: "/og-thumbnail.jpg",
    url: "https://campus-ai-psi-eosin.vercel.app/",
    overview:
      "CampusSphere AI is an academic project designed around unified digital services, administrative automation, analytics and responsible AI for academic environments.",
    challenge:
      "Bring fragmented academic administration workflows together into a more unified digital system while keeping automation, analytics and responsible AI at the center.",
    approach: [
      "Designed a unified concept for academic digital services and administration.",
      "Explored automation for repetitive academic and administrative workflows.",
      "Included analytics to support data-driven academic operations and decision-making.",
      "Applied responsible AI principles to the project architecture and use cases.",
    ],
    results: [
      "Developed the CampusSphere AI academic project concept",
      "Combined digital services, automation and analytics in one system",
      "Included responsible AI as a core project principle",
    ],
  },
  {
    slug: "google-devfest-ranchi-2026",
    title: "Google DevFest Ranchi 2026",
    company: "GDG Ranchi",
    stat: "COMMUNITY × AI",
    description:
      "Google DevFest Ranchi 2026 — Community 2.0, bringing developers and technology enthusiasts together for Google technologies, AI & Gemini, Cloud and developer ecosystem sessions.",
    tags: ["Google DevFest", "Community", "AI & Gemini", "Cloud", "Developer Ecosystem"],
    image: "https://image.thum.io/get/width/1200/crop/760/noanimate/https://saurabhanandseo.com/devfest-ranchi",
    url: "/devfest-ranchi",
    overview:
      "A portfolio showcase for Google DevFest Ranchi 2026 at BIT Mesra Auditorium, Ranchi, highlighting the Community 2.0 theme and developer-focused technology sessions.",
    challenge:
      "Present the event, community focus, schedule context and registration pathway as a polished portfolio project.",
    approach: [
      "Created a dedicated DevFest Ranchi event experience.",
      "Added countdown and event status handling for the 31 October 2026 event.",
      "Highlighted AI with Gemini, Cloud and the wider Google developer ecosystem.",
      "Connected visitors to the dedicated DevFest page and GDG Ranchi registration.",
    ],
    results: [
      "Dedicated DevFest Ranchi 2026 portfolio experience",
      "Community 2.0 event storytelling and interactive countdown",
      "Clear pathway to event information and GDG Ranchi registration",
    ],
  },
  {
    slug: "sneha-ai-calling-agent",
    title: "Sneha — AI Calling Agent",
    company: "Crazy SEO Team",
    stat: "AI × VOICE",
    description:
      "An AI-powered conversational calling agent for Crazy SEO Team that can handle calls, understand requirements, explain services and collect lead details.",
    tags: ["AI Agent", "Voice AI", "Conversational AI", "Lead Generation", "Automation"],
    image: "https://image.thum.io/get/width/1200/crop/760/noanimate/https://www.crazyseoteam.in/",
    url: "https://www.crazyseoteam.in/",
    overview:
      "Sneha is a conversational AI calling agent created for Crazy SEO Team to represent the team during voice interactions and support lead qualification.",
    challenge:
      "Create a natural voice-first experience that can understand a caller's requirements, explain services and capture useful lead information.",
    approach: [
      "Designed a conversational voice-agent experience around business enquiries.",
      "Structured the agent to understand requirements and explain relevant services.",
      "Included lead-detail collection as part of the conversation flow.",
      "Connected the agent experience to the Crazy SEO Team digital ecosystem.",
    ],
    results: [
      "Created a dedicated AI calling-agent portfolio project",
      "Voice-first conversational experience for business enquiries",
      "Lead qualification and service explanation through AI conversation",
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
