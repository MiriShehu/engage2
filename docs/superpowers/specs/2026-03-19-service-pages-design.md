# Service Pages Design Spec
**Date:** 2026-03-19
**Project:** Engage Health Group — engagehealth frontend

---

## Overview

Add service subpages for both Employee Benefits and International Benefits product categories, following the design pattern of `GroupHealthInsurance.tsx`. All pages share the same shell: hero, TrustBar, main content + sidebar, bottom CTA banner. Header and footer are global via `PageLayout`.

`GroupHealthInsurance.tsx` is **refactored** to use the new `ServicePageLayout` shell (hero, sidebar, TrustBar, bottom CTA) while keeping its bespoke pricing tables and comparison table as inline JSX. Its explicit route in `App.tsx` is **kept** (ensuring it matches before the dynamic slug route).

---

## Goals

- Create consistent, on-brand service pages for all EB and IB products
- Minimise duplication: one template + data files drive all new pages
- Make adding future services trivial — one data entry per service
- Refactor `GroupHealthInsurance.tsx` to share the shell, without breaking its bespoke content

---

## Routes

```tsx
// App.tsx (final state)

// GHI explicit route — matched BEFORE the dynamic slug route
<Route path="/employee-benefits/group-health-insurance" component={GroupHealthInsurance} />

// Dynamic routes for all other services
<Route path="/employee-benefits/:slug">
  {() => <ServicePage category="employee-benefits" services={employeeBenefitsServices} />}
</Route>
<Route path="/international-benefits/:slug">
  {() => <ServicePage category="international-benefits" services={internationalBenefitsServices} />}
</Route>
```

A `/international-benefits` parent landing page is **out of scope**. IB page breadcrumbs render `Home > International Benefits > [Service]` where "International Benefits" is plain text (not a link). EB page breadcrumbs render `Home > Employee Benefits > [Service]` where "Employee Benefits" links to `/employee-benefits` (this route already exists).

---

## Services & Slugs

### Employee Benefits data file — 12 entries (11 new services + 1 GHI stub)

`employeeBenefitsServices.ts` exports **12** `ServiceEntry` objects: the 11 new services listed below, plus one stub entry for `group-health-insurance`. The stub has `sections: []` (never rendered via the data path) and exists solely so GHI appears in the sidebar "Our Services" list on all EB pages. When `GroupHealthInsurance.tsx` renders, it passes `allServices={employeeBenefitsServices}` and `currentSlug="group-health-insurance"` to highlight the correct link.

| Service | Slug |
|---|---|
| Group Life Insurance | `group-life-insurance` |
| Group Income Protection | `group-income-protection` |
| Group Critical Illness | `group-critical-illness` |
| Group Dental Insurance | `group-dental-insurance` |
| Corporate Wellness Programmes | `corporate-wellness-programmes` |
| Employee Assistance Programmes | `employee-assistance-programmes` |
| Group Health Cash Plan | `group-health-cash-plan` |
| Key Person Insurance | `key-person-insurance` |
| Relevant Life Insurance | `relevant-life-insurance` |
| Employee Health Screening | `employee-health-screening` |
| Employee Benefits Platforms | `employee-benefits-platforms` |

### International Benefits data file — 12 entries

| Service | Slug |
|---|---|
| Int Business Health Insurance | `int-business-health-insurance` |
| International Group Life Insurance | `international-group-life-insurance` |
| International Group Income Protection | `international-group-income-protection` |
| International Group Critical Illness | `international-group-critical-illness` |
| Group Business Travel Insurance | `group-business-travel-insurance` |
| Kidnap and Ransom Insurance | `kidnap-and-ransom-insurance` |
| Short-Term Int Health Insurance | `short-term-int-health-insurance` |
| Int Employee Assistance Programmes | `int-employee-assistance-programmes` |
| International Security Services | `international-security-services` |
| Pre-Assignment Screening | `pre-assignment-screening` |
| US Company Health Insurance | `us-company-health-insurance` |
| Additional International Products | `additional-international-products` |

---

## File Structure

```
src/
├── data/
│   ├── types.ts                              ← all shared TypeScript types
│   ├── employeeBenefitsServices.ts           ← ServiceEntry[] (11 EB services)
│   └── internationalBenefitsServices.ts      ← ServiceEntry[] (12 IB services)
├── components/
│   └── service-page/
│       ├── ServicePageLayout.tsx             ← shell: hero, TrustBar, sidebar, bottom CTA
│       └── ServicePageSections.tsx           ← renders ServiceSection[] + shared sub-components
└── pages/
    ├── ServicePage.tsx                        ← single dynamic page (both categories via props)
    └── GroupHealthInsurance.tsx              ← UPDATED: uses ServicePageLayout as shell
```

Updated:
- `src/App.tsx` — add 2 dynamic routes; GHI explicit route kept

---

## Data Model (`src/data/types.ts`)

```ts
import type { LucideIcon } from 'lucide-react';

// ── Section variants ───────────────────────────────────────────────────────

/** "How can Engage help?" — always present */
export type ServiceListSection = {
  type: 'service-list'
  label: string          // pill badge, e.g. "Our service"
  title: string          // section heading
  intro: string          // opening paragraph
  items: string[]        // checklist items
  testimonial?: string   // optional italic pull-quote
}

/** "What is X?" — optional */
export type IntroSection = {
  type: 'intro'
  label: string
  title: string
  paragraphs: string[]
}

/** Coverage checklist — optional */
export type CoverageSection = {
  type: 'coverage'
  label: string
  title: string
  intro: string
  items: string[]        // core coverage checklist
  addOns?: string[]      // optional add-on pills
}

/** Two-column employer / employee benefit cards — optional */
export type WhyBuySection = {
  type: 'why-buy'
  label: string
  title: string
  intro: string
  employerBenefits: string[]
  employeeBenefits: string[]
}

/** Freeform paragraphs — optional */
export type TextBlockSection = {
  type: 'text-block'
  label: string
  title: string
  paragraphs: string[]
}

/** FAQ accordion — present on most pages; always placed last.
 *  The section label is always hard-coded as "FAQs" and the heading
 *  as "Frequently Asked Questions" — no label field needed. */
export type FaqsSection = {
  type: 'faqs'
  items: { q: string; a: string }[]
}

export type ServiceSection =
  | ServiceListSection
  | IntroSection
  | CoverageSection
  | WhyBuySection
  | TextBlockSection
  | FaqsSection

// ── Entry ──────────────────────────────────────────────────────────────────

export type ServiceStat = {
  icon: LucideIcon   // Lucide component ref, e.g. imported Shield
  val: string        // e.g. "500+"
  label: string      // e.g. "Businesses supported"
}

export type ServiceEntry = {
  slug: string
  title: string
  titleAccent?: string    // optional substring of title rendered in accent colour span
                          // e.g. title="Group Life Insurance", titleAccent="Life Insurance"
                          // renders: "Group <span style={accentColour}>Life Insurance</span>"
                          // if absent, the full title renders in plain white with no accent span
  tagline: string         // hero badge text, e.g. "UK Group Health Insurance"
  subtitle: string        // hero paragraph below h1
  heroImage?: string      // optional imported asset; absent → solid gradient from colorScheme
  icon: LucideIcon        // used in sidebar service-link list
  colorScheme: 'purple' | 'teal'
  stats: ServiceStat[]    // 4 items shown in hero strip
  sections: ServiceSection[]
  sidebarTestimonial: {
    quote: string
    author: string        // e.g. "Technology company, London · 12 employees"
    // star count always 5, not configurable
  }
}
```

**`colorScheme` concrete mapping:**

| UI element | `'purple'` (Employee Benefits) | `'teal'` (International Benefits) |
|---|---|---|
| Hero dark overlay | `#003648` at 70–95% | same |
| h1 `titleAccent` span colour | `#be59b8` | `#4aaed6` |
| Hero primary CTA | gradient `#76186f → #5a1254` | gradient `#003648 → #004d6b` |
| Sidebar CTA card | gradient `#003648 → #76186f` | gradient `#003648 → #00607a` |
| Bottom CTA banner | gradient `#003648 → #76186f` | gradient `#003648 → #00607a` |
| Why-buy employer header | gradient `#003648 → #004d6b` | same |
| Why-buy employee header | gradient `#76186f → #5a1254` | gradient `#003648 → #004d6b` |

**`heroImage` fallback:** When absent, the hero `section` element has no `backgroundImage` style — instead the existing dark overlay `div` (which is always rendered on top of any image) provides the full background by using `bg-[#003648]` as its base colour at 100% opacity. The overlay gradient `div` is also rendered as normal. Result: a solid dark teal background with gradient, visually identical to image pages but without a photo.

**Icons in data files:** Each data file imports Lucide icons at the top:
```ts
import { Shield, Heart, Activity } from 'lucide-react';
```
Component references are assigned directly in the entry objects. No string names used.

---

## Component Design

### `ServicePageLayout.tsx`

```ts
type Props = {
  entry: Pick<ServiceEntry, 'title' | 'titleAccent' | 'tagline' | 'subtitle' | 'heroImage' | 'colorScheme' | 'stats' | 'sidebarTestimonial'>
  category: 'employee-benefits' | 'international-benefits'
  currentSlug: string           // used to highlight the active link in the sidebar
  allServices: ServiceEntry[]   // drives sidebar service links
  children: React.ReactNode     // main content column
}
```

Renders:
1. `<PageLayout>` (global header + footer)
2. **Hero** — full-bleed bg image or gradient fallback, dark overlay, breadcrumb (IB parent = plain text), tagline badge, h1 with accent span, subtitle, "Get a free quote" + phone CTAs, animated stats strip
3. `<TrustBar />`
4. `flex-col lg:flex-row` body wrapper
5. `<main>` — renders `{children}`
6. `<aside>` (sticky `lg:top-24`, `w-80 xl:w-[340px]`):
   - CTA card (gradient → "Get a free quote" button + phone + email) — **fixed chrome, not configurable**
   - "Our Services" link list — auto-generated from `allServices`, links to `/{category}/{slug}`, entry matching `currentSlug` is highlighted
   - Award badge — **fixed chrome**: "Best International Group Advice Firm — UK Health & Protection Awards 2022, 2023 & 2024"
   - Testimonial card (5 stars, `entry.sidebarTestimonial.quote`, `entry.sidebarTestimonial.author`)
7. **Bottom CTA banner** (gradient, phone + email + "Get a free quote" button) — **fixed chrome**

### `ServicePageSections.tsx`

```ts
type Props = {
  sections: ServiceSection[]
  colorScheme: 'purple' | 'teal'  // passed through for gradient-aware renderers (why-buy)
}
```

Renders sections in array order, `<Divider />` between each. Exports `SectionLabel`, `SectionHeading`, `Divider` for use by `GroupHealthInsurance.tsx`.

Renderers per type:
- `service-list` → SectionLabel + SectionHeading + intro paragraph + checklist + optional blockquote
- `intro` → SectionLabel + SectionHeading + prose paragraphs
- `coverage` → SectionLabel + SectionHeading + intro + checklist grid + optional add-on pill cloud
- `why-buy` → SectionLabel + SectionHeading + intro + two-column employer/employee cards; card header gradients come from `colorScheme` per the mapping table
- `text-block` → SectionLabel + SectionHeading + paragraphs
- `faqs` → hard-coded label "FAQs" + hard-coded heading "Frequently Asked Questions" + accordion

### `ServicePage.tsx`

```tsx
import { useParams } from 'wouter';
import type { ServiceEntry } from '@/data/types';
import NotFound from '@/pages/not-found';
import ServicePageLayout from '@/components/service-page/ServicePageLayout';
import ServicePageSections from '@/components/service-page/ServicePageSections';

type Props = {
  category: 'employee-benefits' | 'international-benefits'
  services: ServiceEntry[]
}

export default function ServicePage({ category, services }: Props) {
  const params = useParams<{ slug: string }>();
  const entry = services.find(s => s.slug === params.slug);
  if (!entry) return <NotFound />;
  return (
    <ServicePageLayout entry={entry} category={category} currentSlug={params.slug} allServices={services}>
      <ServicePageSections sections={entry.sections} colorScheme={entry.colorScheme} />
    </ServicePageLayout>
  );
}
```

### `GroupHealthInsurance.tsx` (updated)

Imports `ServicePageLayout`, `SectionLabel`, `SectionHeading`, `Divider` from the new components. Passes all its existing JSX (service list, intro, coverage, pricing tables, comparison table, FAQs, bottom CTA) as `children` to `ServicePageLayout`. The `entry` prop is assembled inline from the existing hard-coded data at the top of the file. It passes `currentSlug="group-health-insurance"` and `allServices={employeeBenefitsServices}` so the sidebar renders correctly. The GHI entry in `employeeBenefitsServices.ts` has `sections: []` — it is never rendered via the data path.

---

## App.tsx Changes

```tsx
// Keep:
import GroupHealthInsurance from "@/pages/GroupHealthInsurance";

// Add:
import ServicePage from "@/pages/ServicePage";
import { employeeBenefitsServices } from "@/data/employeeBenefitsServices";
import { internationalBenefitsServices } from "@/data/internationalBenefitsServices";

// Routes (order matters — GHI explicit route must come first):
<Route path="/employee-benefits/group-health-insurance" component={GroupHealthInsurance} />
<Route path="/employee-benefits/:slug">
  {() => <ServicePage category="employee-benefits" services={employeeBenefitsServices} />}
</Route>
<Route path="/international-benefits/:slug">
  {() => <ServicePage category="international-benefits" services={internationalBenefitsServices} />}
</Route>
// Preserve existing catch-all — must remain the last route:
<Route component={NotFound} />
```

---

## Visual Design

Consistent with `GroupHealthInsurance.tsx`:
- Body background: `#f8f8f9`
- Cards: white, `border-border`, `rounded-2xl`
- Gradients: per `colorScheme` mapping table above
- Typography: Inter; section label pills; headings `text-secondary`
- Animations: Framer Motion on hero stats strip (same as GHI)
- Sidebar testimonial: 5 filled amber stars, always

---

## Out of Scope

- Hero images per service (gradient fallback when `heroImage` absent)
- `/international-benefits` parent landing page
- Migrating GHI pricing/comparison tables into typed section variants
- CMS / backend content management
- Multilingual support
