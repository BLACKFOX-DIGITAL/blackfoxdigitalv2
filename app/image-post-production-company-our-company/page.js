import { About as AboutComponent } from "@/components/Pages";

export const metadata = {
  title: "About Us — Image Post-Production Since 2016",
  description:
    "80+ in-house designers since 2016. Serving e-commerce brands across Europe — UK, Germany, France, the Netherlands and beyond. QC-assured photo editing.",
  alternates: { canonical: "https://blackfoxdigital.com.bd/image-post-production-company-our-company" },
  openGraph: {
    title: "About BLACKFOX DIGITAL",
    description:
      "80+ in-house designers since 2016. Professional, QC-assured photo editing for Europe.",
    url: "https://blackfoxdigital.com.bd/image-post-production-company-our-company",
    siteName: "BLACKFOX DIGITAL",
    images: [{ url: "/logo-blackfox.webp" }],
    type: "website",
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://blackfoxdigital.com.bd/image-post-production-company-our-company#webpage",
    url: "https://blackfoxdigital.com.bd/image-post-production-company-our-company",
    name: "About BLACKFOX DIGITAL",
    about: { "@id": "https://blackfoxdigital.com.bd/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://blackfoxdigital.com.bd/#founder-raihan",
    name: "Mohammed Raihan",
    jobTitle: "Co-founder",
    worksFor: { "@id": "https://blackfoxdigital.com.bd/#organization" },
    sameAs: ["https://www.linkedin.com/in/mohammed-raihan"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://blackfoxdigital.com.bd/#founder-mahedi",
    name: "Tanvir Mahedi",
    jobTitle: "Co-founder",
    worksFor: { "@id": "https://blackfoxdigital.com.bd/#organization" },
    sameAs: ["https://www.linkedin.com/in/tanvir-mahedi"],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",  item: "https://blackfoxdigital.com.bd" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://blackfoxdigital.com.bd/image-post-production-company-our-company" },
    ],
  },
];

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <AboutComponent />
    </>
  );
}
