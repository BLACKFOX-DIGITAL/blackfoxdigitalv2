/* Home page — mirrors the live site's structure & copy, modernized.
   Hero → Promise band → Our Services → Workflow → Difference → CTA */
function Home({ go }) {
  const BF = window.BF;
  const BA = window.BeforeAfter;
  const Icon = window.Icon;
  const RotatingWord = window.RotatingWord;

  return (
    <main>
      {/* ---------------- HERO SLIDER ---------------- */}
      <HeroSlider go={go} />

      {/* ---------------- TRUST ---------------- */}
      <section className="trust">
        <div className="shell">
          <div className="trust-row">
            <span className="trust-label">Trusted by 600+ brands &amp; studios</span>
            <div className="marquee-mask" style={{ flex: 1, marginLeft: 36 }}>
              <div className="marquee">
                {[...Array(2)].flatMap((_, r) =>
                  ["Northwind","Atelier 9","Vogue Resale","Maison Lux","Cartwright","Studio Ono","Beacon","Marlow & Co"].map((b, i) => (
                    <span className="logo-pill" key={r + "-" + i}>{b}</span>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PROMISE BAND ---------------- */}
      <section className="sec promise-sec">
        <div className="shell">
          <div className="band-head reveal">
            <span className="eyebrow no-rule" style={{ justifyContent: "center", width: "100%", display: "flex" }}>Professional Photo Retouch Service</span>
            <h2 className="display band-title">At your fingertips</h2>
          </div>
          <div className="promise-grid reveal">
            {BF.promises.map((p) => (
              <div className="promise-card" key={p.k}>
                <span className="promise-ic"><Icon name={p.icon} size={30} /></span>
                <div className="promise-t">{p.t}</div>
                <div className="promise-d">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- OUR SERVICES (before/after gallery) ---------------- */}
      <section className="sec" id="services" style={{ background: "var(--surface)", borderBlock: "1px solid var(--line)" }}>
        <div className="shell">
          <div className="band-head reveal">
            <span className="eyebrow no-rule" style={{ justifyContent: "center", width: "100%", display: "flex" }}>Our services</span>
            <h2 className="display band-title">Drag any image</h2>
            <p className="band-sub">Services focused on quality and on-time delivery — quality is our #1 priority. Slide any frame to see the raw shot against our final edit.</p>
          </div>

          <div className="gallery-grid reveal">
            {BF.serviceGallery.map((g, i) => (
              <figure className="gcard" key={g.title + i} onClick={() => go("service", { serviceId: g.sid })}>
                <div className="gcard-media">
                  <BA before={g.before} after={g.after} ratio="447 / 317" start={0.5} afterFit={g.fit} beforeLabel="Before" afterLabel="After" />
                </div>
                <figcaption className="gcard-cap">
                  <span>{g.title}</span>
                  <svg width="14" height="11" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </figcaption>
              </figure>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: "clamp(32px,4vw,52px)" }}>
            <button className="btn btn-dark" onClick={() => go("services")}>
              Image post-production
              <svg className="arr" width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- WORKFLOW ---------------- */}
      <section className="sec" id="process" style={{ background: "var(--bg-2)" }}>
        <div className="shell">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">Workflow</span>
              <h2 className="display">A highly accurate<br/>five-step workflow.</h2>
            </div>
            <p className="lede" style={{ alignSelf: "center" }}>
              From the moment your files land to the moment they're back in your folder — every order
              runs the same tight, quality-checked path.
            </p>
          </div>
          <div className="proc-grid reveal">
            {BF.workflow.map((w) => (
              <div className="proc-step" key={w.k}>
                <div className="pk">{w.k}</div>
                <div className="pt">{w.t}</div>
                <div className="pd">{w.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- DIFFERENCE (showcase + bulk promo) ---------------- */}
      <section className="sec" id="showcase" style={{ background: "var(--ink)", color: "#e7e5df" }}>
        <div className="shell diff-grid">
          <div className="diff-copy reveal">
            <span className="eyebrow no-rule" style={{ color: "#8c887e" }}>The proof</span>
            <h2 className="display diff-title">{BF.difference.title}</h2>
            <p className="diff-sub">{BF.difference.sub}</p>
            {BF.difference.body.map((b, i) => <p className="diff-body" key={i}>{b}</p>)}
            <div className="diff-cta">
              <button className="btn btn-primary" onClick={() => go("gallery")}>
                View gallery
                <svg className="arr" width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button className="btn btn-outline-light" onClick={() => go("contact", { trial: true })}>Free trial</button>
            </div>

            {/* bulk-order promo */}
            <div className="bulk-card">
              <div className="bulk-pct">{BF.difference.bulkPct}<span>off</span></div>
              <div className="bulk-text">
                <div className="bulk-line">{BF.difference.bulkLine}</div>
                <p>{BF.difference.bulkBody}</p>
                <button className="arrowlink bulk-link" onClick={() => go("services")}>
                  See more
                  <svg className="arr" width="14" height="11" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>
          </div>

          <div className="diff-stage reveal">
            <div className="diff-ba">
              <BA
                before={BF.pairs.model.before}
                after={BF.pairs.model.after}
                ratio="4 / 5"
                start={0.5}
                afterFit="cover"
                beforeLabel="Raw"
                afterLabel="Edited"
                auto
                autoDelay={250}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="sec" id="about">
        <div className="shell">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">Why BLACKFOX</span>
              <h2 className="display">A studio built<br/>for volume &amp; care.</h2>
            </div>
            <p className="lede" style={{ alignSelf: "center" }}>
              Founded in Dhaka with a desk in Australia, we run a dedicated team plus an independent
              QC desk — so quality holds even at thousands of images a day.
            </p>
          </div>
          <div className="stats reveal">
            {BF.stats.map((s) => (
              <div className="stat" key={s.l}>
                <div className="n">{s.n}</div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section style={{ padding: "0 0 clamp(64px,9vw,120px)" }}>
        <div className="shell">
          <div className="cta-band reveal">
            <h2 className="display">Try us free.<br/>Send two images.</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
              <p style={{ margin: 0, maxWidth: "34ch", color: "rgba(255,255,255,.9)" }}>
                We'll edit two of your photos at no cost, so you can judge our quality before you commit.
              </p>
              <button className="btn btn-dark" onClick={() => go("contact", { trial: true })}>
                Claim free trial
                <svg className="arr" width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
window.Home = Home;
