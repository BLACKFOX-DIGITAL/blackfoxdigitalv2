# BLACKFOX DIGITAL — SEO Implementation Roadmap
_Generated: 2026-06-03_

---

## Overview

| Phase | Duration | Focus | Primary Outcome |
|-------|----------|-------|-----------------|
| 1: Foundation | Weeks 1–4 | Technical SEO + metadata | Indexable, crawlable, traceable |
| 2: Expansion | Weeks 5–12 | Content depth + blog launch | Keyword rankings begin |
| 3: Scale | Months 4–6 | Industry pages + link building | Traffic growth |
| 4: Authority | Months 7–12 | Thought leadership + GEO | Domain authority, AI visibility |

---

## Phase 1: Foundation (Weeks 1–4)

### Week 1 — Technical Infrastructure

- [ ] **Sitemap** — Create `app/sitemap.js` generating dynamic XML sitemap with all routes
- [ ] **Robots.txt** — Create `app/robots.js` allowing all crawlers, disabling legal pages if needed
- [ ] **Canonical tags** — Add `alternates.canonical` to every page metadata export
- [ ] **Per-page metadata** — Add individual `export const metadata` to every `page.js` (see SITE-STRUCTURE.md for copy)
- [ ] **Open Graph** — Add OG title, description, and image to all pages
- [ ] **Google Search Console** — Register property, verify ownership, submit sitemap
- [ ] **Bing Webmaster Tools** — Register and submit sitemap
- [ ] **Google Analytics 4** — Set up property, add gtag to `layout.js`, configure goals (free trial form submission)

### Week 2 — Schema Markup

- [ ] **Organization + ProfessionalService** — Add JSON-LD to `layout.js` (fires on all pages)
- [ ] **FAQPage schema** — Add to `/frequently-asked-questions` page
- [ ] **Service schema** — Add to each of the 9 service `page.js` files
- [ ] **WebSite + SearchAction schema** — Add to home page for sitelinks search box eligibility
- [ ] **BreadcrumbList** — Add to service pages
- [ ] **ImageGallery + ImageObject** — Add to `/gallery` page
- [ ] Test all schema at schema.org validator and Google Rich Results Test

### Week 3 — Content Foundation

- [ ] **Service page body copy** — Write 200–400 word descriptions for all 9 service pages (expanding on existing short blurbs in `data.js`)
- [ ] **Inline FAQs** — Add 3–5 Q&As per service page
- [ ] **About page** — Expand with founding story, QC process detail, team headcount stats
- [ ] **Free trial page** — Add step-by-step submission guide and trust signals

### Week 4 — Technical Polish

- [ ] **Core Web Vitals audit** — Run Lighthouse on key pages, fix LCP images (add priority + `sizes` to hero images), fix CLS from font loading
- [ ] **Image optimisation** — Convert `/public` JPGs to WebP, add `alt` text to all images
- [ ] **Mobile meta viewport** — Already present; verify no horizontal scroll issues
- [ ] **Security headers** — Add `X-Frame-Options`, `X-Content-Type-Options` via `next.config.js`
- [ ] **`llms.txt`** — Create at `/public/llms.txt` describing services, free trial, and contact for AI crawlers
- [ ] **404 page** — Create `not-found.js` with helpful links back to services

---

## Phase 2: Expansion (Weeks 5–12)

### Weeks 5–6 — Blog Infrastructure

- [ ] Create `app/blog/` route with listing page
- [ ] Create blog post template (MDX or CMS-driven)
- [ ] Create author bio page template (Person + ProfilePage schema)
- [ ] Add at least 2 senior retoucher bio pages
- [ ] Publish first 2 blog posts (see CONTENT-CALENDAR.md — Month 3)
- [ ] Add internal links from blog posts to relevant service pages

### Weeks 7–8 — Content Scale

- [ ] Publish Month 4 blog posts (Amazon requirements, frequency separation)
- [ ] **Pricing guide page** — `/pricing` — estimated per-image ranges, bulk tiers, free trial CTA
- [ ] **Gallery enhancement** — Add service-specific filtering and before/after captions with alt text

### Weeks 9–10 — Off-Page Foundation

- [ ] Register and complete **Clutch** profile with company info and first 3 client reviews
- [ ] Register **Trustpilot** profile
- [ ] Register **GoodFirms** and **DesignRush** profiles
- [ ] Submit to **photography directories**: BestPhotoEditing.com, TopDesignFirms, similar
- [ ] Reach out to 5 photography bloggers for inclusion in "best photo editing services" roundups

### Weeks 11–12 — Monitoring & QA

- [ ] Review Search Console for crawl errors, coverage issues
- [ ] Review Core Web Vitals field data (if traffic permits)
- [ ] Confirm all schema passes validation
- [ ] Check keyword rankings for Tier 1 targets (see SEO-STRATEGY.md)
- [ ] Publish Month 5 blog posts

---

## Phase 3: Scale (Months 4–6)

### Month 4

- [ ] Launch `/industries/` section — 4 pages (fashion, e-commerce, photography studios, agencies)
- [ ] Build structured internal links from industry pages → relevant service pages
- [ ] Publish Month 6 blog posts
- [ ] Begin link outreach: guest posts on photography and e-commerce blogs (target: 3–5 links/month)
- [ ] Add hreflang tags if UK vs global content split makes sense (assess after Month 3 traffic data)

### Month 5

- [ ] Produce 2–3 detailed case studies (with client permission, or anonymised by industry)
- [ ] Add Case Study schema (Article)
- [ ] Publish 3 new blog posts
- [ ] Review and refresh Phase 1 service pages based on Search Console click data

### Month 6

- [ ] Mid-year KPI review against targets in SEO-STRATEGY.md
- [ ] Identify top-performing pages — invest in further content upgrades
- [ ] Begin AI visibility monitoring (test BLACKFOX mentions in ChatGPT, Perplexity, Google AI Overviews)
- [ ] Publish 3 new blog posts

---

## Phase 4: Authority (Months 7–12)

### Ongoing Monthly
- [ ] Publish 3–4 blog posts
- [ ] 3–5 new backlinks per month (guest posts, directories, PR)
- [ ] Accumulate and respond to reviews on Clutch, Trustpilot

### Month 7
- [ ] Launch original research piece (e.g. "State of E-commerce Product Photography 2026") — designed for media pickup and citations
- [ ] Pitch research findings to photography and e-commerce newsletters
- [ ] Add Video schema to any service pages with embedded demos

### Month 9
- [ ] Review and refresh all Phase 1 service pages with updated stats, new FAQs, and expanded copy
- [ ] Test AI chat visibility for "best ghost mannequin service" and "best clipping path service" in European markets
- [ ] Build out team pages if 3+ editor bios available

### Month 12
- [ ] Full SEO audit (technical, content, links)
- [ ] Compare KPIs against baseline targets (see SEO-STRATEGY.md)
- [ ] Plan Year 2 strategy

---

## Resource Requirements

| Task Area | Owner | Tools Needed |
|-----------|-------|-------------|
| Technical SEO (sitemap, schema, metadata) | Developer | Next.js, schema.org, GSC |
| Content writing (blog, service pages) | Content writer or AI-assisted | Google Docs, Grammarly |
| Link building | Marketing / outreach | Hunter.io, Pitchbox or manual |
| Review acquisition | Account management | Clutch, Trustpilot |
| Analytics / monitoring | SEO or developer | GA4, Google Search Console, Ahrefs/Semrush |

---

## Risk Register

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| URL changes break existing inbound links | Medium | High | Implement 301 redirects; test thoroughly before deploying |
| Blog content not produced on schedule | Medium | Medium | Create 3 posts before blog launch, maintain a buffer |
| Low review volume on Clutch/Trustpilot | High | Medium | Proactively ask satisfied clients; offer incentives (discounts) |
| Algorithm update penalises thin pages | Low | High | Ensure all pages meet 400+ word content minimum |
| Competitor copies content strategy | Medium | Low | Differentiate with original data (case studies, research) |
