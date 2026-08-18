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

`/thank-you` is the conversion destination. It pushes a
`lead_form_submitted` event into the dataLayer on every load, so the Google
Ads conversion tag in GTM should fire on a **Custom Event trigger with event
name `lead_form_submitted`** (a Page View trigger on Page Path equals
`/thank-you` works too). Either way the conversion counts once per completed
form and never on a landing-page view. Pair the conversion tag with a
Conversion Linker tag on All Pages.

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
taken from a saved copy of the live FUE page, except `benefits.png` (the
Benefits section, supplied by the client) and `who-men.jpg` and
`who-women.jpg` (the Who We Treat cards), which are AI-generated stock-style
portraits — swap in licensed photography whenever it becomes available.

Six background images could not be recovered because outbound requests to
imamihair.com are blocked from the build environment. Their local paths are
already wired in `app/globals.css` (`.bg-photo` rules), and the dark/light
scrims render fine without them; to complete the backgrounds, drop these files
into `public/images/` keeping the exact names:

- `2301.w019.n002.819A.p30.819-1-1.jpg`, `...-1-2-2.jpg`, `...-1-3-1.jpg`
- `image-25-2.jpg`, `image-28.png`, `Contact-Us.png`

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
- **Missing background images** — see Assets above.
