import { siteConfig } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const content = `/* TEAM */
Name: ${siteConfig.name}
Role: Senior Frontend Engineer
Location: ${siteConfig.location}
Contact: ${siteConfig.email}
Website: ${siteConfig.url}

/* SITE */
Stack: React, Next.js, TypeScript, TailwindCSS
Focus: Portfolio, frontend engineering, enterprise dashboards, ERP systems, admin panels, SEO web portals
Language: English
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
