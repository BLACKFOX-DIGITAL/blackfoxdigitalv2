export default function ServiceSchema({ name, description, url, priceRange, faqs = [] }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": name,
        "description": description,
        "url": url,
        "provider": {
          "@type": "Organization",
          "@id": "https://blackfoxdigital.com.bd/#organization"
        },
        "areaServed": "Worldwide",
        "priceRange": priceRange,
      },
      ...(faqs.length > 0 ? [{
        "@type": "FAQPage",
        "mainEntity": faqs.map(({ q, a }) => ({
          "@type": "Question",
          "name": q,
          "acceptedAnswer": { "@type": "Answer", "text": a }
        }))
      }] : [])
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
    />
  );
}
