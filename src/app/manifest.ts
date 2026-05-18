import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#050912",
    theme_color: "#3b82f6",
    categories: ["portfolio", "developer", "technology"],
    lang: "en",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: absoluteUrl(siteConfig.image),
        sizes: "1200x630",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
