export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
  features: string[];
  highlight?: boolean;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
  avatar?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface CelebrityWork {
  id: string;
  name: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
}

export interface PortfolioItem {
  id: string;
  image: string;
  title: string;
  category: string;
  alt: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  stat?: string;
  statLabel?: string;
}
