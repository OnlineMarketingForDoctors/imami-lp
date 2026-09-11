import type { Metadata } from "next";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { PHONE, PHONE_HREF } from "./site";

export const metadata: Metadata = {
  title: "Imami Hair Restoration | Campaign Landing Pages",
  description:
    "Index of the Google Ads landing pages for Imami Hair Restoration, Melbourne, Florida.",
  robots: { index: false, follow: false },
};

/** One card per live campaign page. Order matches the ad groups. */
const PAGES = [
  {
    href: "/follicular-unit-extraction",
    group: "FUE",
    h: "FUE Hair Transplant",
    p: "The main page. Covers the technique, results, benefits, cost, the repair work and Dr. Imami himself. The other two are variants of it.",
    for: "Core FUE and no-shave FUE search terms.",
  },
  {
    href: "/fue-hair-transplant-cost",
    group: "Cost",
    h: "FUE Hair Transplant Cost",
    p: "Opens on the price and keeps it above the fold, then sets out what drives it and what to ask any clinic before paying.",
    for: "Cost, price and financing search terms.",
  },
  {
    href: "/hair-transplant-melbourne-fl",
    group: "Local",
    h: "Hair Transplant in Melbourne, FL",
    p: "Leads with the location: the address, the map, the drive from Orlando, the mile from the airport and the areas served.",
    for: "Melbourne, Brevard County and Space Coast search terms.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader minimal />

      <section className="sec sec--dark" style={{ paddingTop: 72 }}>
        <div className="wrap">
          <div className="head" style={{ marginBottom: 44 }}>
            <p className="eyebrow">Imami Hair Restoration</p>
            <h1 style={{ fontSize: "clamp(2.2rem,5vw,3.4rem)", marginTop: 12 }}>
              Campaign Landing Pages
            </h1>
            <p className="lede">
              Three pages for the Google Ads account, each built for its own ad
              group. They share a structure, a booking calendar and a set of
              images; what changes is what each one leads with.
            </p>
          </div>
          <div className="g3">
            {PAGES.map((p) => (
              <div className="card" key={p.href}>
                <span className="num">{p.group}</span>
                <h3 style={{ marginBottom: 10 }}>{p.h}</h3>
                <p>{p.p}</p>
                <p className="disc-sm">{p.for}</p>
                <a className="btn btn--sm" style={{ marginTop: 22 }} href={p.href}>
                  Open the page
                </a>
                <p className="index-url">{p.href}</p>
              </div>
            ))}
          </div>
          <p className="lede" style={{ marginTop: 44 }}>
            These pages are set to no-index, so they are reached from the ads
            and from this list rather than from search. For anything else, see{" "}
            <a href="https://www.imamihair.com/" target="_blank" rel="noopener">
              imamihair.com
            </a>{" "}
            or call <a href={PHONE_HREF}>{PHONE}</a>.
          </p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
