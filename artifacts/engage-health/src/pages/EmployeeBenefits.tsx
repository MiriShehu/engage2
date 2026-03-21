import { PageLayout } from "@/components/layout";
import { TrustBar } from "@/components/sections/trust";
import { Link } from "wouter";
import heroBg from "@assets/Employee-Benefits-main-heading1_1773875144473.jpg";
import award2024 from "@assets/HPA24-Best-Group-International-Advice-Firm-yellow_1773869302815.jpg";
import award2023 from "@assets/HPA_Winner-Badges_0219_1773869302816.jpg";
import award2022 from "@assets/HPA10_WIN_YELLOW_1773869302815.jpg";
import { motion } from "framer-motion";
import {
  CheckCircle2, Phone, Mail, ArrowRight, ChevronRight, Star,
  Users, Building2, Globe2, Trophy
} from "lucide-react";
import { cn } from "@/lib/utils";

import { products, whyBenefits, processSteps, tips, taxItems, sidebarLinks } from "@/data/pages/employeeBenefitsData";
import { SectionLabel, SectionHeading, Divider } from "@/components/service-page/ServicePageSections";
import { IconList } from "@/components/shared/IconList";
import { ContactSidebarCard } from "@/components/shared/ContactSidebarCard";
import { TestimonialSidebarCard } from "@/components/shared/TestimonialSidebarCard";

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

              <IconList 
                items={whyBenefits}
                className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
                itemClassName="bg-[#f5f4fa]"
                icon={CheckCircle2}
              />

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

              <div className="mt-8 flex flex-col">
                {processSteps.map((step, i) => (
                  <div key={step.n} className="flex gap-0 items-stretch">
                    {/* Timeline column */}
                    <div className="flex flex-col items-center flex-shrink-0 w-10">
                      {/* dot */}
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0 mt-1 ring-4 ring-primary/15"
                        style={{ background: "linear-gradient(135deg,#76186f,#003648)" }}
                      />
                      {/* vertical line — hidden on last item */}
                      {i < processSteps.length - 1 && (
                        <div className="w-px flex-1 mt-1" style={{ background: "linear-gradient(to bottom,#76186f40,#00364820)" }} />
                      )}
                    </div>

                    {/* Horizontal dash + content */}
                    <div className={cn("flex items-start gap-3 flex-1", i < processSteps.length - 1 ? "pb-8" : "")}>
                      {/* dash line */}
                      <div className="w-5 h-px mt-[7px] flex-shrink-0" style={{ background: "linear-gradient(90deg,#76186f,#003648)" }} />
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/50 mb-0.5">{step.n}</p>
                        <h4 className="font-extrabold text-secondary text-base leading-snug">{step.title}</h4>
                        <p className="text-base text-muted-foreground mt-1 leading-relaxed">{step.desc}</p>
                      </div>
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

            <ContactSidebarCard />

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

            <TestimonialSidebarCard
              quote="Fantastic service from start to finish. The team at Engage Health really took time to understand our business before recommending a benefits package that works for everyone."
              author="Tech Start-up, London · 45 employees"
              className="bg-[#f5f4fa]"
            />

          </aside>
        </div>
      </div>
    </PageLayout>
  );
}
