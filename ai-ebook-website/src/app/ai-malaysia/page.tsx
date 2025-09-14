import { Metadata } from "next";
import Link from "next/link";
import { MalaysianAINews } from "@/components/malaysian-ai-news";
import { MalaysiaAIRoadmap } from "@/components/malaysia-ai-roadmap";
import { fetchAllMalaysianAINews, fallbackNews } from "@/lib/news-api";

export const metadata: Metadata = {
  title: "AI Malaysia - Pertumbuhan, Peluang & Masa Depan | KILAT",
  description: "Temui pertumbuhan pesat kecerdasan buatan di Malaysia. Jelajahi inisiatif kerajaan, ekosistem startup, trend pelaburan, dan peluang dalam landskap AI Malaysia.",
  keywords: ["AI Malaysia", "kecerdasan buatan Malaysia", "dasar AI Malaysia", "syarikat AI Malaysia", "pelaburan AI Malaysia", "transformasi digital Malaysia"],
};

export default async function AIMalaysiaPage() {
  // Fetch initial news data
  let initialNews;
  try {
    initialNews = await fetchAllMalaysianAINews();
  } catch (error) {
    console.error('Error fetching initial news:', error);
    initialNews = fallbackNews;
  }
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-accent to-accent/80 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
            Kecerdasan Buatan di Malaysia
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
            Temui bagaimana Malaysia dengan pesat menjadi hab AI serantau, memacu inovasi merentas industri
            dan memperkasakan perniagaan untuk bersaing di peringkat global melalui inisiatif strategik kerajaan
            dan pelaburan sektor swasta.
          </p>
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 px-8 py-3 text-accent font-medium">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse mr-3"></div>
            Perjalanan Transformasi AI Malaysia
          </div>
        </div>

        {/* Key Statistics */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Gambaran Keseluruhan Pasaran AI Malaysia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-6 text-center border">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">RM15.6B</div>
              <div className="text-sm text-muted-foreground font-medium">Nilai Pasaran AI menjelang 2025</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-6 text-center border">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">500+</div>
              <div className="text-sm text-muted-foreground font-medium">Startup & Syarikat AI</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-6 text-center border">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">80%</div>
              <div className="text-sm text-muted-foreground font-medium">Perniagaan Merancang Penggunaan AI</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg p-6 text-center border">
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">25K+</div>
              <div className="text-sm text-muted-foreground font-medium">Pekerjaan AI Dijangka menjelang 2030</div>
            </div>
          </div>
        </section>

        {/* Government Initiatives */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Government Leadership & Policy Framework
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The Malaysian government has positioned AI as a strategic priority for economic growth through
                comprehensive policies, substantial investments, and systematic talent development programs.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">National AI Framework 2021-2025</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive roadmap for AI development and adoption across all government and private sectors</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">RM1 Billion Strategic Investment</h3>
                    <p className="text-sm text-muted-foreground">Government funding allocated for AI research, development, and comprehensive talent development programs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">AI Talent Development Initiative</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive programs designed to train 10,000 AI professionals by 2025</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">AI Ethics & Governance Framework</h3>
                    <p className="text-sm text-muted-foreground">Responsible AI development guidelines ensuring ethical implementation and data protection</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-8 border">
              <div className="text-center">
                <div className="w-24 h-24 bg-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Malaysia AI Roadmap 2021-2025</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Strategic national plan positioning Malaysia as Southeast Asia's leading AI hub through systematic development and implementation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            AI Transformation Across Industries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:border-accent/50">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Financial Services</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Banks implementing AI for fraud detection, credit scoring, and automated customer service solutions.
              </p>
              <div className="text-xs text-muted-foreground">
                <span className="font-medium">Leading adopters:</span> Maybank, CIMB, Public Bank
              </div>
            </div>

            <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:border-accent/50">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Agriculture Technology</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Smart farming solutions for palm oil and rice production using IoT sensors and AI analytics platforms.
              </p>
              <div className="text-xs text-muted-foreground">
                <span className="font-medium">Applications:</span> Precision agriculture, crop monitoring systems
              </div>
            </div>

            <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:border-accent/50">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Healthcare Innovation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                AI-powered diagnostics, telemedicine platforms, and pharmaceutical research acceleration initiatives.
              </p>
              <div className="text-xs text-muted-foreground">
                <span className="font-medium">Focus areas:</span> Hospital digitization, patient care optimization
              </div>
            </div>

            <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:border-accent/50">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Manufacturing Excellence</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Industry 4.0 adoption featuring predictive maintenance and automated quality control systems.
              </p>
              <div className="text-xs text-muted-foreground">
                <span className="font-medium">Key sectors:</span> Electronics, automotive manufacturing
              </div>
            </div>

            <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:border-accent/50">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">E-commerce Innovation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Personalized shopping experiences and sophisticated supply chain optimization solutions.
              </p>
              <div className="text-xs text-muted-foreground">
                <span className="font-medium">Market leaders:</span> Shopee, Lazada driving innovation
              </div>
            </div>

            <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:border-accent/50">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Transportation Systems</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Smart traffic management systems and autonomous vehicle development programs.
              </p>
              <div className="text-xs text-muted-foreground">
                <span className="font-medium">Implementation:</span> Grab, KTMB AI integration projects
              </div>
            </div>
          </div>
        </section>

        {/* Leading Companies */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Leading Malaysian AI Companies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "ViTrox Technologies",
                description: "AI-powered machine vision and automated test equipment solutions",
                achievement: "Public listed AI company"
              },
              {
                name: "Silverlake Axis",
                description: "AI solutions for banking and comprehensive financial services",
                achievement: "Regional fintech leader"
              },
              {
                name: "Favoriot",
                description: "IoT and AI platform for smart city solutions and urban development",
                achievement: "Smart city innovator"
              },
              {
                name: "Aerodyne Group",
                description: "AI-powered drone analytics and industrial automation solutions",
                achievement: "Drone AI pioneer"
              },
              {
                name: "Supahands",
                description: "AI-enhanced data processing and digital workforce services",
                achievement: "Digital workforce leader"
              },
              {
                name: "PolicyStreet",
                description: "AI-driven insurance and innovative financial products",
                achievement: "InsurTech innovator"
              }
            ].map((company, index) => (
              <div key={index} className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:border-accent/50">
                <h3 className="font-semibold text-foreground text-lg mb-2">{company.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{company.description}</p>
                <div className="inline-flex items-center text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {company.achievement}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges and Opportunities */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
                <svg className="w-8 h-8 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                Key Challenges
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-red-200 dark:border-red-800 pl-4">
                  <h3 className="font-semibold text-foreground mb-2">Talent Shortage</h3>
                  <p className="text-sm text-muted-foreground">Critical need for skilled AI professionals, data scientists, and machine learning engineers</p>
                </div>
                <div className="border-l-4 border-orange-200 dark:border-orange-800 pl-4">
                  <h3 className="font-semibold text-foreground mb-2">Data Quality & Infrastructure</h3>
                  <p className="text-sm text-muted-foreground">Ensuring clean, structured data and high-performance computing capabilities</p>
                </div>
                <div className="border-l-4 border-yellow-200 dark:border-yellow-800 pl-4">
                  <h3 className="font-semibold text-foreground mb-2">SME Adoption Barriers</h3>
                  <p className="text-sm text-muted-foreground">Helping small and medium enterprises understand AI benefits and implementation</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
                <svg className="w-8 h-8 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Major Opportunities
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-green-200 dark:border-green-800 pl-4">
                  <h3 className="font-semibold text-foreground mb-2">ASEAN Regional Hub</h3>
                  <p className="text-sm text-muted-foreground">Strategic location to serve Southeast Asian markets with AI solutions</p>
                </div>
                <div className="border-l-4 border-blue-200 dark:border-blue-800 pl-4">
                  <h3 className="font-semibold text-foreground mb-2">Diverse Economic Base</h3>
                  <p className="text-sm text-muted-foreground">Multiple industries ready for AI transformation and digital adoption</p>
                </div>
                <div className="border-l-4 border-purple-200 dark:border-purple-800 pl-4">
                  <h3 className="font-semibold text-foreground mb-2">Government Support</h3>
                  <p className="text-sm text-muted-foreground">Strong policy framework and substantial financial backing for AI initiatives</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Outlook */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Malaysia's AI Future Roadmap
          </h2>
          <div className="bg-gradient-to-r from-accent/5 to-accent/10 rounded-xl p-8 border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-foreground mb-3">2025 Strategic Goals</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>RM15.6B AI market value achievement</li>
                  <li>10,000 trained AI professionals</li>
                  <li>Comprehensive government AI adoption</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-foreground mb-3">2030 Vision</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Regional AI hub status</li>
                  <li>25,000 AI jobs created</li>
                  <li>80% business AI solution adoption</li>
                </ul>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-foreground mb-3">Long-term Impact</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>AI contributing 12-15% to GDP</li>
                  <li>Sustainable development goals achieved</li>
                  <li>Global AI innovation recognition</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KILAT Mission */}
        <section className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl p-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-accent/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-6">KILAT's Mission for Malaysia</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              As Malaysia advances its AI transformation journey, KILAT is committed to empowering every Malaysian
              with the knowledge and skills needed to thrive in the AI-driven future. We're not just teaching AI
              fundamentals - we're building Malaysia's AI-ready workforce through comprehensive education and practical training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ebooks"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
              >
                Explore AI Education Resources
              </Link>
              <Link
                href="/prompts"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-8 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Try AI Prompt Library
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-8 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Join the AI Revolution
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Malaysia AI Roadmap Section */}
      <MalaysiaAIRoadmap />

      {/* Live AI News Malaysia Section */}
      <MalaysianAINews initialNews={initialNews} />
    </div>
  );
}