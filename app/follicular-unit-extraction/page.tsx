import type { Metadata } from "next";
import LeadForm from "./LeadForm";

export const metadata: Metadata = {
  title:
    "FUE Hair Transplant Florida | No-Shave FUE + Complimentary Growth Treatment | Imami Hair Restoration",
  description:
    "No-shave FUE hair transplant in Melbourne, Florida. Complimentary biomimetic hair growth treatment with every procedure. Triple board-certified surgeon, 30+ years. Book a free discovery call.",
  robots: { index: false, follow: true },
};

const PHONE = "321-312-4168";
const PHONE_HREF = "tel:3213124168";
const MEDIA = "https://www.imamihair.com/wp-content/uploads/2026/05";

const NAV = [
  { href: "#reviews", label: "Reviews" },
  { href: "#approach", label: "Our Approach" },
  { href: "#results", label: "Before & After" },
  { href: "#what", label: "What is FUE" },
  { href: "#works", label: "How It Works" },
  { href: "#cost", label: "Cost" },
  { href: "#location", label: "Location" },
  { href: "#faq", label: "FAQ" },
];

const USPS: { text: string; highlight?: boolean }[] = [
  { text: "Triple board-certified surgeon with over 30 years of hair restoration experience" },
  { text: "Natural-looking results using advanced techniques, including NeoGraft FUE" },
  { text: "Highly personalized treatment plans developed by Dr. Imami" },
  { text: "Flexible payment plans to ease the financial burden" },
  { text: "Complimentary biomimetic hair growth treatment with every hair transplant", highlight: true },
  { text: "One year of complimentary follow-up appointments" },
  { text: "Flexible after-hour online consultations and same-day virtual appointments available" },
];

const RESULTS = [
  { img: "1.png", tag: "No-shave FUE · Age 37 · Norwood 3", grafts: "1,112", timeline: "1 year post-op", alt: "No-shave FUE hair transplant before and after, age 37, Norwood 3, 1,112 grafts" },
  { img: "1-1.png", tag: "No-shave FUE · Age 39 · Norwood 3", grafts: "1,647", timeline: "19 months, 2nd FUE", alt: "No-shave FUE hair transplant before and after, age 39, Norwood 3, 1,647 grafts" },
  { img: "1-2.png", tag: "No-shave FUE · Age 61 · Norwood 4A", grafts: "1,205", timeline: "15 months post-op", alt: "No-shave FUE hair transplant before and after, age 61, Norwood 4A, 1,205 grafts" },
  { img: "1-3.png", tag: "No-shave FUE · Age 32 · Norwood 3", grafts: "1,800", timeline: "1 year post-op", alt: "No-shave FUE hair transplant before and after, age 32, Norwood 3, 1,800 grafts" },
  { img: "1-4.png", tag: "No-shave FUE · Age 33 · Norwood 3A", grafts: "1,750", timeline: "4 years post-op", alt: "No-shave FUE hair transplant before and after, age 33, Norwood 3A, 1,750 grafts" },
  { img: "1-6.png", tag: "No-shave FUE · Age 38 · Norwood 4", grafts: "2,023", timeline: "2 years post-op", alt: "No-shave FUE hair transplant before and after, age 38, Norwood 4, 2,023 grafts" },
];

const TREATS = [
  { h: "Receding Hairline", p: "Redesigning and lowering the hairline for a youthful frame, including hairline transplant work on weak or uneven temples." },
  { h: "Thinning Crown", p: "Restoring density to the vertex for complete coverage where a crown has opened up over time." },
  { h: "Temple Restoration", p: "Rebuilding temporal points for a balanced facial profile and a hairline that suits your age." },
  { h: "Scar Camouflage", p: "Concealing previous surgical scars, including strip-scar work and trauma, with individual follicle placement." },
  { h: "Hairline Refinement", p: "Adding density to previous hair transplants or naturally weak hairlines, including repair of work done elsewhere." },
  { h: "Mid-Scalp Density", p: "Filling thinning through the mid-scalp so the result reads evenly from hairline to crown." },
];

const STEPS = [
  { n: "01", h: "Extraction", p: "Individual follicles are carefully extracted using a microscopic punch tool." },
  { n: "02", h: "Preparation", p: "Grafts are inspected, sorted and preserved in a specialized solution." },
  { n: "03", h: "Site Creation", p: "Precise recipient sites are created, matching the hair’s natural angle and direction." },
  { n: "04", h: "Implantation", p: "Grafts are delicately placed into the sites for natural-looking density." },
];

const JOURNEY = [
  { n: "01", h: "Consultation", p: "In-depth analysis of hair loss, medical history and goal setting." },
  { n: "02", h: "Planning & Design", p: "Custom hairline design and calculation of the required graft count." },
  { n: "03", h: "Donor Preparation", p: "Local anesthesia administered; meticulous extraction begins." },
  { n: "04", h: "Graft Placement", p: "Strategic implantation into recipient sites for optimal density." },
  { n: "05", h: "Post-Op Care", p: "Immediate review, care instructions provided, and you head home." },
  { n: "06", h: "Follow-Up", p: "Scheduled check-ins at Day 2, Day 14, Month 6 and Year 1." },
];

const FAQ: { q: string; a: string[]; open?: boolean }[] = [
  {
    q: "Do I have to shave my head?",
    open: true,
    a: ["No. Dr. Imami specializes in no-shave FUE, which keeps the surrounding hair at its existing length so the procedure stays discreet. Individual follicles are extracted from longer donor hair without shaving the head, meaning you can return to work and social settings without an obvious transplant look. Patients search for this as a hair transplant without shaving, a hair transplant no shaving hair option, or FUE without shaving. These all describe the same procedure. For larger sessions where a partial trim is needed, Dr. Imami will discuss your options at consultation."],
  },
  {
    q: "How much does a hair transplant cost?",
    a: ["Hair transplant cost is driven by the number of grafts you need, which is why we quote after an assessment rather than advertising a flat hair transplant price. As a reference point, recent no-shave FUE patients have typically received between 1,100 and 2,000 grafts in a session. At your consultation you receive a written, itemized quote covering the procedure and your year-one follow-ups, and we offer financing through CareCredit and Affirm."],
  },
  {
    q: "How many grafts will I need?",
    a: ["It varies with your Norwood stage, the areas being treated, your donor density and the result you want. A Norwood 3 hairline restoration may need around 1,100-1,800 grafts, while more advanced patterns at Norwood 4-5 often need 1,800-2,000 or more. Dr. Imami will assess your scalp, design your hairline and calculate the graft count needed for a natural, balanced outcome."],
  },
  {
    q: "Is the FUE procedure uncomfortable?",
    a: ["The procedure is performed under local anesthesia. You may feel minor discomfort during the initial numbing injections, but most patients are comfortable throughout and watch a film, listen to music or nap during the session."],
  },
  {
    q: "When will I see results?",
    a: ["Growth after FUE is gradual. Transplanted hairs typically shed within the first few weeks, which is normal and expected, with new growth beginning around the 3-4 month mark. Most patients see noticeable density by 6 months, and the fully matured result is generally visible at 12-18 months. Results vary by individual."],
  },
  {
    q: "Will there be a scar?",
    a: ["FUE does not leave a linear donor scar the way strip surgery can, because follicles are taken individually rather than as a strip. Any surgical procedure creates some marking; the small extraction points fade over time and are covered by surrounding hair. Dr. Imami will explain what to expect for your donor area at consultation."],
  },
  {
    q: "What is the complimentary biomimetic hair growth treatment?",
    a: [
      "Every hair transplant booked through this page includes one complimentary session of our biomimetic hair growth treatment, provided as part of your post-operative care program. It sits alongside the other things already included in your quote: your follow-up appointments at Day 2, Day 14, Month 6 and Year 1, and your medication refills through the first year.",
      "It is an adjunct to your surgery rather than a replacement for it, and it is not an FDA-approved product. No specific result is implied or guaranteed. Dr. Imami will talk you through exactly what it involves, and whether he considers it appropriate in your case, at your consultation.",
    ],
  },
  {
    q: "What is the average cost of a hair transplant?",
    a: [
      "Published figures for the average cost of hair transplant surgery vary enormously, because they average very different graft counts. FUE cost and follicular unit extraction cost describe the same thing, and your FUE hair transplant price should be quoted per graft rather than as a flat package.",
      "When you compare quotes for hair implant cost, hair graft cost, hairline transplant cost or overall hair restoration cost, ask each clinic three things: how many grafts is that for, who is performing the surgery, and are follow-ups included. Our quotes include your year-one follow-ups and medication refills.",
    ],
  },
  {
    q: "Do patients travel from Orlando?",
    a: ["Yes. We are about an hour from Orlando and a steady share of our patients drive over. If you have been comparing hair transplant Orlando options, looking up hair transplant Orlando FL clinics, researching hair restoration Orlando or checking Orlando hair transplant cost, it is worth the drive for a surgeon-led procedure. Patients also search for a hair surgeon Orlando and find us on the Space Coast instead."],
  },
  {
    q: "How do I find the best hair transplant in Florida?",
    a: ["There is no official ranking, and any clinic claiming to be the best hair transplant in Florida is expressing an opinion rather than a fact. What you can compare objectively is who performs the surgery, what board certifications they hold, how many grafts they are quoting you and what their real patient results look like at one year. Judge us on those, and judge the best hair transplant near me results the same way."],
  },
  {
    q: "How do I choose a hair transplant surgeon in Florida?",
    a: ["Three questions separate most clinics. Who performs the surgery, the surgeon you meet or a technician? What board certifications do they hold? And can they show you real patient results with graft counts and time elapsed, rather than stock photography? Ask those of us, and of anyone else you are considering."],
  },
  {
    q: "FUE or FUT: which is right for me?",
    a: ["FUE suits most patients and is the technique behind our no-shave work. FUT, or follicular unit transplantation, can still be the better choice where a very large number of grafts is needed in one session. Dr. Imami performs both and recommends based on your donor area and goals."],
  },
];

const STAR_PATH =
  "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z";

function BookButton({
  className = "btn",
  style,
  children = "Book a Free Discovery Call",
}: {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}) {
  return (
    <a className={className} style={style} href="#consult">
      {children}
    </a>
  );
}

export default function FollicularUnitExtraction() {
  return (
    <>
      <header>
        <div className="bar">
          <a className="brand" href="#top" aria-label="Imami MD Hair Restoration">
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
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hact">
            <a className="tel" href={PHONE_HREF}>
              {PHONE}
            </a>
            <BookButton className="btn btn--sm" />
          </div>
        </div>
      </header>

      <div className="offerbar">
        Complimentary biomimetic hair growth treatment with every hair transplant{" "}
        <span>as part of Dr. Imami&rsquo;s post-operative care program.</span>
        <span className="offer-note">
          Offered with procedures booked through this page. Ask at your
          consultation for full details.
        </span>
      </div>

      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="wrap">
          <div className="hero-stack">
            <p className="eyebrow">FUE Hair Transplant · Melbourne, Florida</p>
            <h1>No-Shave FUE. Natural, Undetectable Results.</h1>
            <ul className="usps">
              {USPS.map((usp) => (
                <li key={usp.text} className={usp.highlight ? "hl" : undefined}>
                  {usp.text}
                </li>
              ))}
            </ul>
            <div className="hero-cta">
              <BookButton />
              <a className="btn btn--lt" href={PHONE_HREF}>
                Call {PHONE}
              </a>
            </div>
            <p className="cta-offer">
              Book through this page and your procedure includes a complimentary
              biomimetic hair growth treatment.
            </p>
          </div>
        </div>
      </section>

      <section
        className="sec sec--tint"
        id="reviews"
        style={{ borderTop: "none" }}
      >
        <div className="wrap rev-grid">
          <div>
            <p className="eyebrow">Patient Testimonials</p>
            <h2>What Our Patients Say</h2>
            <div className="rev-score">
              <span className="rev-num">4.6</span>
              <span className="rev-of">out of 5</span>
            </div>
            <div className="stars" role="img" aria-label="Rated 4.6 out of 5">
              {[0, 1, 2, 3].map((i) => (
                <svg key={i} viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#FF8400" d={STAR_PATH} />
                </svg>
              ))}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <defs>
                  <linearGradient id="hf">
                    <stop offset="60%" stopColor="#FF8400" />
                    <stop offset="60%" stopColor="#DCDCDC" />
                  </linearGradient>
                </defs>
                <path fill="url(#hf)" d={STAR_PATH} />
              </svg>
            </div>
            <p className="rev-meta">
              Based on 15 Google reviews of Imami Hair Restoration.{" "}
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
              Verified on <b>Google</b>
            </span>
          </div>

          {/*
            GOOGLE REVIEWS FEED
            imamihair.com renders its reviews with the Trustindex Google widget
            ("Posted on Google", verified-source badge per review). Mount the same
            Trustindex widget in the container below so this page shows the same
            feed. Reviews must render live and verbatim - do not hard-code or edit
            review text. The 4.6 / 15-review summary beside it is static and
            should be replaced by the widget's own rating once it is embedded.
          */}
          <div className="rev-feed" id="google-reviews-widget">
            <p className="rev-ph">Google reviews feed</p>
            <p>
              Live review carousel mounts here. Until the widget is connected,
              this block stays empty rather than showing placeholder
              testimonials.
            </p>
          </div>
        </div>
      </section>

      <section className="sec" id="approach">
        <div className="wrap g2">
          <div>
            <p className="eyebrow">Our Approach</p>
            <h2>The Doctor You Meet Is the Doctor Who Operates.</h2>
            <p className="lede">
              At most large hair restoration clinics, your consultation is with a
              salesperson and your surgery is carried out by a technician. At
              Imami Hair Restoration it works differently. Dr. Imami personally
              evaluates every patient, designs the new hairline and performs the
              surgical components of every procedure himself.
            </p>
            <p className="lede">
              Your hair transplant is then completed under his direct supervision
              by a dedicated team of technicians with 15 years of experience
              working alongside him.
            </p>
          </div>
          <div className="card">
            <span className="num">Why It Matters</span>
            <ul className="checks">
              <li>One surgeon from consultation through to your one-year follow-up</li>
              <li>Hairline designed around your facial geometry, age and hair loss pattern</li>
              <li>Extraction and site creation directed by the surgeon, not delegated</li>
              <li>A clear, itemized quote, with no sales pressure at the consultation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sec sec--tint" id="results">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">Real Results</p>
            <h2>Before &amp; After</h2>
            <p className="lede">
              Recent no-shave FUE hair transplant patients, with graft counts and
              time elapsed. Sessions typically run between 1,100 and 2,000 grafts
              depending on Norwood stage and donor density.
            </p>
          </div>
          <div className="ba">
            {RESULTS.map((r) => (
              <figure className="ba-card" key={r.img}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${MEDIA}/${r.img}`} alt={r.alt} loading="lazy" />
                <figcaption className="ba-body">
                  <p className="ba-tag">{r.tag}</p>
                  <dl className="ba-stats">
                    <div>
                      <dt>Grafts placed</dt>
                      <dd>{r.grafts}</dd>
                    </div>
                    <div>
                      <dt>Timeline</dt>
                      <dd>{r.timeline}</dd>
                    </div>
                  </dl>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="disc">
            The images above are displayed with the consent of the patients. The
            outcomes shown are only relevant for these patients and do not
            necessarily reflect the results other patients may experience. Results
            vary by individual. Our team will discuss any factors that could
            influence the results that you may get.
          </p>
        </div>
      </section>

      <section className="sec" id="what">
        <div className="wrap g2">
          <div>
            <p className="eyebrow">The Technique</p>
            <h2>What is FUE?</h2>
            <p className="lede">
              Follicular unit extraction, or FUE, is a minimally invasive hair
              transplant method in which individual follicles are taken one at a
              time from the donor area at the back and sides of the scalp, then
              placed where hair is thinning. Because nothing is removed as a
              strip, follicular extraction leaves no linear donor scar.
            </p>
            <p className="lede">
              You will see the same operation described in several ways: an FUE
              hair implant, FUE hair replacement, an FUE hair graft session, FUE
              treatment, or simply a follicle hair transplant. Each describes the
              same FUE method hair transplant and the same FUE hair transplant
              procedure, and FUE hair restoration is what we do every day at our
              FUE hair transplant clinic in Melbourne.
            </p>
            <p className="lede">
              The alternative, follicular unit transplantation (FUT), removes a
              strip of donor tissue. It still suits some larger cases, and Dr.
              Imami performs both, and he will tell you honestly which FUE method
              or hair transplant procedure fits your pattern of loss.
            </p>
          </div>
          <div className="card">
            <span className="num">Key Distinction</span>
            <h3>No-Shave FUE</h3>
            <p>
              Most clinics shave the entire head before a hair transplant. Dr.
              Imami specializes in FUE without shaving: individual follicles are
              extracted from longer donor hair, so a hair transplant without
              shaving your head stays discreet from day one and you can return to
              work and social settings without an obvious change.
            </p>
            <p style={{ marginTop: 14 }}>
              For larger sessions where a partial trim helps, he will discuss the
              options at your consultation and design an approach that fits your
              hair loss pattern and your lifestyle.
            </p>
          </div>
        </div>
      </section>

      <section className="sec sec--dark" id="treats">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">What FUE Can Treat</p>
            <h2>Scalp Restoration, Tailored to Your Pattern of Loss</h2>
          </div>
          <div className="g3">
            {TREATS.map((t) => (
              <div className="card" key={t.h}>
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
            <p className="lede">
              One outpatient day at our hair transplant Melbourne FL clinic. You
              arrive in the morning and go home the same afternoon.
            </p>
          </div>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step" key={s.n}>
                <span className="num">{s.n}</span>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--tint" id="benefits">
        <div className="wrap g2">
          <div>
            <p className="eyebrow">Advantages</p>
            <h2>Benefits of FUE</h2>
            <ul className="checks" style={{ marginTop: 26 }}>
              <li>No linear scarring in the donor area</li>
              <li>Significantly shorter recovery time</li>
              <li>No-shave options available for minimal downtime</li>
              <li>Ability to wear your hair longer or shorter afterwards</li>
              <li>Repeatable procedure for future thinning</li>
              <li>Natural, undetectable outcomes</li>
              <li>
                <b>
                  Complimentary biomimetic hair growth treatment with every
                  procedure booked through this page
                </b>
              </li>
            </ul>
          </div>
          <div className="card">
            <span className="num">Why Choose Dr. Imami</span>
            <h3>Triple Board-Certified</h3>
            <p>
              A rare distinction, reflecting high standards of surgical safety,
              ethics and aesthetic judgement.
            </p>
            <h3 style={{ marginTop: 22 }}>Surgeon-Led Procedure</h3>
            <p>
              Dr. Imami directs his experienced hair transplant team for
              extraction and site creation on every case.
            </p>
            <h3 style={{ marginTop: 22 }}>Personalized Design</h3>
            <p>
              Every hairline is custom-designed around facial geometry, age and
              long-term hair loss progression.
            </p>
          </div>
        </div>
      </section>

      <section className="sec" id="cost">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">Investment</p>
            <h2>Hair Transplant Cost &amp; Financing</h2>
            <span className="offer-ribbon">
              Includes a complimentary biomimetic hair growth treatment
            </span>
            <p className="lede">
              There is no single hair transplant price, because no two patients
              need the same number of grafts. What follows is how the cost of a
              hair transplant is actually built, so you can judge any quote, ours
              or anyone else&rsquo;s.
            </p>
          </div>
          <div className="g2" style={{ alignItems: "start" }}>
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
                    Hair transplant cost per graft is the basic unit. A Norwood 3
                    hairline may need 1,100-1,800 grafts; Norwood 4-5 often
                    1,800-2,000 or more.
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
            <div>
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
                  costing a 2000 grafts hair transplant, the graft count comes
                  first and the figure follows from it. Hair transplant cost
                  Florida-wide is quoted this way; Florida hair transplant cost
                  differs between clinics mainly because graft counts and
                  inclusions differ.
                </p>
              </div>
              <div className="card" style={{ marginTop: 24 }}>
                <span className="num">Paying For It</span>
                <h3>Flexible Payment Plans</h3>
                <p>
                  We offer financing through CareCredit and Affirm, so hair
                  restoration surgery cost can be spread over monthly payments
                  rather than paid in one go.
                </p>
                <ul className="checks" style={{ marginTop: 20 }}>
                  <li>A written, itemized quote at your consultation, with no hidden extras</li>
                  <li>Year-one follow-ups included, at Day 2, Day 14, Month 6 and Year 1</li>
                  <li>Medication refills included through your first year</li>
                  <li>Complimentary biomimetic hair growth treatment with your procedure</li>
                  <li>Quotes based on your actual graft count, not a package guess</li>
                </ul>
                <BookButton style={{ marginTop: 24 }}>
                  Get a personalized quote
                </BookButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--tint" id="who">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">Who We Treat</p>
            <h2>Hair Transplants for Men and Women</h2>
          </div>
          <div className="g2" style={{ alignItems: "start" }}>
            <div className="card">
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
                cost or hair replacement for men cost, the figure comes from the
                same place: your graft count. We quote hair implants for men in
                writing after Dr. Imami has assessed your donor area, so the cost
                of hair implants for men is never a package guess. Mens hair
                transplant surgery here is a single outpatient day.
              </p>
            </div>
            <div className="card">
              <span className="num">Women</span>
              <h3>Female Thinning &amp; Hairlines</h3>
              <p>
                Women lose hair differently, more often with diffuse thinning or a
                high, uneven hairline than a classic receding pattern. A female
                hairline transplant can lower and soften the frame, and FUE hair
                transplant for women is carried out without shaving the head.
              </p>
              <p style={{ marginTop: 14 }}>
                Female hair transplant cost is quoted the same way: by graft
                count, in writing, after assessment. That applies equally to a
                female hairline transplant cost, to female hair implants cost, and
                to any ladies hair transplant cost, hair implants for women cost
                or hair replacement for women cost quoted elsewhere. Ask every
                clinic what the number actually includes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="band">
        <div className="wrap">
          <p className="eyebrow">Consultation</p>
          <h2>Wondering if FUE Is Right for You?</h2>
          <p>
            Book a free discovery call with Dr. Imami to discuss your options,
            your likely graft count and what it would cost.
          </p>
          <p className="cta-offer">
            Every hair transplant booked through this page includes a
            complimentary biomimetic hair growth treatment.
          </p>
          <div className="hero-cta">
            <BookButton />
            <a className="btn btn--lt" href={PHONE_HREF}>
              Call {PHONE}
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
            <div className="card" style={{ marginTop: 26 }}>
              <h3>First 48 Hours</h3>
              <p>
                Rest with your head elevated. Spray grafts with the saline
                solution provided. Avoid touching the recipient area.
              </p>
            </div>
            <div className="card" style={{ marginTop: 18 }}>
              <h3>Activity Restrictions</h3>
              <p>
                No strenuous exercise or heavy lifting for 14 days. Avoid direct
                sun exposure to the scalp for 3 months.
              </p>
            </div>
            <div className="offercard">
              <span className="num">Included With Your Procedure</span>
              <h3>Biomimetic Hair Growth Treatment</h3>
              <p>
                Every hair transplant booked through this page includes a
                complimentary session of our biomimetic hair growth treatment,
                given as part of your post-operative care program alongside your
                year-one follow-ups and included medication refills.
              </p>
              <p className="disc-sm">
                This treatment is offered as an adjunct to surgery and is not a
                substitute for it. It is not an FDA-approved product, and no
                specific outcome is implied or guaranteed. Dr. Imami will explain
                what it involves, and whether it is appropriate for you, at your
                consultation.
              </p>
            </div>
            <div className="card" style={{ marginTop: 18 }}>
              <h3>Follow-up Schedule</h3>
              <p>
                We monitor progress with scheduled visits at Day 2, Day 14, Month
                6 and Year 1, with medication refills included through year one.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--dark" id="location">
        <div className="wrap g2" style={{ alignItems: "start" }}>
          <div>
            <p className="eyebrow">Where We Are</p>
            <h2>A Hair Transplant Clinic in Melbourne, FL</h2>
            <p className="lede">
              If you have been searching for a hair transplant clinic near you, we
              are on the Space Coast at the NASA Palms Professional Center, about
              an hour from Orlando and easily reached from across Brevard County.
              Patients travel to us from Melbourne, Palm Bay, Viera, Rockledge,
              Cocoa, Titusville, Merritt Island, Satellite Beach and Vero Beach,
              as well as from the Orlando area.
            </p>
            <p className="lede">
              People find us searching for a hair transplant near me, hair
              implants near me, a hair transplant clinic near me or simply a hair
              clinic near me. Others arrive from hair replacement near me, hair
              loss clinics near me, hair restoration clinics near me, FUE hair
              transplant near me or FUE near me. However you got here, the
              questions worth asking are the same, and they are set out in our FAQ
              below.
            </p>
            <p className="lede">
              We are a Florida hair transplant clinic in the full sense: patients
              come to us for hair transplant surgery Florida-wide, for FUE hair
              transplant Florida enquiries and for hair replacement Florida
              options, and Dr. Imami is a hair transplant surgeon Florida patients
              travel to see.
            </p>
            <p className="lede">
              Not local, or not ready to come in? Start with a same-day virtual
              consultation, then visit once for the procedure itself. After-hours
              appointments are available.
            </p>
            <div className="hero-cta">
              <BookButton />
            </div>
            <p className="cta-offer">
              Procedures booked through this page include a complimentary
              biomimetic hair growth treatment.
            </p>
          </div>
          <div className="card">
            <span className="num">Visit Us</span>
            <h3>Imami Hair Restoration</h3>
            <p>
              NASA Palms Professional Center
              <br />
              1140 Broadband Drive, Unit G2
              <br />
              Melbourne, FL 32901
            </p>
            <ul className="loc-list">
              <li>
                Local:{" "}
                <a href={PHONE_HREF} style={{ color: "#FFA240" }}>
                  {PHONE}
                </a>
              </li>
              <li>Toll-free: 855-5-HAIRMD (424763)</li>
              <li>Mon-Fri, 8am to 5pm · after hours by appointment</li>
              <li>Virtual consultations available</li>
            </ul>
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

      <section className="sec sec--dark" id="consult">
        <div className="wrap form-grid">
          <div>
            <p className="eyebrow">Consultation</p>
            <h2>Request a Consultation with Dr. Imami</h2>
            <span className="offer-ribbon">
              Book through this page: complimentary biomimetic hair growth
              treatment included
            </span>
            <p className="lede">
              Begin with a private, surgeon-led consultation to discuss your hair
              loss, your suitability for FUE and the outcome you can realistically
              expect. We come back to you within one business day.
            </p>
            <ul className="checks" style={{ marginTop: 28 }}>
              <li>You speak with the surgeon, not a sales representative</li>
              <li>Written, itemized quote with your graft count</li>
              <li>Virtual and after-hours appointments available</li>
              <li>Financing options explained up front</li>
              <li>Complimentary biomimetic hair growth treatment with your procedure</li>
            </ul>
          </div>
          <LeadForm />
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="f-grid">
            <div>
              <strong>Imami Hair Restoration</strong>
              <p style={{ color: "#8B9599" }}>
                Surgeon-led FUE hair transplant and hair restoration surgery in
                Melbourne, Florida, serving Brevard County, the Space Coast and
                the wider Orlando area.
              </p>
            </div>
            <div>
              <strong>Visit</strong>
              NASA Palms Professional Center
              <br />
              1140 Broadband Drive, Unit G2
              <br />
              Melbourne, FL 32901
            </div>
            <div>
              <strong>Contact</strong>
              <a href={PHONE_HREF}>{PHONE}</a>
              <br />
              Toll-free 855-5-HAIRMD
              <br />
              <a href="mailto:info@imamihair.com">info@imamihair.com</a>
              <br />
              Mon-Fri 8am-5pm
            </div>
          </div>
          <p className="f-bot">
            Before and after images are published with patient consent. Outcomes
            shown relate to those patients only and do not necessarily reflect
            results other patients may experience; results vary by individual. The
            complimentary biomimetic hair growth treatment is offered as an
            adjunct to surgery for procedures booked through this page; it is not
            an FDA-approved product and no specific outcome is implied. This page
            is for information and does not constitute medical advice. ©2026 Imami
            Hair Restoration. All rights reserved.
          </p>
        </div>
      </footer>

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
