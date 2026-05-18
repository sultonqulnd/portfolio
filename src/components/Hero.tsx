"use client";

import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowDown,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const stats = [
    { value: "5+", label: "Years building products" },
    { value: "500+", label: "ERP components shipped" },
    { value: "400+", label: "Frontend students mentored" },
  ];

  const tickerItems = [
    "React",
    "TypeScript",
    "Next.js",
    "Vue",
    "Nuxt",
    "RBAC",
    "ERP",
    "GraphQL",
    "WebSockets",
    "CI/CD",
  ];

  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-0 py-24 sm:py-28 md:pt-20"
    >
      <div className="hero-orbit hidden sm:block" aria-hidden="true" />
      <div className="container-width section-padding relative z-10 w-full text-center">
        <div className="animate-fade-in">
          <div className="mx-auto mb-8 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-2 text-center text-xs font-medium leading-snug text-cyan-100 shadow-lg shadow-primary/10 backdrop-blur sm:px-4 sm:text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300" />
            </span>
            <span>Available for senior frontend opportunities</span>
          </div>

          <h1 className="mx-auto mb-5 max-w-[10ch] break-words text-[clamp(2.45rem,12vw,4.5rem)] font-bold leading-[0.95] tracking-tight sm:max-w-none md:text-7xl">
            <span className="gradient-text block">Sultonqul Nortoyloqov</span>
          </h1>
          <h2 className="mb-6 text-xl font-light text-muted-foreground sm:text-2xl md:mb-8 md:text-3xl">
            Senior Frontend Engineer
          </h2>
          <p className="mx-auto mb-10 max-w-[34rem] text-base leading-relaxed text-muted-foreground sm:text-lg md:mb-12 md:max-w-2xl md:text-xl">
            Frontend engineer building scalable React, Next.js, Vue, and
            TypeScript products, from enterprise ERP dashboards to SEO-focused
            web portals and admin systems.
          </p>

          <div className="mx-auto mb-12 flex w-full max-w-sm flex-col gap-3 sm:mb-16 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
            <Button
              size="lg"
              className="magnetic-button group w-full sm:w-auto"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="magnetic-button group w-full sm:w-auto"
              asChild
            >
              <a href="/Resume.pdf" download>
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-4 sm:gap-6">
            {[
              {
                icon: Github,
                href: "https://github.com/sultonqulnd",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/sultonqul",
                label: "LinkedIn",
              },
              {
                icon: Send,
                href: "https://t.me/sultonqul",
                label: "Telegram",
              },
              {
                icon: Mail,
                href: "mailto:sultonqulnd@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-card p-3 transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary/10 group"
                aria-label={label}
              >
                <Icon className="h-5 w-5 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:mt-14 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="card-hover rounded-xl px-5 py-4 text-left animate-fade-in"
                style={{ animationDelay: `${index * 120 + 300}ms` }}
              >
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="ticker-mask mx-auto mt-8 max-w-4xl overflow-hidden border-y border-border/60 py-4 sm:mt-10">
            <div className="ticker-track flex w-max gap-3">
              {[...tickerItems, ...tickerItems].map((item, index) => (
                <span key={`${item}-${index}`} className="tech-badge">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce sm:block"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
