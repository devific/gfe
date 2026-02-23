export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  description: string;
  thumbnail: string;
  heroImage: string;
  objective: string;
  strategy: string;
  execution: string;
  results: string;
  gallery: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  category: 'Campaign' | 'Celebrity' | 'Brand' | 'Event';
  title: string;
}
