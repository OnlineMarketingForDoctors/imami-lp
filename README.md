# imami-lp

Landing pages for Imami Hair Restoration, built as a static Next.js site and
deployed on Vercel.

## Pages

| Route                           | Purpose                                                        |
| ------------------------------- | -------------------------------------------------------------- |
| `/follicular-unit-extraction`   | Mirror of imamihair.com's FUE page (primary Google Ads target)  |
| `/follicular-unit-extraction-2` | The original landing page built from the mockup                 |
| `/thank-you`                    | Confirmation page the form redirects to on success              |
| `/`                             | Redirects to `/follicular-unit-extraction`                      |

All routes are prerendered as static content at build time. The landing page is
`noindex, follow` so paid traffic does not compete with `imamihair.com` in
organic search; `/thank-you` is `noindex, nofollow` since it should only ever be
reached by submitting the form.

The header and footer are shared components in `app/components/`, and the phone
number and section nav live in `app/site.ts`, so both pages stay in step.

### Analytics and conversion tracking

Google Tag Manager (`GTM-NPV88WZQ`) is installed in the root layout
(`app/layout.tsx`), so it loads on every route: the script is first in `<head>`
and the `<noscript>` iframe is the first element in `<body>`. The container ID
is a constant at the top of that file.

`/thank-you` is the conversion destination. Configure the Google Ads conversion
inside the GTM container rather than hard-coding a gtag snippet: a conversion
tag on a Page View trigger limited to **Page Path equals `/thank-you`**. Scoping
it that way counts one conversion per completed form and never on a
landing-page view.

**This only works if the LeadConnector form redirects there.** The form is an
iframe on another origin, so submission happens entirely inside it and this site
never sees the event. Set the form's on-submit action in LeadConnector to
redirect to `https://lp.imamihair.com/thank-you`. Without that the visitor stays
on the landing page, `/thank-you` is never loaded, and no conversion is
recorded.

## Local development

```bash
npm install
npm run dev     # http://localhost:3000/follicular-unit-extraction
npm run build   # production build
```

## Styling

The page uses imamihair.com's own design system, read from the site's Elementor
global kit so this landing page reads as part of the main site:

| Token           | Value                              | Used for                          |
| --------------- | ---------------------------------- | --------------------------------- |
| primary         | `#000000`                          | dark sections, headings           |
| text            | `#171717`                          | body copy                         |
| accent          | `#FF8400`                          | CTAs, eyebrows, numbers, offer bar |
| secondary       | `#87825A`                          | list bullets, rules, offer cards  |
| light           | `#F2EFE8`                          | tinted section backgrounds        |
| grey            | `#AFAFAF`                          | footer text                       |
| heading font    | Playfair Display 400               | `h1`–`h3`                         |
| body font       | Montserrat 300                     | everything else                   |

All of these are declared once in the `:root` block at the top of
`app/globals.css`; restyling starts there. Buttons follow the site's CTA
pattern — orange, Montserrat 500, uppercase with 2px tracking, hovering to
white on black.

## Assets

All images are stored locally in `public/images/` (plus the logo at
`public/imami-logo.png`) — nothing hotlinks to imamihair.com. The files were
taken from a saved copy of the live FUE page.

### The one missing file

Exactly one image is referenced but not present:

```
public/images/2301.w019.n002.819A.p30.819-1-3-1.jpg
```

It is the section background used by the `.bg-photo` and `.bg-photo--light`
rules in `app/globals.css`, which between them back six sections across the two
pages (Treatments, the consultation band and the form section on the main page;
What is FUE, the band and the form section on `-2`). It lazy-loaded on the live
site, so the saved copy the other images came from never fetched it.

Both rules layer the photo under a scrim — 72–80% black for the dark variant,
88–92% white for the light one — so those sections render correctly as flat
tinted panels today; the file only restores a faint photographic texture. The
CSS needs no change: drop the file in under that exact name and it appears.

Earlier revisions of this file also listed `...-1-1.jpg`, `...-1-2-2.jpg`,
`image-25-2.jpg`, `image-28.png` and `Contact-Us.png` as missing. Nothing in the
codebase references those five — they were on the live page but did not survive
into this rebuild, so there is no need to source them.

**Fetching it needs network access this environment does not currently have,
and the allowlist is no longer the reason.** Both `imamihair.com` and
`www.imamihair.com` now pass the egress policy — the proxy records no denial
for either. The block sits further out: both names resolve to `82.38.138.27`,
and the egress gateway cannot open a connection to that address. Over plain
HTTP the gateway answers `503 … the latest reset reason: connection timeout`;
over HTTPS the tunnel opens and then resets mid-handshake after about six
seconds, whatever the TLS version or SNI. The same proxy reaches other hosts
normally and the resolver is sound, so this is the origin dropping traffic
from the gateway's address, not a setting in this repo or in the allowlist.

Two ways round it: allow the egress gateway's address through whatever
firewall, WAF or geo-block fronts the origin — or, far simpler for one
cosmetic file, save the JPG from the live page in a browser and commit it to
`public/images/` under the exact name above.

## Deployment

The repository is linked to the `imami-lp` Vercel project, whose production
branch is `main`. Every push to `main` builds and promotes a production
deployment automatically — there is no manual promotion step. Pushes to any
other branch produce a preview deployment on its own branch URL.

Vercel Authentication is enabled for everything except custom domains, so the
`*.vercel.app` URLs require a Vercel login and the page becomes publicly
reachable once a custom domain is attached to the project.

## Lead form

The consultation form is a LeadConnector (GoHighLevel) inline embed, in
`app/components/LeadFormEmbed.tsx`, used by both pages. Leads land in LeadConnector,
not in this codebase.

`form_embed.js` sizes the iframe: it reads the measured height posted by the
form and writes it onto the element matching `data-layout-iframe-id`, so those
data attributes must stay exactly as LeadConnector's snippet supplies them. The
`min-height` on `.form-embed iframe` is only a floor for the moment before that
script runs, or if it fails to load — if the real form renders shorter than the
floor, lower it rather than leaving dead space.

## Outstanding

One block on the page is still unwired, plus one setting that lives outside this
repository:

- **Form redirect** must be set in LeadConnector to
  `https://lp.imamihair.com/thank-you`, or the conversion never fires. See
  Analytics and conversion tracking above.
- **Reviews** on both pages are a static slider (`app/components/ReviewSlider.tsx`
  with `reviews.json`) carrying the five most recent Google reviews, reproduced
  verbatim from the live site's Trustindex widget. If the practice's reviews
  change, refresh `reviews.json`, or replace the slider with the live Trustindex
  embed.
- **One missing background image** — `2301.w019.n002.819A.p30.819-1-3-1.jpg`.
  Cosmetic only; the sections that use it render correctly without it. See
  Assets above.
