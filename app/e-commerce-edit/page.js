import { ServicePage as ServicePageComponent } from "@/components/ServicePage";
import ServiceSchema from "@/components/ServiceSchema";

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

export default function Page() {
  return (
    <>
      <ServicePageComponent serviceId="ecom" />
      <ServiceSchema
        name="E-Commerce Photo Editing Service"
        description="Amazon, Shopify & eBay-compliant product images. Cropped, aligned, white background. Bulk orders welcome. Free trial available."
        url="https://blackfoxdigital.com.bd/e-commerce-edit"
        priceRange="€0.35 - €0.85/image"
        faqs={[
          {
            q: "How much does e-commerce photo editing cost per image?",
            a: "E-commerce photo editing starts at €0.35 per image for basic background removal and alignment, up to €0.85 per image for complex compositing and full marketplace compliance work. Bulk discounts apply for large catalogues."
          },
          {
            q: "What is e-commerce photo editing and what does it include?",
            a: "E-commerce photo editing prepares product images to meet marketplace specifications (Amazon, Shopify, eBay). It includes background removal to pure white, cropping and alignment to spec, colour correction, and shadow work so images are ready to upload directly."
          },
          {
            q: "How quickly can you edit a batch of e-commerce product photos?",
            a: "Standard batches of up to 500 product images are delivered within 24 hours. For larger catalogues or urgent campaigns, expedited 12-hour turnaround is available on request."
          }
        ]}
      />
    </>
  );
}
