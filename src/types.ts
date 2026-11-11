export type PageType = 'home' | 'services' | 'why-us' | 'process' | 'work' | 'faq' | 'contact';

export type ServiceCategory = 'all' | 'branding' | 'web' | 'marketing-it' | 'advertising-pr' | 'activations-events' | 'software-ai' | 'strategy-consulting';

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  category: ServiceCategory;
  iconName: string;
  deliverables: string[];
  estimatedTimeline: string;
  startingPrice: string;
  highlight?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  serviceCategory: string;
  serviceName: string;
  year: string;
  summary: string;
  metric: string;
  metricLabel: string;
  image: string;
  liveUrl?: string;
  tags: string[];
  challenge: string;
  solution: string;
  results: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarText: string;
  metricHighlight: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'process' | 'pricing' | 'technical';
}

export interface ProcessStep {
  number: string;
  title: string;
  phase: string;
  description: string;
  activities: string[];
  deliverable: string;
  duration: string;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  iconName: string;
}
