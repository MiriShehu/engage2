import { useState } from "react";
import { cn } from "@/lib/utils";
import { DialCodePicker } from "@/components/ui/DialCodePicker";

// Phone metadata keyed by dial code: [placeholder, minDigits, maxDigits]
const PHONE_META: Record<string, [string, number, number]> = {
  "+44":  ["7700 900000",     10, 11],
  "+1":   ["(555) 123-4567", 10, 10],
  "+61":  ["412 345 678",     9,  9],
  "+64":  ["21 123 4567",     8,  10],
  "+353": ["87 123 4567",     9,  9],
  "+49":  ["151 23456789",    10, 12],
  "+33":  ["6 12 34 56 78",  10, 10],
  "+34":  ["612 345 678",     9,  9],
  "+39":  ["312 345 6789",   10, 11],
  "+31":  ["6 12345678",      9,  9],
  "+32":  ["470 12 34 56",    9,  9],
  "+41":  ["78 123 45 67",    9,  9],
  "+46":  ["70 123 45 67",    9,  9],
  "+47":  ["987 65 432",      8,  8],
  "+45":  ["20 12 34 56",     8,  8],
  "+358": ["41 2345678",      9,  9],
  "+43":  ["664 123456",      9, 10],
  "+351": ["912 345 678",     9,  9],
  "+48":  ["512 345 678",     9,  9],
  "+420": ["601 234 567",     9,  9],
  "+40":  ["712 345 678",     9,  9],
  "+7":   ["912 345-67-89",  10, 10],
  "+91":  ["98765 43210",    10, 10],
  "+86":  ["131 2345 6789",  11, 11],
  "+81":  ["90-1234-5678",   10, 10],
  "+82":  ["10-1234-5678",   10, 11],
  "+65":  ["8123 4567",       8,  8],
  "+60":  ["12-345 6789",     9, 10],
  "+852": ["5123 4567",       8,  8],
  "+63":  ["917 123 4567",   10, 10],
  "+66":  ["81 234 5678",     9,  9],
  "+62":  ["812-3456-7890",  10, 12],
  "+971": ["50 123 4567",     9,  9],
  "+966": ["51 234 5678",     9,  9],
  "+974": ["5512 3456",       8,  8],
  "+965": ["5012 3456",       8,  8],
  "+973": ["3600 1234",       8,  8],
  "+968": ["9212 3456",       8,  8],
  "+972": ["52-234-5678",     9,  9],
  "+27":  ["71 123 4567",     9,  9],
  "+234": ["802 123 4567",   10, 11],
  "+254": ["712 345 678",     9,  9],
  "+233": ["24 123 4567",     9,  9],
  "+55":  ["11 91234-5678",  11, 11],
  "+52":  ["55 1234 5678",   10, 10],
  "+54":  ["11 1234-5678",   10, 10],
  "+56":  ["9 1234 5678",     9,  9],
  "+57":  ["310 123 4567",   10, 10],
  "+92":  ["301 234 5678",   10, 10],
  "+880": ["1712-345678",    10, 10],
  "+94":  ["71 234 5678",     9,  9],
};

function getPhoneMeta(dialCode: string): [string, number, number] {
  // Strip flag characters — dialCode is like "🇬🇧+44"
  const code = dialCode.replace(/[^\d+]/g, "").replace(/^\d/, "+$&").replace(/^([^+])/, "+$1");
  const stripped = "+" + dialCode.replace(/[^0-9]/g, "");
  return PHONE_META[stripped] ?? ["Phone number", 6, 15];
}

function validateName(value: string): string | null {
  if (!value.trim()) return "Required";
  if (value.trim().length < 3) return "Must be at least 3 characters";
  if (!/^[a-zA-Z\s'\-]+$/.test(value.trim())) return "Only letters, spaces, hyphens and apostrophes allowed";
  return null;
}

function validateEmail(value: string): string | null {
  if (!value.trim()) return "Required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return "Please enter a valid email address";
  return null;
}

function validatePhone(phone: string, dialCode: string): string | null {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return "Required";
  const stripped = "+" + dialCode.replace(/[^0-9]/g, "");
  // UK-specific format validation
  if (stripped === "+44") {
    if (digits.length !== 10 && digits.length !== 11) return "Please enter a valid phone number";
    const normalized = digits.length === 11 ? digits : "0" + digits;
    if (!/^0(1|2|3|7|8)/.test(normalized)) return "Enter a valid UK phone number";
  } else {
    const [, min, max] = getPhoneMeta(dialCode);
    if (digits.length < min) return `Too short — expected at least ${min} digits`;
    if (digits.length > max) return `Too long — expected at most ${max} digits`;
  }
  return null;
}

interface Props {
  firstName: string;
  lastName: string;
  jobTitle: string;
  email: string;
  phone: string;
  dialCode: string;
  gdprConsent: boolean;
  submitting: boolean;
  onChange: (field: string, value: string | boolean) => void;
  onSubmit: () => void;
}

export default function Step4Contact({
  firstName, lastName, jobTitle, email, phone, dialCode, gdprConsent,
  submitting, onChange, onSubmit,
}: Props) {
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const touch = (field: string) => setTouched((t) => ({ ...t, [field]: true }));

  const firstNameError = validateName(firstName);
  const lastNameError = validateName(lastName);
  const emailError = validateEmail(email);
  const phoneError = validatePhone(phone, dialCode);

  const jobTitleError = jobTitle.trim().length < 2 ? "Required" : null;
  const valid = !firstNameError && !lastNameError && !jobTitleError && !emailError && !phoneError && gdprConsent;

  const inputClass = "w-full px-5 py-3.5 rounded-[12px] border-[1.5px] border-border bg-muted/30 text-[15px] font-medium text-foreground outline-none transition-all focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(118,24,111,0.08)] placeholder:text-muted-foreground/60";
  const inputErrorClass = "w-full px-5 py-3.5 rounded-[12px] border-[1.5px] border-red-400 bg-muted/30 text-[15px] font-medium text-foreground outline-none transition-all focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)] placeholder:text-muted-foreground/60";
  const labelClass = "text-[11px] font-extrabold uppercase tracking-[0.09em] text-muted-foreground mb-2 block";

  const fieldClass = (error: string | null, field: string) =>
    touched[field] && error ? inputErrorClass : inputClass;

  const [placeholder] = getPhoneMeta(dialCode);

  return (
    <div className="flex flex-col flex-1 items-center px-6">
      <div className="w-full max-w-[520px] flex flex-col flex-1 justify-center py-8">

        {/* Brand icon */}
        <div className="w-12 h-12 rounded-[13px] flex items-center justify-center mb-7 flex-shrink-0"
             style={{ background: "linear-gradient(135deg,#003648,#76186f)" }}>
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>

        <h1 className="text-[34px] font-extrabold text-foreground tracking-tight leading-[1.15] mb-2">
          Almost there — how do<br />we <span className="text-primary">reach you?</span>
        </h1>
        <p className="text-[15px] text-muted-foreground mb-7 leading-relaxed">
          A specialist will be in touch within 2 working hours.
        </p>

        {/* Name row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className={labelClass}>First name</label>
            <input value={firstName} onChange={(e) => onChange("firstName", e.target.value)}
              onBlur={() => touch("firstName")}
              placeholder="Jane" className={fieldClass(firstNameError, "firstName")} />
            {touched.firstName && firstNameError && (
              <p className="text-[12px] text-red-500 font-medium mt-1.5">{firstNameError}</p>
            )}
          </div>
          <div>
            <label className={labelClass}>Last name</label>
            <input value={lastName} onChange={(e) => onChange("lastName", e.target.value)}
              onBlur={() => touch("lastName")}
              placeholder="Smith" className={fieldClass(lastNameError, "lastName")} />
            {touched.lastName && lastNameError && (
              <p className="text-[12px] text-red-500 font-medium mt-1.5">{lastNameError}</p>
            )}
          </div>
        </div>

        {/* Job title */}
        <div className="mb-4">
          <label className={labelClass}>Job title / Role</label>
          <input value={jobTitle} onChange={(e) => onChange("jobTitle", e.target.value)}
            onBlur={() => touch("jobTitle")}
            placeholder="e.g. HR Manager" className={fieldClass(jobTitleError, "jobTitle")} />
          {touched.jobTitle && jobTitleError && (
            <p className="text-[12px] text-red-500 font-medium mt-1.5">{jobTitleError}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className={labelClass}>Email address</label>
          <input type="email" value={email} onChange={(e) => onChange("email", e.target.value)}
            onBlur={() => touch("email")}
            placeholder="jane@company.com" className={fieldClass(emailError, "email")} />
          {touched.email && emailError && (
            <p className="text-[12px] text-red-500 font-medium mt-1.5">{emailError}</p>
          )}
        </div>

        {/* Phone — no overflow-hidden so dropdown isn't clipped */}
        <div className="mb-6">
          <label className={labelClass}>Phone number</label>
          <div className={cn(
            "flex rounded-[12px] border-[1.5px] bg-muted/30 transition-all",
            touched.phone && phoneError ? "border-red-400 focus-within:border-red-400 focus-within:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]" : "border-border focus-within:border-primary focus-within:bg-white focus-within:shadow-[0_0_0_3px_rgba(118,24,111,0.08)]"
          )}>
            <DialCodePicker value={dialCode} onChange={(v) => { onChange("dialCode", v); onChange("phone", ""); }} className="border-r border-border" />
            <input
              type="tel"
              value={phone}
              onChange={(e) => onChange("phone", e.target.value.replace(/[^\d\s\-().+]/g, ""))}
              onKeyDown={(e) => { if (!/[\d\s\-().+Backspace\t]/.test(e.key) && !e.ctrlKey && !e.metaKey) e.preventDefault(); }}
              onBlur={() => touch("phone")}
              placeholder={placeholder}
              className="flex-1 px-5 py-3.5 text-[15px] font-medium text-foreground bg-transparent outline-none placeholder:text-muted-foreground/60 min-w-0"
            />
          </div>
          {touched.phone && phoneError && (
            <p className="text-[12px] text-red-500 font-medium mt-1.5">{phoneError}</p>
          )}
        </div>

        {/* GDPR */}
        <label className="flex items-start gap-3.5 cursor-pointer group mb-7">
          <div className="mt-0.5 flex-shrink-0">
            <input
              type="checkbox"
              checked={gdprConsent}
              onChange={(e) => onChange("gdprConsent", e.target.checked)}
              className="sr-only"
            />
            <div className={cn(
              "w-5 h-5 rounded-[5px] border-2 flex items-center justify-center transition-all",
              gdprConsent ? "bg-primary border-primary" : "border-border group-hover:border-primary/50"
            )}>
              {gdprConsent && (
                <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
          </div>
          <span className="text-[13px] text-muted-foreground leading-relaxed">
            I agree to be contacted by Engage Health Group regarding my quote request. We'll never share your data with third parties. View our{" "}
            <a href="/privacy" className="text-primary underline-offset-2 hover:underline">Privacy Policy</a>.
          </span>
        </label>

        {/* Submit CTA */}
        <button
          type="button"
          onClick={() => {
            touch("firstName"); touch("lastName"); touch("jobTitle"); touch("email"); touch("phone");
            if (valid) onSubmit();
          }}
          disabled={submitting}
          className={cn(
            "w-full py-4 rounded-[12px] text-[16px] font-extrabold text-white flex items-center justify-center gap-2 transition-all",
            valid && !submitting
              ? "opacity-100 hover:opacity-90 hover:-translate-y-px"
              : "opacity-60 cursor-not-allowed"
          )}
          style={{ background: "linear-gradient(135deg,#76186f,#5a1254)", boxShadow: "0 4px 16px rgba(118,24,111,0.28)" }}
        >
          {submitting ? (
            <>
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"/>
                <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              Sending…
            </>
          ) : (
            <>Get my free quotes →</>
          )}
        </button>

      </div>
    </div>
  );
}
