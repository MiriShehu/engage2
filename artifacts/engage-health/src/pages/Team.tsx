import { useEffect } from "react";
import { PageLayout } from "@/components/layout";
import { TrustBar } from "@/components/sections/trust";
import { Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTeamMembers } from "@/hooks/useWordPress";
import { Link } from "wouter";
import { departments } from "@/data/teamData";

const linkedinUrl = "https://www.linkedin.com/company/engage-health-group/";

function MemberCard({ member }: { member: any }) {
  const CardContent = (
    <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer">
      {/* Photo area — full height */}
      <div
        className="relative aspect-[3/4] overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${member.accent}12 0%, ${member.accent}28 100%)` }}
      >
        <div className="absolute top-0 left-0 right-0 h-1 z-10" style={{ background: member.accent }} />
        <img
          src={member.img}
          alt={member.name}
          className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
          onError={(e) => {
            const el = e.currentTarget;
            el.style.display = "none";
            const fallback = el.nextElementSibling as HTMLElement | null;
            if (fallback) fallback.style.display = "flex";
          }}
        />
        <div
          className="absolute inset-0 hidden items-center justify-center text-white text-4xl font-black"
          style={{ background: `linear-gradient(135deg, ${member.accent}, ${member.accent}99)` }}
        >
          {member.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
        </div>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#0077b5] shadow hover:bg-white transition-colors"
        >
          <Linkedin className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Info */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-1.5 mb-1">
          <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: member.accent }} />
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{member.title}</span>
        </div>
        <h3 className="text-base font-extrabold text-secondary mb-2 leading-tight">{member.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{member.bio}</p>
        <div className="flex flex-wrap gap-1.5">
          {member.tags.map((tag: string, i: number) => (
            <span key={i} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return member.slug ? (
    <Link href={`/team/${member.slug}`}>{CardContent}</Link>
  ) : (
    CardContent
  );
}

export default function Team() {
  const { data, isLoading, isError } = useTeamMembers();

  // Helper to strip HTML tags and perfectly decode entities from WP GraphQL excerpts
  const decodeHtmlEntities = (html: string) => {
    if (typeof window === "undefined") return html.replace(/(<([^>]+)>)/gi, "");
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  // Parse WordPress team members if available
  let dynamicDepartments = departments;
  if (!isError && data?.teamMembers?.nodes?.length > 0) {
    const wpMembers = data.teamMembers.nodes.map((node: any) => ({
      name: node.title,
      slug: node.slug,
      title: node.positionTitle || decodeHtmlEntities(node.excerpt || "").split(".")[0] || "Team Member",
      bio: decodeHtmlEntities(node.excerpt || node.content || ""),
      img: node.featuredImage?.node?.sourceUrl || "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
      accent: "#003648", // Default brand color
      tags: ["Engage Health"] as const, // Default tag
    }));

    // Prioritize Directors to the top
    wpMembers.sort((a: any, b: any) => {
      const aIsDirector = a.title.toLowerCase().includes("director");
      const bIsDirector = b.title.toLowerCase().includes("director");
      if (aIsDirector && !bIsDirector) return -1;
      if (!aIsDirector && bIsDirector) return 1;
      return 0; // maintain original query order
    });

    // Group all WP members into a single "Our Experts" department
    dynamicDepartments = [
      {
        name: "Our Experts",
        description: "Get to know the dedicated professionals working to secure the best outcomes for your business.",
        members: wpMembers
      }
    ];
  }

  return (
    <PageLayout className="bg-gray-50">
      {/* Hero */}
      <section className="bg-secondary py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-semibold mb-6 border border-white/10">
            The Engage Health Group team
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight">
            Meet the people who <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-400">
              work for you
            </span>
          </h1>
          <p className="text-white/65 text-xl max-w-2xl mx-auto mb-10">
            Our team brings over 30 years of combined experience from some of the world's leading insurers and benefits consultancies, all dedicated to finding the best outcomes for your business.
          </p>
          <div className="flex justify-center mb-12">
            <Link 
              href="/get-a-quote" 
              className="inline-flex items-center justify-center bg-primary hover:bg-[#5e1258] text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get a Free Quote
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto">
            {[
              { value: "30+", label: "Years combined experience" },
              { value: "70+", label: "Countries covered" },
              { value: "3×", label: "Award winners" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-3xl font-extrabold text-white">{stat.value}</div>
                <div className="text-white/60 text-xs font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Departments */}
      {isLoading ? (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="h-8 w-48 bg-gray-200 rounded-lg animate-pulse mb-3" />
              <div className="h-4 w-80 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
                  <div className="aspect-[3/4] bg-gray-200 animate-pulse" />
                  <div className="p-5 space-y-3">
                    <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
                    <div className="h-5 w-36 bg-gray-200 rounded animate-pulse" />
                    <div className="h-3 w-full bg-gray-200 rounded animate-pulse" />
                    <div className="h-3 w-5/6 bg-gray-200 rounded animate-pulse" />
                    <div className="flex gap-1.5 pt-1">
                      <div className="h-5 w-16 bg-gray-200 rounded-full animate-pulse" />
                      <div className="h-5 w-20 bg-gray-200 rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        dynamicDepartments.map((dept, di) => (
          <section key={di} className={cn("py-20", di % 2 === 0 ? "bg-gray-50" : "bg-white")}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <h2 className="text-2xl md:text-4xl font-extrabold text-secondary mb-3">{dept.name}</h2>
                <p className="text-gray-500 text-lg max-w-2xl">{dept.description}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {dept.members.map((member: any, mi: number) => (
                  <MemberCard key={mi} member={member} />
                ))}
              </div>
            </div>
          </section>
        ))
      )}
    </PageLayout>
  );
}
