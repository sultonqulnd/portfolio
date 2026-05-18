import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToasterProvider } from "@/components/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://sultonqul.uz";
const previewImage = `${siteUrl}/portfolio.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sultonqul Nortoyloqov - Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer specializing in React, TypeScript, Next.js, Vue, enterprise dashboards, ERP systems, and SEO-focused web portals.",
  authors: [{ name: "Sultonqul Nortoyloqov" }],
  openGraph: {
    title: "Sultonqul Nortoyloqov - Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer specializing in React, TypeScript, Next.js, Vue, enterprise dashboards, ERP systems, and SEO-focused web portals.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: previewImage,
        width: 1200,
        height: 630,
        alt: "Sultonqul Nortoyloqov portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sultonqul_dev",
    title: "Sultonqul Nortoyloqov - Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer specializing in React, TypeScript, Next.js, Vue, enterprise dashboards, ERP systems, and SEO-focused web portals.",
    images: [previewImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={inter.className}>
        {children}
        <ToasterProvider />
      </body>
    </html>
  );
}
