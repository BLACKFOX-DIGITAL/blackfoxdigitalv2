import { Legal as LegalComponent } from "@/components/FAQLegal";

export const metadata = {
  title: "Privacy Policy",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://blackfoxdigital.com.bd/privacy-policy" },
};

export default function Page() {
  return <LegalComponent doc="privacy" />;
}
