import { Search, Headset, FileText, Trophy, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

const pillars = [
  {
    number: "01",
    title: "Truly independent advice",
    desc: "We are not tied to any insurer. As a whole-of-market broker, we search every available option — UK and international — to find the policy that genuinely fits your business, not the one that pays us the most.",
    icon: Search,
    gradient: "from-[#76186f] to-violet-500",
    lightBg: "bg-violet-50",
    tag: "Whole-of-market",
  },
  {
    number: "02",
    title: "No fees, no contracts, ever",
    desc: "Our consultancy is completely free to clients. We are remunerated directly by insurers — you pay nothing extra, and there is no contractual obligation to stay. We earn your loyalty through service, not lock-in.",
    icon: FileText,
    gradient: "from-emerald-500 to-teal-600",
    lightBg: "bg-emerald-50",
    tag: "No cost to you",
  },
  {
    number: "03",
    title: "A dedicated account manager who knows your business",
    desc: "One named person. Always reachable by phone. No call centres, no ticket queues, no being passed around. Your account manager handles everything from renewals to new joiner enrolments to claims support.",
    icon: Headset,
    gradient: "from-sky-500 to-blue-600",
    lightBg: "bg-sky-50",
    tag: "Dedicated support",
  },
  {
    number: "04",
    title: "Award-winning expertise you can trust",
    desc: "Named Best International Group Advice Firm at the UK Health & Protection Awards in 2023 and 2024. Our team has 30+ years of combined experience from Bupa Global, Aetna, Mercer, Vitality, and AIG — all working for you.",
    icon: Trophy,
    gradient: "from-amber-400 to-orange-500",
    lightBg: "bg-amber-50",
    tag: "Industry recognised",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 items-end mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/15">
              The Engage difference
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-secondary leading-[1.15]">
              Our successful
              <br />
              relationships are
              <br />
              <span className="text-primary">built on</span>
            </h2>
          </div>
          <p className="text-gray-500 text-lg leading-relaxed lg:max-w-lg self-end pb-1">
            Since 2016, Engage Health Group has built a reputation as one of the UK's most trusted independent consultancies — with specialists drawn from the world's leading insurers, all dedicated to your outcomes.
          </p>
        </div>

        {/* Pillars */}
        <div className="flex flex-col divide-y divide-gray-100">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="group grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-6 md:gap-12 items-start py-10 hover:bg-gray-50/70 rounded-2xl px-4 md:px-6 -mx-4 md:-mx-6 transition-all duration-300 cursor-default"
              >
                {/* Number + tag */}
                <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3 pt-1">
                  <span className={cn(
                    "text-4xl md:text-5xl font-black bg-gradient-to-br bg-clip-text text-transparent leading-none",
                    p.gradient
                  )}>
                    {p.number}
                  </span>
                  <span className={cn(
                    "text-xs font-bold px-2.5 py-1 rounded-full",
                    p.lightBg,
                    "text-secondary"
                  )}>
                    {p.tag}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br shadow-md shrink-0",
                      p.gradient
                    )}>
                      <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-secondary leading-tight">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
                    {p.desc}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-300 group-hover:border-primary group-hover:text-primary group-hover:scale-110 transition-all duration-300 self-center mt-1 shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom band */}
        <div className="mt-16 relative overflow-hidden rounded-3xl bg-secondary px-8 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <div className="relative text-center md:text-left">
            <div className="text-white text-xl md:text-2xl font-extrabold mb-1">Start with a free, no-obligation market review</div>
            <div className="text-white/55 text-sm">We'll assess your current setup and show you what's possible — at zero cost.</div>
          </div>
          <Link
            href="/contact"
            className="btn-cta relative shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-xl"
          >
            Get my free review
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
