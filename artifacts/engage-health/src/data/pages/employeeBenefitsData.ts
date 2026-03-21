import {
  Shield, Heart, TrendingUp, AlertCircle, Smile, Activity,
  HeartPulse, DollarSign, Key, UserCheck, Stethoscope, MonitorDot
} from "lucide-react";
import tipBlend from "@assets/Emp-Benefits-blend-your-approach_1773875338242.jpg";
import tipPromote from "@assets/Emp-Benefits-promote-communicate_1773875338242.jpg";
import tipManage from "@assets/Emp.-Benefits-manage-in-one-place_1773875338242.jpg";
import tipMeasure from "@assets/woman-2773007_1280_1773875338243.jpg";

export const products = [
  {
    icon: Shield,
    href: "/employee-benefits/group-health-insurance",
    name: "Group Health Insurance",
    desc: "Give your employees access to fast private medical care and a range of additional benefits, including wellness apps and Employee Assistance Programmes.",
  },
  {
    icon: Heart,
    href: "/employee-benefits/group-life-insurance",
    name: "Group Life Insurance",
    desc: "Ensure your employees' families are financially protected in the event of their death by taking out a Group Life Insurance policy.",
  },
  {
    icon: TrendingUp,
    href: "/employee-benefits/group-income-protection",
    name: "Group Income Protection Insurance",
    subName: "(AKA Sick Pay Insurance)",
    desc: "Get extra financial protection for your employees should they be unable to work due to illness or injury beyond the statutory sick pay allowance. Staff also get access to rehab services to help speed up recovery.",
  },
  {
    icon: AlertCircle,
    href: "/employee-benefits/group-critical-illness",
    name: "Group Critical Illness Insurance",
    desc: "Give your staff extra financial protection in the event they are diagnosed with a critical illness.",
  },
  {
    icon: Smile,
    href: "/employee-benefits/group-dental-insurance",
    name: "Group Dental Insurance",
    desc: "Allow your staff to get rapid dental treatment and checkups with a standalone private dental plan.",
  },
  {
    icon: DollarSign,
    href: "/employee-benefits/group-health-cash-plan",
    name: "Health Cash Plan",
    desc: "Give staff access to everyday health and wellbeing services, such as physiotherapy, dentistry, optical care and more — up to a predetermined cash amount.",
  },
  {
    icon: Key,
    href: "/employee-benefits/key-person-insurance",
    name: "Key Person Insurance",
    desc: "Financially protect your business from the impact of losing an essential member of your team.",
  },
  {
    icon: HeartPulse,
    href: "/employee-benefits/employee-assistance-programmes",
    name: "Employee Assistance Programmes (EAP)",
    desc: "A suite of self-help tools and professional counselling and/or advisory services designed to bolster the emotional wellbeing of your employees.",
  },
  {
    icon: MonitorDot,
    href: "/employee-benefits/employee-benefits-platforms",
    name: "Staff Discount Schemes",
    desc: "Reward your employees with a range of discounts across health, leisure and retail services — all housed on a digital platform.",
  },
  {
    icon: Activity,
    href: "/employee-benefits/corporate-wellness-programmes",
    name: "Corporate Wellness Programmes",
    desc: "Formulate a range of wellbeing benefits that support every aspect of your team's mental and emotional wellbeing, including wellness days, meditation classes, CBT tools, gym memberships, counselling services and more.",
  },
];

export const whyBenefits = [
  "Improved morale",
  "Increased productivity",
  "Improved Employer Value Proposition (EVP)",
  "Improved employee engagement",
  "Improved recruitment",
  "Reduced absenteeism",
  "Reduced presenteeism",
  "Reduced staff turnover",
];

export const processSteps = [
  { n: "01", title: "Learn & Understand",   desc: "We begin by learning about your business, its current challenges and desired outcomes." },
  { n: "02", title: "Share Intelligence",    desc: "We provide insider knowledge into what businesses of a similar size and sector offer their workers." },
  { n: "03", title: "Design & Create",       desc: "We work out the best solutions for your business, present them to you and agree on timeframes." },
  { n: "04", title: "Negotiate & Price",     desc: "We liaise with ALL insurers and service providers to obtain the most competitive pricing." },
  { n: "05", title: "Launch the Policy",     desc: "We set up and implement the policy/scheme on your behalf to ensure a smooth start." },
  { n: "06", title: "Raise Awareness",       desc: "We provide bespoke literature and perform onsite presentations to promote benefits to staff." },
  { n: "07", title: "Manage the Scheme",     desc: "We handle the everyday management of the scheme so you don't have to." },
  { n: "08", title: "Review & Evaluate",     desc: "We perform annual market reviews to ensure your scheme remains effective and competitively priced." },
];

export const tips = [
  {
    n: "1",
    title: "Blend your approach",
    body: "Placing all your focus in just one camp can leave your benefit provision lacking. An insurance-heavy approach is excellent but can leave staff disengaged because these benefits are only realised when things go wrong. A wellness-heavy approach makes staff feel engaged but isn't much use if someone needs physiotherapy. A blended approach delivers the best of both worlds.",
    img: tipBlend,
    imgAlt: "Diverse team laughing together",
  },
  {
    n: "2",
    title: "Promote and communicate",
    body: "Once you have decided upon your benefits strategy, it's important to educate your employees. They need to know what they have and how to use it — otherwise the benefits become redundant and unappreciated. A good consultancy will deliver employee presentations, develop bespoke written guidance and spend time at your premises answering questions.",
    img: tipPromote,
    imgAlt: "Audience applauding at a presentation",
  },
  {
    n: "3",
    title: "Manage in one place",
    body: "Many organisations make the mistake of managing different types of coverage across separate departments. This compartmentalised approach reduces the opportunity to drive cost efficiencies. Working with multiple providers across different departments means you'll likely pay more overall and find it increasingly difficult to achieve your overall objective.",
    img: tipManage,
    imgAlt: "Woman working on laptop in bright office",
  },
  {
    n: "4",
    title: "Measure success",
    body: "Even if you're spending a small percentage of gross payroll on benefits, continuous review should be a priority. An annual review (at minimum) will help avoid stagnation, maintain relevance and ensure businesses get the best possible return on their investment. Key questions: Is it still valued by staff? Are we paying too much? Is it effective?",
    img: tipMeasure,
    imgAlt: "Woman reviewing documents at desk",
  },
];

export const taxItems = [
  {
    name: "Business Health Insurance",
    text: "Premiums are usually classed as a Benefit in Kind (taxable via payroll). Business Health Insurance also attracts Insurance Premium Tax (IPT), which is automatically included in the cost of the premium.",
  },
  {
    name: "Group Life Insurance",
    text: "The premium is usually allowable as a business expense so tax can be claimed back. The employee is not taxed on the value of the premium. The policy is kept in a discretionary trust so it avoids liability for Inheritance or Income Tax.",
  },
  {
    name: "Group Income Protection",
    text: "No tax is liable from employee or employer until a payout is made, in which case it's taxed via PAYE as per a normal wage. It's also usually an allowable business expense for the employer.",
  },
  {
    name: "Group Critical Illness",
    text: "The employee pays tax on the value of the premium via adjusted tax code. On the plus side, the policy is paid out as a tax-free lump sum and is also considered a business expense (claimable against Corporation Tax).",
  },
  {
    name: "Business Health Cash Plan",
    text: "The employee pays tax on its value via payroll, and the company can claim it as a business expense.",
  },
  {
    name: "Health Screening",
    text: "In most cases, a single health assessment and/or single medical check-up per employee per year is allowable as a tax-free benefit.",
  },
  {
    name: "Employee Assistance Programme",
    text: "Usually regarded as a business expense rather than a benefit in kind — meaning the employee avoids paying tax on the benefit in most cases.",
  },
];

export const sidebarLinks = [
  { icon: Shield,       label: "Group Health Insurance",          href: "/employee-benefits/group-health-insurance" },
  { icon: Heart,        label: "Group Life Insurance",            href: "/employee-benefits/group-life-insurance" },
  { icon: TrendingUp,   label: "Group Income Protection",         href: "/employee-benefits/group-income-protection" },
  { icon: AlertCircle,  label: "Group Critical Illness",          href: "/employee-benefits/group-critical-illness" },
  { icon: Smile,        label: "Group Dental Insurance",          href: "/employee-benefits/group-dental-insurance" },
  { icon: Activity,     label: "Corporate Wellness Programmes",   href: "/employee-benefits/corporate-wellness-programmes" },
  { icon: HeartPulse,   label: "Employee Assistance Programmes",  href: "/employee-benefits/employee-assistance-programmes" },
  { icon: DollarSign,   label: "Health Cash Plan",                href: "/employee-benefits/group-health-cash-plan" },
  { icon: Key,          label: "Key Person Insurance",            href: "/employee-benefits/key-person-insurance" },
  { icon: UserCheck,    label: "Relevant Life Insurance",         href: "/employee-benefits/relevant-life-insurance" },
  { icon: Stethoscope,  label: "Health Screening",                href: "/employee-benefits/employee-health-screening" },
  { icon: MonitorDot,   label: "Benefits Platforms",              href: "/employee-benefits/employee-benefits-platforms" },
];
