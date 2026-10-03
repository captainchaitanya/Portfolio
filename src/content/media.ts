export const BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAAD0lEQVR4AWP49u3bf///GRgYADcdBPxnXG6OAAAAAElFTkSuQmCC";

export const IMAGE_SIZES = "(max-width: 768px) 100vw, 1120px";
export const PORTRAIT_SIZES = "(max-width: 768px) 324px, 420px";

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
    width: 1050,
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
  secondTakeSummary: {
    src: "/images/second-take-summary.webp",
    alt: "Second Take on desktop: a phone showing the end of a scene (Papa ended open, 35 XP, a scorecard of 90 out of 100 and a skill breakdown), with a creator card on the left and a scene summary panel on the right showing a rising mood line, four skill bars and the two triggers the player hit.",
    width: 1917,
    height: 862,
    className: "image-second-take",
  },
  founderDeskDashboard: {
    src: "/images/founder-desk-dashboard.webp",
    alt: "Founder Desk dashboard greeting Chaitanya, with four stats (next deadline Oct 26, 2026, nothing overdue, 0 of 2 done this quarter, estimated annual cost), a Next deadlines list with Unverified, Reviewed and Verified badges, and an Action items card reading You're clear.",
    width: 1901,
    height: 871,
    className: "image-founder-desk-dashboard",
    objectPosition: "top",
  },
  founderDeskCalendar: {
    src: "/images/founder-desk-calendar.webp",
    alt: "Founder Desk calendar in list view, grouped by month, with search and jurisdiction filters (All, US-Delaware, US-Federal, India). An AOC-4 deadline on Oct 26, 2026 is tagged This month, From your document and Unverified; the ODI annual performance report on Dec 31, 2026 is tagged Reviewed.",
    width: 1901,
    height: 866,
    className: "image-founder-desk-calendar",
    objectPosition: "top",
  },
  founderDeskSettings: {
    src: "/images/founder-desk-settings.webp",
    alt: "Founder Desk settings page showing the saved company profile (first name, company, US entity, tax year end, foreign ownership, Indian subsidiary, Indian-resident founders, US contractors) with an Edit profile button and Appearance options.",
    width: 1902,
    height: 865,
    className: "image-founder-desk-settings",
    objectPosition: "top",
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
  homeSecondTake:
    "Every partner reacts for a reason. The panel beside the phone shows which of those reasons your replies hit.",
  homeFounderDesk:
    "One desk for what Delaware, the IRS and India expect next. Every date carries a badge saying how far to trust it.",
  founderDeskHero:
    "The dashboard. The badges matter more than the dates: Verified means I checked the official source, Reviewed means reliable professional sources agree, Unverified means plan for it but check first.",
  founderDesk01:
    "Grouped by month, filtered by jurisdiction, exportable to Google Calendar. The AOC-4 item came from a pasted notice, not from a built-in rule.",
  founderDesk03:
    "Everything stays on the device. No account and no server-side database, because a compliance tool that asks for your company details on day one should earn that first.",
  secondTakeHero:
    "The end of a scene. The score matters less than the panel on the right: which of Papa's triggers you hit, and in what order.",
  vibeshelfHero:
    "The home screen. Books, films and games sit at the same level because the thing being matched is the feeling, not the medium.",
  vibeshelf01:
    "Naming the model on the chip — Llama 3.3-70B via Groq — was deliberate. It sets the expectation that this is interpretation, not lookup, before anyone judges the first result set.",
  vibeshelf02:
    "192 matches from 547 curated titles. The count is high on purpose — breadth first, then the feedback signal narrows it, rather than a confident top three we could not justify.",
  vibeshelf03:
    "Giving \"not your vibe\" a row of its own is the call I would defend hardest. Epic Fantasy at 12% proves the system heard the negatives, and a profile that only lists what you love can never be visibly wrong.",
};
