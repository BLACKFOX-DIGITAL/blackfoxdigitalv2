/* Free Trial — dedicated conversion page */
function TrialPage({ go, service }) {
  const BF = window.BF;
  const BA = window.BeforeAfter;
  const Icon = window.Icon;
  const [form, setForm] = React.useState({ name: "", email: "", company: "", service: service || "", message: "" });
  const [errs, setErrs] = React.useState({});
  const [files, setFiles] = React.useState([]);
  const [over, setOver] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const inputRef = React.useRef(null);

  React.useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  const set = (k, v) => { setForm((f) => ({ ...f, [k]: v })); setErrs((e) => ({ ...e, [k]: null })); };
  const addFiles = (list) => {
    const arr = Array.from(list).slice(0, 2).map((f) => f.name);
    setFiles((prev) => [...prev, ...arr].slice(0, 2));
  };
  const removeFile = (i) => setFiles((prev) => prev.filter((_, n) => n !== i));

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = "Tell us your name";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) er.email = "Enter a valid email";
    setErrs(er);
    if (Object.keys(er).length) return;
    setSent(true);
    setForm({ name: "", email: "", company: "", service: "", message: "" });
    setFiles([]);
    setTimeout(() => setSent(false), 4200);
  };

  const steps = [
    { n: "01", icon: "free",     t: "Upload 1–2 images", d: "Drop your photos and tell us the look you're after — RAW or JPEG, any service." },
    { n: "02", icon: "retouch",  t: "We edit them free", d: "A dedicated editor retouches to your brief and runs it through our QC desk." },
    { n: "03", icon: "delivery", t: "Review & scale up", d: "Get them back in 24–48h, judge the quality, then roll out only if you're happy." },
  ];
  const chips = ["No credit card", "1–2 images free", "24–48h turnaround", "NDA-secured"];

  return (
    <main className="page-intro trial">
      <div className="shell">
        <div className="crumb">
          <button onClick={() => go("home")}>Home</button><span>/</span><span className="cur">Free Trial</span>
        </div>
      </div>

      {/* hero */}
      <section className="trial-hero">
        <div className="shell">
          <span className="eyebrow">Free Trial</span>
          <h1 className="display trial-h1">Send two images.<br/>See the <span className="red">difference.</span> Free.</h1>
          <p className="lede trial-lede">
            Not sure we're the right editing desk? Don't take our word for it. Send a couple of photos and
            we'll retouch them at no cost — so you can judge our quality before you commit a cent.
          </p>
          <div className="trial-chips">
            {chips.map((c) => (
              <span className="trial-chip" key={c}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* main grid: info + form */}
      <section className="sec" style={{ paddingTop: "clamp(28px,3vw,44px)", paddingBottom: "clamp(64px,9vw,120px)" }}>
        <div className="shell trial-grid">
          {/* left: how it works + proof */}
          <div className="trial-info">
            <span className="eyebrow">How it works</span>
            <div className="trial-steps">
              {steps.map((s) => (
                <div className="tstep" key={s.n}>
                  <span className="tstep-ic"><Icon name={s.icon} size={24} /></span>
                  <div className="tstep-body">
                    <div className="tstep-t"><span className="tstep-n">{s.n}</span>{s.t}</div>
                    <div className="tstep-d">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="trial-proof">
              <div className="trial-proof-ba">
                <BA before={BF.pairs.model.before} after={BF.pairs.model.after} ratio="5 / 3" start={0.5} afterFit="cover" beforeLabel="Your RAW" afterLabel="What we send back" auto autoDelay={500} />
              </div>
              <p className="trial-proof-cap">A real client file — drag to see the before and after.</p>
            </div>

            <ul className="trial-reassure">
              <li><Icon name="quality" size={18} /> Three-step quality control on every image</li>
              <li><Icon name="support" size={18} /> Real humans on Skype, WhatsApp &amp; email, 24/7</li>
              <li><Icon name="free" size={18} /> Files secured by NDA and deleted after delivery</li>
            </ul>
          </div>

          {/* right: form card */}
          <div className="trial-form-wrap">
            <form className="trial-card" onSubmit={submit} noValidate>
              <div className="trial-card-head">
                <h2 className="display">Start your free trial</h2>
                <p>Takes under a minute. We'll reply within two hours.</p>
              </div>

              <div className="row2">
                <div className={"field" + (errs.name ? " err" : "")}>
                  <label>Name</label>
                  <input value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Jane Doe" />
                  {errs.name && <div className="msg">{errs.name}</div>}
                </div>
                <div className={"field" + (errs.email ? " err" : "")}>
                  <label>Email</label>
                  <input value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="jane@brand.com" />
                  {errs.email && <div className="msg">{errs.email}</div>}
                </div>
              </div>

              <div className="row2">
                <div className="field">
                  <label>Company</label>
                  <input value={form.company} onChange={(e) => set("company", e.target.value)} placeholder="Brand or studio" />
                </div>
                <div className="field">
                  <label>Service</label>
                  <select value={form.service} onChange={(e) => set("service", e.target.value)}>
                    <option value="">Choose a service</option>
                    {BF.services.map((s) => <option key={s.id} value={s.short}>{s.short}</option>)}
                  </select>
                </div>
              </div>

              <div className="field">
                <label>Your two images <span style={{ color: "var(--red)", letterSpacing: 0 }}> · free</span></label>
                <div
                  className={"dropzone trial-drop" + (over ? " over" : "")}
                  onClick={() => inputRef.current && inputRef.current.click()}
                  onDragOver={(e) => { e.preventDefault(); setOver(true); }}
                  onDragLeave={() => setOver(false)}
                  onDrop={(e) => { e.preventDefault(); setOver(false); addFiles(e.dataTransfer.files); }}
                >
                  <input ref={inputRef} type="file" multiple accept="image/*" style={{ display: "none" }} onChange={(e) => addFiles(e.target.files)} />
                  <span className="drop-ic">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>
                  </span>
                  <span className="drop-main">Drop images here, or <span style={{ color: "var(--red-ink)", fontWeight: 600 }}>browse</span></span>
                  <span className="drop-sub">JPEG, PNG or RAW · up to 2 files</span>
                </div>
                {files.length > 0 && (
                  <div className="trial-files">
                    {files.map((f, i) => (
                      <span className="trial-file" key={f + i}>
                        {f}
                        <button type="button" onClick={() => removeFile(i)} aria-label="Remove">×</button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="field">
                <label>What should we do? <span style={{ color: "var(--muted)", letterSpacing: 0, fontWeight: 400, textTransform: "none" }}>(optional)</span></label>
                <textarea rows="3" value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="e.g. clean white background, natural skin retouch, match this reference…"></textarea>
              </div>

              <button className="btn btn-primary trial-submit" type="submit">
                Send for free editing
                <svg className="arr" width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <p className="trial-fine">By submitting you agree to our <button type="button" className="inline-link" onClick={() => go("legal", { doc: "terms" })}>Terms</button> &amp; <button type="button" className="inline-link" onClick={() => go("legal", { doc: "privacy" })}>Privacy Policy</button>.</p>
            </form>
          </div>
        </div>
      </section>

      <div className={"toast" + (sent ? " show" : "")}>
        <span className="dot"></span>
        Thanks — your images are in. Expect your free edits within 24–48h.
      </div>
    </main>
  );
}
window.TrialPage = TrialPage;
