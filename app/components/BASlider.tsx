"use client";

import { useEffect, useRef, useState } from "react";

export type BAItem = {
  img: string;
  age: string;
  norwood: string;
  grafts: string;
  timeline: string;
};

/**
 * Before & after carousel, three cards at a time on desktop, one on mobile,
 * mirroring the gallery slider on imamihair.com's FUE page.
 */
export default function BASlider({ items }: { items: BAItem[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const cards = Array.from(el.children) as HTMLElement[];
      let nearest = 0;
      let best = Infinity;
      cards.forEach((c, i) => {
        const d = Math.abs(c.offsetLeft - el.offsetLeft - el.scrollLeft);
        if (d < best) {
          best = d;
          nearest = i;
        }
      });
      setActive(nearest);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  function go(index: number) {
    const el = track.current;
    if (!el) return;
    const card = el.children[
      Math.max(0, Math.min(items.length - 1, index))
    ] as HTMLElement | undefined;
    if (card) {
      el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
    }
  }

  return (
    <div className="rev-slider">
      <div className="rev-track ba-track" ref={track}>
        {items.map((r, i) => (
          <figure className="ba-card" key={r.img + i}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/${r.img}`}
              alt={`No shave FUE hair transplant before and after, age ${r.age}, Norwood ${r.norwood}, ${r.grafts} grafts`}
              loading="lazy"
            />
            <figcaption className="ba-body">
              <p className="ba-tag">No Shave FUE</p>
              <p className="ba-sub">
                Age: {r.age} | Norwood {r.norwood}
              </p>
              <dl className="ba-stats">
                <div>
                  <dt>Grafts Placed</dt>
                  <dd>{r.grafts} Grafts</dd>
                </div>
                <div>
                  <dt>Timeline</dt>
                  <dd>{r.timeline}</dd>
                </div>
              </dl>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="rev-nav">
        <button
          type="button"
          className="rev-arrow"
          aria-label="Previous result"
          onClick={() => go(active - 1)}
          disabled={active === 0}
        >
          &#8592;
        </button>
        <div className="rev-dots">
          {items.map((r, i) => (
            <button
              type="button"
              key={r.img + i}
              className={i === active ? "is-active" : undefined}
              aria-label={`Go to result ${i + 1}`}
              aria-current={i === active}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <button
          type="button"
          className="rev-arrow"
          aria-label="Next result"
          onClick={() => go(active + 1)}
          disabled={active >= items.length - 1}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
