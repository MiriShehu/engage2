# Service Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 23 service subpages (11 EB + 12 IB) using a shared template shell, driven by data files.

**Architecture:** `ServicePageLayout` provides the hero/sidebar/TrustBar/CTA shell; `ServicePageSections` renders typed content sections; `ServicePage` is the single dynamic route handler for both categories. `GroupHealthInsurance.tsx` is refactored to use the same shell while keeping its bespoke JSX content.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lucide React, Wouter router, shadcn/ui

**No test framework is configured** — verification is done by running the dev server and visiting pages in the browser.

---

## File Map

| File | Action | Purpose |
|---|---|---|
| `src/data/types.ts` | Create | All shared TS types |
| `src/data/employeeBenefitsServices.ts` | Create | 12 EB ServiceEntry objects |
| `src/data/internationalBenefitsServices.ts` | Create | 12 IB ServiceEntry objects |
| `src/components/service-page/ServicePageSections.tsx` | Create | Section renderers + exported SectionLabel/SectionHeading/Divider |
| `src/components/service-page/ServicePageLayout.tsx` | Create | Hero, TrustBar, sidebar, bottom CTA shell |
| `src/pages/ServicePage.tsx` | Create | Dynamic route handler |
| `src/pages/GroupHealthInsurance.tsx` | Modify | Refactor to use ServicePageLayout shell |
| `src/App.tsx` | Modify | Add 2 dynamic routes |

---

## Task 1: Types

**Files:**
- Create: `src/data/types.ts`

- [ ] Create `src/data/types.ts`:

```ts
import type { LucideIcon } from 'lucide-react';

export type ServiceListSection = {
  type: 'service-list'
  label: string
  title: string
  intro: string
  items: string[]
  testimonial?: string
}

export type IntroSection = {
  type: 'intro'
  label: string
  title: string
  paragraphs: string[]
}

export type CoverageSection = {
  type: 'coverage'
  label: string
  title: string
  intro: string
  items: string[]
  addOns?: string[]
}

export type WhyBuySection = {
  type: 'why-buy'
  label: string
  title: string
  intro: string
  employerBenefits: string[]
  employeeBenefits: string[]
}

export type TextBlockSection = {
  type: 'text-block'
  label: string
  title: string
  paragraphs: string[]
}

export type FaqsSection = {
  type: 'faqs'
  items: { q: string; a: string }[]
}

export type ServiceSection =
  | ServiceListSection
  | IntroSection
  | CoverageSection
  | WhyBuySection
  | TextBlockSection
  | FaqsSection

export type ServiceStat = {
  icon: LucideIcon
  val: string
  label: string
}

export type ServiceEntry = {
  slug: string
  title: string
  titleAccent?: string
  tagline: string
  subtitle: string
  heroImage?: string
  icon: LucideIcon
  colorScheme: 'purple' | 'teal'
  stats: ServiceStat[]
  sections: ServiceSection[]
  sidebarTestimonial: {
    quote: string
    author: string
  }
}
```

- [ ] Commit:
```bash
git add src/data/types.ts
git commit -m "feat: add ServiceEntry and ServiceSection types"
```

---

## Task 2: ServicePageSections component

**Files:**
- Create: `src/components/service-page/ServicePageSections.tsx`

- [ ] Create `src/components/service-page/ServicePageSections.tsx`:

```tsx
import { useState } from 'react';
import { CheckCircle2, Plus, Minus, Building2, Users } from 'lucide-react';
import type { ServiceSection } from '@/data/types';

// ── Shared sub-components (also used by GroupHealthInsurance.tsx) ──────────

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-primary bg-primary/8 px-3 py-1 rounded-full mb-3">
      {children}
    </span>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl sm:text-2xl font-extrabold text-secondary leading-snug">{children}</h2>
  );
}

export function Divider() {
  return <hr className="my-10 border-border" />;
}

// ── Color scheme helpers ───────────────────────────────────────────────────

const SCHEME = {
  purple: {
    employerGradient: 'linear-gradient(135deg,#003648,#004d6b)',
    employeeGradient: 'linear-gradient(135deg,#76186f,#5a1254)',
  },
  teal: {
    employerGradient: 'linear-gradient(135deg,#003648,#004d6b)',
    employeeGradient: 'linear-gradient(135deg,#003648,#004d6b)',
  },
} as const;

// ── Section renderers ──────────────────────────────────────────────────────

function ServiceListRenderer({ s }: { s: Extract<ServiceSection, { type: 'service-list' }> }) {
  return (
    <section>
      <SectionLabel>{s.label}</SectionLabel>
      <SectionHeading>{s.title}</SectionHeading>
      <p className="mt-4 text-muted-foreground leading-relaxed">{s.intro}</p>
      <ul className="mt-6 space-y-3">
        {s.items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
      {s.testimonial && (
        <div className="mt-8 p-6 rounded-2xl border-l-4 border-primary bg-primary/5">
          <p className="text-secondary font-medium italic leading-relaxed text-sm">"{s.testimonial}"</p>
        </div>
      )}
    </section>
  );
}

function IntroRenderer({ s }: { s: Extract<ServiceSection, { type: 'intro' }> }) {
  return (
    <section>
      <SectionLabel>{s.label}</SectionLabel>
      <SectionHeading>{s.title}</SectionHeading>
      <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
        {s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </section>
  );
}

function CoverageRenderer({ s }: { s: Extract<ServiceSection, { type: 'coverage' }> }) {
  return (
    <section>
      <SectionLabel>{s.label}</SectionLabel>
      <SectionHeading>{s.title}</SectionHeading>
      <p className="mt-4 text-muted-foreground leading-relaxed">{s.intro}</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {s.items.map((item) => (
          <div key={item} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-border">
            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm text-secondary leading-snug">{item}</span>
          </div>
        ))}
      </div>
      {s.addOns && s.addOns.length > 0 && (
        <>
          <h4 className="font-bold text-secondary text-sm mt-8 mb-4">Additional benefits:</h4>
          <div className="flex flex-wrap gap-2">
            {s.addOns.map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-border text-xs font-medium text-secondary">
                <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

function WhyBuyRenderer({ s, colorScheme }: { s: Extract<ServiceSection, { type: 'why-buy' }>; colorScheme: 'purple' | 'teal' }) {
  const scheme = SCHEME[colorScheme];
  return (
    <section>
      <SectionLabel>{s.label}</SectionLabel>
      <SectionHeading>{s.title}</SectionHeading>
      <p className="mt-4 text-muted-foreground leading-relaxed">{s.intro}</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-border bg-white overflow-hidden">
          <div className="px-5 py-3 border-b border-border" style={{ background: scheme.employerGradient }}>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-white/70" />
              <span className="text-sm font-bold text-white">Employer benefits</span>
            </div>
          </div>
          <ul className="p-5 space-y-2.5">
            {s.employerBenefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-snug">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-white overflow-hidden">
          <div className="px-5 py-3 border-b border-border" style={{ background: scheme.employeeGradient }}>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-white/70" />
              <span className="text-sm font-bold text-white">Employee benefits</span>
            </div>
          </div>
          <ul className="p-5 space-y-2.5">
            {s.employeeBenefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-snug">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function TextBlockRenderer({ s }: { s: Extract<ServiceSection, { type: 'text-block' }> }) {
  return (
    <section>
      <SectionLabel>{s.label}</SectionLabel>
      <SectionHeading>{s.title}</SectionHeading>
      <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
        {s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </section>
  );
}

function FaqsRenderer({ s }: { s: Extract<ServiceSection, { type: 'faqs' }> }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section>
      <SectionLabel>FAQs</SectionLabel>
      <SectionHeading>Frequently Asked Questions</SectionHeading>
      <div className="mt-6 divide-y divide-border rounded-2xl border border-border overflow-hidden bg-white">
        {s.items.map((faq, i) => (
          <div key={i}>
            <button
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#f8f8f9] transition-colors gap-4"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="text-sm font-semibold text-secondary pr-4">{faq.q}</span>
              <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-primary/8">
                {open === i ? <Minus className="w-3.5 h-3.5 text-primary" /> : <Plus className="w-3.5 h-3.5 text-primary" />}
              </span>
            </button>
            {open === i && (
              <div className="px-5 pb-5 pt-1">
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Main export ────────────────────────────────────────────────────────────

type Props = {
  sections: ServiceSection[]
  colorScheme: 'purple' | 'teal'
}

export default function ServicePageSections({ sections, colorScheme }: Props) {
  return (
    <>
      {sections.map((s, i) => (
        <div key={i}>
          {i > 0 && <Divider />}
          {s.type === 'service-list' && <ServiceListRenderer s={s} />}
          {s.type === 'intro'        && <IntroRenderer s={s} />}
          {s.type === 'coverage'     && <CoverageRenderer s={s} />}
          {s.type === 'why-buy'      && <WhyBuyRenderer s={s} colorScheme={colorScheme} />}
          {s.type === 'text-block'   && <TextBlockRenderer s={s} />}
          {s.type === 'faqs'         && <FaqsRenderer s={s} />}
        </div>
      ))}
    </>
  );
}
```

- [ ] Commit:
```bash
git add src/components/service-page/ServicePageSections.tsx
git commit -m "feat: add ServicePageSections renderer"
```

---

## Task 3: ServicePageLayout component

**Files:**
- Create: `src/components/service-page/ServicePageLayout.tsx`

- [ ] Create `src/components/service-page/ServicePageLayout.tsx`:

```tsx
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Phone, Mail, ArrowRight, ChevronRight, Trophy, Star } from 'lucide-react';
import { PageLayout } from '@/components/layout';
import { TrustBar } from '@/components/sections/trust';
import type { ServiceEntry } from '@/data/types';

const SCHEME = {
  purple: {
    accentColour: '#be59b8',
    ctaGradient: 'linear-gradient(135deg,#76186f,#5a1254)',
    cardGradient: 'linear-gradient(135deg,#003648 0%,#76186f 100%)',
  },
  teal: {
    accentColour: '#4aaed6',
    ctaGradient: 'linear-gradient(135deg,#003648,#004d6b)',
    cardGradient: 'linear-gradient(135deg,#003648 0%,#00607a 100%)',
  },
} as const;

type Props = {
  entry: Pick<ServiceEntry, 'title' | 'titleAccent' | 'tagline' | 'subtitle' | 'heroImage' | 'colorScheme' | 'stats' | 'sidebarTestimonial'>
  category: 'employee-benefits' | 'international-benefits'
  currentSlug: string
  allServices: ServiceEntry[]
  children: React.ReactNode
}

export default function ServicePageLayout({ entry, category, currentSlug, allServices, children }: Props) {
  const scheme = SCHEME[entry.colorScheme];
  const parentLabel = category === 'employee-benefits' ? 'Employee Benefits' : 'International Benefits';
  const parentHref  = category === 'employee-benefits' ? '/employee-benefits' : null;

  // Build h1: split on titleAccent substring
  const titleBefore = entry.titleAccent ? entry.title.replace(entry.titleAccent, '').trimEnd() : entry.title;

  return (
    <PageLayout className="bg-[#f8f8f9] overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={entry.heroImage ? { backgroundImage: `url(${entry.heroImage})` } : undefined}
      >
        {/* Fallback solid bg when no heroImage */}
        {!entry.heroImage && <div className="absolute inset-0 bg-[#003648]" />}
        {/* Dark overlay mobile */}
        <div className="absolute inset-0 bg-[#003648]/70 lg:hidden" />
        {/* Gradient overlay desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003648]/95 via-[#003648]/80 to-transparent hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/40 text-sm mb-8 flex-wrap">
            <Link href="/" className="hover:text-white/70 transition-colors hidden sm:inline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 hidden sm:inline" />
            {parentHref
              ? <Link href={parentHref} className="hover:text-white/70 transition-colors">{parentLabel}</Link>
              : <span>{parentLabel}</span>
            }
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">{entry.title}</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/80 text-xs font-semibold uppercase tracking-widest mb-6">
            {entry.tagline}
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] max-w-2xl mb-5">
            {entry.titleAccent ? (
              <>
                {titleBefore}
                <span className="block" style={{ color: scheme.accentColour }}>{entry.titleAccent}</span>
              </>
            ) : entry.title}
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-xl mb-8">{entry.subtitle}</p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-14">
            <Link
              href="/get-a-quote"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{ background: scheme.ctaGradient }}
            >
              Get a free quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:01273974419"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" /> 01273 974419
            </a>
          </div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {entry.stats.map((s) => (
              <div key={s.label} className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-4 h-4 md:w-5 md:h-5 text-white/70" />
                </div>
                <div className="min-w-0">
                  <div className="text-xl md:text-2xl font-black text-white leading-none">{s.val}</div>
                  <div className="text-white/45 text-[10px] md:text-xs mt-0.5 leading-tight">{s.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <TrustBar />

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 overflow-x-hidden">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 xl:gap-16">

          {/* Main content */}
          <main className="flex-1 min-w-0 w-full">
            {children}
          </main>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 xl:w-[340px] flex-shrink-0 space-y-5 lg:sticky lg:top-24 self-start">

            {/* CTA card */}
            <div className="rounded-2xl p-6 text-white overflow-hidden relative" style={{ background: scheme.cardGradient }}>
              <img src="/logomark.png" alt="" aria-hidden="true"
                className="absolute -bottom-6 -right-6 w-40 h-40 object-contain opacity-[0.08] brightness-0 invert pointer-events-none select-none" />
              <div className="relative">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold mb-4">
                  FREE consultation
                </div>
                <h3 className="text-xl font-extrabold mb-2 leading-snug text-white">Get expert advice today</h3>
                <p className="text-white/85 text-sm leading-relaxed mb-5">
                  No charge, no obligation — just straightforward advice from our team of specialists.
                </p>
                <Link href="/get-a-quote"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm bg-white text-secondary hover:bg-white/90 transition-colors">
                  Get a free quote <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="mt-3 flex flex-col gap-2">
                  <a href="tel:01273974419" className="flex items-center gap-2 text-sm text-white/85 hover:text-white transition-colors">
                    <Phone className="w-4 h-4" /> 01273 974419
                  </a>
                  <a href="mailto:enquiries@engagehealthgroup.co.uk" className="flex items-center gap-2 text-sm text-white/85 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" /> enquiries@engagehealthgroup.co.uk
                  </a>
                </div>
              </div>
            </div>

            {/* Service links */}
            <div className="rounded-2xl border border-border bg-white p-5">
              <h3 className="font-extrabold text-secondary text-sm uppercase tracking-wider mb-4">Our Services</h3>
              <div className="flex flex-col gap-0.5">
                {allServices.map((svc) => {
                  const isActive = svc.slug === currentSlug;
                  return (
                    <Link
                      key={svc.slug}
                      href={`/${category}/${svc.slug}`}
                      className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${isActive ? 'bg-primary/8' : 'hover:bg-[#f5f4fa]'}`}
                    >
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${isActive ? 'bg-primary' : 'bg-primary/10 group-hover:bg-primary'}`}>
                        <svc.icon className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-white' : 'text-primary group-hover:text-white'}`} />
                      </div>
                      <span className={`text-sm font-medium flex-1 transition-colors ${isActive ? 'text-primary font-semibold' : 'text-gray-700 group-hover:text-secondary'}`}>
                        {svc.title}
                      </span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-primary' : 'text-gray-300 group-hover:text-primary'}`} />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Award badge */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg,#76186f,#003648)' }}>
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-sm leading-snug">Award-winning consultancy</h4>
                  <p className="text-muted-foreground text-xs mt-1 leading-relaxed">
                    Best International Group Advice Firm — UK Health &amp; Protection Awards 2022, 2023 &amp; 2024.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="rounded-2xl border border-border bg-[#f5f4fa] p-5">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-secondary font-medium italic leading-relaxed">
                "{entry.sidebarTestimonial.quote}"
              </p>
              <p className="text-xs text-muted-foreground mt-3">— {entry.sidebarTestimonial.author}</p>
            </div>
          </aside>
        </div>
      </div>

      {/* ── Bottom CTA ───────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-2xl overflow-hidden relative" style={{ background: scheme.cardGradient }}>
          <img src="/logomark.png" alt="" aria-hidden="true"
            className="absolute -bottom-8 -right-8 w-48 h-48 object-contain opacity-[0.07] brightness-0 invert pointer-events-none select-none" />
          <div className="relative p-7 flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/50 mb-2">Speak to a specialist</p>
              <h4 className="text-lg font-extrabold text-white leading-snug mb-1">
                Ready to discover the best quotes for your business?
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Our advisers provide impartial, whole-of-market guidance — free of charge, with no obligation.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <a href="tel:01273974419" className="flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" /> 01273 974419
                </a>
                <a href="mailto:enquiries@engagehealthgroup.co.uk" className="flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" /> enquiries@engagehealthgroup.co.uk
                </a>
              </div>
            </div>
            <Link href="/get-a-quote"
              className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-white text-secondary hover:bg-white/90 transition-colors whitespace-nowrap">
              Get a free quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

    </PageLayout>
  );
}
```

- [ ] Commit:
```bash
git add src/components/service-page/ServicePageLayout.tsx
git commit -m "feat: add ServicePageLayout shell component"
```

---

## Task 4: ServicePage dynamic route handler

**Files:**
- Create: `src/pages/ServicePage.tsx`

- [ ] Create `src/pages/ServicePage.tsx`:

```tsx
import { useParams } from 'wouter';
import type { ServiceEntry } from '@/data/types';
import NotFound from '@/pages/not-found';
import ServicePageLayout from '@/components/service-page/ServicePageLayout';
import ServicePageSections from '@/components/service-page/ServicePageSections';

type Props = {
  category: 'employee-benefits' | 'international-benefits'
  services: ServiceEntry[]
}

export default function ServicePage({ category, services }: Props) {
  const params = useParams<{ slug: string }>();
  const entry = services.find(s => s.slug === params.slug);
  if (!entry) return <NotFound />;
  return (
    <ServicePageLayout
      entry={entry}
      category={category}
      currentSlug={params.slug}
      allServices={services}
    >
      <ServicePageSections sections={entry.sections} colorScheme={entry.colorScheme} />
    </ServicePageLayout>
  );
}
```

- [ ] Commit:
```bash
git add src/pages/ServicePage.tsx
git commit -m "feat: add ServicePage dynamic route handler"
```

---

## Task 5: Employee Benefits data file

**Files:**
- Create: `src/data/employeeBenefitsServices.ts`

- [ ] Create `src/data/employeeBenefitsServices.ts` with the full content below. This file exports 12 entries: 11 full services + 1 GHI stub (sections: [] — exists only for the sidebar list).

```ts
import {
  Heart, Shield, Activity, AlertCircle, Smile, Leaf,
  Users, CreditCard, Key, FileText, Eye, LayoutGrid, Building2, Globe2, Trophy,
} from 'lucide-react';
import type { ServiceEntry } from './types';

export const employeeBenefitsServices: ServiceEntry[] = [
  // ── GHI stub (sidebar only — page is served by GroupHealthInsurance.tsx) ──
  {
    slug: 'group-health-insurance',
    title: 'Group Health Insurance',
    titleAccent: 'Health Insurance',
    tagline: 'UK Group Health Insurance',
    subtitle: 'Build a scheme tailored to your business.',
    icon: Heart,
    colorScheme: 'purple',
    stats: [
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
      { icon: Users,     val: '30+',  label: 'Years combined expertise' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
    ],
    sections: [],
    sidebarTestimonial: {
      quote: 'Excellent service and competitive quotes from a knowledgeable team.',
      author: 'Technology company, London · 12 employees',
    },
  },

  // ── Group Life Insurance ───────────────────────────────────────────────
  {
    slug: 'group-life-insurance',
    title: 'Group Life Insurance',
    titleAccent: 'Life Insurance',
    tagline: 'UK Group Life Insurance',
    subtitle: 'Design and launch a competitive Death in Service scheme that attracts and retains the best talent.',
    icon: Shield,
    colorScheme: 'purple',
    stats: [
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Users,     val: '30+',  label: 'Years combined expertise' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'Engage Health Group works with hundreds of UK businesses to source, implement and manage Group Life Insurance schemes. Our service includes:',
        items: [
          'Whole-of-market quotations from all leading UK insurers',
          'Policy reviews to ensure you are getting the best possible value',
          'Clear explanations of benefit structures and trust arrangements',
          'Administrative support post-implementation',
          'Annual reviews and renewal negotiations',
          'Guidance on HMRC registered and excepted group life schemes',
        ],
        testimonial: 'Engage helped us set up a Death in Service scheme quickly and efficiently. The team was knowledgeable and the process was straightforward.',
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is Group Life Insurance?',
        paragraphs: [
          'Group Life Insurance — commonly known as Death in Service — pays a tax-free lump sum to an employee\'s dependants if they die while employed by your company. The benefit is typically expressed as a multiple of salary, for example 2× or 4× annual salary.',
          'It is one of the most valued and cost-effective employee benefits available. Premiums are treated as a business expense, making it a tax-efficient way to support your workforce.',
          'Group Life Insurance is also referred to as Death in Service benefit, Group Death in Service, or Employer Life Cover.',
        ],
      },
      {
        type: 'coverage',
        label: 'Policy coverage',
        title: 'What does Group Life Insurance cover?',
        intro: 'A Group Life Insurance policy pays out on the death of an insured employee while they are actively employed. Key features include:',
        items: [
          'Lump sum payment to nominated beneficiaries',
          'Benefit expressed as a multiple of salary (e.g. 2×, 3×, 4×)',
          'Cover for all causes of death (subject to policy terms)',
          'Free cover limit — no medical evidence required up to a set amount',
          'Flexible trust arrangements to ensure tax-efficient payment',
          'Option to include terminal illness benefit',
        ],
      },
      {
        type: 'why-buy',
        label: 'The business case',
        title: 'Why offer Group Life Insurance?',
        intro: 'Death in Service is consistently rated as one of the most valued employee benefits. It is also one of the most affordable.',
        employerBenefits: [
          'Highly valued by employees — great for recruitment and retention',
          'Premiums are a tax-deductible business expense',
          'Low cost relative to perceived value',
          'Simple to set up and administer',
          'Demonstrates duty of care to your workforce',
        ],
        employeeBenefits: [
          'Financial security for family and dependants',
          'Benefit paid quickly via a trust',
          'No medical underwriting required up to the free cover limit',
          'Complements personal life insurance provision',
          'Peace of mind while at work',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'How many employees do you need for Group Life Insurance?',
            a: 'Most insurers require a minimum of 2 employees. Some require 3. The scheme does not need to cover all staff — you can restrict to certain grades or departments.',
          },
          {
            q: 'Is Group Life Insurance tax-free for employees?',
            a: 'Yes — when written under a registered group life trust, the lump sum is paid free of income tax and inheritance tax. The trust ensures the benefit falls outside the employee\'s estate.',
          },
          {
            q: 'What is a free cover limit?',
            a: 'The free cover limit (FCL) is the maximum benefit that can be provided without requiring medical evidence from the employee. Amounts above the FCL may require individual underwriting.',
          },
          {
            q: 'What is the difference between registered and excepted group life?',
            a: 'A registered scheme uses HMRC-registered trusts and counts towards the employee\'s lifetime allowance. An excepted scheme falls outside the lifetime allowance and can be more suitable for high earners with large pension pots.',
          },
          {
            q: 'Can part-time employees be included?',
            a: 'Yes — part-time employees can be included. Their benefit is typically calculated on their actual salary or pro-rated hours, depending on the policy terms.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Setting up Death in Service cover for our team was straightforward with Engage. They explained all our options clearly and found us a competitive rate.',
      author: 'Professional services firm, Manchester · 35 employees',
    },
  },

  // ── Group Income Protection ────────────────────────────────────────────
  {
    slug: 'group-income-protection',
    title: 'Group Income Protection',
    titleAccent: 'Income Protection',
    tagline: 'UK Group Income Protection',
    subtitle: 'Source the ideal Group Income Protection scheme to support employees through long-term illness or injury.',
    icon: Activity,
    colorScheme: 'purple',
    stats: [
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Users,     val: '30+',  label: 'Years combined expertise' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'Engage Health Group provides expert advice on Group Income Protection for businesses of all sizes. Our service includes:',
        items: [
          'Whole-of-market quotations from all leading UK insurers',
          'Advice on benefit structure, deferred periods, and benefit limits',
          'Support with scheme set-up and employee communications',
          'Annual reviews to ensure your scheme remains competitive',
          'Claims support and return-to-work assistance',
          'Integration with existing employee benefits programmes',
        ],
        testimonial: 'Engage guided us through the complexity of income protection with real clarity. We now have a scheme our employees genuinely value.',
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is Group Income Protection?',
        paragraphs: [
          'Group Income Protection (GIP) — also known as Group Permanent Health Insurance (PHI) — pays a regular income to employees who are unable to work due to illness or injury. The benefit replaces a proportion of salary (typically 50–75%) after a deferred period.',
          'Unlike sick pay, which is typically limited to a few months, GIP can provide benefit until the employee returns to work, retires, or the policy end date is reached.',
          'It is a powerful benefit for reducing long-term sickness absence and supporting employee wellbeing.',
        ],
      },
      {
        type: 'coverage',
        label: 'Policy coverage',
        title: 'What does Group Income Protection cover?',
        intro: 'Group Income Protection covers employees who are unable to work due to illness or injury. Key features include:',
        items: [
          'Replacement income of 50–75% of salary',
          'Cover after a defined deferred period (typically 13, 26, or 52 weeks)',
          'Benefit paid until return to work, retirement, or policy expiry',
          'Rehabilitation and return-to-work support services',
          'Cover for physical and mental health conditions',
          'Flexible benefit structures to suit your workforce',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'What is the deferred period in Group Income Protection?',
            a: 'The deferred period is the waiting time between when an employee becomes unable to work and when benefit payments begin. Common options are 13, 26, or 52 weeks. A longer deferred period reduces the premium.',
          },
          {
            q: 'How does GIP interact with sick pay?',
            a: 'GIP is designed to begin paying when the employer\'s sick pay ends. The deferred period is typically set to align with the end of the company\'s occupational sick pay policy.',
          },
          {
            q: 'Is Group Income Protection tax deductible?',
            a: 'Premiums are generally treated as a business expense and are tax-deductible. Benefits paid to employees are taxable income in the hands of the employee.',
          },
          {
            q: 'What conditions are covered?',
            a: 'GIP covers inability to work due to any illness or injury, including physical and mental health conditions, subject to policy terms and any exclusions applied at inception.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Our income protection scheme has been invaluable in supporting long-term absent employees and reducing the financial pressure on our business.',
      author: 'Financial services company, London · 80 employees',
    },
  },

  // ── Group Critical Illness ─────────────────────────────────────────────
  {
    slug: 'group-critical-illness',
    title: 'Group Critical Illness',
    titleAccent: 'Critical Illness',
    tagline: 'UK Group Critical Illness Cover',
    subtitle: 'Find the best value Critical Illness cover to support employees through a life-changing diagnosis.',
    icon: AlertCircle,
    colorScheme: 'purple',
    stats: [
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Users,     val: '30+',  label: 'Years combined expertise' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'We help businesses source and implement Group Critical Illness policies that provide meaningful financial support when employees need it most.',
        items: [
          'Whole-of-market comparisons to find the most competitive premiums',
          'Advice on the right benefit level for your workforce',
          'Clear explanation of covered conditions and exclusions',
          'Support with policy set-up and employee communications',
          'Annual reviews and renewal negotiations',
          'Claims guidance when an employee makes a claim',
        ],
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is Group Critical Illness cover?',
        paragraphs: [
          'Group Critical Illness (GCI) cover pays a tax-free lump sum to an employee upon diagnosis of a specified serious illness, such as cancer, heart attack, or stroke. The payment helps employees manage the financial impact of a life-changing diagnosis.',
          'Unlike income protection, which replaces income over time, critical illness pays a one-off lump sum that the employee can use however they choose — to pay off a mortgage, fund private treatment, or adapt their home.',
        ],
      },
      {
        type: 'coverage',
        label: 'Covered conditions',
        title: 'What conditions are typically covered?',
        intro: 'Most Group Critical Illness policies cover a core set of serious conditions. The number and definition of covered conditions varies by insurer.',
        items: [
          'Cancer (excluding less advanced cases)',
          'Heart attack',
          'Stroke',
          'Coronary artery by-pass graft',
          'Kidney failure',
          'Major organ transplant',
          'Multiple sclerosis',
          'Total permanent disability',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'Is the Group Critical Illness payment tax-free?',
            a: 'Yes — when written under a registered group trust, the lump sum is paid free of income tax. The tax treatment should always be confirmed with a qualified adviser.',
          },
          {
            q: 'Can employees add their own critical illness cover on top?',
            a: 'Yes — employees can supplement the group policy with individual critical illness cover. A good broker will advise on the optimal combination.',
          },
          {
            q: 'What is the minimum group size?',
            a: 'Most insurers require a minimum of 5 employees for Group Critical Illness. Some will consider smaller groups — contact our team for guidance.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'When one of our team was diagnosed with cancer, the Critical Illness payout made an enormous difference. We are so glad we had the cover in place.',
      author: 'Marketing agency, Bristol · 22 employees',
    },
  },

  // ── Group Dental Insurance ─────────────────────────────────────────────
  {
    slug: 'group-dental-insurance',
    title: 'Group Dental Insurance',
    titleAccent: 'Dental Insurance',
    tagline: 'UK Group Dental Insurance',
    subtitle: 'Understand your options for business dental insurance and find the right plan for your team.',
    icon: Smile,
    colorScheme: 'purple',
    stats: [
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Users,     val: '30+',  label: 'Years combined expertise' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'We work with leading UK dental insurance providers to find the right group dental plan for your business and budget.',
        items: [
          'Whole-of-market quotations for group dental plans',
          'Advice on cash plan vs. dental insurance structures',
          'Support with employee enrolment and communications',
          'Annual reviews to ensure continued value',
          'Guidance on NHS vs. private dental coverage options',
        ],
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is Group Dental Insurance?',
        paragraphs: [
          'Group Dental Insurance helps employees meet the cost of routine and emergency dental treatment, including check-ups, fillings, crowns, and orthodontics depending on the level of cover chosen.',
          'Dental insurance is one of the most affordable and appreciated employee benefits. With NHS dental availability increasingly limited, employer-funded dental cover is a genuine differentiator in attracting and retaining staff.',
        ],
      },
      {
        type: 'coverage',
        label: 'What\'s covered',
        title: 'What does Group Dental Insurance cover?',
        intro: 'Coverage varies by plan, but typically includes a combination of the following:',
        items: [
          'Routine examinations and check-ups',
          'Dental X-rays',
          'Scale and polish / hygienist appointments',
          'Fillings and extractions',
          'Root canal treatment',
          'Crowns, inlays, and bridges',
          'Emergency dental treatment',
          'Orthodontics (on selected plans)',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'What is the difference between dental insurance and a dental cash plan?',
            a: 'Dental insurance provides cover for dental treatment costs up to policy limits. A dental cash plan reimburses a proportion of the cost of treatment. Cash plans are often lower cost and cover a wider range of treatments including optical and physiotherapy.',
          },
          {
            q: 'Is Group Dental Insurance a taxable benefit?',
            a: 'Yes — Group Dental Insurance is a Benefit in Kind and is taxable. The premium paid by the employer should be reported on the employee\'s P11D form.',
          },
          {
            q: 'Can employees add family members to a group dental plan?',
            a: 'Many group dental plans allow employees to add dependants, including partners and children, often at a discounted group rate.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Our employees love the dental cover. It\'s a small cost to us but makes a real difference to the team.',
      author: 'Retail company, Birmingham · 45 employees',
    },
  },

  // ── Corporate Wellness Programmes ─────────────────────────────────────
  {
    slug: 'corporate-wellness-programmes',
    title: 'Corporate Wellness Programmes',
    titleAccent: 'Wellness Programmes',
    tagline: 'Corporate Wellness',
    subtitle: 'Plan and launch a Corporate Wellness Programme that improves employee health, reduces absence, and drives productivity.',
    icon: Leaf,
    colorScheme: 'purple',
    stats: [
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Users,     val: '30+',  label: 'Years combined expertise' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'We help businesses design and deliver Corporate Wellness Programmes that address the physical, mental, and financial wellbeing of their workforce.',
        items: [
          'Needs analysis and workforce wellbeing assessments',
          'Programme design tailored to your budget and culture',
          'Supplier selection and management across all wellbeing pillars',
          'Employee communications and engagement strategy',
          'Ongoing programme management and reporting',
          'ROI measurement and effectiveness reviews',
        ],
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is a Corporate Wellness Programme?',
        paragraphs: [
          'A Corporate Wellness Programme is a structured approach to improving the health and wellbeing of employees. It typically spans physical, mental, financial, and social wellbeing, bringing together a range of initiatives, tools, and benefits under one strategic framework.',
          'Effective wellness programmes reduce absence, improve productivity, and strengthen employee engagement. Research consistently shows that organisations with strong wellbeing cultures significantly outperform those without.',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'What is included in a Corporate Wellness Programme?',
            a: 'Programmes vary greatly, but commonly include: Employee Assistance Programmes (EAP), health screenings, gym subsidies, mental health support, financial wellbeing resources, healthy eating initiatives, and flexible working policies.',
          },
          {
            q: 'How do I measure the ROI of a wellness programme?',
            a: 'Key metrics include: reduction in sickness absence, improved employee engagement scores, reduced staff turnover, and healthcare cost trends. We help clients establish baseline measurements and track progress over time.',
          },
          {
            q: 'What is the cost of a Corporate Wellness Programme?',
            a: 'Costs vary significantly depending on the scope of the programme. We work with businesses across all budget levels, from low-cost digital-first approaches to comprehensive multi-pillar programmes.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Our wellness programme has transformed our culture. Sickness absence is down and our team genuinely feels that we care about their wellbeing.',
      author: 'Technology company, Edinburgh · 120 employees',
    },
  },

  // ── Employee Assistance Programmes ────────────────────────────────────
  {
    slug: 'employee-assistance-programmes',
    title: 'Employee Assistance Programmes',
    titleAccent: 'Assistance Programmes',
    tagline: 'EAP Services',
    subtitle: 'Find the right Employee Assistance Programme for your workforce — confidential support for mental health, financial stress, and personal challenges.',
    icon: Users,
    colorScheme: 'purple',
    stats: [
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Users,     val: '30+',  label: 'Years combined expertise' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'We help businesses select and implement EAP solutions that provide genuine support to employees and meet your duty of care obligations.',
        items: [
          'Market comparison of leading EAP providers',
          'Advice on service features, counselling session limits, and usage reporting',
          'Support with implementation and employee communications',
          'Integration with existing health and wellbeing benefits',
          'Annual utilisation reviews to ensure ongoing value',
        ],
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is an Employee Assistance Programme?',
        paragraphs: [
          'An Employee Assistance Programme (EAP) is a confidential support service that provides employees with access to professional counselling, legal advice, financial guidance, and other support services — typically via a 24/7 helpline and online portal.',
          'EAPs are one of the most cost-effective employee benefits available, with typical costs of just a few pounds per employee per month. They demonstrate a genuine duty of care and can significantly reduce the impact of personal problems on work performance.',
        ],
      },
      {
        type: 'coverage',
        label: 'Services included',
        title: 'What does an EAP typically include?',
        intro: 'EAP services vary by provider but typically include access to:',
        items: [
          '24/7 confidential telephone helpline',
          'Structured counselling sessions (typically 6–8 per issue)',
          'Legal advice and information',
          'Financial coaching and debt management support',
          'Management referral support',
          'Bereavement and trauma counselling',
          'Online wellbeing resources and self-help tools',
          'Work-life balance support',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'Is an EAP confidential?',
            a: 'Yes — EAP services are strictly confidential. Employers receive only aggregate usage data, not individual employee information. This confidentiality is key to encouraging uptake.',
          },
          {
            q: 'How many counselling sessions are included?',
            a: 'Most EAPs provide 6–8 face-to-face or telephone counselling sessions per presenting issue. Some providers offer unlimited telephone counselling alongside structured in-person sessions.',
          },
          {
            q: 'How do employees access the EAP?',
            a: 'Typically via a dedicated freephone number, online portal, or mobile app — available 24 hours a day, 7 days a week. Access is completely confidential and does not require management approval.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Our EAP has been one of our most valued benefits. Employee feedback is consistently positive and the service has supported staff through some really difficult times.',
      author: 'Charity sector, Oxford · 60 employees',
    },
  },

  // ── Group Health Cash Plan ─────────────────────────────────────────────
  {
    slug: 'group-health-cash-plan',
    title: 'Group Health Cash Plan',
    titleAccent: 'Health Cash Plan',
    tagline: 'Business Health Cash Plans',
    subtitle: 'Understand how a Business Health Cash Plan can help your employees manage everyday healthcare costs.',
    icon: CreditCard,
    colorScheme: 'purple',
    stats: [
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Users,     val: '30+',  label: 'Years combined expertise' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'We compare health cash plan providers to find the right fit for your business needs and employee demographics.',
        items: [
          'Whole-of-market comparison of health cash plan providers',
          'Advice on benefit levels and plan structures',
          'Support with scheme set-up and employee enrolment',
          'Ongoing administration support and annual reviews',
        ],
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is a Group Health Cash Plan?',
        paragraphs: [
          'A Group Health Cash Plan reimburses employees for a wide range of everyday healthcare costs, including dental, optical, physiotherapy, and GP appointments. Unlike private medical insurance, cash plans cover routine treatment rather than acute illness.',
          'Cash plans are one of the most accessible employee benefits, typically costing just a few pounds per employee per month. They are popular across all industry sectors and company sizes.',
        ],
      },
      {
        type: 'coverage',
        label: 'What\'s covered',
        title: 'What does a Health Cash Plan cover?',
        intro: 'Coverage varies by plan and benefit level, but typically includes:',
        items: [
          'Dental treatment (routine and emergency)',
          'Optical (glasses, contact lenses, eye tests)',
          'Physiotherapy and complementary therapies',
          'GP consultations (NHS and private)',
          'Specialist consultations',
          'Hospital stays (NHS cash benefit)',
          'Prescriptions',
          'Mental health support',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'What is the difference between a health cash plan and private medical insurance?',
            a: 'Private medical insurance covers the cost of acute treatment — surgery, specialists, hospital stays. A cash plan reimburses the cost of everyday routine treatments. They complement each other well.',
          },
          {
            q: 'Can employees claim immediately?',
            a: 'Most cash plans require a short waiting period (typically 3 months) before claims can be made. Some treatments may have longer waiting periods.',
          },
          {
            q: 'Is a health cash plan a taxable benefit?',
            a: 'Yes — cash plans are a Benefit in Kind and the employer\'s contribution is taxable. The value of the benefit should be reported on the employee\'s P11D.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Our health cash plan is used by almost every employee. It\'s affordable for us and genuinely useful for the team.',
      author: 'Hospitality business, Leeds · 55 employees',
    },
  },

  // ── Key Person Insurance ───────────────────────────────────────────────
  {
    slug: 'key-person-insurance',
    title: 'Key Person Insurance',
    titleAccent: 'Person Insurance',
    tagline: 'Key Person Cover',
    subtitle: 'Protect your business from the financial impact of losing a key employee through illness, injury, or death.',
    icon: Key,
    colorScheme: 'purple',
    stats: [
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Users,     val: '30+',  label: 'Years combined expertise' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'We help businesses identify key person risk and source appropriate cover to protect against the financial impact of losing a critical individual.',
        items: [
          'Key person risk assessment and benefit calculation',
          'Whole-of-market quotations for life and critical illness cover',
          'Advice on policy structure, ownership, and tax treatment',
          'Support with medical underwriting and policy inception',
          'Annual reviews to ensure cover remains appropriate',
        ],
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is Key Person Insurance?',
        paragraphs: [
          'Key Person Insurance (also known as Key Man Insurance) is a life insurance or critical illness policy taken out by a business on the life of an individual whose skills, knowledge, or relationships are critical to the business\'s success.',
          'If the key person dies or is diagnosed with a critical illness, the policy pays a lump sum to the business to help it survive the loss — covering costs such as recruitment, training, lost profits, or debt repayment.',
          'The policy is owned by the business and the business receives the benefit. Premiums are paid by the business and may be treated as a business expense depending on the structure.',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'Who qualifies as a key person?',
            a: 'Any individual whose loss would significantly impact the business — typically founders, directors, senior managers, top sales performers, or individuals with specialist knowledge or key client relationships.',
          },
          {
            q: 'How much cover do I need?',
            a: 'The sum insured is typically calculated based on the cost of recruiting and training a replacement, the individual\'s contribution to profits, or a multiple of salary. We help you arrive at an appropriate figure.',
          },
          {
            q: 'Are Key Person Insurance premiums tax-deductible?',
            a: 'This depends on the purpose of the cover and HMRC\'s guidelines. Premiums may be tax-deductible if the policy is purely to protect against loss of profit. We recommend seeking specialist tax advice on your specific circumstances.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Key Person cover gave our investors and our team confidence that we could survive the loss of our most critical people.',
      author: 'Technology start-up, Cambridge · 18 employees',
    },
  },

  // ── Relevant Life Insurance ────────────────────────────────────────────
  {
    slug: 'relevant-life-insurance',
    title: 'Relevant Life Insurance',
    titleAccent: 'Life Insurance',
    tagline: 'Relevant Life Cover',
    subtitle: 'Set up a Relevant Life policy — a tax-efficient way to provide individual life cover for directors and employees.',
    icon: FileText,
    colorScheme: 'purple',
    stats: [
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Users,     val: '30+',  label: 'Years combined expertise' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'We advise business owners and HR teams on Relevant Life policies — a highly tax-efficient alternative to group life insurance for smaller businesses and high earners.',
        items: [
          'Clear explanation of tax efficiency and suitability',
          'Whole-of-market quotations from all leading insurers',
          'Support with trust arrangements and policy documentation',
          'Guidance on appropriate benefit levels',
          'Annual reviews and policy management',
        ],
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is Relevant Life Insurance?',
        paragraphs: [
          'Relevant Life Insurance is an individual life insurance policy taken out by a business for the benefit of an employee or director. It pays a tax-free lump sum to the employee\'s beneficiaries in the event of death.',
          'Unlike Group Life Insurance, Relevant Life is an individual policy and is particularly suitable for director-only companies, small businesses that do not qualify for group schemes, or high earners who want cover that does not count towards their lifetime pension allowance.',
          'Premiums are paid by the employer and are treated as a business expense. The benefit is paid via a discretionary trust and is free of income tax and inheritance tax.',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'Who is Relevant Life Insurance suitable for?',
            a: 'It is particularly well suited to: company directors with no other employees, small businesses that don\'t meet minimum group life requirements, and high earners with large pension pots who want additional death benefit outside the lifetime allowance.',
          },
          {
            q: 'What are the tax advantages of Relevant Life Insurance?',
            a: 'Premiums are deductible as a business expense. There is no Benefit in Kind tax for the employee. The benefit is paid via trust, so it falls outside the estate and is free of inheritance tax. These combined advantages can make it significantly cheaper than a personal life policy.',
          },
          {
            q: 'Does Relevant Life count towards the pension lifetime allowance?',
            a: 'No — Relevant Life Insurance does not count towards the pension lifetime allowance, making it a valuable option for high earners who have maximised their pension provisions.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'As a company director, Relevant Life cover was exactly what I needed — great tax efficiency and meaningful protection for my family.',
      author: 'Company Director, consultancy firm · London',
    },
  },

  // ── Employee Health Screening ──────────────────────────────────────────
  {
    slug: 'employee-health-screening',
    title: 'Employee Health Screening',
    titleAccent: 'Health Screening',
    tagline: 'Corporate Health Screening',
    subtitle: 'Protect the future health and wellbeing of your team with a structured Employee Health Screening programme.',
    icon: Eye,
    colorScheme: 'purple',
    stats: [
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Users,     val: '30+',  label: 'Years combined expertise' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'We help businesses design and source Employee Health Screening programmes that identify health risks early and support long-term workforce wellbeing.',
        items: [
          'Programme design tailored to your workforce demographics',
          'Provider selection and procurement across all screening types',
          'On-site and off-site screening co-ordination',
          'Individual results reporting and follow-up referral pathways',
          'Aggregate workforce health analytics and reporting',
          'Integration with existing health and wellbeing benefits',
        ],
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is Employee Health Screening?',
        paragraphs: [
          'Employee Health Screening involves offering employees a range of clinical tests and assessments to identify potential health issues before they become serious problems. Screening can cover cardiovascular risk, diabetes, cancer markers, musculoskeletal health, and mental wellbeing.',
          'Regular health screening demonstrates a genuine commitment to employee wellbeing, can reduce long-term absence through early intervention, and helps employees take control of their own health.',
        ],
      },
      {
        type: 'coverage',
        label: 'Screening types',
        title: 'What can Employee Health Screening include?',
        intro: 'Screening programmes are highly customisable. Common components include:',
        items: [
          'Full blood count and cholesterol testing',
          'Blood pressure and cardiovascular risk assessment',
          'BMI, body composition, and lifestyle analysis',
          'Blood glucose (diabetes risk)',
          'Cancer awareness checks',
          'Musculoskeletal assessment',
          'Mental health and stress assessments',
          'Vision and hearing tests',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'Is Employee Health Screening tax-efficient?',
            a: 'Medical examinations and health screening provided by an employer are generally exempt from Benefit in Kind tax, subject to HMRC guidance. We recommend confirming the tax treatment for your specific circumstances.',
          },
          {
            q: 'How often should employees be screened?',
            a: 'Annual screening is most common, though biennial screening is used by some organisations. The frequency depends on the workforce\'s age profile and the nature of the screening offered.',
          },
          {
            q: 'How are screening results handled?',
            a: 'Individual results are strictly confidential and shared only with the employee. Employers receive aggregate anonymised data to understand workforce health trends, without access to individual employee health information.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Our screening programme has genuinely improved the health of our workforce. Several employees have had early-stage conditions identified that they were unaware of.',
      author: 'Manufacturing company, Midlands · 200 employees',
    },
  },

  // ── Employee Benefits Platforms ────────────────────────────────────────
  {
    slug: 'employee-benefits-platforms',
    title: 'Employee Benefits Platforms',
    titleAccent: 'Benefits Platforms',
    tagline: 'Benefits Technology',
    subtitle: 'Find the right benefits platform to engage your workforce, simplify administration, and maximise the value of your benefits investment.',
    icon: LayoutGrid,
    colorScheme: 'purple',
    stats: [
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Users,     val: '30+',  label: 'Years combined expertise' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'We help businesses select and implement Employee Benefits Platforms that increase employee engagement, reduce HR administration, and showcase the true value of your benefits spend.',
        items: [
          'Platform needs assessment and requirements gathering',
          'Market comparison of leading benefits technology providers',
          'Implementation support and data migration',
          'Employee communications and onboarding',
          'Integration with payroll and HR systems',
          'Ongoing platform management and reporting support',
        ],
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is an Employee Benefits Platform?',
        paragraphs: [
          'An Employee Benefits Platform (also known as a benefits portal or flex platform) is a technology solution that enables employees to view, select, and manage their benefits online — typically through a branded web portal or mobile app.',
          'Modern platforms can accommodate flexible benefits (where employees choose from a menu), voluntary benefits (employee-funded discounts and extras), and total reward statements that show the full value of employment.',
          'For HR teams, platforms automate enrolment, reduce paperwork, and provide real-time reporting on benefit uptake and cost.',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'What size business needs a benefits platform?',
            a: 'Platforms are increasingly accessible to businesses of all sizes. Some solutions are cost-effective for companies with as few as 25 employees, while enterprise platforms scale to thousands of users.',
          },
          {
            q: 'Can a benefits platform handle salary sacrifice?',
            a: 'Yes — most modern benefits platforms are built to manage salary sacrifice arrangements for pensions, cycle-to-work, childcare vouchers, and electric vehicles, with automatic payroll integration.',
          },
          {
            q: 'How long does implementation take?',
            a: 'Implementation typically takes 8–16 weeks, depending on the complexity of your benefits portfolio, payroll integration requirements, and data migration needs.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Our benefits platform transformed the way employees engage with their benefits. Uptake is up significantly and HR time on administration is down.',
      author: 'Professional services firm, London · 150 employees',
    },
  },
];
```

- [ ] Commit:
```bash
git add src/data/employeeBenefitsServices.ts
git commit -m "feat: add Employee Benefits services data (11 services + GHI stub)"
```

---

## Task 6: International Benefits data file

**Files:**
- Create: `src/data/internationalBenefitsServices.ts`

- [ ] Create `src/data/internationalBenefitsServices.ts`:

```ts
import {
  Globe2, Shield, Activity, AlertCircle, Plane, Lock,
  Clock, Users, ShieldCheck, ClipboardList, Building2, Trophy, Package,
} from 'lucide-react';
import type { ServiceEntry } from './types';

export const internationalBenefitsServices: ServiceEntry[] = [

  // ── Int Business Health Insurance ─────────────────────────────────────
  {
    slug: 'int-business-health-insurance',
    title: 'International Business Health Insurance',
    titleAccent: 'Health Insurance',
    tagline: 'International Health Insurance',
    subtitle: 'Set up a comprehensive International Health Insurance scheme for employees working or living abroad.',
    icon: Globe2,
    colorScheme: 'teal',
    stats: [
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Users,     val: '30+',  label: 'Years combined expertise' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'As award-winning international health insurance specialists, we help businesses source, implement, and manage international health schemes for globally mobile employees.',
        items: [
          'Whole-of-market comparisons across all leading international health insurers',
          'Advice on scheme design, area of cover, and benefit levels',
          'Policy implementation and employee onboarding support',
          'Claims assistance and insurer liaison',
          'Annual reviews and renewal negotiations',
          'Advice on local regulatory requirements in key markets',
        ],
        testimonial: 'Engage has been an outstanding partner for our international health programme. Their knowledge of global markets is unmatched.',
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is International Business Health Insurance?',
        paragraphs: [
          'International Business Health Insurance provides private healthcare cover for employees who are working or living outside their home country. It ensures employees have access to quality medical treatment wherever they are based, without relying on local state health systems.',
          'Schemes can cover individuals, families, and entire global workforces. Cover is typically available worldwide or within defined regions, with options to include or exclude the USA.',
          'It is also referred to as Expatriate Health Insurance, International Private Medical Insurance (IPMI), or Global Health Insurance.',
        ],
      },
      {
        type: 'coverage',
        label: 'Policy coverage',
        title: 'What does International Health Insurance cover?',
        intro: 'Cover varies by plan, but comprehensive international health policies typically include:',
        items: [
          'Inpatient and day-patient hospital treatment',
          'Outpatient consultations and diagnostic tests',
          'Emergency evacuation and repatriation',
          'Maternity and newborn care',
          'Mental health treatment',
          'Cancer treatment',
          'Dental and optical (on selected plans)',
          'Chronic condition management (on selected plans)',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'What is the difference between international and domestic health insurance?',
            a: 'Domestic health insurance (such as UK PMI) only covers treatment in the home country. International health insurance provides cover across multiple countries or regions, making it essential for expatriate employees.',
          },
          {
            q: 'Can families be included on an international health policy?',
            a: 'Yes — most international health policies allow employees to add their spouse or partner and dependent children. Family rates vary by insurer and region.',
          },
          {
            q: 'Does international health insurance cover evacuation?',
            a: 'Most comprehensive international health policies include emergency medical evacuation — the cost of transporting an employee to the nearest appropriate medical facility or back to their home country for treatment.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Engage handled our entire global health programme across 15 countries. The service has been exceptional from day one.',
      author: 'Global NGO, London HQ · 400 internationally mobile employees',
    },
  },

  // ── International Group Life Insurance ────────────────────────────────
  {
    slug: 'international-group-life-insurance',
    title: 'International Group Life Insurance',
    titleAccent: 'Group Life Insurance',
    tagline: 'Global Group Life Cover',
    subtitle: 'Design and launch a bespoke global life insurance scheme for your internationally mobile workforce.',
    icon: Shield,
    colorScheme: 'teal',
    stats: [
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Users,     val: '30+',  label: 'Years combined expertise' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'We help multinational organisations design and implement International Group Life Insurance schemes that provide consistent death benefit coverage across multiple jurisdictions.',
        items: [
          'Global scheme design and benefit benchmarking',
          'Whole-of-market comparisons for international group life providers',
          'Advice on pooling arrangements and multinational networks',
          'Support with local regulatory and trust requirements',
          'Policy implementation and employee communications',
          'Annual global reviews and renewal management',
        ],
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is International Group Life Insurance?',
        paragraphs: [
          'International Group Life Insurance provides death-in-service benefit for employees working outside their home country. It pays a lump sum — typically a multiple of salary — to the employee\'s beneficiaries if they die while employed.',
          'Global schemes can be structured as a single multinational policy or a series of local policies co-ordinated through an international network, depending on the size and spread of the workforce.',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'Can we include employees in all countries on one policy?',
            a: 'For larger organisations, multinational pooling arrangements allow multiple country policies to be managed under a single global programme, with consolidated reporting and potential profit-sharing. For smaller groups, individual country policies may be more appropriate.',
          },
          {
            q: 'How is the benefit paid when an employee dies abroad?',
            a: 'Payment procedures vary by policy and jurisdiction. We help clients establish clear claims processes and trust structures to ensure benefits are paid efficiently to dependants, wherever they are based.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Our international life programme is well managed and competitively priced. Engage has been a reliable and knowledgeable partner.',
      author: 'Multinational engineering firm · 250 internationally mobile employees',
    },
  },

  // ── International Group Income Protection ─────────────────────────────
  {
    slug: 'international-group-income-protection',
    title: 'International Group Income Protection',
    titleAccent: 'Income Protection',
    tagline: 'Global Income Protection',
    subtitle: 'Manage a long-term disability income scheme for your globally mobile and expatriate workforce.',
    icon: Activity,
    colorScheme: 'teal',
    stats: [
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Users,     val: '30+',  label: 'Years combined expertise' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'We help organisations source and manage international income protection schemes that provide financial security for employees who become unable to work due to illness or injury, wherever they are based.',
        items: [
          'Scheme design and benefit structure advice',
          'Whole-of-market comparison of international income protection providers',
          'Support with policy documentation and employee communications',
          'Claims management assistance across multiple jurisdictions',
          'Annual reviews and global renewal management',
        ],
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is International Group Income Protection?',
        paragraphs: [
          'International Group Income Protection provides a regular income replacement benefit for expatriate or internationally mobile employees who are unable to work due to long-term illness or injury. It complements local state disability provision and ensures employees maintain financial security regardless of where they are based.',
          'Benefit levels are typically expressed as a percentage of salary (50–75%), payable after a defined deferred period.',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'How do state disability benefits interact with international income protection?',
            a: 'International income protection is typically designed to supplement — not replace — state disability benefits. The policy benefit is often offset against any state or social security disability payments to avoid over-insurance.',
          },
          {
            q: 'Which countries can be included?',
            a: 'Most international income protection providers can include employees in the majority of countries worldwide, though some high-risk or sanctioned territories may be excluded. We advise on specific country availability.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'International income protection was an important gap in our global benefits programme. Engage found us a competitive solution that covers all our key markets.',
      author: 'Global media company · 180 internationally mobile employees',
    },
  },

  // ── International Group Critical Illness ──────────────────────────────
  {
    slug: 'international-group-critical-illness',
    title: 'International Group Critical Illness',
    titleAccent: 'Critical Illness',
    tagline: 'Global Critical Illness Cover',
    subtitle: 'Design, implement, and manage a bespoke international critical illness policy for your global workforce.',
    icon: AlertCircle,
    colorScheme: 'teal',
    stats: [
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Users,     val: '30+',  label: 'Years combined expertise' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'We advise multinational organisations on sourcing and structuring international critical illness cover that provides meaningful financial protection for employees facing a serious diagnosis abroad.',
        items: [
          'Scheme design and benefit benchmarking',
          'Provider selection across international insurance markets',
          'Policy implementation and trust arrangement support',
          'Employee communications and awareness campaigns',
          'Claims support and insurer liaison',
          'Annual programme reviews',
        ],
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is International Group Critical Illness cover?',
        paragraphs: [
          'International Group Critical Illness cover pays a lump sum to an employee diagnosed with a specified serious illness, such as cancer, heart attack, or stroke, while working abroad. The payment provides financial support to help the employee manage the impact of their diagnosis.',
          'Cover can be structured as a standalone international policy or as part of a broader global benefits programme alongside health insurance and life cover.',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'Can international critical illness cover be purchased alongside international health insurance?',
            a: 'Yes — and it is often recommended. International health insurance covers the cost of treatment; critical illness cover provides a separate lump sum to the employee to cover other financial impacts of a serious diagnosis.',
          },
          {
            q: 'Is the lump sum paid regardless of where the employee is based?',
            a: 'Yes — international critical illness cover is designed to pay wherever the employee is located, subject to policy terms and any applicable sanctions restrictions.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Engage helped us close a significant gap in our global benefits programme by adding international critical illness cover. Professional and efficient throughout.',
      author: 'International development organisation · 300 overseas employees',
    },
  },

  // ── Group Business Travel Insurance ───────────────────────────────────
  {
    slug: 'group-business-travel-insurance',
    title: 'Group Business Travel Insurance',
    titleAccent: 'Travel Insurance',
    tagline: 'Business Travel Insurance',
    subtitle: 'Understand your options for Group Business Travel Insurance and protect your employees on every trip.',
    icon: Plane,
    colorScheme: 'teal',
    stats: [
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Users,     val: '30+',  label: 'Years combined expertise' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'We help businesses source annual business travel insurance policies that cover all employees travelling for work, without the need to arrange cover trip by trip.',
        items: [
          'Whole-of-market comparison of business travel insurance providers',
          'Advice on geographic scope, trip duration limits, and benefit levels',
          'Support with policy documentation and travel risk assessments',
          'Integration with travel management processes',
          'Annual reviews and renewal management',
          'Claims support and assistance services',
        ],
      },
      {
        type: 'coverage',
        label: 'What\'s covered',
        title: 'What does Group Business Travel Insurance cover?',
        intro: 'Comprehensive business travel policies typically include:',
        items: [
          'Emergency medical treatment and hospitalisation',
          'Medical evacuation and repatriation',
          'Trip cancellation and curtailment',
          'Lost, stolen, or delayed baggage',
          'Travel delay and missed departures',
          'Personal accident cover',
          'Business equipment and money',
          '24/7 worldwide assistance helpline',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'What is the difference between business travel insurance and personal travel insurance?',
            a: 'Business travel insurance is specifically designed for work-related travel and covers business equipment, professional liability, and scenarios not covered by standard personal policies.',
          },
          {
            q: 'Does business travel insurance cover high-risk destinations?',
            a: 'Standard policies exclude travel to destinations subject to FCO/FCDO "Do not travel" advisories. Specialist high-risk country cover is available as an extension or via a separate policy.',
          },
          {
            q: 'Can the policy cover employees travelling to the USA?',
            a: 'Yes — most business travel policies include USA cover, though this significantly increases the premium due to the high cost of US healthcare. Some policies offer a USA-excluded option at a lower premium.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Our annual business travel policy gives us peace of mind for every trip. Engage found us comprehensive cover at a very competitive price.',
      author: 'Consulting firm, London · 70 travelling employees',
    },
  },

  // ── Kidnap and Ransom Insurance ────────────────────────────────────────
  {
    slug: 'kidnap-and-ransom-insurance',
    title: 'Kidnap and Ransom Insurance',
    titleAccent: 'and Ransom Insurance',
    tagline: 'K&R Insurance',
    subtitle: 'Safeguard and support your employees operating in high-risk environments with specialist K&R cover.',
    icon: Lock,
    colorScheme: 'teal',
    stats: [
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Users,     val: '30+',  label: 'Years combined expertise' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'We work with specialist K&R insurers to provide businesses with comprehensive kidnap, ransom, and extortion cover for employees working in elevated-risk environments.',
        items: [
          'Risk assessment and policy design consultation',
          'Access to specialist K&R insurance markets',
          'Advice on crisis response and retainer services',
          'Policy documentation and crisis management protocol support',
          'Integration with wider international benefits and travel programmes',
          'Confidential policy management',
        ],
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is Kidnap and Ransom Insurance?',
        paragraphs: [
          'Kidnap and Ransom (K&R) Insurance provides financial protection and specialist crisis response support for businesses whose employees travel to or work in high-risk regions. In the event of a kidnapping, extortion threat, or illegal detention, the policy covers ransom payments, crisis management fees, and associated costs.',
          'Crucially, most K&R policies include access to expert crisis response consultants who manage the situation from the outset — their expertise is often more valuable than the financial cover itself.',
          'K&R policies are strictly confidential — the existence of cover must not be disclosed, as this can increase risk.',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'Who needs Kidnap and Ransom Insurance?',
            a: 'Any organisation with employees travelling to or working in regions with elevated security risk — including parts of Africa, the Middle East, Latin America, and Southeast Asia. Industries such as oil and gas, construction, NGOs, and media are particularly exposed.',
          },
          {
            q: 'What does K&R insurance actually cover?',
            a: 'Typically: ransom payments, crisis consultancy fees, personal accident benefit for the victim, legal liability, repatriation costs, and psychological support following release.',
          },
          {
            q: 'Should employees know about the K&R policy?',
            a: 'No — K&R policies are strictly confidential. Knowledge of the policy can increase the risk of an incident. Only senior management and the insurer should be aware of its existence.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Knowing our people in high-risk regions are covered — and that crisis experts are on standby — gives us and our employees genuine peace of mind.',
      author: 'International NGO · Operations in 20+ countries',
    },
  },

  // ── Short-Term Int Health Insurance ───────────────────────────────────
  {
    slug: 'short-term-int-health-insurance',
    title: 'Short-Term International Health Insurance',
    titleAccent: 'Health Insurance',
    tagline: 'Short-Term International Cover',
    subtitle: 'Source a variety of individually tailored short-term international health insurance quotes for temporary assignments abroad.',
    icon: Clock,
    colorScheme: 'teal',
    stats: [
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Users,     val: '30+',  label: 'Years combined expertise' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'We source short-term international health insurance for employees on temporary overseas assignments — from a few months to two years.',
        items: [
          'Rapid quotations from specialist short-term international health insurers',
          'Advice on appropriate benefit levels for the destination country',
          'Cover for individuals and accompanying family members',
          'Simple online or telephone application process',
          'Claims support for the duration of the assignment',
        ],
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is Short-Term International Health Insurance?',
        paragraphs: [
          'Short-Term International Health Insurance provides private medical cover for employees going on a temporary overseas assignment, typically lasting between one month and two years. It bridges the gap between the employee\'s home country health coverage and local healthcare provision in the destination country.',
          'It is particularly useful for project-based assignments, secondments, and employees who are not yet eligible for a full expatriate health plan.',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'How is short-term different from full expatriate health insurance?',
            a: 'Short-term policies are designed for assignments of up to 1–2 years and are typically simpler and lower cost than full IPMI policies. They are ideal for temporary or project-based assignments.',
          },
          {
            q: 'Can cover be extended if the assignment is extended?',
            a: 'In most cases, yes — short-term policies can be extended up to the insurer\'s maximum period. If the assignment becomes longer term, a full IPMI policy may be more appropriate.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Short-term cover was exactly what our assignee needed for a 6-month project abroad. Engage arranged it quickly and at a fair price.',
      author: 'Construction company · UK-based, project in Southeast Asia',
    },
  },

  // ── Int Employee Assistance Programmes ────────────────────────────────
  {
    slug: 'int-employee-assistance-programmes',
    title: 'International Employee Assistance Programmes',
    titleAccent: 'Assistance Programmes',
    tagline: 'International EAP',
    subtitle: 'Design, launch, and manage a tailored EAP for your internationally mobile or expatriate workforce.',
    icon: Users,
    colorScheme: 'teal',
    stats: [
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Users,     val: '30+',  label: 'Years combined expertise' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'We help organisations source and implement International EAP solutions that provide meaningful, culturally appropriate support for globally dispersed employees.',
        items: [
          'Market comparison of international EAP providers',
          'Advice on multilingual and multicultural service capabilities',
          'Programme design for globally dispersed workforces',
          'Implementation and employee awareness campaigns',
          'Utilisation reporting and programme effectiveness reviews',
          'Integration with international health and wellbeing benefits',
        ],
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is an International EAP?',
        paragraphs: [
          'An International Employee Assistance Programme provides confidential counselling, mental health support, and practical advice services to employees wherever they are in the world. Services are available in multiple languages and are culturally adapted to the regions in which your employees are based.',
          'For expatriate employees, the challenges of relocation — cultural adjustment, family separation, and isolation — make EAP support particularly valuable.',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'In how many languages are international EAP services available?',
            a: 'Leading international EAP providers offer services in 30–50+ languages, including in-country counsellors and telephone support in most major markets.',
          },
          {
            q: 'Can family members of expatriate employees access the EAP?',
            a: 'Most international EAP programmes extend coverage to accompanying family members — often the most important feature for relocated employees who face the dual challenge of work and family adjustment.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Our international EAP has been critical in supporting our globally dispersed team. The multilingual capability and 24/7 access make it genuinely useful.',
      author: 'Technology company · Employees in 30 countries',
    },
  },

  // ── International Security Services ───────────────────────────────────
  {
    slug: 'international-security-services',
    title: 'International Security Services',
    titleAccent: 'Security Services',
    tagline: 'Global Security Services',
    subtitle: 'Locate and commission the best International Security Services to protect your employees in high-risk environments.',
    icon: ShieldCheck,
    colorScheme: 'teal',
    stats: [
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Users,     val: '30+',  label: 'Years combined expertise' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'We connect businesses with specialist international security providers who can deliver the right level of protection for employees operating in complex or high-risk environments.',
        items: [
          'Security risk assessment and threat analysis',
          'Introduction to vetted international security providers',
          'Advice on appropriate security measures by region and industry',
          'Integration with K&R insurance and crisis response planning',
          'Ongoing security intelligence and travel advisory services',
          'Employee security awareness training co-ordination',
        ],
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What are International Security Services?',
        paragraphs: [
          'International Security Services encompass a range of protective measures for employees and organisations operating in elevated-risk environments. Services include close protection, secure transport, residence security, and real-time threat intelligence.',
          'For organisations with a duty of care to employees in complex environments, security services are increasingly a standard component of the international benefits package alongside health insurance and K&R cover.',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'What level of security do we need for our overseas employees?',
            a: 'The appropriate level of security depends on the destination country, industry sector, employee profile, and nature of the work. We conduct a risk assessment to recommend proportionate measures.',
          },
          {
            q: 'Can security services be integrated with travel insurance and K&R cover?',
            a: 'Yes — and this integrated approach is recommended. A holistic duty-of-care programme combining security services, K&R insurance, and international health cover provides comprehensive protection.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Engage helped us put a proper security framework in place for our teams in high-risk markets. The peace of mind for employees and management is invaluable.',
      author: 'Energy company · Operations in West Africa and the Middle East',
    },
  },

  // ── Pre-Assignment Screening ───────────────────────────────────────────
  {
    slug: 'pre-assignment-screening',
    title: 'Pre-Assignment Screening',
    titleAccent: 'Screening',
    tagline: 'Pre-Assignment Health Screening',
    subtitle: 'Learn how to apply Pre-Assignment Screening to protect your employees and your organisation before international deployments.',
    icon: ClipboardList,
    colorScheme: 'teal',
    stats: [
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Users,     val: '30+',  label: 'Years combined expertise' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'We help organisations source and implement Pre-Assignment Screening programmes that assess employee fitness for overseas deployment and reduce risk for both employee and employer.',
        items: [
          'Programme design and supplier selection for pre-assignment screening',
          'Country-specific health requirement guidance',
          'Vaccination and travel medicine referrals',
          'Psychological fitness for role assessments',
          'Results management and confidential reporting',
          'Integration with international health and security programmes',
        ],
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is Pre-Assignment Screening?',
        paragraphs: [
          'Pre-Assignment Screening involves assessing the health, fitness, and suitability of an employee before they are deployed on an international assignment. It may include medical examinations, vaccination status checks, psychological assessments, and destination-specific health briefings.',
          'Screening protects employees from being placed in environments that could be detrimental to their health, and helps organisations meet their duty-of-care obligations.',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'Is Pre-Assignment Screening mandatory?',
            a: 'It is not legally mandatory in the UK, but it is considered best practice and forms part of an employer\'s duty of care under health and safety legislation. Some insurers and host countries require it.',
          },
          {
            q: 'What happens if an employee fails their pre-assignment screening?',
            a: 'Results are shared with the employee in confidence. The employer receives a fitness-to-travel recommendation (not the underlying medical detail). This allows informed deployment decisions while respecting employee privacy.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Pre-assignment screening is now standard practice before any overseas deployment. Engage helped us design a scalable programme that protects our people.',
      author: 'Infrastructure company · Operations in 15 countries',
    },
  },

  // ── US Company Health Insurance ────────────────────────────────────────
  {
    slug: 'us-company-health-insurance',
    title: 'US Company Health Insurance',
    titleAccent: 'Health Insurance',
    tagline: 'US Health Insurance',
    subtitle: 'Gain a clear picture of how US healthcare works and find the right health insurance solution for your US-based employees.',
    icon: Building2,
    colorScheme: 'teal',
    stats: [
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Users,     val: '30+',  label: 'Years combined expertise' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'We help UK-based businesses with US employees navigate the complexity of the American healthcare system and source appropriate employer-sponsored health insurance.',
        items: [
          'Education on US healthcare market structures and terminology',
          'Comparison of employer-sponsored health plan options (HMO, PPO, HDHP)',
          'Advice on ACA compliance obligations for US employers',
          'Liaison with US-based brokers and carriers',
          'Integration with international group health programmes',
          'Ongoing support for US plan renewals and employee queries',
        ],
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'How does US Company Health Insurance work?',
        paragraphs: [
          'Unlike the UK, the US has no universal healthcare system. Employer-sponsored health insurance is the primary source of health coverage for most working Americans, and providing it is both a legal obligation (for larger employers under the ACA) and a critical factor in attracting and retaining US talent.',
          'The US health insurance market is highly complex, with multiple plan structures (HMOs, PPOs, HDHPs), a vast network of carriers, and significant variation by state. UK-based businesses expanding into the US often find this the most challenging aspect of employing US staff.',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'Are UK businesses required to provide health insurance to US employees?',
            a: 'Under the Affordable Care Act (ACA), employers with 50 or more full-time equivalent US employees must offer minimum essential health coverage or face penalties. Smaller employers are not mandated but typically need to offer cover to compete in the talent market.',
          },
          {
            q: 'What is the difference between an HMO and a PPO?',
            a: 'An HMO (Health Maintenance Organization) requires employees to use a defined network of providers and typically requires GP referrals. A PPO (Preferred Provider Organization) offers more flexibility to use out-of-network providers at higher cost. PPOs are generally more expensive but preferred by employees who value choice.',
          },
          {
            q: 'Can US employees be included on our international health policy?',
            a: 'Generally not — most IPMI policies specifically exclude the USA due to the extremely high cost of US healthcare. US employees typically need a separate employer-sponsored health plan.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Navigating US healthcare from the UK was daunting. Engage simplified the process enormously and we now have a compliant, competitive health plan for our US team.',
      author: 'UK fintech company · US office in New York · 25 US employees',
    },
  },

  // ── Additional International Products ─────────────────────────────────
  {
    slug: 'additional-international-products',
    title: 'Additional International Products',
    titleAccent: 'International Products',
    tagline: 'More International Solutions',
    subtitle: 'Professional advice and guidance on the full spectrum of international employee benefit and risk management solutions.',
    icon: Package,
    colorScheme: 'teal',
    stats: [
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Users,     val: '30+',  label: 'Years combined expertise' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'Beyond our core international product range, Engage Health Group provides specialist advice on a wide range of international employee benefit and protection solutions.',
        items: [
          'International accident and disability cover',
          'Multinational pooling and captive arrangements',
          'International pension and retirement benefit advice',
          'Global benefits audit and benchmarking',
          'Country-specific compliance and regulatory guidance',
          'Bespoke scheme design for complex multinational workforces',
        ],
      },
      {
        type: 'text-block',
        label: 'Speak to our team',
        title: 'Not sure what you need?',
        paragraphs: [
          'International employee benefits can be complex, especially when managing a workforce across multiple countries and jurisdictions. If you are not sure which products are right for your organisation, our experienced team will guide you through the options.',
          'We take a consultative approach — understanding your business, your people, and your budget before recommending solutions. All advice is provided free of charge with no obligation.',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'What is multinational pooling?',
            a: 'Multinational pooling allows organisations with employees in multiple countries to combine their local employee benefit policies into a single international programme, often with the potential to receive a profit share based on favourable claims experience across the pool.',
          },
          {
            q: 'Can you help with benefits in countries where we only have a few employees?',
            a: 'Yes — we regularly help organisations manage benefits for small employee populations in individual countries, where local knowledge and insurer relationships are critical to finding appropriate, cost-effective cover.',
          },
          {
            q: 'How do I know if my international benefits are competitive?',
            a: 'We offer international benefits benchmarking services that compare your current provision against market norms in each country where you employ staff, helping you identify gaps and prioritise investment.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Engage is our go-to partner for anything international. Whatever the question, they know the answer or know who does.',
      author: 'Global professional services firm · 500+ internationally mobile employees',
    },
  },
];
```

- [ ] Commit:
```bash
git add src/data/internationalBenefitsServices.ts
git commit -m "feat: add International Benefits services data (12 services)"
```

---

## Task 7: Refactor GroupHealthInsurance.tsx

**Files:**
- Modify: `src/pages/GroupHealthInsurance.tsx`

The goal is to replace the bespoke hero + sidebar + TrustBar + bottom CTA with `ServicePageLayout`, while keeping all the main content JSX unchanged. The `SectionLabel`, `SectionHeading`, and `Divider` sub-components are now imported from `ServicePageSections`.

- [ ] Update imports at the top of `GroupHealthInsurance.tsx` — add the new imports, remove the ones now covered by `ServicePageLayout`:

Replace:
```tsx
import { PageLayout } from "@/components/layout";
import { TrustBar } from "@/components/sections/trust";
import { Link } from "wouter";
import { motion } from "framer-motion";
```

With:
```tsx
import ServicePageLayout from "@/components/service-page/ServicePageLayout";
import { SectionLabel, SectionHeading, Divider } from "@/components/service-page/ServicePageSections";
import { employeeBenefitsServices } from "@/data/employeeBenefitsServices";
import { Building2, Globe2, Users, Trophy, Stethoscope } from "lucide-react";
import { Link } from "wouter";
```

- [ ] Remove the `SectionLabel`, `SectionHeading`, and `Divider` function definitions from `GroupHealthInsurance.tsx` (they are now imported).

- [ ] Replace the `return` statement: wrap everything that was inside `<PageLayout>` (the hero section, TrustBar, and body div) with `<ServicePageLayout>`. The full new return should be:

```tsx
export default function GroupHealthInsurance() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const entry = {
    title: 'Group Health Insurance',
    titleAccent: 'Health Insurance',
    tagline: 'UK Group Health Insurance',
    subtitle: 'Build a scheme tailored to your business. Whole-of-market comparisons, personalised advice, and no broker fees — ever.',
    heroImage: heroBg,
    colorScheme: 'purple' as const,
    stats: [
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
      { icon: Users,     val: '30+',  label: 'Years combined expertise' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
    ],
    sidebarTestimonial: {
      quote: 'We received great customer service and a competitive quotation when searching for a health scheme for our business.',
      author: 'Technology company, London · 12 employees',
    },
  };

  return (
    <ServicePageLayout
      entry={entry}
      category="employee-benefits"
      currentSlug="group-health-insurance"
      allServices={employeeBenefitsServices}
    >
      {/* All existing main content sections go here — unchanged */}
      {/* Section 1 — How can Engage help? */}
      <section>
        {/* ... keep the existing JSX exactly as-is ... */}
      </section>
      {/* ... all other sections ... */}
    </ServicePageLayout>
  );
}
```

**Important:** Keep all existing main content JSX (service list, intro, coverage, pricing tables, comparison table, FAQs, bottom CTA banner) exactly as-is inside the `<ServicePageLayout>` children. Only the outer shell changes.

- [ ] Remove the old `heroBg` import if it is now passed via `entry.heroImage` (it should remain as the import is still used).

- [ ] Run the dev server and visit `http://localhost:5173/employee-benefits/group-health-insurance` — verify the page renders correctly with the sidebar showing all EB services and GHI highlighted.

- [ ] Commit:
```bash
git add src/pages/GroupHealthInsurance.tsx
git commit -m "refactor: GroupHealthInsurance uses ServicePageLayout shell"
```

---

## Task 8: Update App.tsx routing

**Files:**
- Modify: `src/App.tsx`

- [ ] Add imports and routes to `src/App.tsx`:

```tsx
// Add these imports:
import ServicePage from "@/pages/ServicePage";
import { employeeBenefitsServices } from "@/data/employeeBenefitsServices";
import { internationalBenefitsServices } from "@/data/internationalBenefitsServices";
```

- [ ] Inside the `<Switch>`, add the two dynamic routes **after** the existing GHI explicit route and **before** the catch-all `<Route component={NotFound} />`:

```tsx
<Route path="/employee-benefits/group-health-insurance" component={GroupHealthInsurance} />

{/* Dynamic service routes — must come AFTER the explicit GHI route */}
<Route path="/employee-benefits/:slug">
  {() => <ServicePage category="employee-benefits" services={employeeBenefitsServices} />}
</Route>
<Route path="/international-benefits/:slug">
  {() => <ServicePage category="international-benefits" services={internationalBenefitsServices} />}
</Route>

<Route component={NotFound} />
```

- [ ] Commit:
```bash
git add src/App.tsx
git commit -m "feat: add dynamic service page routes for EB and IB"
```

---

## Task 9: Browser verification

- [ ] Ensure the dev server is running (`pnpm --filter @workspace/engage-health dev`)

- [ ] Visit and verify each of the following URLs loads without errors:

**Employee Benefits:**
- `http://localhost:5173/employee-benefits/group-health-insurance` — existing page, now using new shell
- `http://localhost:5173/employee-benefits/group-life-insurance`
- `http://localhost:5173/employee-benefits/group-income-protection`
- `http://localhost:5173/employee-benefits/group-critical-illness`
- `http://localhost:5173/employee-benefits/group-dental-insurance`
- `http://localhost:5173/employee-benefits/corporate-wellness-programmes`
- `http://localhost:5173/employee-benefits/employee-assistance-programmes`
- `http://localhost:5173/employee-benefits/group-health-cash-plan`
- `http://localhost:5173/employee-benefits/key-person-insurance`
- `http://localhost:5173/employee-benefits/relevant-life-insurance`
- `http://localhost:5173/employee-benefits/employee-health-screening`
- `http://localhost:5173/employee-benefits/employee-benefits-platforms`

**International Benefits:**
- `http://localhost:5173/international-benefits/int-business-health-insurance`
- `http://localhost:5173/international-benefits/international-group-life-insurance`
- `http://localhost:5173/international-benefits/international-group-income-protection`
- `http://localhost:5173/international-benefits/international-group-critical-illness`
- `http://localhost:5173/international-benefits/group-business-travel-insurance`
- `http://localhost:5173/international-benefits/kidnap-and-ransom-insurance`
- `http://localhost:5173/international-benefits/short-term-int-health-insurance`
- `http://localhost:5173/international-benefits/int-employee-assistance-programmes`
- `http://localhost:5173/international-benefits/international-security-services`
- `http://localhost:5173/international-benefits/pre-assignment-screening`
- `http://localhost:5173/international-benefits/us-company-health-insurance`
- `http://localhost:5173/international-benefits/additional-international-products`

**For each page, check:**
- [ ] Hero renders with title, badge, subtitle, stats strip, CTAs
- [ ] Sidebar shows full service list with current page highlighted
- [ ] Main content sections render (service list, any optional sections, FAQs)
- [ ] Bottom CTA banner renders
- [ ] Breadcrumb is correct (EB links to /employee-benefits; IB has plain text parent)
- [ ] No TypeScript errors in the terminal

- [ ] Visit `http://localhost:5173/employee-benefits/nonexistent` — verify 404 page renders.

- [ ] Commit any fixes found during verification:
```bash
git add -p
git commit -m "fix: resolve issues found during service pages browser verification"
```
