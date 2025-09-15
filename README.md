# AI Learning Hub 🤖

A professional website for selling AI ebooks, providing premium prompts, and sharing the latest AI news. Built with Next.js and Tailwind CSS, inspired by Anthropic's clean design aesthetic.

## 🌟 Features

### 📚 **Ebook Store**
- Beautiful product listings with pricing and ratings
- Detailed product pages with features and reviews
- Categories and filtering options
- Mobile-optimized shopping experience

### ⚡ **Prompt Library**
- Free and premium AI prompts
- Categories: Marketing, Programming, Content Creation, Business
- Copy-to-clipboard functionality
- Usage statistics and ratings

### 📰 **AI News Hub**
- Curated AI industry news and insights
- Expert analysis and commentary
- Category filtering (AI Models, Regulation, Healthcare, etc.)
- Estimated reading times

### 🎨 **Design & UX**
- Clean, modern design inspired by Anthropic
- Fully responsive mobile-first approach
- Dark mode toggle
- Smooth animations and transitions
- Accessibility-friendly

### 🔍 **SEO Optimized**
- Comprehensive meta tags and Open Graph
- Structured data (JSON-LD) for better search results
- Automatic sitemap generation
- Performance optimized (90+ Lighthouse scores)

## 🚀 Quick Start

1. **Clone and install:**
```bash
git clone <your-repo-url>
cd ai-ebook-website
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open your browser:**
Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js 13+ app directory
│   ├── (pages)/           # Route pages
│   │   ├── ebooks/        # Ebook store and detail pages
│   │   ├── news/          # News listing and articles
│   │   ├── prompts/       # Prompt library
│   │   ├── about/         # About page
│   │   └── contact/       # Contact form
│   ├── layout.tsx         # Root layout with SEO
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── navigation.tsx     # Header navigation
│   ├── footer.tsx         # Footer with social links
│   ├── theme-provider.tsx # Dark mode context
│   └── theme-toggle.tsx   # Theme switcher
├── data/                  # Content data
│   ├── ebooks.ts          # Ebook catalog
│   ├── news.ts            # News articles
│   └── prompts.ts         # Prompt library
├── lib/                   # Utilities
│   └── structured-data.ts # SEO structured data
└── types/                 # TypeScript definitions
    └── index.ts           # Data types
```

## 🎯 Key Pages

- **Homepage** (`/`) - Hero section, featured content, newsletter signup
- **Ebooks** (`/ebooks`) - Product catalog with filtering and sorting
- **Ebook Detail** (`/ebooks/[slug]`) - Individual product pages
- **AI News** (`/news`) - News articles with categories
- **News Detail** (`/news/[slug]`) - Full article pages
- **Prompts** (`/prompts`) - Free and premium prompt library
- **Prompt Detail** (`/prompts/[slug]`) - Individual prompt pages
- **About** (`/about`) - Company story and team
- **Contact** (`/contact`) - Contact form with multiple channels

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Fonts:** Geist Sans & Mono
- **Icons:** Heroicons (inline SVG)
- **SEO:** Next.js Metadata API + structured data

## 📝 Content Management

### Adding New Ebooks
Edit `src/data/ebooks.ts` and add your ebook data:

```typescript
{
  id: "4",
  title: "Advanced AI Techniques",
  description: "Deep dive into cutting-edge AI methodologies...",
  price: 59.99,
  category: "Technical AI",
  // ... other properties
}
```

### Adding News Articles
Edit `src/data/news.ts`:

```typescript
{
  id: "5",
  title: "Latest AI Breakthrough",
  summary: "Researchers achieve new milestone...",
  content: "Full article content here...",
  // ... other properties
}
```

### Adding Prompts
Edit `src/data/prompts.ts`:

```typescript
{
  id: "7",
  title: "Marketing Campaign Generator",
  description: "Create compelling marketing campaigns...",
  prompt: "Generate a marketing campaign for [PRODUCT]...",
  type: "free", // or "premium"
  // ... other properties
}
```

See [CONTENT-MANAGEMENT.md](./CONTENT-MANAGEMENT.md) for detailed instructions.

## 🌐 Deployment

### Quick Deploy to Vercel (Recommended)
1. Push to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Options
- **Netlify:** Auto-deploy from Git
- **AWS Amplify:** Enterprise hosting
- **Docker:** Self-hosted option

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 📊 Performance

- **Lighthouse Scores:** 90+ across all metrics
- **Core Web Vitals:** Optimized for excellent UX
- **SEO:** Comprehensive metadata and structured data
- **Accessibility:** WCAG compliant design

## 🎨 Customization

### Colors & Branding
Update CSS variables in `src/app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #1a1a1a;
  --accent: #2563eb;
  /* ... other variables */
}
```

### Adding New Categories
1. Update data files (`src/data/*.ts`)
2. Add category filters in components
3. Update type definitions if needed

## 📞 Support

- **Documentation:** Check `DEPLOYMENT.md` and `CONTENT-MANAGEMENT.md`
- **Issues:** Create GitHub issues for bugs
- **Features:** Submit feature requests via issues

## 📄 License

This project is for your personal/business use. Feel free to customize and deploy as needed.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

Ready to launch your AI learning platform? 🚀