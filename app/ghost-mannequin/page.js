import { ServicePage as ServicePageComponent } from "@/components/ServicePage";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata = {
  title: "Ghost Mannequin Service | BLACKFOX DIGITAL",
  description:
    "Ghost mannequin & invisible mannequin service for apparel. 3-D hollow form, neck joints, symmetry correction. €0.85/image. 24h turnaround. Free trial.",
  alternates: { canonical: "https://blackfoxdigital.com.bd/ghost-mannequin" },
  openGraph: {
    title: "Ghost Mannequin Service | BLACKFOX DIGITAL",
    description:
      "Invisible-mannequin compositing for apparel. 3-D hollow form, neck joints, symmetry correction. 24h turnaround. Free trial.",
    url: "https://blackfoxdigital.com.bd/ghost-mannequin",
    siteName: "BLACKFOX DIGITAL",
    images: [{ url: "/ghost-mannequin-hero-after.webp" }],
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <ServicePageComponent serviceId="mannequin" />
      <ServiceSchema
        name="Ghost Mannequin Service"
        description="Ghost mannequin & invisible mannequin service for apparel. 3-D hollow form, neck joints, symmetry correction. €0.85/image. 24h turnaround. Free trial."
        url="https://blackfoxdigital.com.bd/ghost-mannequin"
        priceRange="€0.85 - €1.80/image"
        faqs={[
          {
            q: "How much does ghost mannequin service cost per garment?",
            a: "Ghost mannequin editing starts at €0.85 per image for basic invisible-mannequin compositing and goes up to €1.80 per image for complex multi-part garments requiring neck joint reconstruction and symmetry correction."
          },
          {
            q: "What is ghost mannequin or invisible mannequin photography editing?",
            a: "Ghost mannequin editing composites multiple shots of a garment — worn on a mannequin and shot flat — to remove the mannequin and create a natural 3-D hollow form. It gives clothing a lifelike, professional look without a live model."
          },
          {
            q: "How fast is turnaround for ghost mannequin orders?",
            a: "Standard orders of up to 500 garment images are completed and delivered within 24 hours. Rush same-day delivery is available for urgent e-commerce launches."
          }
        ]}
      />
    </>
  );
}
