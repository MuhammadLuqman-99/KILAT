import { Metadata } from "next";
import Link from "next/link";
import { fetchAINews, formatNewsDate, truncateDescription } from "@/lib/newsApi";

export const metadata: Metadata = {
  title: "Berita AI Terkini - Kekal Terkini dengan Perkembangan AI",
  description: "Kekal bermaklumat dengan berita kecerdasan buatan terkini, kejayaan, dan kemas kini industri. Analisis pakar mengenai trend dan perkembangan AI.",
};

export default async function NewsPage() {
  const articles = await fetchAINews();
  const featuredArticle = articles[0];
  const recentArticles = articles.slice(1);

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Berita AI Terkini
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Kekal bermaklumat dengan perkembangan terkini dalam kecerdasan buatan.
            Analisis pakar, wawasan industri, dan berita terkini dari dunia AI.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mt-16">
          <article className="relative overflow-hidden rounded-lg bg-background border border-border shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="h-64 lg:h-auto bg-muted">
                {featuredArticle.urlToImage ? (
                  <img
                    src={featuredArticle.urlToImage}
                    alt={featuredArticle.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-accent rounded-lg mx-auto mb-3 flex items-center justify-center">
                        <span className="text-xl font-bold text-accent-foreground">AI</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Berita AI Terkini</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center rounded-md bg-accent px-3 py-1 text-sm font-semibold text-accent-foreground">
                    Pilihan
                  </span>
                  <span className="inline-flex items-center rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
                    {featuredArticle.source.name}
                  </span>
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-4">
                  <a
                    href={featuredArticle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    {featuredArticle.title}
                  </a>
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {truncateDescription(featuredArticle.description, 180)}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>Oleh {featuredArticle.author || featuredArticle.source.name}</span>
                    <span className="mx-2">•</span>
                    <time dateTime={featuredArticle.publishedAt}>
                      {formatNewsDate(featuredArticle.publishedAt)}
                    </time>
                  </div>
                  <a
                    href={featuredArticle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                  >
                    Baca Artikel Penuh →
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Filter/Sort Bar */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-6 sm:mb-0">
            <span className="text-sm text-muted-foreground">
              {articles.length} artikel
            </span>
            <div className="h-4 w-px bg-border"></div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Tapis:</span>
              <select className="rounded-md border-border bg-background px-3 py-1 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent">
                <option>Semua Kategori</option>
                <option>Model AI</option>
                <option>Peraturan</option>
                <option>Kesihatan</option>
                <option>Produktiviti</option>
              </select>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Susun mengikut:</span>
            <select className="rounded-md border-border bg-background px-3 py-1 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent">
              <option>Terbaru Dahulu</option>
              <option>Terlama Dahulu</option>
              <option>Paling Popular</option>
            </select>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentArticles.map((article, index) => (
            <article
              key={article.url}
              className="flex flex-col overflow-hidden rounded-lg bg-background border border-border hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="h-48 bg-muted">
                {article.urlToImage ? (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent/30 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <span className="text-lg font-semibold text-accent">AI</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Berita AI</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
                    {article.source.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {formatNewsDate(article.publishedAt)}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3 hover:text-accent transition-colors">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title}
                  </a>
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {truncateDescription(article.description, 120)}
                </p>

                <div className="mt-auto">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>Oleh {article.author || article.source.name}</span>
                    <span className="mx-2">•</span>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors"
                    >
                      Baca →
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
            Muatkan Lagi Artikel
          </button>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-20 rounded-lg bg-muted/30 p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Jangan Terlepas Berita AI
          </h3>
          <p className="text-muted-foreground mb-6">
            Langgan surat berita kami dan dapatkan berita AI terkini dihantar ke peti masuk anda setiap minggu.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              required
              className="flex-1 rounded-md border-border bg-background px-4 py-2 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm"
              placeholder="Masukkan e-mel anda"
            />
            <button
              type="submit"
              className="rounded-md bg-accent px-6 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
            >
              Langgan
            </button>
          </form>
          <p className="text-xs text-muted-foreground mt-3">
            Sertai 5,000+ peminat AI • Kemas kini mingguan percuma
          </p>
        </div>
      </div>
    </div>
  );
}