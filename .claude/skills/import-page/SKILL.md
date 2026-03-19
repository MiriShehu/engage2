---
name: import-page
description: Import content from an engagehealthgroup.co.uk URL and update the corresponding page in this project with the exact source content (no AI-generated wording).
argument-hint: <https://www.engagehealthgroup.co.uk/page-slug/>
---

You are importing content from an engagehealthgroup.co.uk page into this project. Your job is to extract the **exact wording** from the live page source — do not rephrase, summarise, or generate new text. Every heading, paragraph, list item, FAQ question/answer, stat, and testimonial must come verbatim from the source.

## URL to import

$ARGUMENTS

---

## Step 1 — Fetch the page via curl + Node

The site uses Elementor, which server-renders content inside `elementor-widget-wrap elementor-element-populated` divs. **Do NOT use WebFetch** — it cannot reliably extract Elementor content. Instead use Bash with curl piped to Node to strip HTML and return all visible text verbatim:

```bash
curl -s "$ARGUMENTS" | node -e "
const chunks = [];
process.stdin.on('data', d => chunks.push(d));
process.stdin.on('end', () => {
  const html = chunks.join('');
  const noScript = html.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<style[\s\S]*?<\/style>/gi,'');
  const text = noScript
    .replace(/<[^>]+>/g,' ')
    .replace(/&nbsp;/g,' ')
    .replace(/&amp;/g,'&')
    .replace(/&lt;/g,'<')
    .replace(/&gt;/g,'>')
    .replace(/&#\d+;/g,'')
    .replace(/&[a-z]+;/g,'')
    .replace(/[ \t]+/g,' ')
    .replace(/\n{3,}/g,'\n\n');
  const lines = text.split('\n').map(l=>l.trim()).filter(l=>l.length>20);
  console.log(lines.join('\n'));
});
"
```

From the output, extract the following **verbatim**:

- **H1** — the main page heading
- **Tagline / badge text** — small label above the H1 (pill/badge element)
- **Subtitle / strapline** — paragraph immediately below the H1
- **Hero background image URL** — search the raw HTML for `background-image: url(...)` in the hero/banner area first, then fall back to all `<img>` src tags. Run both passes:
  ```bash
  curl -s "$ARGUMENTS" | node -e "
  const c=[];process.stdin.on('data',d=>c.push(d));process.stdin.on('end',()=>{
    const h=c.join('');
    // 1. background-image: url(...) — most likely to be the hero
    const bgImgs=[...h.matchAll(/background-image\s*:\s*url\(['\"]?(https?:\/\/[^'\"\)]+|\/wp-content\/uploads\/[^'\"\)]+)['\"]?\)/gi)].map(m=>m[1]);
    // 2. all wp-content/uploads images
    const allImgs=[...h.matchAll(/uploads\/[^\"'\s)]+\.(jpg|jpeg|png|webp)/gi)].map(m=>m[0]);
    const combined=[...new Set([...bgImgs,...allImgs.map(i=>'https://www.engagehealthgroup.co.uk/wp-content/'+i)])];
    console.log(combined.join('\n'));
  });"
  ```
  The first URL in the output that looks like a page-specific hero image (not a logo, badge, or media logo) is the one to download.
- **Stats strip** — numbered/highlighted figures and their labels
- **All body sections in order**, capturing:
  - Section label pills (small uppercase text like "OUR SERVICE", "THE BASICS", "FAQS")
  - Section headings (H2 / H3)
  - All body paragraphs verbatim
  - All bullet / list items verbatim
  - Employer benefit lists and employee benefit lists (for why-buy sections)
  - FAQ questions and complete answers verbatim
  - Testimonial quotes and attributions
- **Sidebar testimonial** — quote + author (usually a standalone pull-quote block)

---

## Step 2 — Download the hero image

If a hero image URL was found in Step 1:

1. Construct the full URL: `https://www.engagehealthgroup.co.uk/wp-content/uploads/...`
2. Determine a clean filename (e.g. `group-critical-illness-hero.jpg`).
3. Download with:
   ```bash
   curl -L -o "C:/Users/86mir/OneDrive/Desktop/engageHeatlh/attached_assets/<filename>" "<full-image-url>"
   ```
4. Note the import path as `@assets/<filename>`.

If no hero image is found, skip this step.

---

## Step 3 — Identify the target in the project

Determine the page slug from the URL path (e.g. `/international-group-critical-illness-insurance/` → `international-group-critical-illness`).

Then decide which file to update:

### A) If the slug matches an entry in `employeeBenefitsServices.ts`

File: `C:/Users/86mir/OneDrive/Desktop/engageHeatlh/artifacts/engage-health/src/data/employeeBenefitsServices.ts`

Read the file. Find the entry where `slug` matches. Update it with the extracted content following the `ServiceEntry` type defined in `types.ts`:

```ts
{
  slug: '<slug>',
  title: '<exact H1 text>',
  titleAccent: '<the accented/coloured word or phrase in the H1, if any>',
  tagline: '<badge/pill label text>',
  subtitle: '<strapline below the H1>',
  heroImage: <importedVar>,   // only if image downloaded; add import at top of file
  icon: <keep existing icon>,
  colorScheme: 'purple',
  stats: [
    { icon: <relevant LucideIcon>, val: '<exact value>', label: '<exact label>' },
  ],
  sections: [ /* see section rules below */ ],
  sidebarTestimonial: {
    quote: '<exact quote text>',
    author: '<exact attribution>',
  },
}
```

### B) If the slug matches an entry in `internationalBenefitsServices.ts`

Same process as A but target:
`C:/Users/86mir/OneDrive/Desktop/engageHeatlh/artifacts/engage-health/src/data/internationalBenefitsServices.ts`
Use `colorScheme: 'teal'`.

### C) If the slug matches a standalone page file (e.g. `GroupHealthInsurance.tsx`, `EmployeeBenefits.tsx`)

Read the existing page file. Replace only the hardcoded text strings (headings, paragraphs, list items, stats, FAQ content, testimonials) with the exact content from the source. Do not restructure the component.

### D) If no matching page or entry exists

Inform the user: "No matching page found for slug `<slug>`. Please confirm whether to create a new entry or a new page file."

---

## Section construction rules

Use these section types (defined in `types.ts`) to map the page content in the order sections appear:

| Type | When to use |
|------|-------------|
| `service-list` | "How we help / Our service" block with bullet items. Add inline client quote to `testimonial` field if present. |
| `intro` | "What is X?" / "How does X work?" — explanatory paragraphs (2–4 per block). |
| `coverage` | A standalone list of covered items, included features, or factors. Renders as a **2-column card grid** — use whenever the content is purely a list with no surrounding prose. Put optional extras in `addOns`. |
| `why-buy` | A clear employer-benefits / employee-benefits two-column split. |
| `text-block` | Any other labelled section with mixed prose + optional list items. Supports both `paragraphs` (plain text) and `items` (styled checkmark bullets). |
| `testimonial` | A standalone client quote block — verbatim quote + attribution. |
| `faqs` | Any Q&A / FAQ section. Include **every** question and its **complete** answer verbatim. |

### Recognising list-like content — use cards/bullets, not flat paragraphs

When content on the page is list-like, **do not flatten it into `paragraphs`**. Instead:

| Pattern on source page | How to map it |
|------------------------|---------------|
| Short standalone items with no surrounding prose (e.g. "Age of insured", "Destination country") | `coverage` section — renders as 2-col card grid |
| Items with a **"Label: explanation"** format (e.g. "Cost-efficiency: Purchase coverage for…") | `text-block` with `items` array — each item is the full "Label: explanation" string |
| A bulleted or numbered list inside a prose section (e.g. "The following factors affect the premium: …") | Split: intro sentence(s) → `paragraphs`, list items → `items` array in the same `text-block` |
| "Advantages" / "Disadvantages" / "Benefits" section that is purely a list | `coverage` section |
| Mixed content: one or two intro sentences followed by a list | `text-block` with both `paragraphs` (the intro) and `items` (the list) |
| Prose → list → closing prose (e.g. intro sentence, bullet factors, then "contact us" paragraph) | `text-block` with `paragraphs` (intro), `items` (list), and `footerParagraphs` (trailing prose) |

**Never** put a list of short factors or reasons as separate strings in `paragraphs` — that renders as plain prose with no visual distinction.

---

## Step 4 — Apply the update

- Use `Edit` to replace the full matching entry object in the data file.
- If a hero image was downloaded, add the import at the top of the data file:
  ```ts
  import heroVarName from '@assets/<filename>';
  ```
  and set `heroImage: heroVarName` in the entry.
- If updating a `.tsx` page file, use `Edit` to replace each hardcoded text string individually.

---

## Step 5 — Verify & commit

1. Run TypeScript check scoped to the changed file:
   ```bash
   cd C:/Users/86mir/OneDrive/Desktop/engageHeatlh/artifacts/engage-health && npx tsc --noEmit -p tsconfig.json 2>&1 | grep "<filename>"
   ```
2. Confirm no errors in the changed file.
3. Commit:
   ```bash
   git add <changed-file>
   git commit -m "feat: import verbatim content for <slug> page"
   ```

Report back with:
- Which file was updated
- The slug/entry updated
- Whether a hero image was downloaded (and its path)
- A brief list of sections populated
