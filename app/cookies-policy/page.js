import { Legal as LegalComponent } from "@/components/FAQLegal";

export const metadata = {
  title: "Cookies Policy",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://blackfoxdigital.com.bd/cookies-policy" },
};

export default function Page() {
  return <LegalComponent doc="cookies" />;
}
