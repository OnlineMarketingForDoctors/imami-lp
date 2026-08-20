import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import LeadFormEmbed from "../components/LeadFormEmbed";
import ReviewMarquee from "../components/ReviewMarquee";
import BASlider, { BAItem } from "../components/BASlider";
import BackToTop from "../components/BackToTop";
import HeroBA from "../components/HeroBA";
import { NAV_MAIN } from "../site";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/?q=place_id:ChIJMWgAohAP3ogRYDZWIg_3KX0";

/* Font Awesome solid star */
const STAR =
  "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z";

export const metadata: Metadata = {
  title: "FUE Hair Transplant in Florida | Follicular Unit Extraction",
  description:
    "Surgeon-led, no-shave FUE hair transplant in Melbourne, Florida. Natural hairline restoration by triple board-certified Dr. Emran Imami. Book a free discovery call.",
  robots: { index: false, follow: true },
};

const HERO_POINTS = [
  "Triple Board-Certified Surgeon",
  "Flexible Financing Available",
  "Natural-Looking, Artful Results",
  "30+ Years Surgical Excellence",
];

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
  { h: "Consultation", p: "In-depth analysis of hair loss, medical history, and goal setting." },
  { h: "Planning & Design", p: "Custom hairline design and calculation of required graft count." },
  { h: "Donor Preparation", p: "Local anesthesia administered; meticulous extraction begins." },
  { h: "Graft Placement", p: "Strategic implantation into recipient sites for optimal density." },
  { h: "Post-op Care", p: "Immediate review, care instructions provided, and you head home." },
  { h: "Follow-up", p: "Scheduled check-ins at 2 weeks, 6 months, and 12 months." },
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
    a: ["No. Dr. Imami specialises in No-Shave FUE, which allows the surrounding hair to be kept at its existing length so the procedure remains completely discreet. Individual follicles are extracted from longer donor hair without shaving the head, meaning you can return to work and social settings without an obvious ‘transplant look’. For larger sessions where a partial trim is needed, Dr. Imami will discuss your options during your consultation and design an approach that fits both your hair loss pattern and your lifestyle."],
  },
  {
    q: "When will I see the final results?",
    a: ["Hair growth after FUE happens gradually. The transplanted hairs typically shed within the first few weeks (this is normal and expected), with new growth beginning around the 3–4 month mark. Most patients see noticeable density and a clear improvement by 6 months, and the final, fully matured result is generally visible at 12–18 months post-op. We monitor your progress with scheduled follow-ups at Day 2, Day 14, Month 6, and Year 1 to track your transformation."],
  },
  {
    q: "How much does a hair transplant cost?",
    a: ["There is no single hair transplant price, because no two patients need the same session. Dr. Imami estimates the graft count your plan requires, then quotes a custom session price rather than charging per graft. As a reference, recent no-shave FUE patients have typically received between 1,100 and 2,000 grafts in a session. At your consultation you receive a written, itemized session quote covering your procedure and your year-one follow-ups, and financing is available through CareCredit and Affirm, so the cost can be spread over monthly payments. When comparing any FUE hair transplant quote, ask what the session includes, who performs the surgery, and whether follow-ups are included."],
  },
  {
    q: "Do patients travel from Miami or Orlando?",
    a: ["Yes, all the time, and many patients travel to us from across the country. Our hair transplant clinic is in Melbourne, on Florida's Space Coast, about an hour from Orlando, a comfortable drive up the coast from Miami, and just 1 mile from Melbourne-Orlando International Airport (MLB) for patients who fly in. If you have been comparing hair transplant Orlando options, researching hair transplant Miami Florida clinics, or searching for hair replacement in Miami, FL, many patients in exactly that position choose to make the trip for a surgeon-led, no-shave FUE procedure. Start with a same-day virtual consultation from wherever you are, then visit once for the procedure itself."],
  },
  {
    q: "How many grafts will I need?",
    a: ["The number of grafts varies based on your degree of hair loss (Norwood stage), the areas being treated, your donor density, and your desired result. As a reference, Dr. Imami’s recent No-Shave FUE patients have typically received between 1,100 and 2,000 grafts per session. For example, a Norwood 3 hairline restoration may require around 1,100–1,800 grafts, while more advanced patterns at Norwood 4–5 often need 1,800–2,000+ grafts. During your consultation, Dr. Imami will assess your scalp, design your hairline, and calculate the precise graft count needed to achieve a natural, balanced outcome."],
  },
];

/** Slowly rotating circular "Imami Hair Restoration" badge, as on the live page. */
function Badge({ dark, className }: { dark?: boolean; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={`badge${className ? " " + className : ""}`}
      src={dark ? "/images/Imami-Hair-Restoration-1.png" : "/images/Imami-Hair-Restoration.png"}
      alt=""
      width={226}
      height={227}
      loading="lazy"
    />
  );
}

export default function FollicularUnitExtraction() {
  return (
    <>
      <SiteHeader nav={NAV_MAIN} />

      {/* Hero: full-bleed background video (image fallback), left copy */}
      <section className="hero2" id="top">
        {/* Rendered as raw HTML so the muted attribute lands in the markup
            itself; browsers refuse to autoplay before hydration without it. */}
        <div
          className="hero-media"
          aria-hidden="true"
          dangerouslySetInnerHTML={{
            __html: `<video autoplay muted loop playsinline preload="metadata" poster="/images/FUE-Hair-Transplant.jpg"><source src="/hero-video.webm" type="video/webm"><source src="/hero-video.mp4" type="video/mp4"></video>`,
          }}
        />
        <div className="wrap">
          <p className="eyebrow eyebrow--accent">FUE Hair Transplant</p>
          <h1>
            No-Shave FUE - Natural,
            <br />
            Undetectable Results
          </h1>
          <p className="hero-sub">
            {/* Font Awesome solid "gift" */}
            <svg className="hero-gift" viewBox="0 0 512 512" aria-hidden="true">
              <path d="M190.5 68.8 225.3 128h-1.3-72c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-41.6c6.1-12 9.6-25.6 9.6-40 0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40h-72-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48h2.2c22.1 0 40 17.9 40 40zM32 288v176c0 26.5 21.5 48 48 48h144V288H32zm256 224h144c26.5 0 48-21.5 48-48V288H288v224z" />
            </svg>
            <strong className="hero-offer">
              Complimentary biomimetic hair growth treatment
            </strong>{" "}
            with every hair transplant, included in Dr. Imami&rsquo;s
            post-operative care program.*
          </p>
          <ul className="hero-points">
            {HERO_POINTS.map((point) => (
              <li key={point}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1.2 14.4-4-4 1.7-1.7 2.3 2.3 4.7-4.7 1.7 1.7z" />
                </svg>
                {point}
              </li>
            ))}
          </ul>
          <div className="hero-cta">
            <a className="btn" href="#consult">
              Book a Free Discovery Call
            </a>
          </div>
          <a
            className="hero-rating"
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/google-icon.svg" alt="" width={22} height={22} />
            <span
              className="hero-rating-stars"
              role="img"
              aria-label="4.5 out of 5 stars"
            >
              {[0, 1, 2, 3].map((n) => (
                <svg key={n} viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#FF8400" d={STAR} />
                </svg>
              ))}
              {/* half star: left half brass, right half faint */}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <defs>
                  <linearGradient id="halfstar">
                    <stop offset="50%" stopColor="#FF8400" />
                    <stop offset="50%" stopColor="rgba(255,255,255,.35)" />
                  </linearGradient>
                </defs>
                <path fill="url(#halfstar)" d={STAR} />
              </svg>
            </span>
            <span className="hero-rating-text">
              <b>4.5</b> out of 5 &middot; Google reviews
            </span>
          </a>
          <p className="hero-fine">
            *Offered with procedures booked through this page. Ask at your
            consultation for full details.
          </p>
          <HeroBA
            items={RESULTS.slice(0, 4).map((r) => ({
              img: r.img,
              alt: `No shave FUE hair transplant before and after, age ${r.age}, Norwood ${r.norwood}`,
            }))}
          />
        </div>
      </section>

      <section className="sec sec--tint" id="reviews" style={{ borderTop: "none" }}>
        <div className="wrap">
          <div className="head" style={{ marginBottom: 34 }}>
            <p className="eyebrow">Patient Testimonials</p>
            <h2>What Our Patients Say</h2>
          </div>
        </div>
        <ReviewMarquee />
      </section>

      <section className="sec sec--dark" id="approach">
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
              alongside him, bringing surgical-level precision and artistry to
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
          <p className="disc disc--center">
            The images above are displayed with the consent of the patients. The
            outcomes shown are only relevant for these patients and do not
            necessarily reflect the results other patients may experience. Our
            team will discuss any factors that could influence the results that
            you may get.
          </p>
          <div className="hero-cta hero-cta--center">
            <a className="btn" href="#consult">
              Book Your Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* What is FUE + What FUE Can Treat: one dark textured section, as on the site */}
      <section className="sec sec--dark" id="what">
        <div className="wrap what-grid">
          <div>
            <p className="eyebrow">The Technique</p>
            <h2>What is FUE?</h2>
            <p className="lede">
              Follicular Unit Extraction (FUE) is the most advanced, minimally
              invasive hair transplant method available today. It involves
              extracting individual hair follicles from a donor area and
              implanting them where hair is thinning.
            </p>
            <p className="kd">Key Distinction</p>
            <p className="lede" style={{ marginTop: 12 }}>
              Whether you call it an FUE hair transplant, FUE hair replacement
              or simply FUE, the technique is the same, and Dr. Imami
              specializes in the no-shave version. Individual follicles are
              taken from longer donor hair without shaving your head, so the
              procedure stays discreet from day one and leaves no linear scar.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="collage"
              src="/images/key-distinction.webp"
              alt="Dr. Imami performing FUE hair transplant procedures"
              loading="lazy"
            />
          </div>
          <div id="treats">
            <h3 className="treats-title">What FUE Can Treat</h3>
            <ul className="treat-rows">
              {TREATS.map((t) => (
                <li key={t.h}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/images/${t.icon}`} alt="" width={72} height={72} loading="lazy" />
                  <div>
                    <h4>{t.h}</h4>
                    <p>{t.p}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How FUE Works: cream, circular badge, staggered boxes with big numbers */}
      <section className="sec sec--tint" id="works">
        <div className="wrap">
          <div className="works-head">
            <Badge dark className="badge--works" />
            <div>
              <p className="eyebrow">The Process</p>
              <h2>
                How FUE
                <br />
                Works
              </h2>
            </div>
          </div>
          <div className="wsteps">
            {STEPS.map((s, i) => (
              <div className={`wstep wstep--${i + 1}`} key={s.h}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="wnum" src={`/images/${s.num}`} alt="" loading="lazy" />
                <h4>{s.h}</h4>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="benefits">
        <div className="wrap g2">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="rounded-img"
              src="/images/benefits.png"
              alt="FUE hair transplant procedure in progress"
              width={623}
              height={564}
              loading="lazy"
            />
          </div>
          <div>
            <p className="eyebrow">Advantages</p>
            <h2>Benefits of FUE</h2>
            <ul className="checks" style={{ marginTop: 26 }}>
              {BENEFITS.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="sec sec--tint" id="cost">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">Investment</p>
            <h2>Hair Transplant Cost &amp; Financing</h2>
            <p className="lede">
              There is no single hair transplant price, because no two patients
              need the same number of grafts. What follows is how the cost of a
              hair transplant is actually built, so you can judge any quote,
              ours or anyone else&rsquo;s.
            </p>
          </div>
          {/* Both columns stretch to the same height; the table distributes
              the extra space across its rows. */}
          <div className="g2 g2--stretch">
            <table className="tbl">
              <thead>
                <tr>
                  <th>What drives the price</th>
                  <th>Why</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Graft count</td>
                  <td>
                    Your estimated graft count sets the scope of the session. A
                    Norwood 3 hairline may need 1,100-1,800 grafts; Norwood 4-5
                    often 1,800-2,000 or more.
                  </td>
                </tr>
                <tr>
                  <td>Areas treated</td>
                  <td>
                    A hairline transplant alone costs less than hairline plus
                    crown.
                  </td>
                </tr>
                <tr>
                  <td>Donor density</td>
                  <td>
                    Determines how much can safely be moved in a single session.
                  </td>
                </tr>
                <tr>
                  <td>Technique</td>
                  <td>
                    FUE hair transplant cost differs from FUT. Dr. Imami
                    recommends the one that suits your case.
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="card">
              <span className="num">Typical Session Sizes</span>
              <h3>What Your Graft Count Means</h3>
              <table className="tbl" style={{ marginTop: 16 }}>
                <thead>
                  <tr>
                    <th>Session</th>
                    <th>Typically suits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,000-1,200</td>
                    <td>An early Norwood 2-3 hairline or temple rebuild</td>
                  </tr>
                  <tr>
                    <td>1,200-1,800</td>
                    <td>A full Norwood 3 hairline restoration</td>
                  </tr>
                  <tr>
                    <td>1,800-2,000+</td>
                    <td>Norwood 4-5, or hairline plus crown together</td>
                  </tr>
                </tbody>
              </table>
              <p style={{ marginTop: 16 }}>
                So if you are pricing a hair transplant 1000 grafts cost, or
                costing a 2000 grafts hair transplant, we first estimate your
                graft count, then quote a custom session price rather than a
                per-graft rate. Florida hair transplant cost differs between
                clinics mainly because session scopes and inclusions differ.
              </p>
            </div>
          </div>
          <div className="card" style={{ marginTop: 28 }}>
            <span className="num">Paying For It</span>
            <h3>Flexible Payment Plans</h3>
            <p>
              We offer financing through CareCredit and Affirm, so hair
              restoration surgery cost can be spread over monthly payments rather
              than paid in one go.
            </p>
            <ul className="checks" style={{ marginTop: 20 }}>
              <li>A written, itemized quote at your consultation, with no hidden extras</li>
              <li>Year-one follow-ups included, at Day 2, Day 14, Month 6 and Year 1</li>
              <li>Medication refills included through your first year</li>
              <li>A custom session price built on your estimated graft count, not per-graft pricing</li>
            </ul>
            <a className="btn" style={{ marginTop: 24 }} href="#consult">
              Get a personalized quote
            </a>
          </div>
        </div>
      </section>

      <section className="sec" id="who">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">Who We Treat</p>
            <h2>Hair Transplants for Men and Women</h2>
          </div>
          <div className="g2" style={{ alignItems: "stretch" }}>
            <div className="card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="card-img"
                src="/images/who-men.jpg"
                alt="Man with a full, natural head of hair"
                width={1400}
                height={939}
                loading="lazy"
              />
              <span className="num">Men</span>
              <h3>Male Pattern Hair Loss</h3>
              <p>
                Most of our patients are men with a receding hairline, a thinning
                crown or both. A men&rsquo;s FUE hair transplant rebuilds the
                frame of the face using your own hair, and no-shave FUE means
                colleagues need not know you have had anything done.
              </p>
              <p style={{ marginTop: 14 }}>
                Whether you are comparing mens hair transplant cost, male hair
                transplant cost, hair implants for men cost, male hair implants
                cost or hair replacement for men cost, the figure works the same
                way here: Dr. Imami assesses your donor area, estimates the
                grafts your plan needs, and quotes a custom session price in
                writing rather than a per-graft rate. Mens hair transplant
                surgery here is a single outpatient day.
              </p>
            </div>
            <div className="card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="card-img"
                src="/images/who-women.jpg"
                alt="Woman with thick, healthy shoulder-length hair"
                width={1400}
                height={939}
                loading="lazy"
              />
              <span className="num">Women</span>
              <h3>Female Thinning &amp; Hairlines</h3>
              <p>
                Women lose hair differently, more often diffuse thinning
                or a high, uneven hairline than a classic receding pattern. A
                female hairline transplant can lower and soften the frame, and
                FUE hair transplant for women is carried out without shaving the
                head.
              </p>
              <p style={{ marginTop: 14 }}>
                Female hair transplant cost is quoted the same way: a written
                custom session price after your assessment. That applies equally
                to a female hairline transplant cost, to female hair implants
                cost, and to any ladies hair transplant cost, hair implants for
                women cost or hair replacement for women cost you may be
                comparing. Ask every clinic what their session price includes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="band band--photo">
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

      {/* Your FUE Journey: dark textured, centre zigzag timeline */}
      <section className="sec sec--dark" id="journey">
        <div className="wrap">
          <div className="journey-head">
            <div>
              <p className="eyebrow">The Timeline</p>
              <h2>Your FUE Journey</h2>
            </div>
            <Badge className="badge--journey" />
          </div>
          <div className="zig">
            {JOURNEY.map((j, i) => (
              <div className={`zitem ${i % 2 ? "zitem--right" : "zitem--left"}`} key={j.h}>
                <h4>{j.h}</h4>
                <p>{j.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--tint" id="aftercare">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">Recovery</p>
            <h2>Post-Op Aftercare</h2>
          </div>
          <div className="g3">
            {AFTERCARE.map((a) => (
              <div className="card tcard" key={a.h}>
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
              restoration procedure at Imami Hair Restoration, a surgeon-led
              hair transplant clinic in Melbourne, Florida that patients travel
              to from Orlando, Miami and across the country.
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
                Book Your Free Consultation
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

      {/* Consultation: portrait right with the form overlapping it, photo lower-left */}
      <section className="sec sec--dark" id="consult">
        <div className="wrap consult-grid">
          <div>
            <p className="eyebrow">Consultation</p>
            <h2>Request a Consultation with Dr. Imami</h2>
            <p className="lede">
              Begin with a private, surgeon-led consultation with Dr. Imami to
              discuss your hair loss concerns, suitability and expected
              outcomes. Same-day virtual consultations are available, so you can
              start from home wherever you are. Patients visit from Orlando,
              Miami and across the country, and our office is just 1 mile from
              Melbourne-Orlando International Airport (MLB), so fly-in patients
              can come once for the procedure itself.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="rounded-img consult-side"
              src="/images/Rectangle-187-1-1.png"
              alt="Active lifestyle after FUE hair transplant"
              loading="lazy"
            />
          </div>
          <div className="consult-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="rounded-img consult-portrait"
              src="/images/Rectangle-183-8-1.png"
              alt="Confident man after hair restoration"
              loading="lazy"
            />
          </div>
        </div>
        <div className="wrap">
          <div className="consult-form">
            <LeadFormEmbed />
          </div>
        </div>
      </section>

      <SiteFooter />

      <BackToTop />
    </>
  );
}
