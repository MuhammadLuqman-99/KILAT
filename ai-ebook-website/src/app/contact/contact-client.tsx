"use client";

import { useState } from "react";

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Thank You!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Have questions about our AI resources or need help with your learning journey?
            KILAT is here to help Malaysian learners succeed in AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground shadow-sm ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-accent focus:border-accent transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground shadow-sm ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-accent focus:border-accent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-md border-border bg-background px-4 py-3 text-foreground shadow-sm ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-accent focus:border-accent transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="ebook-question">Ebook Question</option>
                  <option value="prompt-support">Prompt Support</option>
                  <option value="technical-issue">Technical Issue</option>
                  <option value="business-inquiry">Business Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-md border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground shadow-sm ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-accent focus:border-accent transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Other ways to reach us</h2>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-lg flex items-center justify-center mr-4">
                  <svg className="h-5 w-5 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground mb-2">
                    For general inquiries and support
                  </p>
                  <a href="mailto:hello@kilat.my" className="text-accent hover:text-accent/80 transition-colors">
                    hello@kilat.my
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground mb-2">
                    Quick questions and instant support
                  </p>
                  <a href="https://wa.me/60123456789" className="text-green-500 hover:text-green-600 transition-colors">
                    +60 12-345 6789
                  </a>
                </div>
              </div>

              {/* Telegram */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Telegram</h3>
                  <p className="text-muted-foreground mb-2">
                    Join our community channel
                  </p>
                  <a href="https://t.me/kilat_ai" className="text-blue-500 hover:text-blue-600 transition-colors">
                    @kilat_ai
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-lg flex items-center justify-center mr-4">
                  <svg className="h-5 w-5 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Response Time</h3>
                  <p className="text-muted-foreground mb-2">
                    We typically respond within
                  </p>
                  <p className="text-accent font-medium">24 hours on weekdays</p>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="mt-12 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Looking for quick answers?
              </h3>
              <p className="text-muted-foreground mb-4">
                Check out our frequently asked questions or browse our help resources.
              </p>
              <div className="space-x-4">
                <a href="#" className="text-accent hover:text-accent/80 transition-colors text-sm font-medium">
                  View FAQ →
                </a>
                <a href="#" className="text-accent hover:text-accent/80 transition-colors text-sm font-medium">
                  Help Center →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}