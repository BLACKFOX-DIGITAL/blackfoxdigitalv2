# Full SEO Audit Report — Blackfox Digital
**Site:** https://blackfoxdigital.com.bd  
**Date:** 2026-06-04  
**Business Type:** B2B Image Post-Production Services (clipping, masking, retouching, e-commerce editing)  
**Pages Crawled:** 21  
**Audit Method:** 7-specialist inline audit (Technical, Content, Schema, Sitemap, Performance, GEO, SXO)

---

## SEO Health Score: 38/100

| Category | Weight | Score | Weighted |
|----------|--------|-------|---------|
| Technical SEO | 22% | 28/100 | 6.2 |
| Content Quality | 23% | 42/100 | 9.7 |
| On-Page SEO | 20% | 35/100 | 7.0 |
| Schema / Structured Data | 10% | 30/100 | 3.0 |
| Performance (CWV) | 10% | 60/100 | 6.0 |
| AI Search Readiness | 10% | 20/100 | 2.0 |
| Images | 5% | 80/100 | 4.0 |
| **TOTAL** | **100%** | | **37.9 ≈ 38** |

---

## Executive Summary

Blackfox Digital is a B2B image post-production company based in Dhaka, Bangladesh with an Australian presence. The site has strong fundamentals (fast TTFB via Cloudflare CDN, Next.js App Router with SSR, good image lazy-loading) but suffers from critical indexability gaps that prevent Google from understanding and ranking the site.

**The most urgent problem:** All 21 pages lack canonical tags, the sitemap covers only 5 of 19 indexable pages (missing all 10 service pages), and the www subdomain serves duplicate content without redirecting to the canonical domain. These three issues alone can explain ranking suppression.

**Top 5 Critical Issues:**
1. Zero canonical tags across all 21 pages → duplicate content signals at scale
2. www.blackfoxdigital.com.bd serves content directly (no redirect to non-www)
3. Sitemap missing all 10 service pages (74% of pages not submitted to Google)
4. Robots.txt has malformed duplicate `User-agent: *` blocks with no consolidation
5. FAQPage schema on FAQ page — restricted to gov/healthcare since Aug 2023

**Top 5 Quick Wins:**
1. Add `<link rel="canonical">` to all pages (1 hour in layout.js)
2. Fix www → non-www redirect at Cloudflare/DNS level (15 minutes)
3. Regenerate sitemap.js to include all service pages (30 minutes)
4. Fix 8 pages using "Image Post Processing Agency" as meta description (1 hour)
5. Add Homepage H1 that reflects actual service ("Professional Image Editing & Retouching Services")

---

## 1. Technical SEO — Score: 28/100

### 1.1 Crawlability

| Check | Status | Detail |
|-------|--------|--------|
| robots.txt exists | ✅ Pass | `/robots.txt` returns 200 |
| robots.txt valid | ⚠️ Warn | Multiple redundant `User-agent: *` blocks — should be one consolidated block |
| Sitemap referenced in robots.txt | ✅ Pass | `Sitemap: https://blackfoxdigital.com.bd/sitemap.xml` |
| Googlebot allowed | ✅ Pass | `User-agent: * Allow: /` (implicit) |
| AI crawlers | ⚠️ Warn | All crawlers implicitly allowed but no explicit rules; GPTBot/ClaudeBot/PerplexityBot not configured |
| JavaScript rendering | ✅ Pass | Next.js App Router SSR — 309 sentences in raw HTML |
| Crawl depth | ✅ Pass | All pages within 2 clicks of homepage |

**robots.txt issue — current (problematic):**
```
User-Agent: *
Allow: /

User-Agent: *
Allow: /image-post-production-company-our-company

User-Agent: *
Allow: /contact-info
...
```

**Recommended fix:**
```
User-agent: *
Allow: /
Disallow:

User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

Sitemap: https://blackfoxdigital.com.bd/sitemap.xml
```

### 1.2 Indexability — CRITICAL

| Check | Status | Detail |
|-------|--------|--------|
| Canonical tags | ❌ FAIL | **0/21 pages have canonical tags** |
| www vs non-www | ❌ FAIL | www.blackfoxdigital.com.bd returns HTTP 200 (duplicate content) |
| HTTPS enforcement | ✅ Pass | HTTP → HTTPS redirect (301) works correctly |
| Trailing slash consistency | ❌ FAIL | Sitemap uses trailing slashes, but pages 308-redirect away from them |
| Duplicate content | ❌ FAIL | www + non-www serving identical content without canonicalization |
| Noindex tags | ✅ Pass | No unintentional noindex found |

**Impact of missing canonicals:** Google sees both `https://blackfoxdigital.com.bd/e-commerce-edit` and `https://www.blackfoxdigital.com.bd/e-commerce-edit` as separate pages with identical content. Without canonicals, Google must guess which to rank, and may split link equity between them.

### 1.3 Security Headers

| Header | Status |
|--------|--------|
| HTTPS (SSL) | ✅ Pass — Cloudflare SSL |
| Strict-Transport-Security (HSTS) | ❌ Missing |
| Content-Security-Policy | ❌ Missing |
| X-Frame-Options | ❌ Missing |
| X-Content-Type-Options | ❌ Missing |
| Referrer-Policy | ❌ Missing |
| Permissions-Policy | ❌ Missing |

All security headers are absent. These are easy to add via Cloudflare Transform Rules at no code cost.

### 1.4 URL Structure

| Check | Status | Detail |
|-------|--------|--------|
| Clean URLs | ✅ Pass | Descriptive, hyphenated slugs |
| Trailing slash consistency | ❌ Fail | Pages redirect `/contact-info/` → `/contact-info` (308), but sitemap uses trailing-slash versions |
| Redirect chains | ⚠️ Warn | `/take-free-trial/` returns 308 → creates redirect chain |
| URL length | ✅ Pass | All URLs under 100 characters |
| www redirect | ❌ Fail | `www.` serves content directly instead of 301-redirecting |

### 1.5 Mobile Optimization

| Check | Status |
|-------|--------|
| Viewport meta tag | ✅ Pass — `width=device-width, initial-scale=1` |
| Responsive design | ✅ Pass — Tailwind CSS responsive classes |
| Mobile-first indexing | ✅ Pass — SSR content identical on all UA |
| Next.js Image optimization | ✅ Pass — 41/53 images use `<Image>` component |

### 1.6 Core Web Vitals (Estimated — PSI API unavailable)

| Metric | Estimate | Basis |
|--------|----------|-------|
| TTFB | ~0.32s ✅ | curl measurement, Cloudflare CDN |
| LCP | ⚠️ Risk | Hero image at 3840px width served to all viewports |
| CLS | ⚠️ Unknown | Inline SVG blur placeholders present (good); carousels not assessed |
| INP | ⚠️ Unknown | 17 external scripts present |

Hero image: `/_next/image?url=%2Fhero-1.jpg&w=3840&q=75` is the LCP candidate. The `sizes` prop is missing — Next.js cannot serve an appropriate breakpoint image without it.

### 1.7 IndexNow

| Check | Status |
|-------|--------|
| IndexNow key file at root | ❌ 404 — key file `750fd9b65de6436f9462ed137be94a7c.txt` not accessible |
| Active submission | ❌ Not confirmed |

Key file exists in `/public/` repo but is not being served correctly in production (or path is wrong).

---

## 2. Content Quality — Score: 42/100

### 2.1 E-E-A-T Assessment

| Factor | Score | Key Signals |
|--------|-------|-------------|
| Experience | 8/25 | Before/after portfolio images present; no process documentation or case studies with named clients |
| Expertise | 10/25 | Service descriptions are technically accurate; no author bylines, certifications, or team credentials |
| Authoritativeness | 8/25 | No backlinks from authoritative sources; no industry mentions; `sameAs` only points to one domain |
| Trustworthiness | 16/25 | HTTPS ✅, Privacy Policy ✅, Terms ✅, Contact info ✅; no third-party reviews or trust badges |
| **Total** | **42/100** | |

### 2.2 Heading Structure Issues

| Page | Issue |
|------|-------|
| Homepage | H1 is just **"retouch"** — one word, missing primary keyword context |
| /contact-info | **No H1 tag** |
| /frequently-asked-questions | **No H1 tag** |
| /privacy-policy | **No H1 tag** |
| /cookies-policy-of-blackfox-limited | **No H1 tag** |
| /image-post-production-service | **No H2 or H3 tags** — 3,700 words with completely flat structure |

### 2.3 Meta Description Issues

**8 pages share the identical generic description:** `"Image Post Processing Agency"`

Affected pages:
- /image-post-production-service
- /gallery
- /contact-info
- /take-free-trial
- /terms-and-conditions
- /frequently-asked-questions
- /privacy-policy
- /cookies-policy-of-blackfox-limited

### 2.4 Title Tag Issues

| Page | Issue | Length |
|------|-------|--------|
| Homepage | Too long — truncated in SERP | 75 chars |
| /e-commerce-edit | Too long | 67 chars |
| /shadow-reflection-services | Too long | 63 chars |
| /beauty-skin | Too long | 65 chars |
| /gallery | Too short / weak | 26 chars |

### 2.5 Templated Meta Description Pattern

All 7 individual service pages follow an identical meta description template:
> "Get the best [X] service with the help of our expert image editing team"

This near-duplicate pattern signals low-differentiation content to Google.

### 2.6 AI Citation Readiness: 15/100

- Zero definition-style sentences on any page
- Zero question-based H2/H3 headings across entire site
- Zero comparison tables
- No publication or last-updated dates on any page
- No author bylines
- No original statistics or proprietary data
- FAQ page has valuable Q&A content but no H1 and poor heading structure

### 2.7 Content Strengths
- Word counts adequate: service pages range 2,100–3,700 words
- Before/after comparison images present
- Testimonials section on multiple pages
- Pricing information present on service pages

---

## 3. Schema / Structured Data — Score: 30/100

### 3.1 Current Schema Audit

| Schema | Pages | Status | Issues |
|--------|-------|--------|--------|
| Organization | All pages | ⚠️ Incomplete | Missing `name`, `contactPoint`, `sameAs` — bare stub with only logo + url |
| Corporation | All pages | ⚠️ Issues | Redundant with Organization; `sameAs` uses HTTP; only 1 sameAs entry |
| FAQPage | /faq | ❌ Restricted | Restricted to gov/healthcare since Aug 2023 — no rich results for commercial sites |

### 3.2 Validation Issues

**Organization (Block 1)** — critically incomplete:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "logo": "https://blackfoxdigital.com.bd/logo.png",
  "url": "https://blackfoxdigital.com.bd"
}
```
Missing: `name`, `contactPoint`, `sameAs`, `@id`

**Corporation (Block 2)** — issues:
- Redundant with Organization (one consolidated schema is better)
- `sameAs` uses HTTP: `"http://blackfox.com.bd/"` → should be HTTPS + social profiles

### 3.3 Missing Schema Opportunities

| Schema Type | Where | Business Value |
|-------------|-------|----------------|
| `Service` | Each service page | Service rich results; AI search understanding |
| `BreadcrumbList` | All pages | Breadcrumb display in SERPs |
| `WebSite` + `SearchAction` | Homepage | Sitelinks search box |
| `AggregateRating` | Service pages | Star ratings in SERPs |
| `Person` | About page | Author E-E-A-T signal |

---

## 4. Sitemap — Score: 20/100

| Metric | Value |
|--------|-------|
| Total indexable pages | 19 |
| Pages in sitemap | 5 |
| **Coverage** | **26%** |
| Service pages in sitemap | 0 of 10 |

### Issues Found

| Issue | Severity |
|-------|----------|
| 14 pages missing from sitemap | Critical |
| Trailing slash URLs cause 308 redirects | High |
| All lastmod dates identical | Medium |
| `<priority>` tags (ignored by Google) | Info |
| `<changefreq>` tags (ignored by Google) | Info |

### Pages Missing from Sitemap
/image-post-production-service, /e-commerce-edit, /background-removal-clippingpath-service, /ghost-mannequin, /image-masking-service, /shadow-reflection-services, /beauty-skin, /model-retouch, /product-retouch, /jewelry-retouch, /terms-and-conditions, /frequently-asked-questions, /privacy-policy, /cookies-policy-of-blackfox-limited

---

## 5. Performance — Score: 60/100

*Note: PageSpeed Insights API unavailable during audit. Estimates from TTFB + HTML analysis.*

| Metric | Estimate | Status |
|--------|----------|--------|
| TTFB | 0.32s | ✅ Excellent |
| Hero image `sizes` prop | Missing | ⚠️ Risk |
| Alt text coverage | 53/53 | ✅ Pass |
| Lazy loading | 33/53 | ✅ Good |
| Next.js Image optimization | 41/53 | ✅ Good |
| External scripts | 17 | ⚠️ Moderate |

---

## 6. GEO / AI Search Readiness — Score: 20/100

| Signal | Status |
|--------|--------|
| llms.txt | ❌ Missing |
| Definition-style sentences | ❌ Zero |
| Question-based H2/H3 | ❌ Zero |
| Comparison tables | ❌ Zero |
| Author bylines | ❌ Missing |
| Publication dates | ❌ Missing |
| Brand mentions (Wikipedia/Reddit/YouTube) | ❌ Not detected |
| SSR (crawlable by AI bots) | ✅ Pass |
| AI crawlers accessible | ✅ Pass (implicit) |

**Recommended llms.txt for `/llms.txt`:**
```
# Blackfox Digital
> Professional image post-production services: clipping path, background removal, masking, ghost mannequin, beauty retouching, product retouching, ecommerce image editing.

## Core Services
- [E-Commerce Edit](https://blackfoxdigital.com.bd/e-commerce-edit): Bulk ecommerce product image editing for Amazon, Shopify, eBay
- [Background Removal & Clipping](https://blackfoxdigital.com.bd/background-removal-clippingpath-service): Clipping path and background removal service
- [Ghost Mannequin](https://blackfoxdigital.com.bd/ghost-mannequin): Invisible mannequin / neck joint service for apparel
- [Image Masking](https://blackfoxdigital.com.bd/image-masking-service): Hair and fur masking, complex image isolation
- [Shadow & Reflection](https://blackfoxdigital.com.bd/shadow-reflection-services): Drop shadow, reflection, and natural shadow effects
- [Beauty & Skin Retouch](https://blackfoxdigital.com.bd/beauty-skin): High-end beauty and skin retouching
- [Model Retouch](https://blackfoxdigital.com.bd/model-retouch): Fashion model photo retouching
- [Product Retouch](https://blackfoxdigital.com.bd/product-retouch): Product photo enhancement and retouching
- [Jewelry Retouch](https://blackfoxdigital.com.bd/jewelry-retouch): Jewelry photography retouching

## About
- [About Blackfox](https://blackfoxdigital.com.bd/image-post-production-company-our-company): Company background and workflow
- [Free Trial](https://blackfoxdigital.com.bd/take-free-trial): Request a free image editing trial
- [FAQ](https://blackfoxdigital.com.bd/frequently-asked-questions): Common questions about services and workflow
- [Contact](https://blackfoxdigital.com.bd/contact-info): Dhaka, Bangladesh (+88) 019 24 482 868

## Key Facts
- Based in Dhaka, Bangladesh with Australian operations
- Serves clients globally including USA, UK, Australia, Canada
- Services: clipping path, background removal, ghost mannequin, image masking, beauty retouch, product retouch
- Turnaround: 24–48 hours standard
- Bulk discount: 20% off orders of 1000+ images
```

---

## 7. SXO / Search Experience — Score: 52/100

| Dimension | Score | Finding |
|-----------|-------|---------|
| Page Type | 15/15 | ✅ Service pages match SERP consensus |
| Content Depth | 10/15 | Word count adequate; heading structure weak |
| UX Signals | 7/15 | Free Trial CTA present; pricing/turnaround buried |
| Schema Markup | 4/15 | No Service schema; no AggregateRating |
| Media Richness | 8/15 | Before/after images present; no video, no tables |
| Authority Signals | 5/15 | No client logos, case studies, or visible review count |
| Freshness | 3/10 | No dates anywhere on site |
| **SXO Score** | **52/100** | |

**Key SERP gap:** Competitors rank partly because their snippets contain **pricing and turnaround time** ("from $0.20/image, 24H delivery"). Blackfox meta descriptions only say "Get the best X service..." — no conversion signal in the SERP result itself.

---

## 8. Image SEO — Score: 80/100

| Check | Status | Detail |
|-------|--------|--------|
| Alt text coverage | ✅ Pass | 0 missing alt text |
| Lazy loading | ✅ Pass | 33/53 images lazy loaded |
| Next.js Image component | ✅ Pass | 41/53 use `<Image>` (auto WebP + resize) |
| Hero `fetchPriority="high"` | ✅ Pass | LCP candidate correctly prioritized |
| `sizes` prop on hero | ❌ Missing | Oversized image delivered to mobile |
| Alt text quality | ⚠️ Warn | Many images use `alt="image"` — not descriptive |
| Image filenames | ⚠️ Warn | `hero-1.jpg`, `image.jpg` — should be descriptive |

---

## Appendix: Per-Page Issue Matrix

| Page | Title | Meta Desc | H1 | Canonical | Sitemap |
|------|-------|-----------|-----|-----------|---------|
| / | Too long (75) | ✅ Unique | ⚠️ Weak | ❌ | ✅ |
| /image-post-production-service | OK | ❌ Generic | ✅ | ❌ | ❌ |
| /e-commerce-edit | Too long (67) | ✅ OK | ✅ | ❌ | ❌ |
| /background-removal-clippingpath-service | OK | ✅ OK | ✅ | ❌ | ❌ |
| /ghost-mannequin | OK | ✅ OK | ✅ | ❌ | ❌ |
| /image-masking-service | OK | ✅ OK | ✅ | ❌ | ❌ |
| /shadow-reflection-services | Too long (63) | ✅ OK | ✅ | ❌ | ❌ |
| /beauty-skin | Too long (65) | ✅ OK | ✅ | ❌ | ❌ |
| /model-retouch | OK | ✅ OK | ✅ | ❌ | ❌ |
| /product-retouch | OK | ✅ OK | ✅ | ❌ | ❌ |
| /jewelry-retouch | OK | ✅ OK | ✅ | ❌ | ❌ |
| /gallery | Too short (26) | ❌ Generic | ✅ | ❌ | ✅ |
| /contact-info | OK | ❌ Generic | ❌ Missing | ❌ | ✅ |
| /take-free-trial | OK | ❌ Generic | ✅ | ❌ | ✅ |
| /frequently-asked-questions | OK | ❌ Generic | ❌ Missing | ❌ | ❌ |
| /image-post-production-company-our-company | OK | ✅ Unique | ✅ | ❌ | ✅ |
| /privacy-policy | OK | ❌ Generic | ❌ Missing | ❌ | ❌ |
| /terms-and-conditions | OK | ❌ Generic | ⚠️ Partial | ❌ | ❌ |
| /cookies-policy-of-blackfox-limited | OK | ❌ Generic | ❌ Missing | ❌ | ❌ |
