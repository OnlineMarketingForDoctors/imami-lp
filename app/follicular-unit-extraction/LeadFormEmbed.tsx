import Script from "next/script";

const FORM_ID = "wJaWe2IOFnBD352sZIyj";
const FORM_NAME = "LP Form - OMD";

/**
 * LeadConnector (GoHighLevel) inline form.
 *
 * form_embed.js sizes the iframe: it listens for a postMessage from the form
 * and writes the measured height onto the element it finds by
 * data-layout-iframe-id, so those data attributes must stay exactly as the
 * embed snippet supplies them. The CSS min-height in .form-embed is only a
 * floor for the moment before that script runs, or if it fails to load.
 *
 * The redirect to /thank-you is configured on the form itself in
 * LeadConnector, since the submission happens inside the iframe and this page
 * never sees it.
 */
export default function LeadFormEmbed() {
  return (
    <div>
      <div className="form-embed">
        <iframe
          src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
          // border and radius come from .form-embed in globals.css; an inline
          // border here would win over it
          style={{ width: "100%", height: "100%" }}
          id={`inline-${FORM_ID}`}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name={FORM_NAME}
          data-height="undefined"
          data-layout-iframe-id={`inline-${FORM_ID}`}
          data-form-id={FORM_ID}
          title={FORM_NAME}
        />
      </div>
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
      <p className="fineprint">
        By submitting you agree to be contacted about your enquiry. We never
        share your details. Results vary by individual and no specific outcome is
        implied.
      </p>
    </div>
  );
}
