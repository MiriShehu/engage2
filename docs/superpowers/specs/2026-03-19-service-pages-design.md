# Service Pages Design Spec
**Date:** 2026-03-19
**Project:** Engage Health Group — engagehealth frontend

---

## Overview

Add 23 service subpages (11 Employee Benefits + 12 International Benefits) to the existing site, following the established design pattern of `GroupHealthInsurance.tsx`. All pages share the same layout shell: hero, TrustBar, main content + sidebar, and a bottom CTA banner. Header and footer are global via `PageLayout`.

---

## Goals

- Create consistent, on-brand service pages for all EB and IB products
- Minimise duplication: one template drives all 23 pages
- Make it easy to add future services — one data entry per service
- Refactor existing `GroupHealthInsurance.tsx` to use the same template

---

## Routes

Two dynamic routes replace 23 individual page imports:

| Category | Route pattern | Example |
|---|---|---|
| Employee Benefits | `/employee-benefits/:slug` | `/employee-benefits/group-life-insurance` |
| International Benefits | `/international-benefits/:slug` | `/international-benefits/int-business-health-insurance` |

If a slug is not found in the data file, the page renders a 404.

---

## Services

### Employee Benefits (11 pages)

| Service | Slug |
|---|---|
| Group Health Insurance *(existing, refactored)* | `group-health-insurance` |
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

### International Benefits (12 pages)

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
│   ├── employeeBenefitsServices.ts         ← ServiceEntry[] for all 12 EB services
│   └── internationalBenefitsServices.ts    ← ServiceEntry[] for all 12 IB services
├── components/
│   └── service-page/
│       ├── ServicePageLayout.tsx           ← fixed shell (hero, TrustBar, sidebar, bottom CTA)
│       └── ServicePageSections.tsx         ← renders ServiceSection[] array
└── pages/
    ├── EmployeeBenefitsService.tsx         ← /employee-benefits/:slug
    └── InternationalBenefitsService.tsx    ← /international-benefits/:slug
```

Files updated:
- `src/App.tsx` — add 2 dynamic routes, remove hardcoded GroupHealthInsurance route
- `src/pages/GroupHealthInsurance.tsx` — refactored to use ServicePageLayout (or deleted, replaced by the dynamic route)

---

## Data Model

```ts
// src/data/types.ts (shared)

import { LucideIcon } from 'lucide-react';

export type ServiceSection =
  | { type: 'service-list'; label: string; title: string; intro: string; items: string[]; testimonial?: string }
  | { type: 'intro';        label: string; title: string; paragraphs: string[] }
  | { type: 'coverage';     label: string; title: string; intro: string; items: string[]; addOns?: string[] }
  | { type: 'why-buy';      label: string; title: string; intro: string; employerBenefits: string[]; employeeBenefits: string[] }
  | { type: 'text-block';   label: string; title: string; paragraphs: string[] }
  | { type: 'faqs';         items: { q: string; a: string }[] }

export type ServiceEntry = {
  slug: string
  title: string
  subtitle: string         // hero subheading
  tagline: string          // small badge text in hero
  heroImage?: string       // optional; falls back to a default bg
  icon: LucideIcon
  colorScheme: 'purple' | 'teal'  // purple = EB, teal = IB
  stats: { icon: LucideIcon; val: string; label: string }[]
  sections: ServiceSection[]       // ordered; only include what applies
  sidebarTestimonial: { quote: string; author: string }
}
```

**Section types:**
- `service-list` — "How can Engage help?" checklist + optional pull-quote. Present on every page.
- `intro` — "What is X?" heading + prose paragraphs. Optional.
- `coverage` — checklist grid + optional add-on pills. Optional.
- `why-buy` — two-column employer/employee benefit cards. Optional.
- `text-block` — freeform heading + paragraphs for anything that doesn't fit above. Optional.
- `faqs` — accordion. Present on most pages; always placed last before bottom CTA.

`colorScheme` controls hero gradient and accent colours:
- `purple` → `#76186f` / `#5a1254` (Employee Benefits brand colour)
- `teal` → `#003648` / `#004d6b` (International Benefits brand colour)

---

## Component Design

### `ServicePageLayout.tsx`

Props:
```ts
{
  entry: ServiceEntry
  category: 'employee-benefits' | 'international-benefits'
  allServices: ServiceEntry[]   // for auto-generating sidebar service links
}
```

Renders:
1. `<PageLayout>` wrapper (global header/footer)
2. **Hero** — background image (or solid gradient fallback), breadcrumb, badge, h1, subtitle, CTAs, stats strip
3. `<TrustBar />`
4. Two-column body: `<main>` + `<aside>`
5. **Sidebar** (sticky on desktop):
   - CTA card (gradient, "Get a free quote")
   - Service links (auto-generated from `allServices`)
   - Award badge
   - Testimonial (`entry.sidebarTestimonial`)
6. **Bottom CTA banner** (gradient, phone + email + quote button)

### `ServicePageSections.tsx`

Receives `sections: ServiceSection[]` and renders each in order, separated by `<Divider />`. Section renderers:

- `service-list` → `<SectionLabel>` + `<SectionHeading>` + checklist + optional blockquote
- `intro` → `<SectionLabel>` + `<SectionHeading>` + prose
- `coverage` → label + heading + checklist grid + optional add-on pill cloud
- `why-buy` → label + heading + intro + two-column employer/employee cards
- `text-block` → label + heading + prose
- `faqs` → label + "Frequently Asked Questions" heading + accordion

All use the existing `SectionLabel`, `SectionHeading`, and `Divider` sub-components (extracted to shared location).

### `EmployeeBenefitsService.tsx` / `InternationalBenefitsService.tsx`

```tsx
export default function EmployeeBenefitsService() {
  const [params] = useParams()
  const entry = employeeBenefitsServices.find(s => s.slug === params.slug)
  if (!entry) return <NotFound />
  return (
    <ServicePageLayout
      entry={entry}
      category="employee-benefits"
      allServices={employeeBenefitsServices}
    />
  )
}
```

---

## Routing (App.tsx changes)

```tsx
// Remove:
import GroupHealthInsurance from "@/pages/GroupHealthInsurance";
<Route path="/employee-benefits/group-health-insurance" component={GroupHealthInsurance} />

// Add:
import EmployeeBenefitsService from "@/pages/EmployeeBenefitsService";
import InternationalBenefitsService from "@/pages/InternationalBenefitsService";
<Route path="/employee-benefits/:slug" component={EmployeeBenefitsService} />
<Route path="/international-benefits/:slug" component={InternationalBenefitsService} />
```

---

## Visual Design

Consistent with `GroupHealthInsurance.tsx`:
- Hero: full-bleed background image, dark overlay, left-aligned text, breadcrumb, stats strip
- Body background: `#f8f8f9`
- Cards: white with `border-border`, `rounded-2xl`
- Gradients: purple (`#76186f → #5a1254`) for EB, teal (`#003648 → #004d6b`) for IB
- Typography: Inter, section labels in pill badges, headings in `text-secondary`
- Sidebar: sticky on `lg:`, 80px / 340px wide

---

## Content

All 23 service entries are populated with realistic, relevant content (service lists, intro text, FAQs etc.) appropriate to each product. Content follows the tone and style of the existing GroupHealthInsurance page — professional, clear, UK-market focused.

---

## Out of Scope

- Actual hero images for each service (uses gradient fallback if no image provided)
- CMS / backend content management
- Multilingual support
- Analytics / tracking per page
