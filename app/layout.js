import { Saira_Condensed, Archivo } from "next/font/google";
import "../styles/styles.css";
import "../styles/ui.css";
import "../styles/pages.css";
import "../styles/hero-slider.css";
import "./globals.css";

import { Header, Footer } from "@/components/Shell";
import { RevealWrapper } from "@/components/RevealWrapper";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": "https://blackfoxdigital.com.bd/#organization",
  name: "BLACKFOX DIGITAL",
  url: "https://blackfoxdigital.com.bd",
  logo: {
    "@type": "ImageObject",
    url: "https://blackfoxdigital.com.bd/logo-blackfox.webp",
    width: 828,
    height: 166,
  },
  foundingDate: "2016",
  description:
    "Marketplace-ready image post-production services: clipping path, ghost mannequin, image masking, beauty retouch, product retouch and more. 80+ in-house designers.",
  email: "info@blackfoxdigital.com.bd",
  telephone: "+8801924482868",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 80 },
  priceRange: "€€",
  areaServed: ["United Kingdom", "Germany", "France", "Netherlands", "Italy", "Spain", "Belgium", "Sweden", "Denmark", "Norway"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: "+8801924482868",
    email: "info@blackfoxdigital.com.bd",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "BD",
    streetAddress: "House 560, Road 08",
    addressLocality: "Adabor",
    addressRegion: "Dhaka",
    postalCode: "1207",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.75820,
    longitude: 90.36271,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Image Post-Production Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-commerce Image Editing", url: "https://blackfoxdigital.com.bd/e-commerce-edit" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Background Removal & Clipping Path", url: "https://blackfoxdigital.com.bd/background-removal-clippingpath-service" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ghost Mannequin", url: "https://blackfoxdigital.com.bd/ghost-mannequin" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Image Masking", url: "https://blackfoxdigital.com.bd/image-masking-service" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shadow & Reflection", url: "https://blackfoxdigital.com.bd/shadow-reflection-services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Beauty & Skin Retouch", url: "https://blackfoxdigital.com.bd/beauty-skin" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Model Retouch", url: "https://blackfoxdigital.com.bd/model-retouch" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product Retouch", url: "https://blackfoxdigital.com.bd/product-retouch" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Jewelry Retouch", url: "https://blackfoxdigital.com.bd/jewelry-retouch" } },
    ],
  },
  founder: [
    { "@type": "Person", "@id": "https://blackfoxdigital.com.bd/#founder-raihan", name: "Mohammed Raihan", email: "raihan@blackfoxdigital.com.bd", sameAs: "https://www.linkedin.com/in/raihan90" },
    { "@type": "Person", "@id": "https://blackfoxdigital.com.bd/#founder-mahedi", name: "Tanvir Mahedi",    email: "shakkhor@blackfoxdigital.com.bd", sameAs: "https://www.linkedin.com/in/shakkhor666/" },
  ],
  sameAs: [
    "https://www.facebook.com/blackfoxdigital",
    "https://www.linkedin.com/company/blackfoxdigital",
    "https://www.youtube.com/@blackfoxdigital",
  ],
};

const saira = Saira_Condensed({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://blackfoxdigital.com.bd"),
  title: {
    default: "BLACKFOX DIGITAL | Image Post-Production Services",
    template: "%s | BLACKFOX DIGITAL",
  },
  description:
    "Marketplace-ready image editing at scale. Serving e-commerce brands across Europe. Clipping path, retouch, ghost mannequin and more.",
  openGraph: {
    siteName: "BLACKFOX DIGITAL",
    type: "website",
  },
  other: {
    "article:modified_time": "2026-06-04",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${saira.variable} ${archivo.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body style={{
        "--red": "#EE3A39",
        "--red-ink": "#EE3A39",
        "--display": `"Saira Condensed", "Arial Narrow", sans-serif`,
        "--body": `"Archivo", "Helvetica Neue", Arial, sans-serif`
      }}>
        <Header />
        {children}
        <Footer />
        <RevealWrapper />
      </body>
    </html>
  );
}
