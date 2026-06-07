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

export default function Page() {
  return (
    <>
      <ServicePageComponent serviceId="masking" />
      <ServiceSchema
        name="Image Masking Service"
        description="Alpha and channel masking for hair, fur, smoke and glass. Strand-level detail retained. Any complexity, any volume. Free trial available."
        url="https://blackfoxdigital.com.bd/image-masking-service"
        priceRange="€0.75 - €1.20/image"
        faqs={[
          {
            q: "How much does professional image masking service cost?",
            a: "Image masking starts at €0.75 per image for subjects with standard hair or fur, and goes up to €1.20 per image for complex dense fur, glass, smoke, or multiple subjects requiring advanced channel or alpha masking."
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
