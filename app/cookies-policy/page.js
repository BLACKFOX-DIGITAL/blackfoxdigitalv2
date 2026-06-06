import { Legal as LegalComponent } from "@/components/FAQLegal";

export const metadata = {
  title: "Cookies Policy | BLACKFOX DIGITAL",
  description: "How BLACKFOX DIGITAL uses cookies on its website. Details on essential, analytics and preference cookies, plus how to manage your cookie settings.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://blackfoxdigital.com.bd/cookies-policy" },
};

export default function Page() {
  return <LegalComponent doc="cookies" />;
}
