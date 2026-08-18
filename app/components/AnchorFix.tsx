"use client";

import { useEffect } from "react";

/** Keep in step with html{scroll-padding-top} in globals.css. */
const HEADER_OFFSET = 96;

/**
 * Lazy images load while a smooth anchor scroll animates past them, growing
 * the page mid-animation, so the browser stops short of the target section.
 * After each hash navigation, wait for the scroll to settle, then nudge the
 * viewport until the section actually sits at the header offset. The loop
 * stops as soon as the position is right, or the moment the visitor scrolls
 * on their own.
 */
export default function AnchorFix() {
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
      clearTimeout(timer);
    };

    const settle = () => {
      const el = location.hash
        ? document.getElementById(location.hash.slice(1))
        : null;
      if (!el) return;
      cancelled = false;
      let tries = 0;
      const tick = () => {
        if (cancelled) return;
        const off = el.getBoundingClientRect().top - HEADER_OFFSET;
        if (Math.abs(off) < 4 || tries++ > 12) return;
        window.scrollTo({ top: window.scrollY + off, behavior: "auto" });
        timer = setTimeout(tick, 150);
      };
      // Let the browser's own smooth scroll finish before correcting.
      clearTimeout(timer);
      timer = setTimeout(tick, 700);
    };

    window.addEventListener("hashchange", settle);
    window.addEventListener("wheel", cancel, { passive: true });
    window.addEventListener("touchstart", cancel, { passive: true });
    if (location.hash) settle();
    return () => {
      cancel();
      window.removeEventListener("hashchange", settle);
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
    };
  }, []);

  return null;
}
