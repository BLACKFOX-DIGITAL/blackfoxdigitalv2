"use client";
import React, { useEffect, useState, useRef } from "react";
import { useBFRouter } from "./utils";
import { BF } from "./data";
import { BeforeAfter as BA } from "./BeforeAfter";

/* Service detail page */
export function ServicePage({ serviceId }) {
  const { go } = useBFRouter();

  
  
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
            <BA before={BF.pairs[svc.pair].before} after={BF.pairs[svc.pair].after} ratio="4 / 3" start={0.5} afterFit={svc.fit} beforeLabel="Raw" afterLabel="Edited" beforeAlt={`${svc.short} — raw unedited image`} afterAlt={`${svc.short} — professionally edited result`} priority auto autoDelay={400} sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
        </div>
      </div>

      {/* definition intro — crawlable, server-rendered */}
      {svc.intro && (
        <section className="sec" style={{ paddingTop: "clamp(40px,5vw,64px)", paddingBottom: 0 }}>
          <div className="shell">
            <div style={{ maxWidth: "72ch" }}>
              <h2 className="display" style={{ fontSize: "clamp(24px,3vw,38px)", margin: "0 0 16px" }}>
                What is {svc.short.toLowerCase()}?
              </h2>
              <p style={{ lineHeight: 1.65, marginBottom: 20 }}>{svc.intro.definition}</p>
              {svc.intro.whyItMatters && (
                <>
                  <h3 style={{ fontSize: "clamp(18px,2vw,24px)", margin: "0 0 10px", fontWeight: 600 }}>
                    Why does it matter for e-commerce?
                  </h3>
                  <p style={{ lineHeight: 1.65 }}>{svc.intro.whyItMatters}</p>
                </>
              )}
            </div>
          </div>
        </section>
      )}

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
            <h2 className="display" style={{ fontSize: "clamp(30px,4vw,54px)", margin: "12px 0 32px" }}>What does {svc.short.toLowerCase()} include?</h2>
            <div className="feature-grid">
              {svc.features.map((f) => (
                <div className="feature" key={f[0]}>
                  <div className="ft">{f[0]}</div>
                  <div className="fd">{f[1]}</div>
                </div>
              ))}
            </div>

            {/* who this is for */}
            {svc.whoFor && (
              <div style={{ marginTop: 56 }}>
                <span className="eyebrow">Who this is for</span>
                <p className="lede" style={{ marginTop: 12, maxWidth: "60ch" }}>{svc.whoFor}</p>
              </div>
            )}

            {/* process recap */}
            <div style={{ marginTop: 56 }}>
              <span className="eyebrow">The workflow</span>
              <h2 className="display" style={{ fontSize: "clamp(30px,4vw,54px)", margin: "12px 0 28px" }}>How does an order work?</h2>
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

            {/* service-specific Q&A */}
            {svc.faq && svc.faq.length > 0 && (
              <div style={{ marginTop: 56 }}>
                <span className="eyebrow">Common questions</span>
                <h2 className="display" style={{ fontSize: "clamp(30px,4vw,54px)", margin: "12px 0 28px" }}>
                  Common questions about {svc.short.toLowerCase()}
                </h2>
                <div className="svc-faq">
                  {svc.faq.map((f, i) => (
                    <div className="svc-faq-item" key={i}>
                      <h3 className="svc-faq-q">{f.q}</h3>
                      <div className="svc-faq-a">{f.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="cta-band reveal" style={{ marginTop: 64 }}>
              <h2 className="display">See it on your<br/>own images.</h2>
              <button className="btn btn-dark" onClick={() => go("contact", { trial: true, service: svc.short })}>
                Send 5 free
                <svg className="arr" width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* related services */}
      {svc.related && svc.related.length > 0 && (
        <section className="sec" style={{ background: "var(--bg-2)", paddingTop: "clamp(40px,5vw,64px)", paddingBottom: "clamp(40px,5vw,64px)" }}>
          <div className="shell">
            <span className="eyebrow">Related services</span>
            <h2 className="display" style={{ fontSize: "clamp(28px,3.5vw,48px)", margin: "12px 0 28px" }}>Often ordered together</h2>
            <div className="related-grid">
              {svc.related.map((id) => {
                const r = list.find((s) => s.id === id);
                if (!r) return null;
                return (
                  <button key={r.id} className="related-card" onClick={() => pickService(r)}>
                    <span className="related-no">{r.no}</span>
                    <span className="related-name">{r.short}</span>
                    <span className="related-blurb">{r.blurb}</span>
                    <span className="related-go">
                      View service
                      <svg width="14" height="11" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

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

