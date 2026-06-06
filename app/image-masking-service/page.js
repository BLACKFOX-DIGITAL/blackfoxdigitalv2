import { ServicePage as ServicePageComponent } from "@/components/ServicePage";

export const metadata = {
  title: "Image Masking Service | BLACKFOX DIGITAL",
  description:
    "Alpha and channel masking for hair, fur, smoke and glass. Strand-level detail retained. Any complexity, any volume. Free trial available.",
  alternates: { canonical: "https://blackfoxdigital.com.bd/image-masking-service" },
  openGraph: {
    title: "Image Masking Service | BLACKFOX DIGITAL",
    description:
      "Alpha and channel masking for hair, fur, smoke and glass. Strand-level detail retained. Free trial available.",
    url: "https://blackfoxdigital.com.bd/image-masking-service",
    siteName: "BLACKFOX DIGITAL",
    images: [{ url: "/image-masking-hair-after.webp" }],
    type: "website",
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Photo Editing Service",
    image: "https://blackfoxdigital.com.bd/image-masking-hair-after.webp",
    name: "Image Masking Service",
    description:
      "Alpha and channel masking for hair, fur, smoke and glass subjects. Strand-level detail retained — no lost edges or fringing.",
    url: "https://blackfoxdigital.com.bd/image-masking-service",
    provider: { "@id": "https://blackfoxdigital.com.bd/#organization" },
    areaServed: ["United Kingdom", "Germany", "France", "Netherlands", "Italy", "Spain", "Belgium", "Sweden", "Denmark", "Norway"],
    offers: { "@type": "Offer", url: "https://blackfoxdigital.com.bd/take-free-trial", priceSpecification: { "@type": "UnitPriceSpecification", price: 0.75, priceCurrency: "EUR", unitText: "image" } },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: "https://blackfoxdigital.com.bd" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://blackfoxdigital.com.bd/image-post-production-service" },
      { "@type": "ListItem", position: 3, name: "Image Masking Service", item: "https://blackfoxdigital.com.bd/image-masking-service" },
    ],
  },
];

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <ServicePageComponent serviceId="masking" />
    </>
  );
}
