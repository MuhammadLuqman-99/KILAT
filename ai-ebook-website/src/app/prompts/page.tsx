import { Metadata } from "next";
import Link from "next/link";
import { prompts } from "@/data/prompts";

export const metadata: Metadata = {
  title: "AI Prompt Library - Free & Premium Prompts Collection",
  description: "Discover our extensive collection of AI prompts for ChatGPT, Claude, and other AI models. Free and premium prompts for marketing, coding, writing, and business.",
};

export default function PromptsPage() {
  const freePrompts = prompts.filter(p => p.type === 'free');
  const premiumPrompts = prompts.filter(p => p.type === 'premium');
  const categories = [...new Set(prompts.map(p => p.category))];

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            AI Prompt Library
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Discover powerful AI prompts to supercharge your productivity.
            From free templates to premium strategies, find the perfect prompt for any task.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="bg-muted/30 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-foreground">{prompts.length}</div>
            <div className="text-sm text-muted-foreground">Total Prompts</div>
          </div>
          <div className="bg-muted/30 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-foreground">{freePrompts.length}</div>
            <div className="text-sm text-muted-foreground">Free Prompts</div>
          </div>
          <div className="bg-muted/30 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-foreground">{categories.length}</div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Filter by:</span>
            <select className="rounded-md border-border bg-background px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent">
              <option>All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <select className="rounded-md border-border bg-background px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent">
              <option>All Types</option>
              <option>Free Only</option>
              <option>Premium Only</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <select className="rounded-md border-border bg-background px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Highest Rated</option>
              <option>Most Used</option>
            </select>
          </div>
        </div>

        {/* Free Prompts Section */}
        <section className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              Free Prompts
            </h2>
            <span className="text-sm text-muted-foreground">
              {freePrompts.length} free prompts available
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
                      FREE
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
                      {prompt.uses.toLocaleString()} uses
                    </span>
                  </div>
                </div>

                <div className="px-6 py-4 bg-muted/20">
                  <Link
                    href={`/prompts/${prompt.slug}`}
                    className="block w-full text-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
                  >
                    Use This Prompt
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Premium Prompts Section */}
        <section className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              Premium Prompts
            </h2>
            <span className="text-sm text-muted-foreground">
              {premiumPrompts.length} premium prompts available
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
                      ${prompt.price}
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
                      {prompt.uses.toLocaleString()} uses
                    </span>
                  </div>
                </div>

                <div className="px-6 py-4 bg-muted/20">
                  <Link
                    href={`/prompts/${prompt.slug}`}
                    className="block w-full text-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Overview */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Browse by Category
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
                    {categoryPrompts.length} prompts
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-20 rounded-lg bg-gradient-to-r from-accent/10 to-accent/5 p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need Custom Prompts?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Can't find the perfect prompt for your specific use case? Our team of AI experts can create
            custom prompts tailored to your exact needs and industry requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
            >
              Request Custom Prompts
            </Link>
            <Link
              href="/ebooks"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Explore Our Ebooks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}