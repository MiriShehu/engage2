import { Link } from "wouter";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { GlassBlogCard } from "@/components/ui/glass-blog-card-shadcnui";
import { useBlogPosts } from "@/hooks/useWordPress";

// Map category → tag label shown on card
function tagsFor(category: string): string[] {
  return [category];
}

export function BlogPosts() {
  const { data, isLoading, isError } = useBlogPosts();

  // Pick top 3 latest posts
  const wpPosts = data?.posts?.nodes?.map((node: any) => ({
    title: node.title,
    excerpt: (node.excerpt || "").replace(/(<([^>]+)>)/gi, ""),
    category: "Insights",
    mins: Math.ceil((node.content?.length || 0) / 1000) || 5, // Estimate
    date: new Date(node.date).toLocaleDateString("en-GB", { day: 'numeric', month: 'short', year: 'numeric' }),
    author: "Editor",
    img: node.featuredImage?.node?.sourceUrl || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    href: `/blog/${node.slug}`
  })) || [];

  const previewPosts = wpPosts.slice(0, 3);
  return (
    <section className="py-28 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/15">
              From the blog
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-tight">
              Latest insights &amp;
              <br />
              <span className="text-primary">industry thinking</span>
            </h2>
          </motion.div>

          <Link
            href="/knowledge-hub"
            className="inline-flex items-center gap-2 text-sm font-bold text-secondary border border-secondary/20 px-5 py-2.5 rounded-xl hover:bg-secondary hover:text-white transition-all duration-200 self-start sm:self-end shrink-0"
          >
            All articles
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {isLoading ? (
            <div className="col-span-full flex justify-center py-10">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : previewPosts.length > 0 ? (
            previewPosts.map((post: any, i: number) => (
              <motion.div
                key={post.title}
                className="h-full"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <GlassBlogCard
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.img}
                  author={{ name: post.author, avatar: "" }}
                  date={post.date}
                  readTime={`${post.mins} min read`}
                  tags={tagsFor(post.category)}
                  tagColor="#003648"
                  href={post.href ?? "/knowledge-hub"}
                  className="h-full"
                />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center text-slate-500 py-10">
              No recent posts found.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
