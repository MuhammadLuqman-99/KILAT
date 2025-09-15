import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "KILAT - Kuasai AI dengan E-book Pakar & Prompts | Malaysia",
    template: "%s | KILAT"
  },
  description: "Temui e-book AI terkini, prompts premium, dan berita AI terbaru dari platform pendidikan AI terdepan Malaysia. Kuasai kecerdasan buatan dengan sumber pembelajaran terpilih KILAT.",
  keywords: ["AI", "kecerdasan buatan", "e-book", "prompts", "pembelajaran", "kursus", "berita", "teknologi", "Malaysia", "KILAT"],
  authors: [{ name: "KILAT" }],
  creator: "KILAT",
  publisher: "KILAT",
  metadataBase: new URL("https://kilat.my"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kilat.my",
    title: "KILAT - Master AI with Expert Ebooks & Prompts | Malaysia",
    description: "Discover cutting-edge AI ebooks, premium prompts, and the latest AI news from Malaysia's leading AI education platform.",
    siteName: "KILAT",
  },
  twitter: {
    card: "summary_large_image",
    title: "KILAT",
    description: "Master AI with expert ebooks, prompts, and latest news from Malaysia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
