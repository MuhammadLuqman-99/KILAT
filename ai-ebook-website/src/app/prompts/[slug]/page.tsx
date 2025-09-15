import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prompts } from "@/data/prompts";
import { CopyButton } from "@/components/CopyButton";

interface PromptPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return prompts.map((prompt) => ({
    slug: prompt.slug,
  }));
}

export async function generateMetadata({ params }: PromptPageProps): Promise<Metadata> {
  const { slug } = await params;
  const prompt = prompts.find((p) => p.slug === slug);

  if (!prompt) {
    return {
      title: "Prompt Not Found",
      description: "The requested prompt could not be found.",
    };
  }

  return {
    title: `${prompt.title} - AI Prompt Library`,
    description: prompt.description,
    openGraph: {
      title: prompt.title,
      description: prompt.description,
      type: "article",
    },
  };
}

export default async function PromptDetailPage({ params }: PromptPageProps) {
  const { slug } = await params;
  const prompt = prompts.find((p) => p.slug === slug);

  if (!prompt) {
    notFound();
  }

  const relatedPrompts = prompts.filter(p =>
    p.id !== prompt.id && p.category === prompt.category
  ).slice(0, 3);

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link href="/prompts" className="hover:text-accent transition-colors">
            Prompts
          </Link>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-foreground">{prompt.title}</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className={`inline-flex items-center rounded-md px-3 py-1 text-sm font-semibold ${
              prompt.type === 'free'
                ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
            }`}>
              {prompt.type === 'free' ? 'FREE' : 'PREMIUM'}
            </span>
            <span className="inline-flex items-center rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
              {prompt.category}
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            {prompt.title}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {prompt.description}
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {prompt.rating} rating
            </div>
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {prompt.uses.toLocaleString()} uses
            </div>
            {prompt.price && (
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                ${prompt.price}
              </div>
            )}
          </div>
        </div>

        {/* Prompt Content */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            The Prompt
          </h2>

          {prompt.type === 'free' ? (
            <div className="relative">
              <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-accent">
                <pre className="text-sm text-foreground whitespace-pre-wrap font-mono leading-relaxed">
                  {prompt.prompt}
                </pre>
              </div>
              <CopyButton
                text={prompt.prompt}
                className="absolute top-4 right-4"
              />
            </div>
          ) : (
            <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg p-8 text-center border-2 border-dashed border-accent/20">
              <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Premium Prompt - ${prompt.price}
              </h3>
              <p className="text-muted-foreground mb-6">
                This premium prompt includes advanced strategies, detailed instructions, and proven frameworks.
                Purchase to unlock the full content.
              </p>
              <button className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors">
                Purchase for ${prompt.price}
              </button>
              <p className="text-xs text-muted-foreground mt-3">
                Instant download • 30-day money-back guarantee
              </p>
            </div>
          )}
        </div>

        {/* How to Use */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            How to Use This Prompt
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <div className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                1
              </span>
              <div>
                <p className="font-medium text-foreground">Copy the prompt</p>
                <p className="text-sm">Copy the prompt template above to your clipboard.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                2
              </span>
              <div>
                <p className="font-medium text-foreground">Customize variables</p>
                <p className="text-sm">Replace the variables in brackets (like [PRODUCT/SERVICE]) with your specific information.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                3
              </span>
              <div>
                <p className="font-medium text-foreground">Use with AI tools</p>
                <p className="text-sm">Paste the customized prompt into ChatGPT, Claude, or your preferred AI assistant.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                4
              </span>
              <div>
                <p className="font-medium text-foreground">Iterate and refine</p>
                <p className="text-sm">Review the output and adjust the prompt variables as needed for better results.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Prompts */}
        {relatedPrompts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Related {prompt.category} Prompts
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPrompts.map((relatedPrompt) => (
                <Link
                  key={relatedPrompt.id}
                  href={`/prompts/${relatedPrompt.slug}`}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-lg bg-background border border-border hover:shadow-md transition-shadow p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                        relatedPrompt.type === 'free'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                      }`}>
                        {relatedPrompt.type === 'free' ? 'FREE' : 'PREMIUM'}
                      </span>
                      {relatedPrompt.type === 'premium' && (
                        <span className="text-sm font-semibold text-foreground">
                          ${relatedPrompt.price}
                        </span>
                      )}
                    </div>
                    <h3 className="font-medium text-foreground group-hover:text-accent transition-colors mb-2">
                      {relatedPrompt.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedPrompt.description}
                    </p>
                    <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
                      <span>{relatedPrompt.rating} ⭐</span>
                      <span>{relatedPrompt.uses.toLocaleString()} uses</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="rounded-lg bg-muted/30 p-6 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Want More Prompts Like This?
          </h3>
          <p className="text-muted-foreground mb-4">
            Explore our complete collection of AI prompts and find the perfect template for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/prompts"
              className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Browse All Prompts
            </Link>
            <Link
              href="/ebooks"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Check Out Our Ebooks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}