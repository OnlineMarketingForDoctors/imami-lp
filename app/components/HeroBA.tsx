"use client";

import { useEffect, useState } from "react";

export type HeroBAItem = { img: string; alt: string };

/**
 * Compact before-and-after rotator for the hero's bottom-right corner.
 * Cross-fades through a few results, auto-advancing until hovered or
 * focused, with dots to jump and a link down to the full gallery.
 */
export default function HeroBA({ items }: { items: HeroBAItem[] }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setCurrent((v) => (v + 1) % items.length),
      4500
    );
    return () => clearInterval(t);
  }, [paused, items.length]);

  return (
    <aside
      className="hero-ba"
      aria-label="Before and after results"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="hero-ba-frame">
        {items.map((it, n) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={it.img}
            src={`/images/${it.img}`}
            alt={it.alt}
            className={n === current ? "is-on" : undefined}
            width={718}
            height={359}
            loading={n === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>
      <div className="hero-ba-foot">
        <div className="hero-ba-dots">
          {items.map((it, n) => (
            <button
              key={it.img}
              type="button"
              aria-label={`Show result ${n + 1}`}
              aria-current={n === current}
              className={n === current ? "is-active" : undefined}
              onClick={() => setCurrent(n)}
            />
          ))}
        </div>
        <a className="hero-ba-more" href="#results">
          View More Cases &rarr;
        </a>
      </div>
    </aside>
  );
}
