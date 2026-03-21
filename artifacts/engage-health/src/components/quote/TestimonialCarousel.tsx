import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import marshmallow  from "@assets/0x0_1773872351104.png";
import oyster       from "@assets/6201434ebeae0fd1206873cb_Vector12_1773872351104.png";
import boohoo       from "@assets/boohoo_1773872351104.png";
import breathe      from "@assets/breathe_1773872351105.png";
import cae          from "@assets/image2_1773872351105.png";
import klarna       from "@assets/klarna-logo_1773872351106.png";
import pleo         from "@assets/p_1773872351106.png";
import seedcamp     from "@assets/seedcamp_1773872351106.png";
import superscript  from "@assets/superscript_1773872351107.jpg";
import teladoc      from "@assets/teledoc-1_1773872351107.png";
import unmind       from "@assets/unmind_1773872351107.png";
import vayner       from "@assets/vayner-media-logo-e1741707986477_1773872351107.png";

const LOGOS = [
  { src: marshmallow, alt: "Marshmallow" },
  { src: klarna,      alt: "Klarna" },
  { src: vayner,      alt: "VaynerMedia" },
  { src: cae,         alt: "CAE" },
  { src: boohoo,      alt: "boohoo" },
  { src: unmind,      alt: "Unmind" },
  { src: oyster,      alt: "Oyster" },
  { src: breathe,     alt: "Breathe" },
  { src: seedcamp,    alt: "Seedcamp" },
  { src: teladoc,     alt: "Teladoc" },
  { src: superscript, alt: "Superscript" },
  { src: pleo,        alt: "Pleo" },
];

function LogoMarquee() {
  const track = [...LOGOS, ...LOGOS];
  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex gap-8 items-center"
        style={{
          animation: "marquee 28s linear infinite",
          width: "max-content",
        }}
      >
        {track.map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="h-6 w-auto object-contain opacity-40 grayscale brightness-[10]"
          />
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

const TESTIMONIALS = [
  {
    quote: "There are a lot of reasons why I value my relationship with Engage Health, but what stands out for me most is how much time they take to understand their client's needs, and deliver results that meet all the criteria. Thank you to the team for always delivering, and the first-class support you provide!",
    name: "Senior Manager",
    role: "Senior Manager",
    company: "Couchbase",
  },
  {
    quote: "SaltPay has collaborated with Engage on various insurance projects. Their professionalism and knowledge has been extremely helpful in finding the right insurance coverage for our needs. They took the time to understand our situation and made recommendations based on SaltPay's specific requirements. The entire process was smooth and hassle-free always with attention to detail and budget assumptions.",
    name: "Procurement Analyst",
    role: "Procurement Analyst",
    company: "SaltPay",
  },
  {
    quote: "Working with Engage Health Group has been seamless and we are very pleased with the service, communication and overall experience. The guys at Engage are very friendly, knowledgeable and helpful and made the process of signing up for group health insurance very easy and simple. Five star service and would definitely recommend.",
    name: "Amber Goldstein",
    role: "Operations Director",
    company: "Creative Rock Stars Agency",
  },
  {
    quote: "Dave (from Engage) was an amazing help from day one. He understood perfectly what we were looking for and directed me and my team in the right direction. We were able to find the EAP provider we needed for our overseas offices. He was always an email away and guided me through the process. I will recommend working with him and Engage Health without a doubt.",
    name: "HR & Facilities Officer",
    role: "HR & Facilities Officer",
    company: "Medical Aid for Palestinians",
  },
  {
    quote: "Our Company is very happy to have had the pleasure of using Engage Health Group. James has been amazing to work with from start to finish. From the very first phone call he listened to our requirements and worked tirelessly to find the best options for us and found an excellent insurance package best suited to our needs. The customer service and response turnaround time from himself and Bruno has been outstanding and certainly made our working day a lot less stressful. We would 100% recommend Engage Health Group, you won't be disappointed.",
    name: "Insurances & Customer Management Support Co-Ordinator",
    role: "Insurances & Customer Management Support Co-Ordinator",
    company: "CAE Parc Aviation",
  },
  {
    quote: "James at Engage was super helpful with explaining all our potential options, he understood the requirement for ensuring the level of cover was appropriate whilst also balancing financial impact. Throughout the process, from market review through to cover in place, there was regular and quick communication, keeping us in the loop with any developments. I would have absolutely no hesitation in coming to James and the team again for any future support required.",
    name: "People & Culture Director",
    role: "People & Culture Director",
    company: "BCB Group",
  },
  {
    quote: "They helped us establish a comprehensive medical plan that covers our employees globally, with competitive and flat rates. Additionally, they act as advisors, providing us with valuable guidance on best practices in countries where we lack local knowledge. Engage Health's expertise and network of brokers have been instrumental in navigating the complex world of global benefits. We highly recommend Engage Health for their exceptional service and expertise.",
    name: "Senior Expert, Global Benefits Strategy and Design",
    role: "Senior Expert, Global Benefits Strategy and Design",
    company: "Remote",
  },
  {
    quote: "We have worked with Nick for over 4 years, during this time he has become a valued member of our extended Reward Team. Nick's deep knowledge and understanding of not only the insurance and benefits market but of our organisation has enabled us to trust that his primary focus is getting the best from the products for us. The detailed and transparent market review reports Nick compiles makes choosing a product and accepting his advice a simple choice.",
    name: "Associate Director – HR Service Delivery",
    role: "Associate Director – HR Service Delivery",
    company: "CityFibre",
  },
];

function getInitials(name: string) {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const LINE_HEIGHT = 1.7;
const FONT_SIZE = 15;
const MAX_LINES = 6;
const MAX_HEIGHT = LINE_HEIGHT * FONT_SIZE * MAX_LINES; // px

function QuoteText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [overflows, setOverflows] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(false);
    const el = ref.current;
    if (!el) return;
    // Measure with no clamp applied
    el.style.webkitLineClamp = "unset";
    el.style.overflow = "visible";
    const full = el.scrollHeight;
    el.style.webkitLineClamp = "";
    el.style.overflow = "";
    setOverflows(full > MAX_HEIGHT + 4);
  }, [text]);

  return (
    <div className="mb-6">
      <p
        ref={ref}
        className="text-[15px] italic"
        style={{
          color: "rgba(255,255,255,0.85)",
          lineHeight: LINE_HEIGHT,
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: expanded ? "unset" : MAX_LINES,
          overflow: expanded ? "visible" : "hidden",
          transition: "all 0.3s ease",
        }}
      >
        "{text}"
      </p>
      {overflows && (
        <button
          onClick={() => setExpanded((e) => !e)}
          className="mt-2 text-[12px] font-semibold tracking-wide transition-colors"
          style={{ color: expanded ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.55)" }}
        >
          {expanded ? "Show less ↑" : "Read more ↓"}
        </button>
      )}
    </div>
  );
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
      className="hidden md:flex flex-1 flex-col items-center justify-center px-14 py-12 relative overflow-hidden"
      style={{ background: "#01232f" }}
    >
      {/* background radial glows */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 65% 55% at 75% 25%, rgba(118,24,111,0.2) 0%, transparent 65%), radial-gradient(ellipse 45% 45% at 25% 85%, rgba(13,171,118,0.08) 0%, transparent 60%)"
      }} />

      <div className="relative z-10 w-full max-w-[460px] flex flex-col items-center text-center">

        {/* Animated card */}
        <div className="w-full mb-8" style={{ minHeight: 260 }}>
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
              className="w-full rounded-[24px] p-9 text-left relative overflow-hidden"
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
              <QuoteText text={t.quote} />

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
                  <div className="text-[15px] font-bold text-white truncate">{t.name}</div>
                  <div className="text-[12px] truncate" style={{ color: "rgba(255,255,255,0.4)" }}>
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
        <div className="text-[22px] font-extrabold text-white tracking-tight mb-2">
          Trusted by 500+ businesses
        </div>
        <p className="text-[13px] leading-relaxed mb-4 max-w-[300px]"
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

      {/* ── Client logos strip ── */}
      <div className="absolute bottom-0 left-0 right-0 px-0 pb-6 pt-4"
           style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.12em] mb-3"
           style={{ color: "rgba(255,255,255,0.25)" }}>
          Companies that trust Engage Health
        </p>
        <LogoMarquee />
      </div>
    </div>
  );
}
