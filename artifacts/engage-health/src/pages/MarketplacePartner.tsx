import { useLayoutEffect } from "react";
import { useParams, Link } from "wouter";
import { PageLayout } from "@/components/layout";
import { useMarketplacePartners } from "@/hooks/useWordPress";
import { ArrowLeft } from "lucide-react";
import NotFound from "./not-found";

function addUtmToLinks(html: string, partnerSlug: string): string {
  return html.replace(/href="(https?:\/\/[^"]+)"/g, (_, url) => {
    try {
      const u = new URL(url);
      u.searchParams.set("utm_source", "engage-health-group");
      u.searchParams.set("utm_medium", "marketplace");
      u.searchParams.set("utm_campaign", partnerSlug);
      return `href="${u.toString()}"`;
    } catch {
      return `href="${url}"`;
    }
  });
}

export default function MarketplacePartner() {
  const { slug } = useParams<{ slug: string }>();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const { data, isLoading, isError } = useMarketplacePartners();

  if (isLoading) {
    return (
      <PageLayout className="bg-slate-50 min-h-screen">
        <div className="relative bg-[#003648] pt-24 pb-56" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-40 relative z-20 pb-24">
          <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 p-8 md:p-12 flex flex-col items-center gap-4">
                <div className="w-44 h-44 rounded-2xl bg-slate-200 animate-pulse" />
                <div className="h-6 w-40 bg-slate-200 rounded animate-pulse" />
                <div className="flex gap-2">
                  <div className="h-5 w-20 bg-slate-200 rounded-full animate-pulse" />
                  <div className="h-5 w-16 bg-slate-200 rounded-full animate-pulse" />
                </div>
                <div className="h-10 w-full bg-slate-200 rounded-[14px] animate-pulse mt-2" />
              </div>
              <div className="md:w-2/3 p-8 md:p-12 lg:p-16 space-y-4">
                <div className="h-4 w-36 bg-slate-200 rounded animate-pulse mb-8" />
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className={`h-3 bg-slate-200 rounded animate-pulse ${i % 4 === 3 ? "w-3/5" : "w-full"}`} />
                ))}
                <div className="h-4 w-32 bg-slate-200 rounded animate-pulse mt-6" />
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="h-3 w-5/6 bg-slate-200 rounded animate-pulse" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  const partner = data?.marketplacePartners?.nodes?.find((p: any) => p.slug === slug);

  if (isError || !partner) {
    return <NotFound />;
  }

  const categories: string[] = partner.categories?.nodes?.map((c: any) => c.name) ?? [];

  return (
    <PageLayout className="bg-slate-50 min-h-screen">
      {/* Header background */}
      <div className="relative bg-[#003648] pt-24 pb-56 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#76186f]/30 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/marketplace" className="inline-flex items-center text-sm font-semibold text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Marketplace
          </Link>
        </div>
      </div>

      {/* Main card */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-40 relative z-20 pb-24">
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          <div className="flex flex-col md:flex-row">

            {/* Left: Logo + meta */}
            <div className="md:w-1/3 bg-slate-50/50 p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col items-center text-center">
              <div className="relative mb-8">
                <div className="w-44 h-44 rounded-2xl bg-white border border-slate-100 shadow-md flex items-center justify-center p-4">
                  {partner.featuredImage?.node?.sourceUrl ? (
                    <img
                      src={partner.featuredImage.node.sourceUrl}
                      alt={partner.featuredImage.node.altText || partner.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#003648] font-black text-5xl">
                      {partner.title.charAt(0)}
                    </div>
                  )}
                </div>
              </div>

              <h1 className="text-2xl font-extrabold text-[#003648] mb-3">{partner.title}</h1>

              {categories.length > 0 && (
                <div className="flex flex-wrap gap-1.5 justify-center mb-6">
                  {categories.map((cat) => (
                    <span key={cat} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#003648]/10 text-[#003648]">
                      {cat}
                    </span>
                  ))}
                </div>
              )}

            </div>

            {/* Right: Content */}
            <div className="md:w-2/3 p-8 md:p-12 lg:p-16 flex flex-col justify-start">
              <h2 className="text-[#003648] text-sm font-black tracking-widest uppercase mb-8 flex items-center">
                About {partner.title}
                <div className="ml-6 h-px flex-1 bg-slate-100" />
              </h2>
              <div
                className="prose prose-slate max-w-none prose-headings:text-[#003648] prose-h5:text-sm prose-h5:font-black prose-h5:uppercase prose-h5:tracking-wider prose-p:text-slate-600 prose-p:leading-loose prose-a:text-[#76186f] hover:prose-a:text-[#003648] prose-strong:text-[#003648] prose-li:text-slate-600 prose-ul:my-2"
                dangerouslySetInnerHTML={{ __html: addUtmToLinks(partner.content || "<p>No information available.</p>", partner.slug) }}
              />
            </div>

          </div>
        </div>
      </div>
    </PageLayout>
  );
}
