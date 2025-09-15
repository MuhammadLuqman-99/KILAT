import { Metadata } from "next";
import Link from "next/link";
import { ebooks } from "@/data/ebooks";

export const metadata: Metadata = {
  title: "E-book & Kursus AI - Sumber Pembelajaran Menyeluruh",
  description: "Terokai koleksi e-book dan kursus AI yang ditulis pakar kami. Kuasai kejuruteraan prompt, automasi perniagaan, dan AI kreatif dengan panduan menyeluruh.",
};

export default function EbooksPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            E-book & Kursus AI
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Kuasai kecerdasan buatan dengan e-book dan kursus menyeluruh yang dibuat pakar kami.
            Setiap sumber direka untuk membawa anda dari pemula kepada pakar dalam domain AI tertentu.
          </p>
        </div>

        {/* Filter/Stats Section */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-6 sm:mb-0">
            <span className="text-sm text-muted-foreground">
              {ebooks.length} sumber menyeluruh
            </span>
            <div className="h-4 w-px bg-border"></div>
            <span className="text-sm text-muted-foreground">
              Kandungan oleh pakar
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Susun mengikut:</span>
            <select className="rounded-md border-border bg-background px-3 py-1 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent">
              <option>Paling Popular</option>
              <option>Terbaru</option>
              <option>Harga: Rendah ke Tinggi</option>
              <option>Harga: Tinggi ke Rendah</option>
            </select>
          </div>
        </div>

        {/* Pricing Packages */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Pilih Pakej Anda
            </h2>
            <p className="text-lg text-muted-foreground">
              Dapatkan akses kepada E-book "Mastering ChatGPT" dengan pakej yang sesuai untuk anda
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {/* Basic Package */}
            <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Pakej Asas</h3>
                <div className="text-3xl font-bold text-foreground mb-2">RM15</div>
                <p className="text-sm text-muted-foreground">
                  Untuk yang baru kenal ChatGPT. Murah & cukup untuk mula belajar.
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start text-sm">
                  <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Ebook Mastering ChatGPT (versi teks penuh)</span>
                </div>
                <div className="flex items-start text-sm">
                  <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Akses semua bab Beginner & Intermediate</span>
                </div>
                <div className="flex items-start text-sm">
                  <svg className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-muted-foreground">Tiada contoh tambahan</span>
                </div>
                <div className="flex items-start text-sm">
                  <svg className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-muted-foreground">Tiada update percuma</span>
                </div>
              </div>

              <button className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                Pilih Pakej Asas
              </button>
            </div>

            {/* Standard Package - Most Popular */}
            <div className="border-2 border-accent rounded-lg p-6 relative hover:shadow-lg transition-shadow">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Paling Popular!
                </span>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Standard (Best Value)</h3>
                <div className="text-3xl font-bold text-foreground mb-2">RM59</div>
                <p className="text-sm text-muted-foreground">
                  Sesuai untuk usahawan & individu yang nak guna AI secara praktikal.
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start text-sm">
                  <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Semua dalam pakej asas</span>
                </div>
                <div className="flex items-start text-sm">
                  <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Bab Pro + Advance (jarang diajar orang lain)</span>
                </div>
                <div className="flex items-start text-sm">
                  <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>50+ Prompt siap guna</span>
                </div>
                <div className="flex items-start text-sm">
                  <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Glossary & Resource tambahan</span>
                </div>
                <div className="flex items-start text-sm">
                  <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Update percuma selama 6 bulan</span>
                </div>
                <div className="flex items-start text-sm">
                  <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Template "Prompt Library" untuk bisnes</span>
                </div>
              </div>

              <button className="w-full rounded-md bg-accent px-4 py-3 text-lg font-semibold text-accent-foreground hover:bg-accent/90 transition-colors">
                Pilih Standard
              </button>
            </div>

            {/* Premium Package */}
            <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Premium</h3>
                <div className="text-3xl font-bold text-foreground mb-2">RM109</div>
                <p className="text-sm text-muted-foreground">
                  Untuk yang serius nak kuasai AI sepenuhnya & dapat bimbingan terus.
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start text-sm">
                  <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Semua dalam pakej Standard</span>
                </div>
                <div className="flex items-start text-sm">
                  <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Bonus modul video tutorial step by step</span>
                </div>
                <div className="flex items-start text-sm">
                  <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Ebook versi bergambar + design profesional</span>
                </div>
                <div className="flex items-start text-sm">
                  <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Template automasi (Google Sheets, WhatsApp)</span>
                </div>
                <div className="flex items-start text-sm">
                  <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Group Coaching Live (Q&A)</span>
                </div>
              </div>

              <button className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                Pilih Premium
              </button>
            </div>
          </div>

          {/* Security badges */}
          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground mt-8">
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

        {/* Social Proof Statistics */}
        <div className="mt-20 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Dipercayai oleh Ribuan Pelajar AI di Malaysia
            </h2>
            <p className="text-muted-foreground">
              Sertai komuniti yang sedang berkembang pesat dalam menguasai teknologi AI
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">5,000+</div>
              <div className="text-sm text-muted-foreground">Pelajar Aktif</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Rating Purata</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Kadar Kepuasan</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">2,500+</div>
              <div className="text-sm text-muted-foreground">Testimoni Positif</div>
            </div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Apa Kata Pelajar Kami
            </h2>
            <p className="text-lg text-muted-foreground">
              Testimoni sebenar dari mereka yang telah berjaya menguasai AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "E-book KILAT sangat mudah difahami! Dalam masa 2 minggu, saya dah boleh automate email marketing company saya. ROI dalam 1 bulan je!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-3">
                  <span className="text-accent-foreground font-semibold">AS</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Ahmad Syafiq</div>
                  <div className="text-sm text-muted-foreground">CEO, Digital Agency KL</div>
                </div>
              </div>
            </div>

            <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Saya fresh grad, takde experience AI langsung. Tapi dengan guidance KILAT, sekarang saya kerja sebagai AI Consultant dengan gaji RM8k+"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-3">
                  <span className="text-accent-foreground font-semibold">NZ</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Nurul Zaiha</div>
                  <div className="text-sm text-muted-foreground">AI Consultant, Cyberjaya</div>
                </div>
              </div>
            </div>

            <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Method KILAT betul-betul game changer! Dulu ambil 3 hari siap satu proposal, sekarang 2 jam je dengan AI. Clients pun more impressed!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-3">
                  <span className="text-accent-foreground font-semibold">RH</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Razak Hakim</div>
                  <div className="text-sm text-muted-foreground">Business Consultant, JB</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-20 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Jaminan Wang Dikembalikan 100%
          </h3>
          <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
            Tidak berpuas hati dengan e-book kami dalam tempoh 30 hari? Kami akan kembalikan wang anda tanpa soalan.
            Kami yakin dengan kualiti kandungan kami dan mahu anda belajar tanpa risiko.
          </p>
          <div className="flex items-center justify-center text-sm text-green-700 dark:text-green-400">
            <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Tiada risiko • Jaminan penuh • Proses mudah
          </div>
        </div>

        {/* Founder Credentials */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Kenapa Pilih KILAT?
            </h2>
            <p className="text-lg text-muted-foreground">
              Dipimpin oleh pakar AI berpengalaman dengan rekod prestasi yang terbukti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-24 h-24 bg-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-accent-foreground">ML</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Muhammad Luqman</h3>
              <p className="text-accent font-medium mb-4">Pengasas & Ketua Teknologi AI</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center">
                  <svg className="h-4 w-4 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  5+ tahun pengalaman dalam AI & Machine Learning
                </div>
                <div className="flex items-center justify-center">
                  <svg className="h-4 w-4 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Telah melatih 10,000+ profesional di Malaysia
                </div>
                <div className="flex items-center justify-center">
                  <svg className="h-4 w-4 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Pakar dalam implementasi AI untuk bisnes
                </div>
                <div className="flex items-center justify-center">
                  <svg className="h-4 w-4 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Konsultan AI untuk 50+ syarikat terkemuka
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-accent-foreground">MAQ</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Muhammad Aniq Qawiem</h3>
              <p className="text-accent font-medium mb-4">Pengasas & Pelabur Utama</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center">
                  <svg className="h-4 w-4 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Pelabur berpengalaman dalam teknologi
                </div>
                <div className="flex items-center justify-center">
                  <svg className="h-4 w-4 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Visi strategik untuk pertumbuhan AI di Malaysia
                </div>
                <div className="flex items-center justify-center">
                  <svg className="h-4 w-4 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Komited untuk pendidikan AI yang berkualiti
                </div>
                <div className="flex items-center justify-center">
                  <svg className="h-4 w-4 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Menyokong inovasi dan keusahawanan
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Soalan Lazim (FAQ)
            </h2>
            <p className="text-lg text-muted-foreground">
              Jawapan kepada soalan yang paling kerap ditanya
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Adakah saya perlu pengalaman AI sebelum ini?
              </h3>
              <p className="text-muted-foreground">
                Tidak sama sekali! E-book kami direka khas untuk pemula. Kami mulakan dari asas dan membimbing anda langkah demi langkah. Ramai pelajar kami yang tidak ada background AI tetapi berjaya menguasainya dalam masa singkat.
              </p>
            </div>

            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Berapa lama masa yang diperlukan untuk melihat hasil?
              </h3>
              <p className="text-muted-foreground">
                Kebanyakan pelajar kami mula melihat hasil dalam 1-2 minggu pertama. Untuk menguasai sepenuhnya, biasanya mengambil masa 1-2 bulan bergantung pada komitmen anda untuk berlatih.
              </p>
            </div>

            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Apakah yang berlaku jika saya tidak berpuas hati?
              </h3>
              <p className="text-muted-foreground">
                Kami menawarkan jaminan wang dikembalikan 100% dalam tempoh 30 hari. Jika anda tidak berpuas hati dengan kandungan e-book, hubungi kami dan kami akan kembalikan wang anda tanpa soalan.
              </p>
            </div>

            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                📱 Bolehkah saya akses e-book di telefon atau tablet?
              </h3>
              <p className="text-muted-foreground">
                Ya! E-book kami dalam format PDF dan boleh dibaca di mana-mana peranti - telefon, tablet, laptop, atau komputer. Anda juga boleh print jika mahu versi fizikal.
              </p>
            </div>

            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Adakah kandungan ini sesuai untuk bisnes saya?
              </h3>
              <p className="text-muted-foreground">
                Sudah tentu! E-book kami merangkumi penggunaan AI untuk pelbagai industri - dari e-commerce, marketing, customer service, hingga automasi operasi. Template dan contoh yang kami berikan boleh disesuaikan dengan bisnes anda.
              </p>
            </div>

            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                🔄 Adakah saya akan dapat update terkini?
              </h3>
              <p className="text-muted-foreground">
                Ya! Untuk pakej Standard dan Premium, anda akan mendapat update percuma. Dunia AI berubah pantas, jadi kami sentiasa mengemaskini kandungan untuk memastikan anda mendapat maklumat terkini.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-8">
            Dipercayai dan Disokong Oleh
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            <div className="flex items-center justify-center">
              <div className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-sm font-semibold text-muted-foreground">SSL Secure</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-sm font-semibold text-muted-foreground">256-bit Encryption</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-sm font-semibold text-muted-foreground">PayPal Verified</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-sm font-semibold text-muted-foreground">McAfee Secure</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 rounded-lg bg-muted/30 p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Kekal Terkini dengan Keluaran Baharu
          </h3>
          <p className="text-muted-foreground mb-6">
            Jadi yang pertama tahu apabila kami mengeluarkan e-book dan kursus AI baharu. Dapatkan harga awal eksklusif.
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
        </div>
      </div>
    </div>
  );
}