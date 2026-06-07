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

export default function Page() {
  return (
    <>
      <ServicePageComponent serviceId="beauty" />
      <ServiceSchema
        name="Beauty & Skin Retouching Service"
        description="Frequency-separation skin retouching that keeps natural texture. Blemish removal, dodge & burn, editorial finish. Fashion-grade quality. Free trial."
        url="https://blackfoxdigital.com.bd/beauty-skin"
        priceRange="€2.75+/image"
        faqs={[
          {
            q: "How much does beauty and skin retouching cost per photo?",
            a: "Beauty and skin retouching starts from €2.75 per image for light blemish removal and tone balancing. Contact us for a quote on full frequency-separation retouching with dodge & burn, colour grading and editorial finishing."
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
