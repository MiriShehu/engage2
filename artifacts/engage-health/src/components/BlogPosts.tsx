import { ArrowUpRight, Clock, Calendar } from "lucide-react";

const posts = [
  {
    category: "Health Tech",
    categoryColor: "bg-sky-100 text-sky-700",
    title: "Peering into the future of healthcare: highlights from Insurtech Insights 2025",
    excerpt:
      "From Terra API unifying wearable health data to the Anya app used by 7.2m NHS patients. We recap the most important health tech innovations shaping group insurance in 2025 and beyond.",
    date: "1 May 2025",
    readTime: "6 min read",
    author: "Nick Hale",
    authorInitials: "NH",
    authorGradient: "from-[#76186f] to-violet-500",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200&h=700",
    href: "https://www.engagehealthgroup.co.uk/peering-into-the-future-of-healthcare-highlights-from-insurtech-insights-2025/",
    featured: true,
  },
  {
    category: "Market Trends",
    categoryColor: "bg-violet-100 text-violet-700",
    title: "7 company health insurance trends to watch in 2025",
    excerpt:
      "Preventative care, AI claims processing, gender-specific cover and neurodiversity support: the trends reshaping how businesses think about PMI.",
    date: "12 Dec 2024",
    readTime: "5 min read",
    author: "Mike Hesch",
    authorInitials: "MH",
    authorGradient: "from-indigo-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=500",
    href: "https://www.engagehealthgroup.co.uk/7-company-health-insurance-trends-to-watch-in-2025/",
    featured: false,
  },
  {
    category: "PMI Insights",
    categoryColor: "bg-emerald-100 text-emerald-700",
    title: "Private medical insurance is in high demand. Here's why",
    excerpt:
      "6.2 million UK employees are now covered by PMI, a 30-year high. We break down what's driving the surge and what it means for your benefits strategy.",
    date: "5 Dec 2024",
    readTime: "4 min read",
    author: "Ian Abbott",
    authorInitials: "IA",
    authorGradient: "from-[#003648] to-teal-500",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800&h=500",
    href: "https://www.engagehealthgroup.co.uk/private-medical-insurance-is-in-high-demand-heres-why/",
    featured: false,
  },
];

export function BlogPosts() {
  const [featured, ...rest] = posts;

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/15">
              From the blog
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-tight">
              Latest insights &amp;
              <br />
              <span className="text-primary">industry thinking</span>
            </h2>
          </div>
          <a
            href="https://www.engagehealthgroup.co.uk/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-secondary border border-secondary/20 px-5 py-2.5 rounded-xl hover:bg-secondary hover:text-white transition-all duration-200 self-start sm:self-end shrink-0"
          >
            All articles
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 items-stretch">

          {/* Featured post */}
          <a
            href={featured.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl bg-secondary flex flex-col min-h-[480px] cursor-pointer"
          >
            {/* Image */}
            <div className="absolute inset-0">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative flex flex-col justify-end h-full p-8 md:p-10">
              <div className="flex items-center gap-3 mb-5">
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${featured.categoryColor}`}>
                  {featured.category}
                </span>
                <span className="text-white/40 text-xs flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {featured.date}
                </span>
                <span className="text-white/40 text-xs flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {featured.readTime}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-snug mb-4 group-hover:text-primary transition-colors duration-200">
                {featured.title}
              </h3>
              <p className="text-white/60 text-base leading-relaxed mb-6 max-w-lg">
                {featured.excerpt}
              </p>

              {/* Author + CTA */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-br flex items-center justify-center text-white text-xs font-bold shrink-0 ${featured.authorGradient}`}>
                    {featured.authorInitials}
                  </div>
                  <span className="text-white/70 text-sm font-medium">{featured.author}</span>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary transition-all duration-200">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </a>

          {/* Side posts */}
          <div className="flex flex-col gap-6">
            {rest.map((post, i) => (
              <a
                key={i}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-5 bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex-1 cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="relative sm:w-44 lg:w-full xl:w-44 h-44 sm:h-auto lg:h-44 xl:h-auto shrink-0 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-between p-5 xl:py-5 xl:pr-5 xl:pl-0 flex-1">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${post.categoryColor}`}>
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-secondary leading-snug mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-full bg-gradient-to-br flex items-center justify-center text-white text-[10px] font-bold shrink-0 ${post.authorGradient}`}>
                        {post.authorInitials}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-secondary">{post.author}</div>
                        <div className="text-xs text-gray-400">{post.date}</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
