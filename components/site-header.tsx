"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const navigationLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-ink/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setIsOpen((state) => !state)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/40 text-text transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:hidden"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
          <div className="flex flex-col">
            <span className="font-display text-lg text-text">Ahmed Ali</span>
            <span className="text-xs uppercase tracking-[0.4em] text-muted">Full-Stack & AI Builder</span>
          </div>
        </div>
        <nav
          id="primary-navigation"
          className="hidden items-center gap-4 text-sm text-muted sm:flex"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
      {isOpen ? (
        <div className="sm:hidden">
          <div className="mx-4 mt-2 overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-br from-surface/95 via-ink/95 to-ink/80 shadow-card backdrop-blur">
            <nav className="flex flex-col text-sm text-muted">
              <div className="flex items-center justify-between px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-muted/80">
                <span>Navigate</span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-surface/60 text-text transition hover:bg-surface/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
              </div>
              <div className="flex flex-col divide-y divide-border/30">
                {navigationLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between px-5 py-3 text-base font-medium transition hover:bg-surface/70 hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-muted/70">&gt;</span>
                  </a>
                ))}
              </div>
              <div className="flex items-center justify-between px-5 py-3">
                <span className="text-xs uppercase tracking-[0.3em] text-muted/70">Theme</span>
                <ThemeToggle />
              </div>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
