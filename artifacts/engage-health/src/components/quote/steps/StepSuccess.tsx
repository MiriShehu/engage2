import { motion } from "framer-motion";
import { Link } from "wouter";

interface Props {
  firstName: string;
  coverTypes: string[];
  employeeRange: string;
}

export default function StepSuccess({ firstName, coverTypes, employeeRange }: Props) {
  const coverLabel = coverTypes.includes("Both")
    ? "Employee Benefits & International Benefits"
    : coverTypes.join(" & ");

  return (
    <div className="flex flex-col flex-1 items-center justify-center px-8 text-center">
      <div className="w-full max-w-[400px] flex flex-col items-center gap-6">

        {/* Animated checkmark */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.15, 1], opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg,#0dab76,#16a34a)" }}
        >
          <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <motion.polyline
              points="20 6 9 17 4 12"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-3"
        >
          <h1 className="text-[28px] font-extrabold text-foreground tracking-tight">
            We've received your request!
          </h1>
          <p className="text-[14px] text-muted-foreground leading-relaxed">
            Thanks, <strong className="text-foreground">{firstName}</strong>. We'll be in touch about{" "}
            <strong className="text-foreground">{coverLabel}</strong> cover for your team of{" "}
            <strong className="text-foreground">{employeeRange}</strong> employees.
            <br /><br />
            A specialist will contact you within <strong className="text-foreground">2 working hours</strong>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-primary hover:underline underline-offset-4 transition-all"
          >
            ← Back to site
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
