import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowRight, Globe, Zap, Shield, Users, Heart, Activity,
  CheckCircle2, Star, Phone, ChevronRight, Building2,
  Stethoscope, Brain, Pill, Baby, Eye, Dumbbell
} from "lucide-react";
import peopleGlobe from "@assets/xcelerate/people-globe.jpg";
import commuters from "@assets/xcelerate/portrait-smiling-commuters-sitting-waiting-area.jpg";
import keyboard from "@assets/xcelerate/keyboard.png";
import engageLogo from "@assets/xcelerate/Engage-Health-Group-Main-Logo_4C-qwjz8716wy8rnu049qvlrgt6n4p80z7e0w5c38akfc.png";
import unitedLogo from "@assets/xcelerate/united-healthcare-global-logo-1-e1762769752422.png";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

// ─── Animated counter ──────────────────────────────────────────────────────────
function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
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

// ─── Scroll reveal ─────────────────────────────────────────────────────────────
function Reveal({
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

// ─── Dot-grid world map pattern (SVG inline) ───────────────────────────────────
function WorldDots() {
  // A rough world-map outline using dot positions
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
              fill={isDot ? "rgba(22,163,74,0.55)" : "rgba(255,255,255,0.06)"}
            />
          );
        })
      )}
    </svg>
  );
}

// ─── Company name slider ────────────────────────────────────────────────────────
const companiesRow1 = [
  "Brill Power","Chattermill","Codility","One Plus","Designer Group",
  "Dugout","GIMO","Humn.ai","Impala","Kairos","Loyalty Lion","Ometria",
  "Oval Medical Technologies","Oxford Vacmedix","PI Labs","Pismo",
];
const companiesRow2 = [
  "Profit Accumulator","Qdot Technology","Scede","Studio71","ThanksBen",
  "Thirdfort","Thread","Bootstrap Europe","Unibuddy","Wiredscore",
  "Zappi","Bitpanda","Maze","Mews","Awin",
];

function CompanyNameCard({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center px-6 py-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#003648]/20 transition-all duration-200 group cursor-default">
      <span className="text-sm font-semibold text-slate-400 group-hover:text-[#003648] transition-colors duration-200 whitespace-nowrap select-none"
        style={{ fontFamily: "'Outfit', sans-serif" }}>
        {name}
      </span>
    </div>
  );
}

// ─── Check item ────────────────────────────────────────────────────────────────
function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-1">
        <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
      </div>
      <span className="text-slate-600 text-base leading-relaxed">{text}</span>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function Xcelerate() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');

        .xp { font-family: 'Outfit', sans-serif; }
        .xp-serif { font-family: 'Lora', serif; }

        @keyframes xcHeroIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes xcStatIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes xcGlow {
          0%,100% { opacity: 0.4; }
          50%     { opacity: 0.7; }
        }
        .xp-hero-badge  { animation: xcHeroIn 0.7s ease 0.1s both; }
        .xp-hero-h1     { animation: xcHeroIn 0.7s ease 0.25s both; }
        .xp-hero-sub    { animation: xcHeroIn 0.7s ease 0.4s both; }
        .xp-hero-logos  { animation: xcHeroIn 0.7s ease 0.55s both; }
        .xp-hero-ctas   { animation: xcHeroIn 0.7s ease 0.7s both; }
        .xp-stat-0 { animation: xcStatIn 0.6s ease 0.2s both; }
        .xp-stat-1 { animation: xcStatIn 0.6s ease 0.35s both; }
        .xp-stat-2 { animation: xcStatIn 0.6s ease 0.5s both; }

        .xp-btn-green {
          background: #16a34a;
          color: #fff;
          font-weight: 600;
          letter-spacing: 0.01em;
          transition: background 0.18s, transform 0.18s;
        }
        .xp-btn-green:hover {
          background: #15803d;
          transform: translateY(-1px);
        }
        .xp-btn-white {
          background: rgba(255,255,255,0.12);
          color: #fff;
          border: 1.5px solid rgba(255,255,255,0.25);
          font-weight: 500;
          backdrop-filter: blur(8px);
          transition: background 0.18s, border-color 0.18s, transform 0.18s;
        }
        .xp-btn-white:hover {
          background: rgba(255,255,255,0.2);
          border-color: rgba(255,255,255,0.4);
          transform: translateY(-1px);
        }
        .xp-btn-outline-dark {
          border: 1.5px solid #003648;
          color: #003648;
          font-weight: 600;
          transition: all 0.18s;
        }
        .xp-btn-outline-dark:hover {
          background: #003648;
          color: #fff;
          transform: translateY(-1px);
        }
        .xp-cover-item {
          transition: background 0.18s, border-color 0.18s;
        }
        .xp-cover-item:hover {
          background: #f0fdf4;
          border-color: #bbf7d0;
        }
        .xp .btn-cta {
          box-shadow: none;
        }
        .xp .btn-cta:hover {
          box-shadow: none;
        }
        .xp-partner-card {
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .xp-partner-card:hover {
          box-shadow: 0 12px 40px -8px rgba(0,54,72,0.12);
          transform: translateY(-3px);
        }
      `}</style>

      <div className="xp bg-white">

        {/* ══ HERO ═══════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[92vh] flex flex-col overflow-hidden"
          style={{ background: "linear-gradient(160deg, #00263a 0%, #003648 45%, #004d20 100%)" }}>

          {/* Hero background photo */}
          <div className="absolute inset-0 pointer-events-none">
            <img src={peopleGlobe} alt="" className="w-full h-full object-cover object-center opacity-20" />
          </div>

          {/* World dot map overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <WorldDots />
          </div>

          {/* Soft radial glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 55% 55% at 50% 40%, rgba(22,163,74,0.18) 0%, transparent 65%)", animation: "xcGlow 5s ease-in-out infinite" }} />

          {/* Content */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-28 pb-10">

            {/* Badge */}
            <div className="xp-hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-7">
              <Zap className="w-3.5 h-3.5 text-green-300" />
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-green-200">Powered by UnitedHealthcare Global</span>
            </div>

            {/* Headline */}
            <h1 className="xp-hero-h1 text-white leading-none mb-5"
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: "clamp(3.2rem, 8vw, 6.5rem)", letterSpacing: "-0.02em" }}>
              Xcelerate
            </h1>

            <p className="xp-hero-sub text-white/75 mb-8 max-w-xl leading-relaxed"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", fontWeight: 300 }}>
              Global health insurance for<br className="hidden sm:block" />
              <strong className="text-white font-semibold">fast-growing businesses.</strong>
            </p>

            {/* Partner logos row */}
            <div className="xp-hero-logos flex flex-wrap items-center justify-center gap-3 mb-10">
              <div className="flex items-center px-6 py-3.5 rounded-2xl backdrop-blur-md"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)" }}>
                <img src={engageLogo} alt="Engage Health Group" className="w-auto"
                  style={{ height: "42px", filter: "brightness(0) invert(1)" }} />
              </div>

              <div className="flex items-center justify-center w-8 h-8 rounded-full text-white/40"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <span className="text-xs font-light">×</span>
              </div>

              <div className="flex items-center px-6 py-3.5 rounded-2xl backdrop-blur-md"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)" }}>
                <img src={unitedLogo} alt="UnitedHealthcare Global" className="w-auto"
                  style={{ height: "42px", filter: "brightness(0) invert(1)" }} />
              </div>
            </div>

            {/* CTAs */}
            <div className="xp-hero-ctas flex flex-wrap gap-3 justify-center">
              <Link href="/get-a-quote"
                className="btn-cta inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm group">
                Get pricing
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a href="#eligibility"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-white text-[#003648] border-2 border-white/20 shadow-lg hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-200">
                Find out if Xcelerate is right for you
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Stats bar */}
          <div className="relative z-10 w-full mt-auto">
            <div className="max-w-5xl mx-auto px-6 pb-0">
              <div className="grid grid-cols-1 sm:grid-cols-3 rounded-t-2xl overflow-hidden border-t border-x border-white/10 backdrop-blur-md"
                style={{ background: "rgba(0,0,0,0.35)" }}>
                {[
                  { n: 150,   sfx: "+",   pfx: "",  top: "countries covered",           bot: "under a single plan",           cls: "xp-stat-0" },
                  { n: 50000, sfx: "+",   pfx: "",  top: "global employees",            bot: "supported by Engage",           cls: "xp-stat-1" },
                  { n: 199,   sfx: "",    pfx: "£", top: "average premium",             bot: "per employee per month",        cls: "xp-stat-2" },
                ].map(({ n, sfx, pfx, top, bot, cls }, i) => (
                  <div key={i}
                    className={`${cls} flex flex-col items-center justify-center py-7 px-6 border-b sm:border-b-0 border-white/8 ${i > 0 ? "sm:border-l border-white/8" : ""}`}>
                    <div className="text-white font-black tabular-nums leading-none mb-1"
                      style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 4vw, 2.6rem)" }}>
                      <Counter to={n} suffix={sfx} prefix={pfx} />
                    </div>
                    <div className="text-green-300 text-xs font-semibold uppercase tracking-widest">{top}</div>
                    <div className="text-white/40 text-xs mt-0.5">{bot}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ GLOBAL HIRING MADE EASY ════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 mb-5">
                <Globe className="w-3 h-3 text-green-600" />
                <span className="text-xs font-semibold uppercase tracking-widest text-green-700">Global coverage</span>
              </div>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1.1, color: "#003648", letterSpacing: "-0.02em" }}
                className="mb-6">
                Global hiring<br />made easy.
              </h2>
              <p className="text-slate-500 leading-relaxed text-lg mb-5" style={{ fontWeight: 300 }}>
                The world of work has changed. Businesses increasingly depend on the hard work and talent of overseas workers. That's why Engage Health Group built Xcelerate.
              </p>
              <p className="text-slate-500 leading-relaxed text-lg mb-5" style={{ fontWeight: 300 }}>
                Now you can protect all your employees, wherever they are, under a single health insurance policy. No more sifting through multiple policies with multiple providers. Roll everything into one and trim the admin.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                {[
                  "Easy set-up and implementation",
                  "Competitive premiums",
                  "No underwriting required",
                  "Tailored to your international team",
                ].map((f, i) => <CheckItem key={i} text={f} />)}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] relative">
                <img src={commuters} alt="Global workforce" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,54,72,0.7) 0%, transparent 55%)" }} />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl p-4 backdrop-blur-md"
                  style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <p className="text-white text-xs font-semibold">Protecting teams in 150+ countries</p>
                  <p className="text-white/55 text-xs mt-0.5">A single policy. No borders.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══ EXPERT ADVICE & ONGOING SUPPORT ═══════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image — left */}
            <Reveal from="left">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] relative">
                <img src={peopleGlobe} alt="Expert consultants" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,54,72,0.65) 0%, transparent 50%)" }} />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl p-4 backdrop-blur-md"
                  style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <p className="text-white text-xs font-semibold">Award-winning international consultants</p>
                  <p className="text-white/55 text-xs mt-0.5">Dedicated support from day one.</p>
                </div>
              </div>
            </Reveal>

            {/* Text — right */}
            <Reveal from="right" delay={100}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 mb-5">
                <Star className="w-3 h-3 text-green-600" />
                <span className="text-xs font-semibold uppercase tracking-widest text-green-700">Expert support</span>
              </div>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1.1, color: "#003648", letterSpacing: "-0.02em" }}
                className="mb-6">
                Expert advice &amp;<br />ongoing support.
              </h2>
              <p className="text-slate-500 leading-relaxed text-lg mb-5" style={{ fontWeight: 300 }}>
                Xcelerate is backed by our award-winning consultants at Engage Health Group. We will review any current policies you have in place to ensure the plan is the perfect fit for you.
              </p>
              <p className="text-slate-500 leading-relaxed text-lg" style={{ fontWeight: 300 }}>
                Once the policy is implemented, you will receive ongoing administrative support. We'll manage the enrollment of any new joiners, answer any queries you have about the policy and much more.
              </p>
            </Reveal>

          </div>
        </section>

        {/* ══ TRUST BAR ══════════════════════════════════════════════════════ */}
        <section className="bg-[#f5f4fa] py-20 border-y border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-[#003648]/50 mb-3">Trusted by</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003648] leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}>
              Trusted by more than 500 businesses worldwide
            </h2>
            <p className="mt-3 text-slate-500 text-base max-w-xl mx-auto">
              Covering over 50,000 employees across the UK &amp; Internationally
            </p>
          </div>
          <div className="space-y-4">
            <InfiniteSlider gap={16} duration={120} durationOnHover={240}
              className="overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              {[...companiesRow1, ...companiesRow1, ...companiesRow1].map((name, i) => (
                <CompanyNameCard key={i} name={name} />
              ))}
            </InfiniteSlider>
            <InfiniteSlider gap={16} duration={140} durationOnHover={280} reverse
              className="overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              {[...companiesRow2, ...companiesRow2, ...companiesRow2].map((name, i) => (
                <CompanyNameCard key={i} name={name} />
              ))}
            </InfiniteSlider>
          </div>
        </section>

        {/* ══ WORLD-CLASS HEALTHCARE ════════════════════════════════════════ */}
        <section className="py-28 overflow-hidden"
          style={{ background: "linear-gradient(160deg, #00263a 0%, #003648 60%, #004020 100%)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            {/* Header */}
            <Reveal className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 mb-5">
                <Shield className="w-3 h-3 text-green-400" />
                <span className="text-xs font-semibold uppercase tracking-widest text-green-300">Coverage</span>
              </div>
              <h2 className="text-white mb-4"
                style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                World-class healthcare<br />for global teams.
              </h2>
              <p className="text-white/50 text-base max-w-md mx-auto leading-relaxed">
                Xcelerate provides a comprehensive range of world-class healthcare, including, but not limited to:
              </p>
            </Reveal>

            {/* Bento grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">

              {/* Large featured card — spans 2 cols */}
              <Reveal delay={0} className="col-span-2">
                <div className="group h-full rounded-2xl p-7 cursor-default relative overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", transition: "border-color 0.2s, background 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,197,94,0.35)"; (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.07)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.09)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}>
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.25)" }}>
                    <Globe className="w-6 h-6 text-green-400" />
                  </div>
                  <p className="text-white font-bold text-lg mb-2"
                    style={{ fontFamily: "'Outfit', sans-serif" }}>Global medical access</p>
                  <p className="text-white/50 text-base leading-relaxed">
                    Access to medical facilities &amp; specialists anywhere in the world, excl. USA as standard
                  </p>
                </div>
              </Reveal>

              {/* Regular cards */}
              {[
                { icon: Activity,    title: "Inpatient treatment",   desc: "Surgeries & treatments requiring an overnight stay" },
                { icon: Stethoscope, title: "Outpatient treatment",  desc: "Consultations, diagnostics & minor treatments" },
              ].map(({ icon: Icon, title, desc }, i) => (
                <Reveal key={i} delay={80 + i * 60}>
                  <div className="group h-full rounded-2xl p-6 cursor-default"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", transition: "border-color 0.2s, background 0.2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,197,94,0.35)"; (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.07)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.09)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.2)" }}>
                      <Icon className="w-5 h-5 text-green-400" />
                    </div>
                    <p className="text-white font-semibold text-sm mb-1.5"
                      style={{ fontFamily: "'Outfit', sans-serif" }}>{title}</p>
                    <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Second row — 4 equal cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
              {[
                { icon: Shield,   title: "Acute & Chronic",       desc: "Full cover for both acute & chronic conditions" },
                { icon: Dumbbell, title: "Physical therapies",    desc: "Physiotherapy, chiropractic & alternatives" },
                { icon: Eye,      title: "Dental & Optical",      desc: "Dentistry & optical care, treatments & diagnostics" },
                { icon: Brain,    title: "Mental health",         desc: "Counselling & digital support tools" },
              ].map(({ icon: Icon, title, desc }, i) => (
                <Reveal key={i} delay={i * 50}>
                  <div className="group h-full rounded-2xl p-6 cursor-default"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", transition: "border-color 0.2s, background 0.2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,197,94,0.35)"; (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.07)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.09)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.2)" }}>
                      <Icon className="w-5 h-5 text-green-400" />
                    </div>
                    <p className="text-white font-semibold text-sm mb-1.5"
                      style={{ fontFamily: "'Outfit', sans-serif" }}>{title}</p>
                    <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Third row — 2 cards + CTA card */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { icon: Pill,  title: "Prescriptions",   desc: "Prescription drugs & vaccinations" },
                { icon: Baby,  title: "Maternity",       desc: "Options to cover maternity benefits" },
              ].map(({ icon: Icon, title, desc }, i) => (
                <Reveal key={i} delay={i * 50}>
                  <div className="group h-full rounded-2xl p-6 cursor-default"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", transition: "border-color 0.2s, background 0.2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,197,94,0.35)"; (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.07)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.09)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.2)" }}>
                      <Icon className="w-5 h-5 text-green-400" />
                    </div>
                    <p className="text-white font-semibold text-sm mb-1.5"
                      style={{ fontFamily: "'Outfit', sans-serif" }}>{title}</p>
                    <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
                  </div>
                </Reveal>
              ))}

              {/* CTA card — spans 2 cols */}
              <Reveal delay={120} className="col-span-2">
                <div className="h-full rounded-2xl p-7 flex flex-col justify-between"
                  style={{ background: "linear-gradient(135deg, rgba(22,163,74,0.2) 0%, rgba(22,163,74,0.08) 100%)", border: "1px solid rgba(34,197,94,0.3)" }}>
                  <div>
                    <p className="text-white font-bold text-base mb-2"
                      style={{ fontFamily: "'Outfit', sans-serif" }}>
                      Ready for a personalised quote?
                    </p>
                    <p className="text-white/50 text-base leading-relaxed mb-5">
                      Every Xcelerate plan is tailored to your team. Get expert advice and pricing specific to your business.
                    </p>
                  </div>
                  <Link href="/get-a-quote"
                    className="btn-cta inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold self-start group">
                    Request a personalised quotation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </Reveal>
            </div>

          </div>
        </section>

        {/* ══ BUILT BY / POWERED BY ════════════════════════════════════════════ */}
        <section className="py-24 border-y border-slate-100" style={{ background: "#f8fafc" }}>
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Reveal className="text-center mb-14">
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.1, color: "#003648", letterSpacing: "-0.02em" }}>
                Built by Engage Health Group
              </h2>
              <p className="text-slate-400 text-sm mt-2">Powered by UnitedHealthcare</p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  role: "Built by",
                  logo: engageLogo,
                  alt: "Engage Health Group",
                  text: "An employee benefits consultancy that has won multiple awards for the quality of its international advice and the support it offers to business customers.",
                  bgImg: keyboard,
                  logoBg: "#f0f7fa",
                },
                {
                  role: "Powered by",
                  logo: unitedLogo,
                  alt: "UnitedHealthcare Global",
                  text: "A global health insurance provider that can support employees in more than 150 countries, ensuring comprehensive cover for organisations and globally mobile workforces.",
                  bgImg: null,
                  logoBg: "#f0f7ff",
                },
              ].map(({ role, logo, alt, text, bgImg, logoBg }, i) => (
                <Reveal key={i} delay={i * 120}>
                  <div className="xp-partner-card rounded-2xl overflow-hidden border-2 border-slate-200 h-full relative">
                    {bgImg && (
                      <>
                        <img src={bgImg} alt="" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" style={{ opacity: 0.05 }} />
                        <div className="absolute inset-0 bg-white/93 pointer-events-none" />
                      </>
                    )}
                    <div className="relative p-8">
                      <p className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-5">{role}</p>
                      <div className="inline-flex items-center justify-center px-5 py-4 rounded-xl mb-6"
                        style={{ background: logoBg }}>
                        <img src={logo} alt={alt} className="h-[60px] w-auto object-contain" />
                      </div>
                      <p className="text-slate-500 text-base leading-relaxed">{text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="text-center text-slate-500 text-base leading-relaxed max-w-3xl mx-auto">
                Together, we have designed a radical new way of delivering healthcare to start-ups with an international footprint. If your business depends on global talent, it's worth getting in touch with our expert consultants to find out if it can fulfil your requirements — and to receive a personalised quotation.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ══ ELIGIBILITY ════════════════════════════════════════════════════ */}
        <section id="eligibility" className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 mb-5">
                <Users className="w-3 h-3 text-green-600" />
                <span className="text-xs font-semibold uppercase tracking-widest text-green-700">Eligibility</span>
              </div>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1.1, color: "#003648", letterSpacing: "-0.02em" }}
                className="mb-6">
                Who can join<br />Xcelerate?
              </h2>
              <p className="text-slate-500 leading-relaxed text-lg mb-6" style={{ fontWeight: 300 }}>
                If you're a start-up with employees in more than one country, there's a good chance you will qualify for the scheme. Fill in the form below for a free assessment from one of our international specialists.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/get-a-quote"
                  className="xp-btn-green inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm">
                  Check your eligibility
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:01273974419"
                  className="xp-btn-outline-dark inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm">
                  <Phone className="w-4 h-4" />
                  01273 974419
                </a>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="rounded-2xl overflow-hidden border border-slate-100"
                style={{ background: "linear-gradient(135deg, #003648 0%, #004d20 100%)" }}>
                <div className="p-8">
                  <h3 className="font-bold text-white text-xl mb-2"
                    style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Get a free assessment
                  </h3>
                  <p className="text-white/60 text-base mb-6">Please complete this form and someone will be in touch shortly.</p>

                  <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>

                    {/* Row: First + Last name */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: "First Name", type: "text" },
                        { label: "Last Name",  type: "text" },
                      ].map(({ label, type }) => (
                        <div key={label}>
                          <label className="text-white/60 text-xs font-medium block mb-1">{label} <span className="text-green-400">*</span></label>
                          <input required type={type} placeholder={label}
                            className="w-full px-3 py-2.5 rounded-lg text-sm text-white placeholder-white/30 outline-none focus:ring-2 focus:ring-green-400/50 transition"
                            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }} />
                        </div>
                      ))}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-white/60 text-xs font-medium block mb-1">Phone <span className="text-green-400">*</span></label>
                      <input required type="tel" placeholder="Phone number"
                        className="w-full px-3 py-2.5 rounded-lg text-sm text-white placeholder-white/30 outline-none focus:ring-2 focus:ring-green-400/50 transition"
                        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }} />
                    </div>

                    {/* Company name */}
                    <div>
                      <label className="text-white/60 text-xs font-medium block mb-1">Company name <span className="text-green-400">*</span></label>
                      <input required type="text" placeholder="Company name"
                        className="w-full px-3 py-2.5 rounded-lg text-sm text-white placeholder-white/30 outline-none focus:ring-2 focus:ring-green-400/50 transition"
                        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }} />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-white/60 text-xs font-medium block mb-1">Email <span className="text-green-400">*</span></label>
                      <input required type="email" placeholder="Email address"
                        className="w-full px-3 py-2.5 rounded-lg text-sm text-white placeholder-white/30 outline-none focus:ring-2 focus:ring-green-400/50 transition"
                        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }} />
                    </div>

                    {/* No. Employees */}
                    <div>
                      <label className="text-white/60 text-xs font-medium block mb-1">No. Employees <span className="text-green-400">*</span></label>
                      <input required type="number" min="1" placeholder="Number of employees"
                        className="w-full px-3 py-2.5 rounded-lg text-sm text-white placeholder-white/30 outline-none focus:ring-2 focus:ring-green-400/50 transition"
                        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }} />
                    </div>

                    {/* Comments */}
                    <div>
                      <label className="text-white/60 text-xs font-medium block mb-1">Comments</label>
                      <textarea rows={3} placeholder="Any additional comments..."
                        className="w-full px-3 py-2.5 rounded-lg text-sm text-white placeholder-white/30 outline-none focus:ring-2 focus:ring-green-400/50 transition resize-none"
                        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }} />
                    </div>

                    {/* GDPR */}
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input required type="checkbox"
                        className="mt-0.5 flex-shrink-0 w-4 h-4 rounded accent-green-500 cursor-pointer" />
                      <span className="text-white/45 text-xs leading-relaxed">
                        We strictly adhere to the General Data Protection Regulation and will only use your personal information for the purposes of helping with your query. For more information, please read our{" "}
                        <a href="#" className="text-green-400 underline hover:text-green-300 transition-colors">Privacy Notice &amp; Cookies</a>.
                      </span>
                    </label>

                    {/* Submit */}
                    <button type="submit"
                      className="btn-cta w-full py-3.5 rounded-xl text-sm font-bold mt-1 flex items-center justify-center gap-2 tracking-wide">
                      CHECK YOUR ELIGIBILITY
                      <ArrowRight className="w-4 h-4" />
                    </button>

                  </form>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

      </div>
      </main>
      <Footer />
    </div>
  );
}
