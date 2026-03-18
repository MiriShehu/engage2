import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const BASE = "https://www.engagehealthgroup.co.uk/wp-content/uploads";

const team = [
  {
    name: "Nick Hale",
    title: "Founder & Director",
    bio: "Founded Engage Health Group in 2016. CII qualified, Nick leads the UK business channel and is personally committed to ensuring every client receives the highest level of service.",
    img: `${BASE}/2023/01/Nick-Hale-e1674569951192.png`,
    accent: "#76186f",
  },
  {
    name: "Ian Abbott",
    title: "International Director",
    bio: "Ian leads Engage's international team, drawing on more than eight years of experience working in global healthcare for Bupa Global.",
    img: `${BASE}/2023/01/IAN-ABBOTT-1-e1675073149526.png`,
    accent: "#003648",
  },
  {
    name: "Charlie Cousins",
    title: "Director",
    bio: "Founder of sister brokerage Hooray Health & Protection, Charlie brings deep SME expertise as Director at Engage.",
    img: `${BASE}/2023/01/charlie-e1674569473213.png`,
    accent: "#7c3aed",
  },
  {
    name: "Stuart Box",
    title: "Head of Client Services",
    bio: "Stuart heads the client services team after a career in account management and financial services, making sure great customer service is the norm.",
    img: `${BASE}/2023/01/Stuart-Box-copy.png`,
    accent: "#0d9488",
  },
  {
    name: "Mike Hesch",
    title: "Employee Benefits Team Lead",
    bio: "Mike leads the employee benefits team with in-depth knowledge of benefits, wellness, pensions and insurance from Aon, Mercer and Capita.",
    img: `${BASE}/2023/06/Mike-Hesch-Head-Shot-e1723650105906.png`,
    accent: "#2563eb",
  },
  {
    name: "Adena Stonely",
    title: "Finance Manager",
    bio: "Adena oversees the finances of the company, ensuring all incomings and outgoings are accounted for and on schedule.",
    img: `${BASE}/2023/05/Adena-Stonely-1.png`,
    accent: "#d97706",
  },
  {
    name: "Emma Rose-Angus",
    title: "Partnerships Manager",
    bio: "Emma excels at forging strategic partnerships with companies that share Engage's values, growing our network of trusted collaborators.",
    img: `${BASE}/2025/04/emma-profile-Edited.png`,
    accent: "#ec4899",
  },
  {
    name: "Ed Bryan",
    title: "Employee Benefits Consultant",
    bio: "Ed brings a wealth of knowledge from stints at AIG and Benefex to ensure clients receive the very best support and advice.",
    img: `${BASE}/2023/01/Ed-Bryan-1.png`,
    accent: "#f59e0b",
  },
  {
    name: "Eiman Elkhalifa",
    title: "International Benefits Consultant",
    bio: "Eiman works closely with global clients to ensure they can deliver consistent benefits wherever their employees are based.",
    img: `${BASE}/2024/02/Eiman-Elkhalifa.png`,
    accent: "#0891b2",
  },
  {
    name: "Jess Wright",
    title: "Employee Benefits Consultant",
    bio: "Jess gives expert advice across a wide range of employee benefits and relishes the chance to develop genuine partnerships with HR teams.",
    img: `${BASE}/2023/12/Jess-Wright_.png`,
    accent: "#e11d48",
  },
  {
    name: "Ciara Boulton",
    title: "International Benefits Consultant",
    bio: "Ciara brings travel insurance industry experience to provide insightful support to the international team.",
    img: `${BASE}/2024/01/Ciara-Boulton.png`,
    accent: "#059669",
  },
  {
    name: "Esme Pearson",
    title: "Employee Benefits Consultant",
    bio: "Equipped with a BA in Business Management and Marketing, Esme's passion for business shines when advising clients on employee benefits.",
    img: `${BASE}/2023/01/Esme-Pearson-1.png`,
    accent: "#7c3aed",
  },
  {
    name: "Stuart Isaac",
    title: "Employee Benefits Consultant",
    bio: "Stuart is dedicated to helping companies build their ideal benefits package, ensuring the process runs as smoothly as possible.",
    img: `${BASE}/2023/05/stuart-isaac.png`,
    accent: "#1d4ed8",
  },
  {
    name: "John Kavanagh",
    title: "Employee Benefits Consultant",
    bio: "John relishes the opportunity to nurture new client relationships with sound, impartial advice given in their best interests.",
    img: `${BASE}/2024/02/John-Kavanagh-copy.png`,
    accent: "#b45309",
  },
  {
    name: "Chloe Young",
    title: "Employee Benefits Consultant",
    bio: "Chloe advises on all things employee benefits, bringing an enthusiastic and customer-centred approach to her role.",
    img: `${BASE}/2023/05/chloe-e1698242302294.png`,
    accent: "#db2777",
  },
  {
    name: "Bruno Ferreira Coelho",
    title: "International Benefits Consultant",
    bio: "Bruno brings a wealth of experience from international health insurers Aetna and Bupa Global to help global clients.",
    img: `${BASE}/2023/01/Bruno-Ferreira-Coelho-e1674568875855.png`,
    accent: "#0369a1",
  },
  {
    name: "Joanne Lloyd",
    title: "Research & Pricing Analyst",
    bio: "Joanne is responsible for delivering the latest data and price-points so clients can receive the most up-to-date guidance.",
    img: `${BASE}/2023/01/Joanne-Lloyd-e1674570051794.png`,
    accent: "#4f46e5",
  },
  {
    name: "Emily Ager",
    title: "Client Services Executive",
    bio: "Emily is often the first port of call for clients seeking support with their policies, delivering prompt and friendly assistance.",
    img: `${BASE}/2024/05/Emily-Ager-N0-BG-e1721919350416.png`,
    accent: "#0d9488",
  },
  {
    name: "Steph Lee",
    title: "Client Services Executive",
    bio: "Steph has returned to the insurance industry to help ensure our clients get the very best support day to day.",
    img: `${BASE}/2024/07/Steph-Lee-e1722247578394.png`,
    accent: "#9333ea",
  },
  {
    name: "Aleen Solly",
    title: "Employee Benefits Consultant",
    bio: "Aleen ensures business clients get the very best advice across a wide range of employee health and protection policies.",
    img: `${BASE}/2024/08/Aleen-Solly-e1723469764751.png`,
    accent: "#dc2626",
  },
  {
    name: "Sophie Rogers",
    title: "International Benefits Consultant",
    bio: "Sophie ensures our international clients get all the support they need on their global employee benefits policies.",
    img: `${BASE}/2025/04/sophie-rogers-scaled-e1744810230169.png`,
    accent: "#0284c7",
  },
  {
    name: "Katie Waldren",
    title: "Employee Benefits Consultant",
    bio: "Katie helps connect businesses to the most cost-effective health and protection policies available in the UK market.",
    img: `${BASE}/2025/04/katie-waldren.png`,
    accent: "#be185d",
  },
  {
    name: "Nadia Cruz",
    title: "Client Services Executive",
    bio: "Nadia helps ensure all our clients' policies are up-to-date and working as they should, providing smooth ongoing support.",
    img: `${BASE}/2025/10/nadia-cruz-e1761568726572.png`,
    accent: "#b45309",
  },
  {
    name: "Matt Pennington",
    title: "Employee Benefits Consultant",
    bio: "Matt is determined to do what's right for the client, helping them find the benefits policies that will best support their workforce.",
    img: `${BASE}/2026/02/matt-pennington.png`,
    accent: "#0d9488",
  },
];

export function OurExperts() {
  const autoScrollRef = useRef(AutoScroll({ speed: 1.2, stopOnInteraction: false, stopOnMouseEnter: true }));

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start", watchDrag: true },
    [autoScrollRef.current]
  );

  const prev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const next = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  // Restart auto-scroll after drag ends
  useEffect(() => {
    if (!emblaApi) return;
    const onSettle = () => autoScrollRef.current.play();
    emblaApi.on("settle", onSettle);
    return () => { emblaApi.off("settle", onSettle); };
  }, [emblaApi]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              Our experts
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-tight">
              The people behind<br />
              <span className="text-primary">your benefits strategy</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="text-muted-foreground text-base max-w-xs md:text-right">
              30+ years of combined experience — former Bupa Global, Aon, Mercer &amp; AIG professionals, all working for you.
            </p>
            {/* nav arrows */}
            <div className="flex items-center gap-2">
              <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary/40 transition-all">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary/40 transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width carousel — exactly 5 cards */}
      <div ref={emblaRef} className="overflow-hidden w-full">
        <div className="flex">
          {team.map((person, i) => (
            <div
              key={i}
              className="group"
              style={{ flex: "0 0 20%", padding: "0 8px" }}
            >
              <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white h-full flex flex-col">
                {/* Photo area — full natural size, transparent PNG cutout */}
                <div
                  className="relative flex items-end justify-center pt-6 px-4"
                  style={{ background: `linear-gradient(160deg, ${person.accent}15 0%, ${person.accent}30 100%)` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 z-10" style={{ background: person.accent }} />

                  <img
                    src={person.img}
                    alt={person.name}
                    className="relative z-10 w-full max-h-[320px] object-contain object-bottom group-hover:scale-[1.03] transition-transform duration-500 drop-shadow-md"
                    onError={(e) => {
                      const el = e.currentTarget;
                      el.style.display = "none";
                      const fallback = el.nextElementSibling as HTMLElement | null;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  {/* initials fallback */}
                  <div
                    className="hidden w-full h-[280px] items-center justify-center text-white text-4xl font-black"
                    style={{ background: `linear-gradient(135deg, ${person.accent}, ${person.accent}99)` }}
                  >
                    {person.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </div>

                  <a
                    href="https://www.linkedin.com/company/engage-health-group/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="absolute top-3 right-3 z-20 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#0077b5] shadow hover:bg-white transition-colors"
                  >
                    <Linkedin className="w-3 h-3" />
                  </a>
                </div>

                {/* Info */}
                <div className="p-4">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: person.accent }} />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground truncate">{person.title}</span>
                  </div>
                  <h3 className="text-base font-extrabold text-secondary mb-1.5 leading-tight">{person.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{person.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex justify-end">
        <Link
          href="/team"
          className="btn-cta inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm"
        >
          Meet the full team
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
