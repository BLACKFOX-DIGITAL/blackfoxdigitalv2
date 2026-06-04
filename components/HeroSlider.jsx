"use client";
import React, { useEffect, useState, useRef } from "react";
import { useBFRouter } from "./utils";
import { BF } from "./data";
import { BeforeAfter as BA } from "./BeforeAfter";
import { Icon } from "./Icons";

/* HeroSlider — modern, full-bleed auto-rotating hero.
   Slide 0: editorial brand intro (red angled panel + quick service links).
   Slides 1..n: full-bleed before/after service scenes with big titles. */
export function HeroSlider() {
  const { go } = useBFRouter();

  
  
  

  const DURATION = 6200;

      const scenes = [
    { title: "High-end skin retouch", tag: "Beauty & Skin", sid: "beauty",    pair: "beauty",    fit: "cover",   bg: "#1a1714" },
    { title: "Clipping path",         tag: "Background",    sid: "clipping",  pair: "clip",      fit: "cover",   bg: "#1a1714" },
    { title: "Ghost mannequin",       tag: "Apparel",       sid: "mannequin", pair: "mannequin", fit: "contain", bg: "#f4f3ef" },
    { title: "Product & e-commerce",  tag: "E-commerce",    sid: "ecom",      pair: "ecom",      fit: "cover",   bg: "#1a1714" },
    { title: "Hair masking",          tag: "Masking",       sid: "masking",   pair: "masking",   fit: "cover",   bg: "#15130f" },
  ];
  const total = scenes.length + 1; // + brand slide

  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const timer = React.useRef(0);

  const next = React.useCallback(() => setI((v) => (v + 1) % total), [total]);
  const prev = React.useCallback(() => setI((v) => (v - 1 + total) % total), [total]);
  const goto = (n) => setI(n);

  React.useEffect(() => {
    clearTimeout(timer.current);
    if (paused) return;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    timer.current = setTimeout(next, reduce ? DURATION * 2 : DURATION);
    return () => clearTimeout(timer.current);
  }, [i, paused, next]);

  // pause autoplay while the user is interacting (e.g. dragging a slider)
  const holdPause = () => setPaused(true);
  const releasePause = () => { clearTimeout(timer.current); timer.current = setTimeout(() => setPaused(false), 3500); };

  return (
    <section
      className="hslider"
      onPointerDown={holdPause}
      onPointerUp={releasePause}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hslider-track">
        {/* ---------- BRAND SLIDE ---------- */}
        <div className={"hslide brand" + (i === 0 ? " active" : "")}>
          <div className="brand-panel">
            <div className="brand-inner">
              <span className="brand-eyebrow">Back-end office for your image-editing needs</span>
              <h1 className="display brand-h1">Professional<br/>photo <span className="hl">retouch.</span></h1>
              <p className="brand-lede">The dedicated editing desk for commerce brands, photographers and agencies — delivered at scale and on deadline.</p>
              <div className="brand-cta">
                <button className="btn btn-onred" onClick={() => go("contact", { trial: true })}>
                  Free Trial
                  <svg className="arr" width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button className="brand-link" onClick={() => go("services")}>
                  Explore services
                  <svg className="arr" width="14" height="11" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>
          </div>
          <div className="brand-media">
            <span className="brand-media-label">Professional photo retouch — at your fingertips</span>
            <div className="brand-quick">
              {BF.heroQuick.map((q) => (
                <button key={q.id + q.label} className="bq" onClick={() => go("service", { serviceId: q.id })}>
                  <span className="bq-ic"><Icon name={q.icon} size={24} /></span>
                  <span className="bq-l">{q.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- SCENE SLIDES ---------- */}
        {scenes.map((s, idx) => {
          const active = i === idx + 1;
          return (
            <div className={"hslide scene" + (active ? " active" : "")} key={s.title} style={{ background: s.bg }}>
              <div className="scene-ba">
                {active && (
                  <BA before={BF.pairs[s.pair].before} after={BF.pairs[s.pair].after} ratio="auto" start={0.5} afterFit={s.fit} afterBg={s.bg} beforeLabel="Raw" afterLabel="Edited" beforeAlt={`${s.title} — raw shot`} afterAlt={`${s.title} — edited result`} priority auto autoDelay={500} style={{ height: "100%", aspectRatio: "auto" }} sizes="100vw" />
                )}
              </div>
              <div className="scene-overlay"></div>
              <div className="scene-caption">
                <span className="scene-tag">{s.tag}</span>
                <h2 className="display scene-title">{s.title}</h2>
                <button className="brand-link light" onClick={() => go("service", { serviceId: s.sid })}>
                  See this service
                  <svg className="arr" width="14" height="11" viewBox="0 0 16 12" fill="none"><path d="M9.5 1L15 6l-5.5 5M15 6H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* ---------- CONTROLS ---------- */}
      <div className="hslider-ui">
        <div className="hslider-count">
          <span className="cur">{String(i + 1).padStart(2, "0")}</span>
          <span className="sep">/</span>
          <span className="tot">{String(total).padStart(2, "0")}</span>
        </div>
        <div className="hslider-bars">
          {Array.from({ length: total }).map((_, n) => (
            <button key={n} className={"hbar" + (n === i ? " on" : "")} aria-label={"Go to slide " + (n + 1)} onClick={() => goto(n)}>
              <span className="hbar-fill" style={{ animationDuration: DURATION + "ms", animationPlayState: (n === i && !paused) ? "running" : "paused" }}></span>
            </button>
          ))}
        </div>
        <div className="hslider-arrows">
          <button aria-label="Previous slide" onClick={prev}>
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none"><path d="M7 1 1 7l6 6M1 7h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button aria-label="Next slide" onClick={next}>
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none"><path d="M11 1l6 6-6 6M17 7H1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}

