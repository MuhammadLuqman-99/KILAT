import { Metadata } from "next";
import Link from "next/link";
import { ebooks } from "@/data/ebooks";

export const metadata: Metadata = {
  title: "AI Ebooks & Courses - Comprehensive Learning Resources",
  description: "Explore our collection of expert-written AI ebooks and courses. Master prompt engineering, business automation, and creative AI with comprehensive guides.",
};

export default function EbooksPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            AI Ebooks & Courses
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Master artificial intelligence with our expertly crafted ebooks and comprehensive courses.
            Each resource is designed to take you from beginner to expert in specific AI domains.
          </p>
        </div>

        {/* Filter/Stats Section */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-6 sm:mb-0">
            <span className="text-sm text-muted-foreground">
              {ebooks.length} comprehensive resources
            </span>
            <div className="h-4 w-px bg-border"></div>
            <span className="text-sm text-muted-foreground">
              Expert-authored content
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <select className="rounded-md border-border bg-background px-3 py-1 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Ebooks Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ebooks.map((ebook) => (
            <div
              key={ebook.id}
              className="group relative flex flex-col overflow-hidden rounded-lg bg-background border border-border hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image/Preview */}
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-accent rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <span className="text-xl font-bold text-accent-foreground">AI</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Ebook Cover</p>
                  </div>
                </div>
                {/* Discount Badge */}
                {ebook.originalPrice && (
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-800 dark:bg-red-900/20 dark:text-red-400">
                      Save {Math.round(((ebook.originalPrice - ebook.price) / ebook.originalPrice) * 100)}%
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
                    {ebook.category}
                  </span>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-3 w-3 ${
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
                    <span className="ml-1 text-xs text-muted-foreground">
                      {ebook.rating} ({ebook.reviews})
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  <Link href={`/ebooks/${ebook.slug}`}>
                    {ebook.title}
                  </Link>
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {ebook.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>{ebook.pages} pages</span>
                    <span>•</span>
                    <span>By {ebook.author}</span>
                  </div>
                </div>

                <ul className="space-y-1 mb-6">
                  {ebook.features.slice(0, 2).map((feature, index) => (
                    <li key={index} className="flex items-center text-xs">
                      <svg
                        className="h-3 w-3 text-accent mr-2 flex-shrink-0"
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

              {/* Pricing and CTA */}
              <div className="p-6 pt-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-foreground">
                      ${ebook.price}
                    </span>
                    {ebook.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${ebook.originalPrice}
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/ebooks/${ebook.slug}`}
                    className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 rounded-lg bg-muted/30 p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Stay Updated on New Releases
          </h3>
          <p className="text-muted-foreground mb-6">
            Be the first to know when we release new AI ebooks and courses. Get exclusive early-bird pricing.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              required
              className="flex-1 rounded-md border-border bg-background px-4 py-2 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="rounded-md bg-accent px-6 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}