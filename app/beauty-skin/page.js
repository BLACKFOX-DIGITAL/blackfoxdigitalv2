import { ServicePage as ServicePageComponent } from "@/components/ServicePage";
import ServiceSchema from "@/components/ServiceSchema";

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
      <ServiceSchema
        name="Beauty & Skin Retouching Service"
        description="Frequency-separation skin retouching that keeps natural texture. Blemish removal, dodge & burn, editorial finish. Fashion-grade quality. Free trial."
        url="https://blackfoxdigital.com.bd/beauty-skin"
        priceRange="$2.00 - $8.00/image"
        faqs={[
          {
            q: "How much does beauty and skin retouching cost per photo?",
            a: "Beauty and skin retouching is priced from $2.00 per image for light blemish removal and tone balancing up to $8.00 per image for full frequency-separation retouching with dodge & burn, colour grading and editorial finishing."
          },
          {
            q: "What is frequency-separation skin retouching?",
            a: "Frequency-separation is a professional retouching technique that separates the colour and tone information of skin from its texture. This lets retouchers smooth and even skin tone while preserving every natural pore and texture detail, giving a realistic rather than plastic finish."
          },
          {
            q: "How fast is turnaround for beauty retouching orders?",
            a: "Standard orders of up to 500 images are delivered within 24 hours. Complex editorial or high-fashion retouching with detailed briefs may take 48 hours; rush delivery is available on request."
          }
        ]}
      />
    </>
  );
}
