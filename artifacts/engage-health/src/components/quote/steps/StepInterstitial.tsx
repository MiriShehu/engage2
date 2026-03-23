import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Props {
  employeeRange: string;
  onNext: () => void;
}

const loadingPhrases = [
  "Checking available schemes...",
  "Matching to your team size...",
  "Finding the best options...",
];

export default function StepInterstitial({ employeeRange, onNext }: Props) {
  const [phase, setPhase] = useState<"loading" | "ready">("loading");
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setPhraseIndex((i) => {
        if (i < loadingPhrases.length - 1) return i + 1;
        clearInterval(phraseInterval);
        return i;
      });
    }, 700);

    const readyTimeout = setTimeout(() => {
      setPhase("ready");
    }, 2400);

    return () => {
      clearInterval(phraseInterval);
      clearTimeout(readyTimeout);
    };
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center px-8 text-center">
      <AnimatePresence mode="wait">

        {/* Loading phase */}
        {phase === "loading" && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Spinner */}
            <div className="relative w-16 h-16">
              <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="28" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                <motion.circle
                  cx="32" cy="32" r="28"
                  fill="none"
                  stroke="url(#grad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="175"
                  initial={{ strokeDashoffset: 175 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#76186f" />
                    <stop offset="100%" stopColor="#003648" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Cycling phrases */}
            <AnimatePresence mode="wait">
              <motion.p
                key={phraseIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="text-[15px] font-semibold text-muted-foreground"
              >
                {loadingPhrases[phraseIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        )}

        {/* Ready phase */}
        {phase === "ready" && (
          <motion.div
            key="ready"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-5 max-w-[380px]"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="w-16 h-16 rounded-full flex items-center justify-center bg-primary"
            >
              <CheckCircle2 className="w-8 h-8 text-white" strokeWidth={2.5} />
            </motion.div>

            <div>
              <h2 className="text-[28px] font-extrabold text-foreground tracking-tight leading-tight mb-3">
                Great news!
              </h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                We work with many companies
                {employeeRange ? <> your size — <strong className="text-foreground">{employeeRange} employees</strong></> : " like yours"}.
                {" "}We're confident we can find the right cover for your team.
              </p>
            </div>

            <motion.button
              onClick={onNext}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="mt-2 w-full flex items-center justify-center gap-2 px-8 py-4 rounded-[14px] text-[15px] font-bold text-white shadow-lg"
              style={{ background: "linear-gradient(135deg,#76186f,#5a1254)" }}
            >
              Continue →
            </motion.button>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
