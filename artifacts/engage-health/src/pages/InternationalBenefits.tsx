import { PageLayout } from "@/components/layout";
import { TrustBar } from "@/components/sections/trust";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Globe, Globe2, TrendingUp, AlertCircle, Plane, Lock, Clock,
  Users, ShieldAlert, MapPin, Flag, Briefcase,
  CheckCircle2, Phone, Mail, ArrowRight, ChevronRight, Star,
  Building2, Trophy, ChevronDown,
  BookOpen, BarChart2, PenLine, Handshake, Settings2, MessageSquare, ClipboardList, RefreshCw
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { TableOfContents } from "@/components/ui/TableOfContents";
import heroBg from "@assets/international-employee-benefits-hero.jpg";

// ─── Data ─────────────────────────────────────────────────────────────────────

const products = [
  { icon: Globe,       name: "International Business Health Insurance",      desc: "Set up an International Health Insurance scheme for your global workforce.",                                                href: "/international-benefits/int-business-health-insurance" },
  { icon: Globe2,      name: "International Group Life Insurance",           desc: "Design & launch a bespoke global scheme to protect your employees' families.",                                              href: "/international-benefits/international-group-life-insurance" },
  { icon: TrendingUp,  name: "International Group Income Protection",        desc: "Manage a scheme for your global workforce, paying a percentage of salary if they cannot work.",                            href: "/international-benefits/international-group-income-protection" },
  { icon: AlertCircle, name: "International Group Critical Illness",         desc: "Design, implement & manage a bespoke policy covering your employees globally.",                                             href: "/international-benefits/international-group-critical-illness" },
  { icon: Plane,       name: "Group Business Travel Insurance",              desc: "Understand Business Travel Insurance policies and protect employees on the move.",                                          href: "/international-benefits/group-business-travel-insurance" },
  { icon: Lock,        name: "Kidnap and Ransom Insurance",                  desc: "Safeguard & support your hard-working teams operating in higher-risk environments.",                                       href: "/international-benefits/kidnap-and-ransom-insurance" },
  { icon: Clock,       name: "Short-Term International Health Insurance",    desc: "Source a variety of individually tailored quotes for short-term international assignments.",                               href: "/international-benefits/short-term-int-health-insurance" },
  { icon: Users,       name: "Int Employee Assistance Programmes",           desc: "Design, launch & manage a tailored international EAP for your expatriate and global staff.",                               href: "/international-benefits/int-employee-assistance-programmes" },
  { icon: ShieldAlert, name: "International Security Services",              desc: "Locate the best International Security Services to keep your global workforce safe.",                                      href: "/international-benefits/international-security-services" },
  { icon: MapPin,      name: "Pre-Assignment Screening",                     desc: "Ensure your employees are ready and prepared before they head abroad on a job posting.",                                   href: "/international-benefits/pre-assignment-screening" },
  { icon: Flag,        name: "US Company Health Insurance",                  desc: "Gain a clear picture of how US healthcare works and source the right plan for your team.",                                 href: "/international-benefits/us-company-health-insurance" },
  { icon: Briefcase,   name: "Additional International Products",            desc: "Professional advice and guidance across a wide range of additional international protection products.",                    href: "/international-benefits/additional-international-products" },
];

const whyBenefits = [
  "Improved morale",
  "Increased productivity",
  "Improved Employer Value Proposition (EVP)",
  "Improved culture",
  "Improved Employee Engagement",
  "Recruiting the best staff",
  "Reduced absenteeism",
  "Reduced presenteeism",
  "Reduced staff turnover",
];

const processSteps = [
  { icon: BookOpen,       title: "Learning",       desc: "Assess the wants and needs of the business collaboratively." },
  { icon: BarChart2,      title: "Benchmarking",   desc: "Provide insight into what business of a similar size and sector offer." },
  { icon: PenLine,        title: "Designing",      desc: "Establish the best solutions and agree on timeframes." },
  { icon: Handshake,      title: "Negotiating",    desc: "Liaise with all providers to obtain the most competitive prices." },
  { icon: Settings2,      title: "Implementing",   desc: "Manage any policy/scheme set up on behalf of clients." },
  { icon: MessageSquare,  title: "Communicating",  desc: "Provide bespoke literature and onsite employee presentations to promote benefits." },
  { icon: ClipboardList,  title: "Managing",       desc: "Handle the everyday scheme management so that the clients don't have to." },
  { icon: RefreshCw,      title: "Reviewing",      desc: "Annual market reviews to ensure any solution remains effective and competitive." },
];

const vsItems = [
  "Offers a consistent range of benefits, and benefit levels, for staff across multiple countries.",
  "Globally mobile employees do not need to keep being removed and re-enrolled each time they move location. This can also help protect their underwriting and conditions covered.",
  "Pooling together schemes can provide more generous and flexible terms such as Medical History Disregarded underwriting on International Health Insurance plans and a higher Free Cover Limit on International Group Life Insurance products.",
  "Brings together a range of schemes in different languages, renewal dates, currencies and contact points into one centrally managed programme. It's more cost-effective and can save hundreds of HR hours.",
  "Reduces the extra paperwork required for managing separate contracts, paperwork, duplication, reporting, invoicing and payments.",
  "International benefits, particularly for worldwide health insurance, can sometimes be superior to the policies and facilities that you can find in domestic markets.",
];

const top5 = [
  {
    n: "1",
    title: "International Private Medical Insurance",
    body: "One of the earliest International Employee Benefits, it has been around since the 1970's. It has held the No1. spot for many years, in part due to the richness of the benefit compared to most single country offerings but also due to necessity — many countries require businesses to provide private health insurance for their employees.",
    href: "/international-benefits/int-business-health-insurance",
  },
  {
    n: "2",
    title: "International Group Life Insurance",
    body: "A starting point for many businesses looking to offer a broader International Employee Benefits offering due to its relatively low cost. It also offers the opportunity to avoid the difficulty of setting up numerous local schemes with differing currencies, renewal dates, contact points and added paperwork.",
    href: "/international-benefits/international-group-life-insurance",
  },
  {
    n: "3",
    title: "Pre-Assignment Screening",
    body: "This is a must-have for many businesses before they send an expatriate on assignment. It's also a specific requirement for certain industries like Oil & Gas, Maritime and Aviation. The idea is simple: ensure your employees are ready and prepared before they head abroad on a job posting, and reduce the chances of a failed assignment.",
    href: "/international-benefits/pre-assignment-screening",
  },
  {
    n: "4",
    title: "International Employee Assistance Programmes (iEAP)",
    body: "iEAPs are often attached to International Business Health Insurance products. This means they don't require an extra investment as the cost is included within the plan. Employee Assistance Programmes reflect an increasing recognition that employers need to look after the mental health of their workforce. This is particularly true for expatriate workers who carry their own duty of care and have specific requirements, especially if they are relocating with family.",
    href: "/international-benefits/int-employee-assistance-programmes",
  },
  {
    n: "5",
    title: "International Group Income Protection",
    body: "This is another benefit which has seen an increase in recent years as mainstream international insurers have added this to their product range. Employers see the benefits of centralising and harmonising their offering and can offer this product in countries which lack a similar domestic product. This is a benefit which also gives a large degree of protection for the employer, by paying a percentage of their salary should they not be able to work, as well as peace of mind for the employee.",
    href: "/international-benefits/international-group-income-protection",
  },
];

const tips = [
  {
    n: "1",
    title: "Blend your approach",
    body: [
      "Placing all your budget in one area can leave your benefit lopsided and employees disappointed unless you are just looking for protection in one area by design.",
      "An insurance-heavy approach (featuring International Health Insurance, International Business Life Insurance etc.), whilst excellent to provide, can leave staff feeling disengaged — benefits are only realised when staff are unwell or the worst happens.",
      "A wellness-only approach makes staff feel more engaged as benefits can be utilised more frequently, but they aren't much use if someone needs physiotherapy or an urgent diagnostic scan, nor does it provide much protection for your business.",
      "By blending the two approaches you can deliver the best of both worlds.",
    ],
  },
  {
    n: "2",
    title: "Consider your locations and the cost of replacing staff",
    body: [
      "Different countries have different standards and requirements when it comes to employee benefits. For example, you're forced to invest in a cost-heavy health insurance plan if you have staff in the US, but very few other staff benefits are mandated.",
      "The culture around employee benefits can vary greatly between countries and getting the balance right between global harmonisation and maintaining local expectations is important.",
      "For expatriates, or key personnel in overseas offices, you also need to consider the costs of an attractive benefits package against how much it would cost to replace them. Failed expatriate assignments can be very costly.",
    ],
  },
  {
    n: "3",
    title: "Promote and Communicate",
    body: [
      "Once you have chosen your policies, it's important to ensure people know what they have and how to use it.",
      "If you're using an independent intermediary (broker/consultant) to assist you with sourcing, devising and implementing your benefits provision, ask them to assist in how best to communicate the finished article to employees.",
      "Any good employee benefits consultancy will be happy to develop bespoke literature and spend time to help you promote the benefits and answer employee questions.",
      "We've heard from many businesses who made the mistake of investing in benefits without promoting them fully. The end result? Poor employee engagement.",
    ],
  },
  {
    n: "4",
    title: "Centralise and simplify",
    body: [
      "International businesses often have siloed benefits strategies for each individual country — usually because they are either unaware of the opportunity to have an all-inclusive international policy, or are concerned about following local requirements or customs.",
      "Sometimes the problem is internal: some organisations have different insurance mechanisms managed by different departments. Compartmentalising benefits often inhibits a joined-up approach and reduces the opportunity to drive cost efficiencies.",
      "If your business is working with multiple service providers via different internal stakeholders, it's likely you will pay more overall.",
    ],
  },
  {
    n: "5",
    title: "Measure success",
    body: [
      "Continuous review should be a priority — even if you are spending a small percentage of gross payroll on benefits or have them implemented solely to meet regulatory obligations.",
      "A few key questions should be asked regularly: What are we getting from our current benefit provision? Is it still valued by staff? Have requirements or regulation changed? Do our partners align with our company culture? Are we paying too much?",
      "These questions should be asked on an annual basis (at least) to avoid stagnation, maintain relevance and ensure the best possible return on investment.",
    ],
  },
];

const metlifeStats = [
  { pct: "58%", country: "China" },
  { pct: "57%", country: "United Kingdom" },
  { pct: "53%", country: "UAE" },
  { pct: "51%", country: "India" },
];

const faqs = [
  {
    q: "What do you need in place to properly support Expatriate employees?",
    a: "Supporting expatriates on an assignment is a good investment given the broader cost of the placement and the important work they will be doing for you.\n\nPre Assignment: Well-targeted selection process, Pre-Assignment Screening, Cultural Training.\n\nDuring Assignment: Ensure protection and support programmes are in place (International Medical Insurance, International Business Life Insurance, International Business Income Protection, International Employee Assistance Programme). Local support for non-work necessities (accommodation, utilities, language, schools, personal tax). Help building a social network. Regular check ins.\n\nPost Assignment: Re-integration with new team. Obtaining feedback.",
  },
  {
    q: "How do the typical employee benefit packages vary in different countries?",
    a: "They can vary greatly depending on the mandated benefits required and whether you're employing a local national or expatriate. Many of the typical employee benefits you would find in a local insurance market can be moved into an International Employee Benefits strategy, as per the product list above. Some, however, are very specific to that local market or a small group of countries (meal vouchers in France for example) and are not scalable. We will be producing country-specific typical benefit guides for international business hotspots within our Knowledge Hub over the coming months.",
  },
  {
    q: "What does an expatriate assignment cost?",
    a: "Sending expats on assignment is a significant investment for any business. In 2019 the UK was rated the most expensive country to send an expat by ECA International, global mobility experts. The average expat pay package for a middle manager in the UK comes to £311,240, representing a £44,688 rise in the last 12 months despite salaries remaining static. This drops down to £184,493 for the US, although varying widely depending on the city location. This drops further still to £69,280 in the UAE.\n\nThe typical expat package can include some or all of the below: Relocation expenses, Hardship allowance, Housing allowance, Education allowance, Automobile allowance, Home travel expenses, International Medical Insurance, International Group Life Insurance, International Group Income Protection Insurance, International Employee Assistance Programme, Local language course.",
  },
  {
    q: "What is Employee Engagement?",
    a: "Employees can generally be categorised into three levels of engagement:\n\nEngaged: Work with passion, feel a profound connection to their company, drive innovation, first ones in and last ones out, highly reliable, an advocate for the business.\n\nNot Engaged: Effectively \"checked out\", complete their contracted working hours only, barely achieve their targets and Key Performance Indicators, lack energy and passion.\n\nActively Disengaged: Act out their unhappiness at work, lack enthusiasm, behave disruptively, pull in the opposite direction, undermine the performance of others.\n\nEmployees that are highly engaged generate the highest levels of discretionary effort. That is to say that these individuals are more effective, more productive, stronger advocates of the business (to customers and other external stakeholders), and are less likely to seek employment elsewhere.",
  },
];

const sidebarLinks = [
  { icon: Globe,       label: "Int Business Health Insurance",         href: "/international-benefits/int-business-health-insurance" },
  { icon: Globe2,      label: "International Group Life Insurance",    href: "/international-benefits/international-group-life-insurance" },
  { icon: TrendingUp,  label: "International Group Income Protection", href: "/international-benefits/international-group-income-protection" },
  { icon: AlertCircle, label: "International Group Critical Illness",  href: "/international-benefits/international-group-critical-illness" },
  { icon: Plane,       label: "Group Business Travel Insurance",       href: "/international-benefits/group-business-travel-insurance" },
  { icon: Lock,        label: "Kidnap and Ransom Insurance",           href: "/international-benefits/kidnap-and-ransom-insurance" },
  { icon: Clock,       label: "Short-Term Int Health Insurance",       href: "/international-benefits/short-term-int-health-insurance" },
  { icon: Users,       label: "Int Employee Assistance Programmes",    href: "/international-benefits/int-employee-assistance-programmes" },
  { icon: ShieldAlert, label: "International Security Services",       href: "/international-benefits/international-security-services" },
  { icon: MapPin,      label: "Pre-Assignment Screening",              href: "/international-benefits/pre-assignment-screening" },
  { icon: Flag,        label: "US Company Health Insurance",           href: "/international-benefits/us-company-health-insurance" },
  { icon: Briefcase,   label: "Additional International Products",     href: "/international-benefits/additional-international-products" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-wider uppercase border border-secondary/15 mb-4">
      {children}
    </div>
  );
}

function SectionHeading({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={cn("text-2xl md:text-3xl font-extrabold text-secondary leading-tight", className)}>
      {children}
    </h2>
  );
}

function Divider() {
  return <div className="my-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />;
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-[#f5f4fa] transition-colors"
      >
        <span className="font-bold text-secondary text-sm leading-snug">{q}</span>
        <ChevronDown className={cn("w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-200", open && "rotate-180")} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-base text-muted-foreground leading-relaxed space-y-3 border-t border-border pt-4">
          {a.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
        </div>
      )}
    </div>
  );
}

// ─── TOC items ────────────────────────────────────────────────────────────────

const tocItems = [
  { id: "source",         label: "How should businesses source international benefits?" },
  { id: "what-are",       label: "What are International Employee Benefits?" },
  { id: "most-common",    label: "Most common International Employee Benefits" },
  { id: "our-approach",   label: "Our approach to EB Consultancy" },
  { id: "vs-domestic",    label: "International vs single country solutions" },
  { id: "which-benefits", label: "Which benefits are right for my business?" },
  { id: "how-important",  label: "How important are International Employee Benefits?" },
  { id: "faqs",           label: "Frequently Asked Questions" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function InternationalBenefits() {
  return (
    <PageLayout className="bg-white">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-secondary">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(105deg, rgba(0,54,72,0.96) 0%, rgba(0,54,72,0.88) 45%, rgba(0,54,72,0.55) 70%, rgba(0,54,72,0.2) 100%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/40 text-xs font-medium mb-6">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70">International Benefits</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-bold tracking-wider uppercase border border-white/15 mb-6">
              Engage International Employee Benefits
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              International<br />
              <span style={{ color: "#b55db0" }}>Employee Benefits</span>
            </h1>
            <p className="text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              Nurture & protect your international workforce
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg,#76186f,#9b2594)" }}
              >
                Get a free quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:01273974419"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white border border-white/25 hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4" /> 01273 974419
              </a>
            </div>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-14 pt-8 border-t border-white/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Building2, val: "500+",  label: "Businesses supported" },
                { icon: Globe2,    val: "70+",   label: "Countries covered" },
                { icon: Users,     val: "23+",   label: "Years combined international expertise" },
                { icon: Trophy,    val: "3×",    label: "UK award wins" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <s.icon className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white leading-none">{s.val}</div>
                    <div className="text-white/45 text-xs mt-0.5">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <TrustBar />

      {/* ── Body ─────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-start">

          {/* ── MAIN CONTENT ───────────────────────────────────────────── */}
          <main className="flex-1 min-w-0">

            <TableOfContents items={tocItems} />

            {/* 1 — How should businesses source international benefits? */}
            <section id="source">
              <SectionLabel>Our service</SectionLabel>
              <SectionHeading>How should businesses source international benefits?</SectionHeading>
              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                <p>Our expert consultants are ready to help your business:</p>
              </div>
              <div className="mt-3 flex flex-col gap-2 mb-6">
                {[
                  "Navigate the International Employee Benefits market",
                  "Simplify & streamline all policies in one place",
                  "Bolster the health, happiness & wellbeing of your global team",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-[#f5f4fa]">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-base font-medium text-secondary">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Increasing numbers of businesses are employing talent from around the world. Some companies employ a remote workforce scattered across different countries, while others have offices in different global locations. Either way, delivering and managing employee benefits is going to be one of the biggest stressors for HR teams.
                </p>
                <p>Key challenges for HR include:</p>
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Legal compliance", "Administrative complexity", "Consistent benefits application", "Cost control"].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-[#f5f4fa]">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-base font-medium text-secondary">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  It's important that HR teams can source expert advice from people who are working in their best interest. An international employee benefits consultant, like Engage Health Group, specialises in helping companies source, implement and manage benefits policies in different countries. The Engage International team is led by Ian Abbott, formerly of Bupa Global, and Penny Pemberton, formerly of Aon.
                </p>
                <p>Our expert team will:</p>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                {[
                  "Help you draw up an employee benefits scheme or review any current policies in place",
                  "Source tailored policies designed for your business",
                  "Gather a wide variety of quotes from across the market",
                  "Ensure legal compliance across different jurisdictions",
                  "Help implement policies across the business",
                  "Manage policies on your behalf and review them when up for renewal",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#f5f4fa] transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-base text-secondary leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl bg-secondary/5 border border-secondary/10 text-base text-secondary/80">
                The next best course of action is to contact one of our team for a free no-obligation call.{" "}
                <a href="tel:01273974419" className="text-primary font-medium hover:underline">Tel.: +44 (0)1273 974419</a>{" "}
                or email{" "}
                <a href="mailto:enquiries@engagehealthgroup.co.uk" className="text-primary font-medium hover:underline">enquiries@engagehealthgroup.co.uk</a>{" "}
                to find out how we can help.
              </div>
            </section>

            <Divider />

            {/* 2 — Products */}
            <section id="what-are">
              <SectionLabel>Our international services</SectionLabel>
              <SectionHeading>What are International Employee Benefits?</SectionHeading>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                International Employee Benefits are provided by businesses looking to deliver perks and protections to employees around the globe. Businesses usually require such schemes when they have: An employee footprint in more than one country, expatriate staff, a high degree of global mobility and travel, or a desire to offer the very highest level of benefits available to protect, retain and attract their C-Suite employees and key personnel.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {products.map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <Link
                      href={p.href}
                      className="group relative flex flex-col p-5 rounded-2xl border border-border bg-white hover:shadow-lg hover:border-secondary/20 transition-all duration-300 overflow-hidden h-full"
                    >
                      <div
                        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: "linear-gradient(90deg,#003648,#76186f)" }}
                      />
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                        style={{ background: "linear-gradient(135deg,rgba(0,54,72,0.12),rgba(118,24,111,0.08))" }}
                      >
                        <p.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <h3 className="font-bold text-secondary text-[0.9rem] leading-snug mb-1">{p.name}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{p.desc}</p>
                      <div className="mt-auto pt-4 flex items-center gap-1 text-xs font-semibold text-secondary opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                        Learn more <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-secondary/5 border border-secondary/10 text-base text-secondary/80">
                With over 23 years of combined experience in the International Employee Benefit arena, Engage Health Group is expertly placed to establish your unique needs. For FREE expert advice call{" "}
                <a href="tel:01273974419" className="text-primary font-medium hover:underline">+44 (0)1273 974419</a>{" "}
                or email{" "}
                <a href="mailto:enquiries@engagehealthgroup.co.uk" className="text-primary font-medium hover:underline">enquiries@engagehealthgroup.co.uk</a>.
              </div>
            </section>

            <Divider />

            {/* 2 — Why offer */}
            <section>
              <SectionLabel>The business case</SectionLabel>
              <SectionHeading>Why offer International Employee Benefits?</SectionHeading>
              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  There are four key elements to this. A carefully planned global benefits programme will: Enable your business to cultivate a happier, healthier and more productive workforce; Ensure the business abides by local employee health insurance requirements; Centralise the management of global benefit schemes in one place; Support all your employees, wherever they are in the world.
                </p>
                <p>
                  It's worth considering International Health Insurance in isolation. Certain countries, including the USA, UAE and Saudi Arabia, all have regulations stating companies must have health insurance for employees. This is particularly true of expats, whose coverage can be linked to visas and entry into the country. A worldwide health insurance scheme can solve that issue in one policy rather than having to invest in (and manage) a complex patchwork of policies.
                </p>
                <p>
                  A joined up and well-executed employee benefit and wellness strategy can also have far reaching positive effects within your business. A healthy and protected workforce is good for business and your International Employee Benefits provision is the perfect vehicle to deliver a range of positive outcomes, including:
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyBenefits.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-[#f5f4fa]">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-base font-medium text-secondary">{item}</span>
                  </div>
                ))}
              </div>

              {/* Pull quote */}
              <div className="mt-8 p-6 rounded-2xl border-l-4 border-secondary bg-secondary/5">
                <p className="text-secondary font-medium italic leading-relaxed">
                  "Engage Health Group have been very helpful with our members, many of whom are based in third world countries. They have solved the problems raised regarding the COVID pandemic especially relating to evacuation if needed."
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-base text-muted-foreground">— Eva Maguire, General Manager, Timber Trading</span>
                </div>
              </div>
            </section>

            <Divider />

            {/* 3 — Top 5 most common */}
            <section id="most-common">
              <SectionLabel>Most popular</SectionLabel>
              <SectionHeading>What are the most common International Employee Benefits?</SectionHeading>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We have ranked below the top 5 most common International Employee Benefits and why they are increasingly popular.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                {top5.map((item) => (
                  <div key={item.n} className="flex gap-4 p-5 rounded-2xl border border-border bg-white hover:border-secondary/20 hover:shadow-sm transition-all duration-200">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-sm font-black text-white"
                      style={{ background: "linear-gradient(135deg,#003648,#76186f)" }}
                    >
                      {item.n}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-secondary text-sm mb-1">{item.title}</h4>
                      <p className="text-base text-muted-foreground leading-relaxed">{item.body}</p>
                      <Link href={item.href} className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-secondary hover:text-primary transition-colors">
                        Learn more <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <Divider />

            {/* 4 — How we work */}
            <section id="our-approach">
              <SectionLabel>Our process</SectionLabel>
              <SectionHeading>Our approach to Employee Benefits Consultancy</SectionHeading>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {processSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.title}
                      className="flex gap-4 p-5 rounded-2xl border border-border bg-white hover:border-secondary/20 hover:shadow-sm transition-all duration-200"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "linear-gradient(135deg,#003648,#76186f)" }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-secondary text-sm">{step.title}</h4>
                        <p className="text-base text-muted-foreground mt-1 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <Divider />

            {/* 5 — International vs domestic */}
            <section id="vs-domestic">
              <SectionLabel>International vs domestic</SectionLabel>
              <SectionHeading>International Employee Benefits vs single country solutions</SectionHeading>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                The advantages of providing an international scheme will vary depending on the specific nature of a business and what it's looking to achieve. However, below we have listed the benefits that can be leveraged by implementing an International Employee Benefits strategy, compared to a domestic one:
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {vsItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#f5f4fa]">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-base text-secondary leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <Divider />

            {/* 6 — Which benefits are right for my business? */}
            <section id="which-benefits">
              <SectionLabel>Expert guidance</SectionLabel>
              <SectionHeading>Which benefits are right for my business?</SectionHeading>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Every company is different so there is no single answer. We would advise reviewing business need across a range of areas, including: company culture, industry benchmarking, age of the workforce, volume of expatriates, global mobility, job role and budget. It's important to not rush any decisions and give yourself enough time to conduct a thorough review. To help you get started, here are five key things to consider:
              </p>
              <div className="mt-8 flex flex-col gap-4">
                {tips.map((tip) => (
                  <div key={tip.n} className="group relative rounded-2xl border border-border bg-white overflow-hidden hover:border-secondary/20 hover:shadow-md transition-all duration-200">
                    {/* Accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "linear-gradient(90deg,#003648,#76186f)" }} />
                    <div className="flex gap-5 p-6">
                      {/* Number badge */}
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-lg font-black text-white shadow-sm"
                        style={{ background: "linear-gradient(135deg,#003648,#76186f)" }}
                      >
                        {tip.n}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-extrabold text-secondary text-base mb-2 leading-snug">{tip.title}</h4>
                        <div className="h-px bg-border mb-3" />
                        <div className="space-y-2">
                          {tip.body.map((para, i) => (
                            <p key={i} className="text-base text-muted-foreground leading-relaxed">{para}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <Divider />

            {/* 7 — How important are International Employee Benefits? */}
            <section id="how-important">
              <SectionLabel>The importance</SectionLabel>
              <SectionHeading>How important are International Employee Benefits?</SectionHeading>
              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Employees all over the world cite the benefits package offered by companies as an important consideration. A global 2017 study by Metlife found that improved benefits were a key reason employees stayed in their role, or moved to a new one:
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {metlifeStats.map((s) => (
                  <div key={s.country} className="flex flex-col items-center justify-center p-5 rounded-2xl bg-[#f5f4fa] border border-border text-center">
                    <span className="text-3xl font-black text-secondary">{s.pct}</span>
                    <span className="text-xs text-muted-foreground mt-1">of employees in {s.country}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A well-designed International Employee Benefits scheme is a great way to stand out from competitors due to their quality, scope and flexibility. Compliance is often also a major challenge for international businesses. Many businesses struggle to scale local benefits solutions when they start opening overseas offices. Plus, sourcing local solutions in new locations can mean having to duplicate processes and add complexity, or additional resources, to a HR function.
                </p>
              </div>
            </section>

            <Divider />

            {/* 8 — FAQs */}
            <section id="faqs">
              <SectionLabel>FAQs</SectionLabel>
              <SectionHeading>Frequently Asked Questions</SectionHeading>
              <div className="mt-6 flex flex-col gap-3">
                {faqs.map((faq) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </section>

          </main>

          {/* ── SIDEBAR ──────────────────────────────────────────────── */}
          <aside className="w-full lg:w-80 xl:w-[340px] flex-shrink-0 space-y-5 lg:sticky lg:top-24 self-start">

            {/* CTA card */}
            <div
              className="rounded-2xl p-6 text-white overflow-hidden relative"
              style={{ background: "linear-gradient(135deg,#003648 0%,#76186f 100%)" }}
            >
              <img
                src="/logomark.png"
                alt=""
                aria-hidden="true"
                className="absolute -bottom-6 -right-6 w-40 h-40 object-contain opacity-[0.08] brightness-0 invert pointer-events-none select-none"
              />
              <div className="relative">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold mb-4">
                  FREE consultation
                </div>
                <h3 className="text-xl font-extrabold mb-2 leading-snug text-white">
                  Get expert advice today
                </h3>
                <p className="text-white/85 text-sm leading-relaxed mb-5">
                  No charge, no obligation — just straightforward advice from our team of international specialists.
                </p>
                <Link
                  href="/get-a-quote"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm bg-white text-secondary hover:bg-white/90 transition-colors"
                >
                  Get a free quote <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="mt-3 flex flex-col gap-2">
                  <a href="tel:01273974419" className="flex items-center gap-2 text-sm text-white/85 hover:text-white transition-colors">
                    <Phone className="w-4 h-4" /> +44 (0)1273 974419
                  </a>
                  <a href="mailto:enquiries@engagehealthgroup.co.uk" className="flex items-center gap-2 text-sm text-white/85 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" /> enquiries@engagehealthgroup.co.uk
                  </a>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="rounded-2xl border border-border bg-white p-5">
              <h3 className="font-extrabold text-secondary text-sm uppercase tracking-wider mb-4">
                International Services
              </h3>
              <div className="flex flex-col gap-0.5">
                {sidebarLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#f5f4fa] transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-secondary/10 flex-shrink-0 group-hover:bg-secondary transition-colors">
                      <link.icon className="w-3.5 h-3.5 text-secondary group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-secondary transition-colors flex-1">
                      {link.label}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-secondary transition-colors" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="rounded-2xl border border-border bg-[#f5f4fa] p-5">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-secondary font-medium italic leading-relaxed">
                "Engage Health Group have been very helpful with our members, many of whom are based in third world countries. They have solved the problems raised regarding the COVID pandemic especially relating to evacuation if needed."
              </p>
              <p className="text-xs text-muted-foreground mt-3">— Eva Maguire, General Manager, Timber Trading</p>
            </div>

          </aside>
        </div>
      </div>
    </PageLayout>
  );
}
