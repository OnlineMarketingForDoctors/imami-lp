import reviews from "./reviews.json";

const STAR =
  "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z";
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/?q=place_id:ChIJMWgAohAP3ogRYDZWIg_3KX0";

function Card({ r }: { r: (typeof reviews)[number] }) {
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
        <div className="stars mq-stars" role="img" aria-label={`${r.stars} out of 5`}>
          {Array.from({ length: r.stars }).map((_, n) => (
            <svg key={n} viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#FF8400" d={STAR} />
            </svg>
          ))}
        </div>
      </div>
      <p className="mq-body">{r.text}</p>
      {r.text.length > 300 && (
        <a className="mq-more" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener">
          Read the full review on Google
        </a>
      )}
    </article>
  );
}

/**
 * Full-width, continuously scrolling review carousel. The card list is
 * rendered twice so the CSS translation loops seamlessly; the copy is
 * aria-hidden so screen readers hear each review once. Pauses on hover,
 * and prefers-reduced-motion swaps the animation for manual scrolling.
 */
export default function ReviewMarquee() {
  return (
    <div className="marquee">
      <div className="mq-track">
        {reviews.map((r) => (
          <Card r={r} key={r.name + r.date} />
        ))}
        <div className="mq-dup" aria-hidden="true">
          {reviews.map((r) => (
            <Card r={r} key={"dup" + r.name + r.date} />
          ))}
        </div>
      </div>
    </div>
  );
}
