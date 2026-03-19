import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TESTIMONIALS = [
  { quote: "Engage made the whole process completely seamless. We had competitive quotes from multiple insurers within a day and the team was incredibly knowledgeable throughout.", name: "Stephanie Knap", role: "Senior Manager", company: "Couchbase" },
  { quote: "From initial enquiry through to policy setup, the team was professional, responsive and thorough. Highly recommend to any business looking for group health cover.", name: "Stamatios Andreou", role: "Procurement Analyst", company: "Teya (formerly SaltPay)" },
  { quote: "I was blown away by how smooth the process was. The team clearly knows the market inside out and found us a fantastic deal. I wouldn't hesitate to recommend Engage.", name: "Amber Goldstein", role: "Operations Director", company: "Creative Rock Stars Agency" },
  { quote: "Engage provided excellent guidance throughout the whole process. The team were always on hand to answer questions and made everything simple and straightforward.", name: "Martina Borni", role: "HR & Facilities Officer", company: "Medical Aid for Palestinians" },
  { quote: "I found the whole experience to be very professional. Engage helped us navigate a complicated insurance landscape and secured a policy that suited our needs perfectly.", name: "Linda McGlynn", role: "Insurance & Customer Management", company: "CAE Parc Aviation" },
  { quote: "Engage have been fantastic partners. They took time to understand our business and found a solution that ticked every box. The ongoing support has been outstanding.", name: "Rachel Ramsay", role: "People & Culture Director", company: "BCB Group" },
  { quote: "Outstanding service from start to finish. The team were knowledgeable, friendly and efficient — I wouldn't go anywhere else for our business insurance needs.", name: "Verified Client", role: "Client", company: "Insurance Firm" },
  { quote: "Excellent company to work with. They understood our requirements quickly and delivered exactly what we needed. Communication throughout was first class.", name: "Verified Client", role: "Client", company: "Offset Architects" },
  { quote: "Very professional service. They made what can be a complicated process feel very straightforward. Highly recommend to any business looking for quality advice.", name: "G. Lane", role: "Client", company: "Engage Health Group" },
];

function getInitials(name: string) {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const go = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex((next + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const t = TESTIMONIALS[index];

  return (
    <div
      className="flex-1 flex flex-col items-center justify-center px-14 py-12 relative overflow-hidden"
      style={{ background: "#01232f" }}
    >
      {/* background radial glows */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 65% 55% at 75% 25%, rgba(118,24,111,0.2) 0%, transparent 65%), radial-gradient(ellipse 45% 45% at 25% 85%, rgba(13,171,118,0.08) 0%, transparent 60%)"
      }} />

      <div className="relative z-10 w-full max-w-[400px] flex flex-col items-center text-center">

        {/* Animated card */}
        <div className="w-full mb-8" style={{ minHeight: 200 }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={{
                enter: (d: number) => ({ opacity: 0, y: d * 10 }),
                center: { opacity: 1, y: 0 },
                exit: (d: number) => ({ opacity: 0, y: d * -10 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full rounded-[20px] p-7 text-left relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.11)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* decorative quote mark */}
              <div className="absolute top-4 right-5 text-[68px] leading-none font-serif pointer-events-none select-none"
                   style={{ color: "rgba(255,255,255,0.07)", fontFamily: "Georgia, serif" }}>
                "
              </div>

              {/* stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[13px]" style={{ color: "#fbbf24" }}>★</span>
                ))}
              </div>

              {/* quote */}
              <p className="text-[14px] leading-[1.65] italic mb-5"
                 style={{ color: "rgba(255,255,255,0.85)" }}>
                "{t.quote}"
              </p>

              {/* author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[12px] font-extrabold text-white flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg,#76186f,#003648)",
                    border: "2px solid rgba(255,255,255,0.12)",
                  }}
                >
                  {getInitials(t.name)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-bold text-white truncate">{t.name}</div>
                  <div className="text-[11px] truncate" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {t.role} · {t.company}
                  </div>
                </div>
                <div
                  className="flex-shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold"
                  style={{
                    background: "rgba(13,171,118,0.14)",
                    border: "1px solid rgba(13,171,118,0.25)",
                    color: "#0dab76",
                  }}
                >
                  ✓ Verified
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Heading + subtitle */}
        <div className="text-[19px] font-extrabold text-white tracking-tight mb-2">
          Trusted by 500+ businesses
        </div>
        <p className="text-[12px] leading-relaxed mb-4 max-w-[280px]"
           style={{ color: "rgba(255,255,255,0.4)" }}>
          Award-winning advice from specialists with 50 years' combined experience.
        </p>

        {/* Dots */}
        <div className="flex items-center gap-1.5 mb-3">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: i === index ? 18 : 5,
                height: 5,
                background: i === index ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.18)",
              }}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-2.5">
          {([-1, 1] as const).map((d) => (
            <button
              key={d}
              onClick={() => go(index + d)}
              className="w-[38px] h-[38px] rounded-full flex items-center justify-center text-[15px] transition-all"
              style={{
                border: "1.5px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.65)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.35)";
                (e.currentTarget as HTMLButtonElement).style.color = "white";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.18)";
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.65)";
              }}
            >
              {d === -1 ? "←" : "→"}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
