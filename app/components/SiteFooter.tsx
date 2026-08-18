import { PHONE, PHONE_HREF } from "../site";

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/ImamiHair/",
    // Font Awesome facebook-f
    path: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
    viewBox: "0 0 320 512",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/imamihair/",
    // Font Awesome instagram
    path: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
    viewBox: "0 0 448 512",
  },
];

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="f-grid">
          <div>
            <a
              href="https://www.imamihair.com/"
              target="_blank"
              rel="noopener"
              aria-label="Imami MD Hair Restoration website"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="f-logo"
                src="/imami-logo.png"
                alt="Imami MD Hair Restoration"
                width={600}
                height={200}
              />
            </a>
            <p style={{ color: "#AFAFAF" }}>
              Surgeon-led FUE hair transplant and hair restoration surgery in
              Melbourne, Florida, serving Brevard County, the Space Coast and the
              wider Orlando area.
            </p>
            <div className="f-social">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener"
                >
                  <svg viewBox={s.viewBox} aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div>
            <strong>Contact</strong>
            NASA Palms Professional Center
            <br />
            1140 Broadband Drive, Unit G2
            <br />
            Melbourne, FL 32901
            <br />
            <br />
            Local: <a href={PHONE_HREF}>{PHONE}</a>
            <br />
            Toll-Free: 855-5-HAIRMD (424763)
            <br />
            <a href="mailto:info@imamihair.com">info@imamihair.com</a>
          </div>
          <div>
            <strong>Office Hours</strong>
            Mon - Fri: 8 am to 5 pm
            <br />
            After Hours, by Appointment
          </div>
        </div>
        <p className="f-bot">
          Before and after images are published with patient consent. Outcomes
          shown relate to those patients only and do not necessarily reflect
          results other patients may experience; results vary by individual. This
          page is for information and does not constitute medical advice. ©2026
          Imami Hair Restoration. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
