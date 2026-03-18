import { useState } from "react";
import {
  Heart, Shield, TrendingUp, Smile, Activity, Headphones,
  AlertCircle, Globe, Plane, Lock, UserCheck, MonitorSmartphone,
  UserX, Stethoscope, Building2, Users, ArrowRight, MapPin,
  Briefcase, ShieldCheck, HeartPulse, FileSearch,
} from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

const ukProducts = [
  { icon: HeartPulse,       title: "Group Health Insurance",           desc: "Create a scheme tailored to your business." },
  { icon: Shield,           title: "Group Life Insurance",             desc: "Discover the most competitive deals." },
  { icon: TrendingUp,       title: "Group Income Protection",          desc: "Source the ideal Group Income Protection scheme." },
  { icon: AlertCircle,      title: "Group Critical Illness",           desc: "Find the best value Critical Illness cover." },
  { icon: Smile,            title: "Group Dental Insurance",           desc: "Understand your options for Dental insurance." },
  { icon: Activity,         title: "Corporate Wellness Programmes",    desc: "Plan & launch a Corporate Wellness Programme." },
  { icon: Headphones,       title: "Employee Assistance Programmes",   desc: "Find the right EAP for your budget." },
  { icon: Heart,            title: "Group Health Cash Plan",           desc: "Understand how Business Health Cash Plans work." },
  { icon: UserCheck,        title: "Key Person Insurance",             desc: "Fully grasp how Key Person Insurance works." },
  { icon: ShieldCheck,      title: "Relevant Life Insurance",          desc: "Set-up the policy & manage the claims process." },
  { icon: Stethoscope,      title: "Employee Health Screening",        desc: "Protect the future health & wellbeing of your team." },
  { icon: MonitorSmartphone,title: "Employee Benefits Platforms",      desc: "Centralise and communicate your full benefits package." },
];

const intlProducts = [
  { icon: Globe,            title: "Int. Business Health Insurance",        desc: "Set up an International Health Insurance scheme." },
  { icon: Shield,           title: "International Group Life Insurance",     desc: "Design & launch a bespoke global scheme." },
  { icon: TrendingUp,       title: "International Group Income Protection",  desc: "Manage a scheme for your global workforce." },
  { icon: AlertCircle,      title: "International Group Critical Illness",   desc: "Design, implement & manage a bespoke policy." },
  { icon: Plane,            title: "Group Business Travel Insurance",        desc: "Understand Business Travel Insurance policies." },
  { icon: Lock,             title: "Kidnap and Ransom Insurance",            desc: "Safeguard & support your hard-working teams." },
  { icon: FileSearch,       title: "Short-Term International Health",        desc: "Source a variety of individually tailored quotes." },
  { icon: Headphones,       title: "Int. Employee Assistance Programmes",    desc: "Design, launch & manage a tailored policy." },
  { icon: MapPin,           title: "International Security Services",        desc: "Locate the best International Security Services." },
  { icon: UserCheck,        title: "Pre-Assignment Screening",               desc: "Learn how to apply Pre-Assignment Screening." },
  { icon: Building2,        title: "US Company Health Insurance",            desc: "Gain a clear picture of how US healthcare works." },
  { icon: Briefcase,        title: "Additional International Products",      desc: "Professional advice and guidance." },
];

type Tab = "uk" | "intl";

export function ServicesGrid() {
  const [active, setActive] = useState<Tab>("uk");
  const products = active === "uk" ? ukProducts : intlProducts;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              Our Products
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-3">
              Everything Your Team Needs
            </h2>
            <p className="text-lg text-muted-foreground">
              Mix and match from the entire market — UK employee benefits or comprehensive international cover.
            </p>
          </div>
          <Link href="/products" className="group inline-flex items-center gap-2 font-bold text-primary hover:text-primary/80 transition-colors whitespace-nowrap shrink-0">
            Explore all products <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* tab switcher */}
        <div className="flex items-center gap-1 p-1 rounded-2xl bg-muted/60 w-fit mb-10 border border-border/60">
          {([
            { id: "uk"   as Tab, label: "Employee Benefits",      sub: "UK",     color: "#1961a5" },
            { id: "intl" as Tab, label: "International Benefits", sub: "Global", color: "#c0145e" },
          ] as const).map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={cn(
                "relative px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 flex items-center gap-2",
                active === t.id
                  ? "text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {active === t.id && (
                <span
                  className="absolute inset-0 rounded-xl"
                  style={{ background: t.color }}
                />
              )}
              <span className="relative z-10">{t.label}</span>
              <span className={cn(
                "relative z-10 text-xs px-2 py-0.5 rounded-full font-semibold",
                active === t.id ? "bg-white/20 text-white" : "bg-border text-muted-foreground"
              )}>
                {t.sub}
              </span>
            </button>
          ))}
        </div>

        {/* product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 rounded-2xl overflow-hidden border border-border/40 shadow-sm">
          {products.map((p, i) => {
            const Icon = p.icon;
            return (
              <Link key={`${active}-${i}`} href="/products">
                <div className="group flex items-start gap-4 p-6 bg-white hover:bg-secondary/[0.03] transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-secondary/8 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-all duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-secondary text-sm group-hover:text-primary transition-colors leading-snug mb-1">
                      {p.title}
                    </div>
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      {p.desc}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
