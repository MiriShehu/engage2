import { Building2, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const OPTIONS = [
  { value: "UK Company", icon: Building2, label: "UK Company", desc: "Based and operating in the UK" },
  { value: "US Company", icon: Building2, label: "US Company", desc: "Based and operating in the US" },
  { value: "International", icon: Globe, label: "International", desc: "Multi-country or global workforce" },
] as const;

interface Props {
  selected: string[];
  onChange: (val: string[]) => void;
  onNext: () => void;
}

export default function Step1CoverType({ selected, onChange, onNext }: Props) {
  const select = (value: string) => {
    onChange([value]);
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
          Which cover are<br />you <span className="text-primary">looking for?</span>
        </h1>
        <p className="text-[15px] text-muted-foreground mb-8 leading-relaxed">
          Select the type of business you're enquiring for.
        </p>

        <div className="flex flex-col gap-3.5">
          {OPTIONS.map(({ value, icon: Icon, label, desc }) => {
            const isSelected = selected.includes(value);
            return (
              <motion.button
                key={value}
                type="button"
                onClick={() => select(value)}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={cn(
                  "flex items-center gap-5 px-5 py-5 rounded-[16px] border-2 text-left transition-all duration-150",
                  isSelected
                    ? "border-primary bg-primary/5"
                    : "border-border bg-white hover:border-primary/40 hover:bg-primary/[0.02]"
                )}
              >
                <div className={cn(
                  "w-13 h-13 rounded-[12px] flex items-center justify-center flex-shrink-0 transition-colors",
                  isSelected ? "bg-primary/12" : "bg-muted"
                )} style={{ width: 52, height: 52 }}>
                  <Icon className={cn("w-6 h-6 transition-colors", isSelected ? "text-primary" : "text-muted-foreground")} />
                </div>
                <div className="flex-1">
                  <div className={cn("text-[16px] font-extrabold transition-colors", isSelected ? "text-primary" : "text-foreground")}>
                    {label}
                  </div>
                  <div className="text-[13px] text-muted-foreground mt-0.5">{desc}</div>
                </div>
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                    className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0"
                  >
                    <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
