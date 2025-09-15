import Link from "next/link";
import { ebooks } from "@/data/ebooks";
import { newsArticles } from "@/data/news";
import { prompts } from "@/data/prompts";

export default function Home() {
  const featuredEbook = ebooks[0];
  const latestNews = newsArticles.slice(0, 3);
  const featuredPrompts = prompts.filter(p => p.type === 'free').slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Kuasai AI bersama
              <span className="text-accent"> KILAT</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Temui e-book AI terkini, prompts premium, dan berita AI terbaru dari platform pendidikan AI
              terdepan Malaysia. Transformasikan pemahaman anda tentang kecerdasan buatan dengan
              sumber pembelajaran terpilih KILAT.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/ebooks"
                className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
              >
                Jelajahi E-book
              </Link>
              <Link
                href="/demo"
                className="rounded-md bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-orange-600 hover:to-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 transition-all"
              >
                Cuba Percuma
              </Link>
              <Link
                href="/prompts"
                className="text-sm font-semibold leading-6 text-foreground hover:text-accent transition-colors"
              >
                Lihat Prompts <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Ebook Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Sumber Pembelajaran Unggulan
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Mulakan perjalanan AI anda dengan e-book terlaris kami
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-2xl sm:mt-16">
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-b from-muted/50 to-muted/25 p-8 shadow-sm border">
                <div className="lg:flex lg:items-center lg:gap-x-8">
                  <div className="lg:min-w-0 lg:flex-1">
                    <div className="flex items-center gap-x-2">
                      <span className="inline-flex items-center rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent ring-1 ring-inset ring-accent/20">
                        Terlaris
                      </span>
                      <div className="flex items-center gap-x-1 text-sm text-muted-foreground">
                        <svg className="h-4 w-4 fill-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                        </svg>
                        <span>{featuredEbook.rating}</span>
                        <span>({featuredEbook.reviews} ulasan)</span>
                      </div>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
                      {featuredEbook.title}
                    </h3>
                    <p className="mt-4 text-base text-muted-foreground">
                      {featuredEbook.description}
                    </p>
                    <div className="mt-6 flex items-center gap-x-4">
                      <span className="text-2xl font-bold text-foreground">
                        RM{featuredEbook.price}
                      </span>
                      {featuredEbook.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          RM{featuredEbook.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="mt-6">
                      <Link
                        href={`/ebooks/${featuredEbook.slug}`}
                        className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
                      >
                        Beli Sekarang
                      </Link>
                    </div>
                  </div>
                  <div className="mt-8 lg:mt-0">
                    <div className="aspect-[3/4] w-48 rounded-lg bg-muted/50 border"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest AI News Section */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Berita AI Terkini
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Kekal terkini dengan perkembangan AI terbaru di Malaysia dan dunia
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {latestNews.map((article) => (
              <article
                key={article.slug}
                className="flex flex-col items-start justify-between bg-background border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={article.publishedAt} className="text-muted-foreground">
                    {new Date(article.publishedAt).toLocaleDateString('ms-MY')}
                  </time>
                  <span className="relative z-10 rounded-full bg-accent/10 px-3 py-1.5 font-medium text-accent">
                    {article.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-foreground group-hover:text-accent">
                    <Link href={`/news/${article.slug}`}>
                      <span className="absolute inset-0" />
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                    {article.summary}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-foreground">
                      {article.author}
                    </p>
                    <p className="text-muted-foreground">{article.readTime} min bacaan</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/news"
              className="inline-flex items-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Lihat Semua Berita
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Prompts Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Prompts AI Percuma
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tingkatkan produktiviti anda dengan prompts AI yang telah diuji dan terbukti berkesan
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {featuredPrompts.map((prompt) => (
              <div
                key={prompt.slug}
                className="flex flex-col items-start justify-between bg-background border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <span className="relative z-10 rounded-full bg-green-100 dark:bg-green-900/30 px-3 py-1.5 font-medium text-green-700 dark:text-green-300">
                    PERCUMA
                  </span>
                  <span className="text-muted-foreground">
                    {prompt.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-foreground group-hover:text-accent">
                    <Link href={`/prompts/${prompt.slug}`}>
                      <span className="absolute inset-0" />
                      {prompt.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                    {prompt.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4 w-full">
                  <div className="flex items-center gap-x-2 text-sm text-muted-foreground">
                    <svg className="h-4 w-4 fill-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                    </svg>
                    <span>{prompt.rating}</span>
                    <span>•</span>
                    <span>{prompt.uses.toLocaleString('ms-MY')} penggunaan</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/prompts"
              className="inline-flex items-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Jelajahi Semua Prompts
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Kekal Terkini dengan KILAT
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Terima kemas kini mingguan tentang perkembangan AI terbaru, e-book baharu, dan prompts eksklusif
            </p>
            <div className="mt-6 flex max-w-md gap-x-2 mx-auto">
              <label htmlFor="email-address" className="sr-only">
                Alamat e-mel
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border border-border bg-background px-3.5 py-2 text-foreground shadow-sm placeholder:text-muted-foreground focus:border-accent focus:ring-1 focus:ring-accent sm:text-sm sm:leading-6"
                placeholder="Masukkan e-mel anda"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
              >
                Langgan
              </button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Kami menghormati privasi anda. Berhenti melanggan bila-bila masa.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}