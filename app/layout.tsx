import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.imamihair.com"),
  title: "Imami Hair Restoration",
  description:
    "Surgeon-led FUE hair transplant and hair restoration surgery in Melbourne, Florida.",
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
      <body id="top">{children}</body>
    </html>
  );
}
