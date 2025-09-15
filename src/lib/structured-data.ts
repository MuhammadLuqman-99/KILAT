import { Ebook, NewsArticle, Prompt } from "@/types";

export function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KILAT",
    description: "Expert AI education through ebooks, prompts, and curated news",
    url: "https://kilat.my",
    logo: "https://kilat.my/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-234-567-8900",
      contactType: "Customer Service",
      email: "hello@ailearninghub.com"
    },
    sameAs: [
      "https://twitter.com/ailearninghub",
      "https://linkedin.com/company/ailearninghub",
      "https://github.com/ailearninghub"
    ]
  };
}

export function generateEbookStructuredData(ebook: Ebook) {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: ebook.title,
    description: ebook.description,
    author: {
      "@type": "Organization",
      name: ebook.author
    },
    publisher: {
      "@type": "Organization",
      name: "KILAT"
    },
    genre: ebook.category,
    numberOfPages: ebook.pages,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ebook.rating,
      reviewCount: ebook.reviews,
      bestRating: 5,
      worstRating: 1
    },
    offers: {
      "@type": "Offer",
      price: ebook.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock"
    }
  };
}

export function generateNewsArticleStructuredData(article: NewsArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.summary,
    author: {
      "@type": "Person",
      name: article.author
    },
    publisher: {
      "@type": "Organization",
      name: "KILAT",
      logo: {
        "@type": "ImageObject",
        url: "https://kilat.my/logo.png"
      }
    },
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://kilat.my/news/${article.slug}`
    },
    image: article.image,
    articleSection: article.category
  };
}

export function generatePromptStructuredData(prompt: Prompt) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: prompt.title,
    description: prompt.description,
    category: prompt.category,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: prompt.rating,
      ratingCount: Math.floor(prompt.uses / 10), // Approximate reviews from uses
      bestRating: 5,
      worstRating: 1
    },
    offers: prompt.price ? {
      "@type": "Offer",
      price: prompt.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock"
    } : {
      "@type": "Offer",
      price: 0,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock"
    }
  };
}