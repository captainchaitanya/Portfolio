export const BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAAD0lEQVR4AWP49u3bf///GRgYADcdBPxnXG6OAAAAAElFTkSuQmCC";

export const IMAGE_SIZES = "(max-width: 768px) 100vw, 1120px";
export const PORTRAIT_SIZES = "440px";

export type SiteImageSpec = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  objectPosition?: string;
};

export const images = {
  portrait: {
    src: "/images/chaitanya-portrait.webp",
    alt: "Chaitanya Raj standing on an open terrace, trees and a glass railing to one side and a low orange building behind him.",
    width: 1280,
    height: 920,
    className: "image-portrait",
  },
  vibeshelfHome: {
    src: "/images/vibeshelf-home.webp",
    alt: "Vibeshelf home screen: the headline Your next obsession is one vibe away over three category cards — Books, Movies and TV, and Games.",
    width: 1600,
    height: 722,
    className: "image-vibeshelf-home",
    objectPosition: "top",
  },
  vibeshelfInput: {
    src: "/images/vibeshelf-vibe-input.webp",
    alt: "Vibeshelf movies page: a large free-text field labelled Describe the vibe you're after, three example prompts, a grid of 18 vibe chips, and a Find my vibe button.",
    width: 1600,
    height: 720,
    className: "image-vibeshelf-input",
    objectPosition: "top",
  },
  vibeshelfResults: {
    src: "/images/vibeshelf-results.webp",
    alt: "Vibeshelf results: 192 matches shown as cards, each with a category label, match percentage ring, title, one-line synopsis, matched vibe tags, and thumbs up or down feedback controls.",
    width: 1600,
    height: 726,
    className: "image-vibeshelf-results",
    objectPosition: "top",
  },
  vibeshelfTaste: {
    src: "/images/vibeshelf-taste-profile.webp",
    alt: "Vibeshelf taste profile: a genre affinity radar chart beside a ranked You Love list — Sci-Fi and Futuristic at 100 percent down to Political Intrigue at 33 percent — and a separate Not Your Vibe row showing Epic Fantasy at 12 percent.",
    width: 1600,
    height: 659,
    className: "image-vibeshelf-taste",
  },
  upiDashboard: {
    src: "/images/upi-dashboard.webp",
    alt: "Power BI fraud dashboard: KPI tiles reading 4.02M total transaction value, 181K fraud count over 30 days, 3.73 percent average fraud rate and 21K flagged transactions, above breakdowns by device type, email domain, amount bucket and risk tier, a fraud-by-hour line chart, and two detail tables listing high-risk fraud cases and velocity anomalies.",
    width: 1800,
    height: 980,
    className: "image-upi",
  },
  writingSmartRematch: {
    src: "/images/writing-smart-rematch.webp",
    alt: "A product brief slide headed Smart Rematch: The Invisible Switch, with a goals column and three city data cards for Delhi, Mumbai and Bangalore.",
    width: 576,
    height: 324,
    className: "image-writing",
  },
  writingPizzaVsSip: {
    src: "/images/writing-pizza-vs-sip.webp",
    alt: "Split image: a student buying a two hundred rupee pizza at a stall, beside a phone showing a twenty rupee investment confirmation.",
    width: 576,
    height: 324,
    className: "image-writing",
  },
  writingDailyDebates: {
    src: "/images/writing-daily-debates.webp",
    alt: "Four phone screens on a purple ground showing a Daily Debates feature: today's topic, a victory results screen with scores, past debates, and an AI feedback panel awarding points.",
    width: 576,
    height: 324,
    className: "image-writing",
  },
} satisfies Record<string, SiteImageSpec>;

export const captions = {
  homeVibeshelf:
    "One entry field instead of a genre tree — the whole product argument, on the first screen.",
  homeUpi:
    "Both signals are on the page with the rows that triggered them. Six transactions in ten minutes is the velocity threshold — a number in a WHERE clause, which is the whole reason an analyst can retune it without a retrain.",
  vibeshelfHero:
    "The home screen. Books, films and games sit at the same level because the thing being matched is the feeling, not the medium.",
  vibeshelf01:
    "Naming the model on the chip — Llama 3.3-70B via Groq — was deliberate. It sets the expectation that this is interpretation, not lookup, before anyone judges the first result set.",
  vibeshelf02:
    "192 matches from 547 curated titles. The count is high on purpose — breadth first, then the feedback signal narrows it, rather than a confident top three we could not justify.",
  vibeshelf03:
    "Giving \"not your vibe\" a row of its own is the call I would defend hardest. Epic Fantasy at 12% proves the system heard the negatives, and a profile that only lists what you love can never be visibly wrong.",
};
