import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import LeadFormEmbed from "../components/LeadFormEmbed";
import BookingEmbed from "../components/BookingEmbed";
import ReviewGrid from "../components/ReviewGrid";
import BASlider, { BAItem } from "../components/BASlider";
import BackToTop from "../components/BackToTop";
import HeroBA from "../components/HeroBA";
import {
  NAV_MAIN,
  PHONE,
  PHONE_HREF,
  PRICE_AVERAGE,
  PRICE_AVERAGE_UP_TO_GRAFTS,
} from "../site";

export const metadata: Metadata = {
  title: "FUE Hair Transplant in Florida | Follicular Unit Extraction",
  description:
    "Surgeon-led, no-shave FUE hair transplant in Melbourne, Florida. Natural hairline restoration by triple board-certified Dr. Emran Imami. Book a free discovery call.",
  robots: { index: false, follow: true },
};

const HERO_POINTS = [
  "No shaved head, so nobody has to know",
  "Your own hair, styled however you like",
  "The surgeon you meet is the one who operates",
  "Triple board-certified, 30+ years of surgery",
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
];

const REPAIR = [
  {
    h: "Correcting Previous Transplants",
    p: "Grafts placed too thickly, at the wrong angle, or in the wrong direction give that pluggy look people recognise across a room. Dr. Imami softens the front, re-angles the growth, and fills between the old work with your own hair until it stops announcing itself.",
  },
  {
    h: "Hairline Revision",
    p: "A hairline set too low, too straight, or too far forward rarely suits the face it ends up on, and it ages badly. We redraw the shape and rebuild the edge with single hairs, so it sits where it would have sat naturally at the age you are now.",
  },
  {
    h: "Donor Scar Camouflage",
    p: "A linear donor scar from older surgery, or a scar from an injury, can be grafted into so it stops showing through short hair. For most people that is the point: getting back the option of wearing it short.",
  },
];

const STEPS = [
  { num: "01.png", h: "Extraction", p: "Individual follicles are carefully extracted using a microscopic punch tool." },
  { num: "02.png", h: "Preparation", p: "Grafts are inspected, sorted, and preserved in a specialized solution." },
  { num: "03.png", h: "Site Creation", p: "Precise recipient sites are carefully created, matching the hair’s natural angle and direction." },
  { num: "04.png", h: "Implantation", p: "Grafts are delicately placed into the sites for natural-looking density." },
];

const BENEFITS = [
  "No linear scar, so a short cut stays an option",
  "A shorter recovery than older transplant techniques",
  "No-shave options, so your week barely changes",
  "Wear it long or short, it is your own hair",
  "Repeatable later if thinning continues",
  "Natural enough that people notice you, not your hairline",
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
    a: [`Most procedures come to around ${PRICE_AVERAGE}. That is the session price, covering up to roughly ${PRICE_AVERAGE_UP_TO_GRAFTS} grafts, your surgery with Dr. Imami, and your follow-ups through the first year. Smaller sessions cost less. Your own figure follows the graft count your plan needs: Dr. Imami estimates that at your consultation and puts one written, itemized price in front of you before anything is booked. Financing is available through CareCredit and Affirm, so it can be spread over monthly payments. When you compare quotes, ask what the session includes, who performs the surgery, and whether follow-ups are included.`],
  },
  {
    q: "Do patients travel from Miami or Orlando?",
    a: ["Yes, all the time, and many patients travel to us from across the country. Our clinic is in Melbourne, on Florida's Space Coast, about an hour from Orlando, a comfortable drive up the coast from Miami, and just 1 mile from Melbourne-Orlando International Airport (MLB) for anyone flying in. Start with a free discovery call from wherever you are, then visit once for the procedure itself."],
  },
  {
    q: "How many grafts will I need?",
    a: ["The number of grafts varies based on your degree of hair loss (Norwood stage), the areas being treated, your donor density, and your desired result. As a reference, most of Dr. Imami’s recent No-Shave FUE patients have received between 1,100 and 2,000 grafts per session, and a large session runs up to around 3,000. A Norwood 3 hairline restoration may require around 1,100–1,800 grafts, while more advanced patterns at Norwood 4–5 often need 1,800–3,000. During your consultation, Dr. Imami will assess your scalp, design your hairline, and calculate the precise graft count needed to achieve a natural, balanced outcome."],
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
          <h1>Your Own Hair Back, Without Anyone Knowing Why</h1>
          <p className="hero-sub">
            It is the first thing you look for in every photograph of yourself.
            No-shave FUE moves your own hair back, follicle by follicle, so what
            people notice is you, not a procedure.
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
              Get My Free Hair Restoration Plan
            </a>
          </div>
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
        <ReviewGrid />
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
              Many of our patients tell us they wish they had come in sooner.
              This is what they saw when they did.
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
              Book a Free Discovery Call
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
      {/* Repair: a stated specialty of the practice, and the landing point
          for the Repair ad group (#repair). */}
      <section className="sec" id="repair">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">Repair Work</p>
            <h2>Fixing Work Someone Else Did</h2>
            <p className="lede">
              A transplant that went wrong is a particular kind of regret: you
              already paid, and you are still hiding it. Repair is one of the
              things this practice is known for, and most of what walks through
              the door is fixable. Bring photographs to your free discovery call
              and you will get a straight answer about yours.
            </p>
          </div>
          <div className="g3">
            {REPAIR.map((r, i) => (
              <div className="card" key={r.h}>
                <span className="num">{`0${i + 1}`}</span>
                <h3 style={{ marginBottom: 10 }}>{r.h}</h3>
                <p>{r.p}</p>
              </div>
            ))}
          </div>
          <div className="hero-cta">
            <a className="btn" href="#consult">
              Get My Free Hair Restoration Plan
            </a>
          </div>
        </div>
      </section>

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
              For a lot of people, cost is the reason this waits another year,
              so here it is plainly. Most procedures come to around{" "}
              {PRICE_AVERAGE}. That is one session price, covering up to roughly{" "}
              {PRICE_AVERAGE_UP_TO_GRAFTS} grafts, your surgery with Dr. Imami
              and your follow-ups through the first year. Smaller sessions cost
              less. What follows is how that number is built, so you can judge
              any quote by it, ours or anyone else&rsquo;s.
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
                    often 1,800-3,000.
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
                    No-shave FUE is a specialised technique. Dr. Imami
                    recommends the approach that suits your case.
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
                    <td>1,800-3,000</td>
                    <td>Norwood 4-5, or hairline plus crown together</td>
                  </tr>
                </tbody>
              </table>
              <p style={{ marginTop: 16 }}>
                Graft count is what moves the figure. A hairline on its own sits
                at the lower end of the range; a hairline and crown together, or
                a more advanced pattern, sits at the top of it. Dr. Imami
                estimates your count at your consultation and quotes one written
                session price against it.
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
              <li>
                One written session price for your plan, agreed before anything
                is booked
              </li>
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
                Most of our patients are men who have watched a hairline creep
                back for years, or found the crown in a photograph nobody told
                them was being taken. A men&rsquo;s FUE hair transplant rebuilds
                the frame of the face using your own hair, and because it is
                no-shave, colleagues need not know you have had anything done.
              </p>
              <p style={{ marginTop: 14 }}>
                If you have been researching what a hair transplant costs, the
                honest answer is that it depends on how much coverage you need.
                Dr. Imami assesses your donor area, estimates how many grafts
                your plan calls for, and gives you a custom session price in
                writing. The procedure itself is a single outpatient day.
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
                For women it is usually the parting that widens first, or a
                hairline sitting higher than it used to. It is a quieter kind of
                hair loss, and often a lonelier one. A female hairline
                transplant can lower and soften the frame, and FUE hair
                transplant for women is carried out without shaving the head.
              </p>
              <p style={{ marginTop: 14 }}>
                Pricing works the same way for women: after your assessment,
                you receive a written session price for your treatment plan,
                with everything it covers spelled out. Wherever you compare,
                ask what the quoted price actually includes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="band band--photo">
        <div className="wrap">
          <h2>
            Wondering if FUE is the Right Procedure for You? Book a Free
            Discovery Call with a Hair Transplant Specialist to Discuss Your
            Options.
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
              Thirty years of surgery, and he still designs every hairline
              himself. Dr. Imami is triple board-certified, and he treats a
              hairline as a piece of a face rather than a row of grafts, which
              is why patients travel to his Melbourne, Florida clinic from
              Orlando, Miami and across the country.
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

      {/* Consultation: copy and the included-treatment card left, booking calendar right */}
      <section className="sec sec--dark" id="consult">
        <div className="wrap consult-grid consult-grid--book">
          <div>
            <p className="eyebrow">Free Discovery Call</p>
            <h2>Book Your Free Discovery Call</h2>
            <p className="lede">
              One phone call, no pressure and nothing to pay. Talk to a hair
              transplant specialist about what is happening to your hair,
              whether no-shave FUE could suit you, and what your next step
              looks like, including your consultation with Dr. Imami. Book from
              wherever you are: patients visit from Orlando, Miami and across
              the country, and our office is just 1 mile from Melbourne-Orlando
              International Airport (MLB), so fly-in patients can come once for
              the procedure itself.
            </p>
            <div className="offercard">
              <span className="num">Included With Your Procedure</span>
              <h3>Complimentary Biomimetic Hair Growth Treatment</h3>
              <p>
                Every hair transplant booked through this page includes a
                complimentary session of our biomimetic hair growth treatment,
                given as part of Dr. Imami&rsquo;s post-operative care program
                alongside your year-one follow-ups.
              </p>
              <p className="disc-sm">
                Offered as an adjunct to surgery, not a substitute for it. Ask
                at your consultation for full details.
              </p>
            </div>
          </div>
          <div className="consult-book">
            <BookingEmbed />
          </div>
        </div>
      </section>

      {/* General enquiries: the form stays for visitors not ready to book */}
      <section className="sec sec--tint" id="contact">
        <div className="wrap g2" style={{ alignItems: "start" }}>
          <div>
            <p className="eyebrow">Contact</p>
            <h2>General Enquiries</h2>
            <p className="lede">
              Not ready to book a time yet? Send us a message and our team will
              get back to you.
            </p>
            <p className="lede">
              Prefer to talk? Call us at{" "}
              <a href={PHONE_HREF}>{PHONE}</a> during office hours, Monday to
              Friday, 8 am to 5 pm.
            </p>
            {/* Fills the column beside the tall enquiry form. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="rounded-img contact-side"
              src="/images/Rectangle-183-8-1.png"
              alt="Confident man after hair restoration"
              width={568}
              height={721}
              loading="lazy"
            />
          </div>
          <div className="contact-form">
            <LeadFormEmbed />
          </div>
        </div>
      </section>

      <SiteFooter />

      <BackToTop />
    </>
  );
}
