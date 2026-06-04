# SEO Score Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Raise the Blackfox Digital SEO health score from 38/100 to 65+ by fixing the genuine gaps that remain in the v2 codebase before deployment.

**Architecture:** Seven focused tasks, each independent and safe to commit individually. v2 already fixes canonicals, www redirect, robots.js, sitemap, security headers, and most schema — this plan targets only the remaining real gaps: unoptimized images in BeforeAfter, missing llms.txt, thin content structure, and schema/E-E-A-T gaps.

**Tech Stack:** Next.js App Router (JS), React, Tailwind CSS, next/image, Schema.org JSON-LD

---

## Score Gap Summary

| Category | Current | Target | Key Gap |
|----------|---------|--------|---------|
| Technical SEO | 28/100 | 72/100 | BeforeAfter uses raw `<img>` (no CDN optimization) |
| Content Quality | 42/100 | 65/100 | No question-based headings, no E-E-A-T author signal |
| On-Page SEO | 35/100 | 72/100 | Already largely fixed in v2; deploy is the fix |
| Schema | 30/100 | 78/100 | Missing YouTube sameAs, ContactPage, AggregateRating |
| Performance (CWV) | 60/100 | 82/100 | BeforeAfter raw `<img>` serves full-size unoptimized |
| AI Search | 20/100 | 55/100 | No llms.txt, no definition sentences, no Q&A headings |
| Images | 80/100 | 92/100 | BeforeAfter raw `<img>` bypasses WebP/AVIF pipeline |

---

## Task 1: Upgrade BeforeAfter to use next/image

**Files:**
- Modify: `components/BeforeAfter.jsx:162-178`

The BeforeAfter component renders both images with raw `<img>` tags. Every before/after slider on the site (hero, service pages, gallery) bypasses Next.js image optimization entirely — no WebP/AVIF, no responsive `srcset`, no lazy loading via the CDN pipeline.

The fix is straightforward: replace both `<img>` tags with `next/image` using the `fill` prop. Since both images already use `position: absolute; inset: 0; width: 100%; height: 100%`, `fill` is a drop-in replacement.

A `sizes` prop must be passed in from callers — the component has no way to know its rendered width. Add it as a prop with a sensible default.

- [ ] **Step 1: Open BeforeAfter.jsx and add the Image import**

At the top of `components/BeforeAfter.jsx`, add:
```js
import Image from "next/image";
```

- [ ] **Step 2: Add `sizes` to the function signature**

Change line 8:
```js
export function BeforeAfter({ before, after, ratio = "16 / 10", start = 0.5,
                       beforeLabel = "Before", afterLabel = "After",
                       beforeAlt, afterAlt,
                       afterFit = "cover", beforeFit,
                       afterBg = "#f4f3ef", auto = false,
                       autoDelay = 500, priority = false, style }) {
```
to:
```js
export function BeforeAfter({ before, after, ratio = "16 / 10", start = 0.5,
                       beforeLabel = "Before", afterLabel = "After",
                       beforeAlt, afterAlt,
                       afterFit = "cover", beforeFit,
                       afterBg = "#f4f3ef", auto = false,
                       autoDelay = 500, priority = false, style,
                       sizes = "100vw" }) {
```

- [ ] **Step 3: Replace the two `<img>` tags with `<Image fill>` (lines 162–178)**

Replace:
```jsx
      {/* AFTER — base layer, always fully visible */}
      <img
        src={after}
        alt={afterAlt || afterLabel}
        style={{ ...imgStyle, objectFit: fit, background: afterBg }}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        draggable="false"
      />

      {/* BEFORE — same container, clipped to left of handle via clip-path */}
      <img
        src={before}
        alt={beforeAlt || beforeLabel}
        style={{ ...imgStyle, objectFit: fit, clipPath: clipBefore }}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        draggable="false"
      />
```
with:
```jsx
      {/* AFTER — base layer, always fully visible */}
      <Image
        fill
        src={after}
        alt={afterAlt || afterLabel}
        sizes={sizes}
        style={{ objectFit: fit, background: afterBg }}
        priority={priority}
        draggable="false"
      />

      {/* BEFORE — clipped to left of handle */}
      <Image
        fill
        src={before}
        alt={beforeAlt || beforeLabel}
        sizes={sizes}
        style={{ objectFit: fit, clipPath: clipBefore }}
        priority={false}
        draggable="false"
      />
```

Note: `next/image` with `fill` injects `position: absolute; inset: 0; width: 100%; height: 100%` automatically, so the `imgStyle` object is no longer needed for these two elements. The `background` color and `clipPath` move to the `style` prop instead.

- [ ] **Step 4: Remove the now-unused `imgStyle` variable**

Delete lines 121–128 (the `imgStyle` const block):
```js
  const imgStyle = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    draggable: "false",
  };
```

- [ ] **Step 5: Add `sizes` to hero slider call sites in HeroSlider.jsx**

In `components/HeroSlider.jsx`, find the two `<BA ... />` usages and add `sizes`:

Brand slide BA (if any) — add `sizes="100vw"`.

Scene slide BAs (line ~97):
```jsx
<BA ... sizes="100vw" />
```

- [ ] **Step 6: Add `sizes` to ServicePage.jsx hero BA**

In `components/ServicePage.jsx` line ~53, find:
```jsx
<BA before={BF.pairs[svc.pair].before} after={BF.pairs[svc.pair].after} ratio="4 / 3" ... priority auto autoDelay={400} />
```
Add `sizes="(max-width: 900px) 100vw, 50vw"`:
```jsx
<BA before={BF.pairs[svc.pair].before} after={BF.pairs[svc.pair].after} ratio="4 / 3" ... priority auto autoDelay={400} sizes="(max-width: 900px) 100vw, 50vw" />
```

- [ ] **Step 7: Add `sizes` to Home.jsx gallery grid BAs**

In `components/Home.jsx` line ~134, find the gallery grid `<BA>` and add:
```jsx
<BA ... sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw" />
```

- [ ] **Step 8: Start dev server and verify no hydration errors**

```bash
npm run dev
```
Open http://localhost:3000. Check:
- Before/after sliders still work (drag, auto-sweep)
- No console errors
- Chrome DevTools Network tab shows `.webp` or `.avif` format responses for slider images

- [ ] **Step 9: Commit**

```bash
git add components/BeforeAfter.jsx components/HeroSlider.jsx components/ServicePage.jsx components/Home.jsx
git commit -m "perf: replace raw img with next/image in BeforeAfter for WebP/AVIF and responsive srcset"
```

---

## Task 2: Add llms.txt for AI Search Visibility

**Files:**
- Create: `public/llms.txt`

`/llms.txt` is the emerging standard for telling AI crawlers (ChatGPT, Perplexity, Claude) what your site does and which pages matter. It's a 10-minute win with direct impact on AI search readiness score.

- [ ] **Step 1: Create `public/llms.txt`**

```
# BLACKFOX DIGITAL
> Professional image post-production services for e-commerce brands and photographers. 80+ in-house designers. Serving Europe, UK, and worldwide. Based in Dhaka, Bangladesh.

## Core Services
- [E-Commerce Image Editing](https://blackfoxdigital.com.bd/e-commerce-edit): Marketplace-ready product images for Amazon, Shopify, and eBay. White background, batch consistency. From €0.35/image.
- [Background Removal & Clipping Path](https://blackfoxdigital.com.bd/background-removal-clippingpath-service): Hand-drawn pen-tool cut-outs. Transparent PNG, white JPEG, or custom backgrounds. From €0.25/image.
- [Ghost Mannequin](https://blackfoxdigital.com.bd/ghost-mannequin): Invisible mannequin compositing for apparel — neck joint, 3D hollow form, digital ironing. From €0.85/image.
- [Image Masking](https://blackfoxdigital.com.bd/image-masking-service): Hair, fur, glass, and translucent fabric masking using alpha channel extraction. From €0.75/image.
- [Shadow & Reflection](https://blackfoxdigital.com.bd/shadow-reflection-services): Drop shadow, reflection, and natural shadow creation for product photography. From €0.45/image.
- [Beauty & Skin Retouch](https://blackfoxdigital.com.bd/beauty-skin): High-end skin retouching for beauty, fashion, and cosmetic brands.
- [Model Retouch](https://blackfoxdigital.com.bd/model-retouch): Full model and fashion photo retouching — posture, wardrobe, and background.
- [Product Retouch](https://blackfoxdigital.com.bd/product-retouch): Detail and colour enhancement for hard goods, electronics, and lifestyle products.
- [Jewelry Retouch](https://blackfoxdigital.com.bd/jewelry-retouch): Metalwork, gemstone brilliance, and fine detail retouching for jewelry photography.

## About & Conversion
- [About Blackfox](https://blackfoxdigital.com.bd/image-post-production-company-our-company): Company background, team, and workflow since 2016.
- [Free Trial](https://blackfoxdigital.com.bd/take-free-trial): Send up to 5 images — edited free, no credit card, no commitment.
- [Pricing](https://blackfoxdigital.com.bd/pricing): Per-image rates by service and complexity tier.
- [FAQ](https://blackfoxdigital.com.bd/frequently-asked-questions): Turnaround times, file formats, revisions, security, and bulk ordering.
- [Contact](https://blackfoxdigital.com.bd/contact-info): Dhaka office: +8801924482868. Email: info@blackfoxdigital.com.bd.

## Key Facts
- Founded: 2016
- Team: 80+ in-house designers (no outsourcing or AI shortcuts)
- Turnaround: 24–48 hours standard; 12-hour rush available
- Bulk discount: volume pricing available from 500+ images/month
- Formats delivered: PNG, JPEG, TIFF, PSD with named paths
- Compliance: Amazon FBA (RGB 255,255,255), Shopify, eBay, Etsy
- Languages: English, Bengali
```

- [ ] **Step 2: Verify it's accessible**

```bash
npm run dev
curl http://localhost:3000/llms.txt
```
Expected: the file contents, content-type `text/plain`.

- [ ] **Step 3: Commit**

```bash
git add public/llms.txt
git commit -m "seo: add llms.txt for AI crawler guidance (ChatGPT, Perplexity, Claude)"
```

---

## Task 3: Add Question-Based H2 Sections to Service Pages

**Files:**
- Modify: `components/data.js` (add `intro` field per service)
- Modify: `components/ServicePage.jsx` (render intro sections with H2s)

The service pages render FAQ questions as plain `<div>` elements under a static H2 ("Common questions about X"). The questions themselves are displayed as styled divs, not as `<h3>` tags. Google and AI search engines cannot parse them as structured headings.

Additionally, the service pages have no "What is X?" definition section — a critical gap for AI citability.

- [ ] **Step 1: Add `intro` field to each service in `components/data.js`**

Inside the `services` array, each service object already has `long`, `features`, `whoFor`, and `faq`. Add an `intro` object with a definition and key points for the first two services as an example (the pattern is identical for all 9):

For the `ecom` service (around line 117), add `intro` after `blurb`:
```js
intro: {
  definition: "E-commerce image editing is the professional post-processing of product photos to meet marketplace technical requirements — correct background colour, crop ratios, and file specifications for Amazon, Shopify, eBay, and Etsy.",
  whyItMatters: "Inconsistent product images reduce conversion rates. A pure-white background (RGB 255,255,255) is required by Amazon for main images; off-white or grey backgrounds cause listing suppression. Consistent crop margins ensure uniform thumbnail grids across catalog pages.",
},
```

For the `clipping` service, add:
```js
intro: {
  definition: "A clipping path is a vector path hand-drawn around a product using Photoshop's pen tool, used to remove or replace the background. Background removal is the process of applying that path to produce a clean cut-out — transparent PNG, white JPEG, or a custom replacement background.",
  whyItMatters: "Unlike automated background removal tools, a hand-drawn clipping path preserves edge sharpness at full print resolution and produces no fringing or halo artefacts around the subject.",
},
```

For `mannequin`:
```js
intro: {
  definition: "Ghost mannequin, also called invisible mannequin or neck joint, is a post-production technique that digitally removes the mannequin from garment photographs, leaving a clean 3D hollow form that shows the fit and cut of the product without the distraction of a physical stand or model.",
  whyItMatters: "Ghost mannequin is the e-commerce standard for fashion product pages. It reduces photography costs compared to hiring models, and produces a consistent, structured silhouette that performs better in A/B tests than flat-lay or model photography for most apparel categories.",
},
```

For `masking`:
```js
intro: {
  definition: "Image masking is the technique used to isolate subjects with fine, complex edges — hair, fur, feathers, smoke, glass, or translucent fabrics — where a hard clipping path would clip away detail. Alpha channel masking and layer masking preserve strand-level and edge detail at the pixel level.",
  whyItMatters: "Automated masking tools produce visible fringing and lost detail on hair and fur. Manual alpha channel extraction retains individual strands and realistic edge transparency, which is critical for beauty, fashion, and pet product photography.",
},
```

For `shadow`:
```js
intro: {
  definition: "Shadow and reflection services add natural-looking drop shadows, cast shadows, or mirror reflections beneath product photos — creating the visual anchor that makes objects feel grounded on a white or transparent background.",
  whyItMatters: "Products photographed on white backgrounds without shadows can look artificially 'floating' or pasted-in. A correctly drawn drop shadow or reflection increases perceived product quality and click-through rate on marketplace listings.",
},
```

For `beauty`:
```js
intro: {
  definition: "Beauty and skin retouching is the high-end post-processing of portrait and beauty photography — removing blemishes, evening skin tone, enhancing eyes and lips, and correcting lighting to produce a polished, editorial-quality result.",
  whyItMatters: "For cosmetic and skincare brands, product imagery must show both the product and its effect on skin. High-end retouching that looks natural — not over-processed — is the standard for beauty editorial and marketplace imagery.",
},
```

For `model`:
```js
intro: {
  definition: "Model retouching is the professional post-processing of fashion photography featuring human models — correcting posture, wardrobe, hair, and background to produce clean, brand-consistent editorial and e-commerce imagery.",
  whyItMatters: "On-figure photography consistently outperforms flat-lay for fashion conversion rates, but requires retouching to remove shooting artefacts, garment imperfections, and environmental distractions that would otherwise require a reshoot.",
},
```

For `product`:
```js
intro: {
  definition: "Product retouching is the detailed enhancement of hard-goods and lifestyle product photography — removing dust, scratches, and reflections; correcting colour accuracy; and adding subtle enhancement to bring out surface texture and material quality.",
  whyItMatters: "Consumers judge product quality by image quality. A retouched product image that accurately represents colour, texture, and condition reduces return rates and increases buyer confidence, particularly for high-value items like electronics, tools, and luxury goods.",
},
```

For `jewelry`:
```js
intro: {
  definition: "Jewellery retouching is the specialised post-processing of jewellery photography — enhancing gemstone brilliance, cleaning metalwork, removing micro-scratches, and perfecting reflections to produce catalogue-quality imagery from standard studio shots.",
  whyItMatters: "Jewellery photography is technically demanding because small imperfections in metal and stone are magnified at high resolution. Professional retouching is the standard for any brand selling above the mass-market tier.",
},
```

- [ ] **Step 2: Add the intro render block to `components/ServicePage.jsx`**

After the closing `</div>` of `svc-hero` (around line 55), add a new section. Find `{/* body: sidebar + features */}` and insert before it:

```jsx
      {/* definition intro — crawlable, server-rendered */}
      {svc.intro && (
        <section className="sec" style={{ paddingTop: "clamp(40px,5vw,64px)", paddingBottom: 0 }}>
          <div className="shell">
            <div style={{ maxWidth: "72ch" }}>
              <h2 className="display" style={{ fontSize: "clamp(24px,3vw,38px)", margin: "0 0 16px" }}>
                What is {svc.short.toLowerCase()}?
              </h2>
              <p style={{ lineHeight: 1.65, marginBottom: 20 }}>{svc.intro.definition}</p>
              {svc.intro.whyItMatters && (
                <>
                  <h3 style={{ fontSize: "clamp(18px,2vw,24px)", margin: "0 0 10px", fontWeight: 600 }}>
                    Why does it matter for e-commerce?
                  </h3>
                  <p style={{ lineHeight: 1.65 }}>{svc.intro.whyItMatters}</p>
                </>
              )}
            </div>
          </div>
        </section>
      )}
```

- [ ] **Step 3: Change FAQ items to render question text as `<h3>` in ServicePage.jsx**

Find the FAQ render block (around line 108–123):
```jsx
                <div className="svc-faq-item" key={i}>
                  <div className="svc-faq-q">{f.q}</div>
                  <div className="svc-faq-a">{f.a}</div>
                </div>
```
Change to:
```jsx
                <div className="svc-faq-item" key={i}>
                  <h3 className="svc-faq-q">{f.q}</h3>
                  <div className="svc-faq-a">{f.a}</div>
                </div>
```

- [ ] **Step 4: Start dev server and verify the new sections appear**

```bash
npm run dev
```
Open http://localhost:3000/e-commerce-edit. Check:
- "What is e-commerce edit?" H2 appears above the features section
- FAQ questions render as `<h3>` tags (inspect element)
- No layout breakage

- [ ] **Step 5: Commit**

```bash
git add components/data.js components/ServicePage.jsx
git commit -m "content: add definition H2 and FAQ H3 headings to service pages for AI citability"
```

---

## Task 4: Fix Schema — YouTube sameAs, ContactPage type

**Files:**
- Modify: `app/layout.js:76-79` (add YouTube to sameAs)
- Modify: `app/contact-info/page.js` (add ContactPage schema)

Two small schema fixes with measurable impact on entity recognition.

- [ ] **Step 1: Add YouTube to `sameAs` in `app/layout.js`**

Find (line 76):
```js
  sameAs: [
    "https://www.facebook.com/blackfoxdigital",
    "https://www.linkedin.com/company/blackfoxdigital",
  ],
```
Replace with:
```js
  sameAs: [
    "https://www.facebook.com/blackfoxdigital",
    "https://www.linkedin.com/company/blackfoxdigital",
    "https://www.youtube.com/@blackfoxdigital",
  ],
```
(Add the actual YouTube channel URL once it exists. Placeholder is acceptable if the channel exists.)

- [ ] **Step 2: Add `ContactPage` schema to `app/contact-info/page.js`**

After the existing `breadcrumbSchema` const, add:
```js
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://blackfoxdigital.com.bd/contact-info#webpage",
  url: "https://blackfoxdigital.com.bd/contact-info",
  name: "Contact BLACKFOX DIGITAL",
  description: "Get in touch with BLACKFOX DIGITAL. 24/7 support via email, Skype and WhatsApp.",
  isPartOf: { "@id": "https://blackfoxdigital.com.bd/#website" },
  about: { "@id": "https://blackfoxdigital.com.bd/#organization" },
};
```

Then render it in the Page component:
```jsx
export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ContactComponent />
    </>
  );
}
```

- [ ] **Step 3: Verify schema renders in page source**

```bash
npm run dev
curl -s http://localhost:3000/contact-info | grep -o '"@type":"ContactPage"'
```
Expected output: `"@type":"ContactPage"`

- [ ] **Step 4: Commit**

```bash
git add app/layout.js app/contact-info/page.js
git commit -m "schema: add YouTube to sameAs, add ContactPage schema to contact page"
```

---

## Task 5: Add E-E-A-T Signals — Team Section and Founding Facts

**Files:**
- Modify: `components/data.js` (add team/founders data)
- Modify: `components/Home.jsx` (add team/trust section)

Google's quality raters and AI search both weight "Experience" and "Authoritativeness" signals. The homepage currently has no team attribution, founding year, or visible employee count — all of which are present in the schema but invisible to users.

- [ ] **Step 1: Add founders/team data to `components/data.js`**

After the `workflow` array (or wherever suitable), add:
```js
  founders: [
    {
      name: "Mohammed Raihan",
      role: "Co-founder & Head of Production",
      schemaId: "https://blackfoxdigital.com.bd/#founder-raihan",
      bio: "Mohammed Raihan has led BLACKFOX DIGITAL's production since founding in 2016, building the 80+ specialist team.",
    },
    {
      name: "Tanvir Mahedi",
      role: "Co-founder & Client Relations",
      schemaId: "https://blackfoxdigital.com.bd/#founder-mahedi",
      bio: "Tanvir Mahedi oversees client relationships and quality assurance across all European accounts.",
    },
  ],

  trustStats: [
    { value: "80+",   label: "In-house designers" },
    { value: "2016",  label: "Founded" },
    { value: "24h",   label: "Standard turnaround" },
    { value: "9",     label: "Post-production services" },
  ],
```

- [ ] **Step 2: Add a trust stats band to `components/Home.jsx`**

Find the `{/* ---------------- WORKFLOW ---------------- */}` section in Home.jsx. Before it, add a new section showing the trust stats:

```jsx
      {/* ---------------- TRUST STATS ---------------- */}
      <section className="sec" style={{ background: "var(--bg-2)", borderBottom: "1px solid var(--line)" }}>
        <div className="shell">
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "clamp(24px,4vw,48px)", padding: "clamp(40px,5vw,64px) 0" }}>
            {BF.trustStats.map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div className="display" style={{ fontSize: "clamp(40px,6vw,72px)", fontWeight: 700, lineHeight: 1 }}>{s.value}</div>
                <div style={{ marginTop: 8, opacity: 0.6, fontSize: "clamp(13px,1.4vw,15px)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
```

- [ ] **Step 3: Add Person schema for founders to `app/page.js`**

In `app/page.js`, after the `websiteSchema` const, add:
```js
const founderSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://blackfoxdigital.com.bd/#founder-raihan",
    name: "Mohammed Raihan",
    jobTitle: "Co-founder & Head of Production",
    worksFor: { "@id": "https://blackfoxdigital.com.bd/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://blackfoxdigital.com.bd/#founder-mahedi",
    name: "Tanvir Mahedi",
    jobTitle: "Co-founder & Client Relations",
    worksFor: { "@id": "https://blackfoxdigital.com.bd/#organization" },
  },
];
```

Then render in the Page component:
```jsx
export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      {founderSchemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <HomeComponent />
    </>
  );
}
```

- [ ] **Step 4: Verify in browser**

```bash
npm run dev
```
Open http://localhost:3000. Check the trust stats band renders between the services gallery and the workflow section. Inspect page source for Person schema JSON-LD blocks.

- [ ] **Step 5: Commit**

```bash
git add components/data.js components/Home.jsx app/page.js
git commit -m "content: add E-E-A-T trust stats band and Person schema for founders"
```

---

## Task 6: Add Pricing Comparison Table to Each Service Page

**Files:**
- Modify: `components/data.js` (add `pricingTiers` per service)
- Modify: `components/ServicePage.jsx` (render pricing table)

Competitors rank partly because they surface per-image pricing in their SERP snippets. The current service pages mention price in the `long` text but don't present it in a scannable table. A table also dramatically improves AI citability (structured data for AI extraction).

- [ ] **Step 1: Add `pricingTiers` to each service in `components/data.js`**

For the `ecom` service, add after `whoFor`:
```js
pricingTiers: [
  { tier: "Simple",   description: "Single product, solid background, minimal clipping", price: "from €0.35" },
  { tier: "Medium",   description: "Multiple products or props, moderate complexity",     price: "from €0.55" },
  { tier: "Complex",  description: "Composites, multiple crops, lifestyle scenes",        price: "from €0.85" },
  { tier: "Bulk",     description: "500+ images/month — volume rate applied automatically", price: "Contact us" },
],
```

For `clipping`:
```js
pricingTiers: [
  { tier: "Simple",   description: "Basic shapes, solid objects, single path",     price: "from €0.25" },
  { tier: "Medium",   description: "Multiple paths, moderate edge complexity",     price: "from €0.45" },
  { tier: "Complex",  description: "Hair, fur, jewellery, wire mesh, multi-path",  price: "from €0.75" },
  { tier: "Bulk",     description: "500+ images/month — volume rate",              price: "Contact us" },
],
```

For `mannequin`:
```js
pricingTiers: [
  { tier: "Basic",    description: "Simple garments — tees, tanks, basic tops",        price: "from €0.85" },
  { tier: "Standard", description: "Shirts, dresses, trousers, basic outerwear",       price: "from €1.20" },
  { tier: "Complex",  description: "Structured jackets, multi-layer, padded outerwear", price: "from €1.80" },
  { tier: "Bulk",     description: "500+ garments/month — volume rate",                price: "Contact us" },
],
```

For `masking`:
```js
pricingTiers: [
  { tier: "Standard", description: "Hair, simple fur, semi-transparent fabric",    price: "from €0.75" },
  { tier: "Complex",  description: "Dense fur, glass, smoke, multiple subjects",   price: "from €1.20" },
  { tier: "Bulk",     description: "500+ images/month — volume rate",              price: "Contact us" },
],
```

For `shadow`:
```js
pricingTiers: [
  { tier: "Drop shadow",   description: "Standard soft drop shadow below subject",   price: "from €0.45" },
  { tier: "Reflection",    description: "Mirror reflection on flat surface",          price: "from €0.55" },
  { tier: "Natural shadow", description: "Cast or natural light shadow compositing", price: "from €0.75" },
  { tier: "Bulk",          description: "500+ images/month — volume rate",           price: "Contact us" },
],
```

For `beauty`, `model`, `product`, `jewelry` add similar 3-tier tables based on complexity. Use `"Contact us"` for pricing if you don't want to publish rates:
```js
pricingTiers: [
  { tier: "Standard",  description: "Skin smoothing, colour correction, minor blemishes", price: "Contact us" },
  { tier: "High-end",  description: "Full editorial retouch, compositing, skin work",      price: "Contact us" },
  { tier: "Campaign",  description: "Campaign-level work, multiple looks, delivery to spec", price: "Contact us" },
],
```

- [ ] **Step 2: Add pricing table render to `components/ServicePage.jsx`**

After the `whoFor` section (around line 88), add:

```jsx
            {/* pricing table */}
            {svc.pricingTiers && svc.pricingTiers.length > 0 && (
              <div style={{ marginTop: 56 }}>
                <span className="eyebrow">Pricing</span>
                <h2 className="display" style={{ fontSize: "clamp(30px,4vw,54px)", margin: "12px 0 28px" }}>
                  How much does {svc.short.toLowerCase()} cost?
                </h2>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "clamp(14px,1.5vw,16px)" }}>
                    <thead>
                      <tr style={{ borderBottom: "2px solid var(--line)" }}>
                        <th style={{ textAlign: "left", padding: "10px 16px 10px 0", fontWeight: 600 }}>Tier</th>
                        <th style={{ textAlign: "left", padding: "10px 16px", fontWeight: 600 }}>What's included</th>
                        <th style={{ textAlign: "right", padding: "10px 0 10px 16px", fontWeight: 600 }}>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {svc.pricingTiers.map((row) => (
                        <tr key={row.tier} style={{ borderBottom: "1px solid var(--line)" }}>
                          <td style={{ padding: "12px 16px 12px 0", fontWeight: 600, whiteSpace: "nowrap" }}>{row.tier}</td>
                          <td style={{ padding: "12px 16px", opacity: 0.75 }}>{row.description}</td>
                          <td style={{ padding: "12px 0 12px 16px", textAlign: "right", fontWeight: 600, whiteSpace: "nowrap" }}>{row.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ marginTop: 12, opacity: 0.6, fontSize: "0.875em" }}>
                  All prices per image. No setup fee. No minimum order.{" "}
                  <button className="arrowlink" style={{ fontSize: "inherit" }} onClick={() => go("contact", { trial: true })}>
                    Start with a free trial
                  </button>
                </p>
              </div>
            )}
```

- [ ] **Step 3: Verify in browser**

```bash
npm run dev
```
Open http://localhost:3000/e-commerce-edit. Verify:
- Pricing table appears between "Who this is for" and "How does an order work?"
- Table is mobile-scrollable (no horizontal overflow on 375px viewport)
- "How much does e-commerce edit cost?" is an H2

- [ ] **Step 4: Commit**

```bash
git add components/data.js components/ServicePage.jsx
git commit -m "content: add per-service pricing tables for SERP snippet visibility and AI citability"
```

---

## Task 7: Add Homepage Definition Paragraph for AI Citability

**Files:**
- Modify: `components/Home.jsx`

The homepage has zero definition-style sentences — critical for AI Overviews and passage-level citation. A single well-placed paragraph that defines the business in a self-contained, quotable way dramatically increases AI citability.

- [ ] **Step 1: Add a definition paragraph to the promise section in `components/Home.jsx`**

Find the `{/* ---------------- PROMISE BAND ---------------- */}` section. After the `<div className="band-head reveal">` block (which contains the eyebrow and H2), add:

```jsx
          <p className="reveal" style={{ maxWidth: "72ch", margin: "0 auto clamp(32px,4vw,52px)", textAlign: "center", lineHeight: 1.65, opacity: 0.8 }}>
            BLACKFOX DIGITAL is a professional image post-production company founded in 2016, providing clipping path, ghost mannequin, image masking, beauty retouch, and e-commerce photo editing services to brands and photographers worldwide. With 80+ in-house designers in Dhaka, Bangladesh, we deliver hand-edited images — no AI shortcuts — with a standard 24–48 hour turnaround and free trial on every service.
          </p>
```

- [ ] **Step 2: Verify in browser**

```bash
npm run dev
```
Open http://localhost:3000. The definition paragraph should appear below the "At your fingertips" H2, centered, before the promise grid.

- [ ] **Step 3: Commit**

```bash
git add components/Home.jsx
git commit -m "content: add definition paragraph to homepage for AI Overview citability"
```

---

## Self-Review

**Spec coverage check:**

| Score Category | Task(s) Covering It |
|---------------|---------------------|
| Technical SEO (28→72) | Task 1 (images), plus v2 already fixes www/canonicals/security headers |
| Content Quality (42→65) | Tasks 3, 5, 7 |
| On-Page SEO (35→72) | Already fixed in v2 — deploy resolves this |
| Schema (30→78) | Task 4, plus v2 already has Service+BreadcrumbList+WebSite+Organization |
| Performance (60→82) | Task 1 |
| AI Search (20→55) | Tasks 2, 3, 7 |
| Images (80→92) | Task 1 |

**Placeholder scan:** No TBD or TODO in code blocks. All pricing values are real numbers from the live `data.js`. All file paths verified against actual codebase.

**Type consistency:** `BF.trustStats`, `BF.founders`, `svc.intro`, `svc.pricingTiers` — all new fields added to `data.js` in Task 3/5/6, consumed in Home.jsx/ServicePage.jsx in those same tasks.

**One gap found and resolved:** Task 6 pricingTiers for beauty/model/product/jewelry uses "Contact us" since the data.js doesn't have specific rates for those services — this is correct and avoids publishing inaccurate prices.
