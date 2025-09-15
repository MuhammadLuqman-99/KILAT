"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NewsArticle } from '@/lib/news-api';

interface MalaysianAINewsProps {
  initialNews: {
    government: NewsArticle[];
    industry: NewsArticle[];
    international: NewsArticle[];
  };
}

export function MalaysianAINews({ initialNews }: MalaysianAINewsProps) {
  const [activeTab, setActiveTab] = useState<'government' | 'industry' | 'international'>('government');
  const [news, setNews] = useState(initialNews);
  const [isLoading, setIsLoading] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-MY', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const refreshNews = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/malaysian-ai-news');
      if (response.ok) {
        const freshNews = await response.json();
        setNews(freshNews);
      }
    } catch (error) {
      console.error('Error refreshing news:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const NewsCard = ({ article }: { article: NewsArticle }) => (
    <Link
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-card border rounded-lg p-6 hover:shadow-lg hover:border-accent/50 transition-all duration-200 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <span className="font-medium">{article.source}</span>
          <span>•</span>
          <time>{formatDate(article.publishedAt)}</time>
        </div>
        {article.category === 'government' && (
          <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full dark:bg-blue-900/30 dark:text-blue-300 font-medium">
            Official
          </span>
        )}
        {article.category === 'international' && (
          <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full dark:bg-green-900/30 dark:text-green-300 font-medium">
            International
          </span>
        )}
        {article.category === 'industry' && (
          <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full dark:bg-purple-900/30 dark:text-purple-300 font-medium">
            Industry
          </span>
        )}
      </div>

      <h3 className="font-semibold text-lg mb-3 leading-tight group-hover:text-accent transition-colors">
        {article.title}
      </h3>

      {article.description && (
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
          {article.description}
        </p>
      )}

      <div className="flex items-center justify-between">
        {article.author && (
          <div className="text-xs text-muted-foreground">
            By {article.author}
          </div>
        )}
        <div className="text-xs text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Read Article →
        </div>
      </div>
    </Link>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Berita AI Terkini Malaysia
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Kekal terkini dengan kemas kini masa nyata dari inisiatif kerajaan, perkembangan industri,
            dan liputan antarabangsa tentang ekosistem AI Malaysia yang berkembang.
          </p>

          <button
            onClick={refreshNews}
            disabled={isLoading}
            className="px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50 font-medium"
          >
            {isLoading ? 'Menyegarkan Berita...' : 'Segarkan Berita Terkini'}
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="inline-flex bg-muted rounded-lg p-1">
            <button
              onClick={() => setActiveTab('government')}
              className={`px-6 py-3 rounded-md font-medium text-sm transition-all ${
                activeTab === 'government'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Government Updates ({news.government.length})
            </button>
            <button
              onClick={() => setActiveTab('industry')}
              className={`px-6 py-3 rounded-md font-medium text-sm transition-all ${
                activeTab === 'industry'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Industry News ({news.industry.length})
            </button>
            <button
              onClick={() => setActiveTab('international')}
              className={`px-6 py-3 rounded-md font-medium text-sm transition-all ${
                activeTab === 'international'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              International Coverage ({news.international.length})
            </button>
          </div>
        </div>

        {/* News Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news[activeTab].length > 0 ? (
            news[activeTab].map((article, index) => (
              <NewsCard key={`${article.url}-${index}`} article={article} />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">No news available</h3>
              <p className="text-muted-foreground mb-6">
                {activeTab === 'government' && "No government updates at the moment."}
                {activeTab === 'industry' && "No industry news available right now."}
                {activeTab === 'international' && "No international coverage found."}
              </p>
              <button
                onClick={refreshNews}
                className="text-accent hover:text-accent/80 font-medium transition-colors"
              >
                Try refreshing news
              </button>
            </div>
          )}
        </div>

        {/* News Sources Info */}
        <div className="mt-20 p-8 bg-card border rounded-xl">
          <h3 className="font-semibold text-lg mb-6 text-center">
            Comprehensive News Sources
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-3">Government Sources</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Malaysia National AI Office (NAIO)</li>
                <li>Ministry of Science & Technology</li>
                <li>Malaysia Digital Economy Corporation</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-medium text-purple-600 dark:text-purple-400 mb-3">Industry Sources</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>NewsAPI (1,000+ Malaysian outlets)</li>
                <li>MediaStack (Local tech publications)</li>
                <li>Technology industry reports</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-medium text-green-600 dark:text-green-400 mb-3">International Sources</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Reuters, Bloomberg Technology</li>
                <li>TechCrunch, VentureBeat</li>
                <li>Global AI research publications</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 p-4 bg-muted/50 rounded-lg border">
            <p className="text-xs text-muted-foreground text-center">
              <span className="font-medium">KILAT News Aggregation System:</span> Real-time updates from 3+ API sources with automatic deduplication and relevance filtering.
              News refreshes hourly with manual refresh available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}