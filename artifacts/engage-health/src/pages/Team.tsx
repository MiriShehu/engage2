import { PageLayout } from "@/components/layout";
import { TrustBar } from "@/components/sections/trust";
import { Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

const BASE = "https://www.engagehealthgroup.co.uk/wp-content/uploads";
const linkedinUrl = "https://www.linkedin.com/company/engage-health-group/";
const T = "#003648";
const P = "#76186f";

const departments = [
  {
    name: "Leadership",
    description: "The founders and directors who set the vision and ensure every client gets a best-in-class experience.",
    members: [
      {
        name: "Nick Hale",
        title: "Founder & Director",
        bio: "Founded Engage Health Group in 2016 with a mission to make outstanding employee benefits accessible to all. CII qualified, Nick leads the UK business channel and is personally committed to the highest level of client service.",
        img: `${BASE}/2023/01/Nick-Hale-e1674569951192.png`,
        accent: P,
        tags: ["Founder", "CII Qualified", "UK Benefits"],
      },
      {
        name: "Ian Abbott",
        title: "International Director",
        bio: "After 8+ years at Bupa Global, Ian co-founded Engage International, the arm dedicated to helping global businesses navigate health and protection across 70+ countries. Multiple award winner.",
        img: `${BASE}/2023/01/IAN-ABBOTT-1-e1675073149526.png`,
        accent: T,
        tags: ["Bupa Global Alumni", "International", "Award Winner"],
      },
      {
        name: "Charlie Cousins",
        title: "Director",
        bio: "Founder of Engage's sister brokerage Hooray Health & Protection. Charlie brings deep SME expertise and a wealth of experience helping fast-growing UK businesses build their first benefits packages.",
        img: `${BASE}/2023/01/charlie-e1674569473213.png`,
        accent: P,
        tags: ["SME Specialist", "Director"],
      },
    ],
  },
  {
    name: "Employee Benefits Team",
    description: "Specialists in UK group health, protection and wellbeing, sourcing, implementing and managing policies on your behalf.",
    members: [
      {
        name: "Mike Hesch",
        title: "Employee Benefits Team Lead",
        bio: "Senior roles at Aon, Capita Employee Benefits, and Mercer have given Mike an encyclopaedic knowledge of benefits, wellness, pensions and insurance strategy. He leads the UK employee benefits team.",
        img: `${BASE}/2023/06/Mike-Hesch-Head-Shot-e1723650105906.png`,
        accent: P,
        tags: ["Aon", "Mercer", "Capita", "Team Lead"],
      },
      {
        name: "Jess Wright",
        title: "Employee Benefits Consultant",
        bio: "Jess provides wide-ranging employee benefits advice with a partnership-focused approach, working closely with HR teams to build sustainable and valued benefits packages.",
        img: `${BASE}/2023/12/Jess-Wright_.png`,
        accent: T,
        tags: ["Employee Benefits", "HR Partnership"],
      },
      {
        name: "Ed Bryan",
        title: "Employee Benefits Consultant",
        bio: "Brings experience from AIG and Benefex, giving Ed a strong technical understanding of group insurance products and digital benefits platforms.",
        img: `${BASE}/2023/01/Ed-Bryan-1.png`,
        accent: P,
        tags: ["AIG", "Benefex", "Group Insurance"],
      },
      {
        name: "Esme Pearson",
        title: "Employee Benefits Consultant",
        bio: "A Business Management and Marketing graduate who brings fresh thinking to client advisory. Esme helps businesses shape benefits packages that genuinely attract and retain talent.",
        img: `${BASE}/2023/01/Esme-Pearson-1.png`,
        accent: T,
        tags: ["Client Advisory", "Talent Retention"],
      },
      {
        name: "Stuart Isaac",
        title: "Employee Benefits Consultant",
        bio: "Stuart is dedicated to helping companies build their ideal benefits package, ensuring the process runs as smoothly as possible for every client.",
        img: `${BASE}/2023/05/stuart-isaac.png`,
        accent: P,
        tags: ["Employee Benefits", "UK Benefits"],
      },
      {
        name: "John Kavanagh",
        title: "Employee Benefits Consultant",
        bio: "John relishes the opportunity to nurture new client relationships with sound, impartial advice given in their best interests.",
        img: `${BASE}/2024/02/John-Kavanagh-copy.png`,
        accent: T,
        tags: ["Client Relationships", "Employee Benefits"],
      },
      {
        name: "Chloe Young",
        title: "Employee Benefits Consultant",
        bio: "Known for her enthusiastic, customer-centred approach, Chloe advises on all things employee benefits and ensures every client gets a clear, helpful answer.",
        img: `${BASE}/2023/05/chloe-e1698242302294.png`,
        accent: P,
        tags: ["Customer-Centred", "Employee Benefits"],
      },
      {
        name: "Aleen Solly",
        title: "Employee Benefits Consultant",
        bio: "Aleen ensures business clients get the very best advice across a wide range of employee health and protection policies.",
        img: `${BASE}/2024/08/Aleen-Solly-e1723469764751.png`,
        accent: T,
        tags: ["Health Insurance", "Life Insurance", "Protection"],
      },
      {
        name: "Katie Waldren",
        title: "Employee Benefits Consultant",
        bio: "Katie helps connect businesses to the most cost-effective health and protection policies available in the UK market.",
        img: `${BASE}/2025/04/katie-waldren.png`,
        accent: P,
        tags: ["UK Benefits", "Cost Optimisation"],
      },
      {
        name: "Matt Pennington",
        title: "Employee Benefits Consultant",
        bio: "Matt is determined to do what's right for the client, helping them find the benefits policies that will best support their workforce.",
        img: `${BASE}/2026/02/matt-pennington.png`,
        accent: T,
        tags: ["Employee Benefits", "Client-First"],
      },
    ],
  },
  {
    name: "International Team",
    description: "Experts in global employee benefits across 70+ countries, handling everything from multi-country policies to compliance and communication.",
    members: [
      {
        name: "Eiman Elkhalifa",
        title: "International Benefits Consultant",
        bio: "Eiman works closely with global clients to ensure consistent, high-quality benefits delivery worldwide. Deep experience navigating the complexity of international insurance markets.",
        img: `${BASE}/2024/02/Eiman-Elkhalifa.png`,
        accent: P,
        tags: ["Global Clients", "International Insurance"],
      },
      {
        name: "Bruno Ferreira Coelho",
        title: "International Benefits Consultant",
        bio: "Brings valuable experience from international health insurers Aetna and Bupa Global to advise businesses on the best international health insurance solutions for their teams.",
        img: `${BASE}/2023/01/Bruno-Ferreira-Coelho-e1674568875855.png`,
        accent: T,
        tags: ["Aetna", "Bupa Global", "International Health"],
      },
      {
        name: "Ciara Boulton",
        title: "International Benefits Consultant",
        bio: "A background in travel insurance informs Ciara's practical and client-friendly approach to supporting internationally mobile employees and their healthcare needs.",
        img: `${BASE}/2024/01/Ciara-Boulton.png`,
        accent: P,
        tags: ["Travel Insurance", "International Support"],
      },
      {
        name: "Sophie Rogers",
        title: "International Benefits Consultant",
        bio: "Sophie ensures international clients get all the support they need on their global employee benefits policies.",
        img: `${BASE}/2025/04/sophie-rogers-scaled-e1744810230169.png`,
        accent: T,
        tags: ["Global Benefits", "International"],
      },
    ],
  },
  {
    name: "Operations & Support",
    description: "The team that keeps everything running smoothly, from finance and compliance to client support.",
    members: [
      {
        name: "Stuart Box",
        title: "Head of Client Services",
        bio: "With a background spanning account management and financial services, Stuart leads the client services team, ensuring every Engage client relationship is proactive, responsive, and built on trust.",
        img: `${BASE}/2023/01/Stuart-Box-copy.png`,
        accent: T,
        tags: ["Account Management", "Client Services"],
      },
      {
        name: "Adena Stonely",
        title: "Finance Manager",
        bio: "Oversees the company's finances, ensuring Engage runs with the rigour and transparency that clients and partners expect from an FCA-regulated firm.",
        img: `${BASE}/2023/05/Adena-Stonely-1.png`,
        accent: P,
        tags: ["Finance", "FCA Regulated"],
      },
      {
        name: "Emma Rose-Angus",
        title: "Partnerships Manager",
        bio: "Builds and manages the strategic partnerships that extend Engage's reach, enabling even more businesses to access world-class employee benefits advice.",
        img: `${BASE}/2025/04/emma-profile-Edited.png`,
        accent: T,
        tags: ["Strategic Partnerships", "Business Development"],
      },
      {
        name: "Joanne Lloyd",
        title: "Research & Pricing Analyst",
        bio: "Tracks the latest data, price-points, and product developments across the market, making sure Engage's advice is always informed by the most current intelligence.",
        img: `${BASE}/2023/01/Joanne-Lloyd-e1674570051794.png`,
        accent: P,
        tags: ["Market Research", "Data"],
      },
      {
        name: "Emily Ager",
        title: "Client Services Executive",
        bio: "Often the first port of call for clients seeking support with their policies, Emily helps clients navigate their benefits quickly and confidently.",
        img: `${BASE}/2024/05/Emily-Ager-N0-BG-e1721919350416.png`,
        accent: T,
        tags: ["Client Support", "Policy Queries"],
      },
      {
        name: "Steph Lee",
        title: "Client Services Executive",
        bio: "Steph has returned to the insurance industry to help ensure our clients get the very best support day to day.",
        img: `${BASE}/2024/07/Steph-Lee-e1722247578394.png`,
        accent: P,
        tags: ["Client Support", "Insurance"],
      },
      {
        name: "Nadia Cruz",
        title: "Client Services Executive",
        bio: "Nadia helps ensure all clients' policies are up-to-date and working as they should, providing smooth and responsive ongoing support.",
        img: `${BASE}/2025/10/nadia-cruz-e1761568726572.png`,
        accent: T,
        tags: ["Client Support", "Policy Management"],
      },
    ],
  },
];

function MemberCard({ member }: { member: typeof departments[0]["members"][0] }) {
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
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
          {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
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
          {member.tags.map((tag, i) => (
            <span key={i} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
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
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Meet the people who{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-400">
              work for you
            </span>
          </h1>
          <p className="text-white/65 text-xl max-w-2xl mx-auto">
            Our team brings over 30 years of combined experience from some of the world's leading insurers and benefits consultancies, all dedicated to finding the best outcomes for your business.
          </p>
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

      <TrustBar />

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
    </PageLayout>
  );
}
