import { Building2, Globe2, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const OPTIONS = [
  { value: "Employee Benefits", icon: Building2, label: "Employee Benefits", desc: "UK-based workforce" },
  { value: "International Benefits", icon: Globe2, label: "International Benefits", desc: "Global / expat teams" },
  { value: "Both", icon: Zap, label: "Both", desc: "We need both" },
] as const;

interface Props {
  selected: string[];
  onChange: (val: string[]) => void;
}

export default function Step1CoverType({ selected, onChange }: Props) {
  const toggle = (value: string) => {
    if (value === "Both") {
      onChange(selected.includes("Both") ? [] : ["Both"]);
      return;
    }
    const next = selected.includes(value)
      ? selected.filter((v) => v !== value && v !== "Both")
      : [...selected.filter((v) => v !== "Both"), value];
    onChange(next);
  };

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
          What would you like<br />to <span className="text-primary">cover?</span>
        </h1>
        <p className="text-[13px] text-muted-foreground mb-8 leading-relaxed">
          Select all that apply — we'll tailor your quotes accordingly.
        </p>

        <div className="grid grid-cols-1 gap-3 mb-6">
          {OPTIONS.map(({ value, icon: Icon, label, desc }) => {
            const isSelected = selected.includes(value);
            return (
              <button
                key={value}
                type="button"
                onClick={() => toggle(value)}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-[14px] border-2 text-left transition-all duration-150",
                  isSelected
                    ? "border-primary bg-primary/5"
                    : "border-border bg-white hover:border-primary/40 hover:bg-primary/[0.02]"
                )}
              >
                <div className={cn(
                  "w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0 transition-colors",
                  isSelected ? "bg-primary/12" : "bg-muted"
                )}>
                  <Icon className={cn("w-5 h-5 transition-colors", isSelected ? "text-primary" : "text-muted-foreground")} />
                </div>
                <div>
                  <div className={cn("text-[13px] font-bold transition-colors", isSelected ? "text-primary" : "text-foreground")}>
                    {label}
                  </div>
                  <div className="text-[11px] text-muted-foreground">{desc}</div>
                </div>
                {isSelected && (
                  <div className="ml-auto w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
