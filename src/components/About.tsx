import { Code, Lightbulb, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code Advocate",
      description:
        "Writing maintainable, scalable code that stands the test of time",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description:
        "Turning complex challenges into elegant, user-friendly solutions",
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description:
        "Optimizing applications for speed, accessibility, and user experience",
    },
    {
      icon: Users,
      title: "Team Player",
      description:
        "Collaborating effectively with designers, developers, and stakeholders",
    },
  ];

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container-width section-padding">
        <header className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I&apos;m a frontend engineer based in Tashkent, building
            production-ready web platforms with React, TypeScript, Next.js, and
            Vue. My work spans ERP systems, admin dashboards, landing pages, and
            high-traffic service portals.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <figure className="animate-slide-in">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/30 to-electric-500/30 rounded-2xl"></div>
              <div className="absolute inset-4 bg-card rounded-xl border border-border flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-2xl font-semibold">Frontend</p>
                  <p className="text-muted-foreground">Engineer</p>
                </div>
              </div>
            </div>
          </figure>

          <article className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Since 2020, I&apos;ve worked across enterprise products,
              education, pharmaceuticals, finance-oriented portals, and
              service marketplaces. I focus on clean architecture, accessible
              interfaces, performance, and maintainable component systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;ve also mentored 400+ frontend students at Najot
              Ta&apos;lim, helping them grow through hands-on projects, code
              reviews, debugging sessions, interview preparation, and
              production-level engineering practices.
            </p>

            <div
              className="flex flex-wrap gap-2 mt-6"
              role="list"
              aria-label="Technologies I work with"
            >
              {[
                "React",
                "TypeScript",
                "Next.js",
                "Vue.js",
                "Nuxt.js",
                "TailwindCSS",
                "Redux",
                "React Query",
                "GraphQL",
              ].map((tech) => (
                <span key={tech} className="tech-badge" role="listitem">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <article
              key={item.title}
              className="card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
