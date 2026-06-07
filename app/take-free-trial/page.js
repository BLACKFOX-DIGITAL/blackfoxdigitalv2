import { TrialPage as TrialPageComponent } from "@/components/Trial";

export const metadata = {
  title: "Free Photo Editing Trial — 5 Images Free",
  description:
    "Send up to 5 images and receive a professional edit free. No payment, no commitment. Judge our quality before you place a single order.",
  alternates: { canonical: "https://blackfoxdigital.com.bd/take-free-trial" },
  openGraph: {
    title: "Free Trial — Photo Editing | BLACKFOX DIGITAL",
    description:
      "Send up to 5 images and receive a professional edit free. No payment, no commitment.",
    url: "https://blackfoxdigital.com.bd/take-free-trial",
    siteName: "BLACKFOX DIGITAL",
    images: [{ url: "/logo-blackfox.webp" }],
    type: "website",
  },
};

const freeTrialSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Free Photo Editing Trial",
  description: "Send up to 5 images and receive a professional edit completely free — no payment, no commitment. Judge quality before placing any order.",
  url: "https://blackfoxdigital.com.bd/take-free-trial",
  provider: { "@id": "https://blackfoxdigital.com.bd/#organization" },
  areaServed: ["United Kingdom", "Germany", "France", "Netherlands", "Italy", "Spain", "Belgium", "Sweden", "Denmark", "Norway"],
  offers: {
    "@type": "Offer",
    url: "https://blackfoxdigital.com.bd/take-free-trial",
    price: 0,
    priceCurrency: "EUR",
    description: "Up to 5 images edited free. No credit card required.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",       item: "https://blackfoxdigital.com.bd" },
    { "@type": "ListItem", position: 2, name: "Free Trial", item: "https://blackfoxdigital.com.bd/take-free-trial" },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(freeTrialSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <TrialPageComponent />
    </>
  );
}
