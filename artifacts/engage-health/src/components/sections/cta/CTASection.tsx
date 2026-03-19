import { Shield, Clock, Award, ArrowRight, Phone } from "lucide-react";
import { Sparkles } from "@/components/sections/shared/Sparkles";
import { Link } from "wouter";

const steps = [
  {
    num: "01",
    title: "Tell us about your business",
    desc: "A quick form, takes about 60 seconds.",
  },
  {
    num: "02",
    title: "We search the whole market",
    desc: "Access to every major UK and international insurer.",
  },
  {
    num: "03",
    title: "No fees, no obligation",
    desc: "Our service is free. You decide if and when to proceed.",
  },
];

const trust = [
  { icon: Shield, label: "FCA Regulated", sub: "No. 812846" },
  { icon: Clock,  label: "Reply within 2hrs", sub: "Mon–Fri, 9am–5pm" },
  { icon: Award,  label: "Award-winning", sub: "UK H&P Awards 2024" },
];

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#001e2b] py-24">

      {/* sparkles background */}
      <Sparkles
        className="absolute inset-0 w-full h-full"
        color="#ffffff"
        density={120}
        speed={0.4}
        opacity={0.5}
      />

      {/* glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] rounded-full bg-secondary/40 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: copy */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white/70 mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full inline-block"
                    style={{ background: "linear-gradient(90deg,#0dab76,#3568d4)" }} />
              Free, no-obligation service
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-white">
              Get a free market<br />
              review{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(90deg,#0dab76,#3568d4)" }}
              >
                today.
              </span>
            </h2>

            <p className="text-lg text-white/65 mb-12 leading-relaxed max-w-lg">
              Whether you're setting up benefits for the first time or reviewing an existing scheme, we benchmark the whole market and present your best options, at zero cost.
            </p>

            {/* numbered steps */}
            <div className="space-y-7 mb-12">
              {steps.map((s) => (
                <div key={s.num} className="flex items-start gap-5">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 font-black text-sm text-white shadow-lg"
                    style={{ background: "linear-gradient(135deg,#0dab76,#3568d4)" }}
                  >
                    {s.num}
                  </div>
                  <div className="pt-1">
                    <div className="font-bold text-base text-white">{s.title}</div>
                    <div className="text-white/50 text-sm mt-0.5">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* trust strip */}
            <div className="flex flex-wrap gap-3">
              {trust.map((t) => (
                <div
                  key={t.label}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <t.icon className="w-4 h-4 text-[#0dab76] shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white leading-none">{t.label}</div>
                    <div className="text-xs text-white/45 leading-none mt-0.5">{t.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: CTA card */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-10 text-center shadow-2xl">
              <div
                className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg"
                style={{ background: "linear-gradient(135deg,#76186f,#003648)" }}
              >
                <ArrowRight className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-3">
                Ready to get started?
              </h3>
              <p className="text-white/55 text-sm leading-relaxed mb-8">
                It takes under 60 seconds. We'll handle the rest and come back to you with tailored options from the whole market.
              </p>

              <div className="space-y-3">
                <Link
                  href="/get-a-quote"
                  className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl font-bold text-white text-base transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
                  style={{ background: "linear-gradient(135deg,#76186f,#a0279a)" }}
                >
                  Get my free quote <ArrowRight className="w-5 h-5" />
                </Link>

                <a
                  href="tel:01273974419"
                  className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl font-bold text-white text-base border border-white/20 bg-white/5 hover:bg-white/10 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call us: 01273 974419
                </a>
              </div>

              <p className="text-white/35 text-xs mt-6">
                No fees. No commitment. Just expert advice.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
