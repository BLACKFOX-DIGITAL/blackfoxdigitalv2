import Link from "next/link";

export const metadata = {
  title: "Photo Editing Pricing | From €0.25/Image — BLACKFOX DIGITAL",
  description:
    "Transparent per-image pricing for clipping path, ghost mannequin, masking and retouch. From €0.25/image. Volume discounts up to 20%. No setup fees.",
  alternates: { canonical: "https://blackfoxdigital.com.bd/pricing" },
  openGraph: {
    title: "Photo Editing Pricing | BLACKFOX DIGITAL",
    description: "Transparent per-image rates. Background removal from €0.25. Ghost mannequin from €0.85. No setup fees, no surprises. Volume discounts up to 20%.",
    url: "https://blackfoxdigital.com.bd/pricing",
    siteName: "BLACKFOX DIGITAL",
    images: [{ url: "/logo-blackfox.webp" }],
    type: "website",
  },
};

const services = [
  { name: "Clipping Path",              from: "€0.25", per: "image", url: "/background-removal-clippingpath-service", note: "Simple geometric products" },
  { name: "Background Removal",         from: "€0.35", per: "image", url: "/background-removal-clippingpath-service", note: "Including hair & fur masking" },
  { name: "E-commerce Image Editing",   from: "€0.35", per: "image", url: "/e-commerce-edit",                         note: "Background, colour, marketplace spec" },
  { name: "Image Masking",              from: "€0.75", per: "image", url: "/image-masking-service",                   note: "Hair, fur, glass & translucency" },
  { name: "Ghost Mannequin",            from: "€0.85", per: "image", url: "/ghost-mannequin",                         note: "Neck joint, symmetry correction" },
  { name: "Shadow & Reflection",        from: "€0.45", per: "image", url: "/shadow-reflection-services",              note: "Drop, natural & mirror shadow" },
  { name: "Product Retouch",            from: "€0.99", per: "image", url: "/product-retouch",                         note: "Dust, glare, colour accuracy" },
  { name: "Beauty & Skin Retouch",      from: "€2.75", per: "image", url: "/beauty-skin",                             note: "Frequency separation, dodge & burn" },
  { name: "Model Retouch",              from: "€3.50", per: "image", url: "/model-retouch",                           note: "Full-frame editorial correction" },
  { name: "Jewelry Retouch",            from: "€3.50", per: "image", url: "/jewelry-retouch",                         note: "Facet enhancement, reflection removal" },
];

const volumeTiers = [
  { pct: "10%", label: "101–500 images/mo",   sub: "Save on regular mid-volume batches" },
  { pct: "15%", label: "501–1,000 images/mo", sub: "Ideal for growing e-commerce brands" },
  { pct: "20%", label: "1,000+ images/mo",    sub: "Maximum discount, no commitment" },
];

const speedOptions = [
  { label: "Standard", time: "24h",  price: "Base rate" },
  { label: "Rush",     time: "12h",  price: "+20%" },
  { label: "Super Rush", time: "6h", price: "+40%" },
  { label: "Emergency",  time: "3h", price: "+60%" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",    item: "https://blackfoxdigital.com.bd" },
    { "@type": "ListItem", position: 2, name: "Pricing", item: "https://blackfoxdigital.com.bd/pricing" },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="page-intro">

        {/* breadcrumb */}
        <div className="shell">
          <div className="crumb">
            <Link href="/">Home</Link><span>/</span><span className="cur">Pricing</span>
          </div>
        </div>

        {/* hero */}
        <section className="pricing-hero">
          <div className="shell">
            <span className="eyebrow">Transparent Pricing</span>
            <h1 className="display" style={{ fontSize: "clamp(38px,5vw,72px)", margin: "12px 0 0" }}>
              From €0.25 per image.<br/><span style={{ color: "var(--red)" }}>No surprises.</span>
            </h1>
            <p className="lede" style={{ marginTop: 20, maxWidth: "52ch" }}>
              Per-image rates with no setup fees. Volume discounts up to 20%. Standard 24-hour delivery — Rush and Super Rush available.
            </p>
          </div>
        </section>

        {/* pricing table */}
        <section className="sec" style={{ paddingTop: "clamp(24px,3vw,40px)" }}>
          <div className="shell">
            <span className="eyebrow">All Services</span>
            <div className="pricing-table-wrap" style={{ marginTop: 28 }}>
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Starting From</th>
                    <th>Typical Use</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((s) => (
                    <tr key={s.name}>
                      <td>{s.name}</td>
                      <td>{s.from}<span style={{ fontSize: 12, fontWeight: 400, color: "var(--ink-2)", marginLeft: 4 }}>/{s.per}</span></td>
                      <td style={{ color: "var(--ink-2)", fontSize: 14 }}>{s.note}</td>
                      <td>
                        <Link href={s.url} style={{ fontFamily: "var(--display)", fontSize: 12, textTransform: "uppercase", letterSpacing: ".08em", fontWeight: 700, color: "var(--red)" }}>
                          Details →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="pricing-note">All prices in USD. Minimum order: 1 image. Custom quotes available for complex or mixed batches — <Link href="/contact-info" style={{ color: "var(--red)" }}>contact us</Link>.</p>
            </div>

            {/* volume discounts */}
            <div className="pricing-volume">
              <span className="eyebrow">Volume Discounts</span>
              <h2 className="display" style={{ fontSize: "clamp(28px,3.5vw,48px)", margin: "12px 0 0" }}>The more you send,<br/>the less you pay.</h2>
              <div className="pricing-volume-grid" style={{ marginTop: 28 }}>
                {volumeTiers.map((t) => (
                  <div className="pvol-card" key={t.label}>
                    <div className="pvol-pct">{t.pct}</div>
                    <div className="pvol-label">{t.label}</div>
                    <div className="pvol-sub">{t.sub}</div>
                  </div>
                ))}
              </div>
              <p className="pricing-note" style={{ marginTop: 14 }}>No commitment required. Discounts apply per calendar month across all service categories.</p>
            </div>

            {/* turnaround / speed */}
            <div className="pricing-speed">
              <span className="eyebrow">Delivery Speed</span>
              <h2 className="display" style={{ fontSize: "clamp(28px,3.5vw,48px)", margin: "12px 0 0" }}>Choose your<br/>turnaround.</h2>
              <div className="speed-grid" style={{ marginTop: 28 }}>
                {speedOptions.map((s) => (
                  <div className="speed-card" key={s.label}>
                    <div className="speed-label">{s.label}</div>
                    <div className="speed-time">{s.time}</div>
                    <div className="speed-price">{s.price}</div>
                  </div>
                ))}
              </div>
              <p className="pricing-note" style={{ marginTop: 14 }}>Rush availability depends on current workload. Contact us before ordering to confirm capacity.</p>
            </div>

            {/* CTA */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: "clamp(48px,6vw,80px)", paddingBottom: "clamp(64px,9vw,120px)" }}>
              <Link href="/take-free-trial" className="btn btn-primary">
                Start with 5 free edits
                <svg className="arr" width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link href="/contact-info" className="btn btn-ghost">Get a custom quote</Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
