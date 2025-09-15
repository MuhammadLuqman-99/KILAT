# AI Learning Hub - Deployment Guide

## 🚀 Quick Deploy to Vercel

The fastest way to deploy your AI Learning Hub website:

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Complete AI Learning Hub website"
   git branch -M main
   git remote add origin https://github.com/yourusername/ai-ebook-website.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

Your site will be live in minutes!

## 🏗️ Alternative Deployment Options

### Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings will be detected automatically
6. Click "Deploy site"

### AWS Amplify
1. Push code to GitHub
2. Go to AWS Amplify Console
3. Click "New app" → "Host web app"
4. Connect your GitHub repository
5. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `out` (if using static export)
6. Click "Save and deploy"

### Docker (Self-hosted)
Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t ai-learning-hub .
docker run -p 3000:3000 ai-learning-hub
```

## ⚙️ Environment Variables

For production deployment, set these environment variables:

```bash
# Required
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=https://your-domain.com

# Optional - Email service (for contact form)
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password

# Optional - Analytics
GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX
```

## 🔧 Build Configuration

The project is configured for optimal production builds:

- **Static Generation:** Pages are pre-generated for better performance
- **Image Optimization:** Next.js optimizes images automatically
- **Code Splitting:** JavaScript bundles are split for faster loading
- **SEO:** Comprehensive metadata and structured data included

## 📊 Performance Optimization

### Lighthouse Scores Target:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

### Key optimizations included:
- ✅ Responsive images with WebP support
- ✅ Font optimization with `next/font`
- ✅ Critical CSS inlined
- ✅ Lazy loading for images
- ✅ Optimized Tailwind CSS bundle
- ✅ Gzip compression ready

## 🌐 Domain Configuration

After deploying:

1. **Custom Domain:**
   - Add your domain in your hosting provider's dashboard
   - Update DNS records to point to your hosting provider
   - Configure SSL certificate (usually automatic)

2. **Update Configuration:**
   ```typescript
   // Update in src/app/layout.tsx
   metadataBase: new URL("https://your-actual-domain.com")
   ```

## 📈 Analytics Setup

### Google Analytics
1. Get your GA4 tracking ID
2. Add to environment variables
3. Update `src/app/layout.tsx` to include analytics script

### Search Console
1. Verify ownership of your domain
2. Submit sitemap: `https://your-domain.com/sitemap.xml`
3. Monitor search performance

## 🔄 Content Management

### Adding New Ebooks
Edit `src/data/ebooks.ts`:
```typescript
{
  id: "4",
  title: "Your New Ebook Title",
  description: "Description...",
  price: 39.99,
  // ... other properties
}
```

### Adding New News Articles
Edit `src/data/news.ts`:
```typescript
{
  id: "5",
  title: "Latest AI Development",
  content: "Full article content...",
  // ... other properties
}
```

### Adding New Prompts
Edit `src/data/prompts.ts`:
```typescript
{
  id: "7",
  title: "New Powerful Prompt",
  prompt: "Your prompt template here...",
  // ... other properties
}
```

## 🔒 Security Checklist

- ✅ HTTPS enabled (automatic with modern hosts)
- ✅ Environment variables secured
- ✅ No sensitive data in client-side code
- ✅ Content Security Policy ready
- ✅ XSS protection enabled

## 🚨 Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Image Loading Issues
- Ensure images are in `public/images/` directory
- Check image paths in data files
- Verify image formats are supported (JPG, PNG, WebP)

### Dark Mode Issues
- Check if system preferences are detected
- Verify Tailwind CSS dark mode configuration
- Test theme toggle functionality

## 📞 Support

If you encounter issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [Tailwind CSS documentation](https://tailwindcss.com/docs)
3. Check deployment provider's documentation
4. Open an issue in the project repository

## 🎉 You're Ready!

Your AI Learning Hub website is now ready for production. The site includes:

- 🏠 **Homepage** with hero section and feature showcases
- 📚 **Ebooks page** with detailed product listings
- 📰 **News section** with article management
- ⚡ **Prompts library** with free and premium options
- ℹ️ **About page** with team and mission info
- 📧 **Contact page** with working contact form
- 🌙 **Dark mode** toggle functionality
- 📱 **Fully responsive** design
- 🔍 **SEO optimized** with meta tags and structured data
- ⚡ **Performance optimized** for fast loading

Happy deploying! 🚀