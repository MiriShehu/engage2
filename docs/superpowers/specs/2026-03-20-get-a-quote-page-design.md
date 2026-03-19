# Get a Quote Page — Design Spec

**Date:** 2026-03-20
**Status:** Approved by user

---

## Overview

Replace the existing `/get-a-quote` page (`GetAQuote.tsx`) with a full-screen, SaaS-style two-column quote flow. The design is inspired by the Bravo Studio onboarding UI: minimal left panel with one focused question per step, dark branded right panel with an animated testimonial carousel.

---

## Layout

### Shell
- **Navbar** (top, white, 52px): Engage logo left, "← Back to site" + "🔒 Secure & confidential" right
- **Step strip** (below nav, gradient `#003648 → #76186f`, ~36px): 4 numbered steps inline with dividers. States:
  - **Done:** circle bg `#0dab76`, white `✓` text
  - **Active:** circle bg `white`, text `#76186f` (bold)
  - **Todo:** circle bg `rgba(255,255,255,0.1)`, text `rgba(255,255,255,0.45)`
  - Step label text: active = `white`, done = `rgba(255,255,255,0.6)`, todo = `rgba(255,255,255,0.45)`
  - Divider: `28px` wide, `1px` tall, `rgba(255,255,255,0.15)`
- **Split body** (flex row, fills remaining height):
  - Left panel: `52%` width, white background
  - Right panel: `flex: 1`, dark background `#01232f`
- **Footer** (bottom, white, 42px): FCA badge + copyright left, Privacy/Terms links right

### Left Panel
- Horizontally centred content block (`max-width: 460px`, `align-items: center` on parent)
- Brand icon (gradient square, 48×48px, rounded-14) at top
- Large heading (32px, 800 weight) with `.accent` word in `#76186f`
- Muted subtext (13px, `#94a3b8`)
- Step-specific form content (see steps below)
- Purple CTA button full-width (`gradient 135deg #76186f → #5a1254`, shadow)
- Bottom footer bar: "← Go Back" left, bold `2/4` step counter right. On step 1, "← Go Back" navigates to `/` (home). On steps 2–4 it decrements the step.

### Right Panel
- Deep dark teal background `#01232f` with two radial gradient overlays (purple top-right, green bottom-left) for depth
- Glassmorphic testimonial card (full width, `border-radius: 20px`, `rgba(255,255,255,0.07)` bg, subtle white border, `backdrop-filter: blur`)
- Below card: heading, subtitle, dot indicators, ← → circular arrow buttons

---

## Form Steps (4 total)

### Step 1 — Cover Type
- **Heading:** "What would you like to cover?"
- **Content:** 2-column card grid with icon + name + description for each cover type:
  - Employee Benefits (🏢 Building2 icon) — "UK-based workforce"
  - International Benefits (🌐 Globe2 icon) — "Global / expat teams"
  - Both (⚡ Zap icon) — "We need both"
- Cards: border `1.5px solid #e8ecf0`, `border-radius: 14px`, hover/selected state in `#76186f`
- Validation: at least one must be selected

### Step 2 — Your Business
- **Heading:** "Tell us about your **business**"
- **Content:**
  - Section label: "What size is your organisation?"
  - 5-column grid of **size cards** — each card has:
    - Icon (SVG, 18×18 in a 36×36 rounded-10 container) — progressively "larger group" icons per range
    - Range label (12px, 700 weight)
    - "employees" sub-label (10px, muted)
    - Ranges: `1–10` / `11–50` / `51–250` / `251–500` / `500+` (matching the existing `QuoteForm.tsx` values for API consistency)
  - Two fields (row): Company name + Industry
  - One field (full): Headquarters country
- Validation: size selection + company name required

### Step 3 — Your Needs
- **Heading:** "What are you looking for?"
- **Content:**
  - Section label: "What's your approximate annual budget?"
  - Pill buttons (flex-wrap): `< £5k` / `£5k–£20k` / `£20k–£50k` / `£50k+` / `Not sure`
  - Section label: "How soon do you need cover?"
  - Pill buttons: `ASAP` / `1–3 months` / `3–6 months` / `Just researching`
  - Optional textarea: "Anything else we should know?" (3 rows, optional label)
- Validation: budget + timeline required

### Step 4 — Contact
- **Heading:** "Almost there — how do we **reach you**?"
- **Content:**
  - Field row: First name + Last name
  - Field: Email address
  - Field: Phone number (with dial code picker — extract `DialCodePicker` from `QuoteForm.tsx` into `src/components/ui/DialCodePicker.tsx` as a named export, then import from there in both the new step and the old form)
  - Checkbox: GDPR consent (required) — "I agree to be contacted by Engage Health Group…"
  - CTA button text: "Get my free quotes →"
- Validation: all fields + consent required

### Success Screen (replaces form after step 4 submit)
- Animated checkmark (Framer Motion scale + opacity)
- Heading: "We've received your request!"
- Subtext: summary of their selections — e.g. `"Thanks, [firstName]. We'll be in touch about [coverTypes joined with ' & '] cover for your team of [employeeRange] employees."`
- CTA: "← Back to site" (navigates to `/`)

---

## Right Panel — Testimonial Carousel

**Data source:** Reuse the 9 testimonials already in `Testimonials.tsx`. Each testimonial has `name`, `role`, `company`, and `quote` fields. Derive initials from `name` (first letter of first + last word). Display `role · company` as the subtitle line.

**Card contents:**
- 5 gold stars
- Quote text (italic, `rgba(255,255,255,0.85)`)
- Large decorative `"` in top-right corner (`rgba(255,255,255,0.07)`)
- Author row: gradient circle avatar (initials) + name + `role · company` + "✓ Verified" pill

**Below card:**
- Heading: "Trusted by 500+ businesses"
- Subtitle: "Award-winning advice from specialists with 50 years' combined experience."
- Dot indicators (active dot wider `18px`, pill shape)
- ← → circular arrow buttons (`38×38`, border `rgba(255,255,255,0.18)`)

**Behaviour:**
- Auto-rotates every 5 seconds
- Arrow buttons manually advance/retreat
- Dot click navigates directly
- Card transitions: Framer Motion `AnimatePresence` with fade + slight vertical slide (8px)

---

## Animations

| Element | Animation |
|---|---|
| Step panels | `AnimatePresence` slide: enter from right (+24px), exit to left (-24px), `duration: 0.3s` |
| Size cards | Scale `1 → 1.02` on hover, border colour transition |
| Cover cards | Border + background colour transition on hover/select |
| CTA button | `translateY(-1px)` on hover |
| Checkmark (success) | Scale `0 → 1.1 → 1` with opacity, `duration: 0.5s` |
| Testimonial card | Fade + `y: 8 → 0` on entry, `duration: 0.4s` |
| Step strip dots | Background + width transition for done/active/todo states |

---

## Component Architecture

```
src/pages/GetAQuote.tsx          ← main page, replaces existing
src/components/quote/
  QuoteLayout.tsx                ← nav + step strip + split shell + footer
  QuoteFormSteps.tsx             ← AnimatePresence wrapper, step routing
  steps/
    Step1CoverType.tsx
    Step2Business.tsx
    Step3Needs.tsx
    Step4Contact.tsx
    StepSuccess.tsx
  TestimonialCarousel.tsx        ← right panel carousel
  SizeCard.tsx                   ← reusable size selection card
```

**State:** Single `formData` object lifted to `GetAQuote.tsx`, passed down via props. No external state library needed.

**Form data shape:**
```ts
{
  coverTypes: string[]      // step 1
  employeeRange: string     // step 2
  company: string
  industry: string
  country: string
  budget: string            // step 3
  timeline: string
  notes: string
  firstName: string         // step 4
  lastName: string
  email: string
  phone: string
  dialCode: string
  gdprConsent: boolean
}
```

**Submission:** Simulate submission with `setTimeout` (500ms) matching the existing form's behaviour. No real API endpoint exists — show a loading spinner on the CTA button during the delay, then transition to the success screen.

---

## Styling Notes

- Tailwind v4 with existing CSS vars (`--primary`, `--secondary`, etc.)
- Framer Motion already installed
- `GetAQuote.tsx` must **not** wrap in `<PageLayout>` — render `<QuoteLayout>` directly (custom nav + step strip + footer) to avoid double navbar
- Right panel `backdrop-filter: blur(10px)` on testimonial card
- No new dependencies required

---

## Out of Scope

- Mobile responsiveness (stacks to single column below `lg:` — basic stacking only, not polished)
- Email confirmation / CRM integration
- A/B testing
