import bloomberg from "@assets/bloomberg_1773869703146.png";
import corporateAdviser from "@assets/corporate-adviser_1773869703146.png";
import cover from "@assets/cover_1773869703146.png";
import healthAndProtection from "@assets/health-and-protection-logo_1773869703147.png";
import reuters from "@assets/reuters_1773869703157.png";
import telegraph from "@assets/The-Telegraph-Logo-Grey_1773869703165.png";

const logos = [
  { src: bloomberg,           alt: "Bloomberg",           h: "h-9" },
  { src: corporateAdviser,    alt: "Corporate Adviser",   h: "h-11" },
  { src: cover,               alt: "COVER",               h: "h-9" },
  { src: healthAndProtection, alt: "Health & Protection", h: "h-10" },
  { src: reuters,             alt: "Reuters",             h: "h-10" },
  { src: telegraph,           alt: "The Telegraph",       h: "h-9" },
];

export function TrustBar() {
  return (
    <section className="py-8 border-y border-border bg-white overflow-hidden">

      {/* Mobile: label above, logos below */}
      <p className="md:hidden text-xs font-bold tracking-widest uppercase text-muted-foreground/60 text-center mb-6">
        As featured in
      </p>

      {/* Desktop: label left, logos right. Mobile: just logos full width */}
      <div className="flex items-center">

        {/* Label — desktop only, fixed left */}
        <div className="hidden md:flex shrink-0 pl-6 pr-8 border-r border-border/50">
          <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground/60 whitespace-nowrap">
            As featured in
          </p>
        </div>

        {/* Scrolling logos */}
        <div className="flex-1 relative overflow-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="marquee-track flex gap-16 md:gap-20 items-center whitespace-nowrap animate-[marquee_35s_linear_infinite] group-hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className={`${logo.h} w-auto object-contain opacity-50 hover:opacity-75 transition-opacity duration-200 grayscale`}
              />
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 767px) {
          .marquee-track { animation-duration: 15s !important; }
        }
      `}</style>
    </section>
  );
}
