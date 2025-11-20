import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NovaSphere Studio — Crafting Digital Experiences",
  description:
    "NovaSphere Studio builds immersive, human-centered web experiences that blend compelling storytelling with cutting-edge technology.",
  keywords: [
    "web design",
    "creative agency",
    "digital experiences",
    "UI UX",
    "Next.js landing page",
  ],
  authors: [{ name: "NovaSphere Studio" }],
  creator: "NovaSphere Studio",
  metadataBase: new URL("https://agentic-d22cfcdd.vercel.app"),
  openGraph: {
    title: "NovaSphere Studio — Crafting Digital Experiences",
    description:
      "Partner with a studio that turns bold ideas into inspiring, human-centered digital products.",
    url: "https://agentic-d22cfcdd.vercel.app",
    siteName: "NovaSphere Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaSphere Studio — Crafting Digital Experiences",
    description:
      "Immersive storytelling, scalable engineering, and meticulous design under one roof.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-stone-950 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
