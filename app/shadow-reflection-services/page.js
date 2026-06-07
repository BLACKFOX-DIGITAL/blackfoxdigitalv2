import { ServicePage as ServicePageComponent } from "@/components/ServicePage";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata = {
  title: "Shadow & Reflection Service | BLACKFOX DIGITAL",
  description:
    "Natural, drop and mirror shadows that ground products without a studio reshoot. Fast turnaround, bulk pricing. Free trial available.",
  alternates: { canonical: "https://blackfoxdigital.com.bd/shadow-reflection-services" },
  openGraph: {
    title: "Shadow & Reflection Service | BLACKFOX DIGITAL",
    description:
      "Natural, drop and mirror shadows that ground products without a studio reshoot. Fast turnaround. Free trial.",
    url: "https://blackfoxdigital.com.bd/shadow-reflection-services",
    siteName: "BLACKFOX DIGITAL",
    images: [{ url: "/shadow-reflection-hero-after.webp" }],
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <ServicePageComponent serviceId="shadow" />
      <ServiceSchema
        name="Shadow & Reflection Service"
        description="Natural, drop and mirror shadows that ground products without a studio reshoot. Fast turnaround, bulk pricing. Free trial available."
        url="https://blackfoxdigital.com.bd/shadow-reflection-services"
        priceRange="€0.45 - €0.75/image"
        faqs={[
          {
            q: "How much does adding product shadows or reflections cost?",
            a: "Shadow and reflection creation starts at €0.45 per image for a simple drop shadow and goes up to €0.75 per image for complex natural shadows or mirror reflections that require manual compositing."
          },
          {
            q: "What types of product shadows can you create?",
            a: "We create drop shadows, natural (cast) shadows, soft box shadows, and floor reflections. Each type can be customised for angle, opacity and softness to match your brand style or blend seamlessly with existing imagery."
          },
          {
            q: "How fast is turnaround for shadow and reflection orders?",
            a: "Standard orders of up to 500 images are delivered within 24 hours. Bulk product catalogues and rush orders can be accommodated — contact us for a custom quote and timeline."
          }
        ]}
      />
    </>
  );
}
