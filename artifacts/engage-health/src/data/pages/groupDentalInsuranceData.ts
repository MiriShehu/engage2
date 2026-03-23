import { Building2, Users, Trophy, Globe2 } from "lucide-react";

export const serviceList = [
  "Policy price comparisons to help you identify the best dental scheme for your budget",
  "Full policy reviews to ensure you're getting maximum value from any existing dental arrangements",
  "Advice and support on implementing new dental plans into your business",
  "Administrative support post-implementation, reducing the burden on HR teams",
  "Annual reviews to keep your scheme competitive and relevant",
];

export const coverageItems = [
  "Check-ups, X-rays, scale and polish",
  "Hygienist services",
  "Fillings and root canal treatment",
  "Extractions",
  "Crowns, bridges and dentures",
  "Dental implants",
  "Orthodontic treatment and veneers",
  "Mouth cancer screening",
  "Dental accident and injury coverage",
];

export const keyFeatures = [
  "No medical underwriting required — easy to administer",
  "Pre-existing dental conditions are covered",
  "Works with all dentists — NHS and private",
  "Partners and dependent children can be added",
  "Employees can upgrade their own level of cover",
  "Worldwide coverage available",
];

export const employerBenefits = [
  "Demonstrates genuine duty of care to your workforce",
  "Reduces unexpected absences caused by dental emergencies",
  "Enhances employee morale, wellbeing and productivity",
  "Aids talent attraction and retention",
  "Cost-effective — often cheaper per head than individual policies",
  "Simple to administer — no medical underwriting required",
];

export const employeeBenefits = [
  "Covers the cost of both routine and emergency dental treatment",
  "Works with NHS and private dentists — employees choose",
  "Pre-existing dental conditions are covered from day one",
  "Family members and partners can be included",
  "Option to top up to a higher level of cover",
  "Worldwide coverage available when travelling",
];

export const nhsBands = [
  {
    band: "Band 1",
    cost: "£22.70",
    covers: "Examinations, diagnoses, X-rays, scale and polish",
  },
  {
    band: "Band 2",
    cost: "£62.10",
    covers: "Band 1 treatments, plus fillings, root canals and extractions",
  },
  {
    band: "Band 3",
    cost: "£269.30",
    covers: "All previous treatments plus complex procedures — crowns, bridges, dentures and implants",
  },
];

export const pricingTiers = [
  {
    label: "NHS only",
    range: "From £5.60 / employee / month",
    description: "Covers NHS treatment costs across all three bands",
  },
  {
    label: "NHS + basic private",
    range: "£9.20 – £11.10 / month",
    description: "NHS reimbursement plus a basic private dental benefit",
  },
  {
    label: "NHS + mid-range private",
    range: "£18.25 – £24.70 / month",
    description: "Extended private cover for a wider range of treatments",
  },
  {
    label: "Comprehensive",
    range: "£28.60 – £35.00 / month",
    description: "Full NHS and private coverage including complex procedures",
  },
];

export const faqs = [
  {
    q: "How does Group Dental Insurance work?",
    a: "A Group Dental plan allows your employees to claim back the cost of dental treatment. Typically, employees pay their dentist directly, keep the receipt, and then submit it to the insurer for reimbursement. Coverage applies to both NHS and private treatment.",
  },
  {
    q: "Does Group Dental Insurance cover pre-existing conditions?",
    a: "Yes — one of the most significant advantages of Group Dental Insurance is that pre-existing dental conditions are covered from the outset. There is no medical underwriting required, which makes it straightforward to administer.",
  },
  {
    q: "Can employees use their own dentist?",
    a: "Yes. Group Dental Insurance works with all dentists — both NHS and private. Employees are free to continue seeing their existing dentist and simply claim reimbursement for eligible treatment costs.",
  },
  {
    q: "Can family members be included on a Group Dental plan?",
    a: "Yes. Most Group Dental schemes allow employees to add partners and dependent children to their plan, giving families access to the same dental cover. The additional cost is usually met by the employee directly.",
  },
  {
    q: "What is the difference between a Health Cash Plan and a standalone dental scheme?",
    a: "A Health Cash Plan is a broader product that reimburses the cost of a range of everyday health treatments — including dental, optical and physiotherapy. A standalone dental scheme is dedicated solely to dental treatment. Both are available through Engage Health Group and we can advise on which is most suitable for your business.",
  },
  {
    q: "How much does Group Dental Insurance cost?",
    a: "Group Dental Insurance is one of the most affordable employee benefits available, starting from as little as £5.60 per employee per month for NHS-only cover. Premiums vary depending on the level of cover selected. Unlike Group Health Insurance, pricing is not influenced by the age profile of your workforce.",
  },
  {
    q: "What are NHS dental treatment bands?",
    a: "NHS dental treatment is divided into three bands: Band 1 (£22.70) covers examinations, X-rays and scale and polish; Band 2 (£62.10) adds fillings, root canals and extractions; Band 3 (£269.30) covers complex procedures including crowns, bridges, dentures and implants. A Group Dental plan can reimburse employees for any of these charges.",
  },
  {
    q: "How many employees do I need to set up a Group Dental scheme?",
    a: "Group Dental Insurance is available to businesses of almost any size. Many providers will quote for as few as 2–3 employees. Contact our team for guidance on the best options for your specific business.",
  },
];

export const entry = {
  title: "Group Dental Insurance",
  titleAccent: "Dental Insurance",
  tagline: "UK Group Dental Insurance",
  subtitle:
    "Simple, cost-effective dental cover for your team — no medical underwriting, pre-existing conditions covered, works with every dentist.",
  colorScheme: "purple" as const,
  stats: [
    { icon: Building2, val: "500+", label: "Businesses supported" },
    { icon: Globe2,    val: "70+",  label: "Countries covered" },
    { icon: Users,     val: "30+",  label: "Years combined expertise" },
    { icon: Trophy,    val: "3×",   label: "UK award wins" },
  ],
  sidebarTestimonial: {
    quote:
      "Engage made the whole process incredibly straightforward. They found us a competitive dental scheme and handled everything from start to finish.",
    author: "HR Manager, Professional Services firm · 45 employees",
  },
};
