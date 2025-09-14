import { Prompt } from "@/types";

export const prompts: Prompt[] = [
  {
    id: "1",
    title: "Email Marketing Campaign Creator",
    description: "Generate compelling email marketing campaigns that convert. Perfect for product launches, newsletters, and promotional content.",
    category: "Marketing",
    prompt: "Create a high-converting email marketing campaign for [PRODUCT/SERVICE]. Include: subject line options, personalized greeting, compelling hook, main benefits, social proof, clear call-to-action, and follow-up sequence. Target audience: [AUDIENCE]. Tone: [TONE].",
    type: "free",
    rating: 4.8,
    uses: 12547,
    slug: "email-marketing-campaign-creator"
  },
  {
    id: "2",
    title: "Advanced Code Review Assistant",
    description: "Comprehensive code review that checks for bugs, performance issues, security vulnerabilities, and suggests improvements.",
    category: "Programming",
    prompt: "Perform a comprehensive code review of the following code:\n\n[CODE]\n\nAnalyze for:\n1. Logic errors and potential bugs\n2. Performance optimizations\n3. Security vulnerabilities\n4. Code maintainability and readability\n5. Best practices compliance\n6. Memory usage and efficiency\n\nProvide specific recommendations with examples and explain the reasoning behind each suggestion.",
    type: "premium",
    price: 9.99,
    rating: 4.9,
    uses: 8234,
    slug: "advanced-code-review-assistant"
  },
  {
    id: "3",
    title: "Blog Content Planner",
    description: "Create comprehensive blog content plans with topics, outlines, SEO keywords, and publishing schedules.",
    category: "Content Creation",
    prompt: "Create a comprehensive blog content plan for [NICHE/TOPIC]. Include:\n\n1. 10 high-impact blog post topics\n2. Target keywords for each topic\n3. Detailed outlines with H2/H3 headings\n4. Content pillars and themes\n5. Publishing schedule (weekly/monthly)\n6. Internal linking strategy\n7. Call-to-action suggestions\n\nTarget audience: [AUDIENCE]\nContent goals: [GOALS]",
    type: "free",
    rating: 4.7,
    uses: 15623,
    slug: "blog-content-planner"
  },
  {
    id: "4",
    title: "Business Strategy Generator",
    description: "Develop comprehensive business strategies with market analysis, competitive positioning, and growth tactics.",
    category: "Business",
    prompt: "Develop a comprehensive business strategy for [BUSINESS/PRODUCT]. Analyze:\n\n1. Market opportunity and size\n2. Target customer segments\n3. Competitive landscape analysis\n4. Unique value proposition\n5. Revenue model options\n6. Marketing and sales strategy\n7. Operational requirements\n8. Risk assessment and mitigation\n9. Growth projections and milestones\n10. Success metrics and KPIs\n\nProvide actionable recommendations with timelines and resource requirements.",
    type: "premium",
    price: 14.99,
    rating: 4.8,
    uses: 3456,
    slug: "business-strategy-generator"
  },
  {
    id: "5",
    title: "Creative Story Generator",
    description: "Generate engaging stories, characters, and plot ideas for any genre. Perfect for writers and content creators.",
    category: "Creative Writing",
    prompt: "Create an engaging story outline with the following elements:\n\nGenre: [GENRE]\nSetting: [TIME PERIOD/LOCATION]\nTheme: [MAIN THEME]\n\nInclude:\n1. Compelling protagonist with clear motivation\n2. Primary antagonist and conflict\n3. Supporting characters\n4. Plot structure (beginning, middle, end)\n5. Key plot points and turning moments\n6. Character development arcs\n7. Dialogue samples\n8. Setting descriptions\n\nMake it [TONE] and suitable for [TARGET AUDIENCE].",
    type: "free",
    rating: 4.6,
    uses: 9876,
    slug: "creative-story-generator"
  },
  {
    id: "6",
    title: "Social Media Growth Hacker",
    description: "Advanced social media strategies to grow your following, increase engagement, and drive conversions across all platforms.",
    category: "Marketing",
    prompt: "Create a comprehensive social media growth strategy for [PLATFORM/BUSINESS]:\n\n1. Content pillars and themes\n2. Posting schedule optimization\n3. Hashtag research and strategy\n4. Engagement tactics and community building\n5. Collaboration and partnership opportunities\n6. Viral content formulas\n7. Analytics and performance tracking\n8. Conversion optimization tactics\n9. Crisis management guidelines\n10. Growth hacking techniques\n\nTarget audience: [AUDIENCE]\nCurrent followers: [NUMBER]\nGoal: [SPECIFIC GROWTH TARGET]",
    type: "premium",
    price: 19.99,
    rating: 4.9,
    uses: 2134,
    slug: "social-media-growth-hacker"
  }
];