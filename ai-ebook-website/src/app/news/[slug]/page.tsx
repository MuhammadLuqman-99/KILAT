import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsArticles } from "@/data/news";

interface NewsPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const article = newsArticles.find((a) => a.slug === params.slug);

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: `${article.title} - AI Learning Hub`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

export default function NewsArticlePage({ params }: NewsPageProps) {
  const article = newsArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = newsArticles.filter(a => a.id !== article.id && a.category === article.category).slice(0, 3);

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link href="/news" className="hover:text-accent transition-colors">
            News
          </Link>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-foreground truncate">{article.title}</span>
        </nav>

        {/* Article Header */}
        <article className="mb-16">
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center rounded-md bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                {article.category}
              </span>
              <span className="text-sm text-muted-foreground">
                {article.readTime} min read
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              {article.title}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              {article.summary}
            </p>

            <div className="flex items-center justify-between border-b pb-6">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-sm font-semibold text-accent-foreground">
                    {article.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{article.author}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <time dateTime={article.publishedAt}>
                      {new Date(article.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
              </div>

              {/* Share buttons */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground mr-3">Share:</span>
                <button className="p-2 text-muted-foreground hover:text-accent transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>
                <button className="p-2 text-muted-foreground hover:text-accent transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
                <button className="p-2 text-muted-foreground hover:text-accent transition-colors">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <div className="aspect-[16/9] rounded-lg bg-muted overflow-hidden">
              <div className="h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent-foreground">AI</span>
                  </div>
                  <p className="text-muted-foreground">Article Featured Image</p>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-foreground leading-relaxed whitespace-pre-line">
              {article.content}
            </div>
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">Tags:</span>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
                    {article.category}
                  </span>
                  <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                    AI News
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/news/${relatedArticle.slug}`}
                  className="group block"
                >
                  <article className="overflow-hidden rounded-lg bg-background border border-border hover:shadow-lg transition-shadow">
                    <div className="aspect-[16/9] bg-muted">
                      <div className="h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-accent/30 rounded-lg mx-auto mb-2 flex items-center justify-center">
                            <span className="text-sm font-semibold text-accent">AI</span>
                          </div>
                          <p className="text-xs text-muted-foreground">News</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
                          {relatedArticle.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {relatedArticle.readTime} min
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                        {relatedArticle.summary}
                      </p>
                      <p className="text-xs text-muted-foreground mt-3">
                        {new Date(relatedArticle.publishedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to News */}
        <div className="mt-12 text-center">
          <Link
            href="/news"
            className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors"
          >
            ← Back to All News
          </Link>
        </div>
      </div>
    </div>
  );
}