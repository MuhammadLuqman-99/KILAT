import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About KILAT - Our Mission & Story | Malaysia AI Education",
  description: "Learn about KILAT's mission to democratize AI education in Malaysia through expert-crafted ebooks, premium prompts, and curated news. Meet our team and discover our story.",
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            About KILAT
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We're on a mission to democratize AI education in Malaysia and empower everyone to harness
            the transformative power of artificial intelligence. KILAT means "lightning" in Malay - representing our commitment to rapid, impactful AI learning.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Misi Kami (Our Mission)
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In a world rapidly transformed by artificial intelligence, we believe that everyone
                should have access to high-quality AI education and practical tools. Our mission is
                to bridge the gap between complex AI concepts and practical application.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Through expertly crafted ebooks, battle-tested prompts, and curated industry news,
                we're building a comprehensive learning ecosystem that empowers individuals and
                businesses to thrive in the AI era.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="text-2xl font-bold text-foreground">5,000+</div>
                  <div className="text-sm text-muted-foreground">Malaysian Learners</div>
                </div>
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="text-2xl font-bold text-foreground">25+</div>
                  <div className="text-sm text-muted-foreground">Curated Resources</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg p-8 text-center">
              <div className="w-24 h-24 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-accent-foreground">AI</span>
              </div>
              <p className="text-muted-foreground">
                Empowering minds with AI knowledge since 2023
              </p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Expert Ebooks</h3>
              <p className="text-muted-foreground">
                Comprehensive guides written by AI practitioners and researchers, covering everything
                from prompt engineering to business automation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Premium Prompts</h3>
              <p className="text-muted-foreground">
                Battle-tested prompt templates and strategies that deliver consistent results across
                different AI models and use cases.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">AI News & Insights</h3>
              <p className="text-muted-foreground">
                Curated news and expert analysis to keep you informed about the latest developments
                in artificial intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Quality First</h3>
              <p className="text-muted-foreground">
                Every resource we create undergoes rigorous testing and review to ensure it delivers
                real value and practical results.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Accessible Learning</h3>
              <p className="text-muted-foreground">
                We believe AI education should be accessible to everyone, regardless of their technical
                background or experience level.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Practical Focus</h3>
              <p className="text-muted-foreground">
                Our content is designed for real-world application, not just theoretical understanding.
                Every lesson has immediate practical value.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Continuous Innovation</h3>
              <p className="text-muted-foreground">
                We stay at the forefront of AI developments, constantly updating our resources to
                reflect the latest tools and techniques.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Our Team
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our diverse team of AI researchers, engineers, and educators brings together decades
            of experience in machine learning, software development, and educational content creation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "AI Research Lead",
                description: "Former Google AI researcher with 10+ years in machine learning and natural language processing."
              },
              {
                name: "Marcus Rodriguez",
                role: "Content Director",
                description: "Educational content expert who has trained over 50,000 professionals in emerging technologies."
              },
              {
                name: "Elena Vasquez",
                role: "Technical Writer",
                description: "Specialist in translating complex technical concepts into accessible, practical learning materials."
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
            Join Our Learning Community
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ready to accelerate your AI journey? Explore our resources, connect with fellow learners,
            and stay updated with the latest in artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ebooks"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
            >
              Explore Ebooks
            </Link>
            <Link
              href="/prompts"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Browse Prompts
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}