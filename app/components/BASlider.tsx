"use client";

import { useCallback, useEffect, useRef, useState } from "react";

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
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const stepLightbox = useCallback(
    (d: number) =>
      setLightbox((i) =>
        i === null ? i : (i + d + items.length) % items.length
      ),
    [items.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") stepLightbox(-1);
      if (e.key === "ArrowRight") stepLightbox(1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox, stepLightbox]);

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
            <button
              type="button"
              className="ba-zoom"
              aria-label={`View before and after, age ${r.age}, Norwood ${r.norwood}, full size`}
              onClick={() => setLightbox(i)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/${r.img}`}
                alt={`No shave FUE hair transplant before and after, age ${r.age}, Norwood ${r.norwood}, ${r.grafts} grafts`}
                loading="lazy"
              />
            </button>
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

      {lightbox !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Before and after photo"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="lb-close"
            aria-label="Close"
            onClick={closeLightbox}
          >
            &#10005;
          </button>
          <button
            type="button"
            className="lb-arrow lb-prev"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              stepLightbox(-1);
            }}
          >
            &#8592;
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/${items[lightbox].img}`}
              alt={`No shave FUE hair transplant before and after, age ${items[lightbox].age}, Norwood ${items[lightbox].norwood}, ${items[lightbox].grafts} grafts`}
            />
            <figcaption>
              No Shave FUE &middot; Age {items[lightbox].age} &middot; Norwood{" "}
              {items[lightbox].norwood} &middot; {items[lightbox].grafts} Grafts
              &middot; {items[lightbox].timeline}
            </figcaption>
          </figure>
          <button
            type="button"
            className="lb-arrow lb-next"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              stepLightbox(1);
            }}
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
}
