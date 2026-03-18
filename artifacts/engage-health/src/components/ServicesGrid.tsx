import React from "react";
import { motion } from "framer-motion";
import {
  Heart, Shield, TrendingUp, Smile, Headphones,
  AlertCircle, Globe, Building2, ArrowRight, Crown,
  HeartPulse, Lock,
} from "lucide-react";
import { Link } from "wouter";

const ukPolicies = [
  { icon: HeartPulse,  label: "Group Health Insurance" },
  { icon: Shield,      label: "Group Life Insurance" },
  { icon: TrendingUp,  label: "Group Income Protection" },
  { icon: AlertCircle, label: "Group Critical Illness Cover" },
  { icon: Heart,       label: "Group Health Cash Plan" },
  { icon: Headphones,  label: "Employee Assistance Programmes (EAP)" },
  { icon: Smile,       label: "Group Dental Insurance" },
];

const intlPolicies = [
  { icon: Globe,       label: "International Health Insurance" },
  { icon: Shield,      label: "International Life Insurance" },
  { icon: TrendingUp,  label: "International Income Protection" },
  { icon: AlertCircle, label: "International Critical Illness Cover" },
  { icon: Building2,   label: "US Company Health Insurance" },
  { icon: Headphones,  label: "International EAP" },
  { icon: Lock,        label: "Kidnap and Ransom Insurance" },
];

function PolicyItem({ icon: Icon, label, accent }: { icon: React.ElementType; label: string; accent: string }) {
  return (
    <Link href="/products">
      <motion.div
        className="group flex items-center gap-3 py-3 px-4 rounded-xl cursor-pointer transition-colors duration-200 hover:bg-white/10"
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: `${accent}22` }}
        >
          <Icon className="w-4 h-4" style={{ color: accent }} />
        </div>
        <span className="text-[#1a1a2e] text-sm font-semibold flex-1 leading-snug group-hover:text-[#003648] transition-colors">
          {label}
        </span>
        <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#003648] group-hover:translate-x-0.5 transition-all duration-200" />
      </motion.div>
    </Link>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function ServicesGrid() {
  return (
    <section className="py-24 bg-[#f8f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-5 border border-primary/15">
            UK & Global Coverage
          </div>
          <h2 className="text-3xl md:text-[2.6rem] font-extrabold text-secondary mb-4 leading-tight">
            From the UK to the world —<br className="hidden md:block" /> we've got you covered
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            From Group Life Insurance in the UK to International Health Cover for global businesses, we navigate the complexities so you don't have to.
          </p>
        </motion.div>

        {/* Two-column panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* UK Panel */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100"
          >
            {/* Panel header */}
            <div className="px-8 py-6" style={{ background: "linear-gradient(135deg, #76186f 0%, #9b2594 100%)" }}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">UK Policies</div>
                  <h3 className="text-white text-xl font-extrabold">Employee Benefits</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-white/70 text-sm mt-3 leading-relaxed">
                Comprehensive UK employee benefit schemes sourced from the whole market.
              </p>
            </div>

            {/* Policy list */}
            <div className="p-4">
              {ukPolicies.map((p, i) => (
                <PolicyItem key={i} icon={p.icon} label={p.label} accent="#76186f" />
              ))}

              <div className="mt-4 pt-4 border-t border-gray-100 px-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#76186f] hover:gap-3 transition-all duration-200"
                >
                  View all UK products
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* International Panel */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100"
          >
            {/* Panel header */}
            <div className="px-8 py-6" style={{ background: "linear-gradient(135deg, #003648 0%, #005a78 100%)" }}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">International Policies</div>
                  <h3 className="text-white text-xl font-extrabold">Global Coverage</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-white/70 text-sm mt-3 leading-relaxed">
                Multi-country health and protection solutions for businesses operating globally.
              </p>
            </div>

            {/* Policy list */}
            <div className="p-4">
              {intlPolicies.map((p, i) => (
                <PolicyItem key={i} icon={p.icon} label={p.label} accent="#003648" />
              ))}

              <div className="mt-4 pt-4 border-t border-gray-100 px-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#003648] hover:gap-3 transition-all duration-200"
                >
                  View all international products
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
