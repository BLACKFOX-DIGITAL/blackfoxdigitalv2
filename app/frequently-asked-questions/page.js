import { FAQ as FAQComponent } from "@/components/FAQLegal";

export const metadata = {
  title: "Photo Editing FAQ | BLACKFOX DIGITAL",
  description:
    "Answers to common questions about turnaround times, pricing, bulk orders, marketplace compliance, revisions and the free trial.",
  alternates: { canonical: "https://blackfoxdigital.com.bd/frequently-asked-questions" },
  openGraph: {
    title: "Photo Editing FAQ | BLACKFOX DIGITAL",
    description:
      "Answers to common questions about turnaround, pricing, revisions and marketplace compliance.",
    url: "https://blackfoxdigital.com.bd/frequently-asked-questions",
    siteName: "BLACKFOX DIGITAL",
    images: [{ url: "/logo-blackfox.webp" }],
    type: "website",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://blackfoxdigital.com.bd/frequently-asked-questions#webpage",
  url: "https://blackfoxdigital.com.bd/frequently-asked-questions",
  name: "Photo Editing FAQ | BLACKFOX DIGITAL",
  description: "Answers to common questions about turnaround times, pricing, bulk orders, marketplace compliance, revisions and the free trial.",
  isPartOf: { "@id": "https://blackfoxdigital.com.bd/#website" },
  about: { "@id": "https://blackfoxdigital.com.bd/#organization" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://blackfoxdigital.com.bd" },
    { "@type": "ListItem", position: 2, name: "FAQ",  item: "https://blackfoxdigital.com.bd/frequently-asked-questions" },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <FAQComponent />
    </>
  );
}
