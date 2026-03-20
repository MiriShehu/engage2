import { useState } from "react";
import QuoteLayout from "@/components/quote/QuoteLayout";
import QuoteFormSteps, { type FormData } from "@/components/quote/QuoteFormSteps";
import TestimonialCarousel from "@/components/quote/TestimonialCarousel";

const DEFAULT_FORM: FormData = {
  coverTypes: [],
  employeeRange: "",
  company: "",
  industry: "",
  country: "United Kingdom",
  budget: "",
  timeline: "",
  notes: "",
  firstName: "",
  lastName: "",
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

  const handleSubmit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDirection(1);
      setStep(0); // success
    }, 500);
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
