# imami-lp

Landing pages for Imami Hair Restoration, built as a static Next.js site and
deployed on Vercel.

## Pages

| Route                         | Purpose                                                 |
| ----------------------------- | ------------------------------------------------------- |
| `/follicular-unit-extraction` | FUE hair transplant landing page for Google Ads traffic  |
| `/thank-you`                  | Confirmation page the form redirects to on success       |
| `/`                           | Redirects to `/follicular-unit-extraction`               |

All routes are prerendered as static content at build time. The landing page is
`noindex, follow` so paid traffic does not compete with `imamihair.com` in
organic search; `/thank-you` is `noindex, nofollow` since it should only ever be
reached by submitting the form.

The header and footer are shared components in `app/components/`, and the phone
number and section nav live in `app/site.ts`, so both pages stay in step.

### Conversion tracking

`/thank-you` exists to be the conversion destination, so the Google Ads
conversion snippet belongs on that page and nowhere else — one conversion per
completed form, never on a landing-page view. There is a marked comment at the
top of `app/thank-you/page.tsx` showing where it goes; it needs the account's
own conversion ID and label.

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

The logo is bundled at `public/imami-logo.png` (the site's own
`imami-md-hair-logo-transparent-bg.png`). The hero background and the
before/after photographs are referenced directly from the existing
imamihair.com media library (`https://www.imamihair.com/wp-content/uploads/...`),
so they stay in sync with the main site. The media paths live in
`app/follicular-unit-extraction/page.tsx` (`MEDIA` constant and the `RESULTS`
array) and in the `.hero-bg` rules in `app/globals.css`.

## Deployment

The repository is linked to the `imami-lp` Vercel project, whose production
branch is `main`. Every push to `main` builds and promotes a production
deployment automatically — there is no manual promotion step. Pushes to any
other branch produce a preview deployment on its own branch URL.

Vercel Authentication is enabled for everything except custom domains, so the
`*.vercel.app` URLs require a Vercel login and the page becomes publicly
reachable once a custom domain is attached to the project.

## Outstanding

Two blocks on the page are deliberately left unwired and need a decision before
the page goes live behind ad spend:

- **Lead form** (`app/follicular-unit-extraction/LeadForm.tsx`) validates input
  and redirects to `/thank-you`, but does not yet submit the data anywhere. It
  needs pointing at a real destination (CRM, form endpoint or notification
  email). When that lands, await the request in `onSubmit` and only redirect
  once it resolves, so a failed submission never shows a thank-you page.
- **Google reviews feed** (`#google-reviews-widget`) is an empty container.
  imamihair.com renders its reviews with the **Trustindex** Google widget, so
  the same widget should be mounted here. Review text must render live and
  verbatim rather than being hard-coded. The 4.6 / 15-review summary beside it
  is static and should give way to the widget's own rating once embedded.
