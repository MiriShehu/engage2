import ServicePageLayout from "@/components/service-page/ServicePageLayout";
import { SectionLabel, SectionHeading, Divider } from "@/components/service-page/ServicePageSections";
import { employeeBenefitsServices } from "@/data/employeeBenefitsServices";
import { Building2, Users, CheckCircle2 } from "lucide-react";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { IconList } from "@/components/shared/IconList";
import { ComparisonTable } from "@/components/shared/ComparisonTable";
import {
  serviceList, coverageItems, keyFeatures,
  employerBenefits, employeeBenefits,
  nhsBands, pricingTiers, faqs, entry,
} from "@/data/pages/groupDentalInsuranceData";

const comparisonFeatures = [
  "Independent advice on all providers",
  "Annual reviews & price comparisons",
  "FCA regulated whole-market advice",
  "Real-time claims & service experience",
  "Free to recommend best option",
  "Personal ongoing service",
  "Same premium as other channels",
];

const comparisonChannels = [
  {
    name: "Specialist independent broker",
    highlight: true,
    ticks: [true, true, true, true, true, true, true],
    note: null,
  },
  {
    name: "Direct from provider",
    highlight: false,
    ticks: [false, false, false, false, false, false, true],
    note: null,
  },
  {
    name: "Comparison sites",
    highlight: false,
    ticks: [false, false, false, false, false, false, true],
    note: "Usually price only",
  },
];

export default function GroupDentalInsurance() {
  return (
    <ServicePageLayout
      entry={entry}
      category="employee-benefits"
      currentSlug="group-dental-insurance"
      allServices={employeeBenefitsServices}
    >

      {/* 1 — How can Engage help? */}
      <section>
        <SectionLabel>Our service</SectionLabel>
        <SectionHeading>How can Engage help your business?</SectionHeading>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Engage Health Group works with businesses of all sizes to source and implement Group Dental Insurance schemes. Our service covers the full lifecycle of your plan:
        </p>
        <IconList
          items={serviceList}
          className="mt-6"
          itemClassName="bg-transparent p-0 gap-3"
          icon={CheckCircle2}
        />

        <div className="mt-8 p-6 rounded-2xl border-l-4 border-primary bg-primary/5">
          <p className="text-secondary font-medium italic leading-relaxed text-sm">
            "74% of employers believe a dental plan is the most valuable health and wellbeing benefit they can offer their workforce."
          </p>
          <p className="text-xs text-muted-foreground mt-2">— Simplyhealth employer survey</p>
        </div>
      </section>

      <Divider />

      {/* 2 — What is Group Dental Insurance? */}
      <section>
        <SectionLabel>The basics</SectionLabel>
        <SectionHeading>What is Group Dental Insurance?</SectionHeading>
        <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            A Group Dental Insurance policy allows your employees to claim back the cost of dental treatment they need. It covers both routine and emergency procedures and has become <strong className="text-secondary">one of the fastest-growing and most popular employee benefits in the UK</strong>.
          </p>
          <p>
            The scheme works simply: employees pay their dentist directly, keep the receipt, and submit it to the insurer for reimbursement. Coverage applies to both NHS and private treatment, giving employees the freedom to choose any dentist.
          </p>
          <p>
            Group Dental Insurance can be purchased as a <strong className="text-secondary">standalone policy</strong> or integrated into a broader employee benefits package alongside Group Health Insurance or a Health Cash Plan.
          </p>
        </div>

        <div className="mt-6 p-5 rounded-2xl bg-[#f5f4fa] border border-border">
          <h4 className="font-bold text-secondary text-sm mb-3">Key scheme features at a glance</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {keyFeatures.map((item) => (
              <div key={item} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-border">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-secondary leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* 3 — What does it cover? */}
      <section>
        <SectionLabel>Policy coverage</SectionLabel>
        <SectionHeading>What does Group Dental Insurance cover?</SectionHeading>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Group Dental plans cover a broad range of dental treatments, from everyday preventative care through to complex restorative procedures:
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {coverageItems.map((item) => (
            <div key={item} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-border">
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-secondary leading-snug">{item}</span>
            </div>
          ))}
        </div>

        {/* NHS Bands */}
        <h4 className="font-bold text-secondary text-sm mt-8 mb-4">NHS dental treatment bands explained</h4>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          NHS dental treatment is charged in three fixed bands. A Group Dental plan can reimburse employees for any of these charges:
        </p>
        <div className="space-y-3">
          {nhsBands.map((band) => (
            <div key={band.band} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-border">
              <div className="shrink-0 text-center">
                <div className="w-16 rounded-lg bg-primary/10 text-primary text-xs font-bold px-2 py-1">{band.band}</div>
                <div className="mt-1 text-sm font-bold text-secondary">{band.cost}</div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">{band.covers}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* 4 — Why buy? */}
      <section>
        <SectionLabel>The business case</SectionLabel>
        <SectionHeading>Why offer Group Dental Insurance?</SectionHeading>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Nearly 90% of diseases present oral symptoms — meaning dental health is closely linked to overall employee wellbeing. According to Simplyhealth, 82% of employers who offer a dental plan agree it enhances employee wellbeing. Both the business and its people stand to benefit:
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Employer */}
          <div className="rounded-2xl border border-border bg-white overflow-hidden">
            <div className="px-5 py-3 border-b border-border" style={{ background: "linear-gradient(135deg,#003648,#004d6b)" }}>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-white/70" />
                <span className="text-sm font-bold text-white">Employer benefits</span>
              </div>
            </div>
            <ul className="p-5 space-y-2.5">
              {employerBenefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-snug">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Employee */}
          <div className="rounded-2xl border border-border bg-white overflow-hidden">
            <div className="px-5 py-3 border-b border-border" style={{ background: "linear-gradient(135deg,#76186f,#5a1254)" }}>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-white/70" />
                <span className="text-sm font-bold text-white">Employee benefits</span>
              </div>
            </div>
            <ul className="p-5 space-y-2.5">
              {employeeBenefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-snug">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Divider />

      {/* 5 — Costs */}
      <section>
        <SectionLabel>Indicative costs</SectionLabel>
        <SectionHeading>How much does Group Dental Insurance cost?</SectionHeading>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Group Dental Insurance is one of the most affordable employee benefits available. Unlike Group Health Insurance, pricing is not influenced by employee age — making it predictable and easy to budget for. Indicative monthly costs per employee:
        </p>

        <div className="mt-6 space-y-3">
          {pricingTiers.map((tier, i) => (
            <div key={tier.label} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-border">
              <div className="w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-secondary text-sm">{tier.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{tier.description}</div>
              </div>
              <div className="text-sm font-bold text-primary shrink-0 text-right">{tier.range}</div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-muted-foreground italic leading-relaxed">
          *Premiums shown are indicative and based on market data. Actual costs depend on the provider selected, number of employees, and level of cover chosen.
        </p>

        <div className="mt-6 p-6 rounded-2xl border-l-4 border-secondary bg-secondary/5">
          <p className="text-secondary font-medium italic leading-relaxed text-sm">
            "Engage made the whole process incredibly straightforward. They found us a competitive dental scheme and handled everything from start to finish."
          </p>
          <p className="text-xs text-muted-foreground mt-2">— HR Manager, Professional Services firm · 45 employees</p>
        </div>
      </section>

      <Divider />

      {/* 6 — How to buy */}
      <section>
        <SectionLabel>Your options</SectionLabel>
        <SectionHeading>How do I buy Group Dental Insurance?</SectionHeading>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          There are two ways of arranging a Group Dental scheme: direct from a provider, or through an independent broker. We've outlined the key differences below.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl border-2 border-red-200 bg-red-50">
            <h4 className="font-bold text-red-900 text-sm mb-2">Option 1: Direct to the provider</h4>
            <p className="text-red-800/80 text-xs leading-relaxed">
              You deal with a sales advisor whose job is to sell their own product. You won't get independent comparisons across the market, and ongoing service and price reviews are rarely proactively offered.
            </p>
          </div>
          <div className="p-5 rounded-2xl border-2 border-primary/20 bg-primary/5">
            <h4 className="font-bold text-secondary text-sm mb-2">Option 2: Independent broker ✓ Recommended</h4>
            <p className="text-muted-foreground text-xs leading-relaxed">
              An independent broker works for <em>you</em>, not the provider. We compare over ten dental plan providers across the market, negotiate on your behalf, and continue to review your scheme at each renewal.
            </p>
          </div>
        </div>

        <ComparisonTable features={comparisonFeatures} channels={comparisonChannels} />
      </section>

      <Divider />

      {/* 7 — FAQs */}
      <section>
        <SectionLabel>FAQs</SectionLabel>
        <SectionHeading>Frequently Asked Questions</SectionHeading>
        <FaqAccordion items={faqs} variant="plus-minus" />
      </section>

    </ServicePageLayout>
  );
}
