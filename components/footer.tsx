"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  { href: "https://github.com/farnazseyedi", icon: Github, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/farnazseyedi/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "mailto:farnazseyedi912@gmail.com", icon: Mail, label: "Email" },
];

const footerLinks = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight inline-block"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <Image
                src="/images/mylogo.jpg"
                alt="logo"
                width={300}
                height={300}
                className="w-12 h-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Building digital experiences with passion and precision.
              Let&apos;s create something amazing together.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="font-semibold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3
              className="font-semibold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Farnaz. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with <span className="text-primary">Next.js</span>,
            <span className="text-primary">TypeScript</span> &
            <span className="text-primary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
