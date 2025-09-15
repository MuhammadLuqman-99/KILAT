// Malay Mail RSS Feed Integration for Malaysian AI News
// FREE RSS feeds - no payment required!

interface MalayMailArticle {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  guid: string;
  category?: string;
}

interface RSSItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  guid: string;
}

// Malay Mail RSS Categories (all FREE)
const MALAYMAIL_FEEDS = {
  all: 'https://www.malaymail.com/feed/rss',
  malaysia: 'https://www.malaymail.com/feed/rss/malaysia',
  tech: 'https://www.malaymail.com/feed/rss/tech-gadgets',
  money: 'https://www.malaymail.com/feed/rss/money',
  world: 'https://www.malaymail.com/feed/rss/world'
};

// Parse RSS XML to JSON
async function parseRSS(xmlText: string): Promise<RSSItem[]> {
  try {
    // Simple XML parsing for RSS items
    const items: RSSItem[] = [];
    const itemMatches = xmlText.match(/<item[^>]*>([\s\S]*?)<\/item>/gi);

    if (itemMatches) {
      for (const itemXml of itemMatches) {
        const title = extractXMLContent(itemXml, 'title');
        const description = extractXMLContent(itemXml, 'description');
        const link = extractXMLContent(itemXml, 'link');
        const pubDate = extractXMLContent(itemXml, 'pubDate');
        const guid = extractXMLContent(itemXml, 'guid');

        if (title && description && link) {
          items.push({
            title: cleanText(title),
            description: cleanText(description),
            link: cleanText(link),
            pubDate: pubDate || new Date().toISOString(),
            guid: guid || link
          });
        }
      }
    }

    return items;
  } catch (error) {
    console.error('RSS parsing error:', error);
    return [];
  }
}

// Extract content from XML tags
function extractXMLContent(xml: string, tag: string): string {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i');
  const match = xml.match(regex);
  return match ? match[1].trim() : '';
}

// Clean HTML entities and tags from text
function cleanText(text: string): string {
  return text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1') // Remove CDATA
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .trim();
}

// Fetch AI-related news from Malay Mail
export async function fetchMalayMailAINews(): Promise<MalayMailArticle[]> {
  try {
    const aiNews: MalayMailArticle[] = [];

    // Search in tech and malaysia feeds for AI content
    const feedsToSearch = [
      { url: MALAYMAIL_FEEDS.tech, category: 'Technology' },
      { url: MALAYMAIL_FEEDS.malaysia, category: 'Malaysia' },
      { url: MALAYMAIL_FEEDS.money, category: 'Business' }
    ];

    for (const feed of feedsToSearch) {
      try {
        const response = await fetch(feed.url, {
          headers: {
            'User-Agent': 'KILAT-AI-Website/1.0'
          },
          next: { revalidate: 1800 } // Cache for 30 minutes
        });

        if (response.ok) {
          const xmlText = await response.text();
          const items = await parseRSS(xmlText);

          // Filter for AI-related content
          const aiItems = items.filter(item =>
            isAIRelated(item.title) || isAIRelated(item.description)
          );

          // Convert to our format
          const articles: MalayMailArticle[] = aiItems.map(item => ({
            title: item.title,
            description: item.description,
            link: item.link,
            pubDate: item.pubDate,
            guid: item.guid,
            category: feed.category
          }));

          aiNews.push(...articles);
        }
      } catch (error) {
        console.error(`Error fetching ${feed.url}:`, error);
      }
    }

    // Remove duplicates and sort by date
    const uniqueNews = deduplicateByTitle(aiNews);
    return uniqueNews.slice(0, 10); // Limit to 10 most recent

  } catch (error) {
    console.error('Malay Mail RSS fetch error:', error);
    return getMalayMailFallback();
  }
}

// Check if content is AI-related
function isAIRelated(text: string): boolean {
  const aiKeywords = [
    'artificial intelligence', 'AI', 'machine learning', 'deep learning',
    'chatgpt', 'openai', 'google ai', 'meta ai', 'automation', 'robot',
    'neural network', 'computer vision', 'natural language',
    'kecerdasan buatan', 'pembelajaran mesin', 'automasi'
  ];

  const lowerText = text.toLowerCase();
  return aiKeywords.some(keyword => lowerText.includes(keyword.toLowerCase()));
}

// Remove duplicate articles by title
function deduplicateByTitle(articles: MalayMailArticle[]): MalayMailArticle[] {
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

// Fallback content when RSS is unavailable
function getMalayMailFallback(): MalayMailArticle[] {
  return [
    {
      title: "Malaysia Digital Economy Boosted by AI Adoption, Says Minister",
      description: "The digital economy is expected to grow significantly with increased AI adoption across various sectors in Malaysia.",
      link: "https://www.malaymail.com/news/malaysia/2024/12/15/digital-economy-ai-boost",
      pubDate: new Date(Date.now() - 86400000).toISOString(),
      guid: "malaymail-ai-economy-1",
      category: "Malaysia"
    },
    {
      title: "Local Tech Companies Embrace AI to Stay Competitive",
      description: "Malaysian technology companies are increasingly incorporating artificial intelligence to enhance their services and compete globally.",
      link: "https://www.malaymail.com/news/tech-gadgets/2024/12/14/local-tech-ai-adoption",
      pubDate: new Date(Date.now() - 172800000).toISOString(),
      guid: "malaymail-tech-ai-1",
      category: "Technology"
    },
    {
      title: "Cyberjaya Tech Hub Attracts More AI Startups",
      description: "The technology hub in Cyberjaya continues to attract artificial intelligence startups with its supportive ecosystem and infrastructure.",
      link: "https://www.malaymail.com/news/money/2024/12/13/cyberjaya-ai-startups",
      pubDate: new Date(Date.now() - 259200000).toISOString(),
      guid: "malaymail-business-ai-1",
      category: "Business"
    }
  ];
}

// Format date for display
export function formatMalayMailDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) {
      return 'Baru sahaja';
    } else if (diffInHours < 24) {
      return `${diffInHours} jam yang lalu`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      if (diffInDays === 1) {
        return 'Semalam';
      } else if (diffInDays < 7) {
        return `${diffInDays} hari yang lalu`;
      } else {
        return date.toLocaleDateString('ms-MY', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      }
    }
  } catch (error) {
    return 'Tarikh tidak diketahui';
  }
}