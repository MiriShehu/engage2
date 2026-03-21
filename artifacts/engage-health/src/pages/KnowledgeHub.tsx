import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/layout";
import { ArrowRight, Clock, User, Search, BookOpen, Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import { useBlogPosts } from "@/hooks/useWordPress";

const POSTS_PER_PAGE = 9;

function getPageRange(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | "…")[] = [1];
  if (current > 3) pages.push("…");
  for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) pages.push(i);
  if (current < total - 2) pages.push("…");
  pages.push(total);
  return pages;
}

export default function KnowledgeHub() {
  const [active, setActive] = useState("All");
  const [query,  setQuery]  = useState("");
  const [page,   setPage]   = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, isError } = useBlogPosts();

  // Parse WP posts into the same format as our static posts
  const wpPosts = data?.posts?.nodes?.map((node: any) => ({
    title: node.title,
    excerpt: (node.excerpt || "").replace(/(<([^>]+)>)/gi, ""),
    category: "Insights",
    mins: 5,
    date: new Date(node.date).toLocaleDateString("en-GB", { day: 'numeric', month: 'short', year: 'numeric' }),
    author: "Editor",
    img: node.featuredImage?.node?.sourceUrl || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    href: `/knowledge-hub/${node.slug}`,
    featured: false
  })) || [];

  // Combine WP posts with static mock posts for now. If WP fails, it uses mock posts.
  const combinedPosts = wpPosts;

  // We can dynamically extract categories from the imported WP posts
  // Currently mock WP data uses a hardcoded "Insights" category
  const categories = ["All", ...Array.from(new Set(wpPosts.map((p: any) => p.category)))];

  const filtered = combinedPosts.filter((p: any) => {
    const matchCat  = active === "All" || p.category === active;
    const matchQ    = !query || p.title.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  const featured = filtered.find((p: any) => p.featured);
  const rest      = filtered.filter((p: any) => !p.featured);

  // Reset to page 1 whenever filter or search changes
  useEffect(() => { setPage(1); }, [active, query]);

  const totalPages = Math.ceil(rest.length / POSTS_PER_PAGE);
  const pagePosts  = rest.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);
  const startIdx   = (page - 1) * POSTS_PER_PAGE + 1;
  const endIdx     = Math.min(page * POSTS_PER_PAGE, rest.length);

  const goToPage = (p: number) => {
    setPage(p);
    if (gridRef.current) {
      const top = gridRef.current.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <PageLayout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
        .kh { font-family: 'Outfit', sans-serif; }
        .kh-card { transition: box-shadow 0.2s, transform 0.2s; }
        .kh-card:hover { box-shadow: 0 12px 36px -8px rgba(0,54,72,0.14); transform: translateY(-3px); }
        .kh-img { transition: transform 0.4s ease; }
        .kh-card:hover .kh-img { transform: scale(1.04); }
        .kh-cat-btn { transition: all 0.15s; }
        .kh-cat-btn.active { background: #003648; color: white; }
        .kh-cat-btn:not(.active):hover { background: #f1f5f9; }
      `}</style>

      <div className="kh bg-[#f8fafc] min-h-screen">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden py-20"
          style={{ background: "linear-gradient(135deg, #00263a 0%, #003648 55%, #1a0a40 100%)" }}>
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
            style={{ background: "rgba(118,24,111,0.15)" }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5" style={{ letterSpacing: "-0.02em" }}>
              Knowledge Hub Articles
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 italic" style={{ fontWeight: 300 }}>
              "The only thing to do with good advice is to pass it on" – Oscar Wilde
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles…"
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white text-slate-800 text-sm outline-none shadow-lg placeholder-slate-400 focus:ring-2 focus:ring-green-400/40"
              />
            </div>
          </div>
        </section>

        {/* ── Category filter ── */}
        <div className="sticky top-[63px] z-30 bg-white border-b border-slate-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex gap-2 overflow-x-auto scrollbar-none">
            {categories.map((cat: any) => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`kh-cat-btn flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold border border-slate-200 ${active === cat ? "active" : "text-slate-600 bg-white"}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

          {/* ── Featured post ── */}
          {featured && (
            <div className="mb-12">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Featured</p>
              <div className="kh-card bg-white rounded-xl overflow-hidden border border-slate-100 grid md:grid-cols-[1.4fr_1fr]">
                <div className="overflow-hidden aspect-[16/9] md:aspect-auto">
                  <Link href={featured.href ?? "#"} className="block w-full h-full">
                    <img src={featured.img} alt={featured.title}
                      className="kh-img w-full h-full object-cover" />
                  </Link>
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4 bg-[#003648]">
                      {featured.category}
                    </span>
                    <Link href={featured.href ?? "#"}>
                      <h2 className="text-2xl font-black text-[#003648] hover:text-[#76186f] transition-colors leading-tight mb-4" style={{ letterSpacing: "-0.01em" }}>
                        {featured.title}
                      </h2>
                    </Link>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-5">
                      <span className="flex items-center gap-1.5"><User className="w-3 h-3" />{featured.author}</span>
                      <span>{featured.date}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{featured.mins} min read</span>
                    </div>
                    <Link href={featured.href ?? "#"}
                      className="btn-cta inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold group">
                      Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Grid ── */}
          {rest.length > 0 && (
            <>
              <div ref={gridRef} className="flex items-center justify-between mb-6 flex-wrap gap-2">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {active === "All" ? "Latest articles" : active}
                  <span className="ml-2 font-normal normal-case text-slate-300">({rest.length})</span>
                </p>
                {rest.length > POSTS_PER_PAGE && (
                  <p className="text-xs text-slate-400">
                    Showing <span className="font-semibold text-slate-600">{startIdx}–{endIdx}</span> of <span className="font-semibold text-slate-600">{rest.length}</span> articles
                  </p>
                )}
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pagePosts.map((post: any, i: number) => (
                  <article key={i}
                    className="kh-card bg-white rounded-xl overflow-hidden border border-slate-100 flex flex-col cursor-default">
                    <div className="overflow-hidden aspect-[16/9] relative">
                      <Link href={post.href ?? "#"} className="block w-full h-full">
                        <img src={post.img} alt={post.title}
                          className="kh-img w-full h-full object-cover" />
                      </Link>
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold text-white bg-[#003648]">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      <Link href={post.href ?? "#"} className="flex-1">
                        <h3 className="font-black text-[#003648] hover:text-[#76186f] transition-colors text-base leading-snug mb-3 flex-1"
                          style={{ letterSpacing: "-0.01em" }}>
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-3 text-xs text-slate-400">
                          <span>{post.date}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.mins} min</span>
                        </div>
                        <Link href={post.href ?? "#"}
                          className="flex items-center gap-1 text-xs font-bold text-[#003648] hover:text-[#76186f] transition-colors group">
                          Read <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* ── Pagination ── */}
              {totalPages > 1 && (
                <div className="mt-10 flex items-center justify-center gap-1.5 flex-wrap">
                  {/* Prev */}
                  <button
                    onClick={() => goToPage(page - 1)}
                    disabled={page === 1}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" /> Prev
                  </button>

                  {/* Page numbers */}
                  {getPageRange(page, totalPages).map((p, i) =>
                    p === "…" ? (
                      <span key={`ellipsis-${i}`} className="px-2 py-2 text-xs text-slate-400 select-none">…</span>
                    ) : (
                      <button
                        key={p}
                        onClick={() => goToPage(p as number)}
                        className="w-9 h-9 rounded-lg text-xs font-bold border transition-colors"
                        style={page === p
                          ? { background: "#003648", color: "white", borderColor: "#003648" }
                          : { background: "white", color: "#475569", borderColor: "#e2e8f0" }
                        }
                        onMouseEnter={e => { if (page !== p) (e.currentTarget as HTMLButtonElement).style.background = "#f1f5f9"; }}
                        onMouseLeave={e => { if (page !== p) (e.currentTarget as HTMLButtonElement).style.background = "white"; }}
                      >
                        {p}
                      </button>
                    )
                  )}

                  {/* Next */}
                  <button
                    onClick={() => goToPage(page + 1)}
                    disabled={page === totalPages}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    Next <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              <BookOpen className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="font-semibold">No articles found</p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
