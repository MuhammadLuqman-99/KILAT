"use client";

import { useState } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { prompts } from "@/data/prompts";

export default function PromptsPage() {
  const [selectedPrompt, setSelectedPrompt] = useState<any>(null);
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const freePrompts = prompts.filter(p => p.type === 'free');
  const premiumPrompts = prompts.filter(p => p.type === 'premium');
  const categories = [...new Set(prompts.map(p => p.category))];

  const copyToClipboard = async (promptText: string, promptId: string) => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopiedPrompt(promptId);
      setTimeout(() => setCopiedPrompt(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const openPromptModal = (prompt: any) => {
    setSelectedPrompt(prompt);
    setShowModal(true);
  };

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Perpustakaan Prompt AI
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Temui prompt AI yang berkuasa untuk meningkatkan produktiviti anda.
            Dari template percuma hingga strategi premium, cari prompt yang sempurna untuk sebarang tugas.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="bg-muted/30 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-foreground">{prompts.length}</div>
            <div className="text-sm text-muted-foreground">Jumlah Prompt</div>
          </div>
          <div className="bg-muted/30 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-foreground">{freePrompts.length}</div>
            <div className="text-sm text-muted-foreground">Prompt Percuma</div>
          </div>
          <div className="bg-muted/30 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-foreground">{categories.length}</div>
            <div className="text-sm text-muted-foreground">Kategori</div>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Tapis mengikut:</span>
            <select className="rounded-md border-border bg-background px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent">
              <option>Semua Kategori</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <select className="rounded-md border-border bg-background px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent">
              <option>Semua Jenis</option>
              <option>Percuma Sahaja</option>
              <option>Premium Sahaja</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Susun mengikut:</span>
            <select className="rounded-md border-border bg-background px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent">
              <option>Paling Popular</option>
              <option>Terbaru</option>
              <option>Rating Tertinggi</option>
              <option>Paling Banyak Digunakan</option>
            </select>
          </div>
        </div>

        {/* Free Prompts Section */}
        <section className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              Prompt Percuma
            </h2>
            <span className="text-sm text-muted-foreground">
              {freePrompts.length} prompt percuma tersedia
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {freePrompts.map((prompt) => (
              <div
                key={prompt.id}
                className="group relative flex flex-col overflow-hidden rounded-lg bg-background border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-1 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-semibold text-green-800 dark:bg-green-900/20 dark:text-green-400">
                      PERCUMA
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {prompt.rating}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    <Link href={`/prompts/${prompt.slug}`}>
                      {prompt.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {prompt.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
                      {prompt.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {prompt.uses.toLocaleString()} penggunaan
                    </span>
                  </div>
                </div>

                <div className="px-6 py-4 bg-muted/20 space-y-2">
                  <button
                    onClick={() => openPromptModal(prompt)}
                    className="block w-full text-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
                  >
                    Lihat & Salin Prompt
                  </button>
                  <button
                    onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                    className={`block w-full text-center rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
                      copiedPrompt === prompt.id
                        ? "border-green-500 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                        : "border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    {copiedPrompt === prompt.id ? "Disalin!" : "Salin Terus"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Premium Prompts Section */}
        <section className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              Prompt Premium
            </h2>
            <span className="text-sm text-muted-foreground">
              {premiumPrompts.length} prompt premium tersedia
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {premiumPrompts.map((prompt) => (
              <div
                key={prompt.id}
                className="group relative flex flex-col overflow-hidden rounded-lg bg-background border border-border hover:shadow-lg transition-shadow duration-300"
              >
                {/* Premium Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-flex items-center rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 px-2 py-1 text-xs font-semibold text-white">
                    PREMIUM
                  </span>
                </div>

                <div className="flex-1 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {prompt.rating}
                    </div>
                    <span className="text-lg font-bold text-foreground">
                      RM{prompt.price}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    <Link href={`/prompts/${prompt.slug}`}>
                      {prompt.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {prompt.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
                      {prompt.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {prompt.uses.toLocaleString()} penggunaan
                    </span>
                  </div>
                </div>

                <div className="px-6 py-4 bg-muted/20">
                  <Link
                    href={`/prompts/${prompt.slug}`}
                    className="block w-full text-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
                  >
                    Lihat Butiran
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Overview */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Layari mengikut Kategori
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => {
              const categoryPrompts = prompts.filter(p => p.category === category);
              return (
                <div
                  key={category}
                  className="group cursor-pointer rounded-lg bg-muted/30 p-4 hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    {category}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {categoryPrompts.length} prompt
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-20 rounded-lg bg-gradient-to-r from-accent/10 to-accent/5 p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Perlukan Prompt Khas?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Tidak dapat mencari prompt yang sempurna untuk kes penggunaan khusus anda? Pasukan pakar AI kami boleh mencipta
            prompt khas yang disesuaikan dengan keperluan tepat dan keperluan industri anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
            >
              Minta Prompt Khas
            </Link>
            <Link
              href="/ebooks"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Terokai E-book Kami
            </Link>
          </div>
        </div>

        {/* Prompt Preview Modal */}
        {showModal && selectedPrompt && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-background border border-border rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h3 className="text-xl font-semibold text-foreground">
                  {selectedPrompt.title}
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 overflow-y-auto max-h-96">
                <div className="mb-4">
                  <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-semibold text-green-800 dark:bg-green-900/20 dark:text-green-400 mb-2">
                    PERCUMA
                  </span>
                  <p className="text-muted-foreground text-sm">
                    {selectedPrompt.description}
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-foreground mb-2">Prompt AI:</h4>
                  <p className="text-sm text-muted-foreground font-mono leading-relaxed whitespace-pre-wrap">
                    {selectedPrompt.prompt}
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Cara Guna:</h4>
                  <ol className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                    <li>1. Salin prompt di atas</li>
                    <li>2. Gantikan teks dalam [KURUNGAN] dengan maklumat anda</li>
                    <li>3. Tampal ke ChatGPT, Claude, atau AI lain</li>
                    <li>4. Tekan Enter dan dapatkan hasil!</li>
                  </ol>
                </div>
              </div>

              <div className="p-6 border-t border-border bg-muted/20">
                <div className="flex gap-3">
                  <button
                    onClick={() => copyToClipboard(selectedPrompt.prompt, selectedPrompt.id)}
                    className={`flex-1 rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
                      copiedPrompt === selectedPrompt.id
                        ? "bg-green-500 text-white"
                        : "bg-accent text-accent-foreground hover:bg-accent/90"
                    }`}
                  >
                    {copiedPrompt === selectedPrompt.id ? "Prompt Disalin!" : "Salin Prompt"}
                  </button>
                  <Link
                    href={`/prompts/${selectedPrompt.slug}`}
                    className="flex-1 text-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Lihat Detail Penuh
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}