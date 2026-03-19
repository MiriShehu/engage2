import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { PageLayout } from '@/components/layout';
import {
  ArrowRight, ArrowLeft, Calendar, Clock,
  Share2, Linkedin, Facebook, Twitter, ChevronRight,
} from 'lucide-react';

import heroBanner  from '@/assets/blog/insurtech-banner.png';
import imgChen     from '@/assets/blog/chen-mao-davies.jpg';
import imgApi      from '@/assets/blog/img-0105.jpg';
import imgBenny    from '@/assets/blog/benny-zee.jpg';
import imgGamify   from '@/assets/blog/insurtech-gamification.jpg';

// ── Reading progress ────────────────────────────────────────────────────────

function ReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      setPct(el.scrollHeight - el.clientHeight > 0
        ? (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px]">
      <div className="h-full transition-[width] duration-75"
        style={{ width: `${pct}%`, background: 'linear-gradient(90deg,#76186f,#4aaed6)' }} />
    </div>
  );
}

// ── Pull quote ──────────────────────────────────────────────────────────────

function PullQuote({ children }: { children: string }) {
  return (
    <blockquote className="my-8 mx-0 bg-[#f5f4fa] rounded-2xl px-7 py-6 border-l-[3px] border-primary">
      <p className="text-base md:text-lg font-semibold text-secondary italic leading-relaxed">
        {children}
      </p>
    </blockquote>
  );
}

// ── Inline article image ────────────────────────────────────────────────────

function ArticleImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="my-10">
      <img
        src={src} alt={alt}
        className="w-full rounded-xl object-cover shadow-md"
        style={{ maxHeight: 420 }}
      />
      {caption && (
        <figcaption className="mt-2.5 text-xs text-muted-foreground text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ── Section heading ─────────────────────────────────────────────────────────

function SectionH2({ children }: { children: string }) {
  return (
    <h2 className="text-xl md:text-2xl font-extrabold text-secondary mt-10 mb-4 leading-snug">
      {children}
    </h2>
  );
}

// ── Share helper ────────────────────────────────────────────────────────────

function useShare() {
  return (platform: string) => {
    const url   = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Highlights from Insurtech Insights 2025');
    const map: Record<string, string> = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter:  `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
    };
    if (map[platform]) window.open(map[platform], '_blank', 'width=600,height=400');
  };
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function BlogPost() {
  const share = useShare();

  return (
    <>
      <ReadingProgress />

      <PageLayout className="bg-[#f8f8f9]">

        {/* ── Header band ──────────────────────────────────────────────── */}
        <div className="bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-0">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/blog" className="hover:text-primary transition-colors">Knowledge Hub</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-secondary truncate">Insurtech Insights 2025</span>
            </nav>

            {/* Category + date row */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white px-3 py-1.5 rounded-full"
                style={{ background: 'linear-gradient(135deg,#76186f,#003648)' }}>
                Knowledge Hub
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white px-3 py-1.5 rounded-full"
                style={{ background: 'linear-gradient(135deg,#003648,#004d6b)' }}>
                News
              </span>
              <span className="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" /> 1 May 2025
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary leading-[1.1] max-w-4xl mb-6">
              Peering into the future of healthcare…{' '}
              <span className="italic font-extrabold" style={{ color: '#76186f' }}>
                Highlights from Insurtech Insights 2025
              </span>
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-5 pb-8">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#76186f,#003648)' }}>
                  MD
                </div>
                <div>
                  <p className="text-sm font-semibold text-secondary leading-none">Mel Dixon</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Staff Writer</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" /> 6 min read
              </div>
              <div className="ml-auto flex items-center gap-2">
                <span className="text-xs text-muted-foreground font-medium mr-1">Share</span>
                {[
                  { id: 'linkedin', label: 'LinkedIn', bg: '#0077b5', Icon: Linkedin },
                  { id: 'twitter',  label: 'Twitter',  bg: '#1da1f2', Icon: Twitter  },
                  { id: 'facebook', label: 'Facebook', bg: '#1877f2', Icon: Facebook },
                ].map(({ id, label, bg, Icon }) => (
                  <button key={id} onClick={() => share(id)} aria-label={`Share on ${label}`}
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                    style={{ background: bg }}>
                    <Icon className="w-3.5 h-3.5" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Body ─────────────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row lg:items-start gap-10 xl:gap-14">

            {/* ── ARTICLE ──────────────────────────────────────────────── */}
            <article className="flex-1 min-w-0 bg-white rounded-2xl shadow-sm overflow-hidden">

              {/* Featured image — contained, not full-bleed */}
              <div className="p-6 pb-0">
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={heroBanner}
                    alt="Insurtech Insights 2025"
                    className="w-full object-cover"
                    style={{ maxHeight: 340 }}
                  />
                </div>
              </div>

              {/* Prose */}
              <div className="p-6 md:p-8 lg:p-10">

                {/* Intro */}
                <p className="text-lg font-semibold text-secondary leading-relaxed mb-5">
                  Insurtech Insights 2025 brought together the world's leading technology innovators,
                  all vying to prove the value of their products.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  The organisation sought to learn more about health tech promising to improve health
                  and wellbeing services available to businesses investing in Group Health Insurance
                  and other health and wellbeing policies.
                </p>

                <hr className="border-border my-8" />

                {/* Section 1 */}
                <SectionH2>The Women's Health App Developed by an Oscar-Winner</SectionH2>

                <ArticleImage src={imgChen} alt="Chen Mao Davies, CEO of Anya"
                  caption="Chen Mao Davies, CEO & Founder of Anya" />

                <p className="text-base text-muted-foreground leading-relaxed mb-5">
                  It's not every day you get to speak to an Academy Award winner-turned women's health
                  innovator. Chen Mao Davies, CEO and Founder of Anya, previously worked as a computer
                  scientist helping create visual effects for major Hollywood films. Her movie career
                  reached an unsurpassable peak when her work helped films Blade Runner 2049 and Gravity
                  both win a BAFTA and Oscar for best visual effects.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-5">
                  Chen's career switch came after experiencing breastfeeding, postnatal depression, and
                  new parenthood challenges — and discovering inadequate support availability.
                </p>

                <PullQuote>
                  "I found it very hard to access any support from midwives, doctors or health visitors
                  because they don't work around the clock and the NHS is very stretched."
                </PullQuote>

                <p className="text-base text-muted-foreground leading-relaxed mb-5">
                  Anya is a women's health app combining AI technology and human specialists to provide
                  24/7 healthcare and companionship during a women's health journey including fertility,
                  pregnancy, parenting, menopause, and menstrual health.
                </p>

                <PullQuote>
                  "It is like a healthcare professional downloading her brain and uploading it to AI."
                </PullQuote>

                <PullQuote>
                  "You can ask any questions and get practical and emotional support from the Anya AI chatbot."
                </PullQuote>

                <p className="text-base text-muted-foreground leading-relaxed mb-5">
                  The app offers personalised content, self-care plans, 1-2-1 video consultations,
                  webinars, virtual drop-ins, and peer support communities. Anya has been widely
                  adopted by the NHS, serving 7.2 million people in the UK, and won the National AI
                  Awards for Healthcare 2024.
                </p>

                <hr className="border-border my-8" />

                {/* Section 2 */}
                <SectionH2>The API That Unites Health Data from Wearables and Apps</SectionH2>

                <ArticleImage src={imgApi} alt="Terra API at Insurtech Insights 2025"
                  caption="Terra API — unifying health data from hundreds of devices and apps" />

                <p className="text-base text-muted-foreground leading-relaxed mb-5">
                  People are collecting more and more health data. One study found that more than a
                  third of American adults use a health app or fitness tracker. UK surveys draw similar
                  conclusions.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-5">
                  However, data is usually housed on different platforms and is not joining up,
                  particularly when it comes to wearable health tech. Michael Economou from Terra API
                  explained how they are unifying health data from different sources onto a single
                  platform.
                </p>

                <PullQuote>
                  "Everything you can imagine is on the Terra API. We've already integrated with
                  hundreds of wearable devices like Apple Watch, Garmin etc, sensors like Continuous
                  Glucose Monitoring and health apps like Strava, MyFitnessPal and so many more."
                </PullQuote>

                <p className="text-base text-muted-foreground leading-relaxed mb-5">
                  From this, it's possible to gain a more accurate picture of an individual's health
                  and wellbeing. It also provides the basis for creating more tailored gamified health
                  and wellbeing challenges and rewards, relevant to groups or individuals.
                </p>

                <PullQuote>
                  "This data can be used to drive better engagement through gamification and drive
                  healthy behaviours. It's very important for health insurance companies to have
                  positive touch points with their customers, and this helps increase that."
                </PullQuote>

                <p className="text-base text-muted-foreground leading-relaxed mb-5">
                  He also sees it as part of the preventative health model.
                </p>

                <PullQuote>
                  "Employee gamification elements help keep people healthier, that means absences are
                  reduced and productivity is increased. And this is being done through very simple
                  steps, for example by promoting physical activity, better sleep and better nutrition."
                </PullQuote>

                <hr className="border-border my-8" />

                {/* Section 3 */}
                <SectionH2>Retinal Scanning That Sees Beyond Eye Health</SectionH2>

                <ArticleImage src={imgBenny} alt="Benny C.Y. Zee at Insurtech Insights 2025"
                  caption="Benny C.Y. Zee PhD — Founder & CEO, Health View Bioanalytic" />

                <p className="text-base text-muted-foreground leading-relaxed mb-5">
                  Retinal scans have long been used by ophthalmologists to diagnose and monitor eye
                  diseases such as diabetic retinopathy. But their potential use goes deeper than that.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-5">
                  Benny C. Y. Zee has a PhD in Biostatistics and is Founder and CEO of Health View
                  Bioanalytic. His company uses retinal imaging technology combined with AI and machine
                  learning to assess the risk of a series of ailments early, including depression,
                  diabetes, dementia and schizophrenia.
                </p>

                <PullQuote>
                  "We discovered that the accuracy of our technology is significantly higher than other
                  deep learning methods when we were working on stroke risk assessment."
                </PullQuote>

                <p className="text-base text-muted-foreground leading-relaxed mb-5">
                  The key here is early intervention.
                </p>

                <PullQuote>
                  "If you can intervene early things are much easier to treat and manage, rather than
                  waiting for it to get serious. This is true with both physical and mental health issues."
                </PullQuote>

                <hr className="border-border my-8" />

                {/* Section 4 */}
                <SectionH2>Incentivising Wellness: The Gamification Revolution</SectionH2>

                <ArticleImage src={imgGamify} alt="YuLife and MetLife fireside chat"
                  caption="Sammy Rubin (YuLife) and Dominic Grinstead (MetLife) in conversation" />

                <p className="text-base text-muted-foreground leading-relaxed mb-5">
                  YuLife's Kate Whitelock hosted a "fireside chat" between YuLife Founder & CEO Sammy
                  Rubin and MetLife's SVP & General Manager Dominic Grinstead. The two companies
                  recently joined forces on a new Group Income Protection solution combining YuLife's
                  gamification technology with MetLife's traditional insurance model.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-5">
                  Sammy is a powerful advocate of transforming health and wellness into a game-like
                  experience, where people get rewarded for achieving certain milestones. He realised
                  the potential of gamifying health when observing large numbers of people playing
                  games on their phones during idle moments. If health improvement is to occur, he
                  figured, engagement must meet people where they are.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-5">
                  Dominic from MetLife mentioned that 2.8 million people are currently on disability
                  benefits — 800,000 more than before the pandemic. Mental health and musculoskeletal
                  disorders currently top the list of driving factors. Like Sammy, he discussed the
                  importance of early intervention, a common theme amongst the health technologists.
                </p>

                <hr className="border-border my-8" />

                {/* Conclusion */}
                <SectionH2>Is This the Future of Health Insurance?</SectionH2>

                <p className="text-base text-muted-foreground leading-relaxed mb-5">
                  In recent years, the added value services offered on health insurance plans have
                  evolved from a nice-to-have to a core part of many policies. The organisation's
                  team of consultants keeps current with the latest services included on Group Health
                  Insurance plans, ensuring clients remain fully informed. Insurtech Insights 2025
                  proved that more innovations could be forthcoming, particularly in preventative care.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                  For Engage Health Group, the conference provided an early glimpse of technologies
                  that could find their way onto Company Health Insurance, Income Protection plans
                  and other employee health and protection policies in the near future.
                </p>

                {/* CTA strip */}
                <div className="rounded-2xl p-7 text-white relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg,#003648 0%,#76186f 100%)' }}>
                  <img src="/logomark.png" alt="" aria-hidden="true"
                    className="absolute -bottom-5 -right-5 w-28 h-28 object-contain opacity-[0.08] brightness-0 invert pointer-events-none select-none" />
                  <div className="relative">
                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                      If you need help arranging and implementing health insurance, life insurance or
                      other employee benefits policies, contact our award-winning team for personalised
                      advice, bespoke strategies and market-wide quotes.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link href="/get-a-quote"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-white text-secondary hover:bg-white/90 transition-colors">
                        Get a free quote <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a href="tel:01273974419"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm border border-white/25 text-white hover:bg-white/10 transition-colors">
                        01273 974419
                      </a>
                    </div>
                  </div>
                </div>

                {/* Share + author footer */}
                <div className="mt-10 pt-8 border-t border-border flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2.5 flex-1 min-w-0">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-black flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg,#76186f,#003648)' }}>
                      MD
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-secondary">Mel Dixon</p>
                      <p className="text-xs text-muted-foreground leading-snug">
                        Writer on employee benefits &amp; workplace trends
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Share2 className="w-3.5 h-3.5 text-muted-foreground" />
                    {[
                      { id: 'linkedin', bg: '#0077b5', Icon: Linkedin },
                      { id: 'twitter',  bg: '#1da1f2', Icon: Twitter  },
                      { id: 'facebook', bg: '#1877f2', Icon: Facebook },
                    ].map(({ id, bg, Icon }) => (
                      <button key={id} onClick={() => share(id)}
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                        style={{ background: bg }}>
                        <Icon className="w-3.5 h-3.5" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Back */}
                <div className="mt-6">
                  <Link href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                    <ArrowLeft className="w-4 h-4" /> Back to Knowledge Hub
                  </Link>
                </div>

              </div>
            </article>

            {/* ── SIDEBAR ──────────────────────────────────────────────── */}
            <aside className="w-full lg:w-64 xl:w-72 flex-shrink-0 space-y-4 lg:sticky lg:top-24 self-start">

              {/* CTA */}
              <div className="rounded-2xl p-5 text-white relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg,#003648 0%,#76186f 100%)' }}>
                <img src="/logomark.png" alt="" aria-hidden="true"
                  className="absolute -bottom-5 -right-5 w-28 h-28 object-contain opacity-[0.08] brightness-0 invert pointer-events-none select-none" />
                <div className="relative">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-2">
                    Free consultation
                  </p>
                  <h3 className="text-base font-extrabold text-white mb-2 leading-snug">
                    Need expert advice?
                  </h3>
                  <p className="text-white/75 text-xs leading-relaxed mb-4">
                    Impartial, whole-of-market guidance at no charge.
                  </p>
                  <Link href="/get-a-quote"
                    className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl font-bold text-xs bg-white text-secondary hover:bg-white/90 transition-colors">
                    Get a free quote <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a href="tel:01273974419"
                    className="mt-2.5 flex items-center gap-2 text-xs text-white/70 hover:text-white transition-colors">
                    <span>📞</span> 01273 974419
                  </a>
                </div>
              </div>

              {/* In this article */}
              <div className="rounded-2xl border border-border bg-white p-5">
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3">
                  In this article
                </p>
                <div className="flex flex-col gap-px">
                  {[
                    "The Women's Health App by an Oscar-Winner",
                    'The API Uniting Health Data',
                    'Retinal Scanning Beyond Eye Health',
                    'The Gamification Revolution',
                    'Is This the Future?',
                  ].map((item, i) => (
                    <div key={item}
                      className="flex items-start gap-3 py-2.5 px-2 rounded-xl hover:bg-[#f5f4fa] transition-colors cursor-default">
                      <span className="flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-black text-primary bg-primary/10 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-xs text-muted-foreground leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="rounded-2xl border border-border bg-white p-5">
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3">
                  Topics
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['Insurtech', 'Health Tech', 'Group Health Insurance', 'AI', 'Employee Benefits', 'Wellness'].map((t) => (
                    <span key={t}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-primary/8 text-primary border border-primary/15">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </div>

      </PageLayout>
    </>
  );
}
