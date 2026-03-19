import { PageLayout } from "@/components/layout";
import { TrustBar } from "@/components/sections/trust";
import { QuoteForm } from "@/components/sections/shared";
import { Shield, Clock, Award, CheckCircle2 } from "lucide-react";

const trust = [
  { icon: Shield, label: "FCA Regulated", sub: "No. 812846" },
  { icon: Clock, label: "Reply within 2hrs", sub: "Mon–Fri, 9am–5pm" },
  { icon: Award, label: "Award-winning", sub: "UK H&P Awards 2024" },
];

const promises = [
  "Whole-of-market comparison across all major insurers",
  "Completely free — no fees, ever",
  "No obligation to proceed",
  "Dedicated expert adviser throughout",
];

export default function GetAQuote() {
  return (
    <PageLayout>
      {/* Hero band */}
      <div className="bg-secondary pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-primary/10 blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-white/70 mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "linear-gradient(90deg,#0dab76,#3568d4)" }} />
            Free, no-obligation service
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Get your free market<br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#0dab76,#3568d4)" }}>
              review today
            </span>
          </h1>
          <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
            We benchmark the whole market and present your best options at zero cost. Takes less than 60 seconds to get started.
          </p>

          {/* promises */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
            {promises.map((p) => (
              <div key={p} className="flex items-center gap-2 text-sm text-white/70">
                <CheckCircle2 className="w-4 h-4 text-[#0dab76] shrink-0" />
                {p}
              </div>
            ))}
          </div>

          {/* trust chips */}
          <div className="flex flex-wrap justify-center gap-3">
            {trust.map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <t.icon className="w-4 h-4 text-[#0dab76] shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-bold text-white leading-none">{t.label}</div>
                  <div className="text-xs text-white/45 leading-none mt-0.5">{t.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TrustBar />

      {/* Form section */}
      <div className="bg-muted/30 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm />
        </div>
      </div>
    </PageLayout>
  );
}
