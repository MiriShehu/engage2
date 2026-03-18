import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";

const BASE = "https://www.engagehealthgroup.co.uk/wp-content/uploads";

const team = [
  { name: "Nick Hale", title: "Founder & Director", bio: "Founded Engage Health Group in 2016. CII qualified, Nick leads the UK business channel.", img: `${BASE}/2023/01/Nick-Hale-e1674569951192.png`, accent: "#76186f" },
  { name: "Ian Abbott", title: "International Director", bio: "Ian leads Engage's international team, drawing on more than eight years of experience at Bupa Global.", img: `${BASE}/2023/01/IAN-ABBOTT-1-e1675073149526.png`, accent: "#003648" },
  { name: "Charlie Cousins", title: "Director", bio: "Founder of sister brokerage Hooray Health & Protection, Charlie brings deep SME expertise.", img: `${BASE}/2023/01/charlie-e1674569473213.png`, accent: "#7c3aed" },
  { name: "Stuart Box", title: "Head of Client Services", bio: "Stuart heads the client services team after a career in account management and financial services.", img: `${BASE}/2023/01/Stuart-Box-copy.png`, accent: "#0d9488" },
  { name: "Mike Hesch", title: "Employee Benefits Team Lead", bio: "Mike leads the employee benefits team with in-depth knowledge from Aon, Mercer and Capita.", img: `${BASE}/2023/06/Mike-Hesch-Head-Shot-e1723650105906.png`, accent: "#2563eb" },
  { name: "Adena Stonely", title: "Finance Manager", bio: "Adena oversees the finances of the company, ensuring all incomings and outgoings are on schedule.", img: `${BASE}/2023/05/Adena-Stonely-1.png`, accent: "#d97706" },
  { name: "Emma Rose-Angus", title: "Partnerships Manager", bio: "Emma excels at forging strategic partnerships with companies that share Engage's values.", img: `${BASE}/2025/04/emma-profile-Edited.png`, accent: "#ec4899" },
  { name: "Ed Bryan", title: "Employee Benefits Consultant", bio: "Ed brings a wealth of knowledge from stints at AIG and Benefex.", img: `${BASE}/2023/01/Ed-Bryan-1.png`, accent: "#f59e0b" },
];

export function Boxed() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="min-h-screen bg-[#f8f7fb] py-16 px-4 flex flex-col items-center">
      {/* Section header */}
      <div className="w-full max-w-5xl mb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-[#76186f] mb-2">Our Experts</p>
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-4xl font-black text-[#003648] leading-tight max-w-md">
            The people behind<br />your benefits strategy
          </h2>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border-2 border-[#003648] flex items-center justify-center text-[#003648] hover:bg-[#003648] hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full bg-[#003648] flex items-center justify-center text-white hover:bg-[#76186f] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Boxed carousel container */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Top accent bar */}
        <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #76186f, #003648, #7c3aed, #2563eb)" }} />

        <div className="p-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {team.map((person, i) => (
                <div key={i} style={{ flex: "0 0 calc(33.333% - 14px)" }}>
                  <div className="group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 bg-white h-full flex flex-col">
                    {/* Photo */}
                    <div
                      className="relative flex items-end justify-center pt-5 px-4"
                      style={{ background: `linear-gradient(160deg, ${person.accent}12 0%, ${person.accent}28 100%)` }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: person.accent }} />
                      <img
                        src={person.img}
                        alt={person.name}
                        className="relative z-10 w-full max-h-[240px] object-contain object-bottom group-hover:scale-[1.03] transition-transform duration-500 drop-shadow-md"
                        onError={(e) => {
                          const el = e.currentTarget;
                          el.style.display = "none";
                          const fb = el.nextElementSibling as HTMLElement | null;
                          if (fb) fb.style.display = "flex";
                        }}
                      />
                      <div
                        className="hidden w-full h-[200px] items-center justify-center text-white text-3xl font-black"
                        style={{ background: person.accent }}
                      >
                        {person.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                      </div>
                      <a
                        href="https://www.linkedin.com/company/engage-health-group/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-3 right-3 z-20 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center text-[#0077b5] shadow hover:bg-white transition-colors"
                      >
                        <Linkedin className="w-3 h-3" />
                      </a>
                    </div>
                    {/* Info */}
                    <div className="p-4 flex-1">
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: person.accent }} />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 truncate">{person.title}</span>
                      </div>
                      <h3 className="text-base font-extrabold text-[#003648] mb-1.5 leading-tight">{person.name}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{person.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-1.5 mt-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === 0 ? "w-6 bg-[#76186f]" : "w-1.5 bg-gray-200"}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="px-8 py-4 border-t border-gray-50 bg-gray-50/50 flex items-center justify-between">
          <p className="text-xs text-gray-400">30+ years of combined experience</p>
          <a
            href="/team"
            className="text-xs font-bold text-[#76186f] flex items-center gap-1 hover:gap-2 transition-all"
          >
            Meet the full team <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
