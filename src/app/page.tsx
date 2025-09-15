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
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5 py-20 sm:py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e2e8f0%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Success Badge */}
            <div className="mb-8 inline-flex items-center rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent ring-1 ring-inset ring-accent/20">
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Dipercayai 5,000+ Pelajar Malaysia
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
              Kuasai AI bersama
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-500 mt-2">
                KILAT
              </span>
            </h1>

            <p className="mt-8 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
              Platform pendidikan AI #1 Malaysia dengan <span className="font-semibold text-foreground">25+ e-book pakar</span>,
              <span className="font-semibold text-foreground"> 100+ prompts premium</span>, dan
              <span className="font-semibold text-foreground"> berita AI terkini</span>.
              Transformasikan karier anda dalam era AI.
            </p>

            {/* Stats Row */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">5,000+</div>
                <div className="text-sm text-muted-foreground">Pelajar Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">25+</div>
                <div className="text-sm text-muted-foreground">E-book Premium</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground">Prompts AI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">4.9★</div>
                <div className="text-sm text-muted-foreground">Rating Purata</div>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/ebooks"
                className="w-full sm:w-auto rounded-lg bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-lg hover:bg-accent/90 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Mulakan Pembelajaran ⚡
              </Link>
              <Link
                href="/demo"
                className="w-full sm:w-auto rounded-lg bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:from-orange-600 hover:to-red-600 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Cuba Percuma 🚀
              </Link>
              <Link
                href="/prompts"
                className="w-full sm:w-auto group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-foreground hover:text-accent transition-colors"
              >
                Lihat Prompts
                <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Kandungan Berkualiti Tinggi
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Pembayaran Selamat
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Sokongan 24/7
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose KILAT Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Mengapa Pilih KILAT?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Platform pembelajaran AI yang direka khas untuk pasaran Malaysia dengan fokus praktikal
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col items-center text-center p-8 bg-background rounded-2xl shadow-sm border hover:shadow-lg transition-shadow">
              <div className="rounded-2xl bg-accent/10 p-4 ring-1 ring-accent/20">
                <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">Panduan Pakar Malaysia</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Ditulis oleh pakar AI Malaysia yang memahami konteks tempatan dan keperluan industri Malaysia
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-background rounded-2xl shadow-sm border hover:shadow-lg transition-shadow">
              <div className="rounded-2xl bg-orange-100 dark:bg-orange-900/30 p-4 ring-1 ring-orange-200 dark:ring-orange-800">
                <svg className="h-8 w-8 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">Hasil Pantas</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Teknik dan strategi yang terbukti memberikan hasil dalam 24-48 jam selepas implementasi
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-background rounded-2xl shadow-sm border hover:shadow-lg transition-shadow">
              <div className="rounded-2xl bg-green-100 dark:bg-green-900/30 p-4 ring-1 ring-green-200 dark:ring-green-800">
                <svg className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">Dijamin Berkesan</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Semua kandungan telah diuji dengan 1000+ pengguna Malaysia. Jaminan wang dikembalikan 30 hari
              </p>
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

      {/* Success Stories with Photos */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Kejayaan Pelajar KILAT
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Lihat bagaimana ratusan profesional Malaysia telah mentransformasi karier mereka dengan KILAT
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="flex flex-col justify-between bg-background border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-yellow-400" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-sm leading-6 text-muted-foreground">
                  "E-book KILAT tentang AI automation benar-benar mengubah bisnes saya. Dalam 2 minggu, saya berjaya
                  automate 80% task harian dan focus pada strategi. ROI nya incredible!"
                </blockquote>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-accent to-orange-500 flex items-center justify-center text-white font-bold">
                  AH
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Ahmad Hafizi</p>
                  <p className="text-sm text-muted-foreground">CEO, Tech Startup KL</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col justify-between bg-background border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-yellow-400" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-sm leading-6 text-muted-foreground">
                  "Sebagai marketing manager, prompts KILAT sangat membantu saya create content yang engaging.
                  Conversion rate campaign saya naik 300% dalam sebulan!"
                </blockquote>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  SL
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Siti Laila</p>
                  <p className="text-sm text-muted-foreground">Marketing Manager, E-commerce</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col justify-between bg-background border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-yellow-400" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-sm leading-6 text-muted-foreground">
                  "KILAT bukan sekadar platform pembelajaran, tapi game-changer untuk career saya.
                  Lepas ikut course AI basics, gaji saya naik 40% dalam 6 bulan!"
                </blockquote>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                  RZ
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Razak Zain</p>
                  <p className="text-sm text-muted-foreground">Data Analyst, Bank</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Learning Journey */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Perjalanan Pembelajaran AI Anda
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ikuti langkah mudah ini untuk menguasai AI dalam masa 30 hari
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground text-2xl font-bold">
                1
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-foreground">Daftar & Akses</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Pilih pakej yang sesuai dan akses segera ke perpustakaan e-book dan prompts
                </p>
              </div>
              {/* Connector Line */}
              <div className="absolute top-8 left-16 hidden lg:block w-full h-0.5 bg-accent/30"></div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white text-2xl font-bold">
                2
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-foreground">Belajar & Praktik</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Ikuti panduan step-by-step dan praktikkan teknik AI dengan prompts terbukti
                </p>
              </div>
              <div className="absolute top-8 left-16 hidden lg:block w-full h-0.5 bg-accent/30"></div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white text-2xl font-bold">
                3
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-foreground">Implement & Automate</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Gunakan knowledge untuk automate task dan tingkatkan produktiviti harian
                </p>
              </div>
              <div className="absolute top-8 left-16 hidden lg:block w-full h-0.5 bg-accent/30"></div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-500 text-white text-2xl font-bold">
                4
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-foreground">Scale & Succeed</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Transform karier dan bisnes dengan AI skills yang advanced
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/ebooks"
              className="inline-flex items-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-lg hover:bg-accent/90 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Mulakan Perjalanan Anda Hari Ini
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-accent/10 to-orange-500/10 px-6 py-16 shadow-lg rounded-3xl sm:px-16 lg:px-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Kekal Terkini dengan KILAT
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Terima kemas kini mingguan tentang perkembangan AI terbaru, e-book baharu, dan prompts eksklusif
              </p>
              <div className="mt-8 flex max-w-md gap-x-4 mx-auto">
                <label htmlFor="email-address" className="sr-only">
                  Alamat e-mel
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-lg border border-border bg-background/80 backdrop-blur px-4 py-3 text-foreground shadow-sm placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent sm:text-sm"
                  placeholder="Masukkan e-mel anda"
                />
                <button
                  type="submit"
                  className="flex-none rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg hover:bg-accent/90 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Langgan Percuma
                </button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Kami menghormati privasi anda. Berhenti melanggan bila-bila masa.
              </p>

              {/* Newsletter Benefits */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Tips AI mingguan
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Prompts eksklusif
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <svg className="h-4 w-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Diskaun awal
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
              <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-accent to-orange-500 opacity-20"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}