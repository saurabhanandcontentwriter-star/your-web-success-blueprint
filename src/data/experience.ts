export interface Job {
  slug: string;
  period: string;
  title: string;
  company: string;
  favicon: string;
  tools: string[];
  description: string;
  achievements: string[];
  responsibilities: string[];
}

export const jobs: Job[] = [];

export const getJob = (slug: string) => jobs.find((j) => j.slug === slug);
