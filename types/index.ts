export type ProjectCategory = 'ai' | 'web' | 'mobile';

export interface ProjectMetric {
  label: string;
}

export interface ProjectLink {
  label: 'Live' | 'Repo';
  href: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  stack: string[];
  metrics: ProjectMetric[];
  links: ProjectLink[];
  responsibilities: string[];
  challenges: string[];
  outcomes: string[];
  media: { src: string; alt: string }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
}

export interface SkillGroup {
  label: string;
  items: { name: string; icon: string; level?: 'Advanced' | 'Proficient' | 'Working'; }[];
}
