import {
  Heart, Shield, Activity, AlertCircle, Smile, Leaf,
  Users, CreditCard, Key, FileText, Eye, LayoutGrid, Building2, Globe2, Trophy,
} from 'lucide-react';
import type { ServiceEntry } from './types';
import groupCriticalIllnessHero from '@assets/group-critical-illness-hero.jpg';
import groupLifeInsuranceHero from '@assets/group-life-insurance-hero.jpg';
import unumLogo from '@assets/insurers/unumLogo.png';
import metlifeLogo from '@assets/insurers/metlifeLogo.png';
import canadalifeLogo from '@assets/insurers/canadalifeLogo.png';
import avivaLogo from '@assets/insurers/avivaLogo.png';
import zurichLogo from '@assets/insurers/zurichLogo.png';
import legalLogo from '@assets/insurers/legalLogo.png';

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
    title: 'Engage Group Life Insurance',
    titleAccent: 'Life Insurance',
    tagline: 'UK Group Life Insurance',
    subtitle: 'Reassurance for employees, protection for loved-ones.',
    heroImage: groupLifeInsuranceHero,
    icon: Shield,
    colorScheme: 'purple',
    stats: [
      { icon: Building2, val: '500+', label: 'Businesses supported' },
      { icon: Users,     val: '50',   label: 'Years combined experience' },
      { icon: Trophy,    val: '3×',   label: 'UK award wins' },
      { icon: Globe2,    val: '70+',  label: 'Countries covered' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How Engage helps with Group Life plans',
        intro: 'Engage Health Group is dedicated to finding the ideal Group Life Insurance policy for the specific needs of a business and its staff. Our award-winning team can support your business in the following ways:',
        items: [
          'Deliver quotes drawn from all the major UK life insurance companies',
          'Answer all your questions about how the policy works',
          'Explain the different added extras that insurers provide (such as bereavement support and Employee Assistance Programmes)',
          'Implement policies into your business',
          'Handle the relationship with the insurer on your behalf',
          'Assist with the claims process',
          'Review policies each year to ensure they\'re still providing the best value',
        ],
        testimonial: 'Managing our health and life insurance schemes used to be a headache but it is great to know that Engage are on the ball. I would highly recommend them to take the stress away.',
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is Group Life Insurance?',
        paragraphs: [
          'It\'s a policy taken out by businesses which provides financial compensation to an employee\'s dependants (usually a partner or child) should they pass away. You might also see it referred to as: Death in Service, Company Life or Employee Life insurance. Group Life is one of the most cost-effective employee benefits to provide and one of the most popular amongst employers.',
          'Why provide Life Insurance to employees? Put simply, to provide financial security to the families of your employees if they were to pass away.',
          'It\'s estimated that less than a third of people in the UK have individual life cover. When you consider that there are an estimated 13.9 million dependent children and almost 11 million active residential mortgages outstanding, you can start to appreciate the scale of the problem and the considerable risk to many families.',
          'Many employers recognise these stark facts and Group Life Insurance represents an opportunity to remove the stress and worry from an already traumatic situation. Furthermore, a genuine investment in the wellbeing of an employee\'s family goes a long way when trying to attract and retain the best calibre of staff.',
        ],
      },
      {
        type: 'coverage',
        label: 'Policy benefits',
        title: 'Practical benefits of Group Life Insurance',
        intro: 'Group Life Insurance is one of the most cost-effective employee benefits to provide. Key practical benefits include:',
        items: [
          'It\'s much less expensive than buying individual or family Life Insurance',
          'There is often no medical questionnaires or underwriting to join the plan',
          'It covers pre-existing conditions',
          'It can be classed as a business expense',
          'It is not classed as a Benefit in Kind (P11d)',
          'Financial peace of mind for employees',
          'Life cover for employees who might have been declined individually',
        ],
      },
      {
        type: 'text-block',
        label: 'How it pays out',
        title: 'How much does Group Life Insurance pay out?',
        paragraphs: [
          'It entirely depends on what you choose to offer. Most employers opt to pay out a multiple of the employee\'s salary. The most popular option is to offer cover for either 2x or 4x the employee\'s salary. For example, if an employee earns £20,000 a year, and \'Company A\' sets coverage for 4x the salary then the employee\'s family stand to receive an £80,000 payout should the worst happen. Some businesses offer up to 8x the salary. An alternative option is to stipulate a flat pay-out amount instead.',
          'It is also quite common for businesses to tier the benefits so that different categories of staff enjoy different benefit levels. In the event of a successful claim, life insurance is paid as a tax-free lump-sum to the nominated dependants.',
        ],
      },
      {
        type: 'text-block',
        label: 'The premium',
        title: 'What details are used to calculate the premium?',
        paragraphs: [
          'There is quite a bit of information needed for an accurate Group Life Insurance UK quotation compared to other employee benefits (such as health insurance). However, it should be information readily available to any HR team or finance department. The following details are required for all employees:',
        ],
        items: [
          'Age',
          'Gender',
          'Location of work',
          'Occupation (to account for any dangerous jobs!)',
          'Salary',
          'Details of any employees who are absent from work due to sickness',
          'Details of any previous or current long-term absentees',
          'Details of any employee who has suffered with a serious medical condition in the past 12 months',
        ],
      },
      {
        type: 'text-block',
        label: 'Cost examples',
        title: 'How much does Group Life Insurance cost?',
        paragraphs: [
          'All the above factors make it difficult to give an average Group Life Insurance cost point. But to give you an idea are some examples of Group Life Insurance premiums for different sized businesses and age ranges:',
          'Salary roll – £150,000 · Home Counties location · New to market with no long-term absentees → £500 total premium per annum',
          'Salary roll – £300,000 · Home Counties location · New to market with no long-term absentees → £600 total premium per annum',
          'Salary roll – £1,200,000 · Home Counties location · New to market with no long-term absentees → £840 total premium per annum',
          'Salary roll – £3,000,000 · Home Counties location · New to market with no long-term absentees → £2,064 total premium per annum',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'Does "Death in Service" mean that employees must be at work when they die?',
            a: 'No – this is a commonly asked question and it\'s understandable considering the term. Employees do not have to be physically at work, they simply need to be actively employed by your company.',
          },
          {
            q: 'What is an Expression of Wish Form?',
            a: 'This is the form that an employee must fill in to indicate who will receive the payout in the event of their death. The employee must list their beneficiaries and declare how certain percentages of the benefit should be divided. The form itself should be kept securely on file with the employers HR team and does not need to be shared with the insurer.',
          },
          {
            q: 'What is the minimum number of employees for Group Life Insurance?',
            a: 'Many insurers require at least 5 employees to qualify for Group Life Insurance. However, there are insurers who can cater for as few as two staff.',
          },
          {
            q: 'Does Group Life Insurance cover staff when abroad?',
            a: 'If your company has members of staff who are based in the UK but travel occasionally for work, these employees can be included under Company Life Insurance. Just remember to let the insurer know from the start! If your company has numerous employees located in different parts of the world, it might be better to consider International Group Life cover.',
          },
          {
            q: 'Does Group Life Insurance cover pre-existing conditions?',
            a: 'Yes – there is no medical underwriting or questionnaires for employees under Group Life Insurance. This is one of its most attractive selling points. However, you are required to notify insurers of any employee who has suffered with a major medical condition in the last 12 months or been absent from work for a significant amount of time. If any employee is suffering with a major medical condition when the plan is incepted, the insurer may require this member to be underwritten.',
          },
          {
            q: 'What is a Free Cover Level?',
            a: 'As there is no medical underwriting for employees under Group Life Insurance, insurers instead set a limit on how much an employee can be automatically insured up to. If the desired payout is above that limit, the insurer will require medical underwriting. In short: it\'s the insurance company protecting themselves against the possibility of an astronomical payout! For example, \'Insurer X\' might offer a Free Cover Level (or limit) of £200,000 for a company with 30 employees. Let\'s say the company taking out the insurance has selected a benefit which pays out 4x the salary for each staff member upon death. This means that an employee can earn a maximum of £50,000 per annum and join the scheme without any underwriting (4 x £50,000 = £200,000). If an employee earns more than £50,000 and therefore has a benefit in excess of the £200,000 Free Cover Level, the additional benefit can only be insured if the member opts to be medically underwritten. If they choose not to be medically underwritten, they will still be covered for the £200,000.',
          },
          {
            q: 'What is the tax treatment of Group Life Insurance?',
            a: 'There is good news for both employer and worker. Employer: The premium (the amount you pay to purchase coverage) is usually allowable as a business expense. This means you will be able to claim the premium as a business expense. Employee: UK Group Life Insurance is not taxable as a Benefit in Kind, which means the employee isn\'t taxed on the value of the premium from which they benefit. Also, the policy is held in a \'discretionary trust\' which means that in the event of their death, the benefit paid will not form part of the member\'s estate and therefore will not be liable for Inheritance Tax or Income Tax.',
          },
          {
            q: 'What is a Master Trust?',
            a: 'If your company has a Registered of Excepted Group Life Insurance scheme, it must be operated in conjunction with a Trust. The Trust is typically operated by a legal firm (appointed by the insurer) to manage any claims and process payment to the elected beneficiary. Companies are free to set up their own Trust, however, this can be time consuming and costly. Instead, many choose to simply use the insurer\'s Master Trust, which is provided free of charge and requires very little work to set up.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Managing our health and life insurance schemes used to be a headache but it is great to know that Engage are on the ball. I would highly recommend them to take the stress away.',
      author: 'Accountancy firm Sussex, 15 employees',
    },
  },

  // ── Group Income Protection ────────────────────────────────────────────
  {
    slug: 'group-income-protection',
    title: 'Group Income Protection',
    titleAccent: 'Income Protection',
    tagline: 'UK Group Income Protection',
    subtitle: 'Financial and practical support for your employees when illness strikes.',
    icon: Activity,
    colorScheme: 'purple',
    stats: [
      { icon: Building2, val: '£550m+', label: 'Paid out in claims in 2020' },
      { icon: Users,     val: '96.8%',  label: 'Claims paid by Vitality in 2020' },
      { icon: Trophy,    val: '3×',     label: 'UK award wins' },
      { icon: Globe2,    val: '70+',    label: 'Countries covered' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'Engage Health Group provides expert advice on Group Income Protection for businesses of all sizes. Our service includes:',
        items: [
          'Source the ideal Group Income Protection scheme for your business',
          'Streamline the setup and claims process',
          'Reduce business absenteeism with rehabilitation support',
          'Whole-of-market quotations from all leading UK insurers',
          'Advice on benefit structure, deferred periods, and benefit limits',
          'Integration with existing employee benefits programmes',
        ],
        testimonial: 'Engage didn\'t sell us a policy but they stopped us making a big mistake. Well done!',
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is Group Income Protection?',
        paragraphs: [
          'Group Income Protection (GIP) provides monetary assistance when employees cannot work due to significant illness or injury. It also includes practical recovery support. Alternative names include "business income protection," "disability protection," or "employee sick pay."',
          'Employers are the actual beneficiaries — not the employees. Companies typically select a percentage of salaries to insure (commonly 50–75%). If an employee becomes unable to work, the insurer pays the employer that percentage, allowing the company to maintain salary payments, hire temporary replacements, and support recovery.',
          'Group Income Protection policies paid out more than £550m in 2020. Unlike sick pay, which is typically limited to a few months, GIP can provide benefit until the employee returns to work, retires, or the policy end date is reached.',
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
          'Temporary cover (1–5 years) or long-term cover to retirement',
          'Rehabilitation and return-to-work support services',
          'Cover for physical and mental health conditions',
          'Virtual GP and mental health support',
          'Physiotherapy and second medical opinions',
          'Employee Assistance Programme access',
        ],
        addOns: [
          '24/7 GP consultation',
          'Early intervention from day one',
          'Expert consultant opinions',
          'Cancer support services',
          'Wellness app access',
        ],
      },
      {
        type: 'why-buy',
        label: 'The business case',
        title: 'Why offer Group Income Protection?',
        intro: 'Group Income Protection supports both the employer\'s moral and financial obligations when an employee becomes seriously ill or injured.',
        employerBenefits: [
          'Reduces financial strain on the business during long-term absence',
          'Insurer facilitates rapid return-to-work programmes',
          'Access to broad rehabilitation tools and support services',
          'Typically an allowable business expense for tax purposes',
          'Demonstrates genuine duty of care to your workforce',
        ],
        employeeBenefits: [
          'Monthly income if unable to work due to illness or injury',
          'Access to rehabilitation services for faster recovery',
          'Mental health and physiotherapy support',
          'Financial security during a difficult period',
          'Not normally a taxable benefit for the employee',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'Who receives the income protection payments — employer or employee?',
            a: 'The insurance company pays the employer, who then pays the employee via payroll. This is usually done monthly, though lump-sum options may be available.',
          },
          {
            q: 'Is Group Income Protection tax-efficient?',
            a: 'Premiums are not normally a taxable benefit for employees and are typically an allowable business expense for employers. HMRC taxes claim payouts through PAYE as they pass through payroll.',
          },
          {
            q: 'What is the deferred period?',
            a: 'The deferred period is the waiting time between when an employee becomes unable to work and when benefit payments begin. Common options are 13, 26, or 52 weeks. A longer deferred period reduces the premium and is typically aligned with the end of the employer\'s sick pay.',
          },
          {
            q: 'What conditions are covered?',
            a: 'GIP covers inability to work due to any illness or injury, including physical and mental health conditions, subject to policy terms. Cost factors include the workforce\'s age, occupation type, income percentage covered, and policy duration.',
          },
          {
            q: 'What is the difference between Group Income Protection and Critical Illness?',
            a: 'Income Protection covers a broader range of injuries and illnesses with ongoing monthly payments. Critical Illness pays a one-off tax-free lump sum on diagnosis of specific conditions. They serve different purposes and many employers offer both.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Engage didn\'t sell us a policy but they stopped us making a big mistake. Well done!',
      author: 'UK business client',
    },
  },

  // ── Group Critical Illness ─────────────────────────────────────────────
  {
    slug: 'group-critical-illness',
    title: 'Group Critical Illness',
    titleAccent: 'Critical Illness',
    tagline: 'UK Group Critical Illness Cover',
    subtitle: 'A safety net when your employees need it most',
    heroImage: groupCriticalIllnessHero,
    icon: AlertCircle,
    colorScheme: 'purple',
    stats: [
      { icon: Building2, val: '6 in 10', label: 'Workers lack savings to pay unexpected bills' },
      { icon: Users,     val: '1–3 mo',  label: 'Average adult can cover bills if off sick' },
      { icon: Trophy,    val: '3×',      label: 'UK award wins' },
      { icon: Globe2,    val: '70+',     label: 'Countries covered' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'Our expert team are ready to help your business:',
        items: [
          'Find the best value Critical Illness cover',
          'Understand how the set-up & claims process works',
          'Source a range of FREE quotes tailored to requirements',
        ],
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is Group Critical Illness cover?',
        paragraphs: [
          'Company Critical Illness insurance protects employees should they be diagnosed with a serious health condition covered by the policy. It usually includes conditions such as: cancer, heart problems and strokes. However, what\'s included will vary depending on the individual policy.',
          'If an employee is diagnosed with one of the eligible conditions, they are paid a tax-free lump sum which they can spend however they choose. The agreed payout could be a multiple of the employees\' salary (for example, between one and five times their annual earnings) or a specified fixed amount.',
          'This lump sum pay-out could be used to take time off from work, pay for treatment, enjoy an overseas trip or make adjustments to their residential setting to better manage their recovery.',
        ],
      },
      {
        type: 'coverage',
        label: 'How it works',
        title: 'How does Group Critical Illness cover work?',
        intro: 'Group Critical Illness:',
        items: [
          'Can be classed as a business expense',
          'Will be classed as a Benefit in Kind (P11d)',
          'Can provide life cover for employees who might have been declined individually',
        ],
      },
      {
        type: 'coverage',
        label: 'Covered conditions',
        title: 'What does Group Critical Illness cover?',
        intro: 'These conditions are typically covered within Group Critical Illness policies (note: inclusions will vary depending on the individual agreed policy):',
        items: [
          'Arthritis',
          'Blindness',
          'Brain tumour',
          'Burns (third degree)',
          'Cancer',
          'Coma',
          'Cystic fibrosis',
          'Deafness',
          'Dementia',
          'Encephalitis',
          'Heart attack',
          'Heart valve replacement',
          'HIV',
          'Liver failure',
          'Loss of hand/foot',
          'Kidney failure',
          'Major organ transplant',
          'Motor neurone disease',
          'Multiple sclerosis',
          'Parkinson\'s disease',
          'Stroke',
          'Terminal illness',
        ],
        addOns: [
          'Meanwhile, pre-existing conditions and self-inflicted injuries will not be included.',
        ],
      },
      {
        type: 'text-block',
        label: 'The business case',
        title: 'Is Group Critical Illness worth it?',
        paragraphs: [
          'The truth is that more and more people are suffering with critical illnesses such as cancer, heart issues and strokes, and the results for an employee can be emotionally and financially devastating.',
          'It\'s estimated that the average British adult could only continue to pay their bills for between one and three months if they were unable to work. Meanwhile a survey by Yorkshire Building Society revealed that six in ten workers do not have enough money saved up to pay unexpected bills.',
          'Group Critical Illness offers employees a vital safety net if the worst were to happen. It means that employers can reassure their workforce (and their families) that they will be supported in such a situation.',
          'Providing Critical Illness cover will also help attract and retain quality staff and shows a true commitment to their health and financial wellbeing. At a time of rising health anxiety, it will likely be more appreciated than ever before.',
          'It\'s also worth mentioning that Group Critical is one of the more affordable protection policies that you can provide employees.',
        ],
      },
      {
        type: 'coverage',
        label: 'Cost factors',
        title: 'How much does Group Critical Illness cost?',
        intro: 'As with any kind of insurance, costs will vary depending on the level coverage you choose to provide and the health profile of your workforce. Some of the key factors affecting price include:',
        items: [
          'Workforce demographic: age and gender',
          'Occupations: some forms of work have a higher risk profile than others',
          "Number of individual's covered: the more people covered, the higher the overall price but the better value per person",
          'Level of coverage provided',
          "Salary levels: if you're providing cover based on a multiple of their salary this will affect size of potential payout (and therefore initial cost)",
          'Current sickness levels: if employees are currently off sick long-term this could affect cost too.',
        ],
        addOns: [
          "Each of these factors affects the cost of your insurance premium. To get an accurate quote, it's best to work with an independent insurance broker, like Engage, as we work across the whole insurance industry to present a range of competitive quotes tailored to your business.",
        ],
      },
      {
        type: 'testimonial',
        quote: 'Great service and efficient. We also got a better price than going direct to the insurance provider!',
        author: 'UK business client',
      },
      {
        type: 'text-block',
        label: 'Finding the best deal',
        title: 'How do businesses find the best deal on Critical Illness Cover?',
        paragraphs: [
          'The most competitive deals on Critical Illness Cover are found via specialist health insurance brokers, such as Engage. This is because we\'re experienced in \'playing the market\' and negotiating deals better than can be found by going direct to the insurer.',
          'Ultimately, we have pre-existing relationships with all the major insurance providers and they are keen to attract repeat business. Hence, they will offer superior quotes than they would to a standalone client.',
          'Of course, the business value of professional advice should not be overlooked. As an expert insurance broker, we take the time to properly understand the needs of your business. Our raison d\'être is to help you rather than sell products.',
          'The value of an insurance consultant goes beyond finding competitive quotes. A good broker can also help set-up and manage the insurance policy for you, taking away the stress and uncertainty that too often comes attached with a policy. Making a claim shouldn\'t be difficult and understanding how a policy works shouldn\'t be stressful. We prove it doesn\'t have to be.',
          'To find the best Critical Illness Insurance deal, and draw the most value from it, contact the team at Engage on +44 (0)1273 974419. We\'ll also help advise on all your other employee benefits & health insurance needs.',
        ],
      },
      {
        type: 'insurers',
        label: 'Insurance providers',
        title: 'Who are the main Group Critical Illness Insurance providers?',
        intro: 'All the main insurance providers offer Group Critical Illness Insurance and, as with Group Income Protection, they often include some form of employee support designed to provide practical health support to workers.',
        items: [
          {
            name: 'Unum',
            logo: unumLogo,
            quote: 'Our Group Critical Illness customers automatically have access to a range of support services whenever they\'re needed.',
          },
          {
            name: 'MetLife',
            logo: metlifeLogo,
            quote: 'With critical illness insurance, MetLife helps you and your family have the financial stability necessary to focus on healing during a difficult time.',
          },
          {
            name: 'Canada Life',
            logo: canadalifeLogo,
            quote: 'We\'ll make a tax-free payment to your employee if they\'re diagnosed with a serious illness or condition covered by the policy. With our cover, your employees can focus on getting better without worrying about their household or medical bills.',
          },
          {
            name: 'Aviva',
            logo: avivaLogo,
            quote: 'We automatically cover your employees\' children and help if they\'re diagnosed with a specified critical illness or one of the child-specific conditions covered in our policy.',
          },
          {
            name: 'Zurich',
            logo: zurichLogo,
            quote: 'Our Group Critical Illness policy gives you the flexibility to choose what\'s right for your business. You can tailor the level of cover to suit your budget.',
          },
          {
            name: 'Legal & General',
            logo: legalLogo,
            quote: 'We\'ll make a tax-free payment to your employee if they\'re diagnosed with a serious illness or condition covered by the policy. With our cover, your employees can focus on getting better without worrying about their household or medical bills.',
          },
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'Is Group Critical Illness a benefit in kind?',
            a: 'Yes, your employee will need to pay tax on the value of the premium the business has paid for on their behalf. HMRC will alter the tax code to reduce their tax-free personal allowance – the reduction will be the equivalent of the value of the premium the business is paying for them.',
          },
          {
            q: 'Will income tax be due on a policy payout?',
            a: 'No. The amount is received as a tax-free lump sum.',
          },
          {
            q: 'Can businesses claim Group Illness Cover as a business expense?',
            a: 'Yes, it is considered a business expense which the business can claim back against Corporation Tax.',
          },
          {
            q: 'Does Company Critical Illness pay out immediately?',
            a: 'No – most insurers would require a member to survive for a period of 14 days following diagnosis in order to make an eligible claim. This is known as a survival period.',
          },
          {
            q: 'How many conditions are covered under Group Critical Illness insurance?',
            a: 'Most insurers operate two levels of cover (Basic/Standard and Extra/Extended), however, most employers opt for the higher of the two levels. Base cover usually covers between 13-15 conditions and Extra/Extended typically adds another 24-26 conditions on top of the Base/Standard plan.',
          },
          {
            q: 'Does Group Critical Illness cover pre-existing conditions?',
            a: "Standard Group Critical Illness plans do not cover pre-existing medical conditions. However, for larger businesses it is possible to provide an element of pre-existing condition cover. Whilst members couldn't join a scheme and be covered of a condition they are currently suffering with (eg heart attack), once they are clear and recovered from that condition, they would be covered should it occur again.",
          },
          {
            q: 'Is it possible to include cover for the partners and children of employees?',
            a: 'Yes – cover can be extended to both partners and children.',
          },
          {
            q: 'What kinds of support services are available with Group Critical Illness cover?',
            a: 'As insurers look to provide more value than ever, there is an increasing number of support services which employees can access for free. These can include; Employee Assistance Programmes, Second opinion services, Cancer support, Support helplines for long-term health conditions such as heart, stroke, stress and anxiety.',
          },
          {
            q: 'Do I need both Income Protection and Critical Illness Cover?',
            a: 'Potentially, as they cater for different scenarios. While Income Protection provides for a wider scope of injuries and illnesses, Critical Illness Cover pays out a single lump sum if an employee is diagnosed with, or has surgery for, a specified, potentially life-threatening illness.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Great service and efficient. We also got a better price than going direct to the insurance provider!',
      author: 'UK business client',
    },
  },

  // ── Group Dental Insurance ─────────────────────────────────────────────
  {
    slug: 'group-dental-insurance',
    title: 'Group Dental Insurance',
    titleAccent: 'Dental Insurance',
    tagline: 'UK Group Dental Insurance',
    subtitle: 'Safeguard the oral health of your employees.',
    icon: Smile,
    colorScheme: 'purple',
    stats: [
      { icon: Building2, val: '74%', label: 'Employers rate dental as most valuable benefit' },
      { icon: Users,     val: '82%', label: 'Say it enhances employee wellbeing' },
      { icon: Trophy,    val: '45%', label: 'Employee take-up rate' },
      { icon: Globe2,    val: '84%', label: 'Employers say it shows they care' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'Our team of independent consultants help you:',
        items: [
          'Understand your options for Group Dental insurance',
          'Source the most competitive deals on the market',
          'Incorporate the policy into a wider benefits scheme',
          'Whole-of-market quotations from all leading UK providers',
          'Advice on NHS vs. private dental coverage options',
          'Support with employee enrolment and communications',
        ],
        testimonial: 'Quick to respond, knowledgeable and personable. They worked on an ideal plan for my business and it was up & running at pace.',
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is Group Dental Insurance?',
        paragraphs: [
          'A Company Dental policy allows your employees to claim back the cost of any dental treatment they might need. Covering both routine and emergency work, it has become one of the fastest-growing and most popular employee benefits in the UK — also referred to as Business Dental Insurance or Company Dental Insurance.',
          'Group Dental Insurance can be purchased as a standalone product or as an add-on within a wider Business Health Insurance plan. Most insurers require the employee to pay their dentist directly, retain the receipt, and then submit it to the insurer for reimbursement.',
          'Almost nine out of ten diseases cause symptoms in the mouth — making dental health a genuinely important indicator of overall wellbeing.',
        ],
      },
      {
        type: 'coverage',
        label: 'What\'s covered',
        title: 'What does Group Dental Insurance cover?',
        intro: 'Coverage varies by plan, but typically includes a combination of the following treatments:',
        items: [
          'Check-ups and examinations',
          'Scale, polish and hygienist appointments',
          'X-rays',
          'Fillings',
          'Root canal treatment',
          'Crowns, bridges and inlays',
          'Orthodontic treatment',
          'Implants',
          'Veneers',
          'Dentures',
          'Dental accident and injury',
          'Mouth cancer screening',
        ],
        addOns: [
          'Worldwide cover',
          'Partner and children coverage',
          'NHS and private dentists covered',
          'No medical underwriting to join',
          'Employees can upgrade coverage levels',
          'Pre-existing conditions covered',
        ],
      },
      {
        type: 'why-buy',
        label: 'The business case',
        title: 'Why provide Business Dental Insurance?',
        intro: 'Dental insurance is one of the fastest-growing employee benefits in the UK. With NHS dental availability increasingly limited, employer-funded dental cover is a genuine differentiator in attracting and retaining staff.',
        employerBenefits: [
          'A cost-effective, bespoke solution supporting duty of care',
          'Preventative approach reduces unexpected dental absences',
          '74% of employers believe it is the most valuable health benefit',
          '84% of employers say it shows they care about staff',
          'Fastest-growing employee benefit in popularity',
          'Flexible structure to suit any budget',
        ],
        employeeBenefits: [
          'Claim back costs of both routine and emergency treatment',
          'NHS and private dentists both covered',
          'Pre-existing conditions covered — no oral health check required',
          'Partners and dependent children can be included',
          'Employees can upgrade their coverage level',
          'Worldwide coverage included',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'Does Business Dental Insurance cover cosmetic treatment?',
            a: 'No — employees can only claim for clinically necessary treatment. Some Company Health Cash Plans may cover cosmetic procedures like teeth whitening, but standard dental insurance does not.',
          },
          {
            q: 'Does it cover pre-existing conditions?',
            a: 'Yes — most insurers cover pre-existing dental conditions with no oral health check or medical examination required to join.',
          },
          {
            q: 'Is dental insurance included with company Private Medical Insurance?',
            a: 'Some PMI providers offer dental coverage as an additional module, though it is typically less comprehensive than standalone dental plans and usually provides limited cash back rather than full coverage.',
          },
          {
            q: 'How much does Group Dental Insurance cost?',
            a: 'NHS cover only starts from approximately £5.60 per employee per month. NHS and basic private cover ranges from £9.20–£11.10/month. Mid-range private cover is £18.25–£24.70/month, and comprehensive private cover ranges from £28.60–£35.00/month.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Quick to respond, knowledgeable and personable. They worked on an ideal plan for my business and it was up & running at pace.',
      author: 'Digital Marketing Business, Sussex',
    },
  },

  // ── Corporate Wellness Programmes ─────────────────────────────────────
  {
    slug: 'corporate-wellness-programmes',
    title: 'Corporate Wellness Programmes',
    titleAccent: 'Wellness Programmes',
    tagline: 'Corporate Wellness',
    subtitle: 'A proactive approach to workplace wellbeing.',
    icon: Leaf,
    colorScheme: 'purple',
    stats: [
      { icon: Building2, val: '79%', label: 'UK workers experience work-related stress' },
      { icon: Users,     val: '55%', label: 'Experience stress-induced anxiety' },
      { icon: Trophy,    val: '3×',  label: 'UK award wins' },
      { icon: Globe2,    val: '70+', label: 'Countries covered' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'We help businesses plan, launch, and optimise Corporate Wellness Programmes that strengthen the health and wellbeing of your team.',
        items: [
          'Plan and launch a Corporate Wellness Programme',
          'Source a wide range of FREE quotes from wellness providers',
          'Pinpoint workforce needs through confidential surveys',
          'Set measurable goals and KPIs for your programme',
          'Create a communications plan and launch strategy',
          'Track results and optimise for maximum ROI',
        ],
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is a Corporate Wellness Programme?',
        paragraphs: [
          'Corporate wellness initiatives support employee health and wellbeing overall. The philosophy follows a simple principle: prevention is better than cure. These schemes can be as comprehensive as budgets allow, and commonly include counselling, healthy food offerings, gym memberships, and more.',
          'According to a 2020 UK workplace survey, four out of five UK workers (79%) commonly experience work-related stress, with over half (55%) experiencing stress-induced anxiety. A well-designed wellness programme directly addresses these challenges.',
          'Effective programmes require a holistic approach spanning physical, mental, financial, and social wellbeing — bringing together a range of initiatives, tools, and benefits under one strategic framework.',
        ],
      },
      {
        type: 'coverage',
        label: 'What to include',
        title: 'What can a Corporate Wellness Programme include?',
        intro: 'Programmes vary depending on budget and workforce needs, but commonly include:',
        items: [
          'Employee Assistance Programmes (EAPs)',
          'Meditation, CBT and yoga classes',
          'Wellness apps and digital tools',
          'Ergonomic workspace setup',
          'Free or discounted healthy food service',
          'Gym membership options',
          'Massages and physiotherapy sessions',
          'Counselling services',
          'Flexible and hybrid working arrangements',
          'Health screening',
          'Educational wellness workshops',
          'Wellness days and challenges',
        ],
        addOns: [
          'Step count competitions (e.g. Yulife app)',
          'On-site massage therapy',
          'Extended lunch breaks for exercise',
          'Resting rooms',
          'Nutritional coaching',
        ],
      },
      {
        type: 'why-buy',
        label: 'The business case',
        title: 'Why invest in a Corporate Wellness Programme?',
        intro: 'Research consistently shows that organisations with strong wellbeing cultures significantly outperform those without, in both productivity and employee retention.',
        employerBenefits: [
          'Lower staff sickness and absenteeism',
          'Happier, more productive workforce',
          'Improved staff retention and reduced turnover',
          'Better recruitment outcomes and employer brand',
          'Less presenteeism (working while unwell)',
          'Measurable ROI through reduced healthcare costs',
        ],
        employeeBenefits: [
          'Improved health and overall wellbeing',
          'Increased morale and job satisfaction',
          'Reduced stress and anxiety',
          'Personal growth and resilience development',
          'Access to tools and resources for better health',
          'Feeling genuinely valued by their employer',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'How do I build a Corporate Wellness Programme from scratch?',
            a: 'Start by pinpointing workforce needs through confidential surveys, then set measurable goals and KPIs. Form a dedicated wellness team, create a communications plan, launch the programme, and track results to optimise over time. Engage can guide you through each step.',
          },
          {
            q: 'How do I measure the ROI of a wellness programme?',
            a: 'Key metrics include: reduction in sickness absence, improved employee engagement scores, reduced staff turnover, and healthcare cost trends. We help clients establish baseline measurements and track progress over time.',
          },
          {
            q: 'What does a Corporate Wellness Programme cost?',
            a: 'Costs vary significantly depending on scope. We work with businesses across all budget levels — from low-cost digital-first approaches costing a few pounds per employee per month, to comprehensive multi-pillar programmes.',
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
    subtitle: 'Strengthen the wellbeing and resilience of your team.',
    icon: Users,
    colorScheme: 'purple',
    stats: [
      { icon: Building2, val: '29.1%', label: 'Of UK sickness absence is mental health' },
      { icon: Users,     val: '£5:£1', label: 'ROI on mental health investment (Deloitte)' },
      { icon: Trophy,    val: '34%',   label: 'Reduction in absenteeism (CBI)' },
      { icon: Globe2,    val: '70+',   label: 'Countries covered' },
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
        testimonial: 'Quick to respond, knowledgeable and personable. They worked on an ideal plan for my business and it was up & running at pace.',
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is an Employee Assistance Programme?',
        paragraphs: [
          'An Employee Assistance Programme (or EAP) is designed to help employees cope with life\'s challenges. It provides confidential support 24/7/365, covering a broad range of personal and professional issues including financial worries, work-related problems, family difficulties, legal issues, housing insecurity, and mental health challenges.',
          'Mental health accounts for 29.1% of sickness absence in the UK. Investment in mental health support earns an average of £5 for every £1 spent, according to Deloitte. EAPs are one of the most cost-effective employee benefits available, typically costing just £3.50–£8 per employee per year.',
          'EAPs are often included as part of health insurance or income protection packages, or can be purchased as a standalone product.',
        ],
      },
      {
        type: 'coverage',
        label: 'Services included',
        title: 'What does an EAP typically include?',
        intro: 'EAP services vary by provider but typically include access to:',
        items: [
          'Confidential support 24/7/365',
          'Face-to-face and remote counselling sessions',
          'Cognitive Behavioural Therapy (CBT)',
          'Stress-related support',
          'Legal advice helplines',
          'Financial coaching and debt management support',
          'Family support services',
          'Critical incident support',
          'Medical helplines',
          'Digital wellness resources and apps',
          'Learning and development solutions',
          'Retail and restaurant discounts',
        ],
        addOns: [
          'Multi-language accessibility',
          'Management referral support',
          'Bereavement and trauma counselling',
          'Anonymous usage reporting',
          'Work-life balance support',
        ],
      },
      {
        type: 'why-buy',
        label: 'The business case',
        title: 'Why offer an Employee Assistance Programme?',
        intro: 'Early intervention matters. Research shows that stress absence intervention at week 4 averages 24.3 weeks total absence — compared to 55+ weeks when intervention is delayed to weeks 21–25.',
        employerBenefits: [
          'Improved workplace productivity',
          'Reduced absenteeism by up to 34% (CBI survey)',
          'Improved staff retention',
          'Enhanced business reputation',
          'Trackable anonymous usage statistics',
          'Usually regarded as a business expense — not a Benefit in Kind',
        ],
        employeeBenefits: [
          'Confidential, judgement-free support for any personal issue',
          'Access to professional counselling and CBT',
          'Legal and financial advice at no personal cost',
          'Available 24/7 — no management approval required',
          'Reduced stress and improved resilience',
          'Family support services included',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'Is an EAP confidential?',
            a: 'Yes — EAP services are strictly confidential. Employers receive only aggregate anonymous usage data, never individual employee information. This confidentiality is key to encouraging uptake.',
          },
          {
            q: 'Is an EAP a Benefit in Kind?',
            a: 'An EAP is usually regarded as a business expense rather than a benefit in kind, provided it is available to all employees (not just management) and family services are restricted to issues affecting the employee at work.',
          },
          {
            q: 'How do employees access the EAP?',
            a: 'Typically via a dedicated freephone number, online portal, or mobile app — available 24 hours a day, 7 days a week. Access is completely confidential and does not require management approval.',
          },
          {
            q: 'How much does an EAP cost?',
            a: 'Prices vary from approximately £3.50 per employee per year for large companies (2,000+ staff) to around £8 per employee for smaller businesses. EAPs are often included at no extra cost within health insurance or income protection packages.',
          },
          {
            q: 'How can I maximise the impact of an EAP?',
            a: 'Promote the service through posters and leaflets, incorporate it into management training, remind staff during performance reviews, and train direct managers as referral sources. Monitor anonymous usage data to identify and address risk areas.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Quick to respond, knowledgeable and personable. They worked on an ideal plan for my business and it was up & running at pace.',
      author: 'Digital Marketing Business, Sussex',
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
    subtitle: 'Protect your business against the financial impact of losing an important member of the team.',
    icon: Key,
    colorScheme: 'purple',
    stats: [
      { icon: Building2, val: '52%',     label: 'Businesses would fold within a year (L&G)' },
      { icon: Users,     val: 'From £2', label: 'Per week starting cost' },
      { icon: Trophy,    val: '3×',      label: 'UK award wins' },
      { icon: Globe2,    val: '70+',     label: 'Countries covered' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'Our expert team is ready to help your business:',
        items: [
          'Understand how Key Person Insurance works',
          'Access superior quotes than available directly on the market',
          'Protect your business against the financial impact of losing a key person',
          'Key person risk assessment and benefit calculation',
          'Advice on policy structure — life insurance, critical illness, or both',
          'Support with medical underwriting and policy inception',
        ],
        testimonial: 'We appointed Engage Health Group to our plan and through their negotiation, we saved £9,000 on our annual premium without having to change insurers.',
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is Key Person Insurance?',
        paragraphs: [
          'Key Person Insurance (sometimes known as Key Man Insurance or Business Protection Insurance) allows businesses to protect themselves from the financial implications of losing an important member of the team due to illness or death.',
          'While all team members are important, there is often a particular employee or director without whom the business would lose significant revenue due to their irreplaceable nature. Over half (52%) of businesses would have to stop trading in less than a year after the death or critical illness of a key individual, according to Legal & General.',
          'The insurance is paid for and owned by the employer. The employer nominates the key person, takes out the policy, pays the premiums, and receives the lump sum on a successful claim.',
        ],
      },
      {
        type: 'coverage',
        label: 'How it works',
        title: 'What does Key Person Insurance cover?',
        intro: 'There are three main types of Key Person protection — and they can be combined:',
        items: [
          'Life Insurance — financial compensation upon death of the key person',
          'Critical Illness Cover — compensation for serious illness or disability',
          'Life Insurance AND Critical Illness — combined coverage for both scenarios',
          'Cost of sick pay during the key person\'s absence',
          'Cost of recruitment and training a replacement',
          'Cost of financial loss caused by their absence',
          'Debt repayment costs',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'Who can be defined as a Key Person?',
            a: 'Eligible roles include owners, managers, managing directors, sales leaders, technical staff, creative talent, and self-employed workers. The only thing that makes a team member a "key person" for insurance purposes is their financial value to the business.',
          },
          {
            q: 'Is Key Person Insurance tax-deductible?',
            a: 'If taken out solely for the requirements of the business, HMRC is likely to class it as a tax-deductible expense. The insurance needs to be taken out solely for the interests of the business. As with all tax-related matters, it is worth speaking to a qualified accountant.',
          },
          {
            q: 'How long does the policy last?',
            a: 'For as long as you need it — typically for as long as the designated person is within your business and performing the same role. Quotes usually start from 2–5 years up to retirement age.',
          },
          {
            q: 'Can the Key Person\'s family receive payment?',
            a: 'No — the insurance is designed to protect the business, not the employee or their loved ones. If you wish to provide for the employee\'s family, you will need a separate Life Insurance or Critical Illness policy such as Relevant Life Insurance.',
          },
          {
            q: 'What types of critical illness are covered?',
            a: 'Most insurers operate two levels: Basic/Standard cover (13–15 conditions) and Extended cover (adds a further 24–26 conditions). Most employers opt for the higher Extended level for more comprehensive protection.',
          },
          {
            q: 'How much does Key Person Insurance cost?',
            a: 'The cost can start from as little as £2 per week, but any meaningful estimate depends on whether you choose life, critical illness, or both; the key person\'s age and medical history; the calculated financial cost of losing them; and the policy duration.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'We appointed Engage Health Group to our plan and through their negotiation, we saved £9,000 on our annual premium without having to change insurers.',
      author: 'UK business client',
    },
  },

  // ── Relevant Life Insurance ────────────────────────────────────────────
  {
    slug: 'relevant-life-insurance',
    title: 'Relevant Life Insurance',
    titleAccent: 'Life Insurance',
    tagline: 'Engage Relevant Life Insurance',
    subtitle: 'Life insurance, the tax-efficient way.',
    icon: FileText,
    colorScheme: 'purple',
    stats: [
      { icon: Building2, val: '~£40/mo', label: 'Typical saving vs personal policy (AIG)' },
      { icon: Users,     val: 'Up to 15×', label: 'Salary coverage multiple available' },
      { icon: Trophy,    val: '3×',       label: 'UK award wins' },
      { icon: Globe2,    val: 'To age 75', label: 'Maximum policy term' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'Our team of independent experts are ready to help your business:',
        intro: 'Our team of independent experts are ready to help your business:',
        items: [
          'Discover whether Relevant Life Insurance is the best option',
          'Set-up the policy & manage the claims process',
          'Get a better deal than available on the market',
        ],
        testimonial: 'Engage have provided us with an exceptional service, everything is explained in a very clear, concise and informative manner allowing us to make the right decisions.',
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is Relevant Life Insurance?',
        paragraphs: [
          'Relevant Life cover is a tax-efficient form of life insurance which employers take out on behalf of a single employee. Unlike a regular life protection policy, it is only available to businesses.  If the employee covered by the policy is to sadly pass away, their family is supported with a lump sum payment. The insurance was introduced as a means of offering small businesses a way of accessing cost-effective life cover. Companies who wish to cover multiple employees are better off choosing a Group Life scheme.',
        ],
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'How does a Relevant Life plan work?',
        paragraphs: [
          'Once the employer identifies which worker they\'d like to insure, they need to decide how much coverage they\'d like to offer. Employers will usually offer coverage based on a multiple of the person\'s salary. For example, if the employee is earning £40,000 a year, the company may choose to offer 2x, 4x – or even up to 15x their salary. If you\'ve opted to offer 2x the salary then the employee\'s designated recipients, will stand to receive £80,000 as a tax-free lump sum should the employee pass away.',
          'A business can take out Relevant Life Insurance in two ways: Go direct to the insurance provider\'s sales team or employ the services of a health insurance broker. Many of the major insurance providers now offer Relevant Life Insurance, but terms will vary as will the premium (the price of the insurance policy). This makes it important to source a range of quotes and sift through the details of each policy on offer.  A professional health insurance broker will have expertise across the whole employee benefits marketplace – and can explain policy terms in easy-to-follow language.',
          'Once the Relevant Life policy has been purchased, the scheme is placed into a Trust – which means the employee\'s loved-ones avoid a hefty tax bill in the event of a payout. (Once the money is placed into a trust the employee technically no longer owns the money if they die – so it\'s not counted towards inheritance tax.)',
        ],
      },
      {
        type: 'text-block',
        label: 'Why offer',
        title: 'Why offer Relevant Life cover?',
        paragraphs: [
          'The businesses which stand to benefit most from Relevant Life Insurance are those wishing to cover a single person, which usually means small businesses. It\'s likely to be a cost-effective option if:',
        ],
        items: [
          'You have a small business but not enough employees to qualify for Group Life Insurance.',
          'You\'re a company director (but still technically an employee) wishing to offer coverage to a single person – or yourself.',
        ],
        footerParagraphs: [
          'According to AIG\'s figures, Relevant Life Insurance can save £40/month compared to a Personal Life Insurance policy. This is because: The premium will usually count as a business expense, reducing a company\'s corporation tax. National Insurance does not need to be paid by employee or employer on the premium.',
          'If life insurance is instead taken out as a personal plan, the individual will be paying for it from their net income, after tax and National Insurance has already been paid by employee and employer.',
          'Relevant Life Insurance demonstrates that you genuinely care about your employee. Like any life insurance scheme it provides piece-of-mind that an individual\'s loved-ones are financially supported should the worst happen.',
        ],
      },
      {
        type: 'text-block',
        label: 'Cost',
        title: 'How much does Relevant Life cover cost?',
        paragraphs: [
          'There are several factors which affect the premium.',
          'From the employer\'s side:',
        ],
        items: [
          'How much cover you wish to offer – will you offer two-times, four-times their salary, or more?',
          'How long a time period it covers – cover can be provided up to retirement age.',
        ],
        footerParagraphs: [
          'From the individual\'s side: Age, Health status, Smoker/non-smoker, Family history, Lifestyle – do you/they perform risky activities in or out of the workplace?',
          'Clearly, due to all these variables, the cost of taking out Relevant Life can vary markedly. For example, it can start from as little as £5.31/month for a young healthy person with minimal coverage. To get a customised Relevant Life Insurance quote use the form on the right or click the Quote button at the top of the page.',
        ],
      },
      {
        type: 'text-block',
        label: 'Best deal',
        title: 'How do businesses find the best deal?',
        paragraphs: [
          'There are two general ways you can go about purchasing an insurance product: Employ an insurance broker or go straight to the seller. It\'s usually advised that you employ the services of an independent insurance broker like Engage because we can provide an insider\'s perspective on how it works from purchase to claim. Plus, a consultant like Engage will have your best interests at heart, unlike an insurance provider who will have a vested interest in promoting a deal which suits their commercial needs.',
        ],
        items: [
          'Independent advice (as long they are not tied to a small group of insurers)',
          'Get superior deals than available to the general public',
          'Save time and hassle of researching the market yourself',
          'Safeguards the business from the persuasive sales pitch of a sales agent',
          'Avoid investing in an inadequate policy',
          'Get advice on the claims process',
        ],
      },
      {
        type: 'text-block',
        label: 'Providers',
        title: 'Who are the main UK Relevant Life Insurance providers?',
        paragraphs: [
          'Many of the major insurance companies provide Relevant Life Insurance policies, including AXA, Aviva, Legal & General, Zurich, and others.',
          'Each will offer different price points and features, such as funeral services, online GP services, counselling support and more.',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'Are Relevant Life Policies a benefit in kind?',
            a: 'It certainly shouldn\'t be. Assuming the policy is implemented in the right way, it will not count as a P11D benefit. Consequently, there will be no additional tax to pay.',
          },
          {
            q: 'What age can a relevant life policy run to?',
            a: 'A policy can last up until the employee is 75 years-old.',
          },
          {
            q: 'Can Relevant Life cover include critical illness?',
            a: 'Yes it can. Many insurance providers will give you an option to include coverage for serious illnesses. The definition of what constitutes a critical illness will vary from provider to provider. It\'s worth noting too, that most insurers will include cover for a terminal illness where the employee has a life expectancy of less than 12 months.',
          },
          {
            q: 'Relevant Life Insurance vs Life Insurance: What\'s the difference?',
            a: 'A Relevant Life policy is specifically designed for small businesses, enabling them to take out life insurance for an employee through the business, thereby making it more tax efficient. As mentioned above, AIG estimate that you can save £40/month compared to a regular personal plan by avoiding NI contributions and being able to claim back the cost as a business expense. A regular Life Insurance policy works out costing more as its purchased by a private individual. Another option is to take out a Group Life policy which can cover two or more employees.',
          },
        ],
      },
    ],
    sidebarTestimonial: {
      quote: 'Engage have provided us with an exceptional service, everything is explained in a very clear, concise and informative manner allowing us to make the right decisions.',
      author: 'Digital Tech Business',
    },
  },

  // ── Employee Health Screening ──────────────────────────────────────────
  {
    slug: 'employee-health-screening',
    title: 'Employee Health Screening',
    titleAccent: 'Health Screening',
    tagline: 'Corporate Health Screening',
    subtitle: 'Early detection, faster treatment, better outcomes.',
    icon: Eye,
    colorScheme: 'purple',
    stats: [
      { icon: Building2, val: '72%',     label: 'Make positive changes after assessments' },
      { icon: Users,     val: 'From £30', label: 'Basic screening per person' },
      { icon: Trophy,    val: '3×',       label: 'UK award wins' },
      { icon: Globe2,    val: '70+',      label: 'Countries covered' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'The independent consultants at Engage help businesses pinpoint the right employee health screening service, implement policies within benefits schemes, and protect team health and wellbeing.',
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
          'Employee health screening provides an in-depth health assessment offering a clear view of overall wellness. Most health insurance policies include this option, though it can be purchased as a standalone service. Assessments vary widely depending on the selected policy and provider.',
          'By identifying health issues early — such as elevated cholesterol before it becomes a cardiac event — organisations can prevent serious conditions from developing, reducing staff absences, business disruption, and associated expenses. One study found that 72% of people who take health assessments say they will make positive changes as a result.',
          'The NHS recommends health checks every five years for adults aged 40–74. Employer-funded screening can extend this to younger employees and provide more comprehensive assessments than standard NHS checks.',
        ],
      },
      {
        type: 'coverage',
        label: 'Screening types',
        title: 'What can Employee Health Screening include?',
        intro: 'Screening programmes are highly customisable. Basic screening starts from £30–£40 per person; comprehensive screening ranges from £150–£790.',
        items: [
          'BMI, glucose, blood pressure and cholesterol',
          'Body fat percentage and hydration levels',
          'Diabetes risk screening',
          'Heart rate and cardiovascular risk assessment',
          'Blood count and liver/kidney function tests',
          'Cancer awareness checks (bowel, breast, cervical)',
          'Musculoskeletal and spinal assessment',
          'Mental health and stress assessments',
          'Vision and hearing tests',
          'Lung function testing',
          'Thyroid function',
          'ECG (electrocardiogram)',
        ],
      },
      {
        type: 'why-buy',
        label: 'The business case',
        title: 'Why offer Employee Health Screening?',
        intro: 'High absenteeism creates lost productivity and strains the remaining team. Early identification of health risks reduces long-term absence and associated costs.',
        employerBenefits: [
          'Help retain talented employees',
          'Attract quality candidates who value their health',
          'Lower absentee rates and shorter recovery times',
          'Promote healthy habits, improving productivity',
          'Overall financial benefit through reduced sickness costs',
          'Medical screening is generally exempt from Benefit in Kind tax',
        ],
        employeeBenefits: [
          'Early illness detection enabling prompt treatment',
          'Enhanced understanding of personal health status',
          'Peace of mind from positive results',
          'Access to consultations and follow-up care',
          '72% of participants make positive lifestyle changes',
          'Individual results are completely confidential',
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
            a: 'The NHS recommends health checks every five years for adults aged 40–74. Annual screening is most common among employers, though biennial screening is used by some organisations depending on the workforce\'s age profile.',
          },
          {
            q: 'Can health screening detect cancer?',
            a: 'Yes — bowel, breast, and cervical cancers can be screened through appropriate tests, though the specific tests available depend on the policy and provider terms.',
          },
          {
            q: 'How are screening results handled?',
            a: 'Individual results are strictly confidential and shared only with the employee. Employers receive aggregate anonymised data to understand workforce health trends, without access to individual employee health information.',
          },
          {
            q: 'Should screening be included in my health insurance or purchased standalone?',
            a: 'Insurance-based screening is cost-effective and convenient, but standalone occupational health providers may offer more thorough and specialised assessments. Engage helps you assess which approach best serves your workforce and budget.',
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
    subtitle: 'Simplifying perks for HR teams and employees.',
    icon: LayoutGrid,
    colorScheme: 'purple',
    stats: [
      { icon: Building2, val: 'From £4', label: 'Per person per month (basic)' },
      { icon: Users,     val: '2,000+',  label: 'Businesses on Reward Gateway' },
      { icon: Trophy,    val: '3×',      label: 'UK award wins' },
      { icon: Globe2,    val: '35+ yrs', label: 'EdenRed platform experience' },
    ],
    sections: [
      {
        type: 'service-list',
        label: 'Our service',
        title: 'How can Engage help your business?',
        intro: 'Our independent consultants help businesses set up, manage, and maximise value from employee benefits platforms.',
        items: [
          'Set up and manage your employee benefits platform',
          'Understand the platform marketplace and find the right fit',
          'Maximise value for both employers and staff',
          'Platform needs assessment and requirements gathering',
          'Implementation support and data migration',
          'Integration with payroll and HR systems',
        ],
        testimonial: 'Our benefits platform transformed the way employees engage with their benefits. Uptake is up significantly and HR time on administration is down.',
      },
      {
        type: 'intro',
        label: 'The basics',
        title: 'What is an Employee Benefits Platform?',
        paragraphs: [
          'Employee Benefits Platforms are digital portals that streamline HR processes and make workplace perks accessible via desktop, tablet, or smartphone. Once limited to large organisations, these tools now serve businesses of all sizes.',
          'Modern platforms accommodate flexible benefits (where employees choose from a menu), voluntary benefits (employee-funded discounts and extras), total reward statements that show the full value of employment, and full HR and payroll integration.',
          'Engage Health Group\'s proprietary solution, Engage Connect, is available alongside recommendations for other platforms matching your specific needs — including Reward Gateway, Thanks Ben, EdenRed, Perkbox, and Avantus.',
        ],
      },
      {
        type: 'coverage',
        label: 'Platform features',
        title: 'What can an Employee Benefits Platform include?',
        intro: 'Platform capabilities vary by provider, but leading solutions typically include:',
        items: [
          'Special deals and employee discounts',
          'Health and wellbeing support tools',
          'Health insurance scheme management',
          'Employee recognition and reward programmes',
          'Pension scheme management',
          'Employee Assistance Programme access',
          'Holiday and leave management',
          'Staff surveys and pulse checks',
          'HR communication tools',
          'Payroll integration and salary sacrifice',
        ],
        addOns: [
          'Total reward statements',
          'Mobile app access',
          'Real-time benefit uptake reporting',
          'Customisable employee experience',
          'Qualifying period management',
        ],
      },
      {
        type: 'why-buy',
        label: 'The business case',
        title: 'Why invest in a Benefits Platform?',
        intro: 'Benefits platforms turn a disconnected collection of perks into a coherent, visible, and appreciated employee benefits programme.',
        employerBenefits: [
          'Improved employee engagement with benefits',
          'Real-time data on which benefits employees truly value',
          'Superior communication with targeted benefit promotion',
          'Significantly reduced HR administration burden',
          'Increased awareness through total reward statements',
          'Greater personalisation — employees choose their preferred benefits',
        ],
        employeeBenefits: [
          'Easy access to all benefits via desktop or smartphone',
          'Customisable experience based on personal preferences',
          'Clear view of total employment value',
          'Employee discounts and savings on everyday spending',
          'Simple self-service management of benefits',
          'Access to wellness tools and health support',
        ],
      },
      {
        type: 'faqs',
        items: [
          {
            q: 'What size business needs a benefits platform?',
            a: 'Platforms are increasingly accessible to businesses of all sizes. Some solutions are cost-effective for companies with as few as 25 employees, while enterprise platforms scale to thousands of users. Costs range from £4/month per person for basic services to £20–£40 annually for comprehensive solutions.',
          },
          {
            q: 'How do I create a benefits package on the platform?',
            a: 'Requires outlining your needs — employee count, budget, logistics, and required benefits. Many businesses choose to work with independent brokers like Engage who can answer all their questions and make tailored recommendations.',
          },
          {
            q: 'Can a benefits platform handle salary sacrifice?',
            a: 'Yes — most modern benefits platforms are built to manage salary sacrifice arrangements for pensions, cycle-to-work, childcare vouchers, and electric vehicles, with automatic payroll integration.',
          },
          {
            q: 'Can we set qualifying periods for benefits?',
            a: 'Yes — platforms allow qualifying periods (such as a 6-month employment threshold) and enable budget-based reward allocation where employees choose from their preferred benefits.',
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
