export interface KnowledgeHubPost {
  title: string;
  author: string;
  date: string;
  mins: number;
  category: string;
  img: string;
  excerpt: string;
  featured?: boolean;
  href?: string;
}

export const knowledgeHubPosts: KnowledgeHubPost[] = [
  {
    title: "iGaming employees reveal all: employee benefits and beyond",
    author: "Mel Dixon",
    date: "10 Feb 2026",
    mins: 4,
    category: "Industry Report",
    img: "https://www.engagehealthgroup.co.uk/wp-content/uploads/2026/02/igaming-report-desk-3.png",
    excerpt: "Free report uncovering what iGaming employees really think about their employee benefits — and what employers can do about it.",
    featured: true,
  },
  {
    title: "Peering into the future of healthcare… Highlights from Insurtech Insights 2025",
    author: "Mel Dixon",
    date: "1 May 2025",
    mins: 5,
    category: "Events",
    img: "https://www.engagehealthgroup.co.uk/wp-content/uploads/2025/05/Insurtech-Insights-2025-banner-1.png",
    excerpt: "Insurtech Insights 2025 brought together the world's leading technology innovators, all vying to prove the value of their products.",
    href: "/blog/insurtech-insights-2025",
  },
  {
    title: "How employee benefits can tackle workplace productivity",
    author: "Mel Dixon",
    date: "24 Apr 2025",
    mins: 5,
    category: "Employee Benefits",
    img: "https://www.engagehealthgroup.co.uk/wp-content/uploads/2025/04/What-role-can-employee-benefits-play-in-improving-workplace-productivity.jpg",
    excerpt: "Discover how the right employee benefits strategy can directly improve output, reduce absenteeism and boost morale across your workforce.",
  },
  {
    title: "Navigating healthcare & health insurance on the Isle of Man",
    author: "Mel Dixon",
    date: "14 Apr 2025",
    mins: 5,
    category: "International",
    img: "https://www.engagehealthgroup.co.uk/wp-content/uploads/2025/04/health-insurance-in-the-isle-of-man.jpg",
    excerpt: "A practical guide for employers with staff based on the Isle of Man, covering healthcare options and insurance considerations.",
  },
  {
    title: "How to provide Medical Evacuation Insurance to employees",
    author: "Mel Dixon",
    date: "13 Mar 2025",
    mins: 4,
    category: "International",
    img: "https://www.engagehealthgroup.co.uk/wp-content/uploads/2025/03/How-to-provide-Medical-Evacuation-Insurance-to-employees.jpg",
    excerpt: "Everything HR teams and global employers need to know about arranging medical evacuation cover for internationally mobile staff.",
  },
  {
    title: "New AXA Global Healthcare app unites health, wellbeing & policy support",
    author: "Mel Dixon",
    date: "26 Feb 2025",
    mins: 3,
    category: "Product News",
    img: "https://www.engagehealthgroup.co.uk/wp-content/uploads/2025/02/axa-global-healthcare-app.jpg",
    excerpt: "AXA Global Healthcare has launched a new app bringing health tools, wellbeing resources and policy management under one roof.",
  },
  {
    title: "Exploring health insurance in Jersey: a broker's guide for employers",
    author: "Mel Dixon",
    date: "13 Feb 2025",
    mins: 5,
    category: "International",
    img: "https://www.engagehealthgroup.co.uk/wp-content/uploads/2025/02/Exploring-health-insurance-in-Jersey.jpg",
    excerpt: "An in-depth look at how health insurance works in Jersey and what employers need to consider when covering staff there.",
  },
  {
    title: "Global employee benefits fragmenting? Here's the fix…",
    author: "Mel Dixon",
    date: "30 Jan 2025",
    mins: 4,
    category: "International",
    img: "https://www.engagehealthgroup.co.uk/wp-content/uploads/2025/01/Global-employee-benefits-fragmenting-Heres-the-fix2.jpg",
    excerpt: "If your global benefits are managed across multiple providers and markets, here's how to consolidate and simplify.",
  },
  {
    title: "Are these the most comprehensive health insurance policies for UK companies?",
    author: "Mel Dixon",
    date: "15 Jan 2025",
    mins: 5,
    category: "Group Health",
    img: "https://www.engagehealthgroup.co.uk/wp-content/uploads/2023/08/Are-these-the-most-comprehensive-health-insurance-policies-for-UK-companies-1.jpg",
    excerpt: "A breakdown of the most comprehensive group health insurance policies currently available to UK businesses of all sizes.",
  },
  {
    title: "7 company health insurance trends to watch in 2025",
    author: "Mel Dixon",
    date: "12 Dec 2024",
    mins: 4,
    category: "Trends",
    img: "https://www.engagehealthgroup.co.uk/wp-content/uploads/2024/12/7-health-insurance-trends.jpg",
    excerpt: "From virtual GPs to mental health integration — the key trends shaping company health insurance in 2025.",
  },
  {
    title: "Private medical insurance is in high demand. Here's why…",
    author: "Mel Dixon",
    date: "5 Dec 2024",
    mins: 3,
    category: "Group Health",
    img: "https://www.engagehealthgroup.co.uk/wp-content/uploads/2024/12/private-medical-insurance.jpg",
    excerpt: "NHS waiting lists have driven demand for private medical insurance to record highs. We explore what this means for employers.",
  },
  {
    title: "8 mental health insurance options for UK businesses",
    author: "Mel Dixon",
    date: "6 Nov 2024",
    mins: 5,
    category: "Mental Health",
    img: "https://www.engagehealthgroup.co.uk/wp-content/uploads/2024/11/8-mental-health-insurance-options-for-UK-businesses.jpg",
    excerpt: "A guide to the eight most effective mental health insurance and support options UK businesses can offer their employees.",
  },
];

export const categoryColors: Record<string, string> = {
  "Employee Benefits": "#003648",
  "International":     "#76186f",
  "Group Health":      "#16a34a",
  "Industry Report":   "#d97706",
  "Events":            "#0891b2",
  "Product News":      "#7c3aed",
  "Trends":            "#dc2626",
  "Mental Health":     "#db2777",
};

export const categories = [
  "All", "Employee Benefits", "International", "Group Health",
  "Industry Report", "Events", "Product News", "Trends", "Mental Health",
];
