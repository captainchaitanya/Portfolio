"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds (e.g. 0.09 for 90ms stagger steps). */
  delay?: number;
  as?: "div" | "section" | "article" | "header" | "footer" | "li" | "p" | "h1" | "h2" | "span";
  id?: string;
};

export function Reveal({ children, className, delay = 0, as = "div", id }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (prefersReducedMotion) {
    const StaticTag = as;
    return (
      <StaticTag id={id} className={className}>
        {children}
      </StaticTag>
    );
  }

  return (
    <MotionTag
      id={id}
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.25, ease: "easeOut", delay }}
    >
      {children}
    </MotionTag>
  );
}
