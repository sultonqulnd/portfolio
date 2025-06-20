
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
  title = "Sultonqul Nortoyloqov - Frontend Developer",
  description = "Frontend Developer specializing in React, TypeScript, and modern web technologies. Portfolio showcasing innovative projects and technical expertise.",
  keywords = "frontend developer, react developer, typescript, javascript, web development, portfolio, sultonqul nortoyloqov, nextjs, tailwindcss",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  url = "https://sultonqul.uz",
  type = "website"
}: SEOProps) => {
  const fullTitle = title.includes("Sultonqul") ? title : `${title} | Sultonqul Nortoyloqov`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Sultonqul Nortoyloqov" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Sultonqul Nortoyloqov Portfolio" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Sultonqul Nortoyloqov",
          "jobTitle": "Frontend Developer",
          "description": description,
          "url": url,
          "image": image,
          "sameAs": [
            "https://github.com/sultonqulnd",
            "https://linkedin.com/in/sultonqul"
          ],
          "knowsAbout": [
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "TailwindCSS",
            "Redux",
            "React Query",
            "Web Development",
            "Frontend Development"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Tashkent",
            "addressCountry": "Uzbekistan"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
