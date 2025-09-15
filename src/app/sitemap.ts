import { MetadataRoute } from 'next'
import { ebooks } from '@/data/ebooks'
import { newsArticles } from '@/data/news'
import { prompts } from '@/data/prompts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kilat.my'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/ebooks`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-malaysia`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/prompts`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Dynamic ebook pages
  const ebookPages = ebooks.map((ebook) => ({
    url: `${baseUrl}/ebooks/${ebook.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic news pages
  const newsPages = newsArticles.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Dynamic prompt pages
  const promptPages = prompts.map((prompt) => ({
    url: `${baseUrl}/prompts/${prompt.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [...staticPages, ...ebookPages, ...newsPages, ...promptPages]
}