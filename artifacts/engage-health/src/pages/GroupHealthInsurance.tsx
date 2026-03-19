import { useState } from "react";
import ServicePageLayout from "@/components/service-page/ServicePageLayout";
import { SectionLabel, SectionHeading, Divider } from "@/components/service-page/ServicePageSections";
import { employeeBenefitsServices } from "@/data/employeeBenefitsServices";
import { Building2, Globe2, Users, Trophy, Stethoscope } from "lucide-react";
import heroBg from "@assets/Group-Health-Insurance_1773877221793.jpg";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  Plus, Minus, Check, X,
} from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────

const serviceList = [
  "Policy price comparisons to give you the latest idea of what's available and at what price",
  "Full policy reviews to ensure you're achieving the most value from any current schemes in place",
  "Advice and support for implementing new policies into your business",
  "Administrative support post-implementation, reducing the burden on busy HR teams",
  "Claims assistance in the event of a refused policy claim",
  "Annual reviews to ensure you're still getting the best possible value from your policy",
  "Extending health policies internationally if you are employing staff abroad",
];

const coreCover = [
  "Consultations with a specialist (subject to insurer fee guidelines)",
  "Diagnostic tests (blood tests, x-rays and scans)",
  "Operations and surgical procedures",
  "Hospital stays and nursing care",
  "Cancer treatment, such as radiotherapy and chemotherapy",
  "Medications, some of which may not be available on the NHS",
  "Physiotherapy, osteopathy, chiropractic treatment",
  "Mental health and psychiatric treatment",
];

const addOns = [
  "Virtual GP / Telemedicine",
  "Private Prescriptions",
  "GP and nurse helpline",
  "NHS Cash Benefit",
  "Employee Assistance Programmes (EAP)",
  "Second Opinion Service",
  "Health Screening",
  "Gym discounts",
  "Dental cover",
  "Optical cover",
  "Travel cover",
  "Retail discount",
];

const employerBenefits = [
  "Cost effective vs retail plan — cheaper per person than individual policies",
  "Great way to engage staff — your team will feel valued",
  "Improve morale and productivity",
  "Great retention tool — staff who feel looked after are less likely to leave",
  "Reduce sickness absence",
  "Ensure fast treatment and return to work",
  "Classed as a business expense — a tax efficient way to look after staff",
];

const employeeBenefits = [
  "Access to otherwise unaffordable benefits",
  "Fast diagnosis & treatment for medical issues",
  "Opportunity to add family members",
  "Treatment in private en-suite rooms",
  "Choice of consultant",
  "Choice of hospital",
  "Choice of treatment date",
];

const pricingGroups = [
  {
    size: "2–9 employees",
    rows: [
      { age: 25, range: "£28.00 – £35.00" },
      { age: 35, range: "£31.00 – £48.00" },
      { age: 45, range: "£42.00 – £62.00" },
      { age: 55, range: "£61.00 – £88.00" },
    ],
  },
  {
    size: "10–29 employees",
    rows: [
      { age: 25, range: "£22.00 – £30.00" },
      { age: 35, range: "£27.00 – £45.00" },
      { age: 45, range: "£33.00 – £52.00" },
      { age: 55, range: "£45.00 – £69.00" },
    ],
  },
  {
    size: "30–49 employees",
    rows: [
      { age: 25, range: "£17.00 – £25.00" },
      { age: 35, range: "£24.00 – £41.00" },
      { age: 45, range: "£31.00 – £50.00" },
      { age: 55, range: "£40.00 – £62.00" },
    ],
  },
  {
    size: "50+ employees",
    rows: [
      { age: 25, range: "£13.00 – £22.00" },
      { age: 35, range: "£21.00 – £35.00" },
      { age: 45, range: "£28.00 – £44.00" },
      { age: 55, range: "£38.00 – £58.00" },
    ],
  },
];

const comparisonFeatures = [
  "Independent advice on all insurers",
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
    name: "Direct from insurer",
    highlight: false,
    ticks: [false, false, false, false, false, false, true],
    note: null,
  },
  {
    name: "Sales agent of specific insurer",
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

const faqs = [
  {
    q: "Which private hospitals are covered with health insurance?",
    a: "There are hundreds of private hospitals and facilities across the British Isles. Key hospital groups include Aspen, BMI, HCA, Nuffield, Ramsey and Spire, all available via UK health insurers. Some insurers offer full hospital coverage as standard; others group them with different premium costs. Many insurers also allow treatment within private facilities of NHS hospitals (NHS pay-beds).",
  },
  {
    q: "How can we reduce the cost of our company medical insurance plan?",
    a: "Three main options: (1) Excess — employees pay a pre-determined amount (typically £100 per person, per year) towards treatment costs in exchange for a reduced company premium. (2) Shared Responsibility — a 25%/75% co-payment split on every claim until the agreed cap is reached. (3) 6-week rule — if NHS treatment is available within 6 weeks, employees must use it; if not, they access private care immediately. This can deliver up to 25% discount on the premium.",
  },
  {
    q: "Will Private Medical Insurance cover pre-existing health conditions?",
    a: "Health insurance is designed to cover new conditions not known when the policy starts. Pre-existing conditions are generally not covered, depending on severity. However, companies purchasing for staff have access to Medical History Disregarded (MHD) underwriting, which allows pre-existing conditions to be covered — something not available on individual policies.",
  },
  {
    q: "How are Group Health Insurance renewal premiums calculated?",
    a: "Once in place, monthly rates are fixed for 12 months. The insurer then provides renewal terms 6–8 weeks before the annual renewal date, calculated based on: age changes in your scheme, insurer base-rate increases due to medical inflation, and your own scheme's claims performance. Most premiums increase 8–12% per annum — a good independent broker will negotiate on your behalf as part of their annual market review service.",
  },
  {
    q: "What is NOT covered under Group Private Medical Insurance?",
    a: "Routine pregnancy, congenital conditions, chronic conditions, Accident & Emergency, planned treatment overseas, IVF and infertility treatments (unless specifically advised), gender reassignment (unless specifically advised), and cosmetic treatment.",
  },
  {
    q: "How many employees do you need to qualify for group health insurance?",
    a: "Many insurers only require a minimum of 2 employees, though some set their minimum at 3. Contact our team for guidance on the best options for your specific business size.",
  },
  {
    q: "Does private health insurance replace the NHS?",
    a: "No — private healthcare should complement the NHS, not replace it. The NHS is best placed for childbirth, Accident & Emergency and intensive care. Private health insurance provides fast access to elective treatment, diagnostics and specialist care, reducing NHS pressure and getting employees back to work sooner.",
  },
  {
    q: "What tax is payable on company health insurance?",
    a: "Insurance Premium Tax (IPT) is automatically included in the premium and paid by the employer at the current rate of 12%. For employees, Business Health Insurance is classed as a Benefit in Kind and is therefore a taxable benefit reported on P11D. The amount of tax an employee pays is linked directly to their portion of the overall premium and their own tax bracket.",
  },
  {
    q: "How do I make a claim under Private Medical Insurance?",
    a: "1. Obtain a GP referral from your own GP, a private GP or via telemedicine. 2. Contact your insurer to advise what treatment is needed. 3. If treatment is eligible you'll receive an authorisation number. 4. Provide the authorisation number to the consultant or hospital — bills are settled directly with the insurer.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

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

      {/* 1 — How can Engage help? */}
      <section>
        <SectionLabel>Our service</SectionLabel>
        <SectionHeading>How can Engage help your business?</SectionHeading>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Engage Health Group has worked with hundreds of businesses that have sought to launch or review a health insurance scheme for their employees. The scope of our service varies greatly according to your needs:
        </p>

        <ul className="mt-6 space-y-3">
          {serviceList.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        {/* Testimonial pull-quote */}
        <div className="mt-8 p-6 rounded-2xl border-l-4 border-primary bg-primary/5">
          <p className="text-secondary font-medium italic leading-relaxed text-sm">
            "We received great customer service and a competitive quotation when searching for a health scheme for our business. It was then a simple process to activate the scheme for our Group when we were ready to proceed."
          </p>
        </div>
      </section>

      <Divider />

      {/* 2 — What is Group Health Insurance? */}
      <section>
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
      <section>
        <SectionLabel>Policy coverage</SectionLabel>
        <SectionHeading>What does Group Health Insurance cover?</SectionHeading>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Companies can largely pick and choose which features they feel will be of the highest importance. First, you need to understand two main medical categories:
        </p>

        {/* Acute vs Chronic */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-green-50 border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <h4 className="font-bold text-green-900 text-sm">Acute conditions</h4>
            </div>
            <p className="text-green-800/80 text-xs leading-relaxed">
              A condition that responds well to active treatment and where the patient can be returned quickly to their previous state of health — e.g. a fractured arm, hernia or cataracts.
            </p>
            <p className="mt-2 text-xs font-bold text-green-700">✓ CAN be covered by medical insurance</p>
          </div>
          <div className="p-5 rounded-2xl bg-red-50 border border-red-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center">
                <X className="w-4 h-4 text-white" />
              </div>
              <h4 className="font-bold text-red-900 text-sm">Chronic conditions</h4>
            </div>
            <p className="text-red-800/80 text-xs leading-relaxed">
              A condition which cannot be cured and does not improve through active treatment — e.g. asthma or Type 1 diabetes. These can typically only be "managed".
            </p>
            <p className="mt-2 text-xs font-bold text-red-700">✗ NOT covered by medical insurance</p>
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
                <span className="w-24 text-xs font-bold text-primary flex-shrink-0 mt-0.5">{item.type}</span>
                <span className="text-xs text-muted-foreground">{item.desc}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs font-semibold text-primary">All three scenarios CAN be covered by a Group Health policy.</p>
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
      <section>
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
      <section>
        <SectionLabel>Indicative costs</SectionLabel>
        <SectionHeading>How much does Group Health Insurance cost?</SectionHeading>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          The following factors influence cost: employee age profile, geographic location, benefits selected, claims history, chosen insurer, underwriting method, and number of employees included. Below are indicative monthly costs per employee.*
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pricingGroups.map((group) => (
            <div key={group.size} className="rounded-2xl border border-border bg-white overflow-hidden">
              <div className="px-5 py-3 border-b border-border flex items-center gap-2" style={{ background: "linear-gradient(135deg,#003648 0%,#76186f 100%)" }}>
                <Building2 className="w-4 h-4 text-white/70" />
                <span className="text-sm font-bold text-white">{group.size}</span>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#f8f8f9] border-b border-border">
                    <th className="text-left px-4 py-2.5 text-xs font-bold text-secondary">Avg age</th>
                    <th className="text-right px-4 py-2.5 text-xs font-bold text-secondary">Monthly cost / employee</th>
                  </tr>
                </thead>
                <tbody>
                  {group.rows.map((row, i) => (
                    <tr key={row.age} className={cn("border-b border-border last:border-0", i % 2 === 0 ? "bg-white" : "bg-[#fafafa]")}>
                      <td className="px-4 py-3 text-sm font-semibold text-secondary">{row.age}</td>
                      <td className="px-4 py-3 text-sm text-right font-mono text-primary font-bold">{row.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
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
      <section>
        <SectionLabel>Your options</SectionLabel>
        <SectionHeading>How do I buy Group Health Insurance?</SectionHeading>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          There are two ways of buying Group Health Insurance: direct from the insurer, or through an independent broker. We've outlined the pros and cons below.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl border-2 border-red-200 bg-red-50">
            <h4 className="font-bold text-red-900 text-sm mb-2">Option 1: Direct to the insurer</h4>
            <p className="text-red-800/80 text-xs leading-relaxed">
              You are talking directly to a sales advisor motivated to sell you their product. It's only further down the line that you might discover the deal isn't as great as first sounded — leading to a stressful and time-sapping experience for HR.
            </p>
          </div>
          <div className="p-5 rounded-2xl border-2 border-primary/20 bg-primary/5">
            <h4 className="font-bold text-secondary text-sm mb-2">Option 2: Independent broker ✓ Recommended</h4>
            <p className="text-muted-foreground text-xs leading-relaxed">
              A truly independent broker works for <em>you</em>, not the insurer. We have relationships with all insurance providers, know what deals are available, and can negotiate at speed — delivering deals unavailable to the public.
            </p>
          </div>
        </div>

        {/* Comparison table */}
        <div className="mt-8 overflow-x-auto max-w-full rounded-2xl border border-border">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-5 py-3.5 text-xs font-bold text-secondary bg-[#f8f8f9] w-48">Purchase channel</th>
                {comparisonFeatures.map((f) => (
                  <th key={f} className="px-3 py-3.5 text-center text-[10px] font-bold text-secondary bg-[#f8f8f9] leading-tight max-w-[80px]">{f}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonChannels.map((ch, i) => (
                <tr
                  key={ch.name}
                  className={cn(
                    "border-b border-border last:border-0",
                    ch.highlight
                      ? "bg-primary/5"
                      : i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"
                  )}
                >
                  <td className={cn("px-5 py-3.5 text-xs font-semibold leading-snug", ch.highlight ? "text-primary" : "text-secondary")}>
                    {ch.name}
                    {ch.highlight && (
                      <span className="ml-1.5 inline-block px-1.5 py-0.5 text-[9px] rounded-full bg-primary text-white font-bold">US</span>
                    )}
                  </td>
                  {ch.ticks.map((tick, ti) => (
                    <td key={ti} className="px-3 py-3.5 text-center">
                      {tick ? (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                          <Check className="w-3 h-3 text-green-600" />
                        </span>
                      ) : ti === 0 && ch.note ? (
                        <span className="text-[10px] text-muted-foreground italic">{ch.note}</span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-50">
                          <X className="w-3 h-3 text-red-400" />
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Divider />

      {/* 7 — FAQs */}
      <section>
        <SectionLabel>FAQs</SectionLabel>
        <SectionHeading>Frequently Asked Questions</SectionHeading>
        <div className="mt-6 divide-y divide-border rounded-2xl border border-border overflow-hidden bg-white">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#f8f8f9] transition-colors gap-4"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="text-sm font-semibold text-secondary pr-4">{faq.q}</span>
                <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-primary/8">
                  {openFaq === i
                    ? <Minus className="w-3.5 h-3.5 text-primary" />
                    : <Plus className="w-3.5 h-3.5 text-primary" />
                  }
                </span>
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 pt-1">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </ServicePageLayout>
  );
}
