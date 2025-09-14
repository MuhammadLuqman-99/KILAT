export interface NewsArticle {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  source: string;
  author?: string;
  urlToImage?: string;
  category: 'government' | 'industry' | 'international';
}

export interface NewsAPIResponse {
  status: string;
  totalResults: number;
  articles: Array<{
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    source: { name: string };
    author: string;
  }>;
}

export interface MediaStackResponse {
  data: Array<{
    title: string;
    description: string;
    url: string;
    image: string;
    published_at: string;
    source: string;
    author: string;
  }>;
}

// NewsAPI integration
export async function fetchNewsAPI(): Promise<NewsArticle[]> {
  const API_KEY = process.env.NEWSAPI_KEY;
  if (!API_KEY) return [];

  try {
    const queries = [
      'AI Malaysia OR "artificial intelligence Malaysia"',
      '"machine learning Malaysia" OR "deep learning Malaysia"',
      '"Malaysia AI" OR "Malaysian artificial intelligence"'
    ];

    const allArticles: NewsArticle[] = [];

    for (const query of queries) {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&pageSize=10&language=en`,
        {
          headers: {
            'X-API-Key': API_KEY,
          },
          next: { revalidate: 3600 } // Cache for 1 hour
        }
      );

      if (response.ok) {
        const data: NewsAPIResponse = await response.json();
        const articles = data.articles.map(article => ({
          title: article.title,
          description: article.description,
          url: article.url,
          publishedAt: article.publishedAt,
          source: article.source.name,
          author: article.author,
          urlToImage: article.urlToImage,
          category: 'industry' as const
        }));
        allArticles.push(...articles);
      }
    }

    return allArticles.slice(0, 15); // Limit to 15 articles
  } catch (error) {
    console.error('NewsAPI fetch error:', error);
    return [];
  }
}

// MediaStack integration
export async function fetchMediaStack(): Promise<NewsArticle[]> {
  const API_KEY = process.env.MEDIASTACK_KEY;
  if (!API_KEY) return [];

  try {
    const keywords = 'artificial intelligence,AI,machine learning,deep learning';
    const response = await fetch(
      `http://api.mediastack.com/v1/news?access_key=${API_KEY}&countries=my&keywords=${keywords}&limit=10&sort=published_desc`,
      {
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    );

    if (response.ok) {
      const data: MediaStackResponse = await response.json();
      return data.data.map(article => ({
        title: article.title,
        description: article.description,
        url: article.url,
        publishedAt: article.published_at,
        source: article.source,
        author: article.author,
        urlToImage: article.image,
        category: 'industry' as const
      }));
    }
  } catch (error) {
    console.error('MediaStack fetch error:', error);
  }

  return [];
}

// Mock function for government news (NAIO doesn't have public API)
export async function fetchGovernmentNews(): Promise<NewsArticle[]> {
  // In a real implementation, you would scrape https://www.ai.gov.my/media-centre/news/
  // For now, return mock government announcements
  return [
    {
      title: "Malaysia National AI Framework 2021-2025 Progress Update",
      description: "Latest developments in Malaysia's National AI Framework implementation with focus on ethical AI and industry adoption.",
      url: "https://www.ai.gov.my/media-centre/news/framework-update",
      publishedAt: new Date(Date.now() - 86400000 * 2).toISOString(), // 2 days ago
      source: "Malaysia National AI Office (NAIO)",
      author: "NAIO Communications",
      category: 'government' as const
    },
    {
      title: "RM1 Billion AI Investment Initiative Launches First Phase",
      description: "Government announces the launch of the first phase of Malaysia's RM1 billion AI investment initiative targeting SMEs and startups.",
      url: "https://www.ai.gov.my/media-centre/news/investment-initiative",
      publishedAt: new Date(Date.now() - 86400000 * 5).toISOString(), // 5 days ago
      source: "Malaysia National AI Office (NAIO)",
      author: "NAIO Policy Team",
      category: 'government' as const
    },
    {
      title: "MyDigital ID Integration with AI Services Expanded",
      description: "Malaysia's digital identity system now supports enhanced AI-powered services for citizens and businesses.",
      url: "https://www.ai.gov.my/media-centre/news/mydigital-ai",
      publishedAt: new Date(Date.now() - 86400000 * 7).toISOString(), // 1 week ago
      source: "Malaysia National AI Office (NAIO)",
      author: "NAIO Digital Services",
      category: 'government' as const
    }
  ];
}

// Aggregate all news sources
export async function fetchAllMalaysianAINews(): Promise<{
  government: NewsArticle[];
  industry: NewsArticle[];
  international: NewsArticle[];
}> {
  const [newsApiArticles, mediaStackArticles, governmentNews] = await Promise.all([
    fetchNewsAPI(),
    fetchMediaStack(),
    fetchGovernmentNews()
  ]);

  // Combine and deduplicate industry news
  const combinedIndustry = [...newsApiArticles, ...mediaStackArticles];
  const uniqueIndustry = deduplicateArticles(combinedIndustry);

  // Separate international news (articles mentioning Malaysia from international sources)
  const international = uniqueIndustry.filter(article =>
    !article.source.toLowerCase().includes('malaysia') &&
    !article.source.toLowerCase().includes('bernama') &&
    !article.source.toLowerCase().includes('star') &&
    article.title.toLowerCase().includes('malaysia')
  );

  const industry = uniqueIndustry.filter(article => !international.includes(article));

  return {
    government: governmentNews,
    industry: industry.slice(0, 10),
    international: international.slice(0, 8)
  };
}

// Helper function to remove duplicate articles
function deduplicateArticles(articles: NewsArticle[]): NewsArticle[] {
  const seen = new Set<string>();
  return articles.filter(article => {
    const key = article.title.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

// Fallback data when APIs are unavailable
export const fallbackNews = {
  government: [
    {
      title: "Malaysia Accelerates AI Adoption Across Government Sectors",
      description: "Government announces new initiatives to integrate AI technologies across public services and administration.",
      url: "#",
      publishedAt: new Date().toISOString(),
      source: "Malaysia National AI Office",
      category: 'government' as const
    }
  ],
  industry: [
    {
      title: "Malaysian AI Startups Secure RM50M in Series A Funding",
      description: "Local AI companies raise significant funding to expand operations and develop cutting-edge solutions.",
      url: "#",
      publishedAt: new Date().toISOString(),
      source: "TechCrunch Asia",
      category: 'industry' as const
    }
  ],
  international: [
    {
      title: "Malaysia Emerges as Southeast Asia's AI Hub",
      description: "International recognition of Malaysia's growing AI ecosystem and strategic investments.",
      url: "#",
      publishedAt: new Date().toISOString(),
      source: "Reuters",
      category: 'international' as const
    }
  ]
};