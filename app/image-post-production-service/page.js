import { ServicesOverview as ServicesOverviewComponent } from "@/components/Pages";

export const metadata = {
  title: "Image Post-Production Services",
  description:
    "Professional image editing services: clipping path, ghost mannequin, masking, retouch and more. Hand-crafted quality, bulk pricing, free trial.",
  alternates: { canonical: "https://blackfoxdigital.com.bd/image-post-production-service" },
  openGraph: {
    title: "Image Post-Production Services | BLACKFOX DIGITAL",
    description:
      "Professional image editing services: clipping path, ghost mannequin, masking, retouch and more. Hand-crafted quality, bulk pricing, free trial.",
    url: "https://blackfoxdigital.com.bd/image-post-production-service",
    siteName: "BLACKFOX DIGITAL",
    images: [{ url: "/logo-blackfox.webp" }],
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",     item: "https://blackfoxdigital.com.bd" },
    { "@type": "ListItem", position: 2, name: "Services",  item: "https://blackfoxdigital.com.bd/image-post-production-service" },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicesOverviewComponent />
    </>
  );
}
