"use client";

import { useEffect, useState } from "react";

/** Floating back-to-top control, bottom-left, shown once the page is scrolled. */
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`backtop${show ? " is-shown" : ""}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 5l-8 8 1.9 1.9L11 9.8V20h2V9.8l5.1 5.1L20 13z" fill="currentColor" />
      </svg>
    </button>
  );
}
