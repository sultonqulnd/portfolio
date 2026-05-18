# Sultonqul Nortoyloqov Portfolio

Personal portfolio for Sultonqul Nortoyloqov, a Senior Frontend Engineer based in Tashkent, Uzbekistan. The site presents frontend engineering experience, selected projects, IT product focus areas, skills, contact options, and SEO-friendly machine-readable metadata.

Live site: https://sultonqul.uz

## Highlights

- Next.js App Router portfolio
- Responsive hero, experience, skills, projects, and contact sections
- Smooth scroll reveals, animated background, scroll progress, and custom cursor
- Mobile navigation overlay with animated open/close states
- Resume download and EmailJS contact form
- SEO metadata, Open Graph, Twitter cards, sitemap, robots, manifest, JSON-LD, `llms.txt`, and `humans.txt`
- IT-focused content for SaaS, ERP, CRM, fintech, healthcare, edtech, real estate software, dashboards, admin panels, and SEO web portals

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui and Radix UI primitives
- lucide-react icons
- EmailJS

## Project Structure

```txt
src/app/                 App Router pages, metadata routes, sitemap, manifest
src/components/          Portfolio sections and shared UI components
src/components/ui/       shadcn/ui primitives
src/lib/                 Data, SEO config, utilities, EmailJS config
public/                  Resume, Open Graph image, screenshots, robots.txt
```

## Getting Started

Install dependencies:

```sh
npm install
```

Run the development server:

```sh
npm run dev
```

Open the local URL shown by Next.js, usually:

```txt
http://localhost:3000
```

Build for production:

```sh
npm run build
```

Start the production build:

```sh
npm run start
```

Type-check manually:

```sh
npx tsc --noEmit
```

## SEO Files

The portfolio includes several crawler-facing routes and files:

- `/sitemap.xml`
- `/robots.txt`
- `/manifest.webmanifest`
- `/llms.txt`
- `/humans.txt`

Main SEO configuration lives in:

```txt
src/lib/seo.ts
```

Structured data lives in:

```txt
src/components/StructuredData.tsx
```

## Content Updates

Projects are managed in:

```txt
src/lib/data.ts
```

Project screenshots are stored in:

```txt
public/project_screenshots/
```

The downloadable resume is:

```txt
public/Resume.pdf
```

The Open Graph and Twitter preview image is:

```txt
public/portfolio.png
```

## Contact Form

The contact form uses EmailJS. Configuration is kept in:

```txt
src/lib/emailjs-config.ts
```

Make sure the EmailJS service ID, template ID, and public key are configured correctly before deploying.

## Verification Notes

`npm run build` should pass.

`npm run lint` currently uses `next lint`, which is deprecated and fails in this repository because the project is configured as an ES module and the existing ESLint config references `__dirname`. Migrating to the ESLint CLI or renaming/configuring the ESLint config for ESM/CommonJS compatibility will fix that separately.

## Deployment

The project is ready for Vercel-style deployment. After deployment:

- Submit `https://sultonqul.uz/sitemap.xml` to Google Search Console.
- Submit the same sitemap to Bing Webmaster Tools.
- Test the preview image with social sharing debuggers.
- Check structured data with Google Rich Results Test and Schema.org Validator.
