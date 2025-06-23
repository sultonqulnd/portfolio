import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToasterProvider } from "@/components/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sultonqul Nortoyloqov - Senior Frontend Developer",
  description:
    "Senior Frontend Developer specializing in React, TypeScript, and modern web technologies. Portfolio showcasing innovative projects and technical expertise.",
  authors: [{ name: "Sultonqul Nortoyloqov" }],
  openGraph: {
    title: "Sultonqul Nortoyloqov - Senior Frontend Developer",
    description:
      "Senior Frontend Developer specializing in React, TypeScript, and modern web technologies. Portfolio showcasing innovative projects and technical expertise.",
    type: "website",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sultonqul_dev",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
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
