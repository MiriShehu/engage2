# Get a Quote Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing `/get-a-quote` page with a full-screen SaaS-style two-column quote flow — minimal white left panel with a 4-step form, dark branded right panel with an animated testimonial carousel.

**Architecture:** `GetAQuote.tsx` owns all form state and renders `QuoteLayout` (shell) containing `QuoteFormSteps` (left, animated step router) and `TestimonialCarousel` (right). Each step is its own focused component. `DialCodePicker` is extracted to a shared UI component first to avoid duplication.

**Tech Stack:** React 18, TypeScript, Tailwind v4, Framer Motion, Lucide React, Wouter (routing)

---

## File Map

| Action | Path | Responsibility |
|---|---|---|
| **Create** | `src/components/ui/DialCodePicker.tsx` | Dial code selector (extracted from QuoteForm) |
| **Create** | `src/components/quote/QuoteLayout.tsx` | Navbar + step strip + split shell + footer |
| **Create** | `src/components/quote/TestimonialCarousel.tsx` | Right panel: auto-rotating carousel |
| **Create** | `src/components/quote/steps/Step1CoverType.tsx` | Cover type card selection |
| **Create** | `src/components/quote/steps/Step2Business.tsx` | Employee size cards + company fields |
| **Create** | `src/components/quote/steps/Step3Needs.tsx` | Budget + timeline pills + notes |
| **Create** | `src/components/quote/steps/Step4Contact.tsx` | Name/email/phone + GDPR consent |
| **Create** | `src/components/quote/steps/StepSuccess.tsx` | Animated confirmation screen |
| **Create** | `src/components/quote/QuoteFormSteps.tsx` | AnimatePresence step router |
| **Replace** | `src/pages/GetAQuote.tsx` | Page root — form state + layout wiring |
| **Modify** | `src/components/sections/shared/QuoteForm.tsx` | Update import to use shared DialCodePicker |

**Working directory for all commands:** `C:/Users/86mir/OneDrive/Desktop/engageHeatlh/artifacts/engage-health`

**TypeScript check command (run after each task):**
```bash
npx tsc --noEmit -p tsconfig.json 2>&1 | grep -E "error TS" | head -10
```
Expected output: no lines (zero errors).

---

## Task 1: Extract DialCodePicker to shared UI

**Files:**
- Create: `src/components/ui/DialCodePicker.tsx`
- Modify: `src/components/sections/shared/QuoteForm.tsx`

- [ ] **Step 1: Create `src/components/ui/DialCodePicker.tsx`**

Copy the `DIAL_CODES` array and `DialCodePicker` component verbatim from `QuoteForm.tsx` lines 1–125 (the `DIAL_CODES` constant and the `DialCodePicker` function). Add a named export and a `DialEntry` type export:

```tsx
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DialEntry {
  code: string;
  name: string;
  flag: string;
}

const DIAL_CODES: DialEntry[] = [
  { flag: "🇬🇧", code: "+44", name: "United Kingdom" },
  { flag: "🇺🇸", code: "+1",  name: "United States" },
  { flag: "🇦🇺", code: "+61", name: "Australia" },
  { flag: "🇨🇦", code: "+1",  name: "Canada" },
  { flag: "🇩🇪", code: "+49", name: "Germany" },
  { flag: "🇫🇷", code: "+33", name: "France" },
  { flag: "🇮🇳", code: "+91", name: "India" },
  { flag: "🇸🇬", code: "+65", name: "Singapore" },
  { flag: "🇦🇪", code: "+971", name: "United Arab Emirates" },
  { flag: "🇿🇦", code: "+27", name: "South Africa" },
  { flag: "🇳🇱", code: "+31", name: "Netherlands" },
  { flag: "🇪🇸", code: "+34", name: "Spain" },
  { flag: "🇮🇹", code: "+39", name: "Italy" },
  { flag: "🇵🇹", code: "+351", name: "Portugal" },
  { flag: "🇸🇪", code: "+46", name: "Sweden" },
  { flag: "🇳🇴", code: "+47", name: "Norway" },
  { flag: "🇩🇰", code: "+45", name: "Denmark" },
  { flag: "🇫🇮", code: "+358", name: "Finland" },
  { flag: "🇨🇭", code: "+41", name: "Switzerland" },
  { flag: "🇦🇹", code: "+43", name: "Austria" },
  { flag: "🇧🇪", code: "+32", name: "Belgium" },
  { flag: "🇮🇪", code: "+353", name: "Ireland" },
  { flag: "🇳🇿", code: "+64", name: "New Zealand" },
  { flag: "🇯🇵", code: "+81", name: "Japan" },
  { flag: "🇰🇷", code: "+82", name: "South Korea" },
  { flag: "🇨🇳", code: "+86", name: "China" },
  { flag: "🇭🇰", code: "+852", name: "Hong Kong" },
  { flag: "🇲🇾", code: "+60", name: "Malaysia" },
  { flag: "🇵🇭", code: "+63", name: "Philippines" },
  { flag: "🇹🇭", code: "+66", name: "Thailand" },
  { flag: "🇮🇩", code: "+62", name: "Indonesia" },
  { flag: "🇧🇷", code: "+55", name: "Brazil" },
  { flag: "🇲🇽", code: "+52", name: "Mexico" },
  { flag: "🇦🇷", code: "+54", name: "Argentina" },
  { flag: "🇨🇱", code: "+56", name: "Chile" },
  { flag: "🇨🇴", code: "+57", name: "Colombia" },
  { flag: "🇳🇬", code: "+234", name: "Nigeria" },
  { flag: "🇰🇪", code: "+254", name: "Kenya" },
  { flag: "🇬🇭", code: "+233", name: "Ghana" },
  { flag: "🇪🇬", code: "+20", name: "Egypt" },
  { flag: "🇮🇱", code: "+972", name: "Israel" },
  { flag: "🇸🇦", code: "+966", name: "Saudi Arabia" },
  { flag: "🇶🇦", code: "+974", name: "Qatar" },
  { flag: "🇰🇼", code: "+965", name: "Kuwait" },
  { flag: "🇧🇭", code: "+973", name: "Bahrain" },
  { flag: "🇴🇲", code: "+968", name: "Oman" },
  { flag: "🇵🇰", code: "+92", name: "Pakistan" },
  { flag: "🇧🇩", code: "+880", name: "Bangladesh" },
  { flag: "🇱🇰", code: "+94", name: "Sri Lanka" },
  { flag: "🇷🇺", code: "+7",  name: "Russia" },
  { flag: "🇵🇱", code: "+48", name: "Poland" },
  { flag: "🇨🇿", code: "+420", name: "Czech Republic" },
  { flag: "🇷🇴", code: "+40", name: "Romania" },
];

interface Props {
  value: string;
  onChange: (val: string) => void;
  className?: string;
}

export function DialCodePicker({ value, onChange, className }: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filtered = DIAL_CODES.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.code.includes(search)
  );

  const selected = DIAL_CODES.find((d) => `${d.flag}${d.code}` === value) ?? DIAL_CODES[0];

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 px-3 h-full border-r border-border bg-muted/40 rounded-l-xl text-sm font-medium text-secondary hover:bg-muted transition-colors whitespace-nowrap"
      >
        <span>{selected.flag}</span>
        <span className="text-xs text-muted-foreground">{selected.code}</span>
        <ChevronDown className="w-3 h-3 text-muted-foreground" />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-border rounded-xl shadow-lg z-50 overflow-hidden">
          <div className="p-2 border-b border-border">
            <input
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search country..."
              className="w-full text-sm px-3 py-1.5 rounded-lg border border-border outline-none focus:border-primary"
            />
          </div>
          <div className="max-h-48 overflow-y-auto">
            {filtered.map((d) => (
              <button
                key={d.name}
                type="button"
                onClick={() => { onChange(`${d.flag}${d.code}`); setOpen(false); setSearch(""); }}
                className={cn(
                  "w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted/60 transition-colors text-left",
                  value === `${d.flag}${d.code}` && "bg-primary/5 text-primary font-semibold"
                )}
              >
                <span>{d.flag}</span>
                <span className="text-muted-foreground text-xs">{d.code}</span>
                <span className="flex-1 truncate">{d.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Update `QuoteForm.tsx` to import from shared location**

In `src/components/sections/shared/QuoteForm.tsx`, replace the inline `DialCodePicker` definition with an import:

Remove lines containing the `DIAL_CODES` array and the entire `function DialCodePicker(...)` block (approximately lines 1–125). Add at the top of the file:

```tsx
import { DialCodePicker } from "@/components/ui/DialCodePicker";
```

The component usage stays identical — only the definition moves.

- [ ] **Step 3: TypeScript check**

```bash
npx tsc --noEmit -p tsconfig.json 2>&1 | grep -E "error TS" | head -10
```
Expected: no output.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/DialCodePicker.tsx src/components/sections/shared/QuoteForm.tsx
git commit -m "refactor: extract DialCodePicker to shared ui component"
```

---

## Task 2: QuoteLayout shell

**Files:**
- Create: `src/components/quote/QuoteLayout.tsx`

- [ ] **Step 1: Create `src/components/quote/QuoteLayout.tsx`**

```tsx
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
```

- [ ] **Step 2: TypeScript check**

```bash
npx tsc --noEmit -p tsconfig.json 2>&1 | grep -E "error TS" | head -10
```
Expected: no output.

- [ ] **Step 3: Commit**

```bash
git add src/components/quote/QuoteLayout.tsx
git commit -m "feat: add QuoteLayout shell (nav, step strip, footer)"
```

---

## Task 3: TestimonialCarousel

**Files:**
- Create: `src/components/quote/TestimonialCarousel.tsx`

- [ ] **Step 1: Create `src/components/quote/TestimonialCarousel.tsx`**

```tsx
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TESTIMONIALS = [
  { quote: "Engage made the whole process completely seamless. We had competitive quotes from multiple insurers within a day and the team was incredibly knowledgeable throughout.", name: "Stephanie Knap", role: "Senior Manager", company: "Couchbase" },
  { quote: "From initial enquiry through to policy setup, the team was professional, responsive and thorough. Highly recommend to any business looking for group health cover.", name: "Stamatios Andreou", role: "Procurement Analyst", company: "Teya (formerly SaltPay)" },
  { quote: "I was blown away by how smooth the process was. The team clearly knows the market inside out and found us a fantastic deal. I wouldn't hesitate to recommend Engage.", name: "Amber Goldstein", role: "Operations Director", company: "Creative Rock Stars Agency" },
  { quote: "Engage provided excellent guidance throughout the whole process. The team were always on hand to answer questions and made everything simple and straightforward.", name: "Martina Borni", role: "HR & Facilities Officer", company: "Medical Aid for Palestinians" },
  { quote: "I found the whole experience to be very professional. Engage helped us navigate a complicated insurance landscape and secured a policy that suited our needs perfectly.", name: "Linda McGlynn", role: "Insurance & Customer Management", company: "CAE Parc Aviation" },
  { quote: "Engage have been fantastic partners. They took time to understand our business and found a solution that ticked every box. The ongoing support has been outstanding.", name: "Rachel Ramsay", role: "People & Culture Director", company: "BCB Group" },
  { quote: "Outstanding service from start to finish. The team were knowledgeable, friendly and efficient — I wouldn't go anywhere else for our business insurance needs.", name: "Verified Client", role: "Client", company: "Insurance Firm" },
  { quote: "Excellent company to work with. They understood our requirements quickly and delivered exactly what we needed. Communication throughout was first class.", name: "Verified Client", role: "Client", company: "Offset Architects" },
  { quote: "Very professional service. They made what can be a complicated process feel very straightforward. Highly recommend to any business looking for quality advice.", name: "G. Lane", role: "Client", company: "Engage Health Group" },
];

function getInitials(name: string) {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const go = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex((next + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const t = TESTIMONIALS[index];

  return (
    <div
      className="flex-1 flex flex-col items-center justify-center px-14 py-12 relative overflow-hidden"
      style={{ background: "#01232f" }}
    >
      {/* background radial glows */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 65% 55% at 75% 25%, rgba(118,24,111,0.2) 0%, transparent 65%), radial-gradient(ellipse 45% 45% at 25% 85%, rgba(13,171,118,0.08) 0%, transparent 60%)"
      }} />

      <div className="relative z-10 w-full max-w-[400px] flex flex-col items-center text-center">

        {/* Animated card */}
        <div className="w-full mb-8" style={{ minHeight: 200 }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={{
                enter: (d: number) => ({ opacity: 0, y: d * 10 }),
                center: { opacity: 1, y: 0 },
                exit: (d: number) => ({ opacity: 0, y: d * -10 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full rounded-[20px] p-7 text-left relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.11)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* decorative quote mark */}
              <div className="absolute top-4 right-5 text-[68px] leading-none font-serif pointer-events-none select-none"
                   style={{ color: "rgba(255,255,255,0.07)", fontFamily: "Georgia, serif" }}>
                "
              </div>

              {/* stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[13px]" style={{ color: "#fbbf24" }}>★</span>
                ))}
              </div>

              {/* quote */}
              <p className="text-[14px] leading-[1.65] italic mb-5"
                 style={{ color: "rgba(255,255,255,0.85)" }}>
                "{t.quote}"
              </p>

              {/* author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[12px] font-extrabold text-white flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg,#76186f,#003648)",
                    border: "2px solid rgba(255,255,255,0.12)",
                  }}
                >
                  {getInitials(t.name)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-bold text-white truncate">{t.name}</div>
                  <div className="text-[11px] truncate" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {t.role} · {t.company}
                  </div>
                </div>
                <div
                  className="flex-shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold"
                  style={{
                    background: "rgba(13,171,118,0.14)",
                    border: "1px solid rgba(13,171,118,0.25)",
                    color: "#0dab76",
                  }}
                >
                  ✓ Verified
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Heading + subtitle */}
        <div className="text-[19px] font-extrabold text-white tracking-tight mb-2">
          Trusted by 500+ businesses
        </div>
        <p className="text-[12px] leading-relaxed mb-4 max-w-[280px]"
           style={{ color: "rgba(255,255,255,0.4)" }}>
          Award-winning advice from specialists with 50 years' combined experience.
        </p>

        {/* Dots */}
        <div className="flex items-center gap-1.5 mb-3">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: i === index ? 18 : 5,
                height: 5,
                background: i === index ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.18)",
              }}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-2.5">
          {([-1, 1] as const).map((d) => (
            <button
              key={d}
              onClick={() => go(index + d)}
              className="w-[38px] h-[38px] rounded-full flex items-center justify-center text-[15px] transition-all"
              style={{
                border: "1.5px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.65)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.35)";
                (e.currentTarget as HTMLButtonElement).style.color = "white";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.18)";
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.65)";
              }}
            >
              {d === -1 ? "←" : "→"}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
```

- [ ] **Step 2: TypeScript check**

```bash
npx tsc --noEmit -p tsconfig.json 2>&1 | grep -E "error TS" | head -10
```

- [ ] **Step 3: Commit**

```bash
git add src/components/quote/TestimonialCarousel.tsx
git commit -m "feat: add TestimonialCarousel for quote page right panel"
```

---

## Task 4: Step 1 — Cover Type

**Files:**
- Create: `src/components/quote/steps/Step1CoverType.tsx`

- [ ] **Step 1: Create `src/components/quote/steps/Step1CoverType.tsx`**

```tsx
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
```

- [ ] **Step 2: TypeScript check + commit**

```bash
npx tsc --noEmit -p tsconfig.json 2>&1 | grep -E "error TS" | head -10
git add src/components/quote/steps/Step1CoverType.tsx
git commit -m "feat: add Step1CoverType component"
```

---

## Task 5: Step 2 — Your Business

**Files:**
- Create: `src/components/quote/steps/Step2Business.tsx`

- [ ] **Step 1: Create `src/components/quote/steps/Step2Business.tsx`**

```tsx
import { cn } from "@/lib/utils";
import { Users, UserPlus, Building2, Landmark, Globe } from "lucide-react";

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
```

- [ ] **Step 2: TypeScript check + commit**

```bash
npx tsc --noEmit -p tsconfig.json 2>&1 | grep -E "error TS" | head -10
git add src/components/quote/steps/Step2Business.tsx
git commit -m "feat: add Step2Business component"
```

---

## Task 6: Step 3 — Your Needs

**Files:**
- Create: `src/components/quote/steps/Step3Needs.tsx`

- [ ] **Step 1: Create `src/components/quote/steps/Step3Needs.tsx`**

```tsx
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
```

- [ ] **Step 2: TypeScript check + commit**

```bash
npx tsc --noEmit -p tsconfig.json 2>&1 | grep -E "error TS" | head -10
git add src/components/quote/steps/Step3Needs.tsx
git commit -m "feat: add Step3Needs component"
```

---

## Task 7: Step 4 — Contact

**Files:**
- Create: `src/components/quote/steps/Step4Contact.tsx`

- [ ] **Step 1: Create `src/components/quote/steps/Step4Contact.tsx`**

```tsx
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
```

- [ ] **Step 2: TypeScript check + commit**

```bash
npx tsc --noEmit -p tsconfig.json 2>&1 | grep -E "error TS" | head -10
git add src/components/quote/steps/Step4Contact.tsx
git commit -m "feat: add Step4Contact component"
```

---

## Task 8: Success Screen

**Files:**
- Create: `src/components/quote/steps/StepSuccess.tsx`

- [ ] **Step 1: Create `src/components/quote/steps/StepSuccess.tsx`**

```tsx
import { motion } from "framer-motion";
import { Link } from "wouter";

interface Props {
  firstName: string;
  coverTypes: string[];
  employeeRange: string;
}

export default function StepSuccess({ firstName, coverTypes, employeeRange }: Props) {
  const coverLabel = coverTypes.includes("Both")
    ? "Employee Benefits & International Benefits"
    : coverTypes.join(" & ");

  return (
    <div className="flex flex-col flex-1 items-center justify-center px-8 text-center">
      <div className="w-full max-w-[400px] flex flex-col items-center gap-6">

        {/* Animated checkmark */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.15, 1], opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg,#0dab76,#16a34a)" }}
        >
          <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <motion.polyline
              points="20 6 9 17 4 12"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-3"
        >
          <h1 className="text-[28px] font-extrabold text-foreground tracking-tight">
            We've received your request!
          </h1>
          <p className="text-[14px] text-muted-foreground leading-relaxed">
            Thanks, <strong className="text-foreground">{firstName}</strong>. We'll be in touch about{" "}
            <strong className="text-foreground">{coverLabel}</strong> cover for your team of{" "}
            <strong className="text-foreground">{employeeRange}</strong> employees.
            <br /><br />
            A specialist will contact you within <strong className="text-foreground">2 working hours</strong>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-primary hover:underline underline-offset-4 transition-all"
          >
            ← Back to site
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
```

- [ ] **Step 2: TypeScript check + commit**

```bash
npx tsc --noEmit -p tsconfig.json 2>&1 | grep -E "error TS" | head -10
git add src/components/quote/steps/StepSuccess.tsx
git commit -m "feat: add StepSuccess animated confirmation screen"
```

---

## Task 9: QuoteFormSteps — animated step router

**Files:**
- Create: `src/components/quote/QuoteFormSteps.tsx`

- [ ] **Step 1: Create `src/components/quote/QuoteFormSteps.tsx`**

```tsx
import { AnimatePresence, motion } from "framer-motion";
import Step1CoverType from "./steps/Step1CoverType";
import Step2Business from "./steps/Step2Business";
import Step3Needs from "./steps/Step3Needs";
import Step4Contact from "./steps/Step4Contact";
import StepSuccess from "./steps/StepSuccess";

export interface FormData {
  coverTypes: string[];
  employeeRange: string;
  company: string;
  industry: string;
  country: string;
  budget: string;
  timeline: string;
  notes: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dialCode: string;
  gdprConsent: boolean;
}

interface Props {
  step: number;       // 1–4, or 0 for success
  direction: number;  // 1 = forward, -1 = back
  formData: FormData;
  submitting: boolean;
  onChange: (field: keyof FormData, value: string | string[] | boolean) => void;
  onNext: () => void;
  onBack: () => void;
  onSubmit: () => void;
}

const variants = {
  enter: (d: number) => ({ x: d * 24, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d * -24, opacity: 0 }),
};

// Per-step validation
function isStepValid(step: number, f: FormData): boolean {
  if (step === 1) return f.coverTypes.length > 0;
  if (step === 2) return !!f.employeeRange && f.company.trim().length > 0;
  if (step === 3) return !!f.budget && !!f.timeline;
  return true;
}

export default function QuoteFormSteps({ step, direction, formData, submitting, onChange, onNext, onBack, onSubmit }: Props) {
  const valid = isStepValid(step, formData);

  return (
    <div className="w-[52%] flex flex-col bg-white overflow-hidden">
      <div className="flex-1 overflow-y-auto relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col"
          >
            {step === 0 && (
              <StepSuccess
                firstName={formData.firstName}
                coverTypes={formData.coverTypes}
                employeeRange={formData.employeeRange}
              />
            )}
            {step === 1 && (
              <Step1CoverType
                selected={formData.coverTypes}
                onChange={(v) => onChange("coverTypes", v)}
              />
            )}
            {step === 2 && (
              <Step2Business
                employeeRange={formData.employeeRange}
                company={formData.company}
                industry={formData.industry}
                country={formData.country}
                onChange={(field, value) => onChange(field as keyof FormData, value)}
              />
            )}
            {step === 3 && (
              <Step3Needs
                budget={formData.budget}
                timeline={formData.timeline}
                notes={formData.notes}
                onChange={(field, value) => onChange(field as keyof FormData, value)}
              />
            )}
            {step === 4 && (
              <Step4Contact
                firstName={formData.firstName}
                lastName={formData.lastName}
                email={formData.email}
                phone={formData.phone}
                dialCode={formData.dialCode}
                gdprConsent={formData.gdprConsent}
                submitting={submitting}
                onChange={(field, value) => onChange(field as keyof FormData, value)}
                onSubmit={onSubmit}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer nav — hidden on success and step 4 (has its own submit) */}
      {step >= 1 && step <= 3 && (
        <div className="flex items-center justify-between px-8 py-4 border-t border-border flex-shrink-0"
             style={{ maxWidth: "unset" }}>
          {/* Left: Back or spacer */}
          <div className="w-[92px]">
            {step > 1 ? (
              <button onClick={onBack} className="flex items-center gap-1.5 text-[13px] font-semibold text-muted-foreground hover:text-foreground transition-colors">
                ← Go Back
              </button>
            ) : null}
          </div>

          {/* Center: step counter */}
          <span className="text-[13px] text-muted-foreground font-semibold">
            <strong className="text-foreground">{step}</strong>/4
          </span>

          {/* Right: Continue */}
          <button
            onClick={onNext}
            disabled={!valid}
            className="flex items-center gap-2 px-5 py-2.5 rounded-[10px] text-[13px] font-bold text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 hover:-translate-y-px"
            style={{ background: "linear-gradient(135deg,#76186f,#5a1254)", boxShadow: valid ? "0 4px 12px rgba(118,24,111,0.25)" : "none" }}
          >
            Continue →
          </button>
        </div>
      )}

      {/* Footer nav for step 4: only Back + counter */}
      {step === 4 && (
        <div className="flex items-center justify-between px-8 py-4 border-t border-border flex-shrink-0">
          <button onClick={onBack} className="flex items-center gap-1.5 text-[13px] font-semibold text-muted-foreground hover:text-foreground transition-colors">
            ← Go Back
          </button>
          <span className="text-[13px] text-muted-foreground font-semibold">
            <strong className="text-foreground">4</strong>/4
          </span>
          <div className="w-[92px]" />
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: TypeScript check + commit**

```bash
npx tsc --noEmit -p tsconfig.json 2>&1 | grep -E "error TS" | head -10
git add src/components/quote/QuoteFormSteps.tsx
git commit -m "feat: add QuoteFormSteps animated step router"
```

---

## Task 10: Wire everything in GetAQuote.tsx

**Files:**
- Replace: `src/pages/GetAQuote.tsx`

- [ ] **Step 1: Replace `src/pages/GetAQuote.tsx`**

```tsx
import { useState } from "react";
import { useLocation } from "wouter";
import QuoteLayout from "@/components/quote/QuoteLayout";

// useLocation used for programmatic navigation on back from step 1
import QuoteFormSteps, { type FormData } from "@/components/quote/QuoteFormSteps";
import TestimonialCarousel from "@/components/quote/TestimonialCarousel";

const DEFAULT_FORM: FormData = {
  coverTypes: [],
  employeeRange: "",
  company: "",
  industry: "",
  country: "",
  budget: "",
  timeline: "",
  notes: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dialCode: "🇬🇧+44",
  gdprConsent: false,
};

export default function GetAQuote() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState<FormData>(DEFAULT_FORM);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof FormData, value: string | string[] | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, 4));
  };

  const handleBack = () => {
    if (step === 1) {
      window.location.href = "/";
      return;
    }
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDirection(1);
      setStep(0); // success
    }, 500);
  };

  return (
    <QuoteLayout step={step}>
      <QuoteFormSteps
        step={step}
        direction={direction}
        formData={formData}
        submitting={submitting}
        onChange={handleChange}
        onNext={handleNext}
        onBack={handleBack}
        onSubmit={handleSubmit}
      />
      <TestimonialCarousel />
    </QuoteLayout>
  );
}
```

- [ ] **Step 2: TypeScript check**

```bash
npx tsc --noEmit -p tsconfig.json 2>&1 | grep -E "error TS" | head -10
```
Expected: no output.

- [ ] **Step 3: Start dev server and verify in browser**

```bash
npm run dev
```

Navigate to `http://localhost:5173/get-a-quote` and verify:
- [ ] Page renders without double navbar
- [ ] Step strip shows step 1 active
- [ ] Selecting cover types and clicking Continue advances to step 2
- [ ] Step 2 size cards are visible with icons
- [ ] Step 3 pills work
- [ ] Step 4 has phone dial picker and submit button
- [ ] Submit → success screen with animated checkmark
- [ ] "← Back to site" on success → navigates to `/`
- [ ] Testimonial carousel auto-rotates, arrows work
- [ ] Dots navigate directly

- [ ] **Step 4: Final commit**

```bash
git add src/pages/GetAQuote.tsx
git commit -m "feat: complete Get a Quote page redesign — SaaS two-column layout with animated steps and testimonial carousel"
```
