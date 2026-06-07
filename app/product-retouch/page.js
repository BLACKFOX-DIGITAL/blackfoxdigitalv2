import { ServicePage as ServicePageComponent } from "@/components/ServicePage";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata = {
  title: "Product Retouching Service",
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

export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://blackfoxdigital.com.bd" },
      { "@type": "ListItem", position: 2, name: "Product Retouching Service", item: "https://blackfoxdigital.com.bd/product-retouch" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageComponent serviceId="product" />
      <ServiceSchema
        name="Product Retouching Service"
        description="Catalogue-ready product photo retouching. Dust removal, colour accuracy, crisp finish. Bulk orders welcome. Free trial available."
        url="https://blackfoxdigital.com.bd/product-retouch"
        priceRange="€0.99+/image"
        faqs={[
          {
            q: "How much does product photo retouching cost per image?",
            a: "Product retouching starts at €0.99 per image for dust removal and colour correction. Contact us for a quote on complex lifestyle or catalogue shots requiring full surface clean-up, colour accuracy and crisp finishing for print or web."
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
