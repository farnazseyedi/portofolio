"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com/farnazseyedi", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/farnazseyedi/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:farnazseyedi912@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-accent/5" />

      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl transition-all duration-1000 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-sm text-muted-foreground">
              Available for new opportunities
            </span>
          </div>

          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="text-balance">
              Hi, I&apos;m
              <span className="text-primary relative">Farnaz seyedi</span>
            </span>
          </h1>

          <p
            className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            A passionate
            <span className="text-foreground font-medium">
              Front-End Developer
            </span>
            specialized in <span className="text-primary">React/Next</span>,
            building responsive, form-heavy web applications with clean code and
            strong focus on user experience.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button asChild size="lg" className="group">
              <Link href="/#projects">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/#contact">Get In Touch</Link>
            </Button>
          </div>

          <div
            className={`flex justify-center gap-4 transition-all duration-700 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-black dark:bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-200 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Link
          href="/#about"
          className={`flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-700 delay-500 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
