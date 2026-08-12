"use client";

import { Reveal } from "@/components/Reveal";
import { ThemeToggle } from "@/components/ThemeToggle";
import type { SiteContent } from "@/content/site";

type HeroProps = {
  content: SiteContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <header className="relative overflow-visible">
      <div className="hero-wash" aria-hidden="true" />
      <div className="relative z-[1]">
        <div className="flex items-start justify-between gap-4 pt-6 md:pt-10">
          <Reveal as="p" className="text-sm leading-body text-muted">
            {content.name}
          </Reveal>
          <ThemeToggle />
        </div>

        <div className="pt-10 md:pt-18">
          <Reveal
            as="h1"
            className="max-w-[36ch] text-display font-medium leading-display"
          >
            {content.positioning}
          </Reveal>
          <Reveal
            as="p"
            delay={0.09}
            className="mt-4 max-w-[52ch] text-base leading-body text-muted"
          >
            {content.status}
          </Reveal>
          <Reveal delay={0.18}>
            <nav aria-label="Contact" className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-base">
              {content.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-accent hover:opacity-80"
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                  {link.external ? (
                    <span className="sr-only"> (opens in a new tab)</span>
                  ) : null}
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </div>
    </header>
  );
}
