import { motion } from "framer-motion";
import { Zap, ShieldCheck, UserCircle2, Trophy, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import award2024 from "@assets/HPA24-Best-Group-International-Advice-Firm-yellow_1773869302815.jpg";
import award2023 from "@assets/HPA_Winner-Badges_0219_1773869302816.jpg";
import award2022 from "@assets/HPA10_WIN_YELLOW_1773869302815.jpg";

const reasons = [
  { icon: Zap,          text: "Fast, expert problem-solving" },
  { icon: ShieldCheck,  text: "Independent, impartial advice" },
  { icon: UserCircle2,  text: "Dedicated account management" },
  { icon: Trophy,       text: "Award-winning UK and international expertise" },
];

const awardTop = { src: award2023, label: "Best International Group Advice Firm 2023" };
const awardsBottom = [
  { src: award2024, label: "Best Group International Advice Firm 2024" },
  { src: award2022, label: "Best Group Healthcare Adviser 2022" },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const badgeVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const badge = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export function WhyEngageSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* subtle purple wash top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(118,24,111,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Why Choose Us */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-5 border border-primary/15">
                Why Choose Us?
              </div>
              <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-secondary leading-tight mb-4">
                The partner your team<br className="hidden md:block" /> deserves
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                We go beyond placing policies. From first quote to ongoing support, we're with you every step of the way.
              </p>
            </motion.div>

            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 mb-10"
            >
              {reasons.map((r, i) => {
                const Icon = r.icon;
                return (
                  <motion.li key={i} variants={listItem} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "linear-gradient(135deg, #76186f 0%, #9b2594 100%)" }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[#1a1a2e] font-semibold text-base">{r.text}</span>
                  </motion.li>
                );
              })}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <Link
                href="/employee-benefits"
                className="group inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all duration-200 text-base"
              >
                Why Engage?
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Awards */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/8 text-secondary text-xs font-bold uppercase tracking-widest mb-3 border border-secondary/15">
                Recognised Industry Leaders
              </div>
              <p className="text-gray-500 text-base leading-relaxed">
                Proud winner of <span className="font-semibold text-secondary">Best International Group Advice Firm</span> 2023 and 2024 from Health&nbsp;&amp;&nbsp;Protection.
              </p>
            </motion.div>

            <motion.div
              variants={badgeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <motion.div variants={badge}>
                <img
                  src={awardTop.src}
                  alt={awardTop.label}
                  className="w-full rounded-2xl shadow-md object-contain"
                />
              </motion.div>
              <div className="grid grid-cols-2 gap-4">
                {awardsBottom.map((a, i) => (
                  <motion.div key={i} variants={badge}>
                    <img
                      src={a.src}
                      alt={a.label}
                      className="w-full rounded-2xl shadow-md object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
