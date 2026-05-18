import { Briefcase, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

const experiences = [
  {
    company: "Unicorp",
    role: "Senior Frontend Engineer",
    period: "August 2025 - Present",
    location: "Tashkent",
    highlights: [
      "Built MyCare landing and admin experiences for booking nurses, nannies, and child massage specialists at home.",
      "Developed iQUB ERP features across objects, sales, finance, employees, CRM, warehouse inventory, and automated reporting.",
      "Implemented RBAC dashboards with dynamic routing, permission management, 12+ user roles, Kanban lead management, real-time data visualization, and Excel/PDF exports.",
    ],
  },
  {
    company: "Kliro Tech",
    role: "Senior Frontend Engineer",
    period: "June 2025 - December 2025",
    location: "Part-time freelance",
    highlights: [
      "Built an SEO-focused web portal for comparing bank services, insurance, airline tickets, and hotels.",
      "Developed a scalable admin panel and dashboard for managing web portal content and operations.",
    ],
  },
  {
    company: "Pharmaceutical Development Agency",
    role: "Frontend Engineer",
    period: "February 2024 - September 2025",
    location: "Tashkent",
    highlights: [
      "Delivered GxP ERP, Pharm Portal, SRMS, HRM admin workflows, and the PTU website with admin panel.",
      "Implemented eSign, OneID authentication, external API integrations, secure admin panels, and content management workflows.",
    ],
  },
  {
    company: "Najot Ta'lim",
    role: "Frontend Mentor",
    period: "November 2022 - December 2024",
    location: "Tashkent",
    highlights: [
      "Mentored 400+ students through JavaScript, React, TypeScript, and Next.js programs with code reviews and hands-on projects.",
      "Led debugging sessions, real project simulations, portfolio reviews, interview preparation, and career guidance.",
    ],
  },
  {
    company: "Kesh Trade",
    role: "Frontend Engineer",
    period: "May 2022 - November 2022",
    location: "Part-time freelance",
    highlights: [
      "Built the KeshTrade landing page with strong SEO foundations.",
      "Developed ERP dashboard features for sales, customer interactions, and internal data management.",
    ],
  },
  {
    company: "Dev Zone",
    role: "Frontend Engineer",
    period: "April 2021 - November 2022",
    location: "Tashkent",
    highlights: [
      "Built the DevZone website with an admin dashboard and SEO-focused landing experience.",
      "Developed MyMocks, an online IELTS mock testing platform with automated result evaluation and admin tooling.",
    ],
  },
  {
    company: "Team Pro",
    role: "Frontend Engineer",
    period: "September 2020 - April 2021",
    location: "Tashkent",
    highlights: [
      "Built the TeamPro company landing page with SEO-focused implementation.",
      "Developed a task manager platform with customizable Kanban workflows.",
    ],
  },
];

const languages = ["Uzbek - Native", "English - B2", "Russian - B2"];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container-width section-padding">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Frontend engineering work across enterprise ERP systems, admin
              dashboards, SEO web portals, education platforms, and mentoring.
            </p>
          </div>
        </Reveal>

        <div className="relative grid lg:grid-cols-2 gap-6 mb-12">
          <div className="timeline-line absolute left-1/2 top-4 hidden h-[calc(100%-2rem)] w-px -translate-x-1/2 lg:block" />
          {experiences.map((experience, index) => (
            <Reveal
              key={`${experience.company}-${experience.period}`}
              delay={index * 70}
              direction={index % 2 === 0 ? "right" : "left"}
            >
              <Card className="card-hover h-full">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">
                        {experience.company}
                      </CardTitle>
                      <p className="font-medium text-primary">
                        {experience.role}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <span>{experience.period}</span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {experience.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground leading-relaxed">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6">Languages</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {languages.map((language) => (
                <span key={language} className="tech-badge">
                  {language}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;
