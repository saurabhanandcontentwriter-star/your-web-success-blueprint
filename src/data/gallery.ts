import aiSummitFlags from "@/assets/gallery/ai-summit-flags.png";
import aiSummitFountain from "@/assets/gallery/ai-summit-fountain.jpg";
import aiSummitBanner from "@/assets/gallery/ai-summit-banner.jpg";
import aiSummitInvite from "@/assets/gallery/ai-summit-invite.jpg";
import devfestStage from "@/assets/gallery/devfest-stage.jpg";
import devfestVenue from "@/assets/gallery/devfest-venue.jpg";
import devfestFriend from "@/assets/gallery/devfest-friend.jpg";
import devfestSpeaker from "@/assets/gallery/devfest-speaker.jpg";

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
    subtitle: "Google Developer Groups · Ranchi",
    date: "2025",
    about:
      "Joined Google DevFest Ranchi 2025, a community-driven event by GDG covering AI, web, cloud and mobile, with talks from Google Developer Experts and industry speakers.",
    photos: [
      { src: devfestVenue, alt: "Google DevFest 2025 - Main Stage" },
      { src: devfestStage, alt: "Google DevFest 2025 - Sponsor Wall" },
      { src: devfestFriend, alt: "Google DevFest 2025 - Networking" },
      { src: devfestSpeaker, alt: "Google DevFest 2025 - With Speaker" },
    ],
  },
];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);
