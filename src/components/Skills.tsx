
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Vue.js", level: 75 },
        { name: "Tailwind CSS", level: 92 },
        { name: "HTML/CSS", level: 98 }
      ]
    },
    {
      title: "Backend & Tools",
      skills: [
        { name: "Node.js", level: 82 },
        { name: "GraphQL", level: 78 },
        { name: "PostgreSQL", level: 80 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Git", level: 95 }
      ]
    },
    {
      title: "Design & Others",
      skills: [
        { name: "Figma", level: 85 },
        { name: "UI/UX Design", level: 80 },
        { name: "Jest/Testing", level: 88 },
        { name: "Webpack", level: 75 },
        { name: "Performance", level: 90 },
        { name: "Accessibility", level: 85 }
      ]
    }
  ];

  const tools = [
    "VS Code", "Figma", "Postman", "Chrome DevTools", "Jira", "Slack",
    "GitHub", "Vercel", "Netlify", "Firebase", "Supabase", "Prisma"
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container-width section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and methodologies 
            that I use to build exceptional digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={category.title} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="animate-slide-in" style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-electric-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span 
                key={tool} 
                className="tech-badge hover:bg-primary/20 hover:border-primary/40 transition-all duration-200 cursor-default animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
