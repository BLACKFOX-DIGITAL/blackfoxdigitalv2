import { ServicePage as ServicePageComponent } from "@/components/ServicePage";
import ServiceSchema from "@/components/ServiceSchema";

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

export default function Page() {
  return (
    <>
      <ServicePageComponent serviceId="model" />
      <ServiceSchema
        name="Model Retouching Service"
        description="Glamour and editorial model retouching for fashion and campaign work. Skin, hair, body contour and colour grade. On-brand finish. Free trial."
        url="https://blackfoxdigital.com.bd/model-retouch"
        priceRange="€3.50+/image"
        faqs={[
          {
            q: "How much does model retouching cost per photo?",
            a: "Model retouching starts at €3.50 per image. Contact us for a quote on full high-end editorial retouching including frequency-separation skin work, hair refinement, body contouring and colour grading to brand standard."
          },
          {
            q: "What is model retouching and what does it cover?",
            a: "Model retouching is high-end post-processing for fashion, beauty and campaign photography. It includes skin retouching, hair flyaway removal, body contour refinement, clothing wrinkle reduction and full colour grading — all delivered to your brand guide or reference image."
          },
          {
            q: "How fast is turnaround for model retouching orders?",
            a: "Standard orders of up to 500 model images are delivered within 24 hours. Complex editorial shoots with detailed look-and-feel briefs are typically completed within 48 hours, with same-day rush available for campaign deadlines."
          }
        ]}
      />
    </>
  );
}
