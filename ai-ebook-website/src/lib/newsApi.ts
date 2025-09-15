// NewsAPI service for fetching AI-related news
// Free tier: 1000 requests per month for development

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  source: {
    name: string;
  };
  author: string | null;
}

interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
}

// Get API key from environment variables
const API_KEY = process.env.NEWSAPI_KEY || 'demo-key';
const BASE_URL = 'https://newsapi.org/v2';

export async function fetchAINews(): Promise<NewsArticle[]> {
  try {
    // Search for AI-related news in English
    const response = await fetch(
      `${BASE_URL}/everything?q=(artificial intelligence OR AI OR machine learning OR ChatGPT OR OpenAI OR Google AI OR Meta AI)&language=en&sortBy=publishedAt&pageSize=20&apiKey=${API_KEY}`,
      {
        headers: {
          'User-Agent': 'KILAT-AI-Website/1.0'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: NewsApiResponse = await response.json();

    if (data.status !== 'ok') {
      throw new Error('API response not OK');
    }

    // Filter out articles with missing critical data
    return data.articles.filter(article =>
      article.title &&
      article.description &&
      article.title !== '[Removed]' &&
      article.description !== '[Removed]'
    );

  } catch (error) {
    console.error('Error fetching AI news:', error);

    // Return fallback static news data
    return getFallbackNews();
  }
}

// Fallback news data for when API is unavailable
function getFallbackNews(): NewsArticle[] {
  return [
    {
      title: "Rahsia AI Automation yang Mengubah Bisnes Malaysia: Panduan Lengkap KILAT",
      description: "Temui bagaimana syarikat Malaysia meningkatkan produktiviti 300% dengan tools AI yang betul. Panduan eksklusif dari pakar AI Malaysia untuk mentransformasi bisnes anda dengan ChatGPT, automation, dan strategi AI terkini.",
      url: "/ebooks/ai-business-automation-mastery",
      urlToImage: null,
      publishedAt: new Date().toISOString(),
      source: { name: "KILAT" },
      author: "Muhammad Luqman & Muhammad Aniq Qawiem"
    },
    {
      title: "5 Tools AI Percuma yang Wajib Digunakan Entrepreneur Malaysia 2025",
      description: "KILAT dedahkan tools AI percuma yang digunakan 1000+ entrepreneur Malaysia untuk automate bisnes mereka. Termasuk ChatGPT advanced prompts, Canva AI, dan tools automation yang boleh jimat 20 jam seminggu.",
      url: "/prompts",
      urlToImage: null,
      publishedAt: new Date(Date.now() - 3600000).toISOString(),
      source: { name: "KILAT" },
      author: "Muhammad Luqman"
    },
    {
      title: "Bagaimana AI Mengubah Landscape Bisnes Malaysia: Kajian Eksklusif KILAT",
      description: "Kajian terbaru KILAT mendapati 78% syarikat Malaysia yang menggunakan AI automation melaporkan peningkatan keuntungan 40%. Temui strategi yang mereka gunakan dan bagaimana anda boleh ikut jejak langkah mereka.",
      url: "/demo",
      urlToImage: null,
      publishedAt: new Date(Date.now() - 7200000).toISOString(),
      source: { name: "KILAT Research" },
      author: "Muhammad Aniq Qawiem"
    },
    {
      title: "Google Launches New AI Model Competing with GPT-4",
      description: "Google's latest AI model shows impressive performance in coding, mathematics, and creative tasks, positioning itself as a strong competitor to OpenAI.",
      url: "#",
      urlToImage: null,
      publishedAt: new Date(Date.now() - 10800000).toISOString(),
      source: { name: "Google AI" },
      author: "KILAT Team"
    },
    {
      title: "AI Ethics Guidelines Released by Malaysian Government",
      description: "Malaysia's Ministry of Science introduces comprehensive guidelines for ethical AI development and deployment in the country.",
      url: "#",
      urlToImage: null,
      publishedAt: new Date(Date.now() - 14400000).toISOString(),
      source: { name: "Gov Tech MY" },
      author: "KILAT Team"
    },
    {
      title: "Breakthrough in AI-Powered Drug Discovery",
      description: "Researchers use artificial intelligence to discover new potential treatments for cancer, reducing discovery time from years to months.",
      url: "#",
      urlToImage: null,
      publishedAt: new Date(Date.now() - 18000000).toISOString(),
      source: { name: "Medical AI" },
      author: "KILAT Team"
    }
  ];
}

// Helper function to format date for display
export function formatNewsDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

  if (diffInHours < 1) {
    return 'Baru sahaja';
  } else if (diffInHours < 24) {
    return `${diffInHours} jam yang lalu`;
  } else {
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} hari yang lalu`;
  }
}

// Helper function to truncate description
export function truncateDescription(description: string, maxLength: number = 120): string {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength).trim() + '...';
}