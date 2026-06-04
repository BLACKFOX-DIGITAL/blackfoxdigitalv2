"use client";
import React, { useEffect, useState, useRef } from "react";
import { useBFRouter } from "./utils";
import { BF } from "./data";
import { HeroSlider } from "./HeroSlider";
import { BeforeAfter as BA } from "./BeforeAfter";
import { Icon } from "./Icons";
import { RotatingWord } from "./Icons";

/* Home page — mirrors the live site's structure & copy, modernized.
   Hero → Promise band → Our Services → Workflow → Difference → CTA */
export function Home() {
  const { go } = useBFRouter();
  const sliderRef = useRef(null);

  // Auto-slide for reviews
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    
    let interval;
    const startAutoSlide = () => {
      interval = setInterval(() => {
        const cardWidth = el.querySelector('.testi-card')?.offsetWidth || 300;
        const scrollAmount = cardWidth + 20; // card width + gap
        
        // If reached the end, scroll to start
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }, 3500);
    };

    startAutoSlide();
    
    // Pause on interaction
    const pause = () => clearInterval(interval);
    el.addEventListener("mouseenter", pause);
    el.addEventListener("touchstart", pause, { passive: true });
    
    const resume = () => { clearInterval(interval); startAutoSlide(); };
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchend", resume);
    
    return () => {
      clearInterval(interval);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("touchstart", pause, { passive: true });
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("touchend", resume);
    };
  }, []);

  const slideLeft = () => {
    const el = sliderRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('.testi-card')?.offsetWidth || 300;
    el.scrollBy({ left: -(cardWidth + 20), behavior: 'smooth' });
  };

  const slideRight = () => {
    const el = sliderRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('.testi-card')?.offsetWidth || 300;
    el.scrollBy({ left: cardWidth + 20, behavior: 'smooth' });
  };

  return (
    <main>
      {/* ---------------- HERO SLIDER ---------------- */}
      <HeroSlider go={go} />

      {/* ---------------- TRUST ---------------- */}
      <section className="trust">
        <div className="shell">
          <div className="trust-row">
            <div className="marquee-mask" style={{ flex: 1 }}>
              <div className="marquee">
                {[...Array(3)].flatMap((_, r) =>
                  [
                    { icon: "quality",  label: "80+ in-house designers" },
                    { icon: "delivery", label: "24–48h turnaround" },
                    { icon: "free",     label: "Free trial — no commitment" },
                    { icon: "price",    label: "Since 2016" },
                    { icon: "support",  label: "24/7 support" },
                    { icon: "quality",  label: "3-step quality control" },
                  ].map((item, i) => (
                    <span className="logo-pill" key={r + "-" + i}>
                      <Icon name={item.icon} size={14} />
                      {item.label}
                    </span>
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
                  <BA before={g.before} after={g.after} ratio="447 / 317" start={0.5} afterFit={g.fit} beforeLabel="Before" afterLabel="After" beforeAlt={`${g.title} — before editing`} afterAlt={`${g.title} — after editing`} sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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

      {/* ---------------- TRUST STATS ---------------- */}
      <section className="sec" style={{ background: "var(--bg-2)", borderBottom: "1px solid var(--line)" }}>
        <div className="shell">
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "clamp(24px,4vw,48px)", padding: "clamp(40px,5vw,64px) 0" }}>
            {BF.trustStats.map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div className="display" style={{ fontSize: "clamp(40px,6vw,72px)", fontWeight: 700, lineHeight: 1 }}>{s.value}</div>
                <div style={{ marginTop: 8, opacity: 0.6, fontSize: "clamp(13px,1.4vw,15px)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
              </div>
            ))}
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
                beforeAlt="Model photo — raw unedited shot"
                afterAlt="Model photo — professionally retouched result"
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
              Founded in Dhaka, serving e-commerce brands across Europe, we run a dedicated team plus an independent
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

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="sec" style={{ background: "var(--bg-2)" }}>
        <div className="shell">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow">Client Reviews</span>
              <h2 className="display">Trusted by 500+<br/>brands worldwide.</h2>
            </div>
            <p className="lede" style={{ alignSelf: "center", maxWidth: "420px", margin: 0 }}>
              Fashion labels, e-commerce brands, photographers and agencies — across the UK, Germany, France, the Netherlands, Italy and beyond.
            </p>
          </div>
          <div className="reveal" style={{ position: "relative", width: "100%" }}>
            <button 
              onClick={slideLeft} 
              className="btn outline" 
              style={{ position: "absolute", left: "-24px", top: "50%", transform: "translateY(-50%)", zIndex: 10, padding: 0, width: "48px", height: "48px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg)", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} 
              aria-label="Previous review"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={slideRight} 
              className="btn outline" 
              style={{ position: "absolute", right: "-24px", top: "50%", transform: "translateY(-50%)", zIndex: 10, padding: 0, width: "48px", height: "48px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg)", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} 
              aria-label="Next review"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>

            <div className="testi-grid" ref={sliderRef}>
              {BF.testimonials.map((t) => (
                <div className="testi-card" key={t.name}>
                  <div className="testi-stars">★★★★★</div>
                  <p className="testi-q">&ldquo;{t.q}&rdquo;</p>
                  <div className="testi-meta">
                    <span className="testi-name">{t.name}</span>
                    <span className="testi-role">{t.title} · {t.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section style={{ padding: "0 0 clamp(64px,9vw,120px)" }}>
        <div className="shell">
          <div className="cta-band reveal">
            <h2 className="display">Try us free.<br/>Send five images.</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
              <p style={{ margin: 0, maxWidth: "34ch", color: "rgba(255,255,255,.9)" }}>
                We'll edit up to five of your photos at no cost, so you can judge our quality before you commit.
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

