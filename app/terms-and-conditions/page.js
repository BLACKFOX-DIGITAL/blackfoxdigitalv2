import { Legal as LegalComponent } from "@/components/FAQLegal";

export const metadata = {
  title: "Terms & Conditions | BLACKFOX DIGITAL",
  description: "The terms and conditions governing use of BLACKFOX DIGITAL services. Covers orders, delivery, revisions, payment, liability and acceptable use.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://blackfoxdigital.com.bd/terms-and-conditions" },
};

export default function Page() {
  return <LegalComponent doc="terms" />;
}
