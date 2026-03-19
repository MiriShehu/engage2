import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Phone, Mail, ArrowRight, ChevronRight, Trophy, Star } from 'lucide-react';
import { PageLayout } from '@/components/layout';
import { TrustBar } from '@/components/sections/trust';
import type { ServiceEntry } from '@/data/types';

const SCHEME = {
  purple: {
    accentColour: '#be59b8',
    ctaGradient: 'linear-gradient(135deg,#76186f,#5a1254)',
    cardGradient: 'linear-gradient(135deg,#003648 0%,#76186f 100%)',
  },
  teal: {
    accentColour: '#4aaed6',
    ctaGradient: 'linear-gradient(135deg,#003648,#004d6b)',
    cardGradient: 'linear-gradient(135deg,#003648 0%,#00607a 100%)',
  },
} as const;

type Props = {
  entry: Pick<ServiceEntry, 'title' | 'titleAccent' | 'tagline' | 'subtitle' | 'heroImage' | 'colorScheme' | 'stats' | 'sidebarTestimonial'>
  category: 'employee-benefits' | 'international-benefits'
  currentSlug: string
  allServices: ServiceEntry[]
  children: React.ReactNode
}

export default function ServicePageLayout({ entry, category, currentSlug, allServices, children }: Props) {
  const scheme = SCHEME[entry.colorScheme];
  const parentLabel = category === 'employee-benefits' ? 'Employee Benefits' : 'International Benefits';
  const parentHref  = category === 'employee-benefits' ? '/employee-benefits' : null;

  // Build h1: split on titleAccent substring
  const titleBefore = entry.titleAccent ? entry.title.replace(entry.titleAccent, '').trim() : entry.title;

  return (
    <PageLayout className="bg-[#f8f8f9] overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={entry.heroImage ? { backgroundImage: `url(${entry.heroImage})` } : undefined}
      >
        {/* Fallback solid bg when no heroImage */}
        {!entry.heroImage && <div className="absolute inset-0 bg-[#003648]" />}
        {/* Dark overlay mobile */}
        <div className="absolute inset-0 bg-[#003648]/70 lg:hidden" />
        {/* Gradient overlay desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003648]/95 via-[#003648]/80 to-transparent hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/40 text-sm mb-8 flex-wrap">
            <Link href="/" className="hover:text-white/70 transition-colors hidden sm:inline">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 hidden sm:inline" />
            {parentHref
              ? <Link href={parentHref} className="hover:text-white/70 transition-colors">{parentLabel}</Link>
              : <span>{parentLabel}</span>
            }
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">{entry.title}</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/80 text-xs font-semibold uppercase tracking-widest mb-6">
            {entry.tagline}
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] max-w-2xl mb-5">
            {entry.titleAccent ? (
              <>
                {titleBefore}
                <span className="block" style={{ color: scheme.accentColour }}>{entry.titleAccent}</span>
              </>
            ) : entry.title}
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-xl mb-8">{entry.subtitle}</p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-14">
            <Link
              href="/get-a-quote"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{ background: scheme.ctaGradient }}
            >
              Get a free quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:01273974419"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" /> 01273 974419
            </a>
          </div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {entry.stats.map((s) => (
              <div key={s.label} className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-4 h-4 md:w-5 md:h-5 text-white/70" />
                </div>
                <div className="min-w-0">
                  <div className="text-xl md:text-2xl font-black text-white leading-none">{s.val}</div>
                  <div className="text-white/45 text-[10px] md:text-xs mt-0.5 leading-tight">{s.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <TrustBar />

      {/* ── Body ─────────────────────────────────────────────────────── */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 overflow-x-hidden">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 xl:gap-16">

          {/* Main content */}
          <div className="flex-1 min-w-0 w-full">
            {children}
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 xl:w-[340px] flex-shrink-0 space-y-5 lg:sticky lg:top-24 self-start">

            {/* CTA card */}
            <div className="rounded-2xl p-6 text-white overflow-hidden relative" style={{ background: scheme.cardGradient }}>
              <img src="/logomark.png" alt="" aria-hidden="true"
                className="absolute -bottom-6 -right-6 w-40 h-40 object-contain opacity-[0.08] brightness-0 invert pointer-events-none select-none" />
              <div className="relative">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold mb-4">
                  FREE consultation
                </div>
                <h3 className="text-xl font-extrabold mb-2 leading-snug text-white">Get expert advice today</h3>
                <p className="text-white/85 text-sm leading-relaxed mb-5">
                  No charge, no obligation — just straightforward advice from our team of specialists.
                </p>
                <Link href="/get-a-quote"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm bg-white text-secondary hover:bg-white/90 transition-colors">
                  Get a free quote <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="mt-3 flex flex-col gap-2">
                  <a href="tel:01273974419" className="flex items-center gap-2 text-sm text-white/85 hover:text-white transition-colors">
                    <Phone className="w-4 h-4" /> 01273 974419
                  </a>
                  <a href="mailto:enquiries@engagehealthgroup.co.uk" className="flex items-center gap-2 text-sm text-white/85 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" /> enquiries@engagehealthgroup.co.uk
                  </a>
                </div>
              </div>
            </div>

            {/* Service links */}
            <div className="rounded-2xl border border-border bg-white p-5">
              <h3 className="font-extrabold text-secondary text-sm uppercase tracking-wider mb-4">Our Services</h3>
              <div className="flex flex-col gap-0.5">
                {allServices.map((svc) => {
                  const isActive = svc.slug === currentSlug;
                  return (
                    <Link
                      key={svc.slug}
                      href={`/${category}/${svc.slug}`}
                      className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${isActive ? 'bg-primary/8' : 'hover:bg-[#f5f4fa]'}`}
                    >
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${isActive ? 'bg-primary' : 'bg-primary/10 group-hover:bg-primary'}`}>
                        <svc.icon className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-white' : 'text-primary group-hover:text-white'}`} />
                      </div>
                      <span className={`text-sm font-medium flex-1 transition-colors ${isActive ? 'text-primary font-semibold' : 'text-gray-700 group-hover:text-secondary'}`}>
                        {svc.title}
                      </span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-primary' : 'text-gray-300 group-hover:text-primary'}`} />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Award badge */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: scheme.ctaGradient }}>
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-sm leading-snug">Award-winning consultancy</h4>
                  <p className="text-muted-foreground text-xs mt-1 leading-relaxed">
                    Best International Group Advice Firm — UK Health &amp; Protection Awards 2022, 2023 &amp; 2024.
                  </p>
                </div>
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
                "{entry.sidebarTestimonial.quote}"
              </p>
              <p className="text-xs text-muted-foreground mt-3">— {entry.sidebarTestimonial.author}</p>
            </div>
          </aside>
        </div>
      </div>

      {/* ── Bottom CTA ───────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-2xl overflow-hidden relative" style={{ background: scheme.cardGradient }}>
          <img src="/logomark.png" alt="" aria-hidden="true"
            className="absolute -bottom-8 -right-8 w-48 h-48 object-contain opacity-[0.07] brightness-0 invert pointer-events-none select-none" />
          <div className="relative p-7 flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/50 mb-2">Speak to a specialist</p>
              <h4 className="text-lg font-extrabold text-white leading-snug mb-1">
                Ready to discover the best quotes for your business?
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Our advisers provide impartial, whole-of-market guidance — free of charge, with no obligation.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <a href="tel:01273974419" className="flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" /> 01273 974419
                </a>
                <a href="mailto:enquiries@engagehealthgroup.co.uk" className="flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" /> enquiries@engagehealthgroup.co.uk
                </a>
              </div>
            </div>
            <Link href="/get-a-quote"
              className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-white text-secondary hover:bg-white/90 transition-colors whitespace-nowrap">
              Get a free quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

    </PageLayout>
  );
}
