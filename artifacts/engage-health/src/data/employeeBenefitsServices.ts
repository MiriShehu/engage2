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
