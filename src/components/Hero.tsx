"use client";

import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container-width section-padding text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Sultonqul Nortoyloqov</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
            Frontend Developer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafting exceptional digital experiences with modern web
            technologies. Passionate about React, TypeScript, and building
            innovative solutions that make a difference.
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
              <a href="/Sultonqul_Nortoyloqov.pdf" download>
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
              { icon: Mail, href: "mailto:me@sultonqul.uz", label: "Email" },
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
