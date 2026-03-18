import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

const linkedinUrl = "https://www.linkedin.com/company/engage-health-group/";

const departments = [
  {
    name: "Leadership",
    description: "The founders and directors who set the vision and ensure every client gets a best-in-class experience.",
    members: [
      {
        initials: "NH",
        name: "Nick Hale",
        title: "Founder & Director",
        bio: "Founded Engage Health Group in 2016 with a mission to make outstanding employee benefits accessible to businesses of all sizes. CII qualified, Nick leads the UK business channel and is personally committed to the highest level of client service.",
        gradient: "from-[#76186f] to-[#a0249a]",
        tags: ["Founder", "CII Qualified", "UK Benefits"],
      },
      {
        initials: "IA",
        name: "Ian Abbott",
        title: "International Director",
        bio: "After 8+ years at Bupa Global, Ian co-founded Engage International — the arm dedicated to helping global businesses navigate health and protection across 70+ countries. Multiple award winner for innovative international solutions.",
        gradient: "from-[#003648] to-[#005a78]",
        tags: ["Bupa Global Alumni", "International", "Award Winner"],
      },
      {
        initials: "CH",
        name: "Charlie",
        title: "Director",
        bio: "Founder of Engage's sister brokerage, Hooray Health & Protection. Charlie brings deep SME expertise and a wealth of experience helping fast-growing UK businesses build their first benefits packages.",
        gradient: "from-violet-600 to-purple-800",
        tags: ["SME Specialist", "Director"],
      },
      {
        initials: "SB",
        name: "Stuart Box",
        title: "Head of Client Services",
        bio: "With a background spanning account management and financial services, Stuart leads the client services team — ensuring every Engage client relationship is proactive, responsive, and built on trust.",
        gradient: "from-teal-500 to-emerald-700",
        tags: ["Account Management", "Client Services"],
      },
    ],
  },
  {
    name: "Employee Benefits Team",
    description: "Specialists in UK group health, protection and wellbeing — sourcing, implementing and managing policies on your behalf.",
    members: [
      {
        initials: "MH",
        name: "Mike Hesch",
        title: "Employee Benefits Team Lead",
        bio: "Senior roles at Aon, Capita Employee Benefits, and Mercer have given Mike an encyclopaedic knowledge of benefits, wellness, pensions and insurance strategy. He leads our UK employee benefits team.",
        gradient: "from-indigo-500 to-blue-700",
        tags: ["Aon", "Mercer", "Capita", "Team Lead"],
      },
      {
        initials: "JE",
        name: "Jess",
        title: "Employee Benefits Consultant",
        bio: "Jess provides wide-ranging employee benefits advice with a partnership-focused approach — working closely with HR teams to build sustainable and valued benefits packages.",
        gradient: "from-pink-500 to-rose-600",
        tags: ["Employee Benefits", "HR Partnership"],
      },
      {
        initials: "ED",
        name: "Ed",
        title: "Employee Benefits Consultant",
        bio: "Brings experience from AIG and Benefex, giving Ed a strong technical understanding of group insurance products and digital benefits platforms.",
        gradient: "from-amber-500 to-orange-600",
        tags: ["AIG", "Benefex", "Group Insurance"],
      },
      {
        initials: "ES",
        name: "Esme",
        title: "Employee Benefits Consultant",
        bio: "A Business Management and Marketing graduate who brings fresh thinking to client advisory. Esme helps businesses shape benefits packages that genuinely attract and retain talent.",
        gradient: "from-emerald-500 to-green-700",
        tags: ["Client Advisory", "Talent Retention"],
      },
      {
        initials: "CL",
        name: "Chloe",
        title: "Employee Benefits Consultant",
        bio: "Known for her enthusiastic, customer-centred approach, Chloe ensures every client interaction is positive and every question gets a clear, helpful answer.",
        gradient: "from-sky-500 to-cyan-600",
        tags: ["Customer-Centred", "Employee Benefits"],
      },
      {
        initials: "AL",
        name: "Aleen",
        title: "Employee Benefits Consultant",
        bio: "Specialises in health insurance, life insurance, and income protection policies. Aleen helps clients understand the full spectrum of protection available to their workforce.",
        gradient: "from-violet-500 to-purple-700",
        tags: ["Health Insurance", "Life Insurance", "Protection"],
      },
    ],
  },
  {
    name: "International Team",
    description: "Experts in global employee benefits across 70+ countries — handling everything from multi-country policies to compliance and communication.",
    members: [
      {
        initials: "PP",
        name: "Penny Pemberton",
        title: "International Team Lead",
        bio: "Creates and delivers global benefits strategies for clients operating across multiple territories. Penny's expertise ensures consistent, compliant, and valued coverage for multinational and remote-first workforces.",
        gradient: "from-rose-500 to-pink-700",
        tags: ["Global Strategy", "Team Lead", "Compliance"],
      },
      {
        initials: "EI",
        name: "Eiman",
        title: "International Consultant",
        bio: "Works with global clients to ensure consistent and high-quality benefits delivery worldwide. Eiman has deep experience navigating the complexity of international insurance markets.",
        gradient: "from-[#003648] to-teal-600",
        tags: ["Global Clients", "International Insurance"],
      },
      {
        initials: "BR",
        name: "Bruno",
        title: "International Consultant",
        bio: "Brings valuable experience from Aetna and Bupa Global to advise businesses on the best international health insurance solutions for their teams.",
        gradient: "from-indigo-500 to-blue-700",
        tags: ["Aetna", "Bupa Global", "International Health"],
      },
      {
        initials: "CI",
        name: "Ciara",
        title: "International Consultant",
        bio: "A background in travel insurance informs Ciara's practical and client-friendly approach to supporting internationally mobile employees and their healthcare needs.",
        gradient: "from-emerald-500 to-teal-700",
        tags: ["Travel Insurance", "International Support"],
      },
    ],
  },
  {
    name: "Operations & Support",
    description: "The team that keeps everything running smoothly — from finance and compliance to client support and marketing.",
    members: [
      {
        initials: "AD",
        name: "Adena",
        title: "Finance",
        bio: "Oversees the company's finances, ensuring Engage runs with the rigour and transparency that clients and partners expect from an FCA-regulated firm.",
        gradient: "from-amber-500 to-yellow-600",
        tags: ["Finance", "FCA Regulated"],
      },
      {
        initials: "ML",
        name: "Mel",
        title: "Content Marketing Manager",
        bio: "Experienced in copywriting, PR and SEO, Mel oversees content marketing — making sure Engage's expertise reaches the businesses that need it most.",
        gradient: "from-pink-500 to-rose-600",
        tags: ["Copywriting", "SEO", "PR"],
      },
      {
        initials: "EM",
        name: "Emma",
        title: "Partnerships Manager",
        bio: "Builds and manages the strategic partnerships that extend Engage's reach, enabling even more businesses to access world-class employee benefits advice.",
        gradient: "from-violet-500 to-indigo-600",
        tags: ["Strategic Partnerships", "Business Development"],
      },
      {
        initials: "LB",
        name: "Liberty",
        title: "Client Support",
        bio: "Liberty is a vital member of the client support team, fielding queries and ensuring the whole team can deliver fast, accurate answers to clients day-to-day.",
        gradient: "from-sky-500 to-blue-600",
        tags: ["Client Support", "Team Support"],
      },
      {
        initials: "JO",
        name: "Joanne",
        title: "Research",
        bio: "Tracks the latest data, price-points, and product developments across the market — making sure Engage's advice is always informed by the most current intelligence.",
        gradient: "from-emerald-500 to-green-700",
        tags: ["Market Research", "Data"],
      },
      {
        initials: "EP",
        name: "Emily",
        title: "Client Support",
        bio: "Often the first point of contact for policy support enquiries, Emily helps clients navigate their benefits quickly and confidently.",
        gradient: "from-teal-500 to-cyan-600",
        tags: ["Client Support", "Policy Queries"],
      },
    ],
  },
];

function MemberCard({ member }: { member: typeof departments[0]["members"][0] }) {
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(118,24,111,0.03) 0%, rgba(0,54,72,0.03) 100%)" }}
      />
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className={cn(
            "w-14 h-14 rounded-xl flex items-center justify-center text-white font-extrabold text-lg shadow-lg bg-gradient-to-br",
            member.gradient
          )}>
            {member.initials}
          </div>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#0077b5] hover:border-[#0077b5] transition-colors duration-200"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
        </div>
        <h3 className="text-lg font-bold text-secondary mb-0.5">{member.name}</h3>
        <p className="text-sm font-semibold text-primary mb-3">{member.title}</p>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{member.bio}</p>
        <div className="flex flex-wrap gap-1.5">
          {member.tags.map((tag, i) => (
            <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
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
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Meet the people who{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-400">
                work for you
              </span>
            </h1>
            <p className="text-white/65 text-xl max-w-2xl mx-auto">
              Our team brings over 30 years of combined experience from some of the world's leading insurers and benefits consultancies — all dedicated to finding the best outcomes for your business.
            </p>
            {/* Stats bar */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl mx-auto">
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

        {/* Departments */}
        {departments.map((dept, di) => (
          <section key={di} className={cn("py-20", di % 2 === 0 ? "bg-gray-50" : "bg-white")}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <h2 className="text-2xl md:text-4xl font-extrabold text-secondary mb-3">{dept.name}</h2>
                <p className="text-gray-500 text-lg max-w-2xl">{dept.description}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {dept.members.map((member, mi) => (
                  <MemberCard key={mi} member={member} />
                ))}
              </div>
            </div>
          </section>
        ))}

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
