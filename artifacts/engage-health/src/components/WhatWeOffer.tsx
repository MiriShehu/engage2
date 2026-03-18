import { motion } from "framer-motion";
import {
  SearchCheck,
  LayoutPanelTop,
  FileCheck2,
  Users,
  Globe,
} from "lucide-react";
import { Link } from "wouter";

const offerings = [
  {
    icon: SearchCheck,
    title: "Whole-of-market quotations & policy reviews",
    desc: "We compare every leading insurer so you always get the most competitive deal.",
  },
  {
    icon: LayoutPanelTop,
    title: "Benefits design & strategy",
    desc: "Bespoke packages built around your workforce, culture, and budget.",
  },
  {
    icon: FileCheck2,
    title: "Claims assistance & policy admin",
    desc: "Hands-on support when your employees need it most — removing complexity from the claims process.",
  },
  {
    icon: Users,
    title: "Employee onboarding & communications",
    desc: "Clear, branded materials that ensure your team fully understands and values their benefits.",
  },
  {
    icon: Globe,
    title: "UK & international cover options",
    desc: "A single partner for domestic schemes and multi-country global programmes.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export function WhatWeOffer() {
  return (
    <section className="py-24 bg-[#003648] relative overflow-hidden">
      {/* logomark watermark */}
      <div className="absolute inset-0 flex items-center justify-start pl-16 pointer-events-none select-none">
        <img
          src="/logomark.png"
          alt=""
          className="w-[520px] max-w-[55%] object-contain"
          style={{ opacity: 0.07, filter: "brightness(100) saturate(0)" }}
        />
      </div>

      {/* decorative blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.06]"
        style={{ background: "#76186f" }} />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-[0.05]"
        style={{ background: "#76186f" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: headline */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-24"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest mb-6">
              What We Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
              More than just a broker
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-10">
              Engage Health Group provides full consultancy and administrative support services — so you get expert advice and ongoing hands-on help, not just a policy.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-[#003648] bg-white hover:bg-white/90 transition-colors duration-200 shadow-md"
            >
              Speak to a consultant
            </Link>
          </motion.div>

          {/* Right: offerings list */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {offerings.map((o, i) => {
              const Icon = o.icon;
              return (
                <motion.div
                  key={i}
                  variants={item}
                  className="group flex items-start gap-5 p-5 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition-colors duration-200"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(118,24,111,0.35)" }}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm leading-snug mb-1">
                      {o.title}
                    </div>
                    <div className="text-white/55 text-sm leading-relaxed">
                      {o.desc}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
