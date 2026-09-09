import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import BookingEmbed from "../components/BookingEmbed";
import BASlider, { BAItem } from "../components/BASlider";
import BackToTop from "../components/BackToTop";

export const metadata: Metadata = {
  title: "FUE Hair Transplant Cost | Imami Hair Restoration",
  description:
    "What a no-shave FUE hair transplant costs at Imami Hair Restoration: one written session price built on your estimated graft count, with financing through CareCredit and Affirm.",
  robots: { index: false, follow: true },
};

const NAV_COST = [
  { href: "#pricing", label: "Pricing" },
  { href: "#included", label: "What's Included" },
  { href: "#financing", label: "Financing" },
  { href: "#ask", label: "Compare Clinics" },
  { href: "#results", label: "Results" },
];

/**
 * Session price bands. `price` renders in the band table once the practice
 * supplies its figures; until then the row shows the written-quote line so
 * nothing invented ships.
 */
const PRICE_BANDS: { grafts: string; suits: string; price: string | null }[] = [
  { grafts: "1,000-1,200", suits: "Early hairline or temple rebuild", price: null },
  { grafts: "1,200-1,800", suits: "Full hairline restoration", price: null },
  { grafts: "1,800-2,000+", suits: "Hairline plus crown together", price: null },
];

/** Indicative monthly financing figure, e.g. "$250" — null until supplied. */
const FINANCE_MONTHLY: string | null = null;

/* Four representative no-shave FUE cases, per the brief's trimmed gallery. */
const RESULTS: BAItem[] = [
  { img: "1.png", age: "37", norwood: "3", grafts: "1,112", timeline: "1 Year Post-Op" },
  { img: "1-1.png", age: "39", norwood: "3", grafts: "1,647", timeline: "19 Months after 2nd FUE" },
  { img: "1-3.png", age: "32", norwood: "3", grafts: "1,800", timeline: "1 Year Post-Op" },
  { img: "1-6.png", age: "38", norwood: "4", grafts: "2,023", timeline: "2 Years Post-Op" },
];

const INCLUDED = [
  "A written, itemized quote at your consultation, with no hidden extras",
  "Year-one follow-ups included, at Day 2, Day 14, Month 6 and Year 1",
  "Medication refills included through your first year",
  "One custom session price built on your estimated graft count, never a per-graft meter",
];

const ASK = [
  {
    h: "Who actually performs the surgery?",
    p: "At some chains and overseas clinics, the surgeon you meet in the marketing is not the person in the room. Here, Dr. Imami designs your plan and performs the surgical components of every procedure, with his team working under his direct supervision.",
  },
  {
    h: "What exactly does the quote include?",
    p: "A low headline number can grow once medication, follow-ups and revisions are priced separately. Our session price is itemized in writing, so you can compare it line for line against any other quote.",
  },
  {
    h: "Are follow-ups covered, and by whom?",
    p: "Flying home from a clinic abroad means flying back for aftercare, or paying someone local. Your first year of follow-ups here is part of the session price, with the team that treated you.",
  },
];

export default function CostPage() {
  return (
    <>
      <SiteHeader nav={NAV_COST} />

      {/* Hero: emotional hook, price band and the booking widget above the fold */}
      <section className="hero-lp" id="top">
        <div className="wrap hero-lp-grid">
          <div>
            <p className="eyebrow eyebrow--accent">FUE Hair Transplant Cost</p>
            <h1>The Cost of Getting Your Hair Back Is Probably Less Than You Fear</h1>
            <p className="hero-sub">
              Most people put this off for years because of a number they have
              never actually been given. At Imami Hair Restoration you get one
              written session price, built on your estimated graft count, with
              your first year of care included.
            </p>
            <div className="price-band" id="pricing">
              <h3>Your Session Price at a Glance</h3>
              <table>
                <thead>
                  <tr>
                    <th>Grafts</th>
                    <th>Typically suits</th>
                    <th>Session price</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICE_BANDS.map((b) => (
                    <tr key={b.grafts}>
                      <td>
                        <b>{b.grafts}</b>
                      </td>
                      <td>{b.suits}</td>
                      <td>{b.price ?? "Quoted in writing"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="disc-sm">
                Your exact figure is confirmed in writing after your estimated
                graft count, on your free discovery call and at your
                consultation. Financing available through CareCredit and Affirm.
              </p>
            </div>
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

      {/* Patient quote on cost, placed high per the brief */}
      <section className="sec">
        <div className="wrap">
          <blockquote className="quote-hi">
            &ldquo;I was also happily surprised with the cost of the procedure.
            I initially went in thinking they were going to tell me a huge
            number, and I would then walk away, saying no way can I afford
            that. Thats not what happened though&hellip; don&rsquo;t walk away
            from checking this out thinking you can&rsquo;t afford it, because
            you may be surprised like I was.&rdquo;
            <cite>Douglas Nicholson, no-shave FUE patient, Google review</cite>
          </blockquote>
        </div>
      </section>

      <section className="sec sec--tint" id="included">
        <div className="wrap g2" style={{ alignItems: "start" }}>
          <div>
            <p className="eyebrow">One Price, One Plan</p>
            <h2>What the Session Price Includes</h2>
            <p className="lede">
              We price the session, not each graft. Dr. Imami estimates the
              grafts your plan needs, and the number you are quoted covers the
              procedure and your first year of care.
            </p>
            <ul className="checks" style={{ marginTop: 22 }}>
              {INCLUDED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card" id="financing">
            <span className="num">Financing</span>
            <h3>Pay Monthly with CareCredit or Affirm</h3>
            <p>
              Hair restoration surgery cost can be spread over monthly payments
              rather than paid in one go, through CareCredit and Affirm.
              {FINANCE_MONTHLY
                ? ` For many patients that works out from about ${FINANCE_MONTHLY} a month, depending on the plan and term you choose.`
                : " Ask on your free discovery call for an indicative monthly figure for your session size."}
            </p>
            <p style={{ marginTop: 14 }}>
              Approval takes minutes, and you will know your monthly figure
              before you commit to anything.
            </p>
            <a className="btn" style={{ marginTop: 22 }} href="#consult">
              Book a Free Discovery Call
            </a>
          </div>
        </div>
      </section>

      <section className="sec" id="ask">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">Comparing Quotes?</p>
            <h2>What to Ask Any Clinic Before You Pay</h2>
            <p className="lede">
              Whether you are comparing local clinics, national chains or a
              package abroad, three questions expose the real cost.
            </p>
          </div>
          <div className="g3">
            {ASK.map((item, i) => (
              <div className="card" key={item.h}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{item.h}</h3>
                <p>{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--tint" id="results">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">Real Results</p>
            <h2>What That Price Actually Buys</h2>
          </div>
          <BASlider items={RESULTS} />
          <p className="disc disc--center">
            The images above are displayed with the consent of the patients.
            The outcomes shown are only relevant for these patients and do not
            necessarily reflect the results other patients may experience.
          </p>
        </div>
      </section>

      {/* Closing booking widget */}
      <section className="sec sec--dark" id="consult">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">Free Discovery Call</p>
            <h2>Get Your Number in Writing</h2>
            <p className="lede">
              A free phone call with a hair transplant specialist is the
              fastest way to an honest figure for your hair. No pressure, no
              obligation.
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
