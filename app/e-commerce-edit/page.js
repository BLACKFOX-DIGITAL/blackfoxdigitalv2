import { ServicePage as ServicePageComponent } from "@/components/ServicePage";

export const metadata = {
  title: "E-commerce Photo Editing Service | BLACKFOX DIGITAL",
  description:
    "Amazon, Shopify & eBay-compliant product images. Cropped, aligned, white background. Bulk orders welcome. Free trial available.",
  alternates: { canonical: "https://blackfoxdigital.com.bd/e-commerce-edit" },
  openGraph: {
    title: "E-commerce Photo Editing Service | BLACKFOX DIGITAL",
    description:
      "Amazon, Shopify & eBay-compliant product images. Cropped, aligned, white background. Bulk orders welcome. Free trial available.",
    url: "https://blackfoxdigital.com.bd/e-commerce-edit",
    siteName: "BLACKFOX DIGITAL",
    images: [{ url: "/ecommerce-jacket-after.webp" }],
    type: "website",
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Photo Editing Service",
    image: "https://blackfoxdigital.com.bd/ecommerce-jacket-after.webp",
    name: "E-commerce Image Editing",
    description:
      "Marketplace-ready product image editing — cropped, aligned, white background and spec-compliant at scale for Amazon, Shopify and eBay.",
    url: "https://blackfoxdigital.com.bd/e-commerce-edit",
    provider: { "@id": "https://blackfoxdigital.com.bd/#organization" },
    areaServed: ["United Kingdom", "Germany", "France", "Netherlands", "Italy", "Spain", "Belgium", "Sweden", "Denmark", "Norway"],
    offers: { "@type": "Offer", url: "https://blackfoxdigital.com.bd/take-free-trial", priceSpecification: { "@type": "UnitPriceSpecification", price: 0.35, priceCurrency: "EUR", unitText: "image" } },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: "https://blackfoxdigital.com.bd" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://blackfoxdigital.com.bd/image-post-production-service" },
      { "@type": "ListItem", position: 3, name: "E-commerce Image Editing", item: "https://blackfoxdigital.com.bd/e-commerce-edit" },
    ],
  },
];

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <ServicePageComponent serviceId="ecom" />
    </>
  );
}
