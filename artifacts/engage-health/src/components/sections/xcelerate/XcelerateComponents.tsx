import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1600;
          const step = (ts: number) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            setCount(Math.floor((1 - Math.pow(1 - p, 3)) * to));
            if (p < 1) requestAnimationFrame(step);
            else setCount(to);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to]);
  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

export function Reveal({
  children, delay = 0, className = "", from = "bottom"
}: {
  children: React.ReactNode; delay?: number; className?: string; from?: "bottom" | "left" | "right"
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setOn(true); }, { threshold: 0.08 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  const initial = from === "left" ? "translateX(-28px)" : from === "right" ? "translateX(28px)" : "translateY(28px)";
  return (
    <div ref={ref} className={className}
      style={{
        opacity: on ? 1 : 0,
        transform: on ? "translate(0)" : initial,
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}>
      {children}
    </div>
  );
}

export function WorldDots() {
  const dots: [number, number][] = [
    // North America
    [12,14],[13,14],[14,14],[15,14],[16,14],[17,14],[18,14],
    [11,15],[12,15],[13,15],[14,15],[15,15],[16,15],[17,15],[18,15],[19,15],
    [10,16],[11,16],[12,16],[13,16],[14,16],[15,16],[16,16],[17,16],[18,16],
    [10,17],[11,17],[12,17],[13,17],[14,17],[15,17],[16,17],
    [11,18],[12,18],[13,18],[14,18],[15,18],[16,18],
    [12,19],[13,19],[14,19],[15,19],
    [13,20],[14,20],[15,20],
    [15,21],[16,21],
    // South America
    [14,22],[15,22],[16,22],
    [14,23],[15,23],[16,23],[17,23],
    [14,24],[15,24],[16,24],[17,24],
    [15,25],[16,25],[17,25],
    [15,26],[16,26],
    [15,27],[16,27],
    [16,28],
    // Europe
    [28,12],[29,12],[30,12],[31,12],[32,12],[33,12],
    [27,13],[28,13],[29,13],[30,13],[31,13],[32,13],[33,13],[34,13],
    [27,14],[28,14],[29,14],[30,14],[31,14],[32,14],[33,14],[34,14],[35,14],
    [27,15],[28,15],[29,15],[30,15],[31,15],[32,15],[33,15],[34,15],
    [28,16],[29,16],[30,16],[31,16],[32,16],[33,16],[34,16],
    [29,17],[30,17],[31,17],[32,17],
    // Africa
    [29,18],[30,18],[31,18],[32,18],[33,18],
    [28,19],[29,19],[30,19],[31,19],[32,19],[33,19],
    [28,20],[29,20],[30,20],[31,20],[32,20],[33,20],
    [28,21],[29,21],[30,21],[31,21],[32,21],
    [29,22],[30,22],[31,22],[32,22],
    [29,23],[30,23],[31,23],
    [30,24],[31,24],
    [30,25],
    // Asia
    [35,11],[36,11],[37,11],[38,11],[39,11],[40,11],[41,11],[42,11],[43,11],[44,11],[45,11],[46,11],
    [34,12],[35,12],[36,12],[37,12],[38,12],[39,12],[40,12],[41,12],[42,12],[43,12],[44,12],[45,12],[46,12],[47,12],[48,12],
    [34,13],[35,13],[36,13],[37,13],[38,13],[39,13],[40,13],[41,13],[42,13],[43,13],[44,13],[45,13],[46,13],[47,13],[48,13],[49,13],
    [35,14],[36,14],[37,14],[38,14],[39,14],[40,14],[41,14],[42,14],[43,14],[44,14],[45,14],[46,14],[47,14],[48,14],[49,14],[50,14],
    [36,15],[37,15],[38,15],[39,15],[40,15],[41,15],[42,15],[43,15],[44,15],[45,15],[46,15],[47,15],[48,15],[49,15],[50,15],[51,15],
    [37,16],[38,16],[39,16],[40,16],[41,16],[42,16],[43,16],[44,16],[45,16],[46,16],[47,16],[48,16],[49,16],[50,16],
    [39,17],[40,17],[41,17],[42,17],[43,17],[44,17],[45,17],[46,17],[47,17],[48,17],[49,17],
    [42,18],[43,18],[44,18],[45,18],[46,18],[47,18],[48,18],
    [44,19],[45,19],[46,19],[47,19],[48,19],
    [45,20],[46,20],[47,20],[48,20],[49,20],
    [46,21],[47,21],[48,21],[49,21],[50,21],
    [47,22],[48,22],[49,22],[50,22],
    // Australia
    [46,24],[47,24],[48,24],[49,24],[50,24],
    [46,25],[47,25],[48,25],[49,25],[50,25],[51,25],
    [46,26],[47,26],[48,26],[49,26],[50,26],[51,26],
    [47,27],[48,27],[49,27],[50,27],
    [48,28],[49,28],
  ];
  const cols = 62, rows = 35, dotR = 1.8, spacing = 9;
  const W = cols * spacing, H = rows * spacing;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      {Array.from({ length: rows }, (_, r) =>
        Array.from({ length: cols }, (_, c) => {
          const isDot = dots.some(([dc, dr]) => dc === c && dr === r);
          return (
            <circle
              key={`${c}-${r}`}
              cx={c * spacing + spacing / 2}
              cy={r * spacing + spacing / 2}
              r={dotR}
              fill={isDot ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.06)"}
            />
          );
        })
      )}
    </svg>
  );
}

export function CompanyNameCard({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center px-6 py-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#003648]/20 transition-all duration-200 group cursor-default">
      <span className="text-sm font-semibold text-slate-400 group-hover:text-[#003648] transition-colors duration-200 whitespace-nowrap select-none"
        style={{ fontFamily: "'Inter', sans-serif" }}>
        {name}
      </span>
    </div>
  );
}

export function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#f0f7fa] flex items-center justify-center mt-1">
        <CheckCircle2 className="w-3.5 h-3.5 text-[#003648]" />
      </div>
      <span className="text-slate-600 text-base leading-relaxed">{text}</span>
    </div>
  );
}
