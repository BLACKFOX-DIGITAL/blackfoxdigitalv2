export default function ServiceSchema({ name, description, url, priceRange }) {
  const schema = {
    "@context": "https://schema.org",
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
    />
  );
}
