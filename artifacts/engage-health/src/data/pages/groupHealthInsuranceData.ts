import heroBg from "@assets/Group-Health-Insurance_1773877221793.jpg";
import { Building2, Globe2, Users, Trophy } from "lucide-react";

export const serviceList = [
  "Policy price comparisons to give you the latest idea of what's available and at what price",
  "Full policy reviews to ensure you're achieving the most value from any current schemes in place",
  "Advice and support for implementing new policies into your business",
  "Administrative support post-implementation, reducing the burden on busy HR teams",
  "Claims assistance in the event of a refused policy claim",
  "Annual reviews to ensure you're still getting the best possible value from your policy",
  "Extending health policies internationally if you are employing staff abroad",
];

export const coreCover = [
  "Consultations with a specialist (subject to insurer fee guidelines)",
  "Diagnostic tests (blood tests, x-rays and scans)",
  "Operations and surgical procedures",
  "Hospital stays and nursing care",
  "Cancer treatment, such as radiotherapy and chemotherapy",
  "Medications, some of which may not be available on the NHS",
  "Physiotherapy, osteopathy, chiropractic treatment",
  "Mental health and psychiatric treatment",
];

export const addOns = [
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

export const employerBenefits = [
  "Cost effective vs retail plan — cheaper per person than individual policies",
  "Great way to engage staff — your team will feel valued",
  "Improve morale and productivity",
  "Great retention tool — staff who feel looked after are less likely to leave",
  "Reduce sickness absence",
  "Ensure fast treatment and return to work",
  "Classed as a business expense — a tax efficient way to look after staff",
];

export const employeeBenefits = [
  "Access to otherwise unaffordable benefits",
  "Fast diagnosis & treatment for medical issues",
  "Opportunity to add family members",
  "Treatment in private en-suite rooms",
  "Choice of consultant",
  "Choice of hospital",
  "Choice of treatment date",
];

export const pricingGroups = [
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

export const comparisonFeatures = [
  "Independent advice on all insurers",
  "Annual reviews & price comparisons",
  "FCA regulated whole-market advice",
  "Real-time claims & service experience",
  "Free to recommend best option",
  "Personal ongoing service",
  "Same premium as other channels",
];

export const comparisonChannels = [
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

export const faqs = [
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

export const entry = {
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
    quote: 'We received great customer service and a competitive quotation when searching for a health scheme for our business. It was then a simple process to activate the scheme.',
    author: 'Technology company, London · 12 employees',
  },
};
