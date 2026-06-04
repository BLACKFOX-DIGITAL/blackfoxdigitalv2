import { ServicePage as ServicePageComponent } from "@/components/ServicePage";

export const metadata = {
  title: "Background Removal & Clipping Path Service | BLACKFOX DIGITAL",
  description:
    "Hand-drawn pen-tool clipping paths and background removal. Pixel-perfect cut-outs for any volume. Transparent, white or custom backgrounds. Free trial.",
  alternates: { canonical: "https://blackfoxdigital.com.bd/background-removal-clippingpath-service" },
  openGraph: {
    title: "Background Removal & Clipping Path Service | BLACKFOX DIGITAL",
    description:
      "Hand-drawn pen-tool clipping paths and background removal. Pixel-perfect cut-outs for any volume. Free trial available.",
    url: "https://blackfoxdigital.com.bd/background-removal-clippingpath-service",
    siteName: "BLACKFOX DIGITAL",
    images: [{ url: "/bg-removal-hero-after.webp" }],
    type: "website",
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Photo Editing Service",
    image: "https://blackfoxdigital.com.bd/bg-removal-hero-after.webp",
    name: "Background Removal & Clipping Path",
    description:
      "Hand-drawn pen-tool clipping paths and background removal. Pixel-perfect cut-outs with transparent, white or custom replacement backgrounds.",
    url: "https://blackfoxdigital.com.bd/background-removal-clippingpath-service",
    provider: { "@id": "https://blackfoxdigital.com.bd/#organization" },
    areaServed: ["United Kingdom", "Germany", "France", "Netherlands", "Italy", "Spain", "Belgium", "Sweden", "Denmark", "Norway"],
    offers: { "@type": "Offer", url: "https://blackfoxdigital.com.bd/take-free-trial", priceSpecification: { "@type": "UnitPriceSpecification", price: 0.25, priceCurrency: "EUR", unitText: "image" } },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: "https://blackfoxdigital.com.bd" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://blackfoxdigital.com.bd/image-post-production-service" },
      { "@type": "ListItem", position: 3, name: "Background Removal & Clipping Path", item: "https://blackfoxdigital.com.bd/background-removal-clippingpath-service" },
    ],
  },
];

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <ServicePageComponent serviceId="clipping" />
    </>
  );
}
