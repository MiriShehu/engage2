import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import {
  MessageCircle,
  Lightbulb,
  FileCheck,
  Presentation,
  HeartHandshake,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { Link } from "wouter";

const stages = [
  {
    number: "01",
    title: "Understanding Your Needs",
    subtitle: "Free consultation & discovery",
    description:
      "We start with a free consultation to understand your business requirements, workforce demographics, and priorities. We assess any existing policies, identify coverage gaps, and listen carefully — so our advice is genuinely tailored to you.",
    icon: MessageCircle,
    color: "from-violet-500 to-purple-700",
    lightColor: "bg-violet-50",
    iconColor: "text-violet-600",
    borderColor: "border-violet-200",
  },
  {
    number: "02",
    title: "Expert Advice & Sourcing",
    subtitle: "Whole-of-market access",
    description:
      "We provide impartial recommendations based on your specific requirements, with access to the full UK and international insurance market. We compare multiple providers to find the most cost-effective fit — and we'll always give straight advice, even if that means telling you not to buy.",
    icon: Lightbulb,
    color: "from-amber-400 to-orange-500",
    lightColor: "bg-amber-50",
    iconColor: "text-amber-600",
    borderColor: "border-amber-200",
  },
  {
    number: "03",
    title: "Policy Purchase & Implementation",
    subtitle: "We handle everything",
    description:
      "Once you're happy, we purchase policies and services on your behalf and manage all the procurement details. We liaise directly with insurers to ensure every plan is set up correctly — including international policies such as Xcelerate for global teams.",
    icon: FileCheck,
    color: "from-emerald-400 to-teal-600",
    lightColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-200",
  },
  {
    number: "04",
    title: "Scheme Delivery & Introduction",
    subtitle: "Seamless rollout to your team",
    description:
      "We deliver the scheme to your business and introduce the benefits to your workforce. We create bespoke employee communications, manage enrolment, and can conduct onsite or virtual presentations — significantly reducing the burden on your HR team.",
    icon: Presentation,
    color: "from-blue-400 to-indigo-600",
    lightColor: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    number: "05",
    title: "Ongoing Management & Support",
    subtitle: "Your long-term partner",
    description:
      "Your dedicated account manager is your single point of contact for everything. We help with claims, enrol new joiners, answer policy queries, manage renewals, and keep your benefits package up to date — providing full administrative support for the life of your policy.",
    icon: HeartHandshake,
    color: "from-rose-400 to-primary",
    lightColor: "bg-rose-50",
    iconColor: "text-rose-600",
    borderColor: "border-rose-200",
  },
];

const AUTOPLAY_INTERVAL = 5000;

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const dragStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (index: number, dir: "next" | "prev" = "next") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setProgress(0);
      setTimeout(() => {
        setActive(index);
        setAnimating(false);
      }, 350);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((active + 1) % stages.length, "next");
  }, [active, goTo]);

  const prev = useCallback(() => {
    goTo((active - 1 + stages.length) % stages.length, "prev");
  }, [active, goTo]);

  const resetTimers = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    setProgress(0);

    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + 100 / (AUTOPLAY_INTERVAL / 50), 100));
    }, 50);

    timerRef.current = setInterval(() => {
      setActive((a) => {
        const next = (a + 1) % stages.length;
        setDirection("next");
        setAnimating(true);
        setTimeout(() => setAnimating(false), 350);
        setProgress(0);
        return next;
      });
    }, AUTOPLAY_INTERVAL);
  }, []);

  useEffect(() => {
    resetTimers();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [resetTimers]);

  const handleStepClick = (i: number) => {
    goTo(i, i > active ? "next" : "prev");
    resetTimers();
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    dragStartX.current =
      "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (dragStartX.current === null) return;
    const endX =
      "changedTouches" in e
        ? e.changedTouches[0].clientX
        : e.clientX;
    const diff = dragStartX.current - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
      resetTimers();
    }
    dragStartX.current = null;
  };

  const stage = stages[active];
  const Icon = stage.icon;

  return (
    <section className="py-28 bg-secondary overflow-hidden relative">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-semibold mb-6 border border-white/10">
            Our process
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            5 Stages of Exceptional Service
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            From the first conversation to ongoing support — we're with you every step of the way.
          </p>
        </div>

        {/* Step pills */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          {stages.map((s, i) => (
            <button
              key={i}
              onClick={() => handleStepClick(i)}
              className={cn(
                "group relative flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                i === active
                  ? "bg-white text-secondary shadow-lg shadow-black/20 scale-105"
                  : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white border border-white/10"
              )}
            >
              <span
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center text-xs font-black transition-all duration-300",
                  i === active
                    ? `bg-gradient-to-br ${s.color} text-white`
                    : "bg-white/10 text-white/50"
                )}
              >
                {i + 1}
              </span>
              <span className="hidden sm:inline">{s.title.split(" ")[0]}</span>
              {/* Progress bar on active pill */}
              {i === active && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-violet-400 rounded-full transition-all duration-75" style={{ width: `${progress}%`, maxWidth: "80%" }} />
              )}
            </button>
          ))}
        </div>

        {/* Main card */}
        <div
          className="relative cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
        >
          <div
            className={cn(
              "bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 transition-all duration-350",
              animating
                ? direction === "next"
                  ? "opacity-0 translate-x-8"
                  : "opacity-0 -translate-x-8"
                : "opacity-100 translate-x-0"
            )}
            style={{ transition: "opacity 350ms ease, transform 350ms ease" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 items-center">

              {/* Left: stage badge + icon */}
              <div className="flex flex-col items-center lg:items-start gap-6">
                <div className={cn("w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl bg-gradient-to-br", stage.color)}>
                  <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Stage</div>
                  <div className={cn("text-7xl font-black bg-gradient-to-br bg-clip-text text-transparent leading-none", stage.color)}>
                    {stage.number}
                  </div>
                </div>
              </div>

              {/* Right: content */}
              <div>
                <div className="text-white/50 text-sm font-semibold uppercase tracking-wider mb-3">
                  {stage.subtitle}
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                  {stage.title}
                </h3>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  {stage.description}
                </p>

                {/* Stage indicators (dots) */}
                <div className="flex items-center gap-3">
                  {stages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handleStepClick(i)}
                      className={cn(
                        "rounded-full transition-all duration-300",
                        i === active
                          ? "w-8 h-2.5 bg-white"
                          : "w-2.5 h-2.5 bg-white/25 hover:bg-white/50"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => { prev(); resetTimers(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 -translate-x-6 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-200 shadow-xl backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => { next(); resetTimers(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 translate-x-6 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-200 shadow-xl backdrop-blur-sm"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-primary shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Free Market Review
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
