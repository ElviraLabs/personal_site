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
  title: "Elvira Nurgalieva | Systems Engineer | Manufacturing Engineering Portfolio",
  description:
    "Systems Engineer with an FE pass, specializing in manufacturing process improvement, CAD, reverse engineering, material flow optimization, and continuous improvement.",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: `${sitePath}/favicon.svg`,
    shortcut: `${sitePath}/favicon.svg`,
  },
  openGraph: {
    title: "Elvira Nurgalieva | Systems Engineer | Manufacturing Engineering Portfolio",
    description:
      "Systems Engineer with an FE pass, specializing in manufacturing process improvement, CAD, reverse engineering, material flow optimization, and continuous improvement.",
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
    title: "Elvira Nurgalieva | Systems Engineer | Manufacturing Engineering Portfolio",
    description:
      "Systems Engineer with an FE pass, specializing in manufacturing process improvement, CAD, reverse engineering, material flow optimization, and continuous improvement.",
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
