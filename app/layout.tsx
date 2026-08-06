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
  "https://rz-social-media.github.io/wedding-video-Jasmin-Daniel/images/jasmin-daniel-hero.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://rz-social-media.github.io/wedding-video-Jasmin-Daniel/",
  ),
  title: "Jasmin & Daniel | RZ Wedding Videos",
  description:
    "Jasmin and Daniel's wedding story, captured in cinematic motion by RZ Weddings.",
  openGraph: {
    title: "Jasmin & Daniel | RZ Wedding Videos",
    description: "A wedding story in cinematic motion.",
    url: "https://rz-social-media.github.io/wedding-video-Jasmin-Daniel/",
    siteName: "RZ Weddings",
    images: [previewImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasmin & Daniel | RZ Wedding Videos",
    description: "A wedding story in cinematic motion.",
    images: [previewImage],
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
