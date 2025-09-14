import { Metadata } from "next";
import Link from "next/link";
import { newsArticles } from "@/data/news";

export const metadata: Metadata = {
  title: "Latest AI News - Stay Updated with AI Developments",
  description: "Stay informed with the latest artificial intelligence news, breakthroughs, and industry updates. Expert analysis on AI trends and developments.",
};

export default function NewsPage() {
  const featuredArticle = newsArticles[0];
  const recentArticles = newsArticles.slice(1);

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Latest AI News
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Stay informed with the latest developments in artificial intelligence.
            Expert analysis, industry insights, and breaking news from the AI world.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mt-16">
          <article className="relative overflow-hidden rounded-lg bg-background border border-border shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="h-64 lg:h-auto bg-muted">
                <div className="h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-accent rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <span className="text-xl font-bold text-accent-foreground">AI</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Featured News Image</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center rounded-md bg-accent px-3 py-1 text-sm font-semibold text-accent-foreground">
                    Featured
                  </span>
                  <span className="inline-flex items-center rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
                    {featuredArticle.category}
                  </span>
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-4">
                  <Link
                    href={`/news/${featuredArticle.slug}`}
                    className="hover:text-accent transition-colors"
                  >
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {featuredArticle.summary}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>By {featuredArticle.author}</span>
                    <span className="mx-2">•</span>
                    <time dateTime={featuredArticle.publishedAt}>
                      {new Date(featuredArticle.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span className="mx-2">•</span>
                    <span>{featuredArticle.readTime} min read</span>
                  </div>
                  <Link
                    href={`/news/${featuredArticle.slug}`}
                    className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                  >
                    Read Full Article →
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Filter/Sort Bar */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-6 sm:mb-0">
            <span className="text-sm text-muted-foreground">
              {newsArticles.length} articles
            </span>
            <div className="h-4 w-px bg-border"></div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Filter:</span>
              <select className="rounded-md border-border bg-background px-3 py-1 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent">
                <option>All Categories</option>
                <option>AI Models</option>
                <option>Regulation</option>
                <option>Healthcare</option>
                <option>Productivity</option>
              </select>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <select className="rounded-md border-border bg-background px-3 py-1 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent">
              <option>Newest First</option>
              <option>Oldest First</option>
              <option>Most Popular</option>
            </select>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentArticles.map((article) => (
            <article
              key={article.id}
              className="flex flex-col overflow-hidden rounded-lg bg-background border border-border hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="h-48 bg-muted">
                <div className="h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/30 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-lg font-semibold text-accent">AI</span>
                    </div>
                    <p className="text-xs text-muted-foreground">News Image</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {article.readTime} min read
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3 hover:text-accent transition-colors">
                  <Link href={`/news/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {article.summary}
                </p>

                <div className="mt-auto">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>By {article.author}</span>
                    <span className="mx-2">•</span>
                    <time dateTime={article.publishedAt}>
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </time>
                  </div>
                </div>
              </div>

              {/* Read More Link */}
              <div className="px-6 py-4 bg-muted/20">
                <Link
                  href={`/news/${article.slug}`}
                  className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                >
                  Read Full Article →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
            Load More Articles
          </button>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-20 rounded-lg bg-muted/30 p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Never Miss AI News
          </h3>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter and get the latest AI news delivered to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              required
              className="flex-1 rounded-md border-border bg-background px-4 py-2 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="rounded-md bg-accent px-6 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-muted-foreground mt-3">
            Join 5,000+ AI enthusiasts • Free weekly updates
          </p>
        </div>
      </div>
    </div>
  );
}