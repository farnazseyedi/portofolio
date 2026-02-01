"use client";

import * as React from "react";
import { useInView } from "@/hooks/use-in-view";

const skillCategories = [
  {
    title: "Core",
    skills: [
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "React.js", level: 95 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Responsive Design", level: 92 },
      { name: "State Management", level: 90 },
    ],
  },
  {
    title: "Forms & Styling",
    skills: [
      { name: "React Hook Form", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "shadcn/ui", level: 85 },
      { name: "Yup Validation", level: 88 },
      { name: "Material UI (MUI)", level: 85 },
    ],
  },
  {
    title: "Integration & Tools",
    skills: [
      { name: "REST APIs", level: 88 },
      { name: "Redux Toolkit", level: 85 },
      { name: "Zustand", level: 85 },
      { name: "Git & GitHub", level: 90 },
      { name: "React Router", level: 88 },
    ],
  },
];

function SkillBar({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-linear-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isInView ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="skills" ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            My Expertise
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`p-6 rounded-2xl bg-card border border-border transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <h3
                className="text-xl font-semibold mb-6 pb-4 border-b border-border"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 150 + skillIndex * 100}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground mb-4">Also familiar with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Formik",
              "Axios",
              "Basic Authentication",
              "Component Architecture",
              "Mobile-First Development",
              "Jalali Date Libraries",
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm rounded-full bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
