import { projects } from "@/lib/data";
import { siteConfig } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const projectList = projects
    .slice(0, 10)
    .map(
      (project) =>
        `- ${project.title}: ${project.description} Technologies: ${project.tech.join(", ")}. URL: ${project.liveUrl}`
    )
    .join("\n");

  const content = `# ${siteConfig.name}

${siteConfig.description}

## Primary Expertise
${siteConfig.services.map((service) => `- ${service}`).join("\n")}

## IT Product Domains
${siteConfig.industries.map((industry) => `- ${industry}`).join("\n")}

## Search-Relevant Keywords
${siteConfig.keywords.map((keyword) => `- ${keyword}`).join("\n")}

## Projects
${projectList}

## Contact
- Website: ${siteConfig.url}
- Email: ${siteConfig.email}
- Location: ${siteConfig.location}
- Profiles: ${siteConfig.sameAs.join(", ")}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
