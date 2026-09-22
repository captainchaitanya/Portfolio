import type { Project } from "@/content/projects";

export type HomeLink =
  | {
      label: string;
      href: string;
      external?: boolean;
      download?: string;
      emphasis: "accent" | "muted";
    }
  | {
      label: string;
      placeholder: true;
    };

export type HomeProject = {
  slug: string;
  lead?: boolean;
  eyebrow?: string;
  caption: string;
  facts: { term: string; value: string }[];
  links: HomeLink[];
  imageKey: "vibeshelfHome" | "upiDashboard";
};

export const homeProjects: HomeProject[] = [
  {
    slug: "vibeshelf",
    lead: true,
    eyebrow: "Lead project",
    imageKey: "vibeshelfHome",
    caption:
      "One entry field instead of a genre tree — the whole product argument, on the first screen.",
    facts: [
      { term: "Role", value: "Product — framing, scope, design" },
      { term: "When", value: "Jun 2026, one weekend" },
      { term: "Built for", value: "Mind the Product hackathon" },
      { term: "Stack", value: "Llama 3.3-70B · Groq" },
    ],
    links: [
      {
        label: "Read the case study",
        href: "/work/vibeshelf",
        emphasis: "accent",
      },
      {
        label: "Live demo",
        href: "https://vibe-shelf.netlify.app/",
        external: true,
        emphasis: "muted",
      },
      {
        label: "Walkthrough",
        href: "https://www.youtube.com/watch?v=SkdTvkQf1ZI",
        external: true,
        emphasis: "muted",
      },
      {
        label: "GitHub",
        href: "https://github.com/captainchaitanya/our-vibeshelf",
        external: true,
        emphasis: "muted",
      },
      {
        label: "Devpost",
        href: "https://devpost.com/software/vibeshelf",
        external: true,
        emphasis: "muted",
      },
    ],
  },
  {
    slug: "upi-fraud-analytics",
    imageKey: "upiDashboard",
    caption:
      "Both signals are on the page with the rows that triggered them. Six transactions in ten minutes is the velocity threshold — a number in a WHERE clause, which is the whole reason an analyst can retune it without a retrain.",
    facts: [
      { term: "Role", value: "Solo — pipeline, scoring, dashboard" },
      { term: "When", value: "Jul 2026" },
      { term: "Built for", value: "Fraud / risk analysts" },
      { term: "Stack", value: "PostgreSQL · Power BI" },
    ],
    links: [
      {
        label: "Read the case study",
        href: "/work/upi-fraud-analytics",
        emphasis: "accent",
      },
      {
        label: "GitHub",
        href: "https://github.com/captainchaitanya/upi-fraud-analytics-engine",
        external: true,
        emphasis: "muted",
      },
      { label: "Dashboard PDF", placeholder: true },
    ],
  },
];

export function homeProjectFor(project: Project): HomeProject | undefined {
  return homeProjects.find((item) => item.slug === project.slug);
}

export const WALKTHROUGH_HREF = "https://www.youtube.com/watch?v=SkdTvkQf1ZI";
