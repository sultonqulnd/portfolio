"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled || isMobileMenuOpen
          ? "border-b border-border/80 bg-background/90 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="container-width section-padding py-4">
        <div className="relative z-[70] flex justify-between items-center">
          <button
            onClick={() => scrollToSection("#home")}
            className="text-2xl font-bold gradient-text"
            aria-label="Go to home"
          >
            SN
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="group relative text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "relative z-[70] md:hidden rounded-xl border border-border/80 bg-secondary/70 shadow-lg shadow-black/20 backdrop-blur transition-all duration-300",
              isMobileMenuOpen &&
                "rotate-90 border-primary/30 bg-secondary shadow-primary/20"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        <div
          id="mobile-navigation"
          className={cn(
            "fixed inset-0 z-[60] md:hidden transition-[opacity,visibility] duration-500 ease-out",
            isMobileMenuOpen
              ? "visible pointer-events-auto opacity-100"
              : "invisible pointer-events-none opacity-0"
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          aria-hidden={!isMobileMenuOpen}
        >
          <div
            className={cn(
              "absolute inset-0 bg-background/98 backdrop-blur-2xl transition-all duration-500 ease-out",
              isMobileMenuOpen ? "opacity-100" : "opacity-0"
            )}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            className={cn(
              "absolute inset-x-4 top-24 overflow-hidden rounded-2xl border border-white/10 bg-card/95 shadow-2xl shadow-black/50 backdrop-blur-xl transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
              isMobileMenuOpen
                ? "translate-y-0 scale-100 opacity-100"
                : "-translate-y-6 scale-95 opacity-0"
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(52,211,153,0.12),transparent_42%)]" />
            <div className="relative border-b border-border/70 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Navigation
              </p>
            </div>
            <div className="relative flex flex-col p-3">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                  className={cn(
                    "group flex min-h-14 items-center justify-between rounded-xl px-4 text-left text-lg font-semibold text-foreground transition-all duration-300 hover:bg-primary/10 hover:text-primary focus-visible:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                    isMobileMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0"
                  )}
                  style={{
                    transitionDelay: isMobileMenuOpen
                      ? `${120 + index * 45}ms`
                      : "0ms",
                  }}
                >
                  <span>{item.label}</span>
                  <span className="h-2 w-2 rounded-full bg-primary/0 transition-all duration-200 group-hover:bg-primary" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
