"use client";

import { useEffect, useRef, useState } from "react";
import reviews from "./reviews.json";

const STAR =
  "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z";

/**
 * The five most recent Google reviews shown on imamihair.com, two at a time on
 * desktop and one on mobile. Review text in reviews.json is reproduced verbatim
 * from the live Trustindex feed and must not be edited.
 */
export default function ReviewSlider() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<Record<number, boolean>>({});

  // Track which card is in view so the dots and arrow states stay honest.
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const cards = Array.from(el.children) as HTMLElement[];
      const left = el.scrollLeft;
      let nearest = 0;
      let best = Infinity;
      cards.forEach((c, i) => {
        const d = Math.abs(c.offsetLeft - el.offsetLeft - left);
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
    const card = el.children[index] as HTMLElement | undefined;
    if (card) {
      el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
    }
  }

  return (
    <div className="rev-slider">
      <div className="rev-track" ref={track}>
        {reviews.map((r, i) => (
          <article className="rev-card" key={r.name + r.date}>
            <div className="rev-card-top">
              <div className="stars" role="img" aria-label={`${r.stars} out of 5`}>
                {Array.from({ length: r.stars }).map((_, n) => (
                  <svg key={n} viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="#FF8400" d={STAR} />
                  </svg>
                ))}
              </div>
              <span className="rev-src">Posted on Google</span>
            </div>
            <p className={`rev-body${open[i] ? " is-open" : ""}`}>{r.text}</p>
            {r.text.length > 260 && (
              <button
                type="button"
                className="rev-more"
                onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}
              >
                {open[i] ? "Show less" : "Read more"}
              </button>
            )}
            <p className="rev-by">
              <b>{r.name}</b>
              <span>{r.date}</span>
            </p>
          </article>
        ))}
      </div>

      <div className="rev-nav">
        <button
          type="button"
          className="rev-arrow"
          aria-label="Previous review"
          onClick={() => go(Math.max(0, active - 1))}
          disabled={active === 0}
        >
          &#8592;
        </button>
        <div className="rev-dots">
          {reviews.map((r, i) => (
            <button
              type="button"
              key={r.name + r.date}
              className={i === active ? "is-active" : undefined}
              aria-label={`Go to review ${i + 1}`}
              aria-current={i === active}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <button
          type="button"
          className="rev-arrow"
          aria-label="Next review"
          onClick={() => go(Math.min(reviews.length - 1, active + 1))}
          disabled={active >= reviews.length - 1}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
