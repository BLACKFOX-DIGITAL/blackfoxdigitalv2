/* Header + Footer shell */

function Header({ go, page }) {
  const [open, setOpen] = React.useState(false);   // mobile menu
  const [svcOpen, setSvcOpen] = React.useState(false);
  const [solid, setSolid] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "Home", page: "home" },
    { label: "Services", page: "services", svc: true },
    { label: "Gallery", page: "gallery" },
    { label: "About", page: "about" },
    { label: "FAQ", page: "faq" },
    { label: "Contact", page: "contact" },
  ];

  const goTo = (item) => {
    setOpen(false); setSvcOpen(false);
    if (item.hash) { go(item.page, { hash: item.hash }); }
    else go(item.page);
  };

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 80 }}>
      {/* utility bar */}
      <div style={{ background: "var(--ink)", color: "#cfcdc6", fontSize: 13 }}>
        <div className="shell" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 40 }}>
          <div style={{ display: "flex", gap: 22, alignItems: "center", letterSpacing: ".02em", whiteSpace: "nowrap" }}>
            <span className="util-hide">Back-end studio for your image-editing needs</span>
            <a href={"tel:" + window.BF.phone} style={{ color: "#fff", whiteSpace: "nowrap" }}>{window.BF.phone}</a>
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            {["Skype", "WhatsApp", "Instagram", "LinkedIn"].map((s) => (
              <a key={s} href="#" onClick={(e)=>e.preventDefault()} style={{ color: "#cfcdc6", fontSize: 12, letterSpacing: ".04em" }} className="util-soc">{s}</a>
            ))}
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
          <a href="#" onClick={(e) => { e.preventDefault(); go("home"); }} aria-label="BLACKFOX DIGITAL home">
            <img src="public/logo-digital.png" alt="BLACKFOX DIGITAL" style={{ height: 26, width: "auto" }} />
          </a>

          <nav className="mainnav">
            {nav.map((item) => {
              const active = (item.page === page) || (item.svc && (page === "service" || page === "services"));
              if (item.svc) {
                return (
                  <div key={item.label} className="navwrap"
                       onMouseEnter={() => setSvcOpen(true)} onMouseLeave={() => setSvcOpen(false)}>
                    <button className={"navlink" + (active ? " on" : "")} onClick={() => goTo(item)}>
                      {item.label}
                      <svg width="9" height="6" viewBox="0 0 9 6" style={{ marginLeft: 6 }}><path d="M1 1l3.5 3.5L8 1" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round"/></svg>
                    </button>
                    <div className={"megamenu" + (svcOpen ? " open" : "")}>
                      <div className="mega-grid">
                        {window.BF.services.map((s) => (
                          <button key={s.id} className="mega-item" onClick={() => { setSvcOpen(false); go("service", { serviceId: s.id }); }}>
                            <span className="mega-no">{s.no}</span>
                            <span className="mega-name">{s.short}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <button key={item.label} className={"navlink" + (active && !item.hash ? " on" : "")} onClick={() => goTo(item)}>
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <button className="btn btn-primary main-cta" onClick={() => go("contact", { trial: true })}>
              Free Trial
              <svg className="arr" width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
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
          <button key={item.label} className="drawer-link" onClick={() => goTo(item)}>{item.label}</button>
        ))}
        <div className="drawer-svc">
          {window.BF.services.map((s) => (
            <button key={s.id} onClick={() => { setOpen(false); go("service", { serviceId: s.id }); }}>{s.short}</button>
          ))}
        </div>
        <button className="btn btn-primary" style={{ marginTop: 8 }} onClick={() => { setOpen(false); go("contact", { trial: true }); }}>Free Trial</button>
      </div>
    </header>
  );
}

function Footer({ go }) {
  return (
    <footer style={{ background: "var(--ink)", color: "#bdbab2" }}>
      <div className="shell" style={{ paddingTop: 80, paddingBottom: 40 }}>
        <div className="foot-top">
          <div style={{ maxWidth: 420 }}>
            <div className="display" style={{ fontSize: "clamp(38px,5vw,64px)", color: "#fff", lineHeight: .9 }}>
              Let's make<br/>your images<br/><span style={{ color: "var(--red)" }}>flawless.</span>
            </div>
            <button className="btn btn-primary" style={{ marginTop: 28 }} onClick={() => go("contact", { trial: true })}>
              Start a free trial
              <svg className="arr" width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>

          <div className="foot-cols">
            <div>
              <div className="foot-h">Services</div>
              {window.BF.services.slice(0, 6).map((s) => (
                <a key={s.id} href="#" onClick={(e) => { e.preventDefault(); go("service", { serviceId: s.id }); }}>{s.short}</a>
              ))}
            </div>
            <div>
              <div className="foot-h">Studio</div>
              <a href="#" onClick={(e) => { e.preventDefault(); go("about"); }}>About us</a>
              <a href="#" onClick={(e) => { e.preventDefault(); go("services"); }}>All services</a>
              <a href="#" onClick={(e) => { e.preventDefault(); go("gallery"); }}>Gallery</a>
              <a href="#" onClick={(e) => { e.preventDefault(); go("faq"); }}>FAQ</a>
              <a href="#" onClick={(e) => { e.preventDefault(); go("contact"); }}>Contact</a>
            </div>
            <div>
              <div className="foot-h">Get in touch</div>
              <a href={"mailto:" + window.BF.email}>{window.BF.email}</a>
              <a href={"tel:" + window.BF.phone}>{window.BF.phone}</a>
              <a href="#" onClick={(e)=>{ e.preventDefault(); go("contact", { trial: true }); }}>Dhaka, BD · MacGregor, AU</a>
            </div>
          </div>
        </div>

        <hr className="hr" style={{ background: "rgba(255,255,255,.12)", margin: "48px 0 24px" }} />
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} BLACKFOX DIGITAL. All rights reserved.</span>
          <span style={{ display: "flex", gap: 20 }}>
            <a href="#" onClick={(e)=>{ e.preventDefault(); go("legal", { doc: "privacy" }); }}>Privacy</a>
            <a href="#" onClick={(e)=>{ e.preventDefault(); go("legal", { doc: "terms" }); }}>Terms</a>
            <a href="#" onClick={(e)=>{ e.preventDefault(); go("legal", { doc: "cookies" }); }}>Cookies</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Header, Footer });
