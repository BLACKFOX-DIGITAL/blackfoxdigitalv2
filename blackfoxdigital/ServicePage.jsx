/* Service detail page */
function ServicePage({ go, serviceId }) {
  const BF = window.BF;
  const BA = window.BeforeAfter;
  const [cur, setCur] = React.useState(serviceId || "ecom");

  React.useEffect(() => { if (serviceId) setCur(serviceId); }, [serviceId]);
  React.useEffect(() => { window.scrollTo({ top: 0 }); }, [cur]);

  const list = BF.services;
  const idx = Math.max(0, list.findIndex((s) => s.id === cur));
  const svc = list[idx] || list[0];
  const next = list[(idx + 1) % list.length];

  const pickService = (s) => go("service", { serviceId: s.id });

  return (
    <main className="page-intro">
      <div className="shell">
        {/* breadcrumb */}
        <div className="crumb">
          <button onClick={() => go("home")}>Home</button>
          <span>/</span>
          <button onClick={() => go("services")}>Services</button>
          <span>/</span>
          <span className="cur">{svc.short}</span>
        </div>

        <div className="svc-hero">
          <div>
            <span className="eyebrow">Service {svc.no}</span>
            <h1 className="display" style={{ whiteSpace: "pre-line" }}>{svc.name}</h1>
            <p className="lede">{svc.long}</p>
            <div className="hero-foot">
              <button className="btn btn-primary" onClick={() => go("contact", { trial: true, service: svc.short })}>
                Free trial on this
                <svg className="arr" width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button className="arrowlink" onClick={() => go("contact")}>Get a quote
                <svg className="arr" width="14" height="11" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
          <div className="reveal" style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 30px 80px rgba(20,18,12,.18)", border: "1px solid var(--line)" }}>
            <BA before={BF.pairs[svc.pair].before} after={BF.pairs[svc.pair].after} ratio="4 / 3" start={0.5} afterFit={svc.fit} beforeLabel="Raw" afterLabel="Edited" auto autoDelay={400} />
          </div>
        </div>
      </div>

      {/* body: sidebar + features */}
      <section className="sec" style={{ paddingTop: "clamp(40px,5vw,64px)" }}>
        <div className="shell svc-body">
          <aside className="svc-side svc-aside-hide">
            <span className="eyebrow no-rule" style={{ display: "block", marginBottom: 14 }}>All services</span>
            <div className="svc-nav-list">
              {list.map((s) => (
                <button key={s.id} className={s.id === cur ? "on" : ""} onClick={() => pickService(s)}>
                  <span className="n">{s.no}</span>{s.short}
                </button>
              ))}
            </div>
          </aside>

          <div>
            <span className="eyebrow">Included</span>
            <h2 className="display" style={{ fontSize: "clamp(30px,4vw,54px)", margin: "12px 0 32px" }}>What you get</h2>
            <div className="feature-grid">
              {svc.features.map((f) => (
                <div className="feature" key={f[0]}>
                  <div className="ft">{f[0]}</div>
                  <div className="fd">{f[1]}</div>
                </div>
              ))}
            </div>

            {/* process recap */}
            <div style={{ marginTop: 56 }}>
              <span className="eyebrow">The workflow</span>
              <h2 className="display" style={{ fontSize: "clamp(30px,4vw,54px)", margin: "12px 0 28px" }}>How an order runs</h2>
              <div className="proc-grid">
                {BF.workflow.map((w) => (
                  <div className="proc-step" key={w.k}>
                    <div className="pk">{w.k}</div>
                    <div className="pt">{w.t}</div>
                    <div className="pd">{w.d}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cta-band reveal" style={{ marginTop: 64 }}>
              <h2 className="display">See it on your<br/>own images.</h2>
              <button className="btn btn-dark" onClick={() => go("contact", { trial: true, service: svc.short })}>
                Send 2 free
                <svg className="arr" width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* next service */}
      <section className="next-svc" onClick={() => pickService(next)}>
        <div className="shell next-svc-inner">
          <span className="eyebrow no-rule">Next service</span>
          <div className="next-row">
            <span className="next-no">{next.no}</span>
            <span className="display next-name">{next.short}</span>
            <span className="next-go">
              <svg viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
window.ServicePage = ServicePage;
