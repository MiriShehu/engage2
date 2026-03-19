import { cn } from "@/lib/utils";
import { DialCodePicker } from "@/components/ui/DialCodePicker";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dialCode: string;
  gdprConsent: boolean;
  submitting: boolean;
  onChange: (field: string, value: string | boolean) => void;
  onSubmit: () => void;
}

export default function Step4Contact({
  firstName, lastName, email, phone, dialCode, gdprConsent,
  submitting, onChange, onSubmit,
}: Props) {
  const valid = firstName.trim() && lastName.trim() && email.trim() && phone.trim() && gdprConsent;

  const inputClass = "w-full px-3.5 py-2.5 rounded-[10px] border-[1.5px] border-border bg-muted/30 text-[13px] text-foreground outline-none transition-all focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(118,24,111,0.08)]";

  return (
    <div className="flex flex-col flex-1 items-center px-8">
      <div className="w-full max-w-[460px] flex flex-col flex-1 justify-center py-7">

        {/* Brand icon */}
        <div className="w-12 h-12 rounded-[13px] flex items-center justify-center mb-7 flex-shrink-0"
             style={{ background: "linear-gradient(135deg,#003648,#76186f)" }}>
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>

        <h1 className="text-[32px] font-extrabold text-foreground tracking-tight leading-[1.15] mb-2">
          Almost there — how do<br />we <span className="text-primary">reach you?</span>
        </h1>
        <p className="text-[13px] text-muted-foreground mb-7 leading-relaxed">
          A specialist will be in touch within 2 working hours.
        </p>

        {/* Name row */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.07em] text-muted-foreground mb-1.5">First name</div>
            <input value={firstName} onChange={(e) => onChange("firstName", e.target.value)}
              placeholder="Jane" className={inputClass} />
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.07em] text-muted-foreground mb-1.5">Last name</div>
            <input value={lastName} onChange={(e) => onChange("lastName", e.target.value)}
              placeholder="Smith" className={inputClass} />
          </div>
        </div>

        {/* Email */}
        <div className="mb-3">
          <div className="text-[10px] font-bold uppercase tracking-[0.07em] text-muted-foreground mb-1.5">Email address</div>
          <input type="email" value={email} onChange={(e) => onChange("email", e.target.value)}
            placeholder="jane@company.com" className={inputClass} />
        </div>

        {/* Phone */}
        <div className="mb-5">
          <div className="text-[10px] font-bold uppercase tracking-[0.07em] text-muted-foreground mb-1.5">Phone number</div>
          <div className="flex rounded-[10px] border-[1.5px] border-border bg-muted/30 overflow-hidden focus-within:border-primary focus-within:bg-white focus-within:shadow-[0_0_0_3px_rgba(118,24,111,0.08)] transition-all">
            <DialCodePicker value={dialCode} onChange={(v) => onChange("dialCode", v)} className="border-r border-border" />
            <input type="tel" value={phone} onChange={(e) => onChange("phone", e.target.value)}
              placeholder="07700 900000"
              className="flex-1 px-3.5 py-2.5 text-[13px] text-foreground bg-transparent outline-none" />
          </div>
        </div>

        {/* GDPR */}
        <label className="flex items-start gap-3 cursor-pointer group mb-6">
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
          <span className="text-[12px] text-muted-foreground leading-relaxed">
            I agree to be contacted by Engage Health Group regarding my quote request. We'll never share your data with third parties. View our{" "}
            <a href="/privacy" className="text-primary underline-offset-2 hover:underline">Privacy Policy</a>.
          </span>
        </label>

        {/* Submit CTA */}
        <button
          type="button"
          onClick={onSubmit}
          disabled={!valid || submitting}
          className={cn(
            "w-full py-3.5 rounded-[12px] text-[14px] font-bold text-white flex items-center justify-center gap-2 transition-all",
            valid && !submitting
              ? "opacity-100 hover:opacity-90 hover:-translate-y-px"
              : "opacity-50 cursor-not-allowed"
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
