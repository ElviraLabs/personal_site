import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sitePath = process.env.NODE_ENV === "production" ? "/personal_site" : "";
const siteUrl = `https://elviralabs.github.io${sitePath}/`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elvira Nurgalieva | Systems Engineering & Process Improvement",
  description:
    "Portfolio site for Elvira Nurgalieva featuring systems engineering, process improvement, technical solution support, CAD, and reverse engineering experience.",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: `${sitePath}/favicon.svg`,
    shortcut: `${sitePath}/favicon.svg`,
  },
  openGraph: {
    title: "Elvira Nurgalieva | Systems Engineering & Process Improvement",
    description:
      "Portfolio site for Elvira Nurgalieva featuring systems engineering, process improvement, technical solution support, CAD, and reverse engineering experience.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: `${sitePath}/screenshot.jpeg`,
        width: 1200,
        height: 750,
        alt: "Preview of Elvira Nurgalieva's portfolio site",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elvira Nurgalieva | Systems Engineering & Process Improvement",
    description:
      "Portfolio site for Elvira Nurgalieva featuring systems engineering, process improvement, technical solution support, CAD, and reverse engineering experience.",
    images: [`${sitePath}/screenshot.jpeg`],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
