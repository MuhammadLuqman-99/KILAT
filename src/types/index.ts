export interface Ebook {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  pages: number;
  rating: number;
  reviews: number;
  author: string;
  features: string[];
  slug: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  author: string;
  publishedAt: string;
  category: string;
  readTime: number;
  slug: string;
}

export interface Prompt {
  id: string;
  title: string;
  description: string;
  category: string;
  prompt: string;
  type: 'free' | 'premium';
  price?: number;
  rating: number;
  uses: number;
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}