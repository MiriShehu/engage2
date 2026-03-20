interface Props {
  notes: string;
  onChange: (field: string, value: string) => void;
}

export default function Step5Notes({ notes, onChange }: Props) {
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
          Anything else<br />we should <span className="text-primary">know?</span>
        </h1>
        <p className="text-[15px] text-muted-foreground mb-8 leading-relaxed">
          Optional — add any details that will help us find the best options for you.
        </p>

        <textarea
          value={notes}
          onChange={(e) => onChange("notes", e.target.value)}
          rows={7}
          placeholder="Current provider, renewal date, specific requirements, number of locations…"
          className="w-full px-5 py-4 rounded-[12px] border-[1.5px] border-border bg-muted/30 text-[15px] font-medium text-foreground outline-none resize-none transition-all focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(118,24,111,0.08)] leading-relaxed placeholder:text-muted-foreground/60"
        />

        <p className="text-[13px] text-muted-foreground mt-3">
          This step is optional — you can skip it by clicking Continue.
        </p>

      </div>
    </div>
  );
}
