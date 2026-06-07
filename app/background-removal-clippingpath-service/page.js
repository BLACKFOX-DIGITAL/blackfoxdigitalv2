import { ServicePage as ServicePageComponent } from "@/components/ServicePage";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata = {
  title: "Background Removal & Clipping Path | BLACKFOX DIGITAL",
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
      <ServiceSchema
        name="Background Removal & Clipping Path Service"
        description="Hand-drawn pen-tool clipping paths and background removal. Pixel-perfect cut-outs for any volume. Transparent, white or custom backgrounds. Free trial."
        url="https://blackfoxdigital.com.bd/background-removal-clippingpath-service"
        priceRange="$0.25 - $2.00/image"
        faqs={[
          {
            q: "How much does background removal and clipping path service cost?",
            a: "Pricing starts at $0.25 per image for simple subjects and goes up to $2.00 per image for complex multi-path work. Volume discounts are available for bulk orders."
          },
          {
            q: "What is a clipping path and when do I need it?",
            a: "A clipping path is a hand-drawn vector outline (pen tool path) used to isolate a product or subject from its background. You need it when you want a clean transparent, white, or custom replacement background for e-commerce listings, catalogues, or ad creatives."
          },
          {
            q: "How fast is the turnaround for background removal orders?",
            a: "Standard orders of up to 500 images are delivered within 24 hours. Rush delivery within 6–12 hours is available on request for urgent batches."
          }
        ]}
      />
    </>
  );
}
