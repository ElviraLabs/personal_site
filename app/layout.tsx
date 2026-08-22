import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sitePath = "";
const siteUrl = "https://elvira-n.com/";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elvira Nurgalieva | Industrial & Manufacturing Engineer",
  description:
    "Industrial & Manufacturing Engineer and Colorado Engineer Intern (EI), focused on process improvement, manufacturing systems, quality, operations, material flow, and continuous improvement.",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: `${sitePath}/favicon.svg`,
    shortcut: `${sitePath}/favicon.svg`,
  },
  openGraph: {
    title: "Elvira Nurgalieva | Industrial & Manufacturing Engineer",
    description:
      "Industrial & Manufacturing Engineer and Colorado Engineer Intern (EI), focused on process improvement, manufacturing systems, quality, operations, material flow, and continuous improvement.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: `${sitePath}/og.png`,
        width: 1200,
        height: 630,
        alt: "Elvira Nurgalieva, Industrial & Manufacturing Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elvira Nurgalieva | Industrial & Manufacturing Engineer",
    description:
      "Industrial & Manufacturing Engineer and Colorado Engineer Intern (EI), focused on process improvement, manufacturing systems, quality, operations, material flow, and continuous improvement.",
    images: [`${sitePath}/og.png`],
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
