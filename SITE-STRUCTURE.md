# BLACKFOX DIGITAL — Site Structure & URL Architecture
_Generated: 2026-06-03_

---

## Current URL Inventory

| Route | Page | Status | SEO Notes |
|-------|------|--------|-----------|
| `/` | Home | Live | Needs per-page metadata |
| `/image-post-production-service` | Services Overview | Live | Good keyword in URL |
| `/e-commerce-edit` | E-commerce Image Editing | Live | URL could be stronger (`/e-commerce-photo-editing-service`) |
| `/background-removal-clippingpath-service` | Background Removal & Clipping Path | Live | URL is long but keyword-rich — keep |
| `/ghost-mannequin` | Ghost Mannequin | Live | Missing "service" suffix — add redirect or canonicalise |
| `/image-masking-service` | Image Masking | Live | Good |
| `/shadow-reflection-services` | Shadow & Reflection | Live | Good |
| `/beauty-skin` | Beauty & Skin Retouch | Live | Too short — `/beauty-skin-retouching-service` would rank better |
| `/model-retouch` | Model Retouch | Live | Add "service" suffix |
| `/product-retouch` | Product Retouch | Live | Add "service" suffix |
| `/jewelry-retouch` | Jewelry Retouch | Live | Add "service" suffix |
| `/gallery` | Gallery | Live | Add ImageGallery schema |
| `/take-free-trial` | Free Trial | Live | Good conversion page |
| `/contact-info` | Contact | Live | Consider `/contact` redirect |
| `/frequently-asked-questions` | FAQ | Live | Add FAQPage schema |
| `/image-post-production-company-our-company` | About | Live | URL is very long — add canonical or 301 to `/about` |

---

## Recommended URL Normalisation

These changes improve keyword relevance and consistency. All old URLs must 301-redirect to new ones.

| Current URL | Recommended URL | Reason |
|-------------|-----------------|--------|
| `/ghost-mannequin` | `/ghost-mannequin-service` | Matches search intent ("ghost mannequin service") |
| `/beauty-skin` | `/beauty-skin-retouching-service` | More descriptive, keyword-rich |
| `/model-retouch` | `/model-retouching-service` | Consistent pattern |
| `/product-retouch` | `/product-retouching-service` | Consistent pattern |
| `/jewelry-retouch` | `/jewelry-retouching-service` | Consistent pattern |
| `/contact-info` | `/contact` | Clean, standard |
| `/image-post-production-company-our-company` | `/about` | Canonical; current URL is unwieldy |

> **Note:** If changing URLs mid-launch is risky, add `<link rel="canonical">` to the existing URLs pointing to the preferred form, and defer 301s to a later sprint.

---

## Recommended Full Architecture (12-month target)

```
/
├── /image-post-production-service          (Services Hub)
│   ├── /e-commerce-edit
│   ├── /background-removal-clippingpath-service
│   ├── /ghost-mannequin-service
│   ├── /image-masking-service
│   ├── /shadow-reflection-services
│   ├── /beauty-skin-retouching-service
│   ├── /model-retouching-service
│   ├── /product-retouching-service
│   └── /jewelry-retouching-service
│
├── /industries                             (NEW — Phase 3)
│   ├── /fashion-photo-editing
│   ├── /ecommerce-photo-editing
│   ├── /photography-studios
│   └── /advertising-agencies
│
├── /gallery
│
├── /blog                                   (NEW — Phase 2)
│   ├── /what-is-ghost-mannequin-photography
│   ├── /clipping-path-vs-masking
│   ├── /how-to-prepare-images-for-amazon
│   └── ...
│
├── /about
│   └── /team                              (NEW — Phase 2)
│       ├── /[senior-retoucher-1]
│       └── ...
│
├── /pricing                               (NEW — Phase 2)
├── /take-free-trial
├── /contact
├── /frequently-asked-questions
├── /privacy-policy
├── /terms-and-conditions
└── /cookies-policy
```

---

## Internal Linking Strategy

### Hub-and-Spoke Model
- `/image-post-production-service` is the **hub** — links to all 9 service pages
- Each **service page** links back to the hub and to 2–3 related services
- **Home** links to the top 6 services (already done via heroQuick) + hub + free trial
- **Blog posts** link to the most relevant service page + free trial CTA

### Cross-linking Map

| Source Page | Should Link To |
|-------------|---------------|
| E-commerce Edit | Clipping Path, Product Retouch, Shadow & Reflection |
| Background Removal | Image Masking, E-commerce Edit, Ghost Mannequin |
| Ghost Mannequin | Background Removal, Model Retouch, E-commerce Edit |
| Image Masking | Background Removal, Beauty Retouch |
| Shadow & Reflection | E-commerce Edit, Product Retouch |
| Beauty & Skin | Model Retouch, Image Masking |
| Model Retouch | Beauty & Skin, Ghost Mannequin |
| Product Retouch | E-commerce Edit, Shadow & Reflection |
| Jewelry Retouch | Product Retouch, Beauty & Skin |
| About | Services Hub, Free Trial, Contact |
| FAQ | Free Trial, Contact, relevant service pages |

---

## Page-Level Metadata Plan

Every `page.js` must export individual metadata. Template:

```js
// e.g. app/ghost-mannequin/page.js
export const metadata = {
  title: "Ghost Mannequin Service | Invisible Mannequin Editing — BLACKFOX DIGITAL",
  description: "Hand-composited ghost mannequin editing for apparel brands. Clean 3-D hollow form, neck joints and symmetry correction. Free trial available.",
  alternates: { canonical: "https://blackfoxdigital.com.bd/ghost-mannequin-service" },
  openGraph: {
    title: "Ghost Mannequin Service — BLACKFOX DIGITAL",
    description: "Invisible-mannequin compositing for apparel. 24h turnaround, 3-step QC, free trial.",
    images: [{ url: "/Ghost-Mannequin-2-Done.jpg" }],
  },
};
```

### Per-Page Title & Description Targets

| Page | Title Tag (≤60 chars) | Meta Description (≤155 chars) |
|------|-----------------------|-------------------------------|
| Home | BLACKFOX DIGITAL \| Image Post-Production Services | Marketplace-ready photo editing at scale. Clipping path, ghost mannequin, retouch and more. 80+ designers. Free trial. |
| Services Hub | Image Post-Production Services \| BLACKFOX DIGITAL | Professional image editing services: clipping path, ghost mannequin, masking, retouch. Hand-crafted quality. Bulk pricing. |
| E-commerce Edit | E-commerce Photo Editing Service \| BLACKFOX | Amazon, Shopify & eBay-compliant product images. Cropped, aligned, white background. Bulk orders welcome. Free trial. |
| Clipping Path | Background Removal & Clipping Path Service | Hand-drawn pen-tool clipping paths and background removal. Pixel-perfect cut-outs. Any volume. Free trial available. |
| Ghost Mannequin | Ghost Mannequin Service \| BLACKFOX DIGITAL | Invisible-mannequin compositing for apparel brands. 3-D hollow form, neck joints, symmetry correction. 24h turnaround. |
| Image Masking | Image Masking Service — Hair, Fur & Transparency | Alpha and channel masking for hair, fur, smoke and glass. Strand-level detail retained. Free trial. |
| Shadow & Reflection | Shadow & Reflection Service \| BLACKFOX | Natural, drop and mirror shadows that ground products. No reshoot needed. Fast turnaround, free trial. |
| Beauty & Skin | Beauty & Skin Retouching Service \| BLACKFOX | Frequency-separation skin retouch. Natural texture, blemish removal, editorial finish. Free trial available. |
| Model Retouch | Model Retouching Service — Editorial & Fashion | Glamour and editorial model retouching. Skin, hair, body contour and colour grade. Fashion-grade quality. |
| Product Retouch | Product Retouching Service \| BLACKFOX DIGITAL | Catalog-ready product photo retouching. Dust removal, colour accuracy, crisp finish. Bulk orders. Free trial. |
| Jewelry Retouch | Jewelry Retouching Service \| BLACKFOX | Fine-detail jewelry photo retouching. Sparkle enhancement, dust removal, metal and gemstone clean-up. |
| About | About BLACKFOX DIGITAL — Image Post-Production | 80+ in-house designers since 2016. Serving Europe and the USA with professional, QC-assured photo editing. |
| Free Trial | Free Trial — Photo Editing \| BLACKFOX DIGITAL | Send up to 2 images and receive a professional edit free. No payment, no commitment. Judge our quality first. |
| FAQ | Photo Editing FAQ \| BLACKFOX DIGITAL | Answers to common questions about turnaround, pricing, revisions, and marketplace compliance. |

---

## Sitemap Priority Matrix

| Page | Priority | Change Freq |
|------|----------|-------------|
| Home | 1.0 | weekly |
| Services Hub | 0.9 | monthly |
| Each service page (×9) | 0.9 | monthly |
| Free Trial | 0.8 | monthly |
| Gallery | 0.7 | weekly |
| About | 0.7 | monthly |
| FAQ | 0.7 | monthly |
| Contact | 0.6 | yearly |
| Blog posts (future) | 0.8 | weekly |
| Legal pages (×3) | 0.3 | yearly |
