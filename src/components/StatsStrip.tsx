"use client";

import { useLayoutEffect, useRef, useState } from "react";

const STATS = [
  { value: 4, label: "products shipped and live" },
  { value: 9, label: "client projects delivered" },
  { value: 8, label: "industries worked across" },
  { value: 20, label: "user interviews run" },
] as const;

const COUNT_MS = 1000;
const STAGGER_MS = 100;

function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3;
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function StatsStrip() {
  const rootRef = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState<"static" | "armed" | "playing">("static");
  const [shown, setShown] = useState<number[]>(() => STATS.map((stat) => stat.value));

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;

    setPhase("armed");
    setShown(STATS.map(() => 0));

    let started = false;
    let frameId = 0;

    const play = () => {
      if (started) return;
      started = true;
      setPhase("playing");

      const start = performance.now();
      const tick = (now: number) => {
        const next = STATS.map((stat, index) => {
          const elapsed = now - start - index * STAGGER_MS;
          if (elapsed <= 0) return 0;
          const progress = Math.min(1, elapsed / COUNT_MS);
          return Math.round(easeOutCubic(progress) * stat.value);
        });
        setShown(next);
        if (next.some((value, index) => value < STATS[index].value)) {
          frameId = requestAnimationFrame(tick);
        }
      };

      frameId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        play();
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(root);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className={`stats-strip frame${phase === "armed" ? " is-armed" : ""}${phase === "playing" ? " is-playing" : ""}`}
      aria-label="Highlights"
    >
      <ul className="stats-grid">
        {STATS.map((stat, index) => (
          <li
            key={stat.label}
            className="stats-item"
            style={{ transitionDelay: `${index * STAGGER_MS}ms` }}
          >
            <p className="sr-only">
              {stat.value} {stat.label}
            </p>
            <p className="stats-value" aria-hidden="true">
              <span className="stats-number">{shown[index] ?? stat.value}</span>
            </p>
            <p className="stats-label" aria-hidden="true">
              {stat.label}
            </p>
          </li>
        ))}
      </ul>
      <p className="stats-domains">
        Fintech · Wealth management · Health-tech · Wellness · Recruitment ·
        Enterprise data · Digital art · Community
      </p>
    </section>
  );
}
