import type { Metadata, Viewport } from "next";
import AnchorFix from "./components/AnchorFix";
import "./globals.css";

const GTM_ID = "GTM-NPV88WZQ";

const GTM_SCRIPT = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

const GTM_NOSCRIPT = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.imamihair.com"),
  title: "Imami Hair Restoration",
  description:
    "Surgeon-led FUE hair transplant and hair restoration surgery in Melbourne, Florida.",
  // Paid-traffic site: nothing here should compete with imamihair.com in
  // organic search. Every route inherits noindex; pages may only tighten it.
  robots: { index: false, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager — first in <head>, ahead of everything else. */}
        <script dangerouslySetInnerHTML={{ __html: GTM_SCRIPT }} />
        {/* End Google Tag Manager */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* Matches imamihair.com: Playfair Display headings, Montserrat body. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Montserrat:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body id="top">
        {/* Google Tag Manager (noscript) — immediately after <body>. */}
        <noscript dangerouslySetInnerHTML={{ __html: GTM_NOSCRIPT }} />
        {/* End Google Tag Manager (noscript) */}
        <AnchorFix />
        {children}
      </body>
    </html>
  );
}
