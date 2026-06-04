import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main style={{ padding: "80px 24px", textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
      <h1 style={{ fontSize: "4rem", fontWeight: 700, marginBottom: "0.25em" }}>404</h1>
      <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
        This page doesn&apos;t exist. You may have followed a broken link.
      </p>
      <nav style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
        <Link href="/" style={{ padding: "0.6em 1.4em", background: "var(--red)", color: "#fff", borderRadius: 4, textDecoration: "none", fontWeight: 600 }}>
          Home
        </Link>
        <Link href="/image-post-production-service" style={{ padding: "0.6em 1.4em", border: "2px solid var(--red)", color: "var(--red)", borderRadius: 4, textDecoration: "none", fontWeight: 600 }}>
          All Services
        </Link>
        <Link href="/take-free-trial" style={{ padding: "0.6em 1.4em", border: "2px solid currentColor", borderRadius: 4, textDecoration: "none", fontWeight: 600 }}>
          Free Trial
        </Link>
        <Link href="/contact-info" style={{ padding: "0.6em 1.4em", border: "2px solid currentColor", borderRadius: 4, textDecoration: "none", fontWeight: 600 }}>
          Contact
        </Link>
      </nav>
    </main>
  );
}
