import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToasterProvider } from "@/components/ToasterProvider";
import { absoluteUrl, siteConfig } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"] });

const previewImage = absoluteUrl(siteConfig.image);

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Portfolio",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/portfolio.png",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  other: {
    "profile:first_name": "Sultonqul",
    "profile:last_name": "Nortoyloqov",
    "profile:username": "sultonqulnd",
    "og:email": siteConfig.email,
    "og:phone_number": siteConfig.phone,
    "geo.region": "UZ-TK",
    "geo.placename": "Tashkent",
    "ICBM": "41.2995, 69.2401",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
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
    creator: "@sultonqul_dev",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [previewImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050912",
  colorScheme: "dark",
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
