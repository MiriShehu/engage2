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
    tagline: 'Support & protection for business travellers.',
    subtitle: 'Our independent consultants are ready to help your company understand Business Travel Insurance policies, get a great value deal on bespoke cover, and protect employees and alleviate the strain on HR.',
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
        title: 'Our independent consultants are ready to help your company:',
        intro: 'An intelligently tailored Group Business Travel Insurance policy provides peace-of-mind for everyone concerned. If the worst happens, you\'ve got it covered. While price point is inevitably an important consideration, value is key. In our experience of working with business customers, cheap is rarely cheerful when a problem arises.',
        items: [
          'Understand Business Travel Insurance policies',
          'Get a great value deal on bespoke cover',
          'Protect employees and alleviate the strain on HR',
        ],
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is Group Business Travel Insurance?',
        paragraphs: [
          'A regular Group Travel Insurance policy caters for groups of people travelling overseas at the same time for recreation or business purposes. Group Business Travel Insurance is only different in the way that the policy can be tailored to meet specific business needs.',
          'Travel insurance policies provide varying levels of coverage, encompassing financial safeguards for: accident, illness, lost possessions and travel cancellations. However, Business Travel Insurance policies will usually offer a more extensive level of coverage – how extensive is down to you.',
        ],
      },
      {
        type: 'coverage',
        label: 'How it works',
        title: 'How does Group Travel Insurance Work?',
        intro: 'The main difference between Group Travel Insurance and regular single trip insurance is that several travellers are protected under the same policy. It\'s worth noting that all policyholders must be travelling together on the same trip for group policies to be valid. All listed travellers can gain access to the same levels of coverage as single trip policies, such as:',
        items: [
          'Cancellations',
          'Lost or stolen money',
          'Medical emergencies',
          'Possessions and baggage',
          'Legal fees',
        ],
        addOns: [
          'Tackle potential financial risks',
          'Ensure employee wellbeing',
          'Provide practical support to HR and management',
        ],
      },
      {
        type: 'text-block',
        label: 'Duty of care',
        title: 'Why offer Group Travel Insurance for employees?',
        paragraphs: [
          'Over the years of working closely with our clients, we have seen the impact of employees falling ill or having accidents while overseas on work trips. The affect on the business is greater than many people foresee. Without an appropriate insurance policy in place, a lot of time and capacity is demanded of HR as a consequence of: trying to find and navigate local medical pathways, trying to access the appropriate medical treatments, organising and completing the relevant paperwork, and arranging necessary employee support where required.',
          'Ensuring that the Group Business Travel Insurance can truly deliver when it is called upon is a crucial consideration. To that end, we predominantly work with our clients to help source and manage medically-led travel insurance plans to ensure our clients provide the appropriate duty of care to their employees while on work assignments and short business trips.',
          'There are many providers of travel insurance and while most can easily manage to reimburse claims for lost luggage or travel delays, the ability for an insurer to step in and make a difference when a medical situation arises is a crucial consideration often overlooked.',
          'The right Group Travel Insurance provider should offer a 24-hour medical helpline for medical emergencies and provide initial advice to employees feeling unwell, or who have been in an accident. The provider should also be able to help employees on the ground find appropriate medical facilities local to them and work with that facility to provide a Guarantee of Payment (GoP), or confirm with the employee that costs incurred within the facility will be reimbursed quickly.',
          'In a more serious emergency, the right Business Travel insurance provider should, with our assistance, be able to work with the employee, employer and medical facilities on the ground, to agree the appropriate medical treatment quickly and/or organise medical transportation, if required. All of the insurers we work with on Group Business Travel Insurance meet these important requirements.',
        ],
      },
      {
        type: 'testimonial',
        quote: 'They took the stress out of the whole process, no question is ever a problem for them and they always respond quickly and happily.',
        author: 'Estate Agency, Sussex',
      },
      {
        type: 'coverage',
        label: 'The advantages',
        title: 'What are the advantages of Group Business Travel Insurance?',
        intro: 'There are many benefits to having Group Travel Insurance for employees:',
        items: [
          'Covers multiple individuals within a single policy, making it faster and more efficient to arrange than several individual insurance policies',
          'The more people covered, the lower the cost per-person',
          'Employees can take advantage of free coverage for children under-18, should they have younger family members with them',
          'It\'s more generous in added extras provided — for example, employees are likely to have improved coverage on items like baggage compared with a stand-alone policy',
          'Businesses have a choice between single-trip and multi-trip annual coverage — if a group of employees travels more than twice a year, the latter is usually the best option',
          'If you purchase an annual travel insurance policy it saves the trouble of having to arrange insurance for the next trip',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'What are the disadvantages of Group Business Travel Insurance?',
            a: 'Even though travel insurance plans cover unexpected medical expenses incurred while you\'re abroad, they do not cover pre-existing conditions. If you become ill and require medical treatment while travelling internationally, you will be responsible for covering the costs with your own money. There\'s always the possibility that a claim will be rejected if it doesn\'t meet the terms of the agreement — a business insurance broker like Engage Health Group will help ensure there are no nasty surprises within the Ts & Cs. A group policy\'s renewal premiums are also connected to the policy\'s claims, meaning renewal rates will likely increase if a group member previously claimed.',
          },
          {
            q: 'How much does Group Business Travel Insurance cost?',
            a: 'Group Business Travel Insurance costs vary according to: location travelling to (or through), time of year, scope of coverage, age and health profile of employees, any limits on claims, level of excess, level of cancellation cover, number of employees included (the more people, the lower the cost per-head), and whether it\'s single trip or annual multi-trip. For a two-person week business trip to France, costs start from around £22.',
          },
          {
            q: 'Do I need a group leader?',
            a: 'This will entirely depend on your group, but it\'s advisable to allocate duties (such as travel and hotel booking) to different employees on the trip, if needed. This prevents the burden being placed on one unfortunate team member.',
          },
          {
            q: 'Can I get coverage for specific activities?',
            a: 'Most Group Travel Insurance policies will cover various standard activities. However, expect to pay an additional premium for the more hazardous or unusual activities that might be on your travel itinerary. Some insurers will let you purchase extra coverage for individual activities, such as fishing.',
          },
          {
            q: 'Can I get Business Travel Insurance with Covid cover?',
            a: 'Yes. There are business travel insurance policies that provide for a variety of Covid-related events. For example, you can be covered against a cancelled flight due to testing positive or for the cost of medical treatment abroad. However, for your policy to be valid you must adhere to FCDO advice. Interestingly, travel insurance is in high demand post-pandemic as people and businesses seek out cover which includes Covid-related protections.',
          },
          {
            q: 'Where can I get the best Business Travel Insurance?',
            a: 'There are many providers on the market, including Allianz, AIG, AXA, and Zurich. As an independent business insurance broker, we can work on your behalf to ensure you get the best arrangement to suit the needs of your employees and business. There is never a single best deal which fits every company\'s requirements — however, there is an ideal one for you. Use our quotes form or call us on +44 (0)1273 974419 and we\'ll bring the best deals to you. No fees attached.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'They took the stress out of the whole process, no question is ever a problem for them and they always respond quickly and happily.',
      author: 'Estate Agency, Sussex',
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
