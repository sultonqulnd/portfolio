import { BarChart3, Building2, Gauge, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/seo";

const focusAreas = [
  {
    icon: Building2,
    title: "Enterprise & SaaS Frontends",
    description:
      "React, Next.js, TypeScript, Vue, and Nuxt.js interfaces for SaaS products, ERP systems, CRM platforms, HRM tools, service marketplaces, and enterprise admin panels.",
  },
  {
    icon: BarChart3,
    title: "Dashboards & Data Visualization",
    description:
      "Role-based dashboards, real-time analytics, Kanban boards, finance reports, payment workflows, warehouse inventory screens, and Excel/PDF export flows.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Product Workflows",
    description:
      "RBAC interfaces, permission-aware routing, authentication flows, OneID/eSign integrations, internal operations tools, and production-ready frontend architecture.",
  },
  {
    icon: Gauge,
    title: "SEO & Performance Engineering",
    description:
      "SEO-focused web portals, responsive landing pages, Core Web Vitals improvements, technical SEO metadata, structured data, accessibility, and scalable component systems.",
  },
];

const EngineeringFocus = () => {
  return (
    <section id="engineering-focus" className="py-20 bg-card/30">
      <div className="container-width section-padding">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              IT Engineering Focus
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Frontend engineering for modern IT products across SaaS, fintech,
              healthcare, edtech, real estate, pharmaceutical platforms,
              marketplaces, ERP systems, CRM dashboards, and admin panels.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {focusAreas.map((area, index) => (
            <Reveal key={area.title} delay={index * 80}>
              <article className="card-hover h-full rounded-xl p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                  <area.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{area.title}</h3>
                <p className="leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {[...siteConfig.industries, ...siteConfig.services.slice(0, 8)].map(
              (keyword) => (
                <span key={keyword} className="tech-badge">
                  {keyword}
                </span>
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default EngineeringFocus;
