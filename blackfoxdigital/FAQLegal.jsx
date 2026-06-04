/* FAQ · Legal (Privacy / Terms / Cookies) */

function FAQ({ go }) {
  const BF = window.BF;
  const [open, setOpen] = React.useState(0);
  return (
    <main className="page-intro">
      <div className="shell">
        <div className="crumb">
          <button onClick={() => go("home")}>Home</button><span>/</span><span className="cur">FAQ</span>
        </div>
        <div className="faq-hero">
          <div>
            <span className="eyebrow">Frequently Asked</span>
            <h1 className="display" style={{ fontSize: "clamp(46px,7vw,104px)", lineHeight: .92, margin: "14px 0 0" }}>
              Questions,<br/>answered.
            </h1>
          </div>
          <p className="lede faq-lede">
            Everything about turnaround, security, revisions and pricing. Still stuck? We reply to email
            and chat in under two hours.
          </p>
        </div>
      </div>

      <section className="sec" style={{ paddingTop: "clamp(24px,3vw,40px)" }}>
        <div className="shell faq-wrap">
          <div className="faq-list">
            {BF.faq.map((f, i) => {
              const isOpen = open === i;
              return (
                <div className={"faq-item" + (isOpen ? " open" : "")} key={i}>
                  <button className="faq-q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                    <span className="faq-q-n">{String(i + 1).padStart(2, "0")}</span>
                    <span className="faq-q-t">{f.q}</span>
                    <span className="faq-ic" aria-hidden="true">
                      <svg viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
                    </span>
                  </button>
                  <div className="faq-a-wrap">
                    <div className="faq-a">{f.a}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <aside className="faq-aside">
            <div className="faq-aside-card">
              <div className="faq-aside-h display">Still have<br/>a question?</div>
              <p>Talk to a real person on Skype, WhatsApp or email — any time zone, around the clock.</p>
              <button className="btn btn-primary" onClick={() => go("contact")}>
                Contact us
                <svg className="arr" width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button className="arrowlink" style={{ marginTop: 18 }} onClick={() => go("contact", { trial: true })}>
                Or send a free trial
                <svg className="arr" width="14" height="11" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Legal({ go, doc }) {
  const data = (window.LEGAL || {})[doc] || window.LEGAL.privacy;
  const tabs = [
    { id: "privacy", label: "Privacy Policy" },
    { id: "terms",   label: "Terms & Conditions" },
    { id: "cookies", label: "Cookies Policy" },
  ];

  return (
    <main className="page-intro legal">
      <div className="shell">
        <div className="crumb">
          <button onClick={() => go("home")}>Home</button><span>/</span><span className="cur">{data.title}</span>
        </div>
        <div className="legal-head">
          <span className="eyebrow">Legal</span>
          <h1 className="display" style={{ fontSize: "clamp(40px,6vw,84px)", lineHeight: .94, margin: "12px 0 14px" }}>{data.title}</h1>
          <div className="legal-updated">{data.updated}</div>
        </div>

        <div className="legal-tabs">
          {tabs.map((t) => (
            <button key={t.id} className={"legal-tab" + (t.id === doc ? " on" : "")} onClick={() => go("legal", { doc: t.id })}>{t.label}</button>
          ))}
        </div>
      </div>

      <section className="sec" style={{ paddingTop: "clamp(24px,3vw,40px)", paddingBottom: "clamp(64px,9vw,120px)" }}>
        <div className="shell legal-body">
          <article className="legal-prose">
            {data.intro && <p className="legal-intro">{data.intro}</p>}
            {data.blocks.map((b, i) => {
              if (b.t === "h")   return <h2 key={i} className="legal-h">{b.x}</h2>;
              if (b.t === "sub") return <h3 key={i} className="legal-sub">{b.x}</h3>;
              if (b.t === "num") return (
                <div className="legal-num" key={i}>
                  <h2 className="legal-h"><span className="legal-num-n">{b.n}.</span>{b.x}</h2>
                  <p>{b.b}</p>
                </div>
              );
              return <p key={i}>{b.x}</p>;
            })}
          </article>

          <aside className="legal-aside">
            <div className="legal-aside-card">
              <div className="legal-aside-h">Questions about this policy?</div>
              <a className="legal-aside-mail" href={"mailto:" + window.BF.email}>{window.BF.email}</a>
              <button className="arrowlink" style={{ marginTop: 16 }} onClick={() => go("contact")}>
                Contact us
                <svg className="arr" width="14" height="11" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { FAQ, Legal });
