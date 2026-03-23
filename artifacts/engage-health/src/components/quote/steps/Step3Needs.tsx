import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Zap, Clock, CalendarDays, BookOpen } from "lucide-react";

const TIMELINES = [
  { value: "ASAP",             icon: Zap,         label: "ASAP",            desc: "Need cover urgently" },
  { value: "1–3 months",       icon: Clock,       label: "1–3 months",      desc: "Short-term window" },
  { value: "3–6 months",       icon: CalendarDays, label: "3–6 months",     desc: "Planning ahead" },
  { value: "Just researching", icon: BookOpen,    label: "Just researching", desc: "Early-stage exploration" },
];

interface Props {
  timeline: string;
  onChange: (field: string, value: string) => void;
}

function OptionCard({
  value, icon: Icon, label, desc, selected, onClick,
}: { value: string; icon: React.ElementType; label: string; desc: string; selected: boolean; onClick: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(
        "flex items-center gap-5 px-5 py-5 rounded-[16px] border-2 text-left transition-all duration-150 w-full",
        selected
          ? "border-primary bg-primary/5"
          : "border-border bg-white hover:border-primary/40 hover:bg-primary/[0.02]"
      )}
    >
      <div className={cn(
        "rounded-[12px] flex items-center justify-center flex-shrink-0 transition-colors",
        selected ? "bg-primary/12" : "bg-muted"
      )} style={{ width: 52, height: 52 }}>
        <Icon className={cn("w-6 h-6 transition-colors", selected ? "text-primary" : "text-muted-foreground")} />
      </div>
      <div className="flex-1 min-w-0">
        <div className={cn("text-[16px] font-extrabold leading-tight transition-colors", selected ? "text-primary" : "text-foreground")}>
          {label}
        </div>
        <div className="text-[13px] text-muted-foreground mt-0.5">{desc}</div>
      </div>
      {selected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
          className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0"
        >
          <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </motion.div>
      )}
    </motion.button>
  );
}

export default function Step3Needs({ timeline, onChange }: Props) {
  return (
    <div className="flex flex-col flex-1 items-center px-8 overflow-y-auto">
      <div className="w-full max-w-[480px] flex flex-col py-7">

        {/* Brand icon */}
        <div className="w-12 h-12 rounded-[13px] flex items-center justify-center mb-7 flex-shrink-0"
             style={{ background: "linear-gradient(135deg,#003648,#76186f)" }}>
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>

        <h1 className="text-[32px] font-extrabold text-foreground tracking-tight leading-[1.15] mb-2">
          How soon do you<br /><span className="text-primary">need cover?</span>
        </h1>
        <p className="text-[14px] text-muted-foreground mb-8 leading-relaxed">
          This helps our advisors prepare the most relevant options for you.
        </p>
        <div className="flex flex-col gap-2.5">
          {TIMELINES.map((t) => (
            <OptionCard
              key={t.value}
              {...t}
              selected={timeline === t.value}
              onClick={() => onChange("timeline", t.value)}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
