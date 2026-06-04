import { ServicePage as ServicePageComponent } from "@/components/ServicePage";

export const metadata = {
  title: "Beauty & Skin Retouching Service | BLACKFOX DIGITAL",
  description:
    "Frequency-separation skin retouching that keeps natural texture. Blemish removal, dodge & burn, editorial finish. Fashion-grade quality. Free trial.",
  alternates: { canonical: "https://blackfoxdigital.com.bd/beauty-skin" },
  openGraph: {
    title: "Beauty & Skin Retouching Service | BLACKFOX DIGITAL",
    description:
      "Frequency-separation skin retouching. Natural texture, blemish removal, editorial finish. Free trial available.",
    url: "https://blackfoxdigital.com.bd/beauty-skin",
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
    name: "Beauty & Skin Retouch",
    description:
      "Frequency-separation retouching that keeps skin texture natural and editorial. Blemish removal, dodge & burn, and colour grading.",
    url: "https://blackfoxdigital.com.bd/beauty-skin",
    provider: { "@id": "https://blackfoxdigital.com.bd/#organization" },
    areaServed: ["United Kingdom", "Germany", "France", "Netherlands", "Italy", "Spain", "Belgium", "Sweden", "Denmark", "Norway"],
    offers: { "@type": "Offer", url: "https://blackfoxdigital.com.bd/take-free-trial", priceSpecification: { "@type": "UnitPriceSpecification", price: 2.75, priceCurrency: "EUR", unitText: "image" } },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: "https://blackfoxdigital.com.bd" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://blackfoxdigital.com.bd/image-post-production-service" },
      { "@type": "ListItem", position: 3, name: "Beauty & Skin Retouch", item: "https://blackfoxdigital.com.bd/beauty-skin" },
    ],
  },
];

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <ServicePageComponent serviceId="beauty" />
    </>
  );
}
