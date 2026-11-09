export type Role = {
  company: string;
  title: string;
  dates: string;
  lines: string[];
  url?: string;
};

export const experience: Role[] = [
  {
    company: "Noise",
    title: "Product Intern — Wearables, Product Management & Experience",
    dates: "Nov 2026 – Present",
    url: "https://www.linkedin.com/company/gonoise-com",
    lines: [
      "Traced a drop-off in the checkout flow to a forced re-login inside the in-app webview, and specced an auto-login hand-off with engineering to remove that step for every buyer. Now building 6–8 behavioural cohorts from six months of purchase and usage data across millions of active users, to target home-page and push nudges per cohort.",
    ],
  },
  {
    company: "WhatBytes",
    title: "Product Management Intern",
    dates: "Mar–May 2026",
    url: "https://www.linkedin.com/company/whatbytes/",
    lines: [
      "Ran roadmaps and delivery across 9 client projects, sitting between the developers and the clients to turn vague requests into scoped work.",
    ],
  },
  {
    company: "Pulsepeek",
    title: "Product Management Intern",
    dates: "Jan–Feb 2026",
    url: "https://www.linkedin.com/company/pulsepeek/",
    lines: [
      "Ran 20 discovery interviews and turned ambiguous health-data requirements into a prioritised PRD and logic flows. High-fidelity prototypes landed two weeks ahead of schedule; the founding team reviewed the designs directly.",
    ],
  },
  {
    company: "MUNSOC, NIT Agartala",
    title: "Founder & Lead",
    dates: "2023–2024",
    url: "https://www.munsoc.in/founding-members",
    lines: [
      "Founded NIT Agartala's MUN society and grew it to 120+ members across 11 national events. Wrote the SOPs, then rewrote them after each round of post-event feedback. It's still running.",
    ],
  },
];
