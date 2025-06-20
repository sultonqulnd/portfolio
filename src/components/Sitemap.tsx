
import { useEffect } from 'react';

const Sitemap = () => {
  useEffect(() => {
    // Generate sitemap data for search engines
    const sitemapData = {
      urls: [
        {
          loc: 'https://alexjohnson.dev/',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: '1.0'
        },
        {
          loc: 'https://alexjohnson.dev/#about',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: '0.8'
        },
        {
          loc: 'https://alexjohnson.dev/#projects',
          lastmod: new Date().toISOString(),
          changefreq: 'weekly',
          priority: '0.9'
        },
        {
          loc: 'https://alexjohnson.dev/#skills',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: '0.7'
        },
        {
          loc: 'https://alexjohnson.dev/#contact',
          lastmod: new Date().toISOString(),
          changefreq: 'monthly',
          priority: '0.8'
        }
      ]
    };

    // Store sitemap data in localStorage for potential use
    localStorage.setItem('sitemap', JSON.stringify(sitemapData));
  }, []);

  return null;
};

export default Sitemap;
