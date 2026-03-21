import { useEffect, useMemo, useState } from 'react';
import { Link } from 'wouter';
import { PageLayout } from '@/components/layout';
import {
  Heart, Bookmark, Share2, ArrowRight,
  Linkedin, Facebook, Twitter, ChevronRight, List, Clock, RefreshCw,
} from 'lucide-react';
import { cn } from '@/lib/utils';

import heroBanner from '@/assets/blog/insurtech-banner.png';
import imgChen    from '@/assets/blog/chen-mao-davies.jpg';
import imgApi     from '@/assets/blog/img-0105.jpg';
import imgBenny   from '@/assets/blog/benny-zee.jpg';
import imgGamify  from '@/assets/blog/insurtech-gamification.jpg';

import { useBlogPost } from '@/hooks/useWordPress';
import { Loader2 } from 'lucide-react';
import { AISummaryWidget } from '@/components/AISummaryWidget';

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
    <blockquote className="my-7 bg-[#f5f4fa] rounded-md px-6 py-5 border-l-[3px] border-primary">
      <p className="text-[15px] font-semibold text-secondary italic leading-relaxed">{children}</p>
    </blockquote>
  );
}

// ── Article image ───────────────────────────────────────────────────────────

function ArticleImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="my-8">
      <img src={src} alt={alt}
        className="w-full rounded-md object-cover"
        style={{ maxHeight: 380 }} />
      {caption && (
        <figcaption className="mt-2 text-xs text-muted-foreground text-center">{caption}</figcaption>
      )}
    </figure>
  );
}

// ── Section heading ─────────────────────────────────────────────────────────

function SectionH2({ id, children }: { id?: string; children: string }) {
  return (
    <h2 id={id} style={{ scrollMarginTop: '88px' }} className="text-xl md:text-2xl font-extrabold text-secondary mt-10 mb-4 leading-snug">
      {children}
    </h2>
  );
}

// ── Left action bar ─────────────────────────────────────────────────────────

function ActionBar() {
  const [liked,     setLiked]     = useState(false);
  const [bookmarked,setBookmarked] = useState(false);
  const [showShare, setShowShare]  = useState(false);

  function share(platform: string) {
    const url   = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Highlights from Insurtech Insights 2025');
    const map: Record<string, string> = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter:  `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
    };
    if (map[platform]) window.open(map[platform], '_blank', 'width=600,height=400');
    setShowShare(false);
  }

  return (
    <div className="hidden lg:flex flex-col items-center gap-5 sticky top-[88px] self-start">

      {/* Like */}
      <div className="flex flex-col items-center gap-1">
        <button
          onClick={() => setLiked(v => !v)}
          className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
            liked
              ? 'border-rose-400 bg-rose-50 text-rose-500'
              : 'border-border bg-white text-muted-foreground hover:border-rose-300 hover:text-rose-400'
          }`}
        >
          <Heart className={`w-4.5 h-4.5 ${liked ? 'fill-rose-400' : ''}`} strokeWidth={2} />
        </button>
        <span className="text-[11px] font-semibold text-muted-foreground">{liked ? 126 : 125}</span>
      </div>

      {/* Bookmark */}
      <div className="flex flex-col items-center gap-1">
        <button
          onClick={() => setBookmarked(v => !v)}
          className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
            bookmarked
              ? 'border-primary bg-primary/10 text-primary'
              : 'border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-primary'
          }`}
        >
          <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-primary' : ''}`} strokeWidth={2} />
        </button>
        <span className="text-[11px] font-semibold text-muted-foreground">{bookmarked ? 47 : 46}</span>
      </div>

      {/* Share */}
      <div className="flex flex-col items-center gap-1 relative">
        <button
          onClick={() => setShowShare(v => !v)}
          className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
            showShare
              ? 'border-primary bg-primary/10 text-primary'
              : 'border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-primary'
          }`}
        >
          <Share2 className="w-4 h-4" strokeWidth={2} />
        </button>
        <span className="text-[11px] font-semibold text-muted-foreground">70</span>

        {/* Share popover */}
        {showShare && (
          <div className="absolute left-12 top-0 bg-white border border-border rounded-md shadow-lg p-2 flex flex-col gap-1 z-20 w-36">
            {[
              { id: 'linkedin', label: 'LinkedIn', bg: '#0077b5', Icon: Linkedin },
              { id: 'twitter',  label: 'Twitter',  bg: '#1da1f2', Icon: Twitter  },
              { id: 'facebook', label: 'Facebook', bg: '#1877f2', Icon: Facebook },
            ].map(({ id, label, bg, Icon }) => (
              <button key={id} onClick={() => share(id)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-secondary hover:bg-[#f5f4fa] transition-colors text-left">
                <span className="w-6 h-6 rounded-md flex items-center justify-center text-white flex-shrink-0"
                  style={{ background: bg }}>
                  <Icon className="w-3 h-3" />
                </span>
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Sidebar table of contents ────────────────────────────────────────────────

interface TocItem { id: string; label: string; }

function SidebarTOC({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState('');

  useEffect(() => {
    if (items.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: '-10% 0px -75% 0px', threshold: 0 }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <div className="bg-white rounded-lg border border-border overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border"
        style={{ background: 'linear-gradient(135deg,#003648 0%,#76186f 100%)' }}>
        <List className="w-3.5 h-3.5 text-white/80 flex-shrink-0" />
        <p className="text-[11px] font-black uppercase tracking-widest text-white">In this article</p>
      </div>
      <nav className="p-2 flex flex-col gap-0.5">
        {items.map((item, i) => (
          <button
            key={item.id}
            onClick={() => {
              const el = document.getElementById(item.id);
              if (!el) return;
              const y = el.getBoundingClientRect().top + window.scrollY - 88;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }}
            className={cn(
              'flex items-start gap-2.5 px-3 py-2.5 rounded-lg text-left w-full transition-all duration-150 group',
              active === item.id ? 'bg-secondary/[0.06]' : 'hover:bg-[#f8f7fc]'
            )}
            type="button"
          >
            <span
              className={cn(
                'w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black flex-shrink-0 mt-0.5 transition-all duration-150',
                active === item.id ? 'text-white' : 'text-muted-foreground bg-slate-100'
              )}
              style={active === item.id ? { background: 'linear-gradient(135deg,#003648,#76186f)' } : {}}
            >
              {i + 1}
            </span>
            <span className={cn(
              'text-[11px] leading-snug font-medium transition-colors flex-1',
              active === item.id ? 'text-secondary font-semibold' : 'text-muted-foreground group-hover:text-secondary'
            )}>
              {item.label}
            </span>
            {active === item.id && (
              <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,#003648,#76186f)' }} />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}

// ── Pre-process WP HTML: inject IDs + scroll-margin into headings ─────────────

function processContent(html: string): { html: string; items: TocItem[] } {
  if (!html) return { html: '', items: [] };
  const items: TocItem[] = [];
  const seen = new Map<string, number>();
  const processed = html.replace(/<(h[23])([^>]*)>([\s\S]*?)<\/h[23]>/gi, (_, tag, attrs, inner) => {
    const text = inner.replace(/<[^>]+>/g, '').trim();
    if (!text) return _;
    const existingId = attrs.match(/\bid="([^"]+)"/)?.[1];
    let id = existingId;
    if (!id) {
      const base = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      const count = seen.get(base) ?? 0;
      id = count === 0 ? base : `${base}-${count}`;
      seen.set(base, count + 1);
    }
    items.push({ id, label: text });
    const attrsWithId = existingId ? attrs : `${attrs} id="${id}"`;
    return `<${tag}${attrsWithId} style="scroll-margin-top:88px">${inner}</${tag}>`;
  });
  return { html: processed, items };
}

// ── Helpers ─────────────────────────────────────────────────────────────────

/** Strip HTML and estimate reading time at 200 wpm */
function calcReadTime(html: string): number {
  const text  = html.replace(/<[^>]+>/g, ' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function fmtTime(iso: string) {
  return new Date(iso).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
}

/** Injects Article JSON-LD into <head> via a <script> tag */
function ArticleSchema({ title, datePublished, dateModified, authorName, imageUrl, url, readMins }: {
  title: string; datePublished: string; dateModified: string;
  authorName: string; imageUrl?: string; url: string; readMins: number;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    datePublished: new Date(datePublished).toISOString(),
    dateModified: new Date(dateModified).toISOString(),
    timeRequired: `PT${readMins}M`,
    author: { '@type': 'Person', name: authorName },
    publisher: {
      '@type': 'Organization',
      name: 'Engage Health Group',
      logo: { '@type': 'ImageObject', url: `${url.split('/').slice(0, 3).join('/')}/logo.png` },
    },
    ...(imageUrl ? { image: { '@type': 'ImageObject', url: imageUrl } } : {}),
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── Page ────────────────────────────────────────────────────────────────────

const tags = ['#insurtech', '#healthtech', '#grouphealth', '#ai', '#employeebenefits'];

const morePosts = [
  {
    title: "What's new in Group Health Insurance for 2025?",
    tags: ['#grouphealth', '#insurance', '#2025'],
  },
  {
    title: 'Why preventative care is the future of employee benefits',
    tags: ['#wellness', '#prevention', '#benefits'],
  },
  {
    title: 'AI and mental health: what employers need to know',
    tags: ['#mentalhealth', '#ai', '#eap'],
  },
];

export default function BlogPost({ slug }: { slug: string }) {
  const { data, isLoading, isError } = useBlogPost(slug);
  const { html: processedContent, items: tocItems } = useMemo(
    () => processContent(data?.post?.content ?? ''),
    [data?.post?.content]
  );

  // If the WP endpoint hasn't been set up yet, the query will fail.
  // In that case, we fall back to the original demo post if the slug matches.
  // This ensures the site doesn't visually break before WP is fully integrated.
  if (isError && slug === 'insurtech-insights-2025') {
    return <BlogPostStatic />;
  }

  if (isLoading) {
    return (
      <PageLayout className="bg-[#f0f0f0]">
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary mb-4" />
          <p className="text-muted-foreground font-medium">Loading post...</p>
        </div>
      </PageLayout>
    );
  }

  if (isError || !data?.post) {
    return (
      <PageLayout className="bg-[#f0f0f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-black text-secondary mb-4">Post not found</h1>
          <p className="text-muted-foreground mb-8">This post does not exist or WordPress hasn't been synced.</p>
          <Link href="/knowledge-hub" className="px-6 py-3 rounded-lg font-bold text-white bg-primary hover:bg-primary/90 transition-colors">
            Back to Knowledge Hub
          </Link>
        </div>
      </PageLayout>
    );
  }

  const post = data.post;
  const authorName   = post.author?.node?.name || 'Engage Health Group';
  const imageUrl     = post.featuredImage?.node?.sourceUrl;
  const pageUrl      = typeof window !== 'undefined' ? window.location.href : '';
  const modifiedDiffers = post.modified && post.modified !== post.date;
  const readMins     = calcReadTime(post.content ?? '');

  return (
    <>
      <ArticleSchema
        title={post.title}
        datePublished={post.date}
        dateModified={post.modified || post.date}
        authorName={authorName}
        imageUrl={imageUrl}
        url={pageUrl}
        readMins={readMins}
      />
      <ReadingProgress />

      <PageLayout className="bg-[#f0f0f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          <div className="flex gap-6 items-start">
            <div className="hidden lg:block w-12 flex-shrink-0">
              <ActionBar />
            </div>

            <article className="flex-1 min-w-0 bg-white rounded-lg border border-border">
              {post.featuredImage?.node?.sourceUrl && (
                <img
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.featuredImage.node.altText || post.title}
                  className="w-full object-cover block"
                  style={{ maxHeight: 420 }}
                />
              )}

              <div className="p-4 md:p-8">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                  <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                  <ChevronRight className="w-3 h-3" />
                  <Link href="/knowledge-hub" className="hover:text-primary transition-colors">Knowledge Hub</Link>
                  <ChevronRight className="w-3 h-3" />
                  <span className="text-secondary truncate max-w-[200px]" dangerouslySetInnerHTML={{ __html: post.title }} />
                </nav>

                <h1 className="text-2xl md:text-3xl font-black text-secondary leading-tight mb-5" dangerouslySetInnerHTML={{ __html: post.title }} />

                <div className="flex items-start gap-3 mb-7 pb-7 border-b border-border flex-wrap">
                  {post.author?.node?.avatar?.url && (
                    <img src={post.author.node.avatar.url} alt={post.author.node.name} className="w-9 h-9 rounded-full object-cover flex-shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-secondary leading-none mb-2">{authorName}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 flex-shrink-0" />
                        <span>Published <time dateTime={new Date(post.date).toISOString()}>{fmtDate(post.date)} at {fmtTime(post.date)}</time></span>
                      </span>
                      {modifiedDiffers && (
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <RefreshCw className="w-3 h-3 flex-shrink-0" />
                          <span>Updated <time dateTime={new Date(post.modified).toISOString()}>{fmtDate(post.modified)} at {fmtTime(post.modified)}</time></span>
                        </span>
                      )}
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 flex-shrink-0" />
                        <span>{readMins} min read</span>
                      </span>
                    </div>
                  </div>
                </div>

                <AISummaryWidget />
                <div data-ai-content className="prose prose-slate max-w-none prose-headings:font-black prose-headings:text-secondary prose-p:text-muted-foreground prose-a:text-primary prose-img:w-full prose-img:h-auto prose-img:rounded-lg prose-img:block [&_img]:w-full [&_img]:h-auto [&_img]:rounded-lg [&_figure]:w-full [&_figure]:overflow-hidden" dangerouslySetInnerHTML={{ __html: processedContent }} />

              </div>
            </article>

            <aside className="hidden lg:flex flex-col gap-4 w-60 xl:w-64 flex-shrink-0 sticky top-[88px] self-start">
              <SidebarTOC items={tocItems} />
              <div className="bg-white rounded-lg border border-border p-5">
                <p className="text-xs font-black uppercase tracking-wider text-muted-foreground mb-2">Free consultation</p>
                <p className="text-sm font-bold text-secondary mb-3 leading-snug">Get expert advice on employee benefits today</p>
                <Link href="/get-a-quote" className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg font-bold text-xs text-white hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg,#003648,#76186f)' }}>
                  Get a free quote <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a href="tel:01273974419" className="mt-2 block text-center text-xs text-muted-foreground hover:text-primary transition-colors">or call 01273 974419</a>
              </div>
            </aside>

          </div>
        </div>
      </PageLayout>
    </>
  );
}

const staticTocItems: TocItem[] = [
  { id: 'womens-health-app',   label: "The Women's Health App Developed by an Oscar-Winner" },
  { id: 'health-data-api',     label: 'The API That Unites Health Data from Wearables and Apps' },
  { id: 'retinal-scanning',    label: 'Retinal Scanning That Sees Beyond Eye Health' },
  { id: 'gamification',        label: 'Incentivising Wellness: The Gamification Revolution' },
  { id: 'future-of-insurance', label: 'Is This the Future of Health Insurance?' },
];

const STATIC_DATE_PUBLISHED = '2025-05-01T09:00:00';
const STATIC_DATE_MODIFIED  = '2025-05-01T09:00:00';
const STATIC_READ_MINS      = 6;

function BlogPostStatic() {
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <>
      <ArticleSchema
        title="Peering into the future of healthcare — Highlights from Insurtech Insights 2025"
        datePublished={STATIC_DATE_PUBLISHED}
        dateModified={STATIC_DATE_MODIFIED}
        authorName="Mel Dixon"
        imageUrl={heroBanner}
        url={pageUrl}
        readMins={STATIC_READ_MINS}
      />
      <ReadingProgress />

      <PageLayout className="bg-[#f0f0f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          {/* Three-column grid: action | article | sidebar */}
          <div className="flex gap-6 items-start">

            {/* ── Left action bar ──────────────────────────────────────── */}
            <div className="hidden lg:block w-12 flex-shrink-0">
              <ActionBar />
            </div>

            {/* ── Article card ─────────────────────────────────────────── */}
            <article className="flex-1 min-w-0 bg-white rounded-lg border border-border">

              {/* Featured image — flush to top */}
              <img
                src={heroBanner}
                alt="Insurtech Insights 2025"
                className="w-full object-cover block"
                style={{ maxHeight: 420 }}
              />

              <div className="p-4 md:p-8">

                {/* Breadcrumb */}
                <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                  <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                  <ChevronRight className="w-3 h-3" />
                  <Link href="/knowledge-hub" className="hover:text-primary transition-colors">Knowledge Hub</Link>
                  <ChevronRight className="w-3 h-3" />
                  <span className="text-secondary">Insurtech Insights 2025</span>
                </nav>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map(t => (
                    <span key={t} className="text-xs font-semibold text-primary hover:bg-primary/8 px-1 py-0.5 rounded transition-colors cursor-default">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-black text-secondary leading-tight mb-5">
                  Peering into the future of healthcare…{' '}
                  Highlights from Insurtech Insights 2025
                </h1>

                {/* Author row */}
                <div className="flex items-start gap-3 mb-7 pb-7 border-b border-border flex-wrap">
                  <img src="https://secure.gravatar.com/avatar/8675797f4efbab66341170349ac946ca849ecb48e9a42a6d2dafbf055dc59e23?s=300&d=mm&r=g"
                    alt="Mel Dixon" className="w-9 h-9 rounded-full object-cover flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-secondary leading-none mb-2">Mel Dixon</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 flex-shrink-0" />
                        <span>Published <time dateTime={new Date(STATIC_DATE_PUBLISHED).toISOString()}>{fmtDate(STATIC_DATE_PUBLISHED)} at {fmtTime(STATIC_DATE_PUBLISHED)}</time></span>
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 flex-shrink-0" />
                        <span>{STATIC_READ_MINS} min read</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* AI Summary */}
                <AISummaryWidget />

                {/* Intro */}
                <div data-ai-content>
                <p className="text-base font-semibold text-secondary leading-relaxed mb-4">
                  Insurtech Insights 2025 brought together the world's leading technology innovators,
                  all vying to prove the value of their products.
                </p>
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
                  The organisation sought to learn more about health tech promising to improve health
                  and wellbeing services available to businesses investing in Group Health Insurance
                  and other health and wellbeing policies.
                </p>

                {/* Section 1 */}
                <SectionH2 id="womens-health-app">The Women's Health App Developed by an Oscar-Winner</SectionH2>

                <ArticleImage src={imgChen} alt="Chen Mao Davies, CEO of Anya"
                  caption="Chen Mao Davies, CEO & Founder of Anya" />

                <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                  It's not every day you get to speak to an Academy Award winner-turned women's health
                  innovator. Chen Mao Davies, CEO and Founder of Anya, previously worked as a computer
                  scientist helping create visual effects for major Hollywood films. Her movie career
                  reached an unsurpassable peak when her work helped films Blade Runner 2049 and Gravity
                  both win a BAFTA and Oscar for best visual effects.
                </p>
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                  Chen's career switch came after experiencing breastfeeding, postnatal depression, and
                  new parenthood challenges — and discovering inadequate support availability.
                </p>

                <PullQuote>
                  "I found it very hard to access any support from midwives, doctors or health visitors
                  because they don't work around the clock and the NHS is very stretched."
                </PullQuote>

                <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                  Anya is a women's health app combining AI technology and human specialists to provide
                  24/7 healthcare and companionship during a women's health journey including fertility,
                  pregnancy, parenting, menopause, and menstrual health.
                </p>

                <PullQuote>"It is like a healthcare professional downloading her brain and uploading it to AI."</PullQuote>
                <PullQuote>"You can ask any questions and get practical and emotional support from the Anya AI chatbot."</PullQuote>

                <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                  The app offers personalised content, self-care plans, 1-2-1 video consultations,
                  webinars, virtual drop-ins, and peer support communities. Anya has been widely
                  adopted by the NHS, serving 7.2 million people in the UK, and won the National AI
                  Awards for Healthcare 2024.
                </p>

                {/* Section 2 */}
                <SectionH2 id="health-data-api">The API That Unites Health Data from Wearables and Apps</SectionH2>

                <ArticleImage src={imgApi} alt="Terra API at Insurtech Insights 2025"
                  caption="Terra API — unifying health data from hundreds of devices and apps" />

                <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                  People are collecting more and more health data. One study found that more than a
                  third of American adults use a health app or fitness tracker. UK surveys draw similar
                  conclusions.
                </p>
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                  However, data is usually housed on different platforms and is not joining up,
                  particularly when it comes to wearable health tech. Michael Economou from Terra API
                  explained how they are unifying health data from different sources onto a single
                  platform.
                </p>

                <PullQuote>
                  "Everything you can imagine is on the Terra API. We've already integrated with hundreds
                  of wearable devices like Apple Watch, Garmin etc, sensors like Continuous Glucose
                  Monitoring and health apps like Strava, MyFitnessPal and so many more."
                </PullQuote>

                <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                  From this, it's possible to gain a more accurate picture of an individual's health
                  and wellbeing. It also provides the basis for creating more tailored gamified health
                  and wellbeing challenges and rewards, relevant to groups or individuals.
                </p>

                <PullQuote>
                  "This data can be used to drive better engagement through gamification and drive
                  healthy behaviours. It's very important for health insurance companies to have
                  positive touch points with their customers, and this helps increase that."
                </PullQuote>

                <PullQuote>
                  "Employee gamification elements help keep people healthier, that means absences are
                  reduced and productivity is increased — through very simple steps like promoting
                  physical activity, better sleep and better nutrition."
                </PullQuote>

                {/* Section 3 */}
                <SectionH2 id="retinal-scanning">Retinal Scanning That Sees Beyond Eye Health</SectionH2>

                <ArticleImage src={imgBenny} alt="Benny C.Y. Zee, Health View Bioanalytic"
                  caption="Benny C.Y. Zee PhD — Founder & CEO, Health View Bioanalytic" />

                <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                  Retinal scans have long been used by ophthalmologists to diagnose and monitor eye
                  diseases such as diabetic retinopathy. But their potential use goes deeper than that.
                </p>
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                  Benny C. Y. Zee has a PhD in Biostatistics and is Founder and CEO of Health View
                  Bioanalytic. His company uses retinal imaging combined with AI and machine learning
                  to assess the risk of ailments early, including depression, diabetes, dementia and
                  schizophrenia.
                </p>

                <PullQuote>
                  "We discovered that the accuracy of our technology is significantly higher than other
                  deep learning methods when we were working on stroke risk assessment."
                </PullQuote>

                <PullQuote>
                  "If you can intervene early things are much easier to treat and manage, rather than
                  waiting for it to get serious. This is true with both physical and mental health issues."
                </PullQuote>

                {/* Section 4 */}
                <SectionH2 id="gamification">Incentivising Wellness: The Gamification Revolution</SectionH2>

                <ArticleImage src={imgGamify} alt="YuLife and MetLife fireside chat"
                  caption="Sammy Rubin (YuLife) and Dominic Grinstead (MetLife) in conversation" />

                <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                  YuLife's Kate Whitelock hosted a "fireside chat" between YuLife Founder & CEO Sammy
                  Rubin and MetLife's SVP & General Manager Dominic Grinstead. The two companies
                  recently joined forces on a new Group Income Protection solution combining YuLife's
                  gamification technology with MetLife's traditional insurance model.
                </p>
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                  Sammy is a powerful advocate of transforming health and wellness into a game-like
                  experience, where people get rewarded for achieving certain milestones. He realised
                  the potential of gamifying health when observing large numbers of people playing
                  games on their phones during idle moments.
                </p>
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                  Dominic from MetLife mentioned that 2.8 million people are currently on disability
                  benefits — 800,000 more than before the pandemic. Mental health and musculoskeletal
                  disorders currently top the list of driving factors. Like Sammy, he discussed the
                  importance of early intervention, a common theme amongst the health technologists.
                </p>

                {/* Conclusion */}
                <SectionH2 id="future-of-insurance">Is This the Future of Health Insurance?</SectionH2>

                <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                  In recent years, the added value services offered on health insurance plans have
                  evolved from a nice-to-have to a core part of many policies. The organisation's
                  team of consultants keeps current with the latest services included on Group Health
                  Insurance plans, ensuring clients remain fully informed. Insurtech Insights 2025
                  proved that more innovations could be forthcoming, particularly in preventative care.
                </p>
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
                  For Engage Health Group, the conference provided an early glimpse of technologies
                  that could find their way onto Company Health Insurance, Income Protection plans
                  and other employee health and protection policies in the near future.
                </p>
                </div>{/* /data-ai-content */}

                {/* CTA */}
                <div className="rounded-md p-6 text-white relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg,#003648 0%,#76186f 100%)' }}>
                  <img src="/logomark.png" alt="" aria-hidden="true"
                    className="absolute -bottom-4 -right-4 w-24 h-24 object-contain opacity-[0.08] brightness-0 invert pointer-events-none select-none" />
                  <div className="relative">
                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                      Need help arranging health insurance or other employee benefits? Contact our
                      award-winning team for personalised advice and market-wide quotes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link href="/get-a-quote"
                        className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg font-bold text-sm bg-white text-secondary hover:bg-white/90 transition-colors">
                        Get a free quote <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <a href="tel:01273974419"
                        className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg font-bold text-sm border border-white/25 text-white hover:bg-white/10 transition-colors">
                        01273 974419
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mobile share row */}
                <div className="lg:hidden mt-8 pt-6 border-t border-border flex items-center gap-3">
                  <span className="text-xs font-semibold text-muted-foreground mr-1">Share</span>
                  {[
                    { id: 'linkedin', bg: '#0077b5', Icon: Linkedin },
                    { id: 'twitter',  bg: '#1da1f2', Icon: Twitter  },
                    { id: 'facebook', bg: '#1877f2', Icon: Facebook },
                  ].map(({ id, bg, Icon }) => (
                    <button key={id}
                      onClick={() => {
                        const url = encodeURIComponent(window.location.href);
                        const map: Record<string,string> = {
                          linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
                          facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
                          twitter:  `https://twitter.com/intent/tweet?url=${url}`,
                        };
                        window.open(map[id], '_blank', 'width=600,height=400');
                      }}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                      style={{ background: bg }}>
                      <Icon className="w-3.5 h-3.5" />
                    </button>
                  ))}
                </div>

              </div>
            </article>

            {/* ── Right sidebar ─────────────────────────────────────────── */}
            <aside className="hidden lg:flex flex-col gap-4 w-60 xl:w-64 flex-shrink-0 sticky top-[88px] self-start">

              {/* Table of contents */}
              <SidebarTOC items={staticTocItems} />

              {/* Author card */}
              <div className="bg-white rounded-lg border border-border overflow-hidden">
                {/* Accent banner */}
                <div className="h-14" style={{ background: 'linear-gradient(135deg,#003648,#76186f)' }} />
                <div className="px-5 pb-5 -mt-7">
                  <img src="https://secure.gravatar.com/avatar/8675797f4efbab66341170349ac946ca849ecb48e9a42a6d2dafbf055dc59e23?s=300&d=mm&r=g"
                    alt="Mel Dixon" className="w-14 h-14 rounded-full object-cover ring-4 ring-white mb-3" />
                  <p className="font-extrabold text-secondary text-sm">Mel Dixon</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Staff Writer</p>

                  <p className="text-xs text-muted-foreground leading-relaxed mt-3 mb-4">
                    Experienced writer on employee benefits and workplace trends, with a background
                    in journalism and PR.
                  </p>

                  <button className="w-full py-2 rounded-lg font-bold text-sm text-white transition-opacity hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg,#76186f,#003648)' }}>
                    Follow
                  </button>
                </div>
              </div>

              {/* More from author */}
              <div className="bg-white rounded-lg border border-border p-5">
                <p className="text-xs font-black uppercase tracking-wider text-muted-foreground mb-4">
                  More from <span className="text-primary">Mel Dixon</span>
                </p>
                <div className="flex flex-col divide-y divide-border">
                  {morePosts.map((post) => (
                    <div key={post.title} className="py-3.5 first:pt-0 last:pb-0">
                      <p className="text-sm font-semibold text-secondary leading-snug mb-2 hover:text-primary transition-colors cursor-default">
                        {post.title}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.map(t => (
                          <span key={t} className="text-[11px] font-medium text-primary">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA card */}
              <div className="bg-white rounded-lg border border-border p-5">
                <p className="text-xs font-black uppercase tracking-wider text-muted-foreground mb-2">
                  Free consultation
                </p>
                <p className="text-sm font-bold text-secondary mb-3 leading-snug">
                  Get expert advice on employee benefits today
                </p>
                <Link href="/get-a-quote"
                  className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg font-bold text-xs text-white hover:opacity-90 transition-opacity"
                  style={{ background: 'linear-gradient(135deg,#003648,#76186f)' }}>
                  Get a free quote <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a href="tel:01273974419"
                  className="mt-2 block text-center text-xs text-muted-foreground hover:text-primary transition-colors">
                  or call 01273 974419
                </a>
              </div>

            </aside>

          </div>
        </div>
      </PageLayout>
    </>
  );
}
