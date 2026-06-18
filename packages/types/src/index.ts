export interface Project {
  id: string;
  name: string;
  description: { es: string; en: string };
  category: 'ai' | 'web' | 'mobile' | 'learning';
  tech: string[];
  githubUrl: string;
  deployUrl?: string;
  featured?: boolean;
  year: number;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'mobile' | 'tools' | 'ai';
  color: string;
}

export type Theme = 'light' | 'dark' | 'system';
export type Language = 'es' | 'en';

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
