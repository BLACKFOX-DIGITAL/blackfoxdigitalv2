"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RevealWrapper() {
  const pathname = usePathname();

  useEffect(() => {
    // Wait for the DOM to be fully mounted
    const t = setTimeout(() => {
      const els = Array.from(document.querySelectorAll(".reveal:not(.in)"));
      if (!("IntersectionObserver" in window)) {
        els.forEach((e) => e.classList.add("in"));
        return;
      }
      const io = new IntersectionObserver(
        (ents) => {
          ents.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("in");
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      els.forEach((e) => io.observe(e));
      
      // Cleanup observer on unmount (or next effect)
      return () => io.disconnect();
    }, 100);

    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}
