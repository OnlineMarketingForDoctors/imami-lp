"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import reviews from "./reviews.json";

const STAR =
  "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z";

type Review = (typeof reviews)[number];

function Stars({ count }: { count: number }) {
  return (
    <div className="stars mq-stars" role="img" aria-label={`${count} out of 5`}>
      {Array.from({ length: count }).map((_, n) => (
        <svg key={n} viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#FF8400" d={STAR} />
        </svg>
      ))}
    </div>
  );
}

function Card({ r, onMore }: { r: Review; onMore: () => void }) {
  return (
    <article className="mq-card">
      <div className="mq-top">
        {/* The reviews are from Google, so the Google mark stands in for the
            reviewer avatar (no profile photos are available). */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="mq-avatar"
          src="/images/google-icon.svg"
          alt=""
          width={40}
          height={40}
          loading="lazy"
        />
        <div>
          <p className="mq-name">{r.name}</p>
          <p className="mq-date">{r.date}</p>
        </div>
        <Stars count={r.stars} />
      </div>
      <p className="mq-body">{r.text}</p>
      <button type="button" className="mq-more" onClick={onMore}>
        Read more
      </button>
    </article>
  );
}

/**
 * Reviews as a plain grid, one card per review. This replaced a looping
 * marquee whose seamless scroll needed the whole card list rendered a
 * second time, which read on the page as the same reviews appearing twice.
 * Every card's Read more button opens the full review text in an overlay.
 *
 * `exclude` drops reviews by reviewer name, for pages that must not carry
 * a particular review.
 */
export default function ReviewGrid({ exclude = [] }: { exclude?: string[] }) {
  const items = reviews.filter((r) => !exclude.includes(r.name));
  const [open, setOpen] = useState<Review | null>(null);

  /* Below 660px the row is a scroll-snap slider. These drive its arrows and
     grey them out at each end; above that it is a plain grid and the arrows
     are hidden, so none of this has any effect there. */
  const track = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncEnds = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft >= max - 1);
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    syncEnds();
    el.addEventListener("scroll", syncEnds, { passive: true });
    window.addEventListener("resize", syncEnds);
    return () => {
      el.removeEventListener("scroll", syncEnds);
      window.removeEventListener("resize", syncEnds);
    };
  }, [syncEnds]);

  /* One card plus one gap, measured rather than assumed, so the arrows keep
     landing on a snap point if the card width or gap ever changes. */
  const step = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const kids = el.children;
    const by =
      kids.length > 1
        ? (kids[1] as HTMLElement).offsetLeft - (kids[0] as HTMLElement).offsetLeft
        : el.clientWidth;
    el.scrollBy({ left: dir * by, behavior: "smooth" });
  };

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <div className="wrap">
      <div className="revgrid" ref={track}>
        {items.map((r) => (
          <Card r={r} key={r.name + r.date} onMore={() => setOpen(r)} />
        ))}
      </div>

      <div className="rev-nav revgrid-nav">
        <button
          type="button"
          className="rev-arrow"
          aria-label="Previous review"
          onClick={() => step(-1)}
          disabled={atStart}
        >
          &#8592;
        </button>
        <button
          type="button"
          className="rev-arrow"
          aria-label="Next review"
          onClick={() => step(1)}
          disabled={atEnd}
        >
          &#8594;
        </button>
      </div>

      {open && (
        <div
          className="rev-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Review by ${open.name}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <button
            type="button"
            className="lb-close"
            onClick={close}
            aria-label="Close review"
          >
            ✕
          </button>
          <article className="rev-modal-card">
            <div className="mq-top">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="mq-avatar"
                src="/images/google-icon.svg"
                alt=""
                width={40}
                height={40}
              />
              <div>
                <p className="mq-name">{open.name}</p>
                <p className="mq-date">{open.date}</p>
              </div>
              <Stars count={open.stars} />
            </div>
            <p className="rev-modal-body">{open.text}</p>
          </article>
        </div>
      )}
    </div>
  );
}
