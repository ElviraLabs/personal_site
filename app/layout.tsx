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
  title: "Elvira Nurgalieva | Engineer Intern (EI)",
  description:
    "Portfolio site for Elvira Nurgalieva featuring systems engineering, process improvement, CAD, and reverse engineering experience.",
  metadataBase: new URL("https://elvira-nurgalieva-portfolio-2026.team-dason-2899.chatgpt-team.site"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Elvira Nurgalieva | Engineer Intern (EI)",
    description:
      "Portfolio site for Elvira Nurgalieva featuring systems engineering, process improvement, CAD, and reverse engineering experience.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/screenshot.jpeg",
        width: 1200,
        height: 750,
        alt: "Preview of Elvira Nurgalieva's portfolio site",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elvira Nurgalieva | Engineer Intern (EI)",
    description:
      "Portfolio site for Elvira Nurgalieva featuring systems engineering, process improvement, CAD, and reverse engineering experience.",
    images: ["/screenshot.jpeg"],
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
