
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({ 
  title = "Alex Johnson - Senior Frontend Developer",
  description = "Senior Frontend Developer specializing in React, TypeScript, and modern web technologies. Portfolio showcasing innovative projects and technical expertise.",
  keywords = "frontend developer, react developer, typescript, javascript, web development, portfolio, senior developer, alex johnson",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  url = "https://alexjohnson.dev",
  type = "website"
}: SEOProps) => {
  const fullTitle = title.includes("Alex Johnson") ? title : `${title} | Alex Johnson`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Alex Johnson" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Alex Johnson Portfolio" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:site" content="@alexjohnson_dev" />
      <meta property="twitter:creator" content="@alexjohnson_dev" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Alex Johnson",
          "jobTitle": "Senior Frontend Developer",
          "description": description,
          "url": url,
          "image": image,
          "sameAs": [
            "https://github.com",
            "https://linkedin.com",
            "https://twitter.com/alexjohnson_dev"
          ],
          "knowsAbout": [
            "React",
            "TypeScript",
            "JavaScript",
            "Next.js",
            "Node.js",
            "Web Development",
            "Frontend Development",
            "UI/UX Design"
          ],
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "University of Technology"
          },
          "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
