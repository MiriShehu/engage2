import { useState } from "react";
import { Check, ArrowRight, ArrowLeft, Globe, Building2, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { DialCodePicker } from "@/components/ui/DialCodePicker";

const COVER_OPTIONS = [
  { value: "UK Company", label: "UK Company", icon: Building2, desc: "Based and operating in the UK" },
  { value: "US Company", label: "US Company", icon: Building2, desc: "Based and operating in the US" },
  { value: "International", label: "International", icon: Globe, desc: "Multi-country or global workforce" },
];

const EMPLOYEE_RANGES = ["1-10", "11-50", "51-250", "251-500", "500+"];

interface FormData {
  cover: string;
  company: string;
  employees: string;
  firstName: string;
  lastName: string;
  dialCode: string;
  phone: string;
  email: string;
  comments: string;
  gdpr: boolean;
}

const EMPTY: FormData = {
  cover: "",
  company: "",
  employees: "",
  firstName: "",
  lastName: "",
  dialCode: "🇬🇧+44",
  phone: "",
  email: "",
  comments: "",
  gdpr: false,
};

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>(EMPTY);

  const set = (key: keyof FormData, value: string | boolean) =>
    setFormData((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const step1Valid = !!formData.cover;
  const step2Valid = formData.company.trim().length > 0 && !!formData.employees;
  const step3Valid = formData.firstName.trim().length > 0 && formData.email.trim().length > 0 && formData.gdpr;

  if (isSuccess) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-border text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-secondary mb-2">Request Received!</h3>
        <p className="text-muted-foreground mb-8">
          Thanks {formData.firstName}. One of our experts will be in touch shortly with tailored options for your {formData.cover.toLowerCase()} team.
        </p>
        <button
          onClick={() => { setIsSuccess(false); setStep(1); setFormData(EMPTY); }}
          className="text-primary font-bold hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-border relative overflow-hidden">
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-muted">
        <div
          className="h-full transition-all duration-500 ease-out"
          style={{ width: `${(step / 3) * 100}%`, background: "#76186f" }}
        />
      </div>

      {/* Step indicator */}
      <div className="mb-8 mt-2 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-1.5">
              <div
                className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300",
                  s < step ? "text-white" : s === step ? "text-white" : "bg-muted text-muted-foreground"
                )}
                style={s <= step ? { background: "#76186f" } : {}}
              >
                {s < step ? <Check className="w-3.5 h-3.5" /> : s}
              </div>
              {s < 3 && (
                <div
                  className="w-8 h-0.5 transition-all duration-500"
                  style={{ background: s < step ? "#76186f" : "#e5e7eb" }}
                />
              )}
            </div>
          ))}
        </div>
        <span className="text-sm font-medium text-muted-foreground">Step {step} of 3</span>
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="text-sm font-medium text-muted-foreground flex items-center gap-1 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        )}
      </div>

      {/* STEP 1 — Cover type */}
      {step === 1 && (
        <div>
          <h3 className="text-2xl font-bold text-secondary mb-1">Which cover are you looking for?</h3>
          <p className="text-muted-foreground mb-8">Select the type of business you're enquiring for.</p>

          <div className="grid grid-cols-1 gap-4 mb-8">
            {COVER_OPTIONS.map(({ value, label, icon: Icon, desc }) => (
              <button
                key={value}
                type="button"
                onClick={() => set("cover", value)}
                className={cn(
                  "p-4 rounded-xl border-2 text-left flex items-center gap-4 transition-all",
                  formData.cover === value
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/30"
                )}
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                    formData.cover === value ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                  )}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className={cn("font-bold", formData.cover === value ? "text-primary" : "text-secondary")}>{label}</div>
                  <div className="text-sm text-muted-foreground">{desc}</div>
                </div>
                {formData.cover === value && (
                  <div className="ml-auto w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>

          <button
            type="button"
            disabled={!step1Valid}
            onClick={() => setStep(2)}
            className="btn-cta w-full flex items-center justify-center gap-2 py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* STEP 2 — Business details */}
      {step === 2 && (
        <div>
          <h3 className="text-2xl font-bold text-secondary mb-1">About your business</h3>
          <p className="text-muted-foreground mb-8">Tell us a little about your company.</p>

          <div className="space-y-5 mb-8">
            <div>
              <label className="block text-sm font-semibold text-secondary mb-1.5">Company Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => set("company", e.target.value)}
                className="w-full p-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                placeholder="Acme Ltd"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-secondary mb-3">Number of Employees <span className="text-red-500">*</span></label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {EMPLOYEE_RANGES.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => set("employees", r)}
                    className={cn(
                      "p-3 rounded-xl border-2 font-bold text-sm flex items-center justify-center gap-2 transition-all",
                      formData.employees === r
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border hover:border-primary/30 text-secondary"
                    )}
                  >
                    <Users className="w-4 h-4" />
                    {r}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            disabled={!step2Valid}
            onClick={() => setStep(3)}
            className="btn-cta w-full flex items-center justify-center gap-2 py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* STEP 3 — Contact details */}
      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <h3 className="text-2xl font-bold text-secondary mb-1">Your Details</h3>
          <p className="text-muted-foreground mb-8">Where should we send your comparison quotes?</p>

          <div className="space-y-4 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-secondary mb-1.5">First Name <span className="text-red-500">*</span></label>
                <input
                  required
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => set("firstName", e.target.value)}
                  className="w-full p-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-secondary mb-1.5">Last Name</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => set("lastName", e.target.value)}
                  className="w-full p-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="Smith"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-secondary mb-1.5">Telephone <span className="text-red-500">*</span></label>
              <div className="flex gap-2">
                <DialCodePicker
                  value={formData.dialCode}
                  onChange={(v) => set("dialCode", v)}
                />
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  className="flex-1 p-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="7700 900000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-secondary mb-1.5">Email Address <span className="text-red-500">*</span></label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => set("email", e.target.value)}
                className="w-full p-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                placeholder="jane@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-secondary mb-1.5">Comments <span className="text-muted-foreground font-normal">(optional)</span></label>
              <textarea
                rows={3}
                value={formData.comments}
                onChange={(e) => set("comments", e.target.value)}
                className="w-full p-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                placeholder="Any specific requirements or questions..."
              />
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <div
                onClick={() => set("gdpr", !formData.gdpr)}
                className={cn(
                  "mt-0.5 w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors cursor-pointer",
                  formData.gdpr ? "bg-primary border-primary" : "border-muted-foreground"
                )}
              >
                {formData.gdpr && <Check className="w-3 h-3 text-white" />}
              </div>
              <span className="text-sm text-muted-foreground leading-snug">
                I consent to Engage Health Group collecting this personal information for contact purposes only.{" "}
                <a href="#" className="text-primary underline">Privacy Policy</a>
                {" "}<span className="text-red-500">*</span>
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !step3Valid}
            className="btn-cta w-full flex items-center justify-center gap-2 py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? "Submitting..." : "Get My Free Quote"}
            {!isSubmitting && <ArrowRight className="w-5 h-5" />}
          </button>
        </form>
      )}
    </div>
  );
}
