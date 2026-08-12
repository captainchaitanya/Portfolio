"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type CountUpProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  label?: string;
  className?: string;
  durationMs?: number;
  /**
   * When set, drives the animation (e.g. row hover).
   * When omitted, animates once when scrolled into view.
   */
  active?: boolean;
  /**
   * When controlled and inactive: show final (readable) or zero.
   * Default `final` so metrics stay legible at rest.
   */
  inactiveDisplay?: "final" | "zero";
};

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function formatValue(value: number, progress: number): string {
  const current = easeOutCubic(progress) * value;
  const decimals = String(value).includes(".")
    ? (String(value).split(".")[1]?.length ?? 0)
    : 0;
  return decimals > 0 ? current.toFixed(decimals) : String(Math.round(current));
}

export function CountUp({
  value,
  suffix = "",
  prefix = "",
  label,
  className,
  durationMs = 900,
  active,
  inactiveDisplay = "final",
}: CountUpProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const controlled = active !== undefined;
  const shouldRun = controlled ? Boolean(active) : inView;
  const finalText = `${prefix}${formatValue(value, 1)}${suffix}`;
  const zeroText = `${prefix}${formatValue(value, 0)}${suffix}`;
  const restText =
    controlled && inactiveDisplay === "zero" ? zeroText : finalText;

  const [display, setDisplay] = useState(() =>
    prefersReducedMotion || !shouldRun ? restText : zeroText,
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplay(finalText);
      return;
    }

    if (!shouldRun) {
      setDisplay(controlled ? restText : zeroText);
      return;
    }

    let frameId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / durationMs);
      setDisplay(`${prefix}${formatValue(value, progress)}${suffix}`);
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [
    shouldRun,
    value,
    durationMs,
    prefersReducedMotion,
    prefix,
    suffix,
    finalText,
    zeroText,
    restText,
    controlled,
  ]);

  const accessible = `${finalText}${label ? ` ${label}` : ""}`;

  return (
    <span ref={ref} className={className} aria-label={accessible}>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
