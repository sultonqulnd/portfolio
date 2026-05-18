
import { Card, CardContent } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "React", level: 95 },
        { name: "Next.js", level: 88 },
        { name: "Vue.js", level: 84 },
        { name: "Nuxt.js", level: 80 },
        { name: "TailwindCSS", level: 92 },
        { name: "styled-components", level: 85 },
      ],
    },
    {
      title: "UI Libraries & State Management",
      skills: [
        { name: "MUI", level: 88 },
        { name: "Ant Design", level: 85 },
        { name: "Redux", level: 90 },
        { name: "Zustand", level: 85 },
        { name: "React Query", level: 88 },
        { name: "Pinia", level: 78 },
        { name: "Vuex", level: 76 },
        { name: "RTK Query", level: 82 },
      ],
    },
    {
      title: "APIs, Tools & Engineering",
      skills: [
        { name: "REST API", level: 92 },
        { name: "GraphQL", level: 82 },
        { name: "WebSockets", level: 80 },
        { name: "Firebase", level: 85 },
        { name: "CI/CD", level: 82 },
        { name: "Node.js", level: 78 },
        { name: "Git/GitHub", level: 90 },
      ],
    },
  ];

  const tools = [
    "VS Code",
    "Git",
    "GitHub",
    "GitLab",
    "GitHub Actions",
    "Axios",
    "Lodash",
    "Firebase",
    "Express.js",
    "Nest.js",
    "MongoDB",
    "PostgreSQL",
    "Vercel",
    "Netlify",
    "Postman",
    "Chrome DevTools",
    "Figma",
    "Slack",
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container-width section-padding">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A resume-backed toolkit for building scalable frontend systems,
              admin dashboards, real-time workflows, and production-ready web
              applications.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Reveal key={category.title} delay={categoryIndex * 100}>
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-center">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-cyan-300 via-primary to-emerald-300 transition-all duration-1000 ease-out"
                            style={{
                              width: `${skill.level}%`,
                              transitionDelay: `${skillIndex * 80}ms`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <span
                  key={tool}
                  className="tech-badge cursor-default"
                  style={{ transitionDelay: `${index * 20}ms` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
