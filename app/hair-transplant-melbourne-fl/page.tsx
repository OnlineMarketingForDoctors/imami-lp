import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import BookingEmbed from "../components/BookingEmbed";
import BASlider, { BAItem } from "../components/BASlider";
import ReviewMarquee from "../components/ReviewMarquee";
import BackToTop from "../components/BackToTop";
import { PHONE, PHONE_HREF } from "../site";

export const metadata: Metadata = {
  title: "Hair Transplant in Melbourne, FL | Imami Hair Restoration",
  description:
    "Surgeon-led, no-shave FUE hair transplants in Melbourne, FL, 1 mile from Melbourne-Orlando International Airport. Serving Brevard County and the Space Coast.",
  robots: { index: false, follow: true },
};

const NAV_LOCAL = [
  { href: "#location", label: "Location" },
  { href: "#results", label: "Results" },
  { href: "#reviews", label: "Reviews" },
  { href: "#surgeon", label: "Meet the Doctor" },
  { href: "#cost", label: "Cost" },
];

const AREAS = [
  "Melbourne",
  "Palm Bay",
  "Viera",
  "Melbourne Beach",
  "Brevard County",
  "The Space Coast",
];

/* Six representative no-shave FUE cases. */
const RESULTS: BAItem[] = [
  { img: "1.png", age: "37", norwood: "3", grafts: "1,112", timeline: "1 Year Post-Op" },
  { img: "1-1.png", age: "39", norwood: "3", grafts: "1,647", timeline: "19 Months after 2nd FUE" },
  { img: "1-2.png", age: "61", norwood: "4A", grafts: "1,205", timeline: "15 Months Post-Op" },
  { img: "1-3.png", age: "32", norwood: "3", grafts: "1,800", timeline: "1 Year Post-Op" },
  { img: "1-5.png", age: "66", norwood: "5", grafts: "1,350", timeline: "1 Year Post-Op" },
  { img: "1-6.png", age: "38", norwood: "4", grafts: "2,023", timeline: "2 Years Post-Op" },
];

const WHY = [
  {
    h: "Triple Board-Certified",
    p: "A rare distinction ensuring the highest standards of surgical safety, ethics, and aesthetic outcomes.",
  },
  {
    h: "Surgeon-Led Procedure",
    p: "Dr Imami directs his experienced hair transplant team for optimal extraction and site creation.",
  },
  {
    h: "Personalized Design",
    p: "Every hairline is custom-designed based on facial geometry, age, and long-term hair loss progression.",
  },
];

/* Font Awesome solid "phone", as used in the site header. */
const PHONE_PATH =
  "M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z";

export default function MelbournePage() {
  return (
    <>
      <SiteHeader nav={NAV_LOCAL} />

      {/* Hero: local emotional hook, hours and phone above the fold,
          booking widget above the fold */}
      <section className="hero-lp" id="top">
        <div className="wrap hero-lp-grid">
          <div>
            <p className="eyebrow eyebrow--accent">Melbourne &middot; Space Coast</p>
            <h1>
              Feel Like Yourself Again: No-Shave FUE Hair Transplants in
              Melbourne, FL
            </h1>
            <p className="hero-sub">
              You should not have to fly across the country, or the world, to
              trust the person restoring your hairline. Dr. Imami has served
              the Space Coast for over 30 years, and his surgeon-led, no-shave
              FUE means nobody at work has to know.
            </p>
            <a className="hero-phone" href={PHONE_HREF}>
              <svg viewBox="0 0 512 512" aria-hidden="true">
                <path fill="#FF8400" d={PHONE_PATH} />
              </svg>
              {PHONE}
            </a>
            <p className="hero-hours">
              Mon &ndash; Fri: 8 am to 5 pm &middot; After hours by appointment
              &middot; 1140 Broadband Drive, Unit G2, Melbourne, FL
            </p>
          </div>
          <div>
            <BookingEmbed />
            <p className="fineprint">
              Your discovery call is free. Fees for in-person consultations,
              where applicable, are confirmed when you book.
            </p>
          </div>
        </div>
      </section>

      <section className="sec" id="location">
        <div className="wrap g2" style={{ alignItems: "start" }}>
          <div>
            <p className="eyebrow">Visit Us</p>
            <h2>In Melbourne, a Mile from the Airport</h2>
            <p className="lede">
              We are in the NASA Palms Professional Center, just 1 mile from
              Melbourne-Orlando International Airport (MLB) and about an
              hour&rsquo;s drive from Orlando.
            </p>
            <p className="addr">
              <b>Imami Hair Restoration</b>
              NASA Palms Professional Center
              <br />
              1140 Broadband Drive, Unit G2
              <br />
              Melbourne, FL 32901
              <br />
              <a href={PHONE_HREF}>{PHONE}</a> &middot; Mon &ndash; Fri, 8 am
              to 5 pm
            </p>
            <div className="areas">
              {AREAS.map((a) => (
                <span key={a}>{a}</span>
              ))}
            </div>
          </div>
          <div>
            <iframe
              className="map-embed"
              src="https://maps.google.com/maps?q=1140%20Broadband%20Drive%20Unit%20G2%2C%20Melbourne%2C%20FL%2032901&z=13&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map to Imami Hair Restoration, Melbourne, FL"
            />
          </div>
        </div>
      </section>

      <section className="sec sec--tint" id="results">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">Real Results</p>
            <h2>Before &amp; After, Right Here in Melbourne</h2>
          </div>
          <BASlider items={RESULTS} />
          <p className="disc disc--center">
            The images above are displayed with the consent of the patients.
            The outcomes shown are only relevant for these patients and do not
            necessarily reflect the results other patients may experience.
          </p>
        </div>
      </section>

      <section className="sec" id="reviews" style={{ borderTop: "none" }}>
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">Patient Testimonials</p>
            <h2>What Our Patients Say</h2>
          </div>
        </div>
        {/* The Blaufarb review discusses a FUT procedure, which this FUE
            campaign page must not carry. */}
        <ReviewMarquee exclude={["eric blaufarb"]} />
      </section>

      <section className="sec sec--dark" id="surgeon">
        <div className="wrap g2" style={{ alignItems: "center" }}>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="rounded-img surgeon-img"
              src="/images/dr-imami-2.webp"
              alt="Dr. Emran Imami"
              loading="lazy"
            />
          </div>
          <div>
            <p className="eyebrow">Meet Your Surgeon</p>
            <h2>Dr. Emran Imami</h2>
            <p className="lede">
              Triple board-certified surgeon with over 30 years of surgical
              excellence, practicing right here in Melbourne. The doctor you
              meet is the doctor who operates: Dr. Imami personally evaluates
              every patient, designs your hairline and performs the surgical
              components of every procedure himself.
            </p>
            <div id="why">
              {WHY.map((w) => (
                <div key={w.h} style={{ marginTop: 20 }}>
                  <h3 style={{ marginBottom: 6 }}>{w.h}</h3>
                  <p>{w.p}</p>
                </div>
              ))}
            </div>
            <div className="hero-cta">
              <a className="btn btn--lt" href="#consult">
                Book a Free Discovery Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Short cost block linking across to the cost page */}
      <section className="sec sec--tint" id="cost">
        <div className="wrap">
          <div className="head" style={{ marginBottom: 0 }}>
            <p className="eyebrow">Investment</p>
            <h2>What Does It Cost?</h2>
            <p className="lede">
              There is no per-graft meter here. Dr. Imami estimates the grafts
              your plan needs and quotes one written session price, covering
              the procedure and your first year of follow-ups, with financing
              through CareCredit and Affirm.
            </p>
            <div className="hero-cta">
              <a className="btn" href="/fue-hair-transplant-cost">
                See Session Pricing &amp; Financing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Closing booking widget */}
      <section className="sec sec--dark" id="consult">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">Free Discovery Call</p>
            <h2>Talk to Us Today</h2>
            <p className="lede">
              A free phone call with a hair transplant specialist, then one
              visit to our Melbourne office when you are ready. Same-day calls
              are usually available.
            </p>
          </div>
          <div className="consult-form consult-form--wide" style={{ margin: "0 auto" }}>
            <BookingEmbed instance="2" />
            <p className="fineprint">
              Your discovery call is free. Fees for in-person consultations,
              where applicable, are confirmed when you book.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
      <BackToTop />
    </>
  );
}
