import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Globe, Zap, Shield, Users, Star, Phone, ChevronRight } from "lucide-react";

// Assets
import peopleGlobe from "@assets/xcelerate/people-globe.jpg";
import commuters from "@assets/xcelerate/portrait-smiling-commuters-sitting-waiting-area.jpg";
import keyboard from "@assets/xcelerate/keyboard.png";
import engageLogo from "@assets/xcelerate/Engage-Health-Group-Main-Logo_4C-qwjz8716wy8rnu049qvlrgt6n4p80z7e0w5c38akfc.png";
import unitedLogo from "@assets/xcelerate/united-healthcare-global-logo-1-e1762769752422.png";

// Components
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import {
  Counter, Reveal, WorldDots, CompanyNameCard, CheckItem
} from "@/components/sections/xcelerate/XcelerateComponents";

// Data
import {
  xcelerateStats, globalHiringChecks, companiesRow1, companiesRow2,
  coverageCardsRow1, coverageCardsRow2, coverageCardsRow3
} from "@/data/pages/xcelerateData";

export default function Xcelerate() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');

        .xp { font-family: 'Inter', sans-serif; }
        .xp-serif { font-family: 'Lora', serif; }

        @keyframes xcHeroIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes xcStatIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes xcGlow {
          0%,100% { opacity: 0.4; }
          50%     { opacity: 0.7; }
        }
        .xp-hero-badge  { animation: xcHeroIn 0.7s ease 0.1s both; }
        .xp-hero-h1     { animation: xcHeroIn 0.7s ease 0.25s both; }
        .xp-hero-sub    { animation: xcHeroIn 0.7s ease 0.4s both; }
        .xp-hero-logos  { animation: xcHeroIn 0.7s ease 0.55s both; }
        .xp-hero-ctas   { animation: xcHeroIn 0.7s ease 0.7s both; }
        .xp-stat-0 { animation: xcStatIn 0.6s ease 0.2s both; }
        .xp-stat-1 { animation: xcStatIn 0.6s ease 0.35s both; }
        .xp-stat-2 { animation: xcStatIn 0.6s ease 0.5s both; }

        .xp-btn-primary {
          background: #76186f;
          color: #fff;
          font-weight: 600;
          letter-spacing: 0.01em;
          transition: background 0.18s, transform 0.18s;
        }
        .xp-btn-primary:hover {
          background: #5e1258;
          transform: translateY(-1px);
        }
        .xp-btn-white {
          background: rgba(255,255,255,0.12);
          color: #fff;
          border: 1.5px solid rgba(255,255,255,0.25);
          font-weight: 500;
          backdrop-filter: blur(8px);
          transition: background 0.18s, border-color 0.18s, transform 0.18s;
        }
        .xp-btn-white:hover {
          background: rgba(255,255,255,0.2);
          border-color: rgba(255,255,255,0.4);
          transform: translateY(-1px);
        }
        .xp-btn-outline-dark {
          border: 1.5px solid #003648;
          color: #003648;
          font-weight: 600;
          transition: all 0.18s;
        }
        .xp-btn-outline-dark:hover {
          background: #003648;
          color: #fff;
          transform: translateY(-1px);
        }
        .xp-cover-item {
          transition: background 0.18s, border-color 0.18s;
        }
        .xp-cover-item:hover {
          background: #fdfafc;
          border-color: #f3dff1;
        }
        .xp .btn-cta {
          box-shadow: none;
        }
        .xp .btn-cta:hover {
          box-shadow: none;
        }
        .xp-partner-card {
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .xp-partner-card:hover {
          box-shadow: 0 12px 40px -8px rgba(0,54,72,0.12);
          transform: translateY(-3px);
        }
      `}</style>

      <div className="xp bg-white">

        {/* ══ HERO ═══════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[92vh] flex flex-col overflow-hidden bg-secondary">

          {/* Hero background photo */}
          <div className="absolute inset-0 pointer-events-none">
            <img src={peopleGlobe} alt="" className="w-full h-full object-cover object-center opacity-[0.12]" />
          </div>

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }}
          />

          {/* World dot map overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <WorldDots />
          </div>

          {/* Soft radial glow (Purple branding) */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 60% at 50% 30%, rgba(118,24,111,0.25) 0%, transparent 70%)", animation: "xcGlow 6s ease-in-out infinite" }} />
          
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-28 pb-16">

            {/* Badge */}
            <div className="xp-hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-7">
              <Zap className="w-3.5 h-3.5 text-white/90" />
              <span className="text-xs font-bold tracking-[0.1em] text-white/90">POWERED BY UNITEDHEALTHCARE GLOBAL</span>
            </div>

            {/* Headline */}
            <h1 className="xp-hero-h1 text-white leading-tight mb-6"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "-0.02em" }}>
              Xcelerate
            </h1>

            <p className="xp-hero-sub text-white/80 mb-10 max-w-2xl leading-relaxed"
              style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)", fontWeight: 300 }}>
              Global health insurance for <strong className="text-white font-semibold">fast-growing businesses.</strong>
            </p>

            {/* Partner logos row */}
            <div className="xp-hero-logos flex flex-wrap items-center justify-center gap-4 mb-12">
              <div className="flex items-center px-6 py-4 rounded-2xl backdrop-blur-md shadow-lg"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}>
                <img src={engageLogo} alt="Engage Health Group" className="w-auto h-[38px]"
                  style={{ filter: "brightness(0) invert(1)" }} />
              </div>

              <div className="flex items-center justify-center w-8 h-8 rounded-full text-white/50"
                style={{ background: "rgba(255,255,255,0.05)" }}>
                <span className="text-sm font-light">×</span>
              </div>

              <div className="flex items-center px-6 py-4 rounded-2xl backdrop-blur-md shadow-lg"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}>
                <img src={unitedLogo} alt="UnitedHealthcare Global" className="w-auto h-[38px]"
                  style={{ filter: "brightness(0) invert(1)" }} />
              </div>
            </div>

            {/* CTAs */}
            <div className="xp-hero-ctas flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <Link href="/get-a-quote"
                className="btn-cta inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm group bg-primary hover:bg-[#5e1258] text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Get pricing
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a href="#eligibility"
                className="group inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-white/5 text-white border-2 border-white/20 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm">
                Find out if Xcelerate is right
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Floating Stats Bar */}
          <div className="relative z-20 w-full mt-auto translate-y-8 sm:translate-y-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                {xcelerateStats.map(({ n, sfx, pfx, top, bot, cls }, i) => (
                  <div key={i}
                    className={`${cls} flex flex-col items-center justify-center py-8 px-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl`}>
                    <div className="text-white font-black tabular-nums leading-none mb-2 drop-shadow-sm"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(2.5rem, 4vw, 3rem)" }}>
                      <Counter to={n} suffix={sfx} prefix={pfx} />
                    </div>
                    <div className="text-white/90 text-sm font-bold tracking-wider uppercase mb-1">{top}</div>
                    <div className="text-white/60 text-sm">{bot}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ GLOBAL HIRING MADE EASY ════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0f7fa] border border-[#003648]/20 mb-5">
                <Globe className="w-3 h-3 text-[#003648]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#003648]">Global coverage</span>
              </div>
              <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1.1, color: "#003648", letterSpacing: "-0.02em" }}
                className="mb-6">
                Global hiring<br />made easy.
              </h2>
              <p className="text-slate-500 leading-relaxed text-lg mb-5" style={{ fontWeight: 300 }}>
                The world of work has changed. Businesses increasingly depend on the hard work and talent of overseas workers. That's why Engage Health Group built Xcelerate.
              </p>
              <p className="text-slate-500 leading-relaxed text-lg mb-5" style={{ fontWeight: 300 }}>
                Now you can protect all your employees, wherever they are, under a single health insurance policy. No more sifting through multiple policies with multiple providers. Roll everything into one and trim the admin.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                {globalHiringChecks.map((f, i) => <CheckItem key={i} text={f} />)}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] relative">
                <img src={commuters} alt="Global workforce" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,54,72,0.7) 0%, transparent 55%)" }} />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl p-4 backdrop-blur-md"
                  style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <p className="text-white text-xs font-semibold">Protecting teams in 150+ countries</p>
                  <p className="text-white/55 text-xs mt-0.5">A single policy. No borders.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══ EXPERT ADVICE & ONGOING SUPPORT ═══════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image — left */}
            <Reveal from="left">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] relative">
                <img src={peopleGlobe} alt="Expert consultants" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,54,72,0.65) 0%, transparent 50%)" }} />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl p-4 backdrop-blur-md"
                  style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <p className="text-white text-xs font-semibold">Award-winning international consultants</p>
                  <p className="text-white/55 text-xs mt-0.5">Dedicated support from day one.</p>
                </div>
              </div>
            </Reveal>

            {/* Text — right */}
            <Reveal from="right" delay={100}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0f7fa] border border-[#003648]/20 mb-5">
                <Star className="w-3 h-3 text-[#003648]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#003648]">Expert support</span>
              </div>
              <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1.1, color: "#003648", letterSpacing: "-0.02em" }}
                className="mb-6">
                Expert advice &amp;<br />ongoing support.
              </h2>
              <p className="text-slate-500 leading-relaxed text-lg mb-5" style={{ fontWeight: 300 }}>
                Xcelerate is backed by our award-winning consultants at Engage Health Group. We will review any current policies you have in place to ensure the plan is the perfect fit for you.
              </p>
              <p className="text-slate-500 leading-relaxed text-lg" style={{ fontWeight: 300 }}>
                Once the policy is implemented, you will receive ongoing administrative support. We'll manage the enrollment of any new joiners, answer any queries you have about the policy and much more.
              </p>
            </Reveal>

          </div>
        </section>

        {/* ══ TRUST BAR ══════════════════════════════════════════════════════ */}
        <section className="bg-[#f5f4fa] py-20 border-y border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-[#003648]/50 mb-3">Trusted by</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003648] leading-tight"
              style={{ fontFamily: "'Inter', sans-serif" }}>
              Trusted by more than 500 businesses worldwide
            </h2>
            <p className="mt-3 text-slate-500 text-base max-w-xl mx-auto">
              Covering over 50,000 employees across the UK &amp; Internationally
            </p>
          </div>
          <div className="space-y-4">
            <InfiniteSlider gap={16} duration={120} durationOnHover={240}
              className="overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              {[...companiesRow1, ...companiesRow1, ...companiesRow1].map((name, i) => (
                <CompanyNameCard key={i} name={name} />
              ))}
            </InfiniteSlider>
            <InfiniteSlider gap={16} duration={140} durationOnHover={280} reverse
              className="overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              {[...companiesRow2, ...companiesRow2, ...companiesRow2].map((name, i) => (
                <CompanyNameCard key={i} name={name} />
              ))}
            </InfiniteSlider>
          </div>
        </section>

        {/* ══ WORLD-CLASS HEALTHCARE ════════════════════════════════════════ */}
        <section className="py-28 overflow-hidden bg-gray-50 border-t border-slate-200 relative">
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#003648]/[0.02] rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

            {/* Header */}
            <Reveal className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#003648]/20 bg-[#f0f7fa] mb-5">
                <Shield className="w-3.5 h-3.5 text-[#003648]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#003648]">Coverage</span>
              </div>
              <h2 className="text-[#003648] mb-5"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                World-class healthcare<br />for global teams.
              </h2>
              <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
                Xcelerate provides a comprehensive range of world-class healthcare, including, but not limited to:
              </p>
            </Reveal>

            {/* Bento grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">

              {/* Large featured card — spans 2 cols */}
              <Reveal delay={0} className="col-span-2">
                <div className="group h-full rounded-2xl p-8 cursor-default relative overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#003648]/20 hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none transition-transform duration-500 group-hover:scale-110"
                    style={{ background: "radial-gradient(circle, rgba(118,24,111,0.06) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#f0f7fa] border border-[#003648]/10 group-hover:bg-[#003648] transition-colors duration-300">
                    <Globe className="w-6 h-6 text-[#003648] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-[#003648] font-extrabold text-xl mb-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}>Global medical access</p>
                  <p className="text-slate-500 text-base leading-relaxed">
                    Access to medical facilities &amp; specialists anywhere in the world, excluding the USA as standard, ensuring your team is uniformly protected across all your international operating territories.
                  </p>
                </div>
              </Reveal>

              {/* Regular cards */}
              {coverageCardsRow1.map(({ icon: Icon, title, desc }, i) => (
                <Reveal key={i} delay={80 + i * 60}>
                  <div className="group h-full rounded-2xl p-7 cursor-default bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#003648]/20 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-[#f0f7fa] border border-[#003648]/10 group-hover:bg-[#003648] transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#003648] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-[#003648] font-bold text-lg mb-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}>{title}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Second row — 4 equal cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {coverageCardsRow2.map(({ icon: Icon, title, desc }, i) => (
                <Reveal key={i} delay={i * 50}>
                  <div className="group h-full rounded-2xl p-7 cursor-default bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#003648]/20 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-[#f0f7fa] border border-[#003648]/10 group-hover:bg-[#003648] transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#003648] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-[#003648] font-bold text-lg mb-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}>{title}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Third row — 2 cards + CTA card */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {coverageCardsRow3.map(({ icon: Icon, title, desc }, i) => (
                <Reveal key={i} delay={i * 50}>
                  <div className="group h-full rounded-2xl p-7 cursor-default bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#003648]/20 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-[#f0f7fa] border border-[#003648]/10 group-hover:bg-[#003648] transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#003648] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-[#003648] font-bold text-lg mb-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}>{title}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </Reveal>
              ))}

              {/* CTA card — spans 2 cols */}
              <Reveal delay={120} className="col-span-2">
                <div className="h-full rounded-2xl p-8 flex flex-col justify-between bg-[#003648] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[60px] pointer-events-none group-hover:bg-primary/30 transition-colors duration-500" />
                  <div className="relative z-10">
                    <p className="text-white font-extrabold text-xl mb-3"
                      style={{ fontFamily: "'Inter', sans-serif" }}>
                      Ready for a personalised quote?
                    </p>
                    <p className="text-white/80 text-base leading-relaxed mb-6 max-w-md">
                      Every Xcelerate plan is tailored to your team. Get expert advice and pricing specific to your business from our award-winning consultants.
                    </p>
                  </div>
                  <Link href="/get-a-quote"
                    className="relative z-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold self-start group/btn bg-primary hover:bg-[#5e1258] text-white transition-colors shadow-md">
                    Request a personalised quotation
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </Reveal>
            </div>

          </div>
        </section>

        {/* ══ BUILT BY / POWERED BY ════════════════════════════════════════════ */}
        <section className="py-24 border-y border-slate-100" style={{ background: "#f8fafc" }}>
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Reveal className="text-center mb-14">
              <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.1, color: "#003648", letterSpacing: "-0.02em" }}>
                Built by Engage Health Group
              </h2>
              <p className="text-slate-400 text-sm mt-2">Powered by UnitedHealthcare</p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  role: "Built by",
                  logo: engageLogo,
                  alt: "Engage Health Group",
                  text: "An employee benefits consultancy that has won multiple awards for the quality of its international advice and the support it offers to business customers.",
                  bgImg: keyboard,
                  logoBg: "#f0f7fa",
                },
                {
                  role: "Powered by",
                  logo: unitedLogo,
                  alt: "UnitedHealthcare Global",
                  text: "A global health insurance provider that can support employees in more than 150 countries, ensuring comprehensive cover for organisations and globally mobile workforces.",
                  bgImg: null,
                  logoBg: "#f0f7ff",
                },
              ].map(({ role, logo, alt, text, bgImg, logoBg }, i) => (
                <Reveal key={i} delay={i * 120}>
                  <div className="xp-partner-card rounded-2xl overflow-hidden border-2 border-slate-200 h-full relative">
                    {bgImg && (
                      <>
                        <img src={bgImg} alt="" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" style={{ opacity: 0.05 }} />
                        <div className="absolute inset-0 bg-white/93 pointer-events-none" />
                      </>
                    )}
                    <div className="relative p-8">
                      <p className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-5">{role}</p>
                      <div className="inline-flex items-center justify-center px-5 py-4 rounded-xl mb-6"
                        style={{ background: logoBg }}>
                        <img src={logo} alt={alt} className="h-[60px] w-auto object-contain" />
                      </div>
                      <p className="text-slate-500 text-base leading-relaxed">{text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="text-center text-slate-500 text-base leading-relaxed max-w-3xl mx-auto">
                Together, we have designed a radical new way of delivering healthcare to start-ups with an international footprint. If your business depends on global talent, it's worth getting in touch with our expert consultants to find out if it can fulfil your requirements — and to receive a personalised quotation.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ══ ELIGIBILITY ════════════════════════════════════════════════════ */}
        <section id="eligibility" className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0f7fa] border border-[#003648]/20 mb-5">
                <Users className="w-3 h-3 text-[#003648]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#003648]">Eligibility</span>
              </div>
              <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1.1, color: "#003648", letterSpacing: "-0.02em" }}
                className="mb-6">
                Who can join<br />Xcelerate?
              </h2>
              <p className="text-slate-500 leading-relaxed text-lg mb-8" style={{ fontWeight: 300 }}>
                If you're a start-up with employees in more than one country, there's a good chance you will qualify for the scheme. Fill in the form below for a free assessment from one of our international specialists.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/get-a-quote"
                  className="xp-btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm shadow-md">
                  Check your eligibility
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:01273974419"
                  className="xp-btn-outline-dark inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm">
                  <Phone className="w-4 h-4" />
                  01273 974419
                </a>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-2xl relative">
                {/* Decorative subtle stripe */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#003648] to-[#76186f]" />
                <div className="p-8 sm:p-10">
                  <h3 className="font-extrabold text-[#003648] text-2xl mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}>
                    Get a free assessment
                  </h3>
                  <p className="text-slate-500 text-base mb-8">Please complete this form and someone will be in touch shortly.</p>

                  <form className="flex flex-col gap-5" onSubmit={e => e.preventDefault()}>

                    {/* Row: First + Last name */}
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "First Name", type: "text" },
                        { label: "Last Name",  type: "text" },
                      ].map(({ label, type }) => (
                        <div key={label}>
                          <label className="text-slate-600 text-xs font-bold uppercase tracking-wider block mb-1.5">{label} <span className="text-primary">*</span></label>
                          <input required type={type} placeholder={label}
                            className="w-full px-4 py-3 rounded-xl text-sm text-slate-800 placeholder-slate-400 outline-none focus:ring-2 focus:ring-primary/40 border border-slate-200 bg-slate-50 transition-all" />
                        </div>
                      ))}
                    </div>

                    {/* Phone & Company */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-600 text-xs font-bold uppercase tracking-wider block mb-1.5">Phone <span className="text-primary">*</span></label>
                        <input required type="tel" placeholder="Phone number"
                          className="w-full px-4 py-3 rounded-xl text-sm text-slate-800 placeholder-slate-400 outline-none focus:ring-2 focus:ring-primary/40 border border-slate-200 bg-slate-50 transition-all" />
                      </div>
                      <div>
                        <label className="text-slate-600 text-xs font-bold uppercase tracking-wider block mb-1.5">Company <span className="text-primary">*</span></label>
                        <input required type="text" placeholder="Company name"
                          className="w-full px-4 py-3 rounded-xl text-sm text-slate-800 placeholder-slate-400 outline-none focus:ring-2 focus:ring-primary/40 border border-slate-200 bg-slate-50 transition-all" />
                      </div>
                    </div>

                    {/* Email & Employees */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-600 text-xs font-bold uppercase tracking-wider block mb-1.5">Email <span className="text-primary">*</span></label>
                        <input required type="email" placeholder="Email address"
                          className="w-full px-4 py-3 rounded-xl text-sm text-slate-800 placeholder-slate-400 outline-none focus:ring-2 focus:ring-primary/40 border border-slate-200 bg-slate-50 transition-all" />
                      </div>
                      <div>
                        <label className="text-slate-600 text-xs font-bold uppercase tracking-wider block mb-1.5">Employees <span className="text-primary">*</span></label>
                        <input required type="number" min="1" placeholder="Number"
                          className="w-full px-4 py-3 rounded-xl text-sm text-slate-800 placeholder-slate-400 outline-none focus:ring-2 focus:ring-primary/40 border border-slate-200 bg-slate-50 transition-all" />
                      </div>
                    </div>

                    {/* Comments */}
                    <div>
                      <label className="text-slate-600 text-xs font-bold uppercase tracking-wider block mb-1.5">Comments</label>
                      <textarea rows={3} placeholder="Any additional comments..."
                        className="w-full px-4 py-3 rounded-xl text-sm text-slate-800 placeholder-slate-400 outline-none focus:ring-2 focus:ring-primary/40 border border-slate-200 bg-slate-50 transition-all resize-none" />
                    </div>

                    {/* GDPR */}
                    <label className="flex items-start gap-3 cursor-pointer mt-2">
                      <input required type="checkbox"
                        className="mt-1 flex-shrink-0 w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer" />
                      <span className="text-slate-500 text-xs leading-relaxed">
                        We strictly adhere to the General Data Protection Regulation and will only use your personal information. For more information, please read our{" "}
                        <a href="#" className="text-primary font-medium hover:underline transition-colors">Privacy Notice &amp; Cookies</a>.
                      </span>
                    </label>

                    {/* Submit */}
                    <button type="submit"
                      className="xp-btn-primary w-full py-4 rounded-xl text-sm font-bold mt-2 flex items-center justify-center gap-2 tracking-wide shadow-md">
                      CHECK YOUR ELIGIBILITY
                      <ArrowRight className="w-4 h-4" />
                    </button>

                  </form>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

      </div>
      </main>
      <Footer />
    </div>
  );
}
