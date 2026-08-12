"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function enableThemeTransition() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const root = document.documentElement;
  root.classList.add("theme-transition");
  window.setTimeout(() => {
    root.classList.remove("theme-transition");
  }, 150);
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      aria-label={mounted ? label : "Toggle color theme"}
      aria-pressed={mounted ? isDark : undefined}
      onClick={() => {
        if (!mounted) return;
        enableThemeTransition();
        setTheme(isDark ? "light" : "dark");
      }}
      className="relative inline-flex h-10 w-10 items-center justify-center text-text"
    >
      <span aria-hidden="true" className="relative block h-[15px] w-[15px]">
        {mounted ? isDark ? <SunGlyph /> : <MoonGlyph /> : <MoonGlyph />}
      </span>
    </button>
  );
}

function MoonGlyph() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.6 9.1A5.6 5.6 0 0 1 5.9 2.4 5.7 5.7 0 1 0 12.6 9.1Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunGlyph() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7.5" cy="7.5" r="2.75" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M7.5 1.5v1.4M7.5 12.1v1.4M1.5 7.5h1.4M12.1 7.5h1.4M3.05 3.05l.99.99M10.96 10.96l.99.99M11.95 3.05l-.99.99M4.04 10.96l-.99.99"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}
