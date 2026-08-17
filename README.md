# imami-lp

Landing pages for Imami Hair Restoration, built as a static Next.js site and
deployed on Vercel.

## Pages

| Route                        | Purpose                                              |
| ---------------------------- | ---------------------------------------------------- |
| `/follicular-unit-extraction` | FUE hair transplant landing page for Google Ads traffic |
| `/`                          | Redirects to `/follicular-unit-extraction`            |

Both routes are prerendered as static content at build time. The landing page
is set to `noindex, follow` so paid traffic does not compete with
`imamihair.com` in organic search.

## Local development

```bash
npm install
npm run dev     # http://localhost:3000/follicular-unit-extraction
npm run build   # production build
```

## Assets

The logo is bundled at `public/imami-logo.webp`. The hero background and the
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
  and shows a confirmation, but does not yet submit anywhere. It needs pointing
  at a real destination (CRM, form endpoint or notification email).
- **Google reviews feed** (`#google-reviews-widget`) is an empty container. It
  should mount the same live review widget used on imamihair.com, or the Google
  Places API using place ID `ChIJMWgAohAP3ogRYDZWIg_3KX0`. Review text must
  render live and verbatim rather than being hard-coded.
