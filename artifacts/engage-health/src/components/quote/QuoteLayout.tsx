import { Link } from "wouter";
import { Lock } from "lucide-react";

const STEPS = ["Cover Type", "Your Business", "Your Company", "Your Needs", "Notes", "Contact"] as const;
const TOTAL = STEPS.length;

interface Props {
  step: number; // 1-indexed, 0 = success
  children: React.ReactNode;
}

export default function QuoteLayout({ step, children }: Props) {
  const activeLabel = step >= 1 && step <= TOTAL ? STEPS[step - 1] : "";

  return (
    <div className="flex flex-col min-h-screen md:h-screen md:overflow-hidden bg-white">

      {/* ── Navbar ── */}
      <nav className="flex items-center justify-between px-4 sm:px-8 md:px-10 h-[52px] bg-white border-b border-border flex-shrink-0 z-10">
        <Link href="/" className="flex items-center z-50 flex-shrink-0">
          <img src="/logo.png" alt="Engage Health Group" className="h-8 w-auto" />
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
          <Link href="/" className="text-[12px] text-muted-foreground font-medium hover:text-foreground transition-colors">
            ← Back to site
          </Link>
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <Lock className="w-3 h-3" />
            Secure &amp; confidential
          </div>
        </div>
      </nav>

      {/* ── Step strip ── */}
      {step >= 1 && step <= TOTAL && (
        <>
          {/* Mobile: progress bar + label */}
          <div className="md:hidden flex-shrink-0"
               style={{ background: "linear-gradient(135deg,#003648,#76186f)" }}>
            <div className="flex items-center justify-between px-4 pt-2.5 pb-1">
              <span className="text-[11px] font-bold text-white/70">
                Step {step} of {TOTAL}
              </span>
              <span className="text-[11px] font-bold text-white">{activeLabel}</span>
            </div>
            <div className="mx-4 mb-2.5 h-1 rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-white/80 transition-all duration-500"
                style={{ width: `${(step / TOTAL) * 100}%` }}
              />
            </div>
          </div>

          {/* Desktop: dot + label strip */}
          <div
            className="hidden md:flex items-center gap-0 px-10 flex-shrink-0"
            style={{ background: "linear-gradient(135deg,#003648,#76186f)", height: 36 }}
          >
            {STEPS.map((label, i) => {
              const n = i + 1;
              const isDone = n < step;
              const isActive = n === step;
              return (
                <div key={label} className="flex items-center gap-0">
                  {i > 0 && (
                    <div className="w-5 h-px mx-1" style={{ background: "rgba(255,255,255,0.15)" }} />
                  )}
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                      style={{
                        background: isDone ? "#0dab76" : isActive ? "white" : "rgba(255,255,255,0.1)",
                        border: isDone ? "none" : isActive ? "none" : "1px solid rgba(255,255,255,0.15)",
                        color: isDone ? "white" : isActive ? "#76186f" : "rgba(255,255,255,0.45)",
                      }}
                    >
                      {isDone ? "✓" : n}
                    </div>
                    <span
                      className="text-[11px] font-semibold"
                      style={{
                        color: isDone ? "rgba(255,255,255,0.6)" : isActive ? "white" : "rgba(255,255,255,0.45)",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* ── Split body ── */}
      <div className="flex flex-1 md:overflow-hidden">
        {children}
      </div>

      {/* ── Footer ── */}
      <footer className="flex items-center justify-between px-4 sm:px-8 md:px-10 h-[42px] bg-white border-t border-border flex-shrink-0">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground font-semibold">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0dab76]" />
            <span className="hidden sm:inline">FCA Regulated · No. 812846</span>
            <span className="sm:hidden">FCA Regulated</span>
          </div>
          <span className="hidden sm:inline text-[11px] text-border">·</span>
          <span className="hidden sm:inline text-[11px] text-muted-foreground">© Engage Health Group 2025</span>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <Link href="/privacy" className="text-[11px] text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
          <Link href="/terms" className="text-[11px] text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
        </div>
      </footer>

    </div>
  );
}
