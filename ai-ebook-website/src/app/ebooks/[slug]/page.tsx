import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ebooks } from "@/data/ebooks";

interface EbookPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ebooks.map((ebook) => ({
    slug: ebook.slug,
  }));
}

export async function generateMetadata({ params }: EbookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const ebook = ebooks.find((e) => e.slug === slug);

  if (!ebook) {
    return {
      title: "Ebook Not Found",
      description: "The requested ebook could not be found.",
    };
  }

  return {
    title: `${ebook.title} - AI Learning Hub`,
    description: ebook.description,
    openGraph: {
      title: ebook.title,
      description: ebook.description,
      type: "article",
    },
  };
}

export default async function EbookDetailPage({ params }: EbookPageProps) {
  const { slug } = await params;
  const ebook = ebooks.find((e) => e.slug === slug);

  if (!ebook) {
    notFound();
  }

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-accent transition-colors">
            Laman Utama
          </Link>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link href="/ebooks" className="hover:text-accent transition-colors">
            E-book
          </Link>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-foreground">{ebook.title}</span>
        </nav>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column - Image and Details */}
          <div>
            <div className="sticky top-8">
              {/* Ebook Cover */}
              <div className="aspect-[3/4] mb-8 overflow-hidden rounded-lg bg-muted">
                <div className="h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold text-accent-foreground">AI</span>
                    </div>
                    <p className="text-muted-foreground">Kulit E-book</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">{ebook.pages}</div>
                  <div className="text-sm text-muted-foreground">Halaman</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">{ebook.rating}</div>
                  <div className="text-sm text-muted-foreground">Penilaian</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center rounded-md bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                  {ebook.category}
                </span>
                {ebook.originalPrice && (
                  <span className="inline-flex items-center rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-800 dark:bg-red-900/20 dark:text-red-400">
                    Save {Math.round(((ebook.originalPrice - ebook.price) / ebook.originalPrice) * 100)}%
                  </span>
                )}
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                {ebook.title}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(ebook.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">
                    {ebook.rating} ({ebook.reviews} ulasan)
                  </span>
                </div>
                <div className="h-4 w-px bg-border"></div>
                <span className="text-sm text-muted-foreground">Oleh {ebook.author}</span>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {ebook.description}
              </p>
            </div>

            {/* What You'll Learn */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Apa Yang Anda Akan Pelajari
              </h2>
              <ul className="space-y-3">
                {ebook.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing Packages */}
            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Pilih Pakej Anda
              </h2>

              <div className="space-y-6">
                {/* Basic Package */}
                <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Pakej Asas</h3>
                      <p className="text-sm text-muted-foreground">Untuk yang baru kenal ChatGPT. Murah & cukup untuk mula belajar.</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground">RM49</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Ebook Mastering ChatGPT (versi teks penuh)</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Akses semua bab Beginner & Intermediate</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <svg className="h-4 w-4 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-muted-foreground">Tiada contoh tambahan</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <svg className="h-4 w-4 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-muted-foreground">Tiada update percuma</span>
                    </div>
                  </div>

                  <button className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                    Pilih Pakej Asas - RM49
                  </button>
                </div>

                {/* Standard Package - Most Popular */}
                <div className="border-2 border-accent rounded-lg p-6 relative hover:shadow-lg transition-shadow">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      ⭐ Paling Popular!
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Standard (Best Value)</h3>
                      <p className="text-sm text-muted-foreground">Sesuai untuk usahawan & individu yang nak guna AI secara praktikal.</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground">RM99</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Semua dalam pakej asas</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Bab Pro + Advance (jarang diajar orang lain)</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>50+ Prompt siap guna</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Glossary & Resource tambahan</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Update percuma selama 6 bulan</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Template "Prompt Library" untuk bisnes</span>
                    </div>
                  </div>

                  <button className="w-full rounded-md bg-accent px-4 py-3 text-lg font-semibold text-accent-foreground hover:bg-accent/90 transition-colors">
                    Pilih Standard - RM99
                  </button>
                </div>

                {/* Premium Package */}
                <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Premium</h3>
                      <p className="text-sm text-muted-foreground">Untuk yang serius nak kuasai AI sepenuhnya & dapat bimbingan terus.</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground">RM199</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Semua dalam pakej Standard</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Bonus modul video tutorial step by step</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Ebook versi bergambar + design profesional</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Template automasi (Google Sheets, WhatsApp)</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Group Coaching Live (Q&A)</span>
                    </div>
                  </div>

                  <button className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                    Pilih Premium - RM199
                  </button>
                </div>
              </div>

              {/* Security badges */}
              <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground mt-6">
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Pembayaran selamat
                </div>
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Muat turun segera
                </div>
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Jaminan 30 hari
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Ebooks */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Anda Mungkin Juga Suka
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ebooks.filter(e => e.id !== ebook.id).slice(0, 3).map((relatedEbook) => (
              <Link
                key={relatedEbook.id}
                href={`/ebooks/${relatedEbook.slug}`}
                className="group block"
              >
                <div className="overflow-hidden rounded-lg bg-background border border-border hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] bg-muted">
                    <div className="h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-2 flex items-center justify-center">
                          <span className="text-lg font-bold text-accent-foreground">AI</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Kulit E-book</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
                      {relatedEbook.title}
                    </h3>
                    <p className="text-lg font-semibold text-foreground mt-2">
                      ${relatedEbook.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}