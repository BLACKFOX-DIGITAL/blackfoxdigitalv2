/* About · Services overview · Gallery */

function About({ go }) {
  const BF = window.BF;
  const BA = window.BeforeAfter;
  const Icon = window.Icon;

  const whyData = [
    { icon: "quality",  t: "Quality is our first priority", d: "Every file passes a dedicated three-step QC desk before it ships." },
    { icon: "support",  t: "24 / 7 customer support",       d: "Real people on Skype, WhatsApp and email, in every time zone." },
    { icon: "server",   t: "An up-to-date back office",      d: "Modern infrastructure and the latest Adobe Photoshop & Illustrator." },
    { icon: "delivery", t: "On time. Always.",               d: "Typical 24–48h turnaround, with hard deadlines we actually keep." },
    { icon: "lock",     t: "Secure &amp; encrypted",         d: "Encrypted transfer under NDA; client files deleted after delivery." },
  ];

  return (
    <main className="page-intro about2">
      <div className="shell">
        <div className="crumb">
          <button onClick={() => go("home")}>Home</button><span>/</span><span className="cur">Our Company</span>
        </div>
      </div>

      {/* ---------- hero ---------- */}
      <section className="about-hero2">
        <div className="shell">
          <div className="ah2-grid">
            <div className="ah2-copy">
              <span className="eyebrow">Our Company · since 2016</span>
              <h1 className="display ah2-title">The back-end desk<br/>behind <span className="red">great imagery.</span></h1>
              <p className="lede ah2-lede">
                BLACKFOX DIGITAL is a professional image post-production studio. We've grown from five
                designers to a team of 80+, quietly powering the catalogs, lookbooks and campaigns of
                commerce brands, photographers and agencies across Europe, the USA and Australia.
              </p>
              <div className="ah2-cta">
                <button className="btn btn-primary" onClick={() => go("services")}>
                  Our services
                  <svg className="arr" width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button className="arrowlink" onClick={() => go("gallery")}>
                  See the work
                  <svg className="arr" width="14" height="11" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>
            <div className="ah2-media reveal">
              <span className="ah2-badge">Est.<br/><b>2016</b></span>
              <div className="ah2-ba">
                <BA before={BF.pairs.model.before} after={BF.pairs.model.after} ratio="4 / 5" start={0.5} afterFit="cover" beforeLabel="Raw" afterLabel="Edited" auto autoDelay={600} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- stats band ---------- */}
      <section className="about-statband">
        <div className="shell">
          <div className="statband-grid">
            {BF.stats.map((s) => (
              <div className="statband-item" key={s.l}>
                <div className="n display">{s.n}</div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- story ---------- */}
      <section className="sec">
        <div className="shell about-story">
          <div className="about-copy">
            <span className="eyebrow">Our story</span>
            {BF.about.story.map((p, i) => (
              <p key={i} className={"story-p" + (i === 0 ? " lead" : "")}>{p}</p>
            ))}
          </div>
          <div className="about-media reveal">
            <div className="about-media-inner">
              <BA before={BF.pairs.beauty.before} after={BF.pairs.beauty.after} ratio="4 / 5" start={0.5} afterFit="cover" beforeLabel="Raw" afterLabel="Retouched" auto autoDelay={500} />
            </div>
            <div className="about-media-cap">A real client file, start to finish.</div>
          </div>
        </div>
      </section>

      {/* ---------- why us (dark, icon cards) ---------- */}
      <section className="sec about-why">
        <div className="shell">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">Why work with us</span>
              <h2 className="display">Five reasons brands<br/>keep their files here.</h2>
            </div>
            <p className="lede" style={{ alignSelf: "center" }}>
              We treat your images like our own — with the rigor, security and consistency a real
              back office demands.
            </p>
          </div>
          <div className="why2-grid reveal">
            {whyData.map((w, i) => (
              <div className="why2-card" key={i}>
                <span className="why2-ic"><Icon name={w.icon} size={26} /></span>
                <div className="why2-t" dangerouslySetInnerHTML={{ __html: w.t }}></div>
                <div className="why2-d">{w.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- global presence ---------- */}
      <section className="sec" style={{ background: "var(--bg-2)" }}>
        <div className="shell about-global">
          <div className="ag-copy">
            <span className="eyebrow">Global presence</span>
            <h2 className="display" style={{ fontSize: "clamp(32px,4.4vw,60px)", margin: "12px 0 18px" }}>Two studios,<br/>worldwide reach.</h2>
            <p className="lede">
              Headquartered in Dhaka with a desk in Australia, we deliver world-class post-production
              focused on Europe, the USA and Australia — around the clock.
            </p>
          </div>
          <div className="ag-offices">
            {BF.addresses.map((a) => (
              <div className="ag-office" key={a.country}>
                <span className="ag-ic"><Icon name="pin" size={20} /></span>
                <div>
                  <div className="ag-c">{a.country}</div>
                  {a.lines.map((l, i) => <div className="ag-l" key={i}>{l}</div>)}
                  <a className="ag-p" href={"tel:" + a.phone}>{a.phone}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- process ---------- */}
      <section className="sec">
        <div className="shell">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">How it works</span>
              <h2 className="display">From upload to<br/>publish in five steps.</h2>
            </div>
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

      <section style={{ padding: "0 0 clamp(64px,9vw,120px)" }}>
        <div className="shell">
          <div className="cta-band reveal">
            <h2 className="display">Let's edit your<br/>first two free.</h2>
            <button className="btn btn-dark" onClick={() => go("trial")}>
              Start free trial
              <svg className="arr" width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServicesOverview({ go }) {
  const BF = window.BF;
  const BA = window.BeforeAfter;
  return (
    <main className="page-intro">
      <div className="shell">
        <div className="crumb">
          <button onClick={() => go("home")}>Home</button><span>/</span><span className="cur">Services</span>
        </div>
        <div className="svc-ov-hero">
          <div>
            <span className="eyebrow">Image Post-Production</span>
            <h1 className="display" style={{ fontSize: "clamp(46px,7vw,104px)", lineHeight: .92, margin: "14px 0 0" }}>
              Nine services,<br/>one editing desk.
            </h1>
          </div>
          <p className="lede svc-ov-lede">
            Everything your catalog, lookbook or campaign needs — handled by a dedicated team and an
            independent QC desk. Pick a service to see before/afters and what's included.
          </p>
        </div>
      </div>

      <section className="sec" style={{ paddingTop: "clamp(28px,4vw,48px)" }}>
        <div className="shell">
          <div className="svc-cards">
            {BF.services.map((s) => (
              <button className="svc-card reveal" key={s.id} onClick={() => go("service", { serviceId: s.id })}>
                <div className="svc-card-media">
                  <BA before={BF.pairs[s.pair].before} after={BF.pairs[s.pair].after} ratio="4 / 3" start={0.5} afterFit={s.fit} beforeLabel="Before" afterLabel="After" />
                </div>
                <div className="svc-card-body">
                  <span className="svc-card-no">{s.no}</span>
                  <span className="svc-card-name">{s.short}</span>
                  <span className="svc-card-blurb">{s.blurb}</span>
                  <span className="svc-card-go">
                    View service
                    <svg width="14" height="11" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(20px,3vw,40px) 0 clamp(64px,9vw,120px)" }}>
        <div className="shell">
          <div className="cta-band reveal">
            <h2 className="display">Not sure which<br/>you need?</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
              <p style={{ margin: 0, maxWidth: "34ch", color: "rgba(255,255,255,.9)" }}>
                Send us a couple of sample images and we'll recommend the right treatment — and edit them free.
              </p>
              <button className="btn btn-dark" onClick={() => go("contact", { trial: true })}>
                Get a recommendation
                <svg className="arr" width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Gallery({ go }) {
  const BF = window.BF;
  const BA = window.BeforeAfter;
  const cats = [{ name: "All", items: null }, ...BF.gallery];
  const [cat, setCat] = React.useState("All");

  const active = cats.find((c) => c.name === cat) || cats[0];
  let pairs;
  if (!active.items) {
    // All — unique across categories
    const seen = new Set();
    pairs = [];
    BF.gallery.forEach((c) => c.items.forEach((p) => { if (!seen.has(p)) { seen.add(p); pairs.push(p); } }));
  } else {
    pairs = active.items;
  }

  return (
    <main className="page-intro">
      <div className="shell">
        <div className="crumb">
          <button onClick={() => go("home")}>Home</button><span>/</span><span className="cur">Gallery</span>
        </div>
        <div className="gal-hero">
          <div>
            <span className="eyebrow">Portfolio</span>
            <h1 className="display" style={{ fontSize: "clamp(46px,7vw,104px)", lineHeight: .92, margin: "14px 0 0" }}>
              Drag any frame.<br/>See the <span className="red">work.</span>
            </h1>
          </div>
          <p className="lede gal-lede">
            A selection of real client files across every service. Slide the handle on any image to
            compare the raw shot against our final delivery.
          </p>
        </div>

        <div className="gal-filter">
          {cats.map((c) => (
            <button key={c.name} className={"gal-chip" + (c.name === cat ? " on" : "")} onClick={() => setCat(c.name)}>{c.name}</button>
          ))}
        </div>
      </div>

      <section className="sec" style={{ paddingTop: "clamp(20px,3vw,32px)" }}>
        <div className="shell">
          <div className="gal-grid">
            {pairs.map((p, i) => {
              const svc = BF.services.find((s) => s.pair === p);
              const fit = (p === "clip" || p === "mannequin" || p === "shadow" || p === "jewelry" || p === "product") ? "contain" : "cover";
              return (
                <div className="gal-item reveal" key={p + i}>
                  <BA before={BF.pairs[p].before} after={BF.pairs[p].after} ratio="4 / 3" start={0.5} afterFit={fit} beforeLabel="Before" afterLabel="After" />
                  {svc && (
                    <button className="gal-tag" onClick={() => go("service", { serviceId: svc.id })}>{svc.short}</button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(12px,2vw,28px) 0 clamp(64px,9vw,120px)" }}>
        <div className="shell">
          <div className="cta-band reveal">
            <h2 className="display">Want your photos<br/>in this gallery?</h2>
            <button className="btn btn-dark" onClick={() => go("contact", { trial: true })}>
              Send a free trial
              <svg className="arr" width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { About, ServicesOverview, Gallery });
