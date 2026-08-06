import type { Metadata } from "next";
import { preload } from "react-dom";
import "./globals.css";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const fontPath = (name: string) => `${publicBasePath}/fonts/${name}.woff2`;

const fontFaceStyles = `
  @font-face {
    font-family: "Meno Display";
    src: url("${fontPath("meno-display")}") format("woff2");
    font-style: normal;
    font-weight: 400;
    font-display: block;
  }
  @font-face {
    font-family: "Meno Display";
    src: url("${fontPath("meno-display-light")}") format("woff2");
    font-style: italic;
    font-weight: 300;
    font-display: block;
  }
  @font-face {
    font-family: "Vogue Avant Garde";
    src: url("${fontPath("vogue-demi")}") format("woff2");
    font-style: normal;
    font-weight: 600;
    font-display: block;
  }
`;

const previewImage =
  "https://rz-social-media.github.io/wedding-video-stories/images/jasmin-daniel-hero.jpg";

const siteUrl = "https://rz-social-media.github.io/wedding-video-stories/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "RZ Weddings | Selected Wedding Stories",
  description:
    "Selected wedding stories captured in cinematic motion by RZ Weddings.",
  openGraph: {
    title: "RZ Weddings | Selected Wedding Stories",
    description: "A collection of wedding stories in cinematic motion.",
    url: siteUrl,
    siteName: "RZ Weddings",
    images: [
      {
        url: previewImage,
        width: 2400,
        height: 1256,
        alt: "Jasmin and Daniel's wedding at an Italian villa",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RZ Weddings | Selected Wedding Stories",
    description: "A collection of wedding stories in cinematic motion.",
    images: [previewImage],
  },
  icons: {
    icon: [
      { url: `${publicBasePath}/favicon.svg`, type: "image/svg+xml" },
    ],
    shortcut: `${publicBasePath}/favicon.svg`,
    apple: `${publicBasePath}/apple-touch-icon.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  preload(fontPath("meno-display-light"), {
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  });
  preload(fontPath("meno-display"), {
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  });
  preload(fontPath("vogue-demi"), {
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  });

  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: fontFaceStyles }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
