import { useLayoutEffect } from "react";
import { useParams, Link } from "wouter";
import { PageLayout } from "@/components/layout";
import { useMarketplacePartners } from "@/hooks/useWordPress";
import { Loader2, ArrowLeft, ExternalLink } from "lucide-react";
import NotFound from "./not-found";

export default function MarketplacePartner() {
  const { slug } = useParams<{ slug: string }>();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const { data, isLoading, isError } = useMarketplacePartners();

  if (isLoading) {
    return (
      <PageLayout className="bg-slate-50 relative min-h-[80vh]">
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="w-12 h-12 animate-spin text-[#003648]" />
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

              <Link
                href="/marketplace"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-[14px] bg-[#003648] text-white font-bold text-sm hover:bg-[#003648]/90 transition-colors mt-2"
              >
                <ArrowLeft className="w-4 h-4" /> All Partners
              </Link>
            </div>

            {/* Right: Content */}
            <div className="md:w-2/3 p-8 md:p-12 lg:p-16 flex flex-col justify-start">
              <h2 className="text-[#003648] text-sm font-black tracking-widest uppercase mb-8 flex items-center">
                About {partner.title}
                <div className="ml-6 h-px flex-1 bg-slate-100" />
              </h2>
              <div
                className="prose prose-slate max-w-none prose-headings:text-[#003648] prose-h5:text-sm prose-h5:font-black prose-h5:uppercase prose-h5:tracking-wider prose-p:text-slate-600 prose-p:leading-loose prose-a:text-[#76186f] hover:prose-a:text-[#003648] prose-strong:text-[#003648] prose-li:text-slate-600 prose-ul:my-2"
                dangerouslySetInnerHTML={{ __html: partner.content || "<p>No information available.</p>" }}
              />
            </div>

          </div>
        </div>
      </div>
    </PageLayout>
  );
}
