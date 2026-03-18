import { useEffect, useRef, useState } from "react";
import { Building2, Globe2, Trophy, Users, Star, BadgePoundSterling } from "lucide-react";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Businesses supported",
    description: "From fast-growing start-ups to established corporates across the UK and beyond.",
    icon: Building2,
    gradient: "from-violet-400 to-primary",
  },
  {
    value: 70,
    suffix: "+",
    label: "Countries covered",
    description: "Global reach for internationally mobile and remote-first workforces.",
    icon: Globe2,
    gradient: "from-sky-400 to-blue-600",
  },
  {
    value: 30,
    suffix: "+",
    label: "Years combined expertise",
    description: "Ex-Bupa Global, Aon, Mercer, Vitality and AIG professionals on your side.",
    icon: Users,
    gradient: "from-emerald-400 to-teal-600",
  },
  {
    value: 3,
    suffix: "×",
    label: "Award wins",
    description: "Best International Group Advice Firm — UK H&P Awards 2022, 2023 & 2024.",
    icon: Trophy,
    gradient: "from-amber-400 to-orange-500",
  },
  {
    value: 8,
    suffix: "+",
    label: "Years in business",
    description: "Founded in 2016 and growing steadily — with a loyal client base that stays.",
    icon: Star,
    gradient: "from-rose-400 to-pink-600",
  },
  {
    value: 0,
    prefix: "£",
    suffix: "",
    label: "Cost to your business",
    description: "Our service is completely free — we're remunerated directly by insurers.",
    icon: BadgePoundSterling,
    gradient: "from-lime-400 to-green-600",
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
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, target, duration]);
  return count;
}

function StatCard({ stat, trigger }: { stat: typeof stats[0]; trigger: boolean }) {
  const count = useCountUp(stat.value, 1400, trigger);
  const Icon = stat.icon;

  return (
    <div className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-8 transition-all duration-300 overflow-hidden cursor-default">
      {/* Glow on hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl bg-gradient-to-br ${stat.gradient} blur-2xl`}
        style={{ opacity: 0, filter: "blur(40px)", transform: "scale(0.7)" }}
      />

      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${stat.gradient} shadow-lg`}>
        <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
      </div>

      {/* Number */}
      <div className={`text-5xl xl:text-6xl font-black mb-3 bg-gradient-to-r bg-clip-text text-transparent leading-none ${stat.gradient}`}>
        {stat.prefix ?? ""}{count}{stat.suffix}
      </div>

      {/* Label */}
      <div className="text-white font-bold text-lg mb-2">{stat.label}</div>

      {/* Description */}
      <p className="text-white/55 text-sm leading-relaxed">{stat.description}</p>
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
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }}
      />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} trigger={triggered} />
          ))}
        </div>
      </div>
    </section>
  );
}
