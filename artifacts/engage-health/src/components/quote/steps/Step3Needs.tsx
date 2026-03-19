import { cn } from "@/lib/utils";

const BUDGETS = ["< £5k", "£5k–£20k", "£20k–£50k", "£50k+", "Not sure"];
const TIMELINES = ["ASAP", "1–3 months", "3–6 months", "Just researching"];

interface Props {
  budget: string;
  timeline: string;
  notes: string;
  onChange: (field: string, value: string) => void;
}

export default function Step3Needs({ budget, timeline, notes, onChange }: Props) {
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
          What are you<br /><span className="text-primary">looking for?</span>
        </h1>
        <p className="text-[13px] text-muted-foreground mb-7 leading-relaxed">
          This helps our advisors prepare the most relevant options.
        </p>

        {/* Budget */}
        <div className="text-[13px] font-semibold text-foreground mb-3">
          What's your approximate annual budget?
        </div>
        <div className="flex flex-wrap gap-2 mb-7">
          {BUDGETS.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => onChange("budget", b)}
              className={cn(
                "px-4 py-2.5 rounded-full border-[1.5px] text-[13px] font-semibold transition-all duration-150",
                budget === b
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-white text-foreground hover:border-primary/50 hover:text-primary"
              )}
            >
              {b}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="text-[13px] font-semibold text-foreground mb-3">
          How soon do you need cover?
        </div>
        <div className="flex flex-wrap gap-2 mb-7">
          {TIMELINES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => onChange("timeline", t)}
              className={cn(
                "px-4 py-2.5 rounded-full border-[1.5px] text-[13px] font-semibold transition-all duration-150",
                timeline === t
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-white text-foreground hover:border-primary/50 hover:text-primary"
              )}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Notes */}
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.07em] text-muted-foreground mb-1.5">
            Anything else we should know? <span className="font-normal normal-case">(optional)</span>
          </div>
          <textarea
            value={notes}
            onChange={(e) => onChange("notes", e.target.value)}
            rows={3}
            placeholder="Current provider, specific requirements, renewal date…"
            className="w-full px-3.5 py-2.5 rounded-[10px] border-[1.5px] border-border bg-muted/30 text-[13px] text-foreground outline-none resize-none transition-all focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(118,24,111,0.08)]"
          />
        </div>
      </div>
    </div>
  );
}
