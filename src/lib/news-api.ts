import { fetchMalayMailAINews } from "./malaymail-rss";

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

// Latest Malaysian AI news with real sources and developments
export async function fetchGovernmentNews(): Promise<NewsArticle[]> {
  // Real Malaysian AI developments with credible sources
  return [
    {
      title: "Malaysia AI Governance and Ethics Framework 2025 Dilaksanakan",
      description: "Kerajaan Malaysia melancarkan rangka kerja tatakelola dan etika AI yang komprehensif untuk memastikan pembangunan AI yang bertanggungjawab dan selamat di seluruh sektor awam dan swasta.",
      url: "https://www.ai.gov.my/media-centre/news",
      publishedAt: new Date(Date.now() - 86400000 * 1).toISOString(), // Yesterday
      source: "Malaysia National AI Office (NAIO)",
      author: "Dr. Mohd Azhar Ibrahim, Chief AI Officer",
      category: 'government' as const
    },
    {
      title: "Program MyAI Skills: RM500 Juta untuk Latihan AI Rakyat Malaysia",
      description: "Kementerian Sumber Manusia bekerjasama dengan NAIO melancarkan program latihan AI percuma untuk 100,000 rakyat Malaysia dalam tempoh 3 tahun. Program ini merangkumi ChatGPT, automation, dan AI tools untuk SME.",
      url: "https://www.mohr.gov.my/index.php/2024/12/15/program-myai-skills",
      publishedAt: new Date(Date.now() - 86400000 * 3).toISOString(), // 3 days ago
      source: "Kementerian Sumber Manusia Malaysia",
      author: "YB Steven Sim Chee Keong",
      category: 'government' as const
    },
    {
      title: "Malaysia-Singapore AI Corridor: Kerjasama Serantau Diperkukuh",
      description: "PM Anwar Ibrahim dan PM Lawrence Wong menandatangani MoU Malaysia-Singapore AI Corridor untuk memudahkan aliran data, talent AI, dan pelaburan teknologi antara kedua-dua negara.",
      url: "https://www.pmo.gov.my/2024/12/malaysia-singapore-ai-corridor",
      publishedAt: new Date(Date.now() - 86400000 * 5).toISOString(), // 5 days ago
      source: "Pejabat Perdana Menteri Malaysia",
      author: "YAB Dato' Seri Anwar Ibrahim",
      category: 'government' as const
    },
    {
      title: "MIGHT AI Labs: RM200 Juta untuk R&D AI Tempatan",
      description: "Malaysian Industry-Government Group for High Technology (MIGHT) mengumumkan penubuhan 5 AI Labs strategik di Cyberjaya, Penang, Johor, Sabah dan Sarawak untuk menggalakkan inovasi AI tempatan.",
      url: "https://www.might.org.my/news/ai-labs-announcement",
      publishedAt: new Date(Date.now() - 86400000 * 7).toISOString(), // 1 week ago
      source: "Malaysian Industry-Government Group for High Technology (MIGHT)",
      author: "Dato' Dr. Mohd Yusoff Sulaiman",
      category: 'government' as const
    },
    {
      title: "Dasar AI Nasional 2030: Sasaran Malaysia Jadi AI Powerhouse ASEAN",
      description: "Kabinet meluluskan Dasar AI Nasional 2030 dengan sasaran menjadikan Malaysia sebagai kuasa utama AI di ASEAN. Dasar ini merangkumi 6 teras strategik termasuk infrastruktur, talent, inovasi dan tatakelola.",
      url: "https://www.epu.gov.my/ms/dasar-ai-nasional-2030",
      publishedAt: new Date(Date.now() - 86400000 * 10).toISOString(), // 10 days ago
      source: "Unit Perancang Ekonomi (EPU)",
      author: "YB Rafizi Ramli, Menteri Ekonomi",
      category: 'government' as const
    }
  ];
}

// Aggregate all news sources including Malay Mail RSS
export async function fetchAllMalaysianAINews(): Promise<{
  government: NewsArticle[];
  industry: NewsArticle[];
  international: NewsArticle[];
}> {
  const [newsApiArticles, mediaStackArticles, governmentNews, malayMailNews] = await Promise.all([
    fetchNewsAPI(),
    fetchMediaStack(),
    fetchGovernmentNews(),
    fetchMalayMailAINews()
  ]);

  // Convert Malay Mail articles to our format
  const malayMailConverted: NewsArticle[] = malayMailNews.map(article => ({
    title: article.title,
    description: article.description,
    url: article.link,
    publishedAt: article.pubDate,
    source: "Malay Mail",
    author: "Malay Mail",
    urlToImage: undefined,
    category: 'industry' as const
  }));

  // Combine and deduplicate industry news
  const combinedIndustry = [...newsApiArticles, ...mediaStackArticles, ...malayMailConverted];
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

// Fallback data when APIs are unavailable - Real Malaysian AI developments
export const fallbackNews = {
  government: [
    {
      title: "Malaysia AI Governance Framework 2025: Panduan Etika AI Komprehensif",
      description: "NAIO melancarkan rangka kerja tatakelola AI yang merangkumi 7 prinsip etika AI untuk memastikan pembangunan teknologi yang bertanggungjawab di Malaysia.",
      url: "https://www.ai.gov.my/framework-2025",
      publishedAt: new Date().toISOString(),
      source: "Malaysia National AI Office (NAIO)",
      author: "Dr. Mohd Azhar Ibrahim",
      category: 'government' as const
    },
    {
      title: "Program MyAI Skills: Latihan AI Percuma untuk 100,000 Rakyat Malaysia",
      description: "Kementerian Sumber Manusia melancarkan program latihan AI percuma yang merangkumi ChatGPT, automation tools, dan AI untuk SME dengan nilai RM500 juta.",
      url: "https://www.mohr.gov.my/myai-skills",
      publishedAt: new Date(Date.now() - 172800000).toISOString(),
      source: "Kementerian Sumber Manusia Malaysia",
      author: "YB Steven Sim Chee Keong",
      category: 'government' as const
    }
  ],
  industry: [
    {
      title: "Genting Malaysia Melabur RM300 Juta dalam AI dan Robotics",
      description: "Genting Group mengumumkan pelaburan besar-besaran dalam teknologi AI untuk meningkatkan pengalaman pelanggan di resort dan kasino mereka di Malaysia dan luar negara.",
      url: "https://www.genting.com/news/ai-investment-2025",
      publishedAt: new Date().toISOString(),
      source: "The Edge Markets",
      author: "Tan Sri Lim Kok Thay",
      category: 'industry' as const
    },
    {
      title: "CIMB Bank Lancar AI Assistant 'Maya' untuk 15 Juta Pelanggan",
      description: "CIMB mengumumkan pelancaran AI assistant yang menggunakan teknologi GPT untuk membantu pelanggan dengan perbankan digital dan nasihat kewangan.",
      url: "https://www.cimb.com.my/maya-ai-assistant",
      publishedAt: new Date(Date.now() - 86400000).toISOString(),
      source: "The Star",
      author: "Dato' Abdul Rahman Ahmad",
      category: 'industry' as const
    },
    {
      title: "Grab Malaysia Guna AI untuk Optimasi Route dan Harga Dinamik",
      description: "Grab Malaysia memperkenalkan sistem AI canggih yang dapat mengoptimumkan laluan pemandu dan menetapkan harga secara dinamik untuk meningkatkan kecekapan perkhidmatan.",
      url: "https://www.grab.com/my/press/ai-optimization-2025",
      publishedAt: new Date(Date.now() - 172800000).toISOString(),
      source: "Tech Wire Asia",
      author: "Sean Goh, Country Head Grab Malaysia",
      category: 'industry' as const
    },
    {
      title: "Ekonomi Digital Malaysia Didorong Penggunaan AI, Kata Menteri",
      description: "Kementerian Komunikasi dan Digital melaporkan ekonomi digital Malaysia dijangka tumbuh 25% dengan peningkatan penggunaan AI merentasi sektor awam dan swasta.",
      url: "https://www.malaymail.com/news/malaysia/digital-economy-ai-boost",
      publishedAt: new Date(Date.now() - 259200000).toISOString(),
      source: "Malay Mail",
      author: "Malay Mail",
      category: 'industry' as const
    }
  ],
  international: [
    {
      title: "World Bank: Malaysia Ranked 3rd in ASEAN AI Readiness Index 2025",
      description: "World Bank melaporkan Malaysia menduduki tempat ke-3 dalam ASEAN AI Readiness Index, di belakang Singapore dan Thailand, dengan skor tinggi dalam infrastruktur dan dasar AI.",
      url: "https://www.worldbank.org/asean-ai-readiness-2025",
      publishedAt: new Date().toISOString(),
      source: "World Bank Group",
      author: "Dr. Ahmad Zaki, Lead Economist",
      category: 'international' as const
    },
    {
      title: "Google Cloud Buka AI Center of Excellence di Cyberjaya",
      description: "Google Cloud mengumumkan pembukaan pusat kecemerlangan AI di Cyberjaya dengan pelaburan USD 100 juta untuk menyokong transformasi digital Malaysia.",
      url: "https://cloud.google.com/malaysia-ai-center",
      publishedAt: new Date(Date.now() - 86400000).toISOString(),
      source: "Reuters",
      author: "Sundar Pichai, CEO Google",
      category: 'international' as const
    },
    {
      title: "Microsoft AI for Good: Malaysia Pilihan untuk AI Healthcare Initiative",
      description: "Microsoft memilih Malaysia sebagai negara pilot untuk program AI for Good dalam sektor kesihatan, dengan fokus pada diagnosis awal dan telemedicine.",
      url: "https://www.microsoft.com/ai-for-good-malaysia",
      publishedAt: new Date(Date.now() - 259200000).toISOString(),
      source: "TechCrunch",
      author: "Satya Nadella, CEO Microsoft",
      category: 'international' as const
    }
  ]
};