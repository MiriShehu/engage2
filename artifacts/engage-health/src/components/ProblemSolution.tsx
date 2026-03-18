import { Link } from "wouter";
import { ArrowRight, Lightbulb } from "lucide-react";

const facts = [
  {
    stat: "9 in 10",
    label: "employees rank health as their top life priority",
    detail: "Yet most receive no employer support for it. A good benefits package changes that.",
    source: "CIPD",
    size: "large",
    accent: "from-[#76186f] to-[#9b2594]",
    bg: "bg-secondary",
    textLight: true,
  },
  {
    stat: "90%",
    label: "would trade a 5% pay rise for better benefits",
    detail: "Salary is no longer the whole picture. Benefits are the new battleground for talent.",
    source: "QuickBooks",
    size: "small",
    accent: "from-[#003648] to-[#005a78]",
    bg: "bg-[#f0f7f9]",
    textLight: false,
  },
  {
    stat: "£5",
    label: "returned for every £1 invested in mental health support",
    detail: "EAPs and wellbeing programmes don't just feel good, the ROI is measurable.",
    source: "Deloitte",
    size: "small",
    accent: "from-[#76186f] to-[#9b2594]",
    bg: "bg-[#faf0fa]",
    textLight: false,
  },
  {
    stat: "48%",
    label: "of workers would stay in their role for better benefits, even over a higher salary",
    detail: "Retention is as much about benefits strategy as compensation.",
    source: "QuickBooks",
    size: "wide",
    accent: "from-[#003648] to-[#005a78]",
    bg: "bg-[#f0f7f9]",
    textLight: false,
  },
  {
    stat: "74%",
    label: "of UK companies now use Employee Assistance Programmes",
    detail: "Up from just 52% in 2016. Wellbeing support is now a baseline expectation.",
    source: "CIPD 2023",
    size: "small",
    accent: "from-[#76186f] to-[#9b2594]",
    bg: "bg-[#faf0fa]",
    textLight: false,
  },
];

export function ProblemSolution() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/15">
              <Lightbulb className="w-3.5 h-3.5" />
              Did you know?
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-tight">
              The case for better
              <br />
              <span className="text-primary">employee benefits</span>
            </h2>
          </div>
          <p className="text-gray-500 text-lg max-w-xs sm:text-right leading-relaxed">
            The data speaks for itself: investing in your team's health and wellbeing pays off.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-5">

          {/* Card 1 — large, dark, spans 2 rows on lg */}
          <div className={`relative overflow-hidden rounded-3xl p-8 lg:row-span-2 flex flex-col justify-between min-h-[280px] ${facts[0].bg} group`}>
            <div className={`absolute inset-0 opacity-[0.12] bg-gradient-to-br ${facts[0].accent}`} />
            <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-6">Source: {facts[0].source}</div>
              <div className={`text-6xl lg:text-7xl font-black mb-4 bg-gradient-to-br bg-clip-text text-transparent ${facts[0].accent}`}>
                {facts[0].stat}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">{facts[0].label}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{facts[0].detail}</p>
            </div>
            <Link href="/contact" className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors group/link">
              Get a free review
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Cards 2–6 — smaller */}
          {facts.slice(1).map((fact, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-3xl p-7 ${fact.bg} group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${fact.size === "wide" ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${fact.accent}`} />
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Source: {fact.source}</div>
              <div className={`text-5xl font-black mb-3 bg-gradient-to-br bg-clip-text text-transparent ${fact.accent}`}>
                {fact.stat}
              </div>
              <h3 className="text-base font-bold text-secondary mb-2 leading-snug">{fact.label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{fact.detail}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-12 bg-white border border-gray-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <div className="font-bold text-secondary text-lg">Ready to build a benefits package that actually works?</div>
            <div className="text-gray-500 text-sm mt-0.5">Free market review, no obligation, no cost to your business.</div>
          </div>
          <Link
            href="/contact"
            className="btn-cta shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl"
          >
            Start your free review
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
