"use client";

import { useInView } from "@/hooks/use-in-view";

const softSkills = [
  {
    title: "Problem-Solving",
    description:
      "Analyzing complex challenges and breaking them down into manageable solutions with a focus on clean implementation.",
  },
  {
    title: "Critical Thinking",
    description:
      "Evaluating different approaches and making informed decisions to optimize performance and user experience.",
  },
  {
    title: "Communication",
    description:
      "Clearly articulating ideas, explaining technical concepts, and collaborating effectively with team members.",
  },
  {
    title: "Teamwork",
    description:
      "Working collaboratively in diverse environments, contributing to team goals, and supporting colleagues.",
  },
  {
    title: "Adaptability",
    description:
      "Quickly learning new technologies and frameworks, adjusting to project requirements, and thriving in changing environments.",
  },
  {
    title: "Fast Learning",
    description:
      "Efficiently acquiring new skills and knowledge, staying up-to-date with industry trends and best practices.",
  },
  {
    title: "Time Management",
    description:
      "Prioritizing tasks effectively, meeting deadlines, and maintaining productivity across multiple projects.",
  },
  {
    title: "Attention to Detail",
    description:
      "Ensuring pixel-perfect implementations, catching edge cases, and delivering polished, high-quality code.",
  },
];

export function SoftSkillsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="soft-skills" ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            Professional Qualities
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Soft Skills
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beyond technical expertise, I bring a strong set of professional and
            interpersonal skills that make me a valuable team member and
            collaborator.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {softSkills.map((skill, index) => (
            <div
              key={skill.title}
              className={`p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 group cursor-pointer ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">
                  {index + 1}
                </span>
              </div>
              <h3
                className="font-semibold mb-2 group-hover:text-primary transition-colors"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {skill.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
