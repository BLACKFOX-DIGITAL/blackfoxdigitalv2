import { ServicePage as ServicePageComponent } from "@/components/ServicePage";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata = {
  title: "Product Retouching Service | BLACKFOX DIGITAL",
  description:
    "Catalogue-ready product photo retouching. Dust removal, colour accuracy, crisp finish. Bulk orders welcome. Free trial available.",
  alternates: { canonical: "https://blackfoxdigital.com.bd/product-retouch" },
  openGraph: {
    title: "Product Retouching Service | BLACKFOX DIGITAL",
    description:
      "Catalogue-ready product photo retouching. Dust removal, colour accuracy, crisp finish. Bulk orders. Free trial.",
    url: "https://blackfoxdigital.com.bd/product-retouch",
    siteName: "BLACKFOX DIGITAL",
    images: [{ url: "/product-retouch-electronics-after.webp" }],
    type: "website",
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Photo Editing Service",
    image: "https://blackfoxdigital.com.bd/product-retouch-electronics-after.webp",
    name: "Product Retouch",
    description:
      "Catalogue-ready product photo retouching — dust and scratch removal, colour accuracy and crisp finish for e-commerce and print.",
    url: "https://blackfoxdigital.com.bd/product-retouch",
    provider: { "@id": "https://blackfoxdigital.com.bd/#organization" },
    areaServed: ["United Kingdom", "Germany", "France", "Netherlands", "Italy", "Spain", "Belgium", "Sweden", "Denmark", "Norway"],
    offers: { "@type": "Offer", url: "https://blackfoxdigital.com.bd/take-free-trial", priceSpecification: { "@type": "UnitPriceSpecification", price: 0.99, priceCurrency: "EUR", unitText: "image" } },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: "https://blackfoxdigital.com.bd" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://blackfoxdigital.com.bd/image-post-production-service" },
      { "@type": "ListItem", position: 3, name: "Product Retouch", item: "https://blackfoxdigital.com.bd/product-retouch" },
    ],
  },
];

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <ServicePageComponent serviceId="product" />
      <ServiceSchema
        name="Product Retouching Service"
        description="Catalogue-ready product photo retouching. Dust removal, colour accuracy, crisp finish. Bulk orders welcome. Free trial available."
        url="https://blackfoxdigital.com.bd/product-retouch"
        priceRange="$0.49 - $2.50/image"
        faqs={[
          {
            q: "How much does product photo retouching cost per image?",
            a: "Product retouching starts at $0.49 per image for basic dust removal and colour correction, up to $2.50 per image for complex lifestyle or catalogue shots requiring full surface clean-up, colour accuracy and crisp finishing for print or web."
          },
          {
            q: "What is included in product photo retouching?",
            a: "Product retouching covers dust and scratch removal, colour and tone correction, surface clean-up, label and packaging sharpening, and background refinement — making every product image catalogue-ready for e-commerce listings, lookbooks and print."
          },
          {
            q: "How fast is turnaround for product retouching orders?",
            a: "Standard product retouching orders of up to 500 images are delivered within 24 hours. Larger catalogues and rush orders are accommodated — contact us with your volume and deadline for a tailored quote."
          }
        ]}
      />
    </>
  );
}
