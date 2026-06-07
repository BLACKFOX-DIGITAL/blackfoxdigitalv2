"use client";
import React, { useEffect, useState, useRef } from "react";
import { useBFRouter } from "./utils";
import { BF } from "./data";
import { Icon } from "./Icons";

/* Contact page */
export function Contact({ service }) {
  const { go } = useBFRouter();

  
  
  const [form, setForm] = React.useState({ name: "", email: "", company: "", service: service || "", message: "" });
  const [errs, setErrs] = React.useState({});
  const [files, setFiles] = React.useState([]);
  const [over, setOver] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const inputRef = React.useRef(null);

  React.useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  const set = (k, v) => { setForm((f) => ({ ...f, [k]: v })); setErrs((e) => ({ ...e, [k]: null })); };
  const addFiles = (list) => {
    const arr = Array.from(list).slice(0, 6);
    setFiles((prev) => [...prev, ...arr].slice(0, 6));
  };
  const removeFile = (i) => setFiles((prev) => prev.filter((_, n) => n !== i));

  const submit = async (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = "Tell us your name";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) er.email = "Enter a valid email";
    if (!form.message.trim()) er.message = "A quick brief helps us reply well";
    setErrs(er);
    if (Object.keys(er).length) return;

    const formData = new FormData();
    Object.keys(form).forEach(k => formData.append(k, form[k]));
    files.forEach(f => formData.append("files", f));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData
      });
      if (!res.ok) throw new Error("Failed to send");
      
      setSent(true);
      setForm({ name: "", email: "", company: "", service: "", message: "" });
      setFiles([]);
      setTimeout(() => setSent(false), 4200);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };

  const methods = [
    { icon: "mail",  k: "Email us",  v: BF.email,  href: "mailto:" + BF.email, sub: "Replies in under 2 hours" },
    { icon: "phone", k: "Call us",   v: BF.phone,  href: "tel:" + BF.phone,    sub: BF.phone2 },
    { icon: "chat",  k: "Live chat", v: "Skype · WhatsApp", href: null,        sub: "Online 24/7, every time zone" },
  ];

  return (
    <main className="page-intro contactp">
      <div className="shell">
        <div className="crumb">
          <button onClick={() => go("home")}>Home</button><span>/</span><span className="cur">Contact</span>
        </div>
      </div>

      {/* hero */}
      <section className="contact-hero">
        <div className="shell">
          <span className="eyebrow">Contact</span>
          <h1 className="display contact-h1">Let's talk<br/>about your <span className="red">images.</span></h1>
          <p className="lede contact-hero-lede">
            Tell us about your volume, turnaround and the look you're after — we'll reply with a tailored
            quote and a sample. Or just say hello; a real person always answers.
          </p>
        </div>
      </section>

      {/* quick methods */}
      <section className="shell">
        <div className="contact-methods">
          {methods.map((m) => {
            const inner = (
              <React.Fragment>
                <span className="cm-ic"><Icon name={m.icon} size={24} /></span>
                <span className="cm-k">{m.k}</span>
                <span className="cm-v">{m.v}</span>
                <span className="cm-sub">{m.sub}</span>
              </React.Fragment>
            );
            return m.href
              ? <a className="cmethod" key={m.k} href={m.href}>{inner}</a>
              : <div className="cmethod" key={m.k}>{inner}</div>;
          })}
        </div>
      </section>

      {/* main: form + offices */}
      <section className="sec" style={{ paddingTop: "clamp(36px,4vw,56px)", paddingBottom: "clamp(64px,9vw,120px)" }}>
        <div className="shell contact-main">
          {/* form card */}
          <form className="trial-card" onSubmit={submit} noValidate>
            <div className="trial-card-head">
              <h2 className="display">Send us a message</h2>
              <p>Fill this in and we'll be back within two hours.</p>
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

            <div className={"field" + (errs.message ? " err" : "")}>
              <label>Project brief</label>
              <textarea rows="4" value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Volume per month, turnaround needs, the look you're after…"></textarea>
              {errs.message && <div className="msg">{errs.message}</div>}
            </div>

            <div className="field">
              <label>Sample images <span style={{ color: "var(--muted)", letterSpacing: 0, fontWeight: 400, textTransform: "none" }}>(optional)</span></label>
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
                <span className="drop-sub">JPEG, PNG or RAW · up to 6 files</span>
              </div>
              {files.length > 0 && (
                <div className="trial-files">
                  {files.map((f, i) => (
                    <span className="trial-file" key={f.name + i}>{f.name}<button type="button" onClick={() => removeFile(i)} aria-label="Remove">×</button></span>
                  ))}
                </div>
              )}
            </div>

            <button className="btn btn-primary trial-submit" type="submit">
              Send message
              <svg className="arr" width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </form>

          {/* offices + reassurance */}
          <aside className="contact-side">
            <div className="resp-card">
              <span className="resp-dot"></span>
              <div>
                <div className="resp-t">Average reply: under 2 hours</div>
                <p>Real humans, around the clock — never an auto-responder.</p>
              </div>
            </div>

            <div className="office-list">
              {BF.addresses.map((a) => (
                <div className="office" key={a.country}>
                  <span className="office-ic"><Icon name="pin" size={20} /></span>
                  <div>
                    <div className="office-c">{a.country}</div>
                    {a.lines.map((l, i) => <div className="office-l" key={i}>{l}</div>)}
                    <a className="office-p" href={"tel:" + a.phone}>{a.phone}</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-hours">
              <div className="ch-k">Studio hours</div>
              <div className="ch-v">24 / 7 — we cover every time zone</div>
            </div>

            <button className="btn btn-dark contact-trial-btn" onClick={() => go("trial")}>
              Or send a free trial
              <svg className="arr" width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </aside>
        </div>
      </section>

      <div className={"toast" + (sent ? " show" : "")}>
        <span className="dot"></span>
        Thanks — we've got it. Expect a reply shortly.
      </div>
    </main>
  );
}

