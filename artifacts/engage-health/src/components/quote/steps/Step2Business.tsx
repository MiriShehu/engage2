import { cn } from "@/lib/utils";
import { Users, UserPlus, Building2, Landmark } from "lucide-react";

const RANGES = [
  { value: "1-10",     label: "1–10",     sub: "employees", icon: Users },
  { value: "11-50",    label: "11–50",    sub: "employees", icon: UserPlus },
  { value: "51-250",   label: "51–250",   sub: "employees", icon: Users },
  { value: "251-500",  label: "251–500",  sub: "employees", icon: Building2 },
  { value: "500+",     label: "500+",     sub: "employees", icon: Landmark },
] as const;

interface Props {
  employeeRange: string;
  company: string;
  industry: string;
  country: string;
  onChange: (field: string, value: string) => void;
}

export default function Step2Business({ employeeRange, company, industry, country, onChange }: Props) {
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
          Tell us about<br />your <span className="text-primary">business</span>
        </h1>
        <p className="text-[13px] text-muted-foreground mb-7 leading-relaxed">
          This helps us find the most relevant quotes for your situation.
        </p>

        {/* Size cards */}
        <div className="text-[13px] font-semibold text-foreground mb-3">
          What size is your organisation?
        </div>
        <div className="grid grid-cols-5 gap-2.5 mb-6">
          {RANGES.map(({ value, label, sub, icon: Icon }) => {
            const sel = employeeRange === value;
            return (
              <button
                key={value}
                type="button"
                onClick={() => onChange("employeeRange", value)}
                className={cn(
                  "flex flex-col items-center justify-center gap-2 py-3.5 px-2 rounded-[14px] border-2 transition-all duration-150",
                  sel
                    ? "border-primary bg-primary/6"
                    : "border-border bg-white hover:border-primary/40 hover:bg-primary/[0.02]"
                )}
              >
                <div className={cn(
                  "w-9 h-9 rounded-[10px] flex items-center justify-center transition-colors",
                  sel ? "bg-primary/12" : "bg-muted"
                )}>
                  <Icon className={cn("w-[18px] h-[18px] transition-colors", sel ? "text-primary" : "text-muted-foreground")} />
                </div>
                <div className={cn("text-[12px] font-bold leading-tight transition-colors", sel ? "text-primary" : "text-foreground")}>
                  {label}
                </div>
                <div className="text-[10px] text-muted-foreground font-medium">{sub}</div>
              </button>
            );
          })}
        </div>

        {/* Fields */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.07em] text-muted-foreground mb-1.5">Company name</div>
            <input
              value={company}
              onChange={(e) => onChange("company", e.target.value)}
              placeholder="Acme Ltd"
              className="w-full px-3.5 py-2.5 rounded-[10px] border-[1.5px] border-border bg-muted/30 text-[13px] text-foreground outline-none transition-all focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(118,24,111,0.08)]"
            />
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.07em] text-muted-foreground mb-1.5">Industry</div>
            <input
              value={industry}
              onChange={(e) => onChange("industry", e.target.value)}
              placeholder="e.g. Technology"
              className="w-full px-3.5 py-2.5 rounded-[10px] border-[1.5px] border-border bg-muted/30 text-[13px] text-foreground outline-none transition-all focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(118,24,111,0.08)]"
            />
          </div>
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.07em] text-muted-foreground mb-1.5">Headquarters country</div>
          <input
            value={country}
            onChange={(e) => onChange("country", e.target.value)}
            placeholder="United Kingdom"
            className="w-full px-3.5 py-2.5 rounded-[10px] border-[1.5px] border-border bg-muted/30 text-[13px] text-foreground outline-none transition-all focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(118,24,111,0.08)]"
          />
        </div>
      </div>
    </div>
  );
}
