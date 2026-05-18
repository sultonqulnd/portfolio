"use client";

import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import Reveal from "@/components/Reveal";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container-width section-padding">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work, demonstrating expertise in modern
              web technologies and commitment to delivering exceptional user
              experiences across various industries.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 55}
              className={project.featured ? "lg:col-span-2" : ""}
            >
              <Card
                className={`card-hover overflow-hidden h-full ${
                  project.featured ? "lg:col-span-2" : ""
                }`}
              >
                <div className="group relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={(event) => {
                      event.currentTarget.src = "/placeholder.svg";
                    }}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg shadow-primary/30">
                      <Sparkles className="h-3 w-3" />
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-start p-6">
                    <div className="flex translate-y-3 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <Button size="sm" variant="secondary" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live Demo
                        </a>
                      </Button>
                      {project.githubUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl mb-2">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a
                href="mailto:sultonqulnd@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Get In Touch for More Projects
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
