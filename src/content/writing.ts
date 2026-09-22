export type Writing = {
  title: string;
  href: string;
  external?: boolean;
  image:
    | "writingSmartRematch"
    | "writingPizzaVsSip"
    | "writingDailyDebates";
};

export const writing: Writing[] = [
  {
    title:
      "Smart Rematch: how invisible switching can fix Uber's cancellation problem in India",
    href: "https://medium.com/@12rajchaitanya/smart-rematch-how-invisible-switching-can-fix-ubers-cancellation-problem-in-india-3a6edd25f95b",
    external: true,
    image: "writingSmartRematch",
  },
  {
    title: "The pizza vs SIP dilemma: why India needs microinvesting",
    href: "https://medium.com/@12rajchaitanya/the-pizza-vs-sip-dilemma-why-india-needs-microinvesting-97bb1292c5f0",
    external: true,
    image: "writingPizzaVsSip",
  },
  {
    title: "Daily Debates (Stimuler): turning speaking practice into a habit",
    href: "https://medium.com/@12rajchaitanya/daily-debates-stimuler-turning-speaking-practice-into-a-habit-d60366c97d74",
    external: true,
    image: "writingDailyDebates",
  },
];
