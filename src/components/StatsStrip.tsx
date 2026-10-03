"use client";

import { useLayoutEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  label: string;
  suffix?: string;
  motion: "enter" | "count";
};

const STATS: Stat[] = [
  { value: 4, label: "products shipped and live", motion: "enter" },
  { value: 2, label: "PM internships", motion: "enter" },
  { value: 9, label: "client projects delivered", motion: "count" },
  { value: 20, suffix: "+", label: "user interviews run", motion: "count" },
];

const COUNT_MS = 1000;
const ENTER_STAGGER_MS = 90;

function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3;
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function StatsStrip() {
  const rootRef = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState<"static" | "armed" | "playing">("static");
  const [shown, setShown] = useState<Record<number, number>>(() =>
    Object.fromEntries(STATS.map((stat) => [stat.value, stat.value])),
  );
  const [suffixIn, setSuffixIn] = useState(true);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;

    setPhase("armed");
    setShown(
      Object.fromEntries(
        STATS.map((stat) => [stat.value, stat.motion === "count" ? 0 : stat.value]),
      ),
    );
    setSuffixIn(false);

    let started = false;
    let frameId = 0;

    const play = () => {
      if (started) return;
      started = true;
      setPhase("playing");

      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / COUNT_MS);
        const eased = easeOutCubic(progress);
        setShown((current) => {
          const next = { ...current };
          for (const stat of STATS) {
            if (stat.motion === "count") {
              next[stat.value] = Math.round(eased * stat.value);
            }
          }
          return next;
        });
        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
          return;
        }
        setSuffixIn(true);
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
        {STATS.map((stat, index) => {
          const display = shown[stat.value] ?? stat.value;
          const delay = stat.motion === "enter" ? index * ENTER_STAGGER_MS : 0;
          return (
            <li
              key={stat.label}
              className={`stats-item stats-item--${stat.motion}`}
              style={{ transitionDelay: `${delay}ms` }}
            >
              <p className="sr-only">
                {stat.value}
                {stat.suffix ?? ""} {stat.label}
              </p>
              <p className="stats-value" aria-hidden="true" aria-live="off">
                <span className="stats-number">{display}</span>
                {stat.suffix ? (
                  <span className={`stats-suffix${suffixIn ? " is-in" : ""}`}>{stat.suffix}</span>
                ) : null}
              </p>
              <p className="stats-label" aria-hidden="true">
                {stat.label}
              </p>
            </li>
          );
        })}
      </ul>
      <p className="stats-domains">Fintech · Health-tech · Recruitment · B2B SaaS · Compliance</p>
    </section>
  );
}
