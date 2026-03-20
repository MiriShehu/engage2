import { cn } from "@/lib/utils";
import { Users, UserPlus, Building2, Landmark } from "lucide-react";
import { motion } from "framer-motion";

const RANGES = [
  { value: "1-10",   label: "1–10",   sub: "employees", icon: Users },
  { value: "11-50",  label: "11–50",  sub: "employees", icon: UserPlus },
  { value: "51-250", label: "51–250", sub: "employees", icon: Building2 },
  { value: "250+",   label: "250+",   sub: "employees", icon: Landmark },
] as const;

interface Props {
  employeeRange: string;
  onChange: (field: string, value: string) => void;
  onNext: () => void;
}

export default function Step2Business({ employeeRange, onChange, onNext }: Props) {
  const select = (value: string) => {
    onChange("employeeRange", value);
    setTimeout(onNext, 280);
  };

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
          Tell us about<br />your <span className="text-primary">business</span>
        </h1>
        <p className="text-[15px] text-muted-foreground mb-8 leading-relaxed">
          This helps us find the most relevant quotes for your situation.
        </p>

        <div className="text-[11px] font-extrabold uppercase tracking-[0.09em] text-muted-foreground mb-3">
          What size is your organisation?
        </div>
        <div className="grid grid-cols-2 gap-3.5">
          {RANGES.map(({ value, label, sub, icon: Icon }) => {
            const sel = employeeRange === value;
            return (
              <motion.button
                key={value}
                type="button"
                onClick={() => select(value)}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={cn(
                  "flex items-center gap-4 px-5 py-5 rounded-[16px] border-2 text-left transition-all duration-150",
                  sel
                    ? "border-primary bg-primary/5"
                    : "border-border bg-white hover:border-primary/40 hover:bg-primary/[0.02]"
                )}
              >
                <div className={cn(
                  "rounded-[12px] flex items-center justify-center flex-shrink-0 transition-colors",
                  sel ? "bg-primary/12" : "bg-muted"
                )} style={{ width: 48, height: 48 }}>
                  <Icon className={cn("w-6 h-6 transition-colors", sel ? "text-primary" : "text-muted-foreground")} />
                </div>
                <div>
                  <div className={cn("text-[17px] font-extrabold leading-tight transition-colors", sel ? "text-primary" : "text-foreground")}>
                    {label}
                  </div>
                  <div className="text-[12px] text-muted-foreground font-medium mt-0.5">{sub}</div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
