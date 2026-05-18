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
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="container-width section-padding text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-cyan-100 shadow-lg shadow-primary/10 backdrop-blur">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300" />
            </span>
            Available for senior frontend opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Sultonqul Nortoyloqov</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
            Senior Frontend Engineer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Frontend engineer building scalable React, Next.js, Vue, and
            TypeScript products, from enterprise ERP dashboards to SEO-focused
            web portals and admin systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="group"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="group" asChild>
              <a href="/Resume.pdf" download>
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
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
                className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 hover:bg-primary/10 group"
                aria-label={label}
              >
                <Icon className="h-5 w-5 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
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

          <div className="ticker-mask mx-auto mt-10 max-w-4xl overflow-hidden border-y border-border/60 py-4">
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
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
