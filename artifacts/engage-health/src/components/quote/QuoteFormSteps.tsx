import { AnimatePresence, motion } from "framer-motion";
import Step1CoverType from "./steps/Step1CoverType";
import Step2Business from "./steps/Step2Business";
import Step3Needs from "./steps/Step3Needs";
import Step4Contact from "./steps/Step4Contact";
import StepSuccess from "./steps/StepSuccess";

export interface FormData {
  coverTypes: string[];
  employeeRange: string;
  company: string;
  industry: string;
  country: string;
  budget: string;
  timeline: string;
  notes: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dialCode: string;
  gdprConsent: boolean;
}

interface Props {
  step: number;       // 1–4, or 0 for success
  direction: number;  // 1 = forward, -1 = back
  formData: FormData;
  submitting: boolean;
  onChange: (field: keyof FormData, value: string | string[] | boolean) => void;
  onNext: () => void;
  onBack: () => void;
  onSubmit: () => void;
}

const variants = {
  enter: (d: number) => ({ x: d * 24, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d * -24, opacity: 0 }),
};

// Per-step validation
function isStepValid(step: number, f: FormData): boolean {
  if (step === 1) return f.coverTypes.length > 0;
  if (step === 2) return !!f.employeeRange && f.company.trim().length > 0;
  if (step === 3) return !!f.budget && !!f.timeline;
  return true;
}

export default function QuoteFormSteps({ step, direction, formData, submitting, onChange, onNext, onBack, onSubmit }: Props) {
  const valid = isStepValid(step, formData);

  return (
    <div className="w-[52%] flex flex-col bg-white overflow-hidden">
      <div className="flex-1 overflow-y-auto relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col"
          >
            {step === 0 && (
              <StepSuccess
                firstName={formData.firstName}
                coverTypes={formData.coverTypes}
                employeeRange={formData.employeeRange}
              />
            )}
            {step === 1 && (
              <Step1CoverType
                selected={formData.coverTypes}
                onChange={(v) => onChange("coverTypes", v)}
              />
            )}
            {step === 2 && (
              <Step2Business
                employeeRange={formData.employeeRange}
                company={formData.company}
                industry={formData.industry}
                country={formData.country}
                onChange={(field, value) => onChange(field as keyof FormData, value)}
              />
            )}
            {step === 3 && (
              <Step3Needs
                budget={formData.budget}
                timeline={formData.timeline}
                notes={formData.notes}
                onChange={(field, value) => onChange(field as keyof FormData, value)}
              />
            )}
            {step === 4 && (
              <Step4Contact
                firstName={formData.firstName}
                lastName={formData.lastName}
                email={formData.email}
                phone={formData.phone}
                dialCode={formData.dialCode}
                gdprConsent={formData.gdprConsent}
                submitting={submitting}
                onChange={(field, value) => onChange(field as keyof FormData, value)}
                onSubmit={onSubmit}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer nav — hidden on success and step 4 (has its own submit) */}
      {step >= 1 && step <= 3 && (
        <div className="flex items-center justify-between px-8 py-4 border-t border-border flex-shrink-0"
             style={{ maxWidth: "unset" }}>
          {/* Left: Back or spacer */}
          <div className="w-[92px]">
            {step > 1 ? (
              <button onClick={onBack} className="flex items-center gap-1.5 text-[13px] font-semibold text-muted-foreground hover:text-foreground transition-colors">
                ← Go Back
              </button>
            ) : null}
          </div>

          {/* Center: step counter */}
          <span className="text-[13px] text-muted-foreground font-semibold">
            <strong className="text-foreground">{step}</strong>/4
          </span>

          {/* Right: Continue */}
          <button
            onClick={onNext}
            disabled={!valid}
            className="flex items-center gap-2 px-5 py-2.5 rounded-[10px] text-[13px] font-bold text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 hover:-translate-y-px"
            style={{ background: "linear-gradient(135deg,#76186f,#5a1254)", boxShadow: valid ? "0 4px 12px rgba(118,24,111,0.25)" : "none" }}
          >
            Continue →
          </button>
        </div>
      )}

      {/* Footer nav for step 4: only Back + counter */}
      {step === 4 && (
        <div className="flex items-center justify-between px-8 py-4 border-t border-border flex-shrink-0">
          <button onClick={onBack} className="flex items-center gap-1.5 text-[13px] font-semibold text-muted-foreground hover:text-foreground transition-colors">
            ← Go Back
          </button>
          <span className="text-[13px] text-muted-foreground font-semibold">
            <strong className="text-foreground">4</strong>/4
          </span>
          <div className="w-[92px]" />
        </div>
      )}
    </div>
  );
}
