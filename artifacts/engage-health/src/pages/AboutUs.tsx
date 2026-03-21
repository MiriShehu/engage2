import { PageLayout } from "@/components/layout";
import { ClientLogos } from "@/components/sections/trust/ClientLogos";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight, Phone, Mail, ChevronRight, Globe2,
  Users, Trophy, CheckCircle2, Quote, Building2, Clock,
  MessageSquare, BarChart3, Rocket, Plane, HeartHandshake, BadgeCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

import marshmallow  from "@assets/0x0_1773872351104.png";
import boohoo       from "@assets/boohoo_1773872351104.png";
import breathe      from "@assets/breathe_1773872351105.png";
import cae          from "@assets/image2_1773872351105.png";
import klarna       from "@assets/klarna-logo_1773872351106.png";
import pleo         from "@assets/p_1773872351106.png";
import seedcamp     from "@assets/seedcamp_1773872351106.png";
import superscript  from "@assets/superscript_1773872351107.jpg";
import teladoc      from "@assets/teledoc-1_1773872351107.png";
import unmind       from "@assets/unmind_1773872351107.png";
import vayner       from "@assets/vayner-media-logo-e1741707986477_1773872351107.png";

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

function FounderQuote({ quote, name, title }: { quote: string; name: string; title: string }) {
  return (
    <div className="my-6 rounded-2xl border border-primary/20 bg-[#f5f4fa] p-6 flex gap-5 items-start">
      <img src="/nick-hale.png" alt={name} className="w-14 h-14 rounded-full object-cover flex-shrink-0 border-2 border-primary/20" />
      <div>
        <Quote className="w-6 h-6 text-primary/30 mb-2" />
        <p className="text-[15px] font-semibold text-secondary italic leading-relaxed">"{quote}"</p>
        <div className="mt-3">
          <p className="text-sm font-extrabold text-secondary">{name}</p>
          <p className="text-xs text-primary font-medium">{title}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialBlock({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="rounded-2xl border border-border bg-secondary/3 p-6 flex flex-col gap-4">
      <Quote className="w-8 h-8 text-primary/30 flex-shrink-0" />
      <p className="text-base text-secondary font-medium italic leading-relaxed">"{quote}"</p>
      <p className="text-sm font-bold text-primary">{author}</p>
    </div>
  );
}

const clientLogos = [
  { src: teladoc,     alt: "Teladoc Health" },
  { src: pleo,        alt: "Deel" },
  { src: cae,         alt: "CAE" },
  { src: boohoo,      alt: "boohoo" },
  { src: unmind,      alt: "Unmind" },
  { src: marshmallow, alt: "Marshmallow" },
  { src: breathe,     alt: "Breathe" },
  { src: seedcamp,    alt: "Seedcamp" },
  { src: superscript, alt: "SuperScript" },
  { src: vayner,      alt: "VaynerMedia" },
  { src: klarna,      alt: "Klarna" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutUs() {
  return (
    <PageLayout className="bg-white">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-secondary">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/about-us-hero.jpg)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(105deg, rgba(0,54,72,0.96) 0%, rgba(0,54,72,0.88) 45%, rgba(0,54,72,0.55) 70%, rgba(0,54,72,0.2) 100%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="flex items-center gap-2 text-white/40 text-xs font-medium mb-6">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70">About Us</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-bold tracking-wider uppercase border border-white/15 mb-6">
              Who we are
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              About{" "}
              <span style={{ color: "#b55db0" }}>Engage Health Group</span>
            </h1>
            <p className="text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              Helping UK companies gain superior value and support on their local and global employee benefits policies.
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-14 pt-8 border-t border-white/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Clock,     val: "50",   label: "Years combined experience" },
                { icon: Globe2,    val: "70+",  label: "Countries covered" },
                { icon: Building2, val: "500+", label: "Businesses supported" },
                { icon: Trophy,    val: "3×",   label: "UK Health & Protection Award wins" },
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

      {/* ── Body ─────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-start">

          {/* ── MAIN CONTENT ─────────────────────────────────────────────── */}
          <main className="flex-1 min-w-0">

            {/* 1 — Who we are */}
            <section>
              <SectionLabel>Who we are</SectionLabel>
              <SectionHeading>About Engage Health Group</SectionHeading>

              <FounderQuote
                quote="I've witnessed many UK companies get treated in a transactional way when it comes to employee benefits. We believe in supporting companies and their staff throughout the life of their policy, not just when the renewal period comes around."
                name="Nick Hale"
                title="Founding Director, Engage Health Group"
              />

              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Engage Health Group is an employee benefits consultancy and brokerage dedicated to helping UK companies gain superior value and support on their health and protection policies.
                </p>
                <p>
                  The company was founded in 2016 by Nick Hale CII with a mission to ensure that all businesses could access impartial advice and ongoing support.
                </p>
                <p>Our award-winning team provides free quotation services and administrative support across the following policies (in the UK and globally):</p>
              </div>

              <ul className="mt-4 space-y-2">
                {[
                  "Group Health Insurance",
                  "Group Life Insurance",
                  "Group Income Protection",
                  "Group Critical Illness Coverage",
                  "Group Health Cash Plans",
                  "Key Person Insurance",
                  "Employee Assistance Programmes",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[15px] text-secondary font-medium">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>Engage Health Group's services expand beyond the UK and into more than 70 countries globally.</p>
                <p>Our dedication to customer service and innovation has earned us awards at the UK Health & Protection Awards for three consecutive years.</p>
                <p>
                  Tell us about your business and get expert advice on{" "}
                  <a href="tel:01273974419" className="text-primary font-medium hover:underline">01273 974419</a>{" "}
                  or email{" "}
                  <a href="mailto:enquiries@engagehealthgroup.co.uk" className="text-primary font-medium hover:underline">enquiries@engagehealthgroup.co.uk</a>.
                </p>
              </div>
            </section>

            <Divider />

            {/* 2 — How we work */}
            <section>
              <SectionLabel>How we work</SectionLabel>
              <SectionHeading>Our service</SectionHeading>

              <TestimonialBlock
                quote="Working with Engage Health Group has been seamless and we are very pleased with the service, communication and overall experience. The guys are very friendly, knowledgeable and helpful and made the process of signing up for group health insurance very easy and simple. Five-star service and would definitely recommend."
                author="Amber Goldstein, Creative Rockstars Agency"
              />

              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Engage Health Group advises on every aspect of sourcing, implementing and managing benefit schemes in the UK and around the world.
                </p>
                <p>
                  As a trusted partner to hundreds of businesses, we alleviate HR's workload and guide them through the finer details of how policies work and help them attain the most effective benefits at the most competitive price.
                </p>
                <p>Our service includes:</p>
              </div>

              <ul className="mt-4 space-y-2">
                {[
                  "Impartial advice addressing the specific needs of your company",
                  "Policy quotes sourced from across the whole market",
                  "Introduction of new policies to your teams",
                  "Assistance with claims and staff queries",
                  "Ongoing admin support, including managing new leavers/joiners",
                  "Scheme reviews during the annual renewal period",
                  "Dedicated account manager",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[15px] text-secondary font-medium">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Whether you're an ambitious start-up or an established global company, we provide clarity and work to maximise your return on investment now and in the future. And our service comes at no extra cost to your policy.
                </p>
                <p>
                  If you're looking for bespoke advice, call{" "}
                  <a href="tel:01273974419" className="text-primary font-medium hover:underline">01273 974419</a>{" "}
                  or email{" "}
                  <a href="mailto:enquiries@engagehealthgroup.co.uk" className="text-primary font-medium hover:underline">enquiries@engagehealthgroup.co.uk</a>.
                </p>
              </div>

              {/* Client logos */}
              <div className="mt-10">
                <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground/60 mb-5">Trusted by</p>
                <div className="flex flex-wrap gap-6 items-center">
                  {clientLogos.map((logo) => (
                    <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-7 w-auto object-contain grayscale opacity-50 hover:opacity-80 hover:grayscale-0 transition-all duration-300" />
                  ))}
                </div>
              </div>
            </section>

            <Divider />

            {/* 3 — Award-winning */}
            <section>
              <SectionLabel>Award-winning support</SectionLabel>
              <SectionHeading>Recognised for excellence</SectionHeading>

              <FounderQuote
                quote="Our objective has always been to offer world class advice to our customers and make the world of employee benefits as straightforward as possible for them."
                name="Nick Hale"
                title="Founding Director, Engage Health Group"
              />

              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Engage Health Group has received recognition for the quality of its international expertise for three consecutive years at the UK Health & Protection Awards. In 2023 we won Best International Group Advice Firm, and in 2024 we picked up Best International Group Advice Firm.
                </p>
                <p>
                  The Engage team consists of experienced ex-industry insiders from some of the world's biggest insurers and brokers, including the likes of Bupa Global, Aetna and Vitality UK. But we also have some of the brightest young talent in the industry.
                </p>
                <p>Together we have the same goal: to provide great outcomes for the businesses we work for and the staff they employ.</p>
                <p>
                  <Link href="/team" className="text-primary font-medium hover:underline">Find out who's who here.</Link>
                </p>
                <p>
                  For FREE award-winning support, call us on{" "}
                  <a href="tel:01273974419" className="text-primary font-medium hover:underline">01273 974419</a>{" "}
                  or email{" "}
                  <a href="mailto:enquiries@engagehealthgroup.co.uk" className="text-primary font-medium hover:underline">enquiries@engagehealthgroup.co.uk</a>.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 items-center">
                {[
                  { src: "/award-2022.jpg", label: "UK Health & Protection Award 2022" },
                  { src: "/award-2023.jpg", label: "UK Health & Protection Award 2023" },
                  { src: "/award-2024.jpg", label: "UK Health & Protection Award 2024" },
                ].map((a) => (
                  <img key={a.src} src={a.src} alt={a.label} className="h-24 w-auto object-contain" />
                ))}
              </div>
            </section>

            <Divider />

            {/* 4 — International expertise */}
            <section>
              <SectionLabel>International expertise</SectionLabel>
              <SectionHeading>Global employee benefits</SectionHeading>

              <TestimonialBlock
                quote="Teya has collaborated with Engage on various insurance projects. Their professionalism and knowledge has been extremely helpful in finding the right insurance coverage for our needs. They took the time to understand our situation and made recommendations based on Teya's specific requirements. The entire process was smooth and hassle-free always with attention to detail and budget assumptions."
                author="Stamatios Andreou, Teya"
              />

              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Engage Health Group has a specialist international team dedicated to helping companies source and manage employee benefits policies in multiple countries.
                </p>
                <p>
                  As with our UK service, clients receive a dedicated account manager to relieve the administration from their HR teams.
                </p>
                <p>
                  Engage International was founded by Ian Abbott, formerly of Bupa Global. Our international team has won awards for three consecutive years thanks to its innovative approach to finding solutions to some of the most complex company requirements.
                </p>
                <p>
                  Our most recent innovation,{" "}
                  <Link href="/xcelerate" className="text-primary font-medium hover:underline">Xcelerate</Link>
                  , is a single health insurance policy designed to cover employees in multiple countries.
                </p>
              </div>
            </section>

            <Divider />

            {/* 5 — Values & charity */}
            <section>
              <SectionLabel>Our values and charitable initiatives</SectionLabel>
              <SectionHeading>Putting expertise to good use</SectionHeading>

              <TestimonialBlock
                quote="Sussex Cancer Fund is really grateful for the support of the Engage Charity Health Fund, and we were so delighted to have been chosen as beneficiaries. Being able to access the health and wellbeing benefits of the scheme goes a little way to thank our staff for their hard work and provides them some additional support so they can focus on the charity's mission of providing the best possible cancer care in Sussex."
                author="Joanna Godden, Sussex Cancer Fund"
              />

              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We like to put our expertise to good use in the wider community. That's why we launched the Engage Charity Health Fund. The fund provides free healthcare to the employees of selected small charities and ensures they can access treatment for everyday healthcare costs.
                </p>
                <p>Current recipients of the fund include: Rockinghorse Children's Charity, The Starr Trust, Sussex Cancer Fund and Grassroots Suicide Prevention.</p>
                <p>
                  We believe that employee benefits are much more than a box-ticking exercise. A carefully considered and well-executed strategy can have a huge impact on an individual's health and wellbeing. In turn, this can drive staff recruitment and retention, and ensure that people are happy, healthy and ready to give their best.
                </p>
                <p>That's why our client relationships are never just a transaction and advice is never given on a whim.</p>
                <p>
                  <a href="https://www.engagehealthgroup.co.uk/engage-charity-health-fund/" target="_blank" rel="noreferrer" className="text-primary font-medium hover:underline">
                    Read more about the Engage Charity Health Fund.
                  </a>
                </p>
              </div>
            </section>

            <Divider />

            {/* 6 — The Engage Way */}
            <section>
              <SectionLabel>The Engage Way</SectionLabel>
              <SectionHeading>How we deliver for you</SectionHeading>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: MessageSquare,
                    title: "One-to-one consultation",
                    body: "Whether you're launching a scheme for the first time or seeking a review of your current strategy and policies, we're here to answer all your questions and provide the best solutions.",
                  },
                  {
                    icon: BarChart3,
                    title: "Market-wide quotes",
                    body: "Our team will source policies and price points from across the market – usually superior to what you can find publicly available. We will also explain the crucial policy points in straight-forward language.",
                  },
                  {
                    icon: Rocket,
                    title: "Scheme implementation",
                    body: "We will advise on the best way of making benefits available to your teams, including guidance on benefits platforms and apps. We can also help onboard your teams onto your new scheme via in-office or virtual presentations.",
                  },
                  {
                    icon: Plane,
                    title: "UK and global",
                    body: "Our expertise go beyond the UK. Our international team advise on the best way to support teams and individuals in different parts of the world too. Global benefits can involve significant investment; we make sure it's wisely spent.",
                  },
                  {
                    icon: HeartHandshake,
                    title: "Claims assistance",
                    body: "We're here to help should you ever encounter issues when making a claim on a policy. We help clear up any confusion and, if we believe you've been wrongly refused a claim, we will argue your case.",
                  },
                  {
                    icon: BadgeCheck,
                    title: "No contracts, no fees",
                    body: "We won't tie you into any contracts or charge you for our advice. In essence, we take a finder's fee from the providers we place you with. Be assured: we do not have \"preferred partnership\" arrangements - we always seek out the best policies from across all available providers.",
                  },
                ].map((step) => (
                  <div key={step.title} className="flex gap-4 p-5 rounded-2xl border border-border bg-white hover:shadow-sm transition-shadow">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "linear-gradient(135deg,rgba(118,24,111,0.12),rgba(0,54,72,0.08))" }}
                    >
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary text-[0.95rem] mb-1">{step.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </main>

          {/* ── SIDEBAR ──────────────────────────────────────────────────── */}
          <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 lg:sticky lg:top-[88px] self-start space-y-6">

            {/* CTA card */}
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-wider text-muted-foreground mb-1">Free consultation</p>
              <h3 className="text-lg font-extrabold text-secondary mb-3 leading-snug">
                Get expert advice on employee benefits today
              </h3>
              <Link
                href="/get-a-quote"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-opacity mb-3"
                style={{ background: "linear-gradient(135deg,#003648,#76186f)" }}
              >
                Get a free quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:01273974419" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-secondary border border-border hover:bg-muted/40 transition-colors">
                <Phone className="w-4 h-4" /> 01273 974419
              </a>
              <a href="mailto:enquiries@engagehealthgroup.co.uk" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-secondary border border-border hover:bg-muted/40 transition-colors mt-2">
                <Mail className="w-4 h-4" /> Email us
              </a>
            </div>

            {/* Sidebar founder quote */}
            <div className="rounded-2xl border border-border bg-secondary/3 p-6">
              <img src="/nick-hale.png" alt="Nick Hale" className="w-12 h-12 rounded-full object-cover mb-3 border-2 border-primary/20" />
              <Quote className="w-6 h-6 text-primary/30 mb-2" />
              <p className="text-sm text-secondary font-medium italic leading-relaxed mb-3">
                "I've witnessed many UK companies get treated in a transactional way when it comes to employee benefits. We believe in supporting companies and their staff throughout the life of their policy, not just when the renewal period comes around."
              </p>
              <p className="text-xs font-extrabold text-secondary">Nick Hale</p>
              <p className="text-xs text-primary font-medium">Founding Director, Engage Health Group</p>
            </div>

            {/* Quick links */}
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-wider text-muted-foreground mb-4">Quick links</p>
              <ul className="space-y-2">
                {[
                  { label: "Meet the team", href: "/team" },
                  { label: "Employee Benefits", href: "/employee-benefits" },
                  { label: "International Benefits", href: "/international-benefits" },
                  { label: "Xcelerate", href: "/xcelerate" },
                  { label: "Knowledge Hub", href: "/knowledge-hub" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors py-1">
                      <ChevronRight className="w-3.5 h-3.5 text-primary/50" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </aside>
        </div>
      </div>

      {/* ── Client Logos ─────────────────────────────────────────────────── */}
      <ClientLogos />

    </PageLayout>
  );
}
