import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Search, Compass, PackageCheck, Settings2, RefreshCcw, ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "wouter";

const stages = [
  {
    number: "01",
    word: "Learn",
    subtitle: "Free consultation & discovery",
    description:
      "We start with a free, no-obligation consultation to understand your business — your workforce size, demographics, existing cover, and ambitions. We listen first, ask the right questions, and build a clear picture of exactly what your people need.",
    bullets: [
      "Free discovery call — no obligation",
      "Workforce & demographic analysis",
      "Existing policy benchmarking",
      "Coverage gap identification",
    ],
    icon: Compass,
    accent: "#76186f",
    gradient: "from-purple-600 to-primary",
    light: "bg-purple-50",
    lightText: "text-purple-700",
  },
  {
    number: "02",
    word: "Source",
    subtitle: "Whole-of-market research",
    description:
      "With access to every major UK and international insurer, we run a comprehensive market search tailored to your brief. We compare providers on price, quality, and fit — giving you impartial recommendations with no pressure to buy.",
    bullets: [
      "Access to the whole UK & international market",
      "Multi-provider comparison",
      "Impartial, regulated advice",
      "Honest recommendations — even if that means no purchase",
    ],
    icon: Search,
    accent: "#0dab76",
    gradient: "from-emerald-500 to-teal-600",
    light: "bg-emerald-50",
    lightText: "text-emerald-700",
  },
  {
    number: "03",
    word: "Implement",
    subtitle: "We handle everything",
    description:
      "Once you're happy with our recommendation, we purchase and implement your policies on your behalf. We liaise directly with insurers, handle all paperwork, and ensure every plan is set up correctly — including complex international arrangements.",
    bullets: [
      "Policy purchase & procurement",
      "Direct insurer liaison",
      "International policy setup (inc. Xcelerate)",
      "Full documentation & compliance checks",
    ],
    icon: PackageCheck,
    accent: "#3568d4",
    gradient: "from-blue-500 to-indigo-600",
    light: "bg-blue-50",
    lightText: "text-blue-700",
  },
  {
    number: "04",
    word: "Manage",
    subtitle: "Seamless day-to-day support",
    description:
      "We introduce the scheme to your workforce and become your long-term partner. Your dedicated account manager handles claims, new joiners, leavers, and policy queries — significantly reducing the burden on your HR team.",
    bullets: [
      "Bespoke employee communications",
      "Onsite or virtual benefit presentations",
      "Claims & member support",
      "New joiner & leaver administration",
    ],
    icon: Settings2,
    accent: "#f59e0b",
    gradient: "from-amber-400 to-orange-500",
    light: "bg-amber-50",
    lightText: "text-amber-700",
  },
  {
    number: "05",
    word: "Review",
    subtitle: "Your scheme stays competitive",
    description:
      "Markets change, and so do your needs. We proactively review your benefits package at each renewal — re-benchmarking the market, identifying improvements, and ensuring your cover evolves with your business. Year after year.",
    bullets: [
      "Annual market re-benchmark",
      "Renewal negotiation & strategy",
      "Benefits effectiveness reporting",
      "Continuous improvement recommendations",
    ],
    icon: RefreshCcw,
    accent: "#003648",
    gradient: "from-teal-600 to-secondary",
    light: "bg-teal-50",
    lightText: "text-teal-700",
  },
];

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const stage = stages[active];
  const Icon = stage.icon;

  return (
    <section className="py-24 bg-[#f8f7fb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            Our process
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-3 leading-tight">
            5 Stages of Exceptional Service
          </h2>
          <p className="text-lg text-muted-foreground">
            From the first conversation to ongoing support — we're with you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6">

          {/* ── LEFT: stage nav ── */}
          <div className="flex flex-col gap-2">
            {stages.map((s, i) => {
              const SIcon = s.icon;
              const isActive = i === active;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group w-full text-left flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-200",
                    isActive
                      ? "bg-white border-transparent shadow-lg"
                      : "bg-white/40 border-border/40 hover:bg-white hover:border-border hover:shadow-sm"
                  )}
                >
                  {/* coloured left bar */}
                  <div
                    className="w-1 self-stretch rounded-full shrink-0 transition-all duration-200"
                    style={{ background: isActive ? s.accent : "transparent" }}
                  />
                  {/* icon */}
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200",
                      isActive ? s.light : "bg-muted"
                    )}
                  >
                    <SIcon
                      className={cn("w-5 h-5 transition-colors duration-200", isActive ? s.lightText : "text-muted-foreground")}
                    />
                  </div>
                  {/* text */}
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-black text-muted-foreground/60 uppercase tracking-widest">{s.number}</span>
                      <span className={cn("font-extrabold text-base transition-colors duration-200", isActive ? "text-secondary" : "text-muted-foreground group-hover:text-secondary")}>
                        {s.word}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5 truncate">{s.subtitle}</div>
                  </div>
                  {/* active arrow */}
                  {isActive && (
                    <ArrowRight className="w-4 h-4 shrink-0 ml-auto" style={{ color: stage.accent }} />
                  )}
                </button>
              );
            })}

            {/* CTA underneath nav */}
            <Link
              href="/contact"
              className="btn-cta mt-2 flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl"
            >
              Start your free review
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* ── RIGHT: content panel ── */}
          <div className="bg-white rounded-3xl border border-border/40 shadow-lg overflow-hidden">

            {/* coloured top bar */}
            <div
              className={cn("h-1.5 w-full bg-gradient-to-r", stage.gradient)}
            />

            <div className="p-8 md:p-12">

              {/* stage badge + big word */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">
                    Stage {stage.number}
                  </div>
                  <h3
                    className={cn("text-5xl md:text-6xl font-black bg-gradient-to-br bg-clip-text text-transparent leading-none", stage.gradient)}
                  >
                    {stage.word}
                  </h3>
                  <div className="text-sm font-semibold text-muted-foreground mt-2">{stage.subtitle}</div>
                </div>

                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center shadow-md", stage.light)}>
                  <Icon className={cn("w-8 h-8", stage.lightText)} strokeWidth={1.75} />
                </div>
              </div>

              {/* description */}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
                {stage.description}
              </p>

              {/* bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {stage.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: stage.accent }}
                    />
                    <span className="text-sm text-secondary font-medium">{b}</span>
                  </div>
                ))}
              </div>

              {/* step dots + prev/next */}
              <div className="flex items-center justify-between pt-6 border-t border-border/50">
                <div className="flex items-center gap-2">
                  {stages.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={cn(
                        "rounded-full transition-all duration-300",
                        i === active
                          ? "w-7 h-2.5"
                          : "w-2.5 h-2.5 bg-border hover:bg-muted-foreground"
                      )}
                      style={i === active ? { background: stage.accent } : {}}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActive((a) => (a - 1 + stages.length) % stages.length)}
                    className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary/30 transition-all"
                  >
                    <ArrowRight className="w-4 h-4 rotate-180" />
                  </button>
                  <button
                    onClick={() => setActive((a) => (a + 1) % stages.length)}
                    className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary/30 transition-all"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
