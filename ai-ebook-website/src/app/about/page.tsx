import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tentang KILAT - Misi & Cerita Kami | Pendidikan AI Malaysia",
  description: "Ketahui misi KILAT untuk mendemokratisasikan pendidikan AI di Malaysia melalui ebook pakar, prompt premium, dan berita terpilih. Kenali pasukan kami dan temui cerita kami.",
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Tentang KILAT
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Kami dalam misi untuk mendemokratisasikan pendidikan AI di Malaysia dan memberdayakan semua orang untuk memanfaatkan
            kuasa transformatif kecerdasan buatan. KILAT bermaksud "panahan" dalam Bahasa Melayu - mewakili komitmen kami untuk pembelajaran AI yang pantas dan berimpak.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Misi Kami
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dalam dunia yang berubah pantas dengan kecerdasan buatan, kami percaya bahawa semua orang
                patut mendapat akses kepada pendidikan AI berkualiti tinggi dan alat praktikal. Misi kami adalah
                untuk merapatkan jurang antara konsep AI yang kompleks dengan aplikasi praktikal.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Melalui ebook yang dibuat pakar, prompt yang telah diuji, dan berita industri terpilih,
                kami membina ekosistem pembelajaran menyeluruh yang memberdayakan individu dan
                perniagaan untuk berkembang maju dalam era AI.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="text-2xl font-bold text-foreground">5,000+</div>
                  <div className="text-sm text-muted-foreground">Pelajar Malaysia</div>
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="text-2xl font-bold text-foreground">25+</div>
                  <div className="text-sm text-muted-foreground">Sumber Terpilih</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg p-8 text-center">
              <div className="w-24 h-24 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-accent-foreground">AI</span>
              </div>
              <p className="text-muted-foreground">
                Memperkasakan minda dengan pengetahuan AI sejak 2023
              </p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Apa Yang Kami Buat
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Ebook Pakar</h3>
              <p className="text-muted-foreground">
                Panduan menyeluruh yang ditulis oleh pengamal dan penyelidik AI, merangkumi segala-galanya
                dari kejuruteraan prompt hingga automasi perniagaan.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Prompt Premium</h3>
              <p className="text-muted-foreground">
                Template prompt dan strategi yang telah diuji yang memberikan hasil konsisten merentas
                model AI yang berbeza dan kes penggunaan.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Berita & Wawasan AI</h3>
              <p className="text-muted-foreground">
                Berita terpilih dan analisis pakar untuk memastikan anda sentiasa dikemaskini tentang perkembangan terkini
                dalam kecerdasan buatan.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Nilai-Nilai Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Kualiti Terdahulu</h3>
              <p className="text-muted-foreground">
                Setiap sumber yang kami cipta menjalani ujian dan semakan yang ketat untuk memastikan ia memberikan
                nilai sebenar dan hasil praktikal.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Pembelajaran Mudah Diakses</h3>
              <p className="text-muted-foreground">
                Kami percaya pendidikan AI patut mudah diakses oleh semua orang, tanpa mengira latar belakang teknikal
                atau tahap pengalaman mereka.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Fokus Praktikal</h3>
              <p className="text-muted-foreground">
                Kandungan kami direka untuk aplikasi dunia sebenar, bukan sekadar pemahaman teori.
                Setiap pelajaran mempunyai nilai praktikal serta-merta.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Inovasi Berterusan</h3>
              <p className="text-muted-foreground">
                Kami kekal di barisan hadapan perkembangan AI, sentiasa mengemaskini sumber kami untuk
                mencerminkan alat dan teknik terkini.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Pasukan Kami
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Pasukan kami yang bersemangat berdedikasi untuk menjadikan pendidikan AI mudah diakses dan praktikal untuk semua orang di Malaysia dan seterusnya.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              {
                name: "Muhammad Luqman",
                role: "Pengasas & Ketua Teknologi AI",
                description: "Penyelidik dan pendidik AI yang mengajar, menyelidik, dan membangunkan teknologi AI terdepan. Bersemangat untuk menjadikan konsep AI yang kompleks mudah diakses melalui pendidikan praktikal."
              },
              {
                name: "Muhammad Aniq Qawiem",
                role: "Pengasas & Pelabur Utama",
                description: "Pelabur berwawasan dan rakan strategik yang memacu pertumbuhan KILAT dan misi untuk mendemokratisasikan pendidikan AI di seluruh Malaysia dan seterusnya."
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-semibold text-accent-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-sm text-accent mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Join Us Section */}
        <section className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Sertai Komuniti Pembelajaran Kami
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Bersedia untuk mempercepatkan perjalanan AI anda? Terokai sumber kami, berhubung dengan pelajar lain,
            dan kekal terkini dengan yang terbaru dalam kecerdasan buatan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ebooks"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
            >
              Terokai Ebook
            </Link>
            <Link
              href="/prompts"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Layari Prompt
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}