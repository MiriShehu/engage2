import { motion } from "framer-motion";
import { CheckCircle2, Shield, Award, Users } from "lucide-react";

interface Props {
  company: string;
  coverTypes: string[];
  employeeRange: string;
  onNext: () => void;
}

const trustPoints = [
  { icon: Shield,       text: "FCA regulated, whole-of-market advice" },
  { icon: Award,        text: "3x UK award-winning brokerage" },
  { icon: Users,        text: "500+ businesses supported across the UK" },
];

export default function StepInterstitial({ company, coverTypes, employeeRange, onNext }: Props) {
  const name = company.trim() || "your business";
  const cover = coverTypes.length > 0 ? coverTypes.join(" and ") : "employee benefits";

  return (
    <div className="flex flex-col flex-1 items-center justify-center px-6 py-10 text-center relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-secondary/8 blur-3xl" />
      </div>

      <div className="relative w-full max-w-[460px] flex flex-col items-center">

        {/* Animated check */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.1 }}
          className="w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-lg"
          style={{ background: "linear-gradient(135deg,#003648,#76186f)" }}
        >
          <CheckCircle2 className="w-10 h-10 text-white" strokeWidth={2.5} />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-[28px] sm:text-[32px] font-extrabold text-foreground tracking-tight leading-tight mb-4"
        >
          Great news{company.trim() ? `, ${company.trim().split(" ")[0]}` : ""}!
        </motion.h2>

        {/* Body copy */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-[15px] text-muted-foreground leading-relaxed mb-3"
        >
          Based on what you've shared, Engage Health Group can absolutely support <strong className="text-foreground">{name}</strong> with {cover} cover
          {employeeRange ? ` for a team of ${employeeRange.toLowerCase()}` : ""}.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-[14px] text-muted-foreground leading-relaxed mb-8"
        >
          We just need a few more details and one of our advisers will put together a tailored market review for you, completely free of charge.
        </motion.p>

        {/* Trust points */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col gap-2.5 mb-10"
        >
          {trustPoints.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#f8f7fb] border border-border">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                   style={{ background: "linear-gradient(135deg,#003648,#76186f)" }}>
                <Icon className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-sm text-secondary font-medium leading-snug">{text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          onClick={onNext}
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-[14px] text-[15px] font-bold text-white shadow-lg transition-shadow hover:shadow-xl"
          style={{ background: "linear-gradient(135deg,#76186f,#5a1254)" }}
        >
          Let's get your quote
          <span className="text-lg leading-none">→</span>
        </motion.button>

      </div>
    </div>
  );
}
