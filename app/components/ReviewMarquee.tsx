"use client";

import { useCallback, useEffect, useState } from "react";
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

function Card({
  r,
  onMore,
  ghost,
}: {
  r: Review;
  onMore: () => void;
  ghost?: boolean;
}) {
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
      {/* Cards in the aria-hidden duplicate run stay clickable (they look
          identical to the originals) but are removed from the tab order. */}
      <button
        type="button"
        className="mq-more"
        onClick={onMore}
        tabIndex={ghost ? -1 : 0}
      >
        Read more
      </button>
    </article>
  );
}

/**
 * Full-width, continuously scrolling review carousel. The card list is
 * rendered twice so the CSS translation loops seamlessly; the copy is
 * aria-hidden so screen readers hear each review once. Pauses on hover,
 * and prefers-reduced-motion swaps the animation for manual scrolling.
 * Every card's Read more button opens the full review text in an overlay.
 */
export default function ReviewMarquee() {
  const [open, setOpen] = useState<Review | null>(null);

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
    <div className="marquee">
      <div className="mq-track">
        {reviews.map((r) => (
          <Card r={r} key={r.name + r.date} onMore={() => setOpen(r)} />
        ))}
        <div className="mq-dup" aria-hidden="true">
          {reviews.map((r) => (
            <Card
              r={r}
              key={"dup" + r.name + r.date}
              onMore={() => setOpen(r)}
              ghost
            />
          ))}
        </div>
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
