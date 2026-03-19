import { useEffect, useState, useRef } from 'react';
import { Link } from 'wouter';
import { PageLayout } from '@/components/layout';
import { ArrowRight, ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Facebook, Twitter, ChevronRight } from 'lucide-react';

import heroBanner   from '@/assets/blog/insurtech-banner.png';
import imgChen      from '@/assets/blog/chen-mao-davies.jpg';
import imgApi       from '@/assets/blog/img-0105.jpg';
import imgBenny     from '@/assets/blog/benny-zee.jpg';
import imgGamify    from '@/assets/blog/insurtech-gamification.jpg';

// ── Reading progress bar ────────────────────────────────────────────────────

function ReadingProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setPct(total > 0 ? (scrolled / total) * 100 : 0);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent">
      <div
        className="h-full transition-[width] duration-75"
        style={{ width: `${pct}%`, background: 'linear-gradient(90deg,#76186f,#4aaed6)' }}
      />
    </div>
  );
}

// ── Pull quote ──────────────────────────────────────────────────────────────

function PullQuote({ children }: { children: string }) {
  return (
    <div className="my-8 relative pl-6">
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
        style={{ background: 'linear-gradient(180deg,#76186f,#4aaed6)' }}
      />
      <div className="text-[64px] leading-none font-black text-primary/15 select-none -mb-4">"</div>
      <p className="text-lg md:text-xl font-semibold text-secondary italic leading-relaxed">
        {children}
      </p>
    </div>
  );
}

// ── Article image ───────────────────────────────────────────────────────────

function ArticleImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="my-10 -mx-4 sm:mx-0">
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img src={src} alt={alt} className="w-full h-auto object-cover" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-xs text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ── Section heading ─────────────────────────────────────────────────────────

function SectionHeading({ n, children }: { n: string; children: string }) {
  return (
    <div className="flex items-start gap-4 mt-12 mb-5">
      <span
        className="flex-shrink-0 mt-1 text-xs font-black text-white px-2 py-1 rounded-lg"
        style={{ background: 'linear-gradient(135deg,#003648,#76186f)' }}
      >
        {n}
      </span>
      <h2 className="text-xl md:text-2xl font-extrabold text-secondary leading-snug">
        {children}
      </h2>
    </div>
  );
}

// ── Main page ───────────────────────────────────────────────────────────────

export default function BlogPost() {
  const articleRef = useRef<HTMLDivElement>(null);

  function share(platform: string) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Peering into the future of healthcare… Highlights from Insurtech Insights 2025');
    const urls: Record<string, string> = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter:  `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
    };
    if (urls[platform]) window.open(urls[platform], '_blank', 'width=600,height=400');
  }

  return (
    <>
      <ReadingProgress />

      <PageLayout className="bg-white">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <div className="relative w-full overflow-hidden" style={{ maxHeight: '70vh', minHeight: 340 }}>
          <img
            src={heroBanner}
            alt="Insurtech Insights 2025 banner"
            className="w-full h-full object-cover"
            style={{ maxHeight: '70vh', minHeight: 340 }}
          />
          {/* Bottom fade to white */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          {/* Left gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#003648]/70 via-[#003648]/20 to-transparent" />

          {/* Breadcrumb */}
          <nav className="absolute top-6 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-white/60 text-xs font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/blog" className="hover:text-white transition-colors">Knowledge Hub</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/90 truncate max-w-[200px]">Insurtech Insights 2025</span>
            </div>
          </nav>
        </div>

        {/* ── Article shell ────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-20 relative">
          <div className="flex flex-col lg:flex-row lg:items-start gap-12 xl:gap-16">

            {/* ── ARTICLE ────────────────────────────────────────────────── */}
            <article ref={articleRef} className="flex-1 min-w-0">

              {/* Category chips + meta */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span
                  className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-white px-3 py-1.5 rounded-full"
                  style={{ background: 'linear-gradient(135deg,#76186f,#003648)' }}
                >
                  Knowledge Hub
                </span>
                <span
                  className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-white px-3 py-1.5 rounded-full"
                  style={{ background: 'linear-gradient(135deg,#003648,#004d6b)' }}
                >
                  News
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-black text-secondary leading-[1.1] mb-6 max-w-3xl">
                Peering into the future of healthcare…{' '}
                <span style={{ color: '#76186f' }}>Highlights from Insurtech Insights 2025</span>
              </h1>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg,#76186f,#003648)' }}
                  >
                    MD
                  </div>
                  <span className="font-medium text-secondary">Mel Dixon</span>
                </div>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> 1 May 2025
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> 6 min read
                </span>
              </div>

              {/* Intro */}
              <p className="text-lg md:text-xl text-secondary/80 leading-relaxed font-medium mb-6">
                Insurtech Insights 2025 brought together the world's leading technology innovators,
                all vying to prove the value of their products.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                The organisation sought to learn more about health tech promising to improve health
                and wellbeing services available to businesses investing in Group Health Insurance
                and other health and wellbeing policies.
              </p>

              {/* ─ Section 1 ─ */}
              <SectionHeading n="01">
                The Women's Health App Developed by an Oscar-Winner
              </SectionHeading>

              <ArticleImage
                src={imgChen}
                alt="Chen Mao Davies, CEO of Anya"
                caption="Chen Mao Davies, CEO & Founder of Anya"
              />

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

              {/* ─ Section 2 ─ */}
              <SectionHeading n="02">
                The API That Unites Health Data from Wearables and Apps
              </SectionHeading>

              <ArticleImage
                src={imgApi}
                alt="Terra API presentation at Insurtech Insights 2025"
                caption="Terra API — unifying health data from hundreds of devices"
              />

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

              {/* ─ Section 3 ─ */}
              <SectionHeading n="03">
                Retinal Scanning That Sees Beyond Eye Health
              </SectionHeading>

              <ArticleImage
                src={imgBenny}
                alt="Benny C.Y. Zee, Founder of Health View Bioanalytic"
                caption="Benny C.Y. Zee, PhD — Founder & CEO of Health View Bioanalytic"
              />

              <p className="text-base text-muted-foreground leading-relaxed mb-5">
                Retinal scans have long been used by ophthalmologists to diagnose and monitor eye
                diseases such as diabetic retinopathy. But their potential use goes deeper than that.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-5">
                Benny C. Y. Zee has a PhD in Biostatistics and is Founder and CEO of Health View
                Bioanalytic. His company uses retinal imaging technology combined with AI and machine
                learning to assess the risk of a series of ailments early, including: depression,
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

              {/* ─ Section 4 ─ */}
              <SectionHeading n="04">
                Incentivising Wellness: The Gamification Revolution
              </SectionHeading>

              <ArticleImage
                src={imgGamify}
                alt="YuLife and MetLife fireside chat at Insurtech Insights 2025"
                caption="YuLife's Sammy Rubin and MetLife's Dominic Grinstead in conversation"
              />

              <p className="text-base text-muted-foreground leading-relaxed mb-5">
                YuLife's Kate Whitelock hosted a "fireside chat" between YuLife Founder & CEO Sammy
                Rubin and MetLife's SVP & General Manager Dominic Grinstead. The two companies
                recently joined forces on a new Group Income Protection solution combining YuLife's
                gamification technology with MetLife's traditional insurance model.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-5">
                Sammy is a powerful advocate of the power of transforming health and wellness into a
                game-like experience, where people get rewarded for achieving certain milestones. He
                realised the potential of gamifying health when observing large numbers of people
                playing games on their phones during idle moments. If health improvement is to occur,
                he figured, engagement must meet people where they are.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-5">
                Dominic from MetLife mentioned that 2.8 million people are currently on disability
                benefits, which is 800,000 more than before the pandemic. Mental health and
                musculoskeletal disorders currently top the list of driving factors. Like Sammy, he
                discussed the importance of early intervention — a common theme amongst the health
                technologists discussed.
              </p>

              {/* ─ Conclusion ─ */}
              <div className="mt-12 p-7 rounded-2xl border border-border bg-[#f8f8f9]">
                <h2 className="text-xl font-extrabold text-secondary mb-4">
                  Is This the Future of Health Insurance?
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  In recent years, the added value services offered on health insurance plans have
                  evolved from a nice-to-have to a core part of many policies. The organisation's
                  team of consultants keeps current with the latest services included on Group Health
                  Insurance plans, ensuring clients remain fully informed. Insurtech Insights 2025
                  proved that more innovations could be forthcoming, particularly in preventative care.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  For Engage Health Group, the conference provided an early glimpse of technologies
                  that could find their way onto Company Health Insurance, Income Protection plans
                  and other employee health and protection policies in the near future.
                </p>
              </div>

              {/* ─ CTA strip ─ */}
              <div
                className="mt-10 rounded-2xl p-7 text-white relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg,#003648 0%,#76186f 100%)' }}
              >
                <img src="/logomark.png" alt="" aria-hidden="true"
                  className="absolute -bottom-6 -right-6 w-32 h-32 object-contain opacity-[0.08] brightness-0 invert pointer-events-none select-none" />
                <div className="relative">
                  <p className="text-white/75 text-sm leading-relaxed mb-4">
                    If you need help arranging and implementing health insurance, life insurance or
                    other employee benefits policies, contact our award-winning team for personalised
                    advice, bespoke strategies and market-wide quotes.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/get-a-quote"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-white text-secondary hover:bg-white/90 transition-colors"
                    >
                      Get a free quote <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href="tel:01273974419"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm border border-white/25 text-white hover:bg-white/10 transition-colors"
                    >
                      01273 974419
                    </a>
                  </div>
                </div>
              </div>

              {/* ─ Share row ─ */}
              <div className="mt-10 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
                <span className="flex items-center gap-2 text-sm font-semibold text-secondary">
                  <Share2 className="w-4 h-4" /> Share this article
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => share('linkedin')}
                    className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#0077b5] text-white hover:opacity-90 transition-opacity"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => share('twitter')}
                    className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#1da1f2] text-white hover:opacity-90 transition-opacity"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => share('facebook')}
                    className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#1877f2] text-white hover:opacity-90 transition-opacity"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* ─ Author bio ─ */}
              <div className="mt-8 p-6 rounded-2xl border border-border bg-[#f8f8f9] flex gap-5 items-start">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-lg flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#76186f,#003648)' }}
                >
                  MD
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-secondary text-sm">Mel Dixon</span>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2 py-0.5">Author</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Experienced writer on issues related to the business community with a strong
                    background in journalism and PR. Takes a close interest in all things related
                    to employee benefits and workplace trends.
                  </p>
                </div>
              </div>

              {/* ─ Back to blog ─ */}
              <div className="mt-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Knowledge Hub
                </Link>
              </div>

            </article>

            {/* ── SIDEBAR ──────────────────────────────────────────────────── */}
            <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 space-y-5 lg:sticky lg:top-24 self-start">

              {/* CTA card */}
              <div
                className="rounded-2xl p-6 text-white overflow-hidden relative"
                style={{ background: 'linear-gradient(135deg,#003648 0%,#76186f 100%)' }}
              >
                <img src="/logomark.png" alt="" aria-hidden="true"
                  className="absolute -bottom-6 -right-6 w-36 h-36 object-contain opacity-[0.08] brightness-0 invert pointer-events-none select-none" />
                <div className="relative">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold mb-4">
                    FREE consultation
                  </div>
                  <h3 className="text-lg font-extrabold mb-2 leading-snug text-white">
                    Need expert advice?
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-5">
                    Our specialists provide impartial, whole-of-market guidance at no charge.
                  </p>
                  <Link
                    href="/get-a-quote"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-bold text-sm bg-white text-secondary hover:bg-white/90 transition-colors"
                  >
                    Get a free quote <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:01273974419"
                    className="mt-3 flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                  >
                    <span className="text-xs">📞</span> 01273 974419
                  </a>
                </div>
              </div>

              {/* Table of contents */}
              <div className="rounded-2xl border border-border bg-white p-5">
                <h3 className="font-extrabold text-secondary text-xs uppercase tracking-wider mb-4">
                  In this article
                </h3>
                <div className="flex flex-col gap-0.5">
                  {[
                    { n: '01', label: "The Women's Health App by an Oscar-Winner" },
                    { n: '02', label: 'The API Uniting Health Data' },
                    { n: '03', label: 'Retinal Scanning Beyond Eye Health' },
                    { n: '04', label: 'The Gamification Revolution' },
                    { n: '→',  label: 'Is This the Future?' },
                  ].map((item) => (
                    <div
                      key={item.n}
                      className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-[#f5f4fa] transition-colors cursor-default"
                    >
                      <span
                        className="flex-shrink-0 text-[10px] font-black text-white px-1.5 py-0.5 rounded mt-0.5"
                        style={{ background: 'linear-gradient(135deg,#003648,#76186f)' }}
                      >
                        {item.n}
                      </span>
                      <span className="text-xs text-muted-foreground leading-snug">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="rounded-2xl border border-border bg-white p-5">
                <h3 className="font-extrabold text-secondary text-xs uppercase tracking-wider mb-3">
                  Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Knowledge Hub', 'News', 'Health Tech', 'Group Health Insurance', 'Employee Benefits'].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/8 text-primary border border-primary/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share sidebar */}
              <div className="rounded-2xl border border-border bg-white p-5">
                <h3 className="font-extrabold text-secondary text-xs uppercase tracking-wider mb-3">
                  Share
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => share('linkedin')}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold bg-[#0077b5] text-white hover:opacity-90 transition-opacity"
                  >
                    <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                  </button>
                  <button
                    onClick={() => share('twitter')}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold bg-[#1da1f2] text-white hover:opacity-90 transition-opacity"
                  >
                    <Twitter className="w-3.5 h-3.5" /> Twitter
                  </button>
                  <button
                    onClick={() => share('facebook')}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold bg-[#1877f2] text-white hover:opacity-90 transition-opacity"
                  >
                    <Facebook className="w-3.5 h-3.5" /> FB
                  </button>
                </div>
              </div>

            </aside>
          </div>
        </div>

      </PageLayout>
    </>
  );
}
