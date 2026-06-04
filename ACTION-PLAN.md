# SEO Action Plan — Blackfox Digital
**Generated:** 2026-06-04  
**Overall SEO Health Score:** 38/100  
**Target Score (90 days):** 65/100  
**Domain:** https://blackfoxdigital.com.bd

---

## Priority Definitions
- **Critical** — Blocks indexing or causes duplicate content penalties. Fix immediately.
- **High** — Significantly impacts rankings and SERP visibility. Fix within 1 week.
- **Medium** — Meaningful optimization opportunity. Fix within 1 month.
- **Low** — Nice to have. Backlog.

---

## CRITICAL — Fix Immediately (estimated impact: +12–18 points)

### C1. Add Canonical Tags to All Pages
**File:** [app/layout.js](app/layout.js)  
**Issue:** 0/21 pages have canonical tags. Google sees www and non-www as separate duplicate sites.  
**Fix:** Add `<link rel="canonical">` in the root layout using Next.js `metadata` API.

In `app/layout.js`, ensure every page exports metadata with `alternates.canonical`. The simplest approach is a base canonical in the root layout and override per-page:

```js
// app/layout.js
export const metadata = {
  metadataBase: new URL('https://blackfoxdigital.com.bd'),
  alternates: {
    canonical: '/',
  },
}
```

For each service page (e.g., `app/e-commerce-edit/page.js`):
```js
export const metadata = {
  alternates: {
    canonical: '/e-commerce-edit',
  },
}
```

---

### C2. Fix www → non-www Redirect
**Where:** Cloudflare Dashboard → Rules → Redirect Rules  
**Issue:** `www.blackfoxdigital.com.bd` returns 200 with full content — creates duplicate site.  
**Fix:** Add a Cloudflare redirect rule:
- Match: `Hostname equals www.blackfoxdigital.com.bd`
- Action: Static redirect to `https://blackfoxdigital.com.bd${URI Path}` (301)

---

### C3. Fix Sitemap — Add All 14 Missing Pages
**File:** [app/sitemap.js](app/sitemap.js)  
**Issue:** Sitemap covers only 5/19 pages (26%). All 10 service pages are missing.  
**Fix:** Rewrite `app/sitemap.js`:

```js
export default function sitemap() {
  const base = 'https://blackfoxdigital.com.bd'
  const pages = [
    { url: base, priority: 1.0 },
    { url: `${base}/image-post-production-service` },
    { url: `${base}/e-commerce-edit` },
    { url: `${base}/background-removal-clippingpath-service` },
    { url: `${base}/ghost-mannequin` },
    { url: `${base}/image-masking-service` },
    { url: `${base}/shadow-reflection-services` },
    { url: `${base}/beauty-skin` },
    { url: `${base}/model-retouch` },
    { url: `${base}/product-retouch` },
    { url: `${base}/jewelry-retouch` },
    { url: `${base}/image-post-production-company-our-company` },
    { url: `${base}/gallery` },
    { url: `${base}/contact-info` },
    { url: `${base}/take-free-trial` },
    { url: `${base}/frequently-asked-questions` },
    { url: `${base}/privacy-policy` },
    { url: `${base}/terms-and-conditions` },
    { url: `${base}/cookies-policy-of-blackfox-limited` },
  ]
  return pages.map(p => ({
    url: p.url,
    lastModified: new Date(),
    // Do NOT include priority or changefreq — ignored by Google
  }))
}
```

Also remove trailing slashes from all sitemap entries (they 308-redirect).

---

### C4. Remove FAQPage Schema from FAQ Page
**File:** [app/frequently-asked-questions/page.js](app/frequently-asked-questions/page.js)  
**Issue:** FAQPage rich results restricted to gov/healthcare since Aug 2023. The schema wastes render budget and may confuse Google.  
**Fix:** Remove the FAQPage JSON-LD block. Replace with clean heading structure (H1 "Frequently Asked Questions", H2 per question).

---

### C5. Fix robots.txt — Consolidate Duplicate User-agent Blocks
**File:** [app/robots.js](app/robots.js) (or public/robots.txt)  
**Issue:** robots.txt has 5+ separate `User-Agent: *` blocks — invalid format.  
**Fix:**

```js
// app/robots.js
export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
    ],
    sitemap: 'https://blackfoxdigital.com.bd/sitemap.xml',
  }
}
```

---

## HIGH — Fix Within 1 Week (estimated impact: +8–12 points)

### H1. Fix Homepage H1
**File:** [app/page.js](app/page.js)  
**Issue:** Homepage H1 is just the word `"retouch"` — one of the weakest possible H1s.  
**Fix:** Change to: `"Professional Image Editing & Post-Production Services"` or `"Expert Photo Retouching & Editing Services for E-Commerce"`.

---

### H2. Fix 8 Generic Meta Descriptions
**Issue:** 8 pages all use `"Image Post Processing Agency"` as meta description.  
**Affected pages and recommended descriptions:**

| Page | Recommended Meta Description |
|------|------------------------------|
| /image-post-production-service | "Full-service image post-production: clipping, masking, retouching, shadows, and ecommerce editing. Fast turnaround, bulk pricing available." |
| /gallery | "Browse our portfolio of before/after image editing work — clipping paths, ghost mannequin, beauty retouch, and more." |
| /contact-info | "Contact Blackfox Digital for image editing services. Dhaka, Bangladesh (+88) 019 24 482 868 \| Australian office (+61) 414 045 232" |
| /take-free-trial | "Try our image editing services for free. Submit your images and receive professionally edited samples with no commitment." |
| /frequently-asked-questions | "Answers to common questions about Blackfox Digital's image editing services — turnaround, file formats, security, and pricing." |
| /privacy-policy | "Blackfox Digital privacy policy — how we collect, use, and protect your personal data and uploaded images." |
| /terms-and-conditions | "Terms and conditions for using Blackfox Digital image editing services. Read our service agreement before placing an order." |
| /cookies-policy-of-blackfox-limited | "Cookie policy for blackfoxdigital.com.bd — what cookies we use and how to manage your preferences." |

---

### H3. Add H1 to 4 Pages Missing It
**Issue:** /contact-info, /frequently-asked-questions, /privacy-policy, /cookies-policy all have no H1.  
**Fix:** Add appropriate H1 to each page's component file.

| Page | Suggested H1 |
|------|-------------|
| /contact-info | "Contact Blackfox Digital" |
| /frequently-asked-questions | "Frequently Asked Questions" |
| /privacy-policy | "Privacy Policy" |
| /cookies-policy-of-blackfox-limited | "Cookies Policy" |

---

### H4. Consolidate & Fix Organization Schema
**Issue:** Two overlapping schemas (bare Organization + full Corporation). Corporation `sameAs` uses HTTP.  
**Fix:** Remove the bare Organization block. Update the Corporation block:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://blackfoxdigital.com.bd/#organization",
  "name": "Blackfox Digital",
  "legalName": "Blackfox Limited",
  "url": "https://blackfoxdigital.com.bd",
  "logo": {
    "@type": "ImageObject",
    "url": "https://blackfoxdigital.com.bd/logo.png"
  },
  "sameAs": [
    "https://www.facebook.com/blackfoxdigital",
    "https://www.linkedin.com/company/blackfoxdigital",
    "https://www.youtube.com/@blackfoxdigital"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Road 08, Adabor",
    "addressLocality": "Dhaka",
    "addressRegion": "BD",
    "postalCode": "1207",
    "addressCountry": "BD"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+8801924482868",
    "contactType": "customer service",
    "email": "info@blackfoxdigital.com.bd",
    "availableLanguage": ["English", "Bengali"]
  }
}
```

---

### H5. Add Service Schema to Each Service Page
**Issue:** No Service schema on any service page — Google cannot machine-read your service catalog.  
**Example for /e-commerce-edit:**

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "E-Commerce Photo Editing Service",
  "description": "Professional ecommerce product image editing including background removal, retouching, and optimization for Amazon, Shopify, and eBay.",
  "provider": {
    "@type": "Organization",
    "@id": "https://blackfoxdigital.com.bd/#organization"
  },
  "serviceType": "Photo Editing",
  "areaServed": "Worldwide",
  "url": "https://blackfoxdigital.com.bd/e-commerce-edit"
}
```

Apply the same pattern to all 10 service pages.

---

### H6. Fix Title Tags Exceeding 60 Characters

| Page | Current Title (chars) | Suggested Fix |
|------|----------------------|---------------|
| / | BLACKFOX LIMITED – Clipping, Masking, Retouching, Shadows, Ecommerce & More (75) | "Professional Image Editing Services — Blackfox Digital" (55) |
| /e-commerce-edit | Best eCommerce Photo Editing Service \| 100% Satisfaction Guaranteed (67) | "eCommerce Photo Editing Service — Blackfox Digital" (52) |
| /shadow-reflection-services | BEST SHADOW & REFLECTION SERVICE \| 100% Satisfaction Guaranteed (63) | "Shadow & Reflection Service — Blackfox Digital" (47) |
| /beauty-skin | BEST BEAUTY & SKIN RETOUCH SERVICE \| 100% Satisfaction Guaranteed (65) | "Beauty & Skin Retouch Service — Blackfox Digital" (49) |
| /gallery | Gallery – BLACKFOX LIMITED (26) | "Photo Editing Portfolio — Before & After Gallery \| Blackfox" (59) |

---

### H7. Add Pricing/Turnaround to Service Meta Descriptions
**Issue:** Competitors rank partly because their snippets include pricing ("from $0.20/image") and turnaround ("24H delivery"). Blackfox descriptions omit these conversion signals.  
**Fix:** Update service page meta descriptions to include key conversion signals. Example:

*Current:* `"Get the best Ghost Mannequin image editing service with the help of our expert image editing team"`

*Improved:* `"Professional ghost mannequin service starting from $X/image. 24–48 hour turnaround, bulk orders welcome. Free trial available."`

---

## MEDIUM — Fix Within 1 Month (estimated impact: +6–9 points)

### M1. Add WebSite Schema with SearchAction to Homepage
**File:** [app/layout.js](app/layout.js) or [app/page.js](app/page.js)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Blackfox Digital",
  "url": "https://blackfoxdigital.com.bd",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://blackfoxdigital.com.bd/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

---

### M2. Add BreadcrumbList Schema to All Service Pages
Helps Google display breadcrumbs in SERPs:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://blackfoxdigital.com.bd" },
    { "@type": "ListItem", "position": 2, "name": "E-Commerce Edit", "item": "https://blackfoxdigital.com.bd/e-commerce-edit" }
  ]
}
```

---

### M3. Create /llms.txt for AI Search Visibility
**File:** [public/llms.txt](public/llms.txt)  
See the full recommended template in FULL-AUDIT-REPORT.md § 6.  
This improves discoverability in ChatGPT, Perplexity, and Claude web features.

---

### M4. Add Question-Based Headings to Service Pages
**Issue:** Zero question-based H2/H3 headings across the site — poor AI citability and PAA visibility.  
**Fix:** Add 2–3 H2/H3 questions per service page. Examples for /e-commerce-edit:
- "What is ecommerce photo editing?"
- "How does our ecommerce image editing process work?"
- "What formats and platforms do you support?"

---

### M5. Add Structured H2/H3 Headings to /image-post-production-service
**Issue:** 3,700-word page with NO H2 or H3 tags — completely flat structure.  
**Fix:** Break content into logical sections with descriptive H2 headings:
- "Our Image Post-Production Services"
- "Our Editing Workflow"
- "Turnaround Times and Pricing"
- "Why Choose Blackfox?"

---

### M6. Add Security Headers via Cloudflare
**Where:** Cloudflare Dashboard → Rules → Transform Rules → Modify Response Header  
**Add these headers:**
```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Referrer-Policy: strict-origin-when-cross-origin
```

---

### M7. Fix IndexNow Key File
**Issue:** `/750fd9b65de6436f9462ed137be94a7c.txt` returns 404 in production.  
**Fix:** Verify the file is in the correct `public/` directory and is accessible. Test: `curl https://blackfoxdigital.com.bd/750fd9b65de6436f9462ed137be94a7c.txt`

---

### M8. Add `sizes` Prop to Hero Image
**Issue:** Hero image served at 3840px width to all devices, including mobile.  
**File:** Find the hero `<Image>` component in [app/page.js](app/page.js) or the hero component.  
**Fix:**
```jsx
<Image
  src="/hero-1.jpg"
  alt="Professional image editing and retouching services"
  width={1920}
  height={1168}
  fetchPriority="high"
  sizes="(max-width: 768px) 100vw, (max-width: 1440px) 100vw, 1920px"
/>
```

---

### M9. Improve Alt Text Quality
**Issue:** Many images use `alt="image"` — generic and unhelpful.  
**Fix:** Replace generic alt text with descriptive keyword-relevant text:
- `alt="image"` → `alt="Before and after ecommerce product photo editing example"`
- `alt="image"` → `alt="Ghost mannequin service result for fashion apparel"`

---

## LOW — Backlog

### L1. Add Author/Team Page with Person Schema
Add a team page or author bio to improve E-E-A-T signals. Include `Person` schema with credentials.

### L2. Add Publication Dates to Service Pages
Even a `datePublished` and `dateModified` in schema (not necessarily visible) helps freshness signals.

### L3. Add Client Logos or Testimonial Count to Homepage
"Trusted by X brands" with logos visible above the fold significantly improves SXO authority signals.

### L4. Build Brand Presence on Reddit/LinkedIn/YouTube
Reddit and YouTube mentions correlate 3x more with AI search citations than backlinks. Consider:
- LinkedIn Company Page with full service descriptions
- YouTube channel with before/after timelapse edits
- Reddit presence in r/photoshop, r/ecommerce communities

### L5. Add Comparison Tables to Service Pages
A table comparing your service tiers (Basic/Standard/Complex) with pricing, turnaround, and formats supported dramatically improves AI citability and conversion rate.

### L6. Add Original Statistics to Homepage
E.g., "We've processed over 2 million images for 500+ brands worldwide" — unique data is highly cited by AI search.

### L7. Fix Image Filenames for LCP/Crawlability
`hero-1.jpg` → `professional-photo-editing-service-hero.jpg`

---

## Implementation Roadmap

### Week 1 (Critical + Quick Wins)
- [ ] C1: Add canonical tags to all pages via layout.js
- [ ] C2: Fix www redirect in Cloudflare
- [ ] C3: Regenerate sitemap.js with all 19 pages
- [ ] C4: Remove FAQPage schema
- [ ] C5: Fix robots.js
- [ ] H1: Fix homepage H1

### Week 2 (High Priority)
- [ ] H2: Write unique meta descriptions for 8 pages
- [ ] H3: Add H1 to 4 pages
- [ ] H4: Consolidate and fix Organization schema
- [ ] H5: Add Service schema to 10 service pages
- [ ] H6: Shorten 5 title tags

### Week 3-4 (Medium Priority)
- [ ] M1: Add WebSite schema with SearchAction
- [ ] M2: Add BreadcrumbList to service pages
- [ ] M3: Create /llms.txt
- [ ] M4: Add question-based headings to service pages
- [ ] M5: Add H2/H3 structure to /image-post-production-service
- [ ] M6: Add security headers via Cloudflare
- [ ] M7: Fix IndexNow key file
- [ ] M8: Add `sizes` prop to hero image
- [ ] M9: Improve alt text quality
- [ ] H7: Add pricing/turnaround to service meta descriptions

### Month 2+ (Low Priority)
- [ ] L1–L7: Authority building, brand presence, comparison tables

---

## Expected Score Progression

| Timeline | Expected Score | Key Drivers |
|----------|---------------|-------------|
| Now | 38/100 | Baseline |
| After Week 1 | 50–52/100 | Canonicals + sitemap fix eliminates duplicate content |
| After Week 2 | 58–62/100 | On-page improvements + schema |
| After Month 1 | 65–70/100 | All medium priority fixes complete |
| After Month 3 | 72–78/100 | Content improvements + authority building |
