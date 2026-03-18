import { Link } from "wouter";
import { ArrowRight, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

const featured = [
  {
    initials: "NH",
    name: "Nick Hale",
    title: "Founder & Director",
    bio: "Founded Engage Health Group in 2016. CII qualified, Nick leads the UK business channel and is personally committed to ensuring every client receives the highest level of service.",
    gradient: "from-[#76186f] to-[#a0249a]",
    linkedin: "https://www.linkedin.com/company/engage-health-group/",
  },
  {
    initials: "IA",
    name: "Ian Abbott",
    title: "International Director",
    bio: "Over 8 years at Bupa Global before founding Engage International. Ian leads our award-winning international team and has pioneered innovative global employee benefits solutions.",
    gradient: "from-[#003648] to-[#005a78]",
    linkedin: "https://www.linkedin.com/company/engage-health-group/",
  },
  {
    initials: "MH",
    name: "Mike Hesch",
    title: "Employee Benefits Team Lead",
    bio: "Senior roles at Aon, Capita Employee Benefits, and Mercer. Mike brings deep expertise across benefits, wellness, pensions, and insurance strategy for complex UK organisations.",
    gradient: "from-violet-600 to-indigo-700",
    linkedin: "https://www.linkedin.com/company/engage-health-group/",
  },
  {
    initials: "PP",
    name: "Penny Pemberton",
    title: "International Team Lead",
    bio: "Designs and delivers global benefits strategies for clients operating across 70+ countries. Penny ensures consistent, compliant coverage for multinational and remote-first teams.",
    gradient: "from-rose-500 to-pink-700",
    linkedin: "https://www.linkedin.com/company/engage-health-group/",
  },
  {
    initials: "SB",
    name: "Stuart Box",
    title: "Head of Client Services",
    bio: "With a background in account management and financial services, Stuart leads our client services team — making sure every relationship is proactive, responsive, and built for the long term.",
    gradient: "from-teal-500 to-emerald-700",
    linkedin: "https://www.linkedin.com/company/engage-health-group/",
  },
];

export function OurExperts() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Our experts
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-tight">
              The people behind
              <br />
              <span className="text-primary">your benefits strategy</span>
            </h2>
          </div>
          <p className="text-gray-500 text-lg max-w-sm md:text-right">
            30+ years of combined experience. Former Bupa Global, Aon, Mercer, Vitality and AIG professionals — all working for you.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((person, i) => (
            <div
              key={i}
              className={cn(
                "group relative bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden",
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              )}
            >
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(118,24,111,0.03) 0%, rgba(0,54,72,0.03) 100%)" }}
              />

              <div className="relative">
                {/* Avatar */}
                <div className="flex items-start justify-between mb-5">
                  <div className={cn(
                    "w-16 h-16 rounded-xl flex items-center justify-center text-white font-extrabold text-xl shadow-lg bg-gradient-to-br",
                    person.gradient
                  )}>
                    {person.initials}
                  </div>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#0077b5] hover:border-[#0077b5] transition-colors duration-200"
                    onClick={e => e.stopPropagation()}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-secondary mb-1">{person.name}</h3>
                <p className="text-sm font-semibold text-primary mb-4">{person.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/team"
            className="btn-cta inline-flex items-center gap-2.5 px-8 py-4 rounded-xl group"
          >
            Meet the full team
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
