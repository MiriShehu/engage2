import { useLayoutEffect } from "react";
import { useParams, Link } from "wouter";
import { PageLayout } from "@/components/layout";
import { useTeamMembers } from "@/hooks/useWordPress";
import { ArrowLeft, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import NotFound from "./not-found";

export default function TeamMemberProfile() {
  const { slug } = useParams<{ slug: string }>();

  // Scroll to top when navigating to this page immediately before paint
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const { data, isLoading, isError } = useTeamMembers();

  if (isLoading) {
    return (
      <PageLayout className="bg-slate-50 min-h-screen">
        <div className="relative bg-[#003648] pt-24 pb-56" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-40 relative z-20 pb-24">
          <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 p-8 md:p-12 flex flex-col items-center gap-4">
                <div className="w-48 h-48 rounded-full bg-slate-200 animate-pulse" />
                <div className="h-6 w-36 bg-slate-200 rounded animate-pulse" />
                <div className="h-4 w-28 bg-slate-200 rounded animate-pulse" />
                <div className="w-full space-y-2 mt-4">
                  <div className="h-10 bg-slate-200 rounded-[14px] animate-pulse" />
                  <div className="h-10 bg-slate-200 rounded-[14px] animate-pulse" />
                </div>
              </div>
              <div className="md:w-2/3 p-8 md:p-12 lg:p-16 space-y-4">
                <div className="h-4 w-32 bg-slate-200 rounded animate-pulse mb-8" />
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className={`h-3 bg-slate-200 rounded animate-pulse ${i % 3 === 2 ? "w-4/6" : "w-full"}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  const member = data?.teamMembers?.nodes?.find((n: any) => n.slug === slug);

  if (isError || !member) {
    return <NotFound />;
  }

  // Extract job title from WP content HTML
  const jobTitleMatch = member.content?.match(/Job title:?\s*<\/strong><\/p>\s*<p>([^<]+)/i);
  const positionTitle = jobTitleMatch ? jobTitleMatch[1].trim() : null;

  // Generate email from name
  const nameParts = member.title.trim().toLowerCase().split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';
  const memberEmail = nameParts.length > 1
    ? `${firstName}.${lastName}@engagehealthgroup.co.uk`
    : `${firstName}@engagehealthgroup.co.uk`;

  return (
    <PageLayout className="bg-slate-50 min-h-screen">
      {/* Premium Header Background */}
      <div className="relative bg-[#003648] pt-24 pb-56 overflow-hidden">
        {/* Subtle patterned overlay */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        {/* Accent glow using brand purple */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#76186f]/30 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/team" className="inline-flex items-center text-sm font-semibold text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Team
          </Link>
        </div>
      </div>

      {/* Main Profile Card - overlapping header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-40 relative z-20 pb-24">
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            
            {/* Left Column: Photo & Quick Info */}
            <div className="md:w-1/3 bg-slate-50/50 p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col items-center text-center">
              <div className="relative mb-8 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#003648] to-[#76186f] rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-8 border-white shadow-xl relative bg-white z-10">
                  {member.featuredImage?.node?.sourceUrl ? (
                    <img
                      src={member.featuredImage.node.sourceUrl}
                      alt={member.title}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-100 text-[#003648] font-black text-6xl">
                      {member.title.charAt(0)}
                    </div>
                  )}
                </div>
              </div>

              <h1 className="text-2xl font-extrabold text-[#003648] mb-1">{member.title}</h1>
              {positionTitle && (
                <p className="text-[#76186f] font-bold text-sm uppercase tracking-wider mb-8">
                  {positionTitle}
                </p>
              )}

              {/* Contact Info */}
              <div className="flex flex-col gap-2.5 w-full max-w-xs mx-auto mb-6">
                <a 
                  href="tel:01273974419" 
                  className="group flex items-center justify-center gap-3 w-full px-4 py-2.5 rounded-[14px] bg-slate-50 border border-slate-100 text-slate-600 hover:bg-[#003648] hover:text-white hover:border-[#003648] font-bold text-[13px] hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <Phone className="w-4 h-4 flex-shrink-0 transition-colors group-hover:text-white" /> 
                  <span className="truncate whitespace-nowrap">
                    01273 974419
                  </span>
                </a>
                <a 
                  href={`mailto:${memberEmail}`} 
                  className="group flex items-center justify-center gap-3 w-full px-4 py-2.5 rounded-[14px] bg-slate-50 border border-slate-100 text-slate-600 hover:bg-[#003648] hover:text-white hover:border-[#003648] font-bold text-[13px] hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 transition-colors group-hover:text-white" /> 
                  <span className="truncate whitespace-nowrap">
                    {memberEmail}
                  </span>
                </a>
              </div>

              {/* Social links */}
              <div className="flex gap-3 justify-center mb-2">
                <a 
                  href="https://www.linkedin.com/company/engage-health-group/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white shadow-sm border border-slate-100 hover:bg-[#0077b5] hover:text-white text-slate-400 hover:border-[#0077b5] hover:shadow-md flex items-center justify-center transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 fill-current" />
                </a>
                <a 
                  href="https://twitter.com/engagehealthgrp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white shadow-sm border border-slate-100 hover:bg-black hover:text-white text-slate-400 hover:border-black hover:shadow-md flex items-center justify-center transition-all duration-300"
                >
                  <Twitter className="w-4 h-4 fill-current" />
                </a>
              </div>
            </div>

            {/* Right Column: Bio */}
            <div className="md:w-2/3 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-[#003648] text-sm font-black tracking-widest uppercase mb-8 flex items-center">
                About {member.title.split(' ')[0]}
                <div className="ml-6 h-px flex-1 bg-slate-100"></div>
              </h2>
              
              <div 
                className="prose prose-slate max-w-none prose-headings:text-[#003648] prose-p:text-slate-600 prose-p:leading-loose prose-a:text-[#76186f] hover:prose-a:text-[#003648] prose-strong:text-[#003648]"
                dangerouslySetInnerHTML={{ __html: member.content || "<p>No biography provided.</p>" }}
              />
            </div>

          </div>
        </div>
      </div>
    </PageLayout>
  );
}
