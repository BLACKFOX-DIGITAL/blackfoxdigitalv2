import { Legal as LegalComponent } from "@/components/FAQLegal";

export const metadata = {
  title: "Terms & Conditions",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://blackfoxdigital.com.bd/terms-and-conditions" },
};

export default function Page() {
  return <LegalComponent doc="terms" />;
}
