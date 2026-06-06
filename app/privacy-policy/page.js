import { Legal as LegalComponent } from "@/components/FAQLegal";

export const metadata = {
  title: "Privacy Policy | BLACKFOX DIGITAL",
  description: "Read the BLACKFOX DIGITAL privacy policy. Learn how we collect, use and protect your personal data in line with GDPR and applicable data protection law.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://blackfoxdigital.com.bd/privacy-policy" },
};

export default function Page() {
  return <LegalComponent doc="privacy" />;
}
