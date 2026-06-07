import { Home as HomeComponent } from "@/components/Home";

export const metadata = {
  title: {
    absolute: "BLACKFOX DIGITAL | Image Post-Production Services",
  },
  description:
    "Marketplace-ready photo editing at scale. Clipping path, ghost mannequin, retouch and more. 80+ in-house designers. Free trial available.",
  alternates: { canonical: "https://blackfoxdigital.com.bd" },
  openGraph: {
    title: "BLACKFOX DIGITAL | Image Post-Production Services",
    description:
      "Marketplace-ready photo editing at scale. Clipping path, ghost mannequin, retouch and more. 80+ in-house designers. Free trial available.",
    url: "https://blackfoxdigital.com.bd",
    siteName: "BLACKFOX DIGITAL",
    images: [{ url: "/logo-blackfox.webp" }],
    type: "website",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://blackfoxdigital.com.bd/#website",
  url: "https://blackfoxdigital.com.bd",
  name: "BLACKFOX DIGITAL",
  description: "Marketplace-ready image post-production services: clipping path, ghost mannequin, image masking, beauty retouch, product retouch and more.",
  publisher: { "@id": "https://blackfoxdigital.com.bd/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://blackfoxdigital.com.bd/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const founderSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://blackfoxdigital.com.bd/#founder-raihan",
    name: "Mohammed Raihan",
    jobTitle: "Co-founder & Head of Production",
    email: "raihan@blackfoxdigital.com.bd",
    sameAs: ["https://www.linkedin.com/in/raihan90"],
    worksFor: { "@id": "https://blackfoxdigital.com.bd/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://blackfoxdigital.com.bd/#founder-mahedi",
    name: "Tanvir Mahedi",
    jobTitle: "Co-founder & Client Relations",
    email: "shakkhor@blackfoxdigital.com.bd",
    sameAs: ["https://www.linkedin.com/in/shakkhor666/"],
    worksFor: { "@id": "https://blackfoxdigital.com.bd/#organization" },
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      {founderSchemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <HomeComponent />
    </>
  );
}
