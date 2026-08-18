"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const HOW_HEARD = [
  "Search engines (Google, Bing, Yahoo)",
  "Social media (Facebook, Instagram, TikTok)",
  "From a friend or family member",
  "From another doctor",
  "Newsletter",
  "Text message / SMS",
  "Influencer",
  "Radio or podcast",
  "AI chat (ChatGPT, Gemini, Perplexity)",
  "Other",
];

export default function LeadForm() {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [invalid, setInvalid] = useState<Record<string, boolean>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const next: Record<string, boolean> = {};
    form
      .querySelectorAll<HTMLInputElement>("[required]")
      .forEach((field) => {
        if (!field.value.trim()) next[field.id] = true;
      });
    setInvalid(next);
    if (Object.keys(next).length) return;
    // On success the visitor goes to /thank-you, which is where the Google Ads
    // conversion is counted. Once the form posts to a real destination, await
    // that request here and only redirect when it resolves.
    setSending(true);
    router.push("/thank-you");
  }

  const border = (id: string) =>
    invalid[id] ? { borderColor: "#C0563F" } : undefined;

  return (
    <div className="form-card">
      <form id="lead" noValidate onSubmit={onSubmit}>
        <div className="fields">
          <div className="field">
            <label htmlFor="fn">First name</label>
            <input
              id="fn"
              name="first_name"
              autoComplete="given-name"
              required
              style={border("fn")}
            />
          </div>
          <div className="field">
            <label htmlFor="ln">Last name</label>
            <input
              id="ln"
              name="last_name"
              autoComplete="family-name"
              required
              style={border("ln")}
            />
          </div>
          <div className="field">
            <label htmlFor="ph">Phone</label>
            <input
              id="ph"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              style={border("ph")}
            />
          </div>
          <div className="field">
            <label htmlFor="em">Email</label>
            <input
              id="em"
              name="email"
              type="email"
              autoComplete="email"
              required
              style={border("em")}
            />
          </div>
          <div className="field field--full">
            <label htmlFor="hh">How did you hear about us?</label>
            <select id="hh" name="how_heard" defaultValue="">
              <option value="">Select an option</option>
              {HOW_HEARD.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="field field--full">
            <label htmlFor="msg">Message</label>
            <textarea
              id="msg"
              name="message"
              placeholder="Tell us briefly about your hair loss and what you would like to achieve."
            />
          </div>
        </div>
        <button className="btn" type="submit" disabled={sending}>
          {sending ? "Sending…" : "Request a consultation"}
        </button>
        <p className="cta-offer" style={{ fontSize: ".84rem", marginTop: 14 }}>
          Includes your complimentary biomimetic hair growth treatment.
        </p>
        <p className="fineprint">
          By submitting you agree to be contacted about your enquiry. We never
          share your details. Results vary by individual and no specific outcome
          is implied.
        </p>
      </form>
    </div>
  );
}
