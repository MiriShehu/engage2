import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-secondary px-8 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <div className="relative text-center md:text-left">
            <div className="text-white text-xl md:text-2xl font-extrabold mb-1">Start with a free, no-obligation market review</div>
            <div className="text-white/55 text-sm">We'll assess your current setup and show you what's possible, at zero cost.</div>
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
