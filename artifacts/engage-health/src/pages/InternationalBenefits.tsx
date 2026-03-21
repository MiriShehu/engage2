import { PageLayout } from "@/components/layout";
import { TrustBar } from "@/components/sections/trust";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight, Phone, ChevronRight, Building2, Globe2, Users, Trophy, Star
} from "lucide-react";
import { cn } from "@/lib/utils";
import { TableOfContents } from "@/components/ui/TableOfContents";
import heroBg from "@assets/international-employee-benefits-hero.jpg";

import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { ContactSidebarCard } from "@/components/shared/ContactSidebarCard";
import { TestimonialSidebarCard } from "@/components/shared/TestimonialSidebarCard";
import { IconList } from "@/components/shared/IconList";

import {
  products, whyBenefits, processSteps, vsItems, top5, tips,
  metlifeStats, faqs, sidebarLinks, tocItems
} from "@/data/pages/internationalBenefitsData";

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

              <IconList 
                items={[
                  "Navigate the International Employee Benefits market",
                  "Simplify & streamline all policies in one place",
                  "Bolster the health, happiness & wellbeing of your global team",
                ]} 
                className="mt-3 mb-6" 
              />

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Increasing numbers of businesses are employing talent from around the world. Some companies employ a remote workforce scattered across different countries, while others have offices in different global locations. Either way, delivering and managing employee benefits is going to be one of the biggest stressors for HR teams.
                </p>
                <p>Key challenges for HR include:</p>
              </div>

              <IconList 
                items={["Legal compliance", "Administrative complexity", "Consistent benefits application", "Cost control"]} 
                className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3" 
              />

              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  It's important that HR teams can source expert advice from people who are working in their best interest. An international employee benefits consultant, like Engage Health Group, specialises in helping companies source, implement and manage benefits policies in different countries. The Engage International team is led by Ian Abbott, formerly of Bupa Global, and Penny Pemberton, formerly of Aon.
                </p>
                <p>Our expert team will:</p>
              </div>

              <IconList 
                items={[
                  "Help you draw up an employee benefits scheme or review any current policies in place",
                  "Source tailored policies designed for your business",
                  "Gather a wide variety of quotes from across the market",
                  "Ensure legal compliance across different jurisdictions",
                  "Help implement policies across the business",
                  "Manage policies on your behalf and review them when up for renewal",
                ]} 
                className="mt-4" 
                itemClassName="bg-transparent hover:bg-[#f5f4fa] transition-colors"
              />
              
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

            {/* 3 — Why offer */}
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

              <IconList 
                items={whyBenefits} 
                className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3" 
              />

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

            {/* 4 — Top 5 most common */}
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

            {/* 5 — How we work */}
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

            {/* 6 — International vs domestic */}
            <section id="vs-domestic">
              <SectionLabel>International vs domestic</SectionLabel>
              <SectionHeading>International Employee Benefits vs single country solutions</SectionHeading>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                The advantages of providing an international scheme will vary depending on the specific nature of a business and what it's looking to achieve. However, below we have listed the benefits that can be leveraged by implementing an International Employee Benefits strategy, compared to a domestic one:
              </p>
              
              <IconList 
                items={vsItems} 
                className="mt-6 flex flex-col gap-3" 
              />
            </section>

            <Divider />

            {/* 7 — Which benefits are right for my business? */}
            <section id="which-benefits">
              <SectionLabel>Expert guidance</SectionLabel>
              <SectionHeading>Which benefits are right for my business?</SectionHeading>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Every company is different so there is no single answer. We would advise reviewing business need across a range of areas, including: company culture, industry benchmarking, age of the workforce, volume of expatriates, global mobility, job role and budget. It's important to not rush any decisions and give yourself enough time to conduct a thorough review. To help you get started, here are five key things to consider:
              </p>
              <div className="mt-8 flex flex-col gap-4">
                {tips.map((tip) => (
                  <div key={tip.n} className="group relative rounded-2xl border border-border bg-white overflow-hidden hover:border-secondary/20 hover:shadow-md transition-all duration-200">
                    <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "linear-gradient(90deg,#003648,#76186f)" }} />
                    <div className="flex gap-5 p-6">
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

            {/* 8 — How important are International Employee Benefits? */}
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

            {/* 9 — FAQs */}
            <section id="faqs">
              <SectionLabel>FAQs</SectionLabel>
              <SectionHeading>Frequently Asked Questions</SectionHeading>
              <FaqAccordion items={faqs} variant="default" />
            </section>

          </main>

          {/* ── SIDEBAR ──────────────────────────────────────────────── */}
          <aside className="w-full lg:w-80 xl:w-[340px] flex-shrink-0 space-y-5 lg:sticky lg:top-24 self-start">

            <ContactSidebarCard />

            {/* Quick links */}
            <div className="rounded-2xl border border-border bg-white p-5">
              <h3 className="font-extrabold text-secondary text-sm uppercase tracking-wider mb-4">
                International Services
              </h3>
              <div className="flex flex-col gap-0.5">
                {sidebarLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#f5f4fa] transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-secondary/10 flex-shrink-0 group-hover:bg-secondary transition-colors">
                        <Icon className="w-3.5 h-3.5 text-secondary group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-secondary transition-colors flex-1">
                        {link.label}
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-secondary transition-colors" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <TestimonialSidebarCard 
              quote="Engage Health Group have been very helpful with our members, many of whom are based in third world countries. They have solved the problems raised regarding the COVID pandemic especially relating to evacuation if needed."
              author="Eva Maguire, General Manager, Timber Trading"
            />

          </aside>
        </div>
      </div>
    </PageLayout>
  );
}
