import { projects } from "@/lib/data";
import { absoluteUrl, siteConfig } from "@/lib/seo";

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        image: absoluteUrl(siteConfig.image),
        jobTitle: "Senior Frontend Engineer",
        description: siteConfig.description,
        email: `mailto:${siteConfig.email}`,
        telephone: siteConfig.phone,
        knowsLanguage: siteConfig.languages,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tashkent",
          addressCountry: "UZ",
        },
        knowsAbout: siteConfig.keywords,
        subjectOf: [
          {
            "@type": "ItemList",
            "@id": `${siteConfig.url}/#engineering-keywords`,
          },
          {
            "@type": "ItemList",
            "@id": `${siteConfig.url}/#industries`,
          },
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Senior Frontend Engineer",
          occupationLocation: {
            "@type": "City",
            name: "Tashkent",
          },
          skills: siteConfig.services.join(", "),
        },
        sameAs: siteConfig.sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#person`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteConfig.url}/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
        inLanguage: "en",
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/#profile-page`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        image: absoluteUrl(siteConfig.image),
        isPartOf: {
          "@id": `${siteConfig.url}/#website`,
        },
        about: {
          "@id": `${siteConfig.url}/#person`,
        },
        mainEntity: {
          "@id": `${siteConfig.url}/#person`,
        },
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Portfolio",
            item: `${siteConfig.url}/#projects`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Contact",
            item: `${siteConfig.url}/#contact`,
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#services`,
        name: "Senior Frontend Engineering Services",
        description:
          "Frontend engineering services for React, Next.js, TypeScript, Vue, SaaS dashboards, ERP systems, CRM platforms, admin panels, fintech, healthcare, edtech, real estate software, and SEO web portals.",
        url: siteConfig.url,
        image: absoluteUrl(siteConfig.image),
        areaServed: [
          {
            "@type": "Country",
            name: "Uzbekistan",
          },
          {
            "@type": "Place",
            name: "Remote",
          },
        ],
        provider: {
          "@id": `${siteConfig.url}/#person`,
        },
        serviceType: siteConfig.services,
      },
      {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/#engineering-keywords`,
        name: "IT and frontend engineering expertise",
        itemListElement: siteConfig.keywords.map((keyword, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: keyword,
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/#industries`,
        name: "IT industries and product domains",
        itemListElement: siteConfig.industries.map((industry, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: industry,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        mainEntity: siteConfig.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/#projects`,
        name: "Frontend Engineering Projects",
        itemListElement: projects.slice(0, 10).map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            name: project.title,
            description: project.description,
            url: project.liveUrl,
            image: absoluteUrl(project.image),
            creator: {
              "@id": `${siteConfig.url}/#person`,
            },
            keywords: project.tech.join(", "),
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
};

export default StructuredData;
