import aiSummitFlags from "@/assets/gallery/ai-summit-flags.png";
import aiSummitFountain from "@/assets/gallery/ai-summit-fountain.jpg";
import aiSummitBanner from "@/assets/gallery/ai-summit-banner.jpg";
import aiSummitInvite from "@/assets/gallery/ai-summit-invite.jpg";
import devfestStage from "@/assets/gallery/devfest-stage.jpg";
import devfestVenue from "@/assets/gallery/devfest-venue.jpg";
import devfestFriend from "@/assets/gallery/devfest-friend.jpg";
import devfestSpeaker from "@/assets/gallery/devfest-speaker.jpg";
import devfestCommunity1 from "@/assets/gallery/devfest-community-1.webp";
import devfestCommunity2 from "@/assets/gallery/devfest-community-2.webp";
import devfestCommunity3 from "@/assets/gallery/devfest-community-3.webp";
import devfestCommunity4 from "@/assets/gallery/devfest-community-4.webp";
import devfestCommunity5 from "@/assets/gallery/devfest-community-5.webp";

export interface EventPhoto {
  src: string;
  alt: string;
}

export interface GalleryEvent {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  about: string;
  photos: EventPhoto[];
}

export const events: GalleryEvent[] = [
  {
    slug: "ai-impact-summit-india-2026",
    title: "AI Impact Summit India 2026",
    subtitle: "Central Government Initiative · Bharat Mandapam, New Delhi",
    date: "February 2026",
    about:
      "Attended the AI Impact Summit India 2026 at Bharat Mandapam, a flagship initiative bringing together global AI leaders, policy makers and industry to shape responsible AI adoption.",
    photos: [
      { src: aiSummitInvite, alt: "AI Impact Summit 2026 - Official Delegate Invitation" },
      { src: aiSummitFlags, alt: "AI Impact Summit 2026 - With International Flags" },
      { src: aiSummitFountain, alt: "AI Impact Summit 2026 - At Bharat Mandapam" },
      { src: aiSummitBanner, alt: "AI Impact Summit 2026 - Event Banner" },
    ],
  },
  {
    slug: "google-devfest-ranchi-2025",
    title: "Google DevFest Ranchi 2025",
    subtitle: "Google Developer Groups · Ranchi · Community Moments",
    date: "2025",
    about:
      "Joined Google DevFest Ranchi 2025, a community-driven event by GDG covering AI, web, cloud and mobile, with talks, stage sessions, networking and community celebration.",
    photos: [
      { src: devfestVenue, alt: "Google DevFest Ranchi 2025 - Main Stage" },
      { src: devfestStage, alt: "Google DevFest Ranchi 2025 - Sponsor Wall" },
      { src: devfestFriend, alt: "Google DevFest Ranchi 2025 - Networking" },
      { src: devfestSpeaker, alt: "Google DevFest Ranchi 2025 - Speaker Moment" },
      { src: devfestCommunity1, alt: "DevFest Ranchi 2025 - Web Walo Ki Baithak stage moment" },
      { src: devfestCommunity2, alt: "DevFest Ranchi 2025 - Community speaker session" },
      { src: devfestCommunity3, alt: "DevFest Ranchi 2025 - Live music and community celebration" },
      { src: devfestCommunity4, alt: "DevFest Ranchi 2025 - Developer speaker on stage" },
      { src: devfestCommunity5, alt: "DevFest Ranchi 2025 - Venue entrance and community event setup" },
    ],
  },
];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);
