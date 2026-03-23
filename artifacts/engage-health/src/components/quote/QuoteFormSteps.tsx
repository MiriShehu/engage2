import { AnimatePresence, motion } from "framer-motion";
import Step1CoverType from "./steps/Step1CoverType";
import Step2Business from "./steps/Step2Business";
import Step3Company from "./steps/Step3Company";
import StepInterstitial from "./steps/StepInterstitial";
import Step4Needs from "./steps/Step3Needs";
import Step5Notes from "./steps/Step5Notes";
import Step6Contact from "./steps/Step4Contact";
import StepSuccess from "./steps/StepSuccess";

export interface FormData {
  coverTypes: string[];
  employeeRange: string;
  company: string;
  companyAddress: string;
  companySic: string;
  industry: string;
  country: string;
  budget: string;
  timeline: string;
  notes: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  email: string;
  phone: string;
  dialCode: string;
  gdprConsent: boolean;
}

interface Props {
  step: number;       // 1–6, or 0 for success
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

function isStepValid(step: number, f: FormData): boolean {
  if (step === 1) return f.coverTypes.length > 0;
  if (step === 2) return !!f.employeeRange;
  if (step === 3) return f.company.trim().length > 0;
  if (step === 4) return true; // interstitial
  if (step === 5) return !!f.timeline;
  return true; // step 6 (notes) is optional
}

// Display number shown in progress counter (interstitial step 4 counts as 3)
function displayStep(step: number) {
  return step >= 5 ? step - 1 : step;
}

export default function QuoteFormSteps({ step, direction, formData, submitting, onChange, onNext, onBack, onSubmit }: Props) {
  const valid = isStepValid(step, formData);

  return (
    <div className="w-full md:w-[52%] flex flex-col bg-white overflow-hidden">
      <div className="flex-1 overflow-y-auto overflow-x-hidden relative">
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
                onNext={onNext}
              />
            )}
            {step === 2 && (
              <Step2Business
                employeeRange={formData.employeeRange}
                onChange={(field, value) => onChange(field as keyof FormData, value)}
                onNext={onNext}
              />
            )}
            {step === 3 && (
              <Step3Company
                coverType={formData.coverTypes[0] ?? ""}
                company={formData.company}
                companyAddress={formData.companyAddress}
                companySic={formData.companySic}
                industry={formData.industry}
                country={formData.country}
                onChange={(field, value) => onChange(field as keyof FormData, value)}
              />
            )}
            {step === 4 && (
              <StepInterstitial
                company={formData.company}
                coverTypes={formData.coverTypes}
                employeeRange={formData.employeeRange}
                onNext={onNext}
              />
            )}
            {step === 5 && (
              <Step4Needs
                timeline={formData.timeline}
                onChange={(field, value) => onChange(field as keyof FormData, value)}
              />
            )}
            {step === 6 && (
              <Step5Notes
                notes={formData.notes}
                onChange={(field, value) => onChange(field as keyof FormData, value)}
              />
            )}
            {step === 7 && (
              <Step6Contact
                firstName={formData.firstName}
                lastName={formData.lastName}
                jobTitle={formData.jobTitle}
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

      {/* Footer nav — steps 1–3 and 5–6 show Continue */}
      {step >= 1 && step <= 6 && step !== 4 && (
        <div className="flex items-center justify-between px-8 py-4 border-t border-border flex-shrink-0">
          <div className="w-[92px]">
            {step > 1 ? (
              <button onClick={onBack} className="flex items-center gap-1.5 text-[13px] font-semibold text-muted-foreground hover:text-foreground transition-colors">
                ← Go Back
              </button>
            ) : null}
          </div>
          <span className="text-[13px] text-muted-foreground font-semibold">
            <strong className="text-foreground">{displayStep(step)}</strong>/6
          </span>
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

      {/* Footer nav for step 7: Back + counter only */}
      {step === 7 && (
        <div className="flex items-center justify-between px-8 py-4 border-t border-border flex-shrink-0">
          <button onClick={onBack} className="flex items-center gap-1.5 text-[13px] font-semibold text-muted-foreground hover:text-foreground transition-colors">
            ← Go Back
          </button>
          <span className="text-[13px] text-muted-foreground font-semibold">
            <strong className="text-foreground">6</strong>/6
          </span>
          <div className="w-[92px]" />
        </div>
      )}
    </div>
  );
}
