import { NAV, PHONE, PHONE_HREF } from "../site";

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
            {PHONE}
          </a>
          <a className="btn btn--sm" href={`${base}#consult`}>
            Book a Free Discovery Call
          </a>
        </div>
      </div>
    </header>
  );
}
