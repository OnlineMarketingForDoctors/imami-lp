import Script from "next/script";

const CALENDAR_ID = "Jq3EkGZ211Wa13fIrHLn";

/**
 * LeadConnector (GoHighLevel) booking calendar. form_embed.js measures the
 * widget and writes its height onto the iframe, matching it by the id from
 * the embed snippet, so the id must keep the `<calendarId>_<n>` shape the
 * snippet supplied. The min-height is only a floor for the moment before
 * that script runs, or if it fails to load.
 */
export default function BookingEmbed() {
  return (
    <div>
      <div className="booking-embed">
        <iframe
          src={`https://api.leadconnectorhq.com/widget/booking/${CALENDAR_ID}`}
          allow="payment"
          style={{ width: "100%", border: "none", overflow: "hidden" }}
          scrolling="no"
          id={`${CALENDAR_ID}_1787744742713`}
          title="Book a consultation"
        />
      </div>
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
      <p className="fineprint">
        Pick a time that suits you and we will confirm by email. Results vary by
        individual and no specific outcome is implied.
      </p>
    </div>
  );
}
