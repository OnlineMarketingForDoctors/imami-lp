import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import LeadFormEmbed from "../components/LeadFormEmbed";
import ReviewSlider from "../components/ReviewSlider";
import BASlider, { BAItem } from "../components/BASlider";
import { NAV_MAIN, PHONE, PHONE_HREF } from "../site";

export const metadata: Metadata = {
  title: "FUE Hair Transplant in Florida | Follicular Unit Extraction",
  description:
    "Surgeon-led, no-shave FUE hair transplant in Melbourne, Florida. Natural hairline restoration by triple board-certified Dr. Emran Imami. Book a free discovery call.",
  robots: { index: false, follow: true },
};

const MAIN = "https://www.imamihair.com";

const RESULTS: BAItem[] = [
  { img: "1.png", age: "37", norwood: "3", grafts: "1,112", timeline: "1 Year Post-Op" },
  { img: "1-1.png", age: "39", norwood: "3", grafts: "1,647", timeline: "19 Months after 2nd FUE" },
  { img: "1-2.png", age: "61", norwood: "4A", grafts: "1,205", timeline: "15 Months Post-Op" },
  { img: "1-3.png", age: "32", norwood: "3", grafts: "1,800", timeline: "1 Year Post-Op" },
  { img: "1-4.png", age: "33", norwood: "3A", grafts: "1,750", timeline: "4 Years Post-Op" },
  { img: "1-5.png", age: "66", norwood: "5", grafts: "1,350", timeline: "1 Year Post-Op" },
  { img: "1-6.png", age: "38", norwood: "4", grafts: "2,023", timeline: "2 Years Post-Op" },
  { img: "1-8.png", age: "55", norwood: "5", grafts: "1,800", timeline: "1 Year Post-Op" },
  { img: "1-9.png", age: "61", norwood: "4A", grafts: "1,205", timeline: "15 Months Post-Op" },
  { img: "2-9.png", age: "39", norwood: "4A", grafts: "1,875", timeline: "1 Year Post-Op" },
];

const TREATS = [
  { icon: "Group-467.png", h: "Receding Hairline", p: "Redesigning and lowering the hairline for a youthful frame." },
  { icon: "Group-473.png", h: "Thinning Crown", p: "Restoring density to the vertex for complete coverage." },
  { icon: "Group-467.png", h: "Temple Restoration", p: "Rebuilding temporal points for a balanced facial profile." },
  { icon: "Group-474.png", h: "Scar Camouflage", p: "Concealing previous surgical scars or trauma." },
  { icon: "Group-475-1.png", h: "Hairline Refinement", p: "Adding density to previous transplants or naturally weak hairlines." },
  { icon: "Group-475.png", h: "Eyebrow Restoration", p: "Recreating fuller, natural-looking eyebrows for both men and women." },
];

const STEPS = [
  { num: "01.png", h: "Extraction", p: "Individual follicles are carefully extracted using a microscopic punch tool." },
  { num: "02.png", h: "Preparation", p: "Grafts are inspected, sorted, and preserved in a specialized solution." },
  { num: "03.png", h: "Site Creation", p: "Precise recipient sites are carefully created, matching the hair’s natural angle and direction." },
  { num: "04.png", h: "Implantation", p: "Grafts are delicately placed into the sites for natural-looking density." },
];

const BENEFITS = [
  "No linear scarring in the donor area",
  "Significantly shorter recovery time",
  "No-shave options available for minimal downtime",
  "Ability to wear hair longer or shorter",
  "Repeatable procedure for future thinning",
  "Completely natural, undetectable outcomes",
];

const WHY = [
  { h: "Triple Board-Certified", p: "A rare distinction ensuring the highest standards of surgical safety, ethics, and aesthetic outcomes." },
  { h: "Surgeon-Led Procedure", p: "Dr Imami directs his experienced hair transplant team for optimal extraction and site creation." },
  { h: "Personalized Design", p: "Every hairline is custom-designed based on facial geometry, age, and long-term hair loss progression." },
];

const JOURNEY = [
  { n: "01", h: "Consultation", p: "In-depth analysis of hair loss, medical history, and goal setting." },
  { n: "02", h: "Planning & Design", p: "Custom hairline design and calculation of required graft count." },
  { n: "03", h: "Donor Preparation", p: "Local anesthesia administered; meticulous extraction begins." },
  { n: "04", h: "Graft Placement", p: "Strategic implantation into recipient sites for optimal density." },
  { n: "05", h: "Post-op Care", p: "Immediate review, care instructions provided, and you head home." },
  { n: "06", h: "Follow-up", p: "Scheduled check-ins at 2 weeks, 6 months, and 12 months." },
];

const AFTERCARE = [
  { icon: "Group-472-1.png", h: "First 48 Hours", p: "Rest with head elevated. Spray grafts with provided saline solution. Avoid touching the recipient area." },
  { icon: "Group-473-1.png", h: "Activity Restrictions", p: "No strenuous exercise or heavy lifting for 14 days. Avoid direct sun exposure to the scalp for 3 months." },
  { icon: "Group-467-1.png", h: "Follow-up Schedule", p: "We monitor your progress closely with scheduled visits at Day 2, Day 14, Month 6, and Year 1." },
];

const FAQ: { q: string; a: string[]; open?: boolean }[] = [
  {
    q: "Is the FUE procedure painful?",
    open: true,
    a: ["No. The procedure is performed under local anesthesia. You may feel minor discomfort during the initial numbing injections, but the surgery itself is virtually painless. Most patients watch movies, listen to music, or even nap during the process."],
  },
  {
    q: "Do I have to shave my head?",
    a: ["No — Dr. Imami specialises in No-Shave FUE, which allows the surrounding hair to be kept at its existing length so the procedure remains completely discreet. Individual follicles are extracted from longer donor hair without shaving the head, meaning you can return to work and social settings without an obvious ‘transplant look’. For larger sessions where a partial trim is needed, Dr. Imami will discuss your options during your consultation and design an approach that fits both your hair loss pattern and your lifestyle."],
  },
  {
    q: "When will I see the final results?",
    a: ["Hair growth after FUE happens gradually. The transplanted hairs typically shed within the first few weeks (this is normal and expected), with new growth beginning around the 3–4 month mark. Most patients see noticeable density and a clear improvement by 6 months, and the final, fully matured result is generally visible at 12–18 months post-op. We monitor your progress with scheduled follow-ups at Day 2, Day 14, Month 6, and Year 1 to track your transformation."],
  },
  {
    q: "How many grafts will I need?",
    a: ["The number of grafts varies based on your degree of hair loss (Norwood stage), the areas being treated, your donor density, and your desired result. As a reference, Dr. Imami’s recent No-Shave FUE patients have typically received between 1,100 and 2,000 grafts per session — for example, a Norwood 3 hairline restoration may require around 1,100–1,800 grafts, while more advanced patterns at Norwood 4–5 often need 1,800–2,000+ grafts. During your consultation, Dr. Imami will assess your scalp, design your hairline, and calculate the precise graft count needed to achieve a natural, balanced outcome."],
  },
];

export default function FollicularUnitExtraction() {
  return (
    <>
      <SiteHeader nav={NAV_MAIN} />

      <section className="hero" id="top">
        <div className="hero-bg" aria-hidden="true" />
        <div className="wrap hero-grid">
          <div className="hero-stack">
            <p className="eyebrow">FUE Hair Transplant</p>
            <h1>No-Shave FUE - Natural, Undetectable Results</h1>
            <p className="hero-sub">
              Surgeon-led experienced team, no-shave FUE for natural hairline
              restoration and premium patient care.
            </p>
            <div className="hero-cta">
              <a className="btn" href="#consult">
                Book a Free Discovery Call
              </a>
            </div>
            <p className="trust">
              · Triple Board-Certified Surgeon · Flexible Financing Available ·
              Natural-Looking, Artful Results · 30+ Years Surgical Excellence
            </p>
          </div>
          <div className="hero-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/FUE-Hair-Transplant.jpg"
              alt="FUE Hair Transplant"
              width={1000}
              height={727}
            />
          </div>
        </div>
      </section>

      <section className="sec sec--tint" id="reviews" style={{ borderTop: "none" }}>
        <div className="wrap rev-grid">
          <div>
            <p className="eyebrow">Patient Testimonials</p>
            <h2>What Our Patients Say</h2>
            <p className="rev-meta">
              Based on 15 reviews of Imami Hair Restoration.{" "}
              <a
                href="https://www.google.com/maps/place/?q=place_id:ChIJMWgAohAP3ogRYDZWIg_3KX0"
                target="_blank"
                rel="noopener"
              >
                Read them on Google
              </a>
              .
            </p>
            <span className="gbadge">
              Posted on <b>Google</b>
            </span>
          </div>
          <ReviewSlider />
        </div>
      </section>

      <section className="sec" id="approach">
        <div className="wrap g2">
          <div>
            <p className="eyebrow">Our Approach</p>
            <h2>The Doctor You Meet Is the Doctor Who Operates.</h2>
            <p className="lede">
              At most large hair restoration chains, your consultation is with a
              salesperson and your surgery is performed by a technician. At Imami
              Hair Restoration, it works differently. Dr. Imami personally
              evaluates every patient, designs your new hairline and performs the
              surgical components of every procedure himself.
            </p>
            <p className="lede">
              Your transplant is then completed under his direct supervision by a
              dedicated team of technicians with 15 years of experience working
              alongside him — bringing surgical-level precision and artistry to
              every stage of your procedure.
            </p>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="rounded-img"
              src="/images/consultation-with-dr-imami.webp"
              alt="Consultation with Dr Imami"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="sec sec--tint" id="results">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">Real Results</p>
            <h2>Before &amp; After</h2>
            <p className="lede">
              See the transformative results our patients have achieved with Dr.
              Imami.
            </p>
          </div>
          <BASlider items={RESULTS} />
          <p className="disc">
            The images above are displayed with the consent of the patients. The
            outcomes shown are only relevant for these patients and do not
            necessarily reflect the results other patients may experience. Our
            team will discuss any factors that could influence the results that
            you may get.
          </p>
          <div className="hero-cta">
            <a
              className="btn"
              href={`${MAIN}/before-and-after-photos/`}
              target="_blank"
              rel="noopener"
            >
              View Full Gallery
            </a>
          </div>
        </div>
      </section>

      <section className="sec" id="what">
        <div className="wrap g2">
          <div>
            <p className="eyebrow">The Technique</p>
            <h2>What is FUE?</h2>
            <p className="lede">
              Follicular Unit Extraction (FUE) is the most advanced, minimally
              invasive hair transplant method available today. It involves
              extracting individual hair follicles from a donor area and
              implanting them where hair is thinning.
            </p>
          </div>
          <div className="card">
            <span className="num">Key Distinction</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="rounded-img"
              src="/images/key-distinction.webp"
              alt="Key distinction of no-shave FUE"
              loading="lazy"
              style={{ marginBottom: 16 }}
            />
            <p>
              Follicular Unit Extraction (FUE) is the most advanced, minimally
              invasive hair transplant method available today. It involves
              extracting individual hair follicles from a donor area and
              implanting them where hair is thinning.
            </p>
          </div>
        </div>
      </section>

      <section className="sec sec--dark bg-photo" id="treats">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">What FUE Can Treat</p>
          </div>
          <div className="g3">
            {TREATS.map((t) => (
              <div className="card tcard" key={t.h}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/images/${t.icon}`} alt="" width={72} height={72} loading="lazy" />
                <h3>{t.h}</h3>
                <p>{t.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="works">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">The Process</p>
            <h2>How FUE Works</h2>
          </div>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step" key={s.h}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="step-num" src={`/images/${s.num}`} alt="" loading="lazy" />
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--tint" id="benefits">
        <div className="wrap g2" style={{ alignItems: "start" }}>
          <div>
            <p className="eyebrow">Advantages</p>
            <h2>Benefits of FUE</h2>
            <ul className="checks" style={{ marginTop: 26 }}>
              {BENEFITS.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div className="card" id="why">
            <span className="num">Excellence</span>
            <h3 style={{ fontSize: "1.7rem" }}>Why Choose Dr. Imami</h3>
            {WHY.map((w) => (
              <div key={w.h} style={{ marginTop: 18 }}>
                <h3 style={{ marginBottom: 6 }}>{w.h}</h3>
                <p>{w.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="band bg-photo">
        <div className="wrap">
          <h2>
            Wondering if FUE is the Right Procedure for You? Book a Consultation
            with Dr. Imami to Discuss Your Options.
          </h2>
          <div className="hero-cta">
            <a className="btn" href="#consult">
              Book a Free Discovery Call
            </a>
          </div>
        </div>
      </div>

      <section className="sec" id="journey">
        <div className="wrap g2" style={{ alignItems: "start" }}>
          <div>
            <p className="eyebrow">The Timeline</p>
            <h2>Your FUE Journey</h2>
            <div className="timeline" style={{ marginTop: 34 }}>
              {JOURNEY.map((j) => (
                <div className="tl" key={j.n}>
                  <span className="num">{j.n}</span>
                  <h3>{j.h}</h3>
                  <p>{j.p}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Recovery</p>
            <h2 style={{ fontSize: "2rem" }}>Post-Op Aftercare</h2>
            {AFTERCARE.map((a) => (
              <div className="card tcard" style={{ marginTop: 18 }} key={a.h}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/images/${a.icon}`} alt="" width={72} height={72} loading="lazy" />
                <h3>{a.h}</h3>
                <p>{a.p}</p>
              </div>
            ))}
          </div>
        </div>
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
              excellence, bringing precision and artistry to every hair
              restoration procedure at Imami Hair Restoration in Melbourne,
              Florida.
            </p>
            <div className="hero-cta">
              <a
                className="btn btn--lt"
                href={`${MAIN}/meet-dr-imami/`}
                target="_blank"
                rel="noopener"
              >
                View Full Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="faq">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">Common Questions</p>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq">
            {FAQ.map((item) => (
              <details key={item.q} open={item.open}>
                <summary>{item.q}</summary>
                {item.a.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--dark bg-photo" id="consult">
        <div className="wrap form-grid">
          <div>
            <p className="eyebrow">Consultation</p>
            <h2>Request a Consultation with Dr. Imami</h2>
            <p className="lede">
              Begin with a private, surgeon-led consultation with Dr. Imami to
              discuss your hair loss concerns, suitability and expected outcomes.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="rounded-img consult-img"
              src="/images/Rectangle-183-8-1.png"
              alt="Imami Hair Restoration clinic"
              loading="lazy"
            />
          </div>
          <LeadFormEmbed />
        </div>
      </section>

      <SiteFooter />

      <div className="mobar">
        <a className="call" href={PHONE_HREF}>
          Call now
        </a>
        <a className="book" href="#consult">
          Book a free call
        </a>
      </div>
    </>
  );
}
