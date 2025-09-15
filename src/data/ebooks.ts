import { Ebook } from "@/types";

export const ebooks: Ebook[] = [
  {
    id: "1",
    title: "Complete Guide to Prompt Engineering",
    description: "Master the art of prompt engineering with this comprehensive guide covering ChatGPT, Claude, and other AI models. Learn advanced techniques to get better results from AI systems.",
    price: 49.99,
    originalPrice: 79.99,
    image: "/images/ebook-prompt-engineering.jpg",
    category: "Prompt Engineering",
    pages: 250,
    rating: 4.8,
    reviews: 342,
    author: "KILAT",
    features: [
      "200+ proven prompt templates",
      "Advanced prompt engineering techniques",
      "Real-world case studies",
      "ChatGPT, Claude, and GPT-4 strategies",
      "Bonus: 50 industry-specific prompts"
    ],
    slug: "complete-guide-prompt-engineering"
  },
  {
    id: "2",
    title: "AI Business Automation Mastery",
    description: "Transform your business with AI automation. Learn how to implement AI tools to streamline operations, increase productivity, and boost profits.",
    price: 59.99,
    originalPrice: 89.99,
    image: "/images/ebook-business-automation.jpg",
    category: "Business AI",
    pages: 180,
    rating: 4.9,
    reviews: 287,
    author: "KILAT",
    features: [
      "Step-by-step automation workflows",
      "ROI calculation frameworks",
      "Tool recommendations and comparisons",
      "Implementation checklists",
      "Bonus: Templates and resources"
    ],
    slug: "ai-business-automation-mastery"
  },
  {
    id: "3",
    title: "Creative AI: Art, Writing & Content",
    description: "Unleash your creativity with AI. Learn to create stunning art, compelling content, and engaging stories using the latest AI tools and techniques.",
    price: 39.99,
    originalPrice: 59.99,
    image: "/images/ebook-creative-ai.jpg",
    category: "Creative AI",
    pages: 220,
    rating: 4.7,
    reviews: 156,
    author: "KILAT",
    features: [
      "AI art generation techniques",
      "Content creation workflows",
      "Creative writing with AI",
      "Tool tutorials and tips",
      "Bonus: 100+ creative prompts"
    ],
    slug: "creative-ai-art-writing-content"
  },
  {
    id: "4",
    title: "AI-Powered Deployment & DevOps Mastery",
    description: "Revolutionize your deployment process with AI. Learn to automate server setup, generate deployment scripts, troubleshoot issues, and optimize performance using AI tools.",
    price: 69.99,
    originalPrice: 99.99,
    image: "/images/ebook-ai-deployment.jpg",
    category: "DevOps AI",
    pages: 320,
    rating: 4.8,
    reviews: 189,
    author: "KILAT",
    features: [
      "AI-generated deployment scripts untuk Laravel, Node.js, dan lain-lain",
      "Smart server configuration dengan AI analysis",
      "Automated troubleshooting dan performance optimization",
      "50+ deployment templates siap guna",
      "Bonus: Interactive AI deployment assistant",
      "Security scanning dan best practices dengan AI",
      "Cloud deployment strategies (AWS, DigitalOcean, etc.)",
      "Docker containerization dengan AI guidance"
    ],
    slug: "ai-powered-deployment-devops-mastery"
  }
];