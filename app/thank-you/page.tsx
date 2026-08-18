import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { LANDING, PHONE, PHONE_HREF } from "../site";

export const metadata: Metadata = {
  title: "Thank You | Imami Hair Restoration",
  description:
    "Your consultation request has been received. A member of Dr. Imami's team will be in touch within one business day.",
  robots: { index: false, follow: false },
};

const NEXT = [
  {
    n: "01",
    h: "Dr. Imami Reviews Your Request",
    p: "Your enquiry goes straight to the surgical team rather than a call centre, so the person who reads it is the person who will treat you.",
  },
  {
    n: "02",
    h: "We Call You Within One Business Day",
    p: "We will reach you on the number you gave us to arrange your free discovery call, in person or virtually, including after hours if that suits you better.",
  },
  {
    n: "03",
    h: "Your Free Discovery Call",
    p: "You speak with Dr. Imami about your hair loss, your likely graft count and what it would cost. You leave with a written, itemized quote and no sales pressure.",
  },
];

export default function ThankYou() {
  return (
    <>
      {/*
        CONVERSION TRACKING
        This page is the conversion destination for the landing page form.
        Google Tag Manager (GTM-NPV88WZQ) loads site-wide from the root layout,
        so the conversion is configured in the GTM container rather than by
        pasting a gtag snippet here: add a Google Ads conversion tag fired by a
        Page View trigger limited to Page Path equals /thank-you. Scoping the
        trigger that way counts one conversion per completed form and never on
        a landing-page view.
      */}
      <SiteHeader base={LANDING} />

      <section className="sec sec--dark" style={{ paddingTop: 96 }}>
        <div className="wrap">
          <div className="head" style={{ marginBottom: 0 }}>
            <p className="eyebrow">Request received</p>
            <h2 style={{ fontSize: "clamp(2.2rem,5vw,3.6rem)" }}>
              Thank You. Your Request Is With Dr. Imami&rsquo;s Team.
            </h2>
            <p className="lede">
              We have your details and a member of the team will be in touch
              within one business day to arrange your free discovery call. Your
              complimentary biomimetic hair growth treatment is noted against
              your enquiry.
            </p>
            <div className="hero-cta">
              <a className="btn" href={PHONE_HREF}>
                Call {PHONE}
              </a>
              <a className="btn btn--lt" href={LANDING}>
                Back to the FUE page
              </a>
            </div>
            <p className="cta-offer">
              Prefer to speak to someone now? We are open Monday to Friday, 8am
              to 5pm, with after-hours appointments available.
            </p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">What Happens Next</p>
            <h2>Here Is How Your Consultation Works</h2>
          </div>
          <div className="g3">
            {NEXT.map((step) => (
              <div className="card" key={step.n}>
                <span className="num">{step.n}</span>
                <h3>{step.h}</h3>
                <p>{step.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--tint">
        <div className="wrap g2" style={{ alignItems: "start" }}>
          <div>
            <p className="eyebrow">While You Wait</p>
            <h2>Worth Knowing Before Your Call</h2>
            <p className="lede">
              Nothing is required of you before we speak. If you would like to
              come prepared, it helps to think about how long you have been
              losing hair, whether anyone in your family has the same pattern,
              and which areas matter most to you.
            </p>
            <p className="lede">
              Photographs are useful but not essential. If you have any, bring
              them to the call.
            </p>
            <div className="offercard">
              <span className="num">Included With Your Procedure</span>
              <h3>Biomimetic Hair Growth Treatment</h3>
              <p>
                Because you enquired through our FUE page, your procedure
                includes a complimentary session of our biomimetic hair growth
                treatment, given as part of your post-operative care program
                alongside your year-one follow-ups and included medication
                refills.
              </p>
              <p className="disc-sm">
                This treatment is offered as an adjunct to surgery and is not a
                substitute for it. It is not an FDA-approved product, and no
                specific outcome is implied or guaranteed. Dr. Imami will explain
                what it involves, and whether it is appropriate for you, at your
                consultation.
              </p>
            </div>
          </div>
          <div className="card">
            <span className="num">Reach Us Directly</span>
            <h3>Imami Hair Restoration</h3>
            <p>
              NASA Palms Professional Center
              <br />
              1140 Broadband Drive, Unit G2
              <br />
              Melbourne, FL 32901
            </p>
            <ul className="checks" style={{ marginTop: 22 }}>
              <li>
                Local:&nbsp;
                <a href={PHONE_HREF} style={{ color: "inherit", textDecoration: "underline" }}>
                  {PHONE}
                </a>
              </li>
              <li>Toll-free: 855-5-HAIRMD (424763)</li>
              <li>
                <a href="mailto:info@imamihair.com" style={{ color: "inherit", textDecoration: "underline" }}>
                  info@imamihair.com
                </a>
              </li>
              <li>Mon-Fri, 8am to 5pm · after hours by appointment</li>
              <li>Virtual consultations available</li>
            </ul>
          </div>
        </div>
      </section>

      <SiteFooter />

      <div className="mobar">
        <a className="call" href={PHONE_HREF}>
          Call now
        </a>
        <a className="book" href={LANDING}>
          Back to FUE page
        </a>
      </div>
    </>
  );
}
