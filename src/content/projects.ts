export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Leading metric shown in its own span. Omit when the hook is not a number. */
  metricPrefix?: string;
  outcome: string;
  year: string;
  /** When false, hidden from the home Selected work list (still in the array for routing). */
  featured?: boolean;
  meta: {
    role: string;
    team: string;
    timeline: string;
    scope?: string;
  };
  summary: {
    problem: string;
    role: string;
    team: string;
    timeline: string;
    outcome: string;
  };
  links?: ProjectLink[];
  metrics?: { value: number; suffix?: string; prefix?: string; label: string }[];
  sections: { heading: string; paragraphs: string[] }[];
};

export function formatProjectMeta(meta: Project["meta"]): string {
  return [meta.role, meta.team, meta.timeline, meta.scope].filter(Boolean).join(" · ");
}

export const projects: Project[] = [
  {
    slug: "upi-fraud-analytics",
    title: "UPI fraud detection analytics",
    year: "2026",
    featured: true,
    metricPrefix: "590K",
    outcome:
      "Two auditable fraud signals across 590K UPI transactions. I built it in SQL rather than training a classifier, so a risk analyst can retune a threshold in an afternoon instead of waiting on a retrain. That trades away some recall to keep the system explainable to the people who actually operate it.",
    meta: {
      role: "Solo — data pipeline, scoring logic, dashboard",
      team: "Solo project",
      timeline: "Jul 2026",
      scope: "PostgreSQL · Power BI · public GitHub repo",
    },
    summary: {
      problem:
        "Fraud teams need signals they can explain, audit and tune. A black-box model can't be defended to compliance or recalibrated by a risk analyst.",
      role: "Solo — end-to-end pipeline and dashboard",
      team: "Solo",
      timeline: "Jul 2026",
      outcome:
        "Rolling 30-day risk scoring and 10-minute velocity detection built on SQL window functions. Surfaced a ~2x intraday swing in fraud volume, and flagged the risk-tier thresholds as miscalibrated rather than reporting them as findings.",
    },
    links: [
      {
        label: "GitHub repo",
        href: "https://github.com/captainchaitanya/upi-fraud-analytics-engine",
      },
    ],
    metrics: [
      { value: 590000, suffix: "", label: "transactions analysed" },
    ],
    sections: [
      {
        heading: "Context",
        paragraphs: [
          "This is a fraud analytics pipeline built end-to-end — from raw transaction data to a decision-ready dashboard — modeled on how a BFSI or fintech fraud analyst would approach the problem. The dataset is the IEEE-CIS Fraud Detection set from Kaggle (~590K transactions). Tools: PostgreSQL, SQL window functions, and Power BI.",
          "Rather than reaching for a black-box ML model, I used SQL window functions to build two independent, explainable fraud-detection signals: a rolling 30-day risk-scoring engine and a 10-minute transaction-velocity anomaly detector.",
        ],
      },
      {
        heading: "How I found the real problem",
        paragraphs: [
          "Fraud teams need signals they can explain, audit, and tune. A risk score from a transparent rule — for example, three or more fraud events in 30 days, or six transactions in ten minutes — is something a compliance team can defend and a risk analyst can recalibrate without retraining a model.",
          "Category and channel breakdowns had to be cross-checked against base-rate effects before drawing conclusions. Gmail.com's dominance in the email-domain chart, for instance, likely reflects its overall market share rather than being inherently riskier — a reminder that concentration is not the same as signal.",
        ],
      },
      {
        heading: "What I did",
        paragraphs: [
          "I built the scoring logic entirely in PostgreSQL using LAG() and rolling SUM/COUNT window functions over time-based frames — the same techniques used in production fraud and risk systems, applied here at portfolio scale.",
          "The dashboard surfaces time-of-day risk (fraud volume dips through mid-morning and climbs to an evening peak — roughly a 2× swing across the day), a Critical/High/Normal risk-tier split, velocity anomalies (cards making six or more transactions in a ten-minute window), and breakdowns by device, email domain, and anonymised product category.",
        ],
      },
      {
        heading: "The tradeoff I made",
        paragraphs: [
          "Each visual is built from a separate, pre-aggregated SQL export (fraud by hour, by device, by risk tier, and so on) rather than one unified transaction-level fact table. That was the right tradeoff for a focused, fast-to-build reporting layer — but it means the dashboard's cross-filtering is intentionally scoped, not universal. Clicking a bar in one chart will not reshape every other visual, because the underlying tables are not related to each other in the data model.",
          "A natural next iteration would be rebuilding on a single shared fact table or a proper star schema to unlock full cross-filtering — the classic tradeoff between shipping a clear working V1 and building the fully generalised version.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "Two auditable signals shipped: rolling 30-day risk scoring and 10-minute velocity detection. The time-of-day view makes the ~2× intraday swing in fraud volume concrete enough to inform staffing or step-up authentication windows.",
          "The risk-tier split came out unusually top-heavy (about 51.75% Critical). I flagged that as a candidate for threshold recalibration rather than treating it as ground truth — the finding was about the scoring cutoffs, not about the population.",
        ],
      },
      {
        heading: "What I'd do differently",
        paragraphs: [
          "Rebuild on a unified fact table so every visual can cross-filter cleanly. Validate the risk-tier thresholds against actual fraud outcomes rather than the rule-based cutoffs used here. Layer in a simple ML baseline, such as logistic regression, to benchmark against the rule-based scoring approach.",
          "Full SQL scripts, the Power BI file, and a findings summary are in the public GitHub repository.",
        ],
      },
    ],
  },
  {
    slug: "sparerocket",
    title: "SpareRocket",
    year: "2026",
    featured: true,
    outcome:
      "A micro-investing app for Indian students that never reads your SMS or bank data. That constraint killed automatic round-ups — the mechanic the entire category is built on — so I had to find another moment where saving becomes the obvious next tap.",
    meta: {
      // Joins to: "Jan 2026 · Concept + working prototype · Solo"
      role: "Jan 2026",
      team: "Concept + working prototype",
      timeline: "Solo",
    },
    summary: {
      problem:
        "Students with ₹500 to ₹2,000 a month of discretionary money have no way to invest ₹20 of it. SIPs start around ₹500, and broking apps assume you already know what a liquid fund is.",
      role: "Sole designer and builder. Framing, scope, mechanics, and the working prototype.",
      team: "Solo",
      timeline: "Jan 2026",
      outcome: "No users and no live transactions. A concept with a working prototype, so nothing here is validated.",
    },
    links: [
      {
        label: "View prototype",
        href: "https://v0-sparerocket.vercel.app/",
      },
    ],
    sections: [
      {
        heading: "Context",
        paragraphs: [
          "A student with ₹500 to ₹2,000 of discretionary money a month has no reasonable way to invest ₹20 of it. Mutual fund SIPs start around ₹500. Broking apps assume you already know what a liquid fund is. So the money that could have started a habit goes on food delivery instead, and the student starts investing at 24 with a salary, having lost six years of compounding.",
          "SpareRocket is my attempt at the product that catches that money. Digital gold and one liquid fund, bought in ₹20 increments through UPI, with no read access to anything on the phone.",
          "I should be clear about status up front. This is a concept with a working prototype I built myself. It has no users and no live transactions. Where something below is an assumption rather than a finding, I have said so.",
        ],
      },
      {
        heading: "How I found the real problem",
        paragraphs: [
          "My first framing was that students cannot access investing. That framing is wrong, and it produces a worse product — it points you straight at lowering minimums, which is the least interesting lever available.",
          "Groww and Zerodha are excellent apps for someone who has already decided to invest. A 19-year-old has not decided anything. She has ₹200 sitting in her UPI app and a vague sense that she should be doing something sensible with it. The gap is not access. The gap is that there is no moment in her day where investing is the easy choice.",
          "Once I had that framing, the design question stopped being how do we lower the minimum and became where in her day does saving become the obvious next tap.",
          "I designed for one person specifically: a second-year engineering student in a Tier 1 or Tier 2 city, on UPI daily, receiving ₹1,000 to ₹3,000 a month from home plus occasional internship money. No demat account. Has heard of SIPs from a relative. She is on Android, and her better-off friends are on iPhones.",
          "That last detail is not decoration. It killed a feature.",
        ],
      },
      {
        heading: "What I did",
        paragraphs: [
          "Three mechanics, each aimed at a different moment.",
          "Quick invest puts three fixed amounts on the home screen — ₹20, ₹50, ₹100. No amount entry, no fund selection on first use. Every additional decision is a place to drop out, so the first investment is reduced to a single tap.",
          "The impulse diversion button targets the moment a user is about to spend ₹200 on pizza and half-regrets it. One tap moves a chosen amount into savings instead, and the app shows her what she avoided rather than what she saved. This is the closest I could get to automatic round-ups: it hijacks a real emotional moment rather than a transaction feed.",
          "Streaks and goals carry the motivation. A ₹20 investment is financially trivial — the return cannot possibly motivate anyone, so the motivation has to come from the consecutive-days counter and a named goal like a Goa trip. The honest read here is that streaks are a well-worn mechanic and can turn adversarial. A streak that punishes you for missing a day is a good way to get deleted. I would test a forgiving streak against a strict one before shipping either.",
          "On scope, I kept the menu deliberately short: digital gold and one liquid fund, and nothing else. No equity, no ETFs, no fund selection. Every additional instrument is a decision the user has to make, and this user has not yet decided to invest at all. Gold is culturally legible in India in a way a debt fund is not — she has watched her family buy it. The liquid fund exists for the one who asks whether there is something safer. Spend categorisation, budgeting, social features, credit scoring and the subscription tier all stayed out of v1.",
        ],
      },
      {
        heading: "The tradeoff I made",
        paragraphs: [
          "The obvious way to build this is automatic round-ups: read the user's transactions, round each one up to the nearest ₹10, invest the difference. It is what the category does, and it works because the user never has to decide anything. To do it in India, you read SMS.",
          "I chose not to, for three reasons, in the order they actually mattered.",
          "It does not work on iPhone. iOS gives no equivalent SMS read access, so the core mechanic silently degrades for part of the market. A feature that only works on one platform is not a core mechanic, it is an Android feature.",
          "It is a disproportionate ask. SMS read permission hands an app every OTP, bank alert and personal message on the phone, in exchange for rounding up chai purchases. I did not want the central mechanic of a financial product to require that trade.",
          "It is fragile in the way that hurts most. Bank SMS formats change without notice, and when parsing breaks it breaks silently — the user believes she is saving and she is not. Trust in a financial product does not survive that.",
          "So SpareRocket runs on UPI Intent. The app hands off to the user's existing UPI app for each transaction and never sees anything it was not explicitly given. Zero read permissions, identical behaviour on iOS and Android.",
          "I want to be direct about what this cost. Automatic round-ups convert passive users, and without them every rupee invested requires a deliberate tap. My activation numbers will be structurally worse than a competitor who reads SMS. I did not find a way to fully recover that loss. The impulse button is a partial substitute, not an equivalent one.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "There are no outcome numbers, because there are no users. What exists is a working prototype and a measurement plan, so the honest version of this section is what I would watch and what would have to be true.",
          "The north star I would use is weekly investing users — people who made at least one investment in the last seven days. Rupees invested flatters you the moment one user deposits ₹5,000; this product only works if many people invest small amounts often. Underneath that, activation is the share of users completing a first investment within 24 hours of install, which measures the cost of the no-permissions choice directly.",
          "I would track what share of all investments originate from the impulse button to know whether my round-up substitute works or is decoration.",
          "The metric I would watch most carefully is a counter-metric: withdrawal rate within 30 days of first investment. I am building nudges aimed at students, and nudges that work too well on someone living on ₹1,500 a month are not a success. If withdrawals spike, the mechanic is extracting money rather than building a habit, and I would pull it.",
          "Four things would need to be true before any of this is real. Digital gold sits outside SEBI and RBI regulation and SEBI has previously restricted registered intermediaries from dealing in it, so the entity structure question is the risk most likely to be fatal. Distributing the liquid fund requires AMFI registration and clearing the fund's own minimums. The unit economics at ₹20 are unproven — a 1.5 to 2.5 percent spread on a ₹20 purchase is 30 to 50 paise, and payment and custody costs per transaction could exceed that. And I do not know how much the UPI Intent handoff actually costs me at activation, which is the number that determines whether the privacy-first choice is defensible or merely principled.",
        ],
      },
      {
        heading: "What I'd do differently",
        paragraphs: [
          "I designed the mechanics before speaking to a single user. The impulse button is a good idea derived from introspection, which is the least reliable research method available. If I started again I would run fifteen conversations before opening Figma.",
          "I modelled retention improvements without a baseline. Any projection about how this performs against existing apps was an assumption dressed as a number, and I should have framed it as a hypothesis to test rather than a finding.",
          "I treated the privacy constraint as purely a virtue for too long. It is a real differentiator and I would make the same call again, but it carries an activation cost I underweighted for months because the principle felt clean. The honest version is that I traded measurable conversion for cross-platform consistency and user trust, and I would want data to tell me whether that trade was worth it.",
        ],
      },
    ],
  },

  // Remote Resilience Hub (NextLeap / SafetyWing-adjacent companion tool).
  // Uncomment and flesh out when ready to feature on the home page.
  // {
  //   slug: "remote-resilience-hub",
  //   title: "Remote Resilience Hub",
  //   year: "2026",
  //   featured: true,
  //   outcome: "",
  //   meta: { role: "", team: "", timeline: "", scope: "" },
  //   summary: { problem: "", role: "", team: "", timeline: "", outcome: "" },
  //   sections: [],
  // },
];

/** Projects shown on the home Selected work list. */
export const featuredProjects: Project[] = projects.filter(
  (project) => project.featured === true,
);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string): Project | undefined {
  const list = featuredProjects.length > 0 ? featuredProjects : projects;
  const index = list.findIndex((project) => project.slug === slug);
  if (index === -1) return undefined;
  return list[(index + 1) % list.length];
}
