import { ServicePage as ServicePageComponent } from "@/components/ServicePage";

export const metadata = {
  title: "Ghost Mannequin Service | Invisible Mannequin Editing — BLACKFOX DIGITAL",
  description:
    "Hand-composited ghost mannequin editing for apparel brands. Clean 3-D hollow form, neck joints and symmetry correction. 24h turnaround. Free trial.",
  alternates: { canonical: "https://blackfoxdigital.com.bd/ghost-mannequin" },
  openGraph: {
    title: "Ghost Mannequin Service | BLACKFOX DIGITAL",
    description:
      "Invisible-mannequin compositing for apparel. 3-D hollow form, neck joints, symmetry correction. 24h turnaround. Free trial.",
    url: "https://blackfoxdigital.com.bd/ghost-mannequin",
    siteName: "BLACKFOX DIGITAL",
    images: [{ url: "/ghost-mannequin-hero-after.webp" }],
    type: "website",
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Photo Editing Service",
    image: "https://blackfoxdigital.com.bd/ghost-mannequin-hero-after.webp",
    name: "Ghost Mannequin Service",
    description:
      "Invisible-mannequin compositing that gives apparel a clean, 3-D hollow form. Neck joints, symmetry correction and crease removal included.",
    url: "https://blackfoxdigital.com.bd/ghost-mannequin",
    provider: { "@id": "https://blackfoxdigital.com.bd/#organization" },
    areaServed: ["United Kingdom", "Germany", "France", "Netherlands", "Italy", "Spain", "Belgium", "Sweden", "Denmark", "Norway"],
    offers: { "@type": "Offer", url: "https://blackfoxdigital.com.bd/take-free-trial", priceSpecification: { "@type": "UnitPriceSpecification", price: 0.85, priceCurrency: "EUR", unitText: "image" } },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: "https://blackfoxdigital.com.bd" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://blackfoxdigital.com.bd/image-post-production-service" },
      { "@type": "ListItem", position: 3, name: "Ghost Mannequin Service", item: "https://blackfoxdigital.com.bd/ghost-mannequin" },
    ],
  },
];

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <ServicePageComponent serviceId="mannequin" />
    </>
  );
}
