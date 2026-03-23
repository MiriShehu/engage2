import { useState } from "react";
import QuoteLayout from "@/components/quote/QuoteLayout";
import QuoteFormSteps, { type FormData } from "@/components/quote/QuoteFormSteps";
import TestimonialCarousel from "@/components/quote/TestimonialCarousel";

const DEFAULT_FORM: FormData = {
  coverTypes: [],
  employeeRange: "",
  company: "",
  companyAddress: "",
  companySic: "",
  industry: "",
  country: "United Kingdom",
  budget: "",
  timeline: "",
  notes: "",
  firstName: "",
  lastName: "",
  jobTitle: "",
  email: "",
  phone: "",
  dialCode: "🇬🇧+44",
  gdprConsent: false,
};

export default function GetAQuote() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState<FormData>(DEFAULT_FORM);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof FormData, value: string | string[] | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, 6));
  };

  const handleBack = () => {
    if (step === 1) {
      window.location.href = "/";
      return;
    }
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const webhookUrl = import.meta.env.VITE_SHEETS_WEBHOOK_URL;
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            coverTypes: formData.coverTypes.join(", "),
            submittedAt: new Date().toISOString(),
          }),
        });
      }
    } catch (_) {
      // silently continue — don't block success screen on network error
    } finally {
      setSubmitting(false);
      setDirection(1);
      setStep(0); // success
    }
  };

  return (
    <QuoteLayout step={step}>
      <QuoteFormSteps
        step={step}
        direction={direction}
        formData={formData}
        submitting={submitting}
        onChange={handleChange}
        onNext={handleNext}
        onBack={handleBack}
        onSubmit={handleSubmit}
      />
      <TestimonialCarousel />
    </QuoteLayout>
  );
}
