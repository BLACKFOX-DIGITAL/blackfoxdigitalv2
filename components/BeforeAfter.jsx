"use client";
import React from "react";
import Image from "next/image";

/* BeforeAfter — draggable comparison slider.
   Both images sit in the same full-size container so object-fit
   scales them identically. The "before" image is clipped via
   clip-path — no width tricks, no ResizeObserver needed. */
export function BeforeAfter({ before, after, ratio = "16 / 10", start = 0.5,
                       beforeLabel = "Before", afterLabel = "After",
                       beforeAlt, afterAlt,
                       afterFit = "cover", beforeFit, scale = 1,
                       afterBg = "#f4f3ef", auto = false,
                       autoDelay = 500, priority = false, style,
                       sizes = "100vw" }) {

  const fit = beforeFit || afterFit;
  const ref   = React.useRef(null);
  const [pos, setPos]       = React.useState(start);
  const [drag, setDrag]     = React.useState(false);
  const [touched, setTouched] = React.useState(false);
  const rafRef      = React.useRef(0);
  const touchedRef  = React.useRef(false);

  const markTouched = () => {
    touchedRef.current = true;
    setTouched(true);
    cancelAnimationFrame(rafRef.current);
  };

  const move = React.useCallback((clientX) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.max(0, Math.min(1, (clientX - r.left) / r.width)));
  }, []);

  const dragStartX = React.useRef(null);
  const wasDragged = React.useRef(false);

  React.useEffect(() => {
    if (!drag) return;
    const mv = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      if (dragStartX.current !== null && Math.abs(clientX - dragStartX.current) > 5) {
        wasDragged.current = true;
      }
      move(clientX);
    };
    const up = () => {
      setDrag(false);
      // We don't reset dragStartX here, so onClickCapture can read it
    };
    window.addEventListener("mousemove", mv);
    window.addEventListener("mouseup",   up);
    window.addEventListener("touchmove", mv, { passive: true });
    window.addEventListener("touchend",  up);
    return () => {
      window.removeEventListener("mousemove", mv);
      window.removeEventListener("mouseup",   up);
      window.removeEventListener("touchmove", mv, { passive: true });
      window.removeEventListener("touchend",  up);
    };
  }, [drag, move]);

  // Entrance auto-sweep
  React.useEffect(() => {
    if (!auto) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    let started = false;
    const easeInOut = (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    const keys = [
      { t: 0.0, p: 0.85 },
      { t: 0.42, p: 0.16 },
      { t: 0.72, p: 0.62 },
      { t: 1.0,  p: start },
    ];
    const DUR = 2100;

    const run = () => {
      if (started || touchedRef.current) return;
      started = true;
      setPos(keys[0].p);
      const t0 = performance.now() + autoDelay;
      const tick = (now) => {
        if (touchedRef.current) return;
        const elapsed = now - t0;
        if (elapsed < 0) { rafRef.current = requestAnimationFrame(tick); return; }
        const prog = Math.min(1, elapsed / DUR);
        let a = keys[0], b = keys[keys.length - 1];
        for (let i = 0; i < keys.length - 1; i++) {
          if (prog >= keys[i].t && prog <= keys[i + 1].t) { a = keys[i]; b = keys[i + 1]; break; }
        }
        const segT = (prog - a.t) / (b.t - a.t || 1);
        setPos(a.p + (b.p - a.p) * easeInOut(Math.max(0, Math.min(1, segT))));
        if (prog < 1) rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    };

    if (el && "IntersectionObserver" in window) {
      const io = new IntersectionObserver((ents) => {
        ents.forEach((e) => { if (e.isIntersecting) { run(); io.disconnect(); } });
      }, { threshold: 0.4 });
      io.observe(el);
      return () => { io.disconnect(); cancelAnimationFrame(rafRef.current); };
    } else {
      run();
      return () => cancelAnimationFrame(rafRef.current);
    }
  }, [auto, autoDelay, start]);

  const onKey = (e) => {
    if (e.key === "ArrowLeft")  { markTouched(); setPos((p) => Math.max(0, p - 0.04)); }
    if (e.key === "ArrowRight") { markTouched(); setPos((p) => Math.min(1, p + 0.04)); }
  };

  const pct     = (pos * 100).toFixed(2) + "%";
  // clip-path clips the right side of the before image, revealing it from left to `pct`
  const clipBefore = `inset(0 ${(100 - pos * 100).toFixed(2)}% 0 0)`;

  return (
    <div
      ref={ref}
      className={"ba" + (drag ? " dragging" : "") + (touched ? " touched" : "")}
      tabIndex={0}
      role="slider"
      aria-valuenow={Math.round(pos * 100)}
      aria-label="Before and after comparison"
      style={{ aspectRatio: ratio, overflow: 'hidden', ...style }}
      onKeyDown={onKey}
      onClickCapture={(e) => {
        if (wasDragged.current) {
          e.stopPropagation();
          e.preventDefault();
        }
      }}
      onMouseDown={(e) => { 
        markTouched(); 
        setDrag(true); 
        dragStartX.current = e.clientX;
        wasDragged.current = false;
        move(e.clientX); 
      }}
      onTouchStart={(e) => { 
        markTouched(); 
        setDrag(true); 
        dragStartX.current = e.touches[0].clientX;
        wasDragged.current = false;
        move(e.touches[0].clientX); 
      }}
    >
      {/* AFTER — base layer, always fully visible */}
      <Image
        fill
        src={after}
        alt={afterAlt || afterLabel}
        sizes={sizes}
        style={{ objectFit: fit, background: afterBg, transform: `scale(${scale})` }}
        priority={priority}
        draggable="false"
      />

      {/* BEFORE — clipped to left of handle */}
      <Image
        fill
        src={before}
        alt={beforeAlt || beforeLabel}
        sizes={sizes}
        style={{ objectFit: fit, clipPath: clipBefore, transform: `scale(${scale})` }}
        priority={false}
        draggable="false"
      />

      <span className="ba-tag before" style={{ opacity: pos > 0.14 ? 1 : 0, transition: "opacity .2s" }}>{beforeLabel}</span>
      <span className="ba-tag after"  style={{ opacity: pos < 0.86 ? 1 : 0, transition: "opacity .2s" }}>{afterLabel}</span>

      <div className="ba-handle" style={{ left: pct }}>
        <span className="ba-knob">
          <svg viewBox="0 0 9 14" fill="none"><path d="M8 1 2 7l6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <svg viewBox="0 0 9 14" fill="none"><path d="M1 1l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
      </div>
    </div>
  );
}
