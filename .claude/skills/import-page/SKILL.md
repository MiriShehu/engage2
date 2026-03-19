---
name: import-page
description: Import content from an engagehealthgroup.co.uk URL and update the corresponding page in this project with the exact source content (no AI-generated wording).
argument-hint: <https://www.engagehealthgroup.co.uk/page-slug/>
---

You are importing content from an engagehealthgroup.co.uk page into this project. Your job is to extract the **exact wording** from the live page source — do not rephrase, summarise, or generate new text. Every heading, paragraph, list item, FAQ question/answer, stat, and testimonial must come verbatim from the source.

## URL to import

$ARGUMENTS

---

## Step 1 — Fetch the page

Use WebFetch to retrieve `$ARGUMENTS`. Extract the following raw content from the HTML:

- **Page title / H1** (the main heading)
- **Tagline / badge text** (small label above the H1, often in a pill/badge element)
- **Subtitle / intro paragraph** (the strapline below the H1)
- **Hero background image URL** (look for `background-image: url(...)` on a hero/banner section, or an `<img>` in the hero area)
- **Stats** (numbered/highlighted figures, often in a stats strip — capture the value and label for each)
- **All body sections**, in order:
  - Section labels (small uppercase pill text like "OUR SERVICE", "THE BASICS", etc.)
  - Section headings (H2 or H3)
  - Intro paragraphs
  - Bullet/list items
  - Employer benefit lists (if "For Employers" / "Employer benefits" block exists)
  - Employee benefit lists (if "For Employees" / "Employee benefits" block exists)
  - FAQ questions and answers
  - Testimonials (quote + attribution)
- **Sidebar testimonial** (quote + author shown in the right sidebar, if present)

---

## Step 2 — Download the hero image

If a hero background image URL was found:

1. Determine a clean filename from the URL (e.g. `group-health-hero.jpg`).
2. Use Bash with `curl -L -o` to download it into:
   `/Users/fatmir/Desktop/engageHealth/engage/attached_assets/<filename>`
3. Note the relative import path as `@assets/<filename>`.

If no hero image is found, skip this step.

---

## Step 3 — Identify the target in the project

Determine the page slug from the URL path (e.g. `/group-health-insurance/` → `group-health-insurance`).

Then decide which file to update:

### A) If the slug matches an entry in `employeeBenefitsServices.ts`

File: `/Users/fatmir/Desktop/engageHealth/engage/artifacts/engage-health/src/data/employeeBenefitsServices.ts`

Read the file. Find the entry where `slug` matches. Update it with the extracted content following the `ServiceEntry` type defined in `types.ts`:

```ts
{
  slug: '<slug>',
  title: '<exact H1 text>',
  titleAccent: '<the accented/coloured word or phrase in the H1, if any>',
  tagline: '<badge/pill label text>',
  subtitle: '<strapline below the H1>',
  heroImage: '<imported heroImage variable, if image was downloaded>',  // add import at top
  icon: <keep existing icon>,
  colorScheme: 'purple',
  stats: [
    // Use ONLY stats found on the page. Each stat needs:
    { icon: <relevant LucideIcon>, val: '<exact value string>', label: '<exact label string>' },
  ],
  sections: [
    // Build sections from the page content in the order they appear.
    // Use these section types (defined in types.ts):
    //
    // 'service-list' — "How can Engage help?" section with bullet items
    // 'intro'        — "What is X?" explanatory paragraphs
    // 'coverage'     — Grid of covered items (what's included)
    // 'why-buy'      — Split employer/employee benefits cards
    // 'faqs'         — Accordion FAQ items
    // 'testimonial'  — Standalone quote block
    // 'text-block'   — General paragraphs with a heading
  ],
  sidebarTestimonial: {
    quote: '<exact quote text>',
    author: '<exact attribution>',
  },
}
```

**Section construction rules:**
- Use `service-list` for the "how we help / our service" block with bullet items. If there is an inline client quote inside that section, put it in `testimonial`.
- Use `intro` for "What is X?" explanatory paragraphs (2–3 paragraphs max per intro block).
- Use `coverage` for a list of covered items or included features. Put optional extras in `addOns`.
- Use `why-buy` when the page has a clear employer-benefits / employee-benefits split.
- Use `faqs` for any Q&A / FAQ section. Include every question and its complete answer verbatim.
- Use `testimonial` for a standalone client quote block.
- Use `text-block` for any other labelled section with paragraph text.

### B) If the slug maps to `internationalBenefitsServices.ts`

Same process as A but target:
`/Users/fatmir/Desktop/engageHealth/engage/artifacts/engage-health/src/data/internationalBenefitsServices.ts`

### C) If the slug matches a standalone page file (e.g. `GroupHealthInsurance.tsx`, `EmployeeBenefits.tsx`)

Read the existing page file. Replace only the hardcoded text strings (headings, paragraphs, list items, stats, FAQ content, testimonials) with the exact content from the source page. Do not restructure the component — only swap the text.

### D) If no matching page or entry exists

Inform the user: "No matching page found for slug `<slug>`. Please confirm whether to create a new entry or a new page file."

---

## Step 4 — Apply the update

- If updating `employeeBenefitsServices.ts` or `internationalBenefitsServices.ts`: use Edit to replace the full matching entry object.
- If a hero image was downloaded, add the import at the top of the data file:
  ```ts
  import heroSlugName from '@assets/<filename>';
  ```
  and reference it in the entry as `heroImage: heroSlugName`.
- If updating a `.tsx` page file: use Edit to replace each hardcoded text string.

---

## Step 5 — Verify

After saving, confirm:
1. The file saves without TypeScript errors (check the running dev server output if available).
2. All content is verbatim from the source — no invented wording.
3. The hero image (if any) exists at `attached_assets/<filename>`.

Report back with:
- Which file was updated
- The slug/entry updated
- Whether a hero image was downloaded (and its path)
- A brief list of sections populated
