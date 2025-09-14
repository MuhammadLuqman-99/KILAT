# Content Management Guide

## 📝 How to Add New Content

### Adding New Ebooks

1. **Open the ebooks data file:**
   ```
   src/data/ebooks.ts
   ```

2. **Add your new ebook to the array:**
   ```typescript
   {
     id: "4", // Increment the ID
     title: "Your Ebook Title",
     description: "Comprehensive description of what the ebook covers...",
     price: 49.99,
     originalPrice: 79.99, // Optional - for showing discounts
     image: "/images/your-ebook-cover.jpg", // Add image to public/images/
     category: "Your Category",
     pages: 200,
     rating: 4.8,
     reviews: 150,
     author: "Your Name",
     features: [
       "Feature 1 that readers will get",
       "Feature 2 with practical benefits",
       "Feature 3 for added value",
       // Add more features as needed
     ],
     slug: "your-ebook-title-slug" // URL-friendly version
   }
   ```

3. **Add the ebook cover image:**
   - Place your image in `public/images/`
   - Use JPG or PNG format
   - Recommended size: 400x600px
   - Name it descriptively (e.g., `ebook-ai-mastery.jpg`)

### Adding New News Articles

1. **Open the news data file:**
   ```
   src/data/news.ts
   ```

2. **Add your new article:**
   ```typescript
   {
     id: "5", // Increment the ID
     title: "Your News Article Title",
     summary: "Brief summary that appears in listings...",
     content: `Full article content goes here. You can use:

   Multiple paragraphs with proper spacing.

   Key points:
   - Bullet point 1
   - Bullet point 2
   - Bullet point 3

   You can include technical details, quotes, and comprehensive information.

   The content supports basic markdown-style formatting.`,
     image: "/images/news-article-image.jpg",
     author: "Author Name",
     publishedAt: "2024-03-15T10:00:00Z", // ISO date format
     category: "AI Models", // Categories: AI Models, Regulation, Healthcare, Productivity
     readTime: 5, // Estimated reading time in minutes
     slug: "your-article-url-slug"
   }
   ```

3. **Add the article image:**
   - Place in `public/images/`
   - Recommended size: 800x400px
   - Use descriptive naming

### Adding New Prompts

1. **Open the prompts data file:**
   ```
   src/data/prompts.ts
   ```

2. **Add your new prompt:**
   ```typescript
   {
     id: "7", // Increment the ID
     title: "Your Prompt Title",
     description: "What this prompt helps users accomplish...",
     category: "Marketing", // Categories: Marketing, Programming, Content Creation, Business, Creative Writing
     prompt: `Your actual prompt template goes here.

   Use [VARIABLES] in brackets for user customization.

   Example: Create a marketing campaign for [PRODUCT/SERVICE] targeting [AUDIENCE] with a [TONE] tone.

   Include clear instructions and expected outputs.`,
     type: "free", // "free" or "premium"
     price: 9.99, // Only include if type is "premium"
     rating: 4.8,
     uses: 5420, // Number of times used
     slug: "your-prompt-slug"
   }
   ```

### Content Guidelines

#### Ebooks
- **Title:** Clear, benefit-focused, SEO-friendly
- **Description:** 2-3 sentences explaining value proposition
- **Features:** 3-5 bullet points highlighting key benefits
- **Price:** Competitive pricing based on value provided
- **Category:** Keep categories consistent across ebooks

#### News Articles
- **Title:** Newsworthy, specific, includes key terms
- **Summary:** 1-2 sentences for social sharing
- **Content:** Well-structured with subheadings and bullet points
- **Author:** Use consistent author names
- **Category:** Match existing categories for filtering

#### Prompts
- **Title:** Action-oriented, describes the outcome
- **Description:** Explains the specific use case
- **Prompt:** Clear instructions with customizable variables
- **Category:** Group similar prompts together
- **Type:** Start with free prompts to build audience

## 🖼️ Image Management

### Image Requirements
- **Format:** JPG or PNG (WebP supported)
- **Quality:** High resolution for retina displays
- **Size:** Optimize for web (under 500KB per image)
- **Alt Text:** Will be auto-generated from content

### Recommended Dimensions
- **Ebook covers:** 400x600px (2:3 ratio)
- **News images:** 800x400px (2:1 ratio)
- **Placeholder images:** Use the built-in gradient placeholders

### Image Optimization
```bash
# Install imagemin for optimization
npm install -g imagemin-cli imagemin-mozjpeg imagemin-pngquant

# Optimize images
imagemin public/images/*.jpg --out-dir=public/images --plugin=mozjpeg
imagemin public/images/*.png --out-dir=public/images --plugin=pngquant
```

## 🏷️ Categories Management

### Current Ebook Categories
- Prompt Engineering
- Business AI
- Creative AI
- Technical AI
- AI Tools

### Current News Categories
- AI Models
- Regulation
- Healthcare
- Productivity
- Research

### Current Prompt Categories
- Marketing
- Programming
- Content Creation
- Business
- Creative Writing

### Adding New Categories
1. Add to the relevant data file
2. Update filters in the corresponding page component
3. Consider SEO implications of new categories

## 🔍 SEO Best Practices

### Titles
- Include target keywords
- Keep under 60 characters
- Make them compelling and clickable

### Descriptions
- Expand on the title
- Include related keywords naturally
- Keep under 160 characters for meta descriptions

### Slugs
- Use hyphens to separate words
- Include primary keywords
- Keep concise but descriptive
- Example: `complete-guide-prompt-engineering`

## 🚀 Publishing Workflow

1. **Content Creation:**
   - Write content following guidelines
   - Optimize images
   - Test locally

2. **Review Process:**
   - Check all links work
   - Verify images load correctly
   - Test on mobile devices
   - Review for typos and grammar

3. **SEO Optimization:**
   - Verify meta titles and descriptions
   - Check slug URLs
   - Ensure proper categorization

4. **Deploy:**
   ```bash
   npm run build  # Test production build
   git add .
   git commit -m "Add new content: [description]"
   git push       # Deploy to production
   ```

## 📊 Content Performance

### Tracking Metrics
- Page views and engagement
- Conversion rates (for ebooks)
- Prompt usage statistics
- News article shares

### A/B Testing Ideas
- Different ebook pricing
- Alternative headlines
- Various call-to-action buttons
- Different content layouts

## 🔄 Content Updates

### Regular Maintenance
- Update outdated information
- Refresh old news articles
- Improve underperforming content
- Add new trending topics

### Seasonal Updates
- Holiday-themed content
- Industry event coverage
- Annual trend reports
- Technology updates

This content management system is designed to be simple yet powerful. Regular content updates will keep your audience engaged and improve your search engine rankings.