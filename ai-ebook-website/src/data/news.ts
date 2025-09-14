import { NewsArticle } from "@/types";

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "OpenAI Announces GPT-5: Revolutionary Advances in AI Reasoning",
    summary: "OpenAI unveils GPT-5 with unprecedented reasoning capabilities, multimodal understanding, and improved factual accuracy that could reshape how we interact with AI systems.",
    content: `OpenAI has officially announced GPT-5, marking a significant leap forward in artificial intelligence capabilities. The new model demonstrates remarkable improvements in logical reasoning, mathematical problem-solving, and contextual understanding that surpass its predecessors.

Key improvements include:
- Enhanced reasoning capabilities with complex multi-step problems
- Improved factual accuracy and reduced hallucinations
- Better understanding of context and nuance
- Advanced multimodal capabilities combining text, images, and audio

The announcement comes at a time when competition in the AI space is intensifying, with companies like Google, Anthropic, and Meta pushing the boundaries of what's possible with large language models.

Industry experts predict that GPT-5 will enable new applications in education, research, and professional services that were previously impossible with current AI technology.`,
    image: "/images/news-gpt5-announcement.jpg",
    author: "Sarah Chen",
    publishedAt: "2024-03-15T10:00:00Z",
    category: "AI Models",
    readTime: 5,
    slug: "openai-announces-gpt5-revolutionary-advances"
  },
  {
    id: "2",
    title: "AI Regulation: European Union Passes Comprehensive AI Act",
    summary: "The European Union has passed landmark AI regulation legislation that will impact how AI systems are developed, deployed, and used across member states.",
    content: `The European Union has made history by passing the world's first comprehensive AI regulation act, establishing a framework for the responsible development and deployment of artificial intelligence systems.

The legislation introduces a risk-based approach to AI regulation:
- Prohibited AI practices that pose unacceptable risks
- High-risk AI systems requiring strict compliance measures
- Limited risk systems with transparency obligations
- Minimal risk systems with voluntary codes of conduct

This regulatory framework will significantly impact tech companies operating in Europe and may set a global precedent for AI governance.

Companies have a grace period to ensure compliance, with full enforcement beginning in 2025. The regulations aim to protect fundamental rights while fostering innovation in the AI sector.`,
    image: "/images/news-eu-ai-act.jpg",
    author: "Marcus Rodriguez",
    publishedAt: "2024-03-12T14:30:00Z",
    category: "Regulation",
    readTime: 7,
    slug: "eu-passes-comprehensive-ai-act"
  },
  {
    id: "3",
    title: "Breakthrough in AI-Powered Drug Discovery Accelerates Medicine Development",
    summary: "Scientists use advanced AI models to discover potential treatments for rare diseases, reducing development time from years to months.",
    content: `Researchers at leading pharmaceutical companies have achieved a major breakthrough using AI to accelerate drug discovery, potentially revolutionizing how new medicines are developed.

The AI system successfully identified promising drug compounds for treating rare genetic disorders in just 4 months - a process that traditionally takes 3-5 years using conventional methods.

Key achievements include:
- 10x faster identification of drug candidates
- Higher success rates in early-stage trials
- Reduced costs for pharmaceutical research
- Focus on previously "undruggable" targets

This advancement could particularly benefit patients with rare diseases who currently have limited treatment options. The technology combines machine learning, molecular modeling, and vast biological databases to predict how different compounds will interact with disease targets.

Several major pharmaceutical companies are now investing heavily in similar AI-driven drug discovery platforms, signaling a major shift in how new medicines will be developed in the coming decade.`,
    image: "/images/news-ai-drug-discovery.jpg",
    author: "Dr. Elena Vasquez",
    publishedAt: "2024-03-10T09:15:00Z",
    category: "Healthcare",
    readTime: 6,
    slug: "breakthrough-ai-drug-discovery-medicine"
  },
  {
    id: "4",
    title: "Microsoft Copilot Integration Reaches 1 Billion Users Worldwide",
    summary: "Microsoft's AI assistant Copilot has reached a milestone of 1 billion users across its various products, reshaping workplace productivity.",
    content: `Microsoft announced that its AI assistant Copilot has reached 1 billion users across Microsoft 365, Windows, and developer tools, representing the fastest adoption of any productivity technology in history.

The milestone highlights the rapid integration of AI into everyday work:
- 300% increase in user productivity reported
- 85% of users say Copilot improves their daily work experience
- Integration across Word, Excel, PowerPoint, and Teams
- Significant impact on coding productivity through GitHub Copilot

Microsoft CEO Satya Nadella emphasized that this represents just the beginning of AI transformation in the workplace. The company is investing $10 billion annually in AI development and infrastructure to support continued growth.

The success has prompted competitors like Google and Apple to accelerate their own AI assistant development, intensifying competition in the productivity software market.`,
    image: "/images/news-microsoft-copilot.jpg",
    author: "James Wilson",
    publishedAt: "2024-03-08T16:45:00Z",
    category: "Productivity",
    readTime: 4,
    slug: "microsoft-copilot-1-billion-users"
  }
];