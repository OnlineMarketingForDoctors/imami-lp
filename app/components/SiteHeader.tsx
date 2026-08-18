import { NAV, PHONE, PHONE_HREF } from "../site";

/** Font Awesome solid "phone", the same glyph imamihair.com uses. */
function PhoneIcon() {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" focusable="false">
      <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
    </svg>
  );
}

/**
 * `base` prefixes the section anchors. Empty on the landing page itself, and
 * the landing page's path anywhere else, so the nav still works off-page.
 *
 * `minimal` strips the header back to a centred logo — used on /thank-you,
 * where the visitor has already converted and the nav, phone number and CTA
 * are only exits.
 */
export default function SiteHeader({
  base = "",
  minimal = false,
}: {
  base?: string;
  minimal?: boolean;
}) {
  if (minimal) {
    return (
      <header>
        <div className="bar bar--center">
          <a
            className="brand"
            href={base || "#top"}
            aria-label="Imami MD Hair Restoration"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/imami-logo.png"
              alt="Imami MD Hair Restoration"
              width={600}
              height={200}
            />
          </a>
        </div>
      </header>
    );
  }

  return (
    <header>
      <div className="bar">
        <a
          className="brand"
          href={base || "#top"}
          aria-label="Imami MD Hair Restoration"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/imami-logo.png"
            alt="Imami MD Hair Restoration"
            width={600}
            height={200}
          />
        </a>
        <nav className="hnav" aria-label="Page sections">
          {NAV.map((item) => (
            <a key={item.href} href={`${base}${item.href}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hact">
          <a className="tel" href={PHONE_HREF}>
            <PhoneIcon />
            {PHONE}
          </a>
          <a className="btn btn--sm" href={`${base}#consult`}>
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}
