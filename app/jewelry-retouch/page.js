import { ServicePage as ServicePageComponent } from "@/components/ServicePage";

export const metadata = {
  title: "Jewelry Retouching Service | BLACKFOX DIGITAL",
  description:
    "Fine-detail jewelry photo retouching. Sparkle enhancement, dust removal, metal and gemstone clean-up. Accuracy guaranteed. Free trial available.",
  alternates: { canonical: "https://blackfoxdigital.com.bd/jewelry-retouch" },
  openGraph: {
    title: "Jewelry Retouching Service | BLACKFOX DIGITAL",
    description:
      "Fine-detail jewelry retouching. Sparkle enhancement, dust removal, metal and gemstone clean-up. Free trial.",
    url: "https://blackfoxdigital.com.bd/jewelry-retouch",
    siteName: "BLACKFOX DIGITAL",
    images: [{ url: "/jewelry-retouch-hero.webp" }],
    type: "website",
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Photo Editing Service",
    image: "https://blackfoxdigital.com.bd/jewelry-retouch-hero.webp",
    name: "Jewelry Retouch",
    description:
      "Fine-detail jewelry photo retouching: sparkle enhancement, dust and scratch removal, and metal and gemstone clean-up for accurate, high-end presentation.",
    url: "https://blackfoxdigital.com.bd/jewelry-retouch",
    provider: { "@id": "https://blackfoxdigital.com.bd/#organization" },
    areaServed: ["United Kingdom", "Germany", "France", "Netherlands", "Italy", "Spain", "Belgium", "Sweden", "Denmark", "Norway"],
    offers: { "@type": "Offer", url: "https://blackfoxdigital.com.bd/take-free-trial", priceSpecification: { "@type": "UnitPriceSpecification", price: 3.50, priceCurrency: "EUR", unitText: "image" } },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: "https://blackfoxdigital.com.bd" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://blackfoxdigital.com.bd/image-post-production-service" },
      { "@type": "ListItem", position: 3, name: "Jewelry Retouch", item: "https://blackfoxdigital.com.bd/jewelry-retouch" },
    ],
  },
];

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <ServicePageComponent serviceId="jewelry" />
    </>
  );
}
