import {
  Globe2, Shield, Activity, AlertCircle, Plane, Lock,
  Clock, Users, ShieldCheck, ClipboardList, Building2, Trophy, Package,
} from 'lucide-react';
import type { ServiceEntry } from './types';
import groupBusinessTravelHero from '@/assets/hero/group-business-travel.jpg';
import intCriticalIllnessHero from '@/assets/hero/int-critical-illness.jpg';

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
    tagline: 'Safeguard your global employees from the financial impact of serious illness.',
    subtitle: 'Our independent consultants are ready to help your business grasp the detail of International Group Critical cover, design, implement & manage a bespoke policy, and provide meaningful support to your globe-trotting team.',
    heroImage: intCriticalIllnessHero,
    heroImagePosition: 'top center',
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
        title: 'Our independent consultants are ready to help your business:',
        intro: 'The standard Group Critical Illness policy is designed to provide financial support to an employee if they are suddenly befallen by a serious illness or, in some cases, disability. International Group Critical insurance is designed to do exactly the same thing, but will provide that coverage to your employees wherever they are in the world.',
        items: [
          'Grasp the detail of International Group Critical cover',
          'Design, implement & manage a bespoke policy',
          'Provide meaningful support to your globe-trotting team',
        ],
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is International Group Critical Insurance?',
        paragraphs: [
          'The standard Group Critical Illness policy is designed to provide financial support to an employee if they are suddenly befallen by a serious illness or, in some cases, disability. International Group Critical insurance is designed to do exactly the same thing, but will provide that coverage to your employees wherever they are in the world. For example, if a company has employees in several locations worldwide, they are all covered under one policy. As you can imagine, its much simpler and cost effective compared with purchasing separate plans in different countries.',
          'International Group Critical Illness plans are paid for by the company. If an employee is diagnosed with one of the illnesses stipulated in the policy, they will receive a tax-free lump sum payment. The employer will determine the size of the payout which is usually a multiple of their income (1x to 5x salary is customary). I.e. if the employee earns £40,000 and is covered for 2x salary, then the insurance payout would be £80,000 in the event of a successful claim. However, you can also provide coverage as a predetermined flat amount, such as $/£/€ 100,000.',
          'An international policy is specifically designed for businesses which have multiple office locations and want one, centrally contracted plan, to cover all those employees. Note: There are normally two levels of cover to choose from; the \'Core\' plan, which normally covers around 7 conditions, or the \'Extended\' cover which normally covers up to 22 conditions.',
        ],
      },
      {
        type: 'text-block',
        label: 'Why offer it',
        title: 'Why offer employees International Group Critical Illness Cover?',
        paragraphs: [
          'Being diagnosed with a serious illness is a major event in a person\'s life and will likely have a major impact on both themselves and their loved ones. Faced with this situation, an employee will need both financial and emotional support.',
          'The tax-free lump-sum payment can cover up to 41 different conditions and can be used for anything deemed a priority by the employee, such as: childcare, out-of-pocket medical expenses, rent or mortgage payments, and tax bills.',
          'The financial impact that comes with losing a job can be devastating. According to research, the average employee couldn\'t continue to pay their bills for longer than three months without a consistent income. This is particularly true for expatriate staff who may choose to relocate, or for staff living in countries with a high cost of living.',
          'By offering this cover as an international employee benefit, it provides a significant peace of mind for employees and their families, should the worst happen. It is also a great benefit for attracting and retaining quality staff.',
        ],
      },
      {
        type: 'coverage',
        label: 'Advantages',
        title: 'What are the advantages of International Group Critical Insurance?',
        intro: 'There are many benefits to having International Group Critical Illness cover for employees:',
        items: [
          'Provides employees with a staggered payout or lump sum of money upon diagnosis of an insured illness, no matter where they are in the world',
          'The money can be used for anything and even includes non-medical expenses like mortgage payments, transportation, or even a holiday while you\'re recovering',
          'Compared to the costs of comprehensive health insurance plans, the premiums can be very competitive',
          'No income tax is payable on the insurance payout',
          'Provides cover when needing treatment in another country',
        ],
      },
      {
        type: 'text-block',
        label: 'Disadvantages',
        title: 'What are the disadvantages of International Group Critical Insurance?',
        paragraphs: [
          'Some cancers may be excluded, as well as some chronic illnesses. A payout may not be available if a critical illness reoccurs, such as a second stroke or heart attack. Coverage may be terminated or reduced when the insured reaches a certain age.',
          'Only when a critical illness is diagnosed is the payout available. This means the employee is only covered if a doctor confirms that their condition meets the policy\'s definition of critical. Because some critical illness policies have stringent restrictions, it\'s crucial to note the specific circumstances under which a policy covers a condition.',
        ],
      },
      {
        type: 'testimonial',
        quote: 'They went out of their way to provide us with the best quote and negotiated with our current provider, managing to increase our level of cover and drop the cost.',
        author: 'Global IT company Europe/New Zealand/Australia',
      },
      {
        type: 'coverage',
        label: 'Covered conditions',
        title: 'What types of conditions are covered under an International Company Critical Illness Cover?',
        intro: 'An example of the types of conditions covered are:',
        items: [
          'Cancer',
          'Heart attack',
          'Kidney failure',
          'Loss of speech',
          'Parkinson\'s Disease',
          'Stroke',
          'Multiple Sclerosis',
          'Coronary Artery Bypass',
          'Major organ transplant',
          'Aorta graft Surgery',
          'Motor Neurone Disease',
          'Alzheimer\'s Disease / Dementia',
          'Benign brain Tumour',
          'Blindness',
          'Coma',
          'Paralysis / Paraplegia',
          'Creutzfeldt-Jacob Disease',
        ],
      },
      {
        type: 'text-block',
        label: 'Cost',
        title: 'How much does International Group Critical Insurance cost?',
        paragraphs: [
          'The premium for International Group Critical Illness Insurance varies wildly. Several factors determine the premium, including: age of workforce, industry and occupation, smoker/non-smoker status, medical histories, policy length, agreed payout amount, number of people included in the policy, and number of territories included in the policy.',
          'According to the Association of British Insurers (ABI), the average critical illness claim value was £67,000 in 2020.',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'What are the conditions most claimed for on an International Critical Illness Insurance?',
            a: 'The top three are cancer, heart conditions and stroke.',
          },
          {
            q: 'How quickly does International Group Critical Illness Insurance pay out?',
            a: 'It is standard for insurers to require that employees survive at least 14 days after diagnosis to be able to make an eligible claim. This is called the \'Survival Period\'.',
          },
          {
            q: 'Are pre-existing conditions covered in International Group Critical Illness Cover?',
            a: 'No, cover is not available for pre-existing conditions, these would be excluded from cover as well as Congenital or Hereditary Conditions, or where the member suffered from an associated condition prior to joining the scheme.',
          },
          {
            q: 'What is the maximum age to be covered on an International Company Critical Illness Insurance?',
            a: 'Typically, the maximum age of cover is 65.',
          },
          {
            q: 'Can children and partners be included on International Group Critical Illness Cover?',
            a: 'Yes, they can be. Cover is often limited at a maximum benefit and the addition will generally attract an increased premium. However, some insurers will offer cover to children for free.',
          },
          {
            q: 'What currency would an International Company Critical Illness Insurance be in?',
            a: 'You can select the currency that you wish to use for the insurance. This will determine the currency in which the premium will be paid and the currency for the payout sum (in the event of a claim). Insurers generally offer a choice between USD, GBP and EUR.',
          },
          {
            q: 'What happens to the lump sum payment of our International Group Critical Illness Cover if I pay my employees in different currencies?',
            a: 'The insurer will use a standard exchange rate when reviewing the requested salary multiples / fixed lump sum to convert multiple currency salaries into the currency chosen for the scheme.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'They went out of their way to provide us with the best quote and negotiated with our current provider, managing to increase our level of cover and drop the cost.',
      author: 'Global IT company Europe/New Zealand/Australia',
    },
  },

  // ── Group Business Travel Insurance ───────────────────────────────────
  {
    slug: 'group-business-travel-insurance',
    title: 'Group Business Travel Insurance',
    titleAccent: 'Travel Insurance',
    tagline: 'Support & protection for business travellers.',
    subtitle: 'Our independent consultants are ready to help your company understand Business Travel Insurance policies, get a great value deal on bespoke cover, and protect employees and alleviate the strain on HR.',
    heroImage: groupBusinessTravelHero,
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
    tagline: 'Engage Short-Term International Health Insurance',
    subtitle: 'Protect your employees on short-term contracts abroad.',
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
        title: 'Our independent consultants are ready to help your business:',
        intro: 'Our independent consultants are ready to help your business:',
        items: [
          'Understand global health insurance policies',
          'Source a variety of individually tailored quotes',
          'Support the wellbeing of your overseas employee',
        ],
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is Short-term International Health Insurance?',
        paragraphs: [
          'It\'s a specific variety of International Health Insurance designed for employees working abroad on short-term assignments or fixed-term contracts. Companies can select a scheme which covers their employees from between one to 12 months, whereas a regular international policy would be designed for a longer-term trip.',
        ],
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'How does Short-Term International Health Insurance work?',
        paragraphs: [
          'As mentioned, employers can select a choice of term from one to 12 months allowing them to provide medical coverage over a specific period of time. Unlike a standard international health policy, it\'s not renewable beyond 12 months should you decide that coverage is required beyond that point. However, if you do require an extension from say, three to six months, then that can be arranged.',
          'The type of treatments offered under Short-Term International Health Insurance are also more limited. This takes into account the fact that most people would head back home should they require more serious, longer-term treatment. While, this means more limited coverage, it also means it comes at a significantly lower price point than standard International Health Insurance.',
        ],
      },
      {
        type: 'text-block',
        label: 'Why offer',
        title: 'Why offer Short-Term International Health Insurance?',
        paragraphs: [
          'There are several reasons why businesses should contemplate offering Short-Term International Health Insurance:',
        ],
        items: [
          'Cost-efficiency: Purchase coverage for the price period you require it for, rather than invest in an annual policy which runs beyond the time its needed.',
          'Streamlined benefits: A narrower set of health benefits helps reduce the cost of the scheme substantially too. However, some insurers do offer schemes which provide more extensive services, should they be required.',
          'Country-specific: Ensures that your employee gets the support they need, where they need it – and, importantly, knows how to get it.',
          'Emergencies & general health: Unlike Travel Insurance, employees can receive coverage for both emergency and general health needs (inclusions will vary from policy to policy).',
          'Flexibility: All the above points outline the fact that Short-Term International Health Insurance is a flexible option.',
        ],
        footerParagraphs: [
          'These points outline the business angle, but the benefits go deeper than that. An employee working abroad on a short-term assignment and contract will be, most likely, journeying into the unknown. It\'s both an exciting opportunity and a potential source of heightened anxiety. In such circumstances an employer has a duty of care to ensure they get the support they need. An employee\'s health and wellbeing should always be the priority. This makes access to healthcare particularly important. If your employee becomes ill or suffers an accident, will they be looked after? Or will they be left to fend for themselves?',
          'It\'s important to note that health insurance is only part of the support process. Other elements include pre-assignment screening, cultural training and risk assessments.',
        ],
      },
      {
        type: 'text-block',
        label: 'Travel insurance',
        title: 'Can I get medical cover with travel insurance instead?',
        paragraphs: [
          'Yes, but there are important differences.',
        ],
        items: [
          '1. Coverage limitations: Travel insurance is designed to provide short-term emergency treatment while travelling abroad, alongside other travel benefits such as cancelled flights, lost luggage etc. International Short-Term Medical Insurance (like other dedicated private health insurance schemes) covers emergency AND routine treatment. Plus, if longer-term treatment is needed that can be covered too.',
          '2. Time limitations: Travel insurance generally covers a shorter period. This is often up to three months and may only be applicable for single trips. International Short-Term Health Insurance can go up to 12 months and cover multiple trips.',
          '3. Added extras: International Health Insurance will usually offer additional benefits beyond its core offering, including: 24-hour medical help lines, wellness checks & support, medical second opinions, access to discounted pharmacy rates, assistance finding reputable medical professionals & facilities, access to specific hospital networks which allow direct settlement between the provider and insurer meaning you don\'t need to pay and claim back.',
        ],
        footerParagraphs: [
          'For very short-term trips of one to three months, or for specific single or multi-trip cover, Travel Insurance should be considered, please review our Group Travel Insurance page for further details.',
        ],
      },
      {
        type: 'text-block',
        label: 'Cost',
        title: 'How much does International Short-Term Health Insurance cost?',
        paragraphs: [
          'Less than typical International Health Insurance cover. However, as with any medical, insurance, costs will vary widely. The following factors will affect the premium:',
        ],
        items: [
          'Age of insured person(s)',
          'Previous health issues/health profile',
          'Type of work performed',
          'Destination country & locale',
          'Specific features included within the policy',
          'Coverage limit (total value of services claimable)',
        ],
        footerParagraphs: [
          'Many of the major health insurance companies provide short-term international cover, including AXA, Allianz Care and Cigna. However, if you require a list of quotes from across the industry, then contact us for a free consultation and we\'ll deliver what you need.',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'Can I get health insurance for 6 months?',
            a: 'Yes, absolutely. In fact, International Short-Term Health Insurance can be accessed for any period between one and 12 months. If you take out a 6-month policy and need to extend, you can only extend it only to the maximum 12-month period. If you\'d like to talk to an independent professional, then contact the team at Engage Health Group.',
          },
          {
            q: 'Is International Health Insurance the same as Travel Insurance?',
            a: 'No. While there is some crossover, there are important differences. International Short-Term Medical coverage can provide a far greater range of medical support, while Travel Insurance is somewhat limited in what it can provide form a health standpoint. More information is available in the section further up entitled: \'Can I get medical cover with travel insurance instead?\'.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Managing our health and life insurance schemes used to be a headache but it is great to know that Engage are on the ball. I would highly recommend them to take the stress away.',
      author: 'Accountancy Firm, Sussex',
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
    tagline: 'Engage Pre-Assignment Screening',
    subtitle: 'Maximise the chances of a successful overseas work placement.',
    icon: ClipboardList,
    colorScheme: 'teal',
    stats: [
      { icon: Users,     val: '50',   label: 'Years combined experience' },
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'Our expert consultants are ready to help your business:',
        intro: 'Learn how to apply Pre-Assignment Screening',
        items: [
          'Learn how to apply Pre-Assignment Screening',
          'Source a tailored programme for your employee/s',
          'Prepare your employee for a successful assignment',
        ],
      },
      {
        type: 'text-block',
        label: 'The basics',
        title: 'What is Pre-Assignment Screening?',
        paragraphs: [
          "The term 'Pre-Assignment Screening' relates to the activities undertaken by a business to maximise the chances of a successful overseas work placement. In basic terms, it's a thorough risk assessment which is taken ahead of an assignment. The process is crucial because it's only when a potential pitfall is identified that it can be effectively managed or negated.",
          'Pre-Assignment Screening may include:',
        ],
        items: [
          'Health screening',
          'Pre-trip preparation & personal evaluation',
          'Family support services',
          'Logistical support',
        ],
        footerParagraphs: [
          'Screening requirements will vary from business-to-business and the specific nature of the assignment.',
        ],
      },
      {
        type: 'text-block',
        label: 'Our Services',
        title: 'What types of Pre-Assignment Screening are available?',
        paragraphs: [
          "Both physical and psychological factors need to be considered when preparing an employee for an expat assignment overseas. It's a huge transition for a person to start living and working in a new country with different customs, and to be away from home comforts and the support of friends and family. Without the right preparation, the potential for the assignment to fail is high. However, the following Pre-Assignment Screening services are designed to minimise the risk and maximise the chances of a successful outcome.",
        ],
      },
      {
        type: 'text-block',
        label: 'International Health Screening',
        title: 'International Health Screening',
        paragraphs: [
          "Expatriates frequently suffer health-related problems while on assignment overseas. This sometimes leads to the failure of the assignment, an expensive medical evacuation or staff absence which are entirely predictable and preventable. Sometimes an employee can have an unknown or undiagnosed condition. However, most issues arise when an expat with a pre-existing condition goes on an overseas assignment with little or no knowledge of how these conditions can be handled in their destination country. Before an employee leaves for the work placement, they need to understand how to integrate with the local healthcare system. Seemingly trivial information can be important, such as whether the pharmaceutical drugs they require are under the same brand name or whether they are even legal in their destination country. Knowing where to get hold of certain drugs or access specific medical interventions can be crucial.",
          "International health screening is generally conducted via an online system which includes a review of:",
        ],
        items: [
          "The employee's health",
          'Availability and quality of local healthcare',
          'Type of work performed',
          'Length of assignment',
        ],
        footerParagraphs: [
          'When you incorporate an international health screening into your pre-assignment process, you are better prepared to predict, prevent, and reduce risk for your expatriate employee and their family. It also provides you with an audit trail, demonstrating proactive duty of care and helps you drive savings both before and during the assignment.',
        ],
      },
      {
        type: 'text-block',
        label: 'Pre-departure Preparation',
        title: 'Pre-departure preparation and evaluation',
        paragraphs: [
          "Each employee brings a unique set of skills and character traits to an organisation. But how do you know which team member will thrive in an overseas assignment? Without a thorough evaluation it's impossible to know. Consequently, many businesses choose to include a 'management selection tool' which screens shortlisted candidates providing written recommendations and in-depth suitability analysis. Conducted by an experienced counsellor, a pre-departure evaluation can last up to 10 hours. It identifies personal risk factors as well as business risk. Preparation modules can include coaching and skill building designed to give employees the tools and coping strategies required to prosper in the assignment.",
        ],
      },
      {
        type: 'text-block',
        label: 'Family Preparation',
        title: 'Pre-departure family preparation',
        paragraphs: [
          "These sessions are designed to support expat assignees, and their families, to prepare fully prior to assignment. The session is counsellor-led and can last up to six hours, delivering intensive preparation and consultation. Awareness-building and skills coaching are among its key components. The counsellor's core duty is to help participants identify vulnerabilities and strategies for success, focused around the challenges of re-location and cross-cultural adaption.",
          'The counsellor will seek answers to the following:',
        ],
        items: [
          'What are the potential strengths and weaknesses the family possesses (individually and collectively) for the experience that lies ahead?',
          'What are the potential problems that could arise?',
          'What are the key skills required to prosper?',
        ],
      },
      {
        type: 'text-block',
        label: 'Destination Services',
        title: 'Destination Services',
        paragraphs: [
          'There are a lot of practical concerns that come with relocating for an expat assignment, particularly if moving with family. The Destination Services programme provides customised support for expats and their families with logistical hands-on support to facilitate a successful move and integration into a new host city and country. This programme can provide up to six days support, depending on the needs of the employee and be offered in almost every major city in the world. The programme looks to facilitate a hassle-free move and is provided by a dedicated Destination Services consultant. The consultant will have extensive international knowledge and understand the complexities of living and working in different cultures. Destination Services may include:',
        ],
        items: [
          'Area orientation of a preview trip to the host city, including booking hotels and providing information.',
          'Assisting with the accommodation search, including lease and sales assistance, as well as utilities set up.',
          'Assistance with local requirements like setting up bank accounts, getting a driving licence and finding a doctor.',
          'Searching for and understanding the school system and assisting with registering their children.',
        ],
      },
      {
        type: 'text-block',
        label: 'Why choose',
        title: 'Why offer Pre-assignment Screening?',
        paragraphs: [
          "From a hard-nosed business perspective, there's a lot of money at stake. The average cost of an expatriate assignment is around £220,000 per year and expatriate failure rates are as high as 40%. Properly preparing your new assignee, and their family, is crucial in making sure that they are happy and you get the best possible return on your investment.",
          'There is also the ethical dimension. When any organisation sends an employee on an overseas assignment, they have a duty of care. It can be a daunting prospect to live and work in a new environment, especially for a substantial time. Many logistics need to be managed and hazards avoided. Will you leave them to it? Or ensure that nothing is left to chance?',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'How much does Pre-Assignment Screening cost?',
            a: "It all depends on the breadth of screening services you want to implement. For example, how comprehensive do you want to make your medical checks? Will you be evaluating the suitability of a candidate to handle the psychological pressures and general stresses of an overseas assignment? Will it include Destination Services (see above)? Will family support and pre-trip preparation be required? The only way to find a representative price point is to contact our team. We will happily deliver quotes that are customised to the precise needs of your business, free-of-charge.",
          },
          {
            q: 'Would International Health Screening affect my International Health Insurance?',
            a: "The International Medical Screening is confidential and only communicated to the employer as a 'suitability finding'. Therefore, it will have no impact on any International Health Insurance plan already in place. If an unknown pre-existing condition is found and International Health Insurance hasn't yet been put in place, this should be disclosed to the insurer, unless the scheme is 'Medical History Disregarded' in which case no medical history will be required.",
          },
          {
            q: 'How should I support an expat employee returning home after a long assignment?',
            a: "While this page is focused on Pre-Assignment Screening, an employer should also consider what happens after the assignment ends. If an employee and/or their family is going on a long-term relocation, a plan should be put in place to ensure they get the support required upon returning home. Returning home after a long expat assignment can require as much adjustment as the initial move overseas. Providing an instructor-led workshop to an individual or family will help facilitate personal and professional reintegration – and a happy ending for all involved. Post-assignment support allows expats and their families to debrief the assignment at a high level and explore the challenges they will face returning to what was once their home. They will be supported in: understanding reverse culture shock; identifying lifestyle and cultural changes that have occurred whilst abroad; developing strategies for minimising the impact of re-adjusting to 'normal life', including relationships with family, friends and work.",
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
