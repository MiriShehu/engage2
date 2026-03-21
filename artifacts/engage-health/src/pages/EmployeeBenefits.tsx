import { PageLayout } from "@/components/layout";
import { TrustBar } from "@/components/sections/trust";
import { Link } from "wouter";
import heroBg from "@assets/Employee-Benefits-main-heading1_1773875144473.jpg";
import tipBlend from "@assets/Emp-Benefits-blend-your-approach_1773875338242.jpg";
import tipPromote from "@assets/Emp-Benefits-promote-communicate_1773875338242.jpg";
import tipManage from "@assets/Emp.-Benefits-manage-in-one-place_1773875338242.jpg";
import tipMeasure from "@assets/woman-2773007_1280_1773875338243.jpg";
import award2024 from "@assets/HPA24-Best-Group-International-Advice-Firm-yellow_1773869302815.jpg";
import award2023 from "@assets/HPA_Winner-Badges_0219_1773869302816.jpg";
import award2022 from "@assets/HPA10_WIN_YELLOW_1773869302815.jpg";
import { motion } from "framer-motion";
import {
  Shield, Heart, TrendingUp, AlertCircle, Smile, Activity,
  HeartPulse, DollarSign, Key, UserCheck, Stethoscope, MonitorDot,
  CheckCircle2, Phone, Mail, ArrowRight, ChevronRight, Star,
  Users, Building2, Globe2, Trophy
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Data ─────────────────────────────────────────────────────────────────────

const products = [
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

const whyBenefits = [
  "Improved morale",
  "Increased productivity",
  "Improved Employer Value Proposition (EVP)",
  "Improved employee engagement",
  "Improved recruitment",
  "Reduced absenteeism",
  "Reduced presenteeism",
  "Reduced staff turnover",
];

const processSteps = [
  { n: "01", title: "Learn & Understand",   desc: "We begin by learning about your business, its current challenges and desired outcomes." },
  { n: "02", title: "Share Intelligence",    desc: "We provide insider knowledge into what businesses of a similar size and sector offer their workers." },
  { n: "03", title: "Design & Create",       desc: "We work out the best solutions for your business, present them to you and agree on timeframes." },
  { n: "04", title: "Negotiate & Price",     desc: "We liaise with ALL insurers and service providers to obtain the most competitive pricing." },
  { n: "05", title: "Launch the Policy",     desc: "We set up and implement the policy/scheme on your behalf to ensure a smooth start." },
  { n: "06", title: "Raise Awareness",       desc: "We provide bespoke literature and perform onsite presentations to promote benefits to staff." },
  { n: "07", title: "Manage the Scheme",     desc: "We handle the everyday management of the scheme so you don't have to." },
  { n: "08", title: "Review & Evaluate",     desc: "We perform annual market reviews to ensure your scheme remains effective and competitively priced." },
];

const tips = [
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

const taxItems = [
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

const sidebarLinks = [
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

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase border border-primary/15 mb-4">
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EmployeeBenefits() {
  return (
    <PageLayout className="bg-white">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-secondary">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Dark gradient overlay — left side opaque for text, right side lighter to reveal image */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(105deg, rgba(0,54,72,0.96) 0%, rgba(0,54,72,0.88) 45%, rgba(0,54,72,0.55) 70%, rgba(0,54,72,0.2) 100%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/40 text-xs font-medium mb-6">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70">Employee Benefits</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-bold tracking-wider uppercase border border-white/15 mb-6">
              UK Employee Benefits Consultancy
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Employee Benefits<br />
              <span style={{ color: "#b55db0" }}>for UK Businesses</span>
            </h1>
            <p className="text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              UK businesses have a wide range of choice when it comes to investing in employee benefits. The decisions you make can have a major bearing on how successful you are in attracting and retaining talent.
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
            {/* Stat numbers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Building2, val: "500+", label: "Businesses supported" },
                { icon: Globe2,    val: "70+",  label: "Countries covered" },
                { icon: Users,     val: "30+",  label: "Years combined expertise" },
                { icon: Trophy,    val: "3×",   label: "UK award wins" },
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

      {/* ── Body: main + sidebar ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-start">

          {/* ── MAIN CONTENT ─────────────────────────────────────────────── */}
          <main className="flex-1 min-w-0">

            {/* 1 — Benefits to consider */}
            <section>
              <SectionLabel>What we offer</SectionLabel>
              <SectionHeading>Employee benefits to consider for your business</SectionHeading>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Here's a snapshot of employee benefits for you to consider — most of which we can help you with. Click any product to learn more.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {products.map((p, i) => (
                  <Link key={p.name} href={p.href}>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group relative flex flex-col p-5 rounded-2xl border border-border bg-white hover:shadow-lg hover:border-primary/20 transition-all duration-300 cursor-pointer overflow-hidden h-full"
                  >
                    {/* Accent bar top */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "linear-gradient(90deg,#76186f,#003648)" }}
                    />
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                      style={{ background: "linear-gradient(135deg,rgba(118,24,111,0.12),rgba(0,54,72,0.08))" }}
                    >
                      <p.icon className="w-5 h-5 text-primary" />
                    </div>
                    {/* Text */}
                    <h3 className="font-bold text-secondary text-[0.9rem] leading-snug mb-1">
                      {p.name}
                      {p.subName && (
                        <span className="block font-normal text-muted-foreground text-xs mt-0.5">{p.subName}</span>
                      )}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{p.desc}</p>
                    {/* Learn more link */}
                    <div className="mt-auto pt-4 flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                      Learn more <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </motion.div>
                  </Link>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-secondary/5 border border-secondary/10 text-base text-secondary/80">
                For FREE access to impartial advice and personalised quotes, email{" "}
                <a href="mailto:enquiries@engagehealthgroup.co.uk" className="text-primary font-medium hover:underline">
                  enquiries@engagehealthgroup.co.uk
                </a>{" "}
                or call{" "}
                <a href="tel:01273974419" className="text-primary font-medium hover:underline">01273 974419</a>.
              </div>
            </section>

            <Divider />

            {/* 2 — Why offer employee benefits */}
            <section>
              <SectionLabel>The business case</SectionLabel>
              <SectionHeading>Why offer an employee benefits scheme?</SectionHeading>
              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  An employee benefits package is a key weapon in the armoury for any business looking to recruit and retain talented employees. Research revealed that almost half (48%) of workers feel benefits would make them stay at their job even if another company offered them a raise, while nine in ten claimed they'd give up a 5% raise in exchange for more benefits.
                </p>
                <p>
                  The talent shortage has hit a 15-year high — which suggests the importance of delivering an enticing benefits programme is only increasing.
                </p>
                <p>
                  The best employee benefit schemes provide effective health and wellbeing support to the whole team, helping them remain happy, healthy and motivated. The business itself stands to benefit in innumerable ways:
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyBenefits.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-[#f5f4fa]">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-base font-medium text-secondary">{item}</span>
                  </div>
                ))}
              </div>

              {/* Pull quote */}
              <div className="mt-8 p-6 rounded-2xl border-l-4 border-primary bg-primary/5">
                <p className="text-secondary font-medium italic leading-relaxed">
                  "Engage Health Group were great. Quick to respond, knowledgeable and personable. They worked on an ideal plan for my business and it was up & running at pace."
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">— Digital Marketing Business, Sussex · 20 employees</span>
                </div>
              </div>
            </section>

            <Divider />

            {/* 3 — How we work with you */}
            <section>
              <SectionLabel>Our process</SectionLabel>
              <SectionHeading>How we work with you</SectionHeading>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                At Engage Health Group, we're experienced in designing, implementing and managing employee benefit packages for companies large and small. Here's what to expect:
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {processSteps.map((step) => (
                  <div
                    key={step.n}
                    className="flex gap-4 p-5 rounded-2xl border border-border bg-white hover:border-primary/20 hover:shadow-sm transition-all duration-200"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-sm font-black text-white"
                      style={{ background: "linear-gradient(135deg,#003648,#76186f)" }}
                    >
                      {step.n}
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary text-sm">{step.title}</h4>
                      <p className="text-base text-muted-foreground mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <Divider />

            {/* 4 — 4 ways to improve */}
            <section>
              <SectionLabel>Expert guidance</SectionLabel>
              <SectionHeading>4 ways to improve any employee benefits scheme</SectionHeading>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Each business has its own unique culture, but certain pearls of wisdom apply to all companies whatever the industry, workforce demographics or budget.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {tips.map((tip, i) => (
                  <motion.div
                    key={tip.n}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="group rounded-2xl overflow-hidden border border-border bg-white hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                  >
                    {/* Photo */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={tip.img}
                        alt={tip.imgAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Dark scrim + number badge */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                      <div
                        className="absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center text-white font-black text-sm shadow-lg"
                        style={{ background: "linear-gradient(135deg,#76186f,#003648)" }}
                      >
                        {tip.n}
                      </div>
                    </div>
                    {/* Text */}
                    <div className="p-5">
                      <h4 className="font-bold text-secondary mb-2 text-[0.95rem]">{tip.title}</h4>
                      <p className="text-base text-muted-foreground leading-relaxed">{tip.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            <Divider />

            {/* 5 — Tax */}
            <section>
              <SectionLabel>Tax & compliance</SectionLabel>
              <SectionHeading>Are employee benefits taxable?</SectionHeading>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                The tax status of employee benefits varies according to the specific policy in question. Here's a quick overview:
              </p>

              <div className="mt-6 divide-y divide-border rounded-2xl border border-border overflow-hidden">
                {taxItems.map((item, i) => (
                  <div
                    key={item.name}
                    className={cn(
                      "flex gap-4 p-5",
                      i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"
                    )}
                  >
                    <div className="w-2 flex-shrink-0 rounded-full bg-primary/30 self-stretch" />
                    <div>
                      <h4 className="font-bold text-secondary text-sm mb-1">{item.name}</h4>
                      <p className="text-base text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA block */}
              <div
                className="hidden sm:block mt-8 rounded-2xl overflow-hidden relative"
                style={{ background: "linear-gradient(135deg,#003648 0%,#76186f 100%)" }}
              >
                <img
                  src="/logomark.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute -bottom-8 -right-8 w-48 h-48 object-contain opacity-[0.07] brightness-0 invert pointer-events-none select-none"
                />
                <div className="relative p-7 flex flex-col sm:flex-row sm:items-center gap-6">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/50 mb-2">Speak to a specialist</p>
                    <h4 className="text-lg font-extrabold text-white leading-snug mb-1">
                      Not sure which benefits are right for you?
                    </h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Our advisers provide impartial, whole-of-market guidance — free of charge, with no obligation.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <a
                        href="tel:01273974419"
                        className="flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white transition-colors"
                      >
                        <Phone className="w-4 h-4 flex-shrink-0" /> 01273 974419
                      </a>
                      <a
                        href="mailto:enquiries@engagehealthgroup.co.uk"
                        className="flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white transition-colors"
                      >
                        <Mail className="w-4 h-4 flex-shrink-0" /> enquiries@engagehealthgroup.co.uk
                      </a>
                    </div>
                  </div>
                  <Link
                    href="/get-a-quote"
                    className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-white text-secondary hover:bg-white/90 transition-colors whitespace-nowrap"
                  >
                    Get a free quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </section>
          </main>

          {/* ── SIDEBAR ──────────────────────────────────────────────────── */}
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
                  No charge, no obligation — just straightforward advice from our team of specialists.
                </p>
                <Link
                  href="/get-a-quote"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm bg-white text-secondary hover:bg-white/90 transition-colors"
                >
                  Get a free quote <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="mt-3 flex flex-col gap-2">
                  <a
                    href="tel:01273974419"
                    className="flex items-center gap-2 text-sm text-white/85 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" /> 01273 974419
                  </a>
                  <a
                    href="mailto:enquiries@engagehealthgroup.co.uk"
                    className="flex items-center gap-2 text-sm text-white/85 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" /> enquiries@engagehealthgroup.co.uk
                  </a>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="rounded-2xl border border-border bg-white p-5">
              <h3 className="font-extrabold text-secondary text-sm uppercase tracking-wider mb-4">
                Our Services
              </h3>
              <div className="flex flex-col gap-0.5">
                {sidebarLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#f5f4fa] transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-primary/10 flex-shrink-0 group-hover:bg-primary transition-colors">
                      <link.icon className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-secondary transition-colors flex-1">
                      {link.label}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Award badge */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg,#76186f,#003648)" }}>
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-sm leading-snug">Award-winning consultancy</h4>
                  <p className="text-muted-foreground text-xs mt-1 leading-relaxed">
                    Best International Group Advice Firm — UK Health & Protection Awards 2022, 2023 & 2024.
                  </p>
                </div>
              </div>
              <img src={award2023} alt="Best International Group Advice Firm 2023" className="w-full rounded-xl object-contain mb-2" />
              <div className="grid grid-cols-2 gap-2">
                <img src={award2024} alt="Best Group International Advice Firm 2024" className="w-full rounded-xl object-contain" />
                <img src={award2022} alt="Best Group Healthcare Adviser 2022" className="w-full rounded-xl object-contain" />
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
                "Fantastic service from start to finish. The team at Engage Health really took time to understand our business before recommending a benefits package that works for everyone."
              </p>
              <p className="text-xs text-muted-foreground mt-3">— Tech Start-up, London · 45 employees</p>
            </div>

          </aside>
        </div>
      </div>
    </PageLayout>
  );
}
