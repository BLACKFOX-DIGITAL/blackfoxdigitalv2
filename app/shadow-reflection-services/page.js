import { ServicePage as ServicePageComponent } from "@/components/ServicePage";
import ServiceSchema from "@/components/ServiceSchema";

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
      <ServiceSchema
        name="Shadow & Reflection Service"
        description="Natural, drop and mirror shadows that ground products without a studio reshoot. Fast turnaround, bulk pricing. Free trial available."
        url="https://blackfoxdigital.com.bd/shadow-reflection-services"
        priceRange="$0.45 - $2.00/image"
        faqs={[
          {
            q: "How much does adding product shadows or reflections cost?",
            a: "Shadow and reflection creation starts at $0.45 per image for a simple drop shadow and goes up to $2.00 per image for complex natural shadows, mirror reflections, or multi-light composites that require manual painting."
          },
          {
            q: "What types of product shadows can you create?",
            a: "We create drop shadows, natural (cast) shadows, soft box shadows, and floor reflections. Each type can be customised for angle, opacity and softness to match your brand style or blend seamlessly with existing imagery."
          },
          {
            q: "How fast is turnaround for shadow and reflection orders?",
            a: "Standard orders of up to 500 images are delivered within 24 hours. Bulk product catalogues and rush orders can be accommodated — contact us for a custom quote and timeline."
          }
        ]}
      />
    </>
  );
}
