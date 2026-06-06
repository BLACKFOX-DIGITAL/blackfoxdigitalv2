import { ServicePage as ServicePageComponent } from "@/components/ServicePage";

export const metadata = {
  title: "Model Retouching Service | BLACKFOX DIGITAL",
  description:
    "Glamour and editorial model retouching for fashion and campaign work. Skin, hair, body contour and colour grade. On-brand finish. Free trial.",
  alternates: { canonical: "https://blackfoxdigital.com.bd/model-retouch" },
  openGraph: {
    title: "Model Retouching Service | BLACKFOX DIGITAL",
    description:
      "Glamour and editorial model retouching. Skin, hair, body contour and colour grade. Fashion-grade quality. Free trial.",
    url: "https://blackfoxdigital.com.bd/model-retouch",
    siteName: "BLACKFOX DIGITAL",
    images: [{ url: "/beauty-skin-retouch-after.webp" }],
    type: "website",
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Photo Editing Service",
    image: "https://blackfoxdigital.com.bd/beauty-skin-retouch-after.webp",
    name: "Model Retouch",
    description:
      "Glamour and high-end retouching for fashion, beauty and campaign work. Skin, hair, body contour and colour grading tuned to your brand standard.",
    url: "https://blackfoxdigital.com.bd/model-retouch",
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
      { "@type": "ListItem", position: 3, name: "Model Retouch", item: "https://blackfoxdigital.com.bd/model-retouch" },
    ],
  },
];

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <ServicePageComponent serviceId="model" />
    </>
  );
}
