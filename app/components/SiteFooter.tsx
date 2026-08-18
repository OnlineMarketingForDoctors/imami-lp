import { PHONE, PHONE_HREF } from "../site";

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="f-grid">
          <div>
            <strong>Imami Hair Restoration</strong>
            <p style={{ color: "#AFAFAF" }}>
              Surgeon-led FUE hair transplant and hair restoration surgery in
              Melbourne, Florida, serving Brevard County, the Space Coast and the
              wider Orlando area.
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
          complimentary biomimetic hair growth treatment is offered as an adjunct
          to surgery for procedures booked through this page; it is not an
          FDA-approved product and no specific outcome is implied. This page is
          for information and does not constitute medical advice. ©2026 Imami
          Hair Restoration. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
