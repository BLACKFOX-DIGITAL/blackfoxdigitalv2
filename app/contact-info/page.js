import { Contact as ContactComponent } from "@/components/Contact";

export const metadata = {
  title: "Contact BLACKFOX DIGITAL | Photo Editing Enquiries",
  description:
    "Get in touch with BLACKFOX DIGITAL. Studio in Dhaka, Bangladesh. Serving e-commerce brands across Europe. 24/7 support via email, Skype and WhatsApp.",
  alternates: { canonical: "https://blackfoxdigital.com.bd/contact-info" },
  openGraph: {
    title: "Contact BLACKFOX DIGITAL",
    description:
      "Get in touch with BLACKFOX DIGITAL. 24/7 support via email, Skype and WhatsApp.",
    url: "https://blackfoxdigital.com.bd/contact-info",
    siteName: "BLACKFOX DIGITAL",
    images: [{ url: "/logo-blackfox.webp" }],
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",    item: "https://blackfoxdigital.com.bd" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://blackfoxdigital.com.bd/contact-info" },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://blackfoxdigital.com.bd/contact-info#webpage",
  url: "https://blackfoxdigital.com.bd/contact-info",
  name: "Contact BLACKFOX DIGITAL",
  description: "Get in touch with BLACKFOX DIGITAL. 24/7 support via email, Skype and WhatsApp.",
  isPartOf: { "@id": "https://blackfoxdigital.com.bd/#website" },
  about: { "@id": "https://blackfoxdigital.com.bd/#organization" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ContactComponent />
    </>
  );
}
