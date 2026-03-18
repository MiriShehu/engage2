import { useEffect, useRef, useState } from "react";
import { Building2, Globe2, Trophy, Users, Star, BadgePoundSterling } from "lucide-react";

const P = "#76186f";
const T = "#003648";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Businesses supported",
    description: "From fast-growing start-ups to established corporates across the UK and beyond.",
    icon: Building2,
    accent: P,
    iconAnim: "group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300",
  },
  {
    value: 70,
    suffix: "+",
    label: "Countries covered",
    description: "Global reach for internationally mobile and remote-first workforces.",
    icon: Globe2,
    accent: T,
    iconAnim: "group-hover:rotate-[30deg] group-hover:scale-110 transition-transform duration-500",
  },
  {
    value: 30,
    suffix: "+",
    label: "Years combined expertise",
    description: "Ex-Bupa Global, Aon, Mercer, Vitality and AIG professionals on your side.",
    icon: Users,
    accent: P,
    iconAnim: "group-hover:scale-125 group-hover:-translate-y-1 transition-transform duration-300",
  },
  {
    value: 3,
    suffix: "×",
    label: "Award wins",
    description: "Best International Group Advice Firm — UK H&P Awards 2022, 2023 & 2024.",
    icon: Trophy,
    accent: T,
    iconAnim: "group-hover:-rotate-12 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300",
  },
  {
    value: 8,
    suffix: "+",
    label: "Years in business",
    description: "Founded in 2016 and growing steadily — with a loyal client base that stays.",
    icon: Star,
    accent: P,
    iconAnim: "group-hover:rotate-[72deg] group-hover:scale-110 transition-transform duration-500",
  },
  {
    value: 0,
    prefix: "£",
    suffix: "",
    label: "Cost to your business",
    description: "Our service is completely free — we're remunerated directly by insurers.",
    icon: BadgePoundSterling,
    accent: T,
    iconAnim: "group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300",
  },
];

function useCountUp(target: number, duration: number, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    if (target === 0) { setCount(0); return; }
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, target, duration]);
  return count;
}

function StatCard({ stat, trigger }: { stat: typeof stats[0]; trigger: boolean }) {
  const count = useCountUp(stat.value, 1400, trigger);
  const Icon = stat.icon;

  const isPurple = stat.accent === P;
  const accentLight = isPurple ? "rgba(118,24,111,0.18)" : "rgba(0,54,72,0.25)";
  const accentGlow  = isPurple ? "rgba(224,149,216,0.12)" : "rgba(122,219,232,0.10)";

  return (
    <div className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-8 transition-all duration-300 overflow-hidden cursor-default">
      {/* Subtle accent glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(ellipse at 20% 30%, ${accentGlow} 0%, transparent 70%)` }}
      />

      {/* Icon with animated inner symbol */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg"
        style={{ background: `linear-gradient(135deg, ${stat.accent}, ${isPurple ? "#9b2594" : "#005a78"})` }}
      >
        <Icon
          className={`w-6 h-6 text-white ${stat.iconAnim}`}
          strokeWidth={1.8}
        />
      </div>

      {/* Number — white, bold, with a small accent underbar */}
      <div className="mb-3">
        <span className="text-5xl xl:text-6xl font-black text-white leading-none tracking-tight">
          {stat.prefix ?? ""}{count}{stat.suffix}
        </span>
        {/* Accent underbar */}
        <div
          className="mt-2 h-[3px] w-10 rounded-full"
          style={{ background: `linear-gradient(90deg, ${stat.accent}, transparent)` }}
        />
      </div>

      <div className="text-white font-bold text-lg mb-2">{stat.label}</div>
      <p className="text-white/55 text-sm leading-relaxed">{stat.description}</p>

      {/* Bottom-left accent dot */}
      <div
        className="absolute bottom-4 right-4 w-16 h-16 rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: stat.accent }}
      />
    </div>
  );
}

export function EngageNumbers() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-28 relative overflow-hidden bg-secondary">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }}
      />

      {/* Purple glows */}
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Logo watermark */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[520px] h-[520px] pointer-events-none select-none"
        style={{
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 60% 50%, white 20%, transparent 80%)",
          maskImage: "radial-gradient(ellipse 70% 70% at 60% 50%, white 20%, transparent 80%)",
          opacity: 0.07,
        }}
      >
        <img src="/logo.png" alt="" className="w-full h-full object-contain" style={{ filter: "brightness(10)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-semibold mb-6 border border-white/10">
            The numbers speak for themselves
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Engage in numbers
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto">
            Eight years of focused growth — trusted by hundreds of businesses, backed by award-winning expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} trigger={triggered} />
          ))}
        </div>
      </div>
    </section>
  );
}
