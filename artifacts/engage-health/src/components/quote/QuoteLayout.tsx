import { Link } from "wouter";
import { Lock } from "lucide-react";

const STEPS = ["Cover Type", "Your Business", "Your Needs", "Contact"] as const;

interface Props {
  step: number; // 1-indexed, 0 = success
  children: React.ReactNode;
}

export default function QuoteLayout({ step, children }: Props) {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white">

      {/* ── Navbar ── */}
      <nav className="flex items-center justify-between px-10 h-[52px] bg-white border-b border-border flex-shrink-0 z-10">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-[7px] flex items-center justify-center text-white text-[13px] font-black"
               style={{ background: "linear-gradient(135deg,#003648,#76186f)" }}>
            E
          </div>
          <span className="text-[14px] font-extrabold text-foreground tracking-tight">
            Engage<span className="text-primary">Health</span>
          </span>
        </Link>
        <div className="flex items-center gap-5">
          <Link href="/" className="text-[12px] text-muted-foreground font-medium hover:text-foreground transition-colors">
            ← Back to site
          </Link>
          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <Lock className="w-3 h-3" />
            Secure &amp; confidential
          </div>
        </div>
      </nav>

      {/* ── Step strip (hidden on success screen) ── */}
      {step >= 1 && step <= 4 && (
        <div
          className="flex items-center gap-0 px-10 flex-shrink-0"
          style={{ background: "linear-gradient(135deg,#003648,#76186f)", height: 36 }}
        >
          {STEPS.map((label, i) => {
            const n = i + 1;
            const isDone = n < step;
            const isActive = n === step;
            return (
              <div key={label} className="flex items-center gap-0">
                {/* divider before (not on first) */}
                {i > 0 && (
                  <div className="w-7 h-px mx-1" style={{ background: "rgba(255,255,255,0.15)" }} />
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
      )}

      {/* ── Split body ── */}
      <div className="flex flex-1 overflow-hidden">
        {children}
      </div>

      {/* ── Footer ── */}
      <footer className="flex items-center justify-between px-10 h-[42px] bg-white border-t border-border flex-shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground font-semibold">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0dab76]" />
            FCA Regulated · No. 812846
          </div>
          <span className="text-[11px] text-border">·</span>
          <span className="text-[11px] text-muted-foreground">© Engage Health Group 2025</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="text-[11px] text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-[11px] text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
        </div>
      </footer>

    </div>
  );
}
