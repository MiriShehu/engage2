import { useState } from "react";
import { Link } from "wouter";
import { Loader2, Search, ChevronDown } from "lucide-react";
import { PageLayout } from "@/components/layout";
import { TrustBar } from "@/components/sections/trust";
import { useMarketplacePartners } from "@/hooks/useWordPress";
import { cn } from "@/lib/utils";

export default function Marketplace() {
  const { data, isLoading, isError } = useMarketplacePartners();
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const partners = data?.marketplacePartners?.nodes ?? [];

  // Collect unique categories in order of first appearance
  const categories = ["All", ...Array.from(
    new Set(
      partners.flatMap((p: any) => p.categories?.nodes?.map((c: any) => c.name) ?? [])
    )
  ).sort()];

  const filtered = partners.filter((p: any) => {
    const matchesCategory =
      activeCategory === "All" ||
      p.categories?.nodes?.some((c: any) => c.name === activeCategory);
    const matchesSearch =
      !search || p.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageLayout className="bg-gray-50">
      {/* Hero */}
      <section id="hero" className="bg-secondary py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-semibold mb-6 border border-white/10">
            Engage Health Group Marketplace
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight">
            Our trusted <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-400">
              partner network
            </span>
          </h1>
          <p className="text-white/65 text-xl max-w-2xl mx-auto mb-6">
            This space is dedicated to showcasing the diverse and innovative offerings of our trusted partners. We pride ourselves on delivering a truly holistic approach to employee benefits, which is why we've carefully curated a range of services designed to add meaningful value to any workplace – helping you engage and retain talent while supporting business growth.
          </p>
          <p className="text-white/65 text-xl max-w-2xl mx-auto mb-12">
            Our marketplace is ever evolving. We'll continue to expand with new categories and partners to keep pace with the changing employee benefits landscape – so watch this space!
          </p>

          {/* Scroll down button */}
          <button
            onClick={() => document.getElementById("partners")?.scrollIntoView({ behavior: "smooth" })}
            aria-label="Scroll to partners"
            className="group mx-auto flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors duration-300"
          >
            <span className="text-xs font-semibold tracking-widest uppercase">Browse partners</span>
            <span className="w-9 h-9 rounded-full border border-white/20 group-hover:border-white/60 flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 animate-bounce">
              <ChevronDown className="w-5 h-5" />
            </span>
          </button>
        </div>
      </section>

      <TrustBar />

      {/* Filters + Grid */}
      <section id="partners" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Search */}
          <div className="relative max-w-md mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search partners…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40"
            />
          </div>

          {/* Category pills */}
          {!isLoading && !isError && (
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all",
                    activeCategory === cat
                      ? "bg-secondary text-white border-secondary"
                      : "bg-white text-gray-600 border-gray-200 hover:border-secondary/40 hover:text-secondary"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Loading */}
          {isLoading && (
            <div className="py-32 flex flex-col items-center justify-center">
              <Loader2 className="w-8 h-8 animate-spin text-primary mb-4" />
              <p className="text-sm font-semibold text-muted-foreground">Loading partners…</p>
            </div>
          )}

          {/* Error */}
          {isError && (
            <div className="py-20 text-center text-gray-500">
              <p className="text-lg font-semibold mb-2">Unable to load partners</p>
              <p className="text-sm">Please try again later.</p>
            </div>
          )}

          {/* Grid */}
          {!isLoading && !isError && (
            <>
              <p className="text-sm text-gray-400 font-medium mb-6">{filtered.length} partner{filtered.length !== 1 ? "s" : ""}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filtered.map((partner: any) => (
                  <Link
                    key={partner.slug}
                    href={`/marketplace/${partner.slug}`}
                    className="group bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center gap-3 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="w-full h-16 flex items-center justify-center">
                      {partner.featuredImage?.node?.sourceUrl ? (
                        <img
                          src={partner.featuredImage.node.sourceUrl}
                          alt={partner.featuredImage.node.altText || partner.title}
                          className="max-h-14 max-w-full object-contain"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-black text-xl">
                          {partner.title.charAt(0)}
                        </div>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-gray-700 text-center leading-snug group-hover:text-secondary transition-colors">
                      {partner.title}
                    </p>
                    {partner.categories?.nodes?.[0] && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                        {partner.categories.nodes[0].name}
                      </span>
                    )}
                  </Link>
                ))}
              </div>

              {filtered.length === 0 && (
                <div className="py-20 text-center text-gray-400">
                  <p className="text-lg font-semibold mb-2">No partners found</p>
                  <p className="text-sm">Try a different category or search term.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
