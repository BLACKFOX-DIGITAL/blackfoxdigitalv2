import { ServicePage as ServicePageComponent } from "@/components/ServicePage";

export const metadata = {
  title: "Shadow & Reflection Service | BLACKFOX DIGITAL",
  description:
    "Natural, drop and mirror shadows that ground products without a studio reshoot. Fast turnaround, bulk pricing. Free trial available.",
  alternates: { canonical: "https://blackfoxdigital.com.bd/shadow-reflection-services" },
  openGraph: {
    title: "Shadow & Reflection Service | BLACKFOX DIGITAL",
    description:
      "Natural, drop and mirror shadows that ground products without a studio reshoot. Fast turnaround. Free trial.",
    url: "https://blackfoxdigital.com.bd/shadow-reflection-services",
    siteName: "BLACKFOX DIGITAL",
    images: [{ url: "/shadow-reflection-hero-after.webp" }],
    type: "website",
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Photo Editing Service",
    image: "https://blackfoxdigital.com.bd/shadow-reflection-hero-after.webp",
    name: "Shadow & Reflection Service",
    description:
      "Natural, drop and mirror shadows and floor reflections that ground products realistically — no studio reshoot required.",
    url: "https://blackfoxdigital.com.bd/shadow-reflection-services",
    provider: { "@id": "https://blackfoxdigital.com.bd/#organization" },
    areaServed: ["United Kingdom", "Germany", "France", "Netherlands", "Italy", "Spain", "Belgium", "Sweden", "Denmark", "Norway"],
    offers: { "@type": "Offer", url: "https://blackfoxdigital.com.bd/take-free-trial", priceSpecification: { "@type": "UnitPriceSpecification", price: 0.45, priceCurrency: "EUR", unitText: "image" } },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: "https://blackfoxdigital.com.bd" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://blackfoxdigital.com.bd/image-post-production-service" },
      { "@type": "ListItem", position: 3, name: "Shadow & Reflection Service", item: "https://blackfoxdigital.com.bd/shadow-reflection-services" },
    ],
  },
];

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <ServicePageComponent serviceId="shadow" />
    </>
  );
}
