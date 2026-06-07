import { ServicePage as ServicePageComponent } from "@/components/ServicePage";
import ServiceSchema from "@/components/ServiceSchema";

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
      <ServiceSchema
        name="Image Masking Service"
        description="Alpha and channel masking for hair, fur, smoke and glass. Strand-level detail retained. Any complexity, any volume. Free trial available."
        url="https://blackfoxdigital.com.bd/image-masking-service"
        priceRange="$0.49 - $3.00/image"
        faqs={[
          {
            q: "How much does professional image masking service cost?",
            a: "Image masking starts at $0.49 per image for subjects with well-defined edges, and goes up to $3.00 per image for complex hair, fur, smoke, or translucent glass subjects that require advanced channel or alpha masking."
          },
          {
            q: "What is image masking and when is it better than a clipping path?",
            a: "Image masking uses alpha channels or colour channels to isolate subjects with fine, semi-transparent, or complex edges — such as hair, fur, feathers, smoke and glass — where a hard-edged clipping path would destroy detail. It preserves every strand and wisp for a natural, seamless cut-out."
          },
          {
            q: "How fast is turnaround for image masking orders?",
            a: "Standard masking orders of up to 500 images are delivered within 24 hours. Complex high-detail subjects are typically completed within 48 hours, with rush delivery available on request."
          }
        ]}
      />
    </>
  );
}
