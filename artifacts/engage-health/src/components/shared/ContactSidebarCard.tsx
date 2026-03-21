import { Link } from "wouter";
import { ArrowRight, Phone, Mail } from "lucide-react";

export function ContactSidebarCard() {
  return (
    <div
      className="rounded-2xl p-6 text-white overflow-hidden relative"
      style={{ background: "linear-gradient(135deg,#003648 0%,#76186f 100%)" }}
    >
      <img
        src="/logomark.png"
        alt=""
        aria-hidden="true"
        className="absolute -bottom-6 -right-6 w-40 h-40 object-contain opacity-[0.08] brightness-0 invert pointer-events-none select-none"
      />
      <div className="relative">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold mb-4">
          FREE consultation
        </div>
        <h3 className="text-xl font-extrabold mb-2 leading-snug text-white">
          Get expert advice today
        </h3>
        <p className="text-white/85 text-sm leading-relaxed mb-5">
          No charge, no obligation — just straightforward advice from our team of international specialists.
        </p>
        <Link
          href="/get-a-quote"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm bg-white text-secondary hover:bg-white/90 transition-colors"
        >
          Get a free quote <ArrowRight className="w-4 h-4" />
        </Link>
        <div className="mt-3 flex flex-col gap-2">
          <a href="tel:01273974419" className="flex items-center gap-2 text-sm text-white/85 hover:text-white transition-colors">
            <Phone className="w-4 h-4" /> +44 (0)1273 974419
          </a>
          <a href="mailto:enquiries@engagehealthgroup.co.uk" className="flex items-center gap-2 text-sm text-white/85 hover:text-white transition-colors">
            <Mail className="w-4 h-4" /> enquiries@engagehealthgroup.co.uk
          </a>
        </div>
      </div>
    </div>
  );
}
