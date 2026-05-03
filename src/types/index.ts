export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  metrics?: string;
  imageUrl?: string;
  videoUrl?: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl?: string;
  features: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface SiteConfig {
  calUrl: string;
  calEmbedUrl: string;
  chatApiUrl: string;
  chatWelcomeMessage: string;
  chatPlaceholder: string;
  shopWebhookUrl: string;
  siteUrl: string;
  siteName: string;
  siteDescription: string;
  siteImage: string;
  brandEmail: string;
  brandPhone: string;
}