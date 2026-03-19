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

function TestimonialRenderer({ s }: { s: Extract<ServiceSection, { type: 'testimonial' }> }) {
  return (
    <div className="rounded-2xl bg-primary/5 border-l-4 border-primary px-8 py-7">
      <p className="text-secondary font-medium italic leading-relaxed text-base">"{s.quote}"</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-primary">{s.author}</p>
    </div>
  );
}

function FaqsRenderer({ s }: { s: Extract<ServiceSection, { type: 'faqs' }> }) {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section>
      <SectionLabel>FAQs</SectionLabel>
      <SectionHeading>Frequently Asked Questions</SectionHeading>
      <div className="mt-6 divide-y divide-border rounded-2xl border border-border overflow-hidden bg-white">
        {s.items.map((faq) => (
          <div key={faq.q}>
            <button
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#f8f8f9] transition-colors gap-4"
              onClick={() => setOpen(open === faq.q ? null : faq.q)}
              aria-expanded={open === faq.q}
            >
              <span className="text-sm font-semibold text-secondary pr-4">{faq.q}</span>
              <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-primary/8">
                {open === faq.q ? <Minus className="w-3.5 h-3.5 text-primary" /> : <Plus className="w-3.5 h-3.5 text-primary" />}
              </span>
            </button>
            {open === faq.q && (
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
          {s.type === 'testimonial'  && <TestimonialRenderer s={s} />}
          {s.type === 'faqs'         && <FaqsRenderer s={s} />}
        </div>
      ))}
    </>
  );
}
