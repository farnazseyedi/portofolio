"use client";

import * as React from "react";
import { useInView } from "@/hooks/use-in-view";
import Image from "next/image";

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className={`mb-12 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
              About Me
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              A bit about myself
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>

          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            <div
              className={`md:col-span-2 transition-all duration-700 delay-100 ${
                isInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-linear-to-br from-primary/20 to-accent/20 border border-border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    className="w-60 h-auto rounded-xl"
                    src="/images/myphoto.jpg"
                    width={200}
                    height={250}
                    alt="logo"
                  />
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-lg" />
              </div>
            </div>

            <div
              className={`md:col-span-3 space-y-6 transition-all duration-700 delay-200 ${
                isInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a passionate Front-End Developer with a strong focus on
                React and modern JavaScript. I enjoy building user-centric,
                scalable, and maintainable web applications, especially those
                involving complex forms and state management.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I am continuously learning, adapting to new technologies, and
                improving my problem-solving skills through real-world projects
                and collaborative environments. My expertise lies in creating
                responsive, form-heavy web applications with clean, maintainable
                code.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I completed the Frontend Development Bootcamp at Makeen Academy,
                where I gained hands-on experience building responsive user
                interfaces, working with REST APIs, and collaborating in team
                environments to develop real-world projects.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: "Education", value: "Bootcamp" },
                  { label: "Focus", value: "React" },
                  { label: "Current Status", value: "Available" },
                  { label: "Location", value: "Tehran" },
                ].map((fact, index) => (
                  <div
                    key={fact.label}
                    className={`p-4 rounded-xl bg-card border border-border transition-all duration-500 ${
                      isInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div
                      className="text-2xl font-bold text-primary"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {fact.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {fact.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
