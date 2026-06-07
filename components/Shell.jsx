"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BF } from "./data";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [svcOpen, setSvcOpen] = React.useState(false);
  const [solid, setSolid] = React.useState(false);
  const pathname = usePathname() || "";

  React.useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/image-post-production-service", svc: true },
    { label: "Gallery", path: "/gallery" },
    { label: "About", path: "/image-post-production-company-our-company" },
    { label: "FAQ", path: "/frequently-asked-questions" },
    { label: "Contact", path: "/contact-info" },
  ];

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 80 }}>
      {/* utility bar */}
      <div style={{ background: "var(--ink)", color: "#cfcdc6", fontSize: 13 }}>
        <div className="shell" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 40 }}>
          <div style={{ display: "flex", gap: 22, alignItems: "center", letterSpacing: ".02em", whiteSpace: "nowrap" }}>
            <span className="util-hide">Back-end studio for your image-editing needs</span>
            <a href={"tel:" + BF.phone} style={{ color: "#fff", whiteSpace: "nowrap" }}>{BF.phone}</a>
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <a href="https://wa.me/8801924482868" target="_blank" rel="noopener noreferrer" style={{ color: "#cfcdc6", fontSize: 12, letterSpacing: ".04em" }} className="util-soc">WhatsApp</a>
            <a href="skype:blackfoxdigital?chat" style={{ color: "#cfcdc6", fontSize: 12, letterSpacing: ".04em" }} className="util-soc">Skype</a>
            <a href="https://www.instagram.com/blackfoxdigital" target="_blank" rel="noopener noreferrer" style={{ color: "#cfcdc6", fontSize: 12, letterSpacing: ".04em" }} className="util-soc">Instagram</a>
            <a href="https://www.linkedin.com/company/blackfoxdigital" target="_blank" rel="noopener noreferrer" style={{ color: "#cfcdc6", fontSize: 12, letterSpacing: ".04em" }} className="util-soc">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* main bar */}
      <div style={{
        background: solid ? "rgba(250,250,248,.86)" : "var(--bg)",
        backdropFilter: solid ? "blur(12px)" : "none",
        borderBottom: "1px solid var(--line)",
        transition: "background .3s",
      }}>
        <div className="shell" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <Link href="/" aria-label="BLACKFOX DIGITAL home">
            <Image src="/logo-blackfox.webp" alt="BLACKFOX DIGITAL" width={200} height={40} priority style={{ width: "auto", height: 32 }} />
          </Link>

          <nav className="mainnav">
            {nav.map((item) => {
              const isServiceDetail = BF.services.some(s => s.url === pathname);
              const active = item.path === pathname || (item.svc && (pathname === "/image-post-production-service" || isServiceDetail));
              
              if (item.svc) {
                return (
                  <div key={item.label} className="navwrap"
                       onMouseEnter={() => setSvcOpen(true)} onMouseLeave={() => setSvcOpen(false)}>
                    <Link href={item.path} className={"navlink" + (active ? " on" : "")}>
                      {item.label}
                      <svg width="9" height="6" viewBox="0 0 9 6" style={{ marginLeft: 6 }}><path d="M1 1l3.5 3.5L8 1" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round"/></svg>
                    </Link>
                    <div className={"megamenu" + (svcOpen ? " open" : "")}>
                      <div className="mega-grid">
                        {BF.services.map((s) => (
                          <Link key={s.id} href={s.url} className="mega-item" onClick={() => setSvcOpen(false)}>
                            <span className="mega-no">{s.no}</span>
                            <span className="mega-name">{s.short}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link key={item.label} href={item.path} className={"navlink" + (active ? " on" : "")}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <Link href="/take-free-trial" className="btn btn-primary main-cta">
              Free Trial
              <svg className="arr" width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
              <span style={{ transform: open ? "translateY(5px) rotate(45deg)" : "none" }}></span>
              <span style={{ opacity: open ? 0 : 1 }}></span>
              <span style={{ transform: open ? "translateY(-5px) rotate(-45deg)" : "none" }}></span>
            </button>
          </div>
        </div>
      </div>

      {/* mobile drawer */}
      <div className={"drawer" + (open ? " open" : "")}>
        {nav.map((item) => (
          <Link key={item.label} href={item.path} className="drawer-link" onClick={() => setOpen(false)}>{item.label}</Link>
        ))}
        <div className="drawer-svc">
          {BF.services.map((s) => (
            <Link key={s.id} href={s.url} onClick={() => setOpen(false)}>{s.short}</Link>
          ))}
        </div>
        <Link href="/take-free-trial" className="btn btn-primary" style={{ marginTop: 8 }} onClick={() => setOpen(false)}>Free Trial</Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "#bdbab2" }}>
      <div className="shell" style={{ paddingTop: 80, paddingBottom: 40 }}>
        <div className="foot-top">
          <div style={{ maxWidth: 420 }}>
            <div className="display" style={{ fontSize: "clamp(38px,5vw,64px)", color: "#fff", lineHeight: .9 }}>
              Let's make<br/>your images<br/><span style={{ color: "var(--red)" }}>flawless.</span>
            </div>
            <Link href="/take-free-trial" className="btn btn-primary" style={{ marginTop: 28 }}>
              Start a free trial
              <svg className="arr" width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>

          <div className="foot-cols">
            <div>
              <div className="foot-h">Services</div>
              {BF.services.slice(0, 6).map((s) => (
                <Link key={s.id} href={s.url}>{s.short}</Link>
              ))}
            </div>
            <div>
              <div className="foot-h">Studio</div>
              <Link href="/image-post-production-company-our-company">About us</Link>
              <Link href="/image-post-production-service">All services</Link>
              <a href="https://theblackfoxstudio.com" target="_blank" rel="noopener noreferrer">International Studio →</a>
              <Link href="/pricing">Pricing</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/frequently-asked-questions">FAQ</Link>
              <Link href="/contact-info">Contact</Link>
            </div>
            <div>
              <div className="foot-h">Get in touch</div>
              <a href={"mailto:" + BF.email}>{BF.email}</a>
              <a href={"tel:" + BF.phone}>{BF.phone}</a>
              <Link href="/contact-info">Dhaka, Bangladesh</Link>
            </div>
          </div>
        </div>

        <hr className="hr" style={{ background: "rgba(255,255,255,.12)", margin: "48px 0 24px" }} />
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} BLACKFOX DIGITAL. All rights reserved.</span>
          <span style={{ display: "flex", gap: 20 }}>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-and-conditions">Terms</Link>
            <Link href="/cookies-policy">Cookies</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
