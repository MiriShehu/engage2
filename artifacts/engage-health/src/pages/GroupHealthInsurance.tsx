import ServicePageLayout from "@/components/service-page/ServicePageLayout";
import { SectionLabel, SectionHeading, Divider } from "@/components/service-page/ServicePageSections";
import { employeeBenefitsServices } from "@/data/employeeBenefitsServices";
import { Building2, Users, CheckCircle2, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { IconList } from "@/components/shared/IconList";
import { PricingTable } from "@/components/shared/PricingTable";
import { ComparisonTable } from "@/components/shared/ComparisonTable";
import { TableOfContents } from "@/components/ui/TableOfContents";
import {
  serviceList, coreCover, addOns, employerBenefits, employeeBenefits,
  pricingGroups, comparisonFeatures, comparisonChannels, faqs, entry
} from "@/data/pages/groupHealthInsuranceData";

const tocItems = [
  { id: "our-service",   label: "How can Engage help your business?" },
  { id: "what-is",       label: "What is Group Health Insurance?" },
  { id: "coverage",      label: "What does Group Health Insurance cover?" },
  { id: "why-buy",       label: "Why buy Group Health Insurance?" },
  { id: "cost",          label: "How much does it cost?" },
  { id: "how-to-buy",    label: "How do I buy Group Health Insurance?" },
  { id: "faqs",          label: "Frequently Asked Questions" },
];

export default function GroupHealthInsurance() {
  return (
    <ServicePageLayout
      entry={entry}
      category="employee-benefits"
      currentSlug="group-health-insurance"
      allServices={employeeBenefitsServices}
    >

      <TableOfContents items={tocItems} />

      {/* 1 — How can Engage help? */}
      <section id="our-service">
        <SectionLabel>Our service</SectionLabel>
        <SectionHeading>How can Engage help your business?</SectionHeading>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Engage Health Group has worked with hundreds of businesses that have sought to launch or review a health insurance scheme for their employees. The scope of our service varies greatly according to your needs:
        </p>

        <IconList 
          items={serviceList} 
          className="mt-6" 
          itemClassName="bg-transparent p-0 gap-3" 
          icon={CheckCircle2} 
        />

        {/* Testimonial pull-quote */}
        <div className="mt-8 p-6 rounded-2xl border-l-4 border-primary bg-primary/5">
          <p className="text-secondary font-medium italic leading-relaxed text-sm">
            "We received great customer service and a competitive quotation when searching for a health scheme for our business. It was then a simple process to activate the scheme for our Group when we were ready to proceed."
          </p>
        </div>
      </section>

      <Divider />

      {/* 2 — What is Group Health Insurance? */}
      <section id="what-is">
        <SectionLabel>The basics</SectionLabel>
        <SectionHeading>What is Group Health Insurance?</SectionHeading>
        <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Group Health Insurance is a type of private health insurance plan purchased by businesses for their employees. One policy can cover multiple staff members and ensure they get fast access to a wide range of medical services and treatments.
          </p>
          <p>
            Plans typically offer a choice of consultant, hospital and date of treatment, giving employees full control and ensuring they can return to work as soon as possible. For many of our clients, one of the key benefits is that it negates NHS waiting lists.
          </p>
          <p>
            Group Health Insurance is also sometimes referred to as <strong className="text-secondary">Business Health Insurance</strong>, <strong className="text-secondary">Company Health Insurance</strong> or <strong className="text-secondary">Corporate Health Insurance</strong>.
          </p>
        </div>
      </section>

      <Divider />

      {/* 3 — What does it cover? */}
      <section id="coverage">
        <SectionLabel>Policy coverage</SectionLabel>
        <SectionHeading>What does Group Health Insurance cover?</SectionHeading>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Companies can largely pick and choose which features they feel will be of the highest importance. First, you need to understand two main medical categories:
        </p>

        {/* Acute vs Chronic */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-green-50 border border-green-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <h4 className="font-bold text-green-900 text-sm">Acute conditions</h4>
            </div>
            <p className="text-green-800/80 text-sm leading-relaxed">
              A condition that responds well to active treatment and where the patient can be returned quickly to their previous state of health, e.g. a fractured arm, hernia or cataracts.
            </p>
            <p className="mt-3 text-sm font-bold text-green-700">✓ CAN be covered by medical insurance</p>
          </div>
          <div className="p-5 rounded-2xl bg-red-50 border border-red-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center">
                <X className="w-4 h-4 text-white" />
              </div>
              <h4 className="font-bold text-red-900 text-sm">Chronic conditions</h4>
            </div>
            <p className="text-red-800/80 text-sm leading-relaxed">
              A condition which cannot be cured and does not improve through active treatment, e.g. asthma or Type 1 diabetes. These can typically only be "managed".
            </p>
            <p className="mt-3 text-sm font-bold text-red-700">✗ NOT covered by medical insurance</p>
          </div>
        </div>

        {/* Core coverage */}
        <h4 className="font-bold text-secondary text-sm mt-8 mb-4">Core coverage typically includes:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {coreCover.map((item) => (
            <div key={item} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-border">
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-secondary leading-snug">{item}</span>
            </div>
          ))}
        </div>

        {/* Inpatient types */}
        <div className="mt-8 p-5 rounded-2xl bg-[#f5f4fa] border border-border">
          <h4 className="font-bold text-secondary text-sm mb-3">Inpatient, Day-patient or Outpatient?</h4>
          <div className="space-y-2">
            {[
              { type: "Inpatient", desc: "Patient is admitted to hospital overnight and occupies a bed." },
              { type: "Day-patient", desc: "Patient occupies a bed but does not stay overnight." },
              { type: "Outpatient", desc: "Patient is not admitted nor occupies a bed (e.g. a scan)." },
            ].map((item) => (
               <div key={item.type} className="flex items-start gap-3">
                 <span className="w-24 text-sm font-bold text-primary flex-shrink-0 mt-0.5">{item.type}</span>
                 <span className="text-sm text-muted-foreground leading-relaxed">{item.desc}</span>
               </div>
            ))}
          </div>
          <p className="mt-3 text-sm font-semibold text-primary">All three scenarios CAN be covered by a Group Health policy.</p>
        </div>

        {/* Add-ons */}
        <h4 className="font-bold text-secondary text-sm mt-8 mb-4">Additional healthcare benefits:</h4>
        <div className="flex flex-wrap gap-2">
          {addOns.map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-border text-xs font-medium text-secondary">
              <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <Divider />

      {/* 4 — Why buy? */}
      <section id="why-buy">
        <SectionLabel>The business case</SectionLabel>
        <SectionHeading>Why buy Group Health Insurance?</SectionHeading>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Both the company and its employees stand to benefit. According to Forbes, 89% of workers at companies that support wellbeing initiatives are more likely to recommend their company as a good place to work.
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

      {/* 5 — Pricing tables */}
      <section id="cost">
        <SectionLabel>Indicative costs</SectionLabel>
        <SectionHeading>How much does Group Health Insurance cost?</SectionHeading>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          The following factors influence cost: employee age profile, geographic location, benefits selected, claims history, chosen insurer, underwriting method, and number of employees included. Below are indicative monthly costs per employee.*
        </p>

        <PricingTable groups={pricingGroups} />
        <p className="mt-4 text-xs text-muted-foreground italic leading-relaxed">
          *Premiums shown are based on multiple sources including Engage Health Group existing client base, quotations issued, external sources, and market averages. Based on new-to-market schemes, comprehensive cover, home counties location, non-London hospitals. Other variables can apply and all figures are for indication only.
        </p>

        <div className="mt-6 p-6 rounded-2xl border-l-4 border-secondary bg-secondary/5">
          <p className="text-secondary font-medium italic leading-relaxed text-sm">
            "We have been delighted with the service from Engage Health Group since moving to them a year or so back. They offer a responsive, knowledgeable and imaginative service which has enabled us to improve the accurate targeting and cost of our health insurance needs."
          </p>
          <p className="text-xs text-muted-foreground mt-2">— Care Home Business, Cardiff · 20 employees</p>
        </div>
      </section>

      <Divider />

      {/* 6 — How to buy */}
      <section id="how-to-buy">
        <SectionLabel>Your options</SectionLabel>
        <SectionHeading>How do I buy Group Health Insurance?</SectionHeading>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          There are two ways of buying Group Health Insurance: direct from the insurer, or through an independent broker. We've outlined the pros and cons below.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl border-2 border-red-200 bg-red-50">
            <h4 className="font-bold text-red-900 text-sm mb-2">Option 1: Direct to the insurer</h4>
            <p className="text-red-800/80 text-sm leading-relaxed">
              You are talking directly to a sales advisor motivated to sell you their product. It's only further down the line that you might discover the deal isn't as great as first sounded, leading to a stressful and time-sapping experience for HR.
            </p>
          </div>
          <div className="p-5 rounded-2xl border-2 border-primary/20 bg-primary/5">
            <h4 className="font-bold text-secondary text-sm mb-2">Option 2: Independent broker ✓ Recommended</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A truly independent broker works for <em>you</em>, not the insurer. We have relationships with all insurance providers, know what deals are available, and can negotiate at speed, delivering deals unavailable to the public.
            </p>
          </div>
        </div>

        {/* Comparison table */}
        <ComparisonTable features={comparisonFeatures} channels={comparisonChannels} />
      </section>

      <Divider />

      {/* 7 — FAQs */}
      <section id="faqs">
        <SectionLabel>FAQs</SectionLabel>
        <SectionHeading>Frequently Asked Questions</SectionHeading>
        <FaqAccordion items={faqs} variant="plus-minus" />
      </section>

    </ServicePageLayout>
  );
}
