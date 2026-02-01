"use client";

import * as React from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useInView } from "@/hooks/use-in-view";
import Image from "next/image";

const projects = [
  {
    title: "Shopping Page",
    description:
      "Collection of responsive web applications built during Makeen Academy bootcamp, focusing on modern JavaScript, React Hooks, and clean, maintainable code principles.",
    image: "/images/shop.png",
    tags: [
      "React",
      "JavaScript",
      "Responsive Design",
      "liveUrl",
      "HTML",
      "CSS",
    ],
    liveUrl: "https://shopping-page-henna.vercel.app/",
    githubUrl: "https://github.com/farnazseyedi/shopping-page",
    featured: true,
  },
  {
    title: "Evenjo – Concert & Festival Ticketing Website",
    description:
      "A concert ticket purchasing web application with complex forms and dynamic shopping cart management. Implemented Yup validation for robust error handling and displayed event data dynamically across the application.",
    image: "/images/evenjo.png",
    tags: ["React", "Yup Validation", "Shopping Cart", "Form Handling"],
    liveUrl: "#",
    githubUrl: "https://github.com/amirhosein-rafeie/evenjo",
    featured: true,
  },
  {
    title: "Makeen Co-Working Space Platform",
    description:
      "A comprehensive co-working space platform with separate user and admin panels.",
    image: "/images/makeen.png",
    tags: [
      "React",
      "Component Architecture",
      "Jalali Dates",
      "State Management",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/farnazseyedi/Co-working-space",
    featured: true,
  },
  {
    title: "Makeen Co-Working Space Platform (AdminPanel)",
    description:
      "Utilized Jalali date libraries, followed component-based architecture, and managed complex data flow between components.",
    image: "/images/makeen2.png",
    tags: [
      "React",
      "Component Architecture",
      "Jalali Dates",
      "State Management",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/farnazseyedi/Co-working-space-Admin",
    featured: true,
  },
  {
    title: "Frontend Development Projects",
    description: "introduce myself",
    image: "/images/thissite.png",
    tags: ["React", "JavaScript", "Responsive Design", "REST APIs"],
    liveUrl: "https://portofolio-sigma-red-mhgpdozfr3.vercel.app/",
    githubUrl: "https://github.com/farnazseyedi/portofolio",
    featured: true,
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`group relative rounded-2xl overflow-hidden bg-card border border-border transition-all duration-700 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${project.featured ? "md:col-span-1" : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="aspect-video bg-linear-to-br from-primary/10 to-accent/10 relative overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            className="rounded-xl object-cover"
            src={project.image}
            alt={project.title}
            fill
          />
        </div>

        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
              aria-label="View live project"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary text-foreground hover:scale-110 transition-transform"
            aria-label="View source code"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3
          className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs font-normal"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            My Work
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
          <h1>
            (( I am not allowed to show my GitHub for this project because of my
            employer.))
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        ></div>
      </div>
    </section>
  );
}
