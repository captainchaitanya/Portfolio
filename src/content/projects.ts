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
    slug: "vibeshelf",
    title: "Vibeshelf",
    year: "2026",
    featured: true,
    outcome:
      'A recommendation engine that takes "cozy adventure like a Miyazaki film" and returns books, films and games in one place. Built with one other person over a hackathon weekend — I owned the framing, scope and design, she owned the backend.',
    meta: {
      // Joins to: "Jun 2026 · Mind the Product hackathon · Team of 2"
      role: "Jun 2026",
      team: "Mind the Product hackathon",
      timeline: "Team of 2",
    },
    summary: {
      problem:
        "People don't browse by genre, they browse by feeling — and their taste is split across three apps that don't talk to each other.",
      role: "Ideation, design, user research, deployment",
      team: "2 — Shreya Sinha owned the backend",
      timeline: "Jun 2026, one weekend",
      outcome:
        "Shipped and live. Vibe search handles messy real input; recommendation quality is capped by the size of the curated library, which is the main thing I would change.",
    },
    links: [
      {
        label: "Live demo",
        href: "https://vibe-shelf.netlify.app/",
      },
      {
        label: "Walkthrough",
        href: "https://www.youtube.com/watch?v=SkdTvkQf1ZI",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/captainchaitanya/our-vibeshelf",
      },
      {
        label: "Devpost",
        href: "https://devpost.com/software/vibeshelf",
      },
    ],
    sections: [
      {
        heading: "Context",
        paragraphs: [
          'Everyone has closed Netflix after ten minutes without picking anything. The problem is not a shortage of options, it is that the search vocabulary is wrong. Nobody wakes up wanting "Drama." They want something like Narnia but with real stakes, or something dark and melancholic in the way NieR is dark and melancholic.',
          "Vibeshelf is a recommendation engine built around that. You describe a mood in plain language and get ranked results across books, films and games together, rather than three separate apps that each pretend your taste stops at their category boundary.",
          "It was built over a weekend at Mind the Product's World Product Day hackathon, by two of us. I owned the framing, scope and design; my teammate owned the backend and the server logic. It is live and it works, but it has no real users, so nothing below is validated by anything except our own testing.",
        ],
      },
      {
        heading: "How I found the real problem",
        paragraphs: [
          "My first instinct was that recommendation algorithms are bad. That framing is wrong, and it leads somewhere useless — it points you at building a better ranking model, which is not a thing two people can do in a weekend and not actually where the failure is.",
          "The failure is upstream, in the input. These systems ask you to describe what you want using their vocabulary — genre tags, categories, \"because you watched\" — and you do not think in that vocabulary. You think in references and feelings. The gap is a translation problem, not a ranking problem.",
          "That reframing is what made the project tractable. Translating messy human phrasing into structured tags is exactly what a language model is good at, and it meant the hard part became prompt design rather than model training.",
          "The second thing I decided early was that this had to work across books, films and games at once. Every existing product is siloed by category, but taste is not — someone who wants melancholic and atmospheric wants it in a novel and a game equally. Crossing the silos was the actual product idea; the vibe search was the mechanism.",
        ],
      },
      {
        heading: "What I did",
        paragraphs: [
          "A vibe description goes to Llama 3.3-70B, served through Groq's free tier, which extracts structured tags. Those tags get scored against a curated library of 547 titles using Jaccard similarity, and results render as an interactive constellation — closer to the centre means a stronger match. Because a fixed library would otherwise cap what you can be shown, the system also generates fresh picks live, so a search never comes back thin.",
          "Rating a result with a thumbs up or down adjusts the weighting on its tags, so later searches re-rank in your direction. It is a feedback-weighted re-ranker rather than anything trained, and I want to be accurate about that — it is a simple mechanism, and the interesting part was tuning how hard a single rating should push. Too aggressive and one bad rating poisons everything after it; too gentle and rating things feels pointless.",
          "Around that sits the part that makes it feel like a product rather than a search box: saved shelves, custom named lists, a radar chart of your taste profile, and a light social layer where you can look at other people's shelves.",
        ],
      },
      {
        heading: "The tradeoff I made",
        paragraphs: [
          "The obvious way to build a recommendation engine is to plug into a real catalog API and get hundreds of thousands of titles. We hand-curated 547 instead.",
          'That was a deliberate call and it cost real coverage. A catalog API would have meant spending the weekend on ingestion, normalisation and mapping tags across three different data models with three different schemas — and at the end of it, the vibe matching, which is the part that had to work for the product to mean anything, would have been untested. A small curated library let me tune the tag vocabulary by hand and see immediately whether "cozy adventure like a Miyazaki film" returned something sensible.',
          "The consequence is that recommendation quality is capped. Ask for something outside the curated set and you fall through to live AI generation, which is a weaker experience — no scoring, no constellation position, less confidence. That fallback is doing more work than I would like, and it is the first thing I would fix.",
          "I made the same call on storage. Everything is in memory, so state does not survive a restart. For a weekend demo that is fine. For anything real it is the first blocker.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "It shipped inside the weekend and it is live. The vibe matching holds up on genuinely messy input — typos, vague descriptions, franchise references someone has half-remembered — which was the thing most likely to break and the thing the whole product depended on.",
          "The clearest technical lesson was that getting structured output from a language model is a design problem rather than an intelligence problem. Llama kept wrapping its JSON in conversational text, so we had to parse defensively and treat anything outside the payload as noise. That is not a model limitation, it is what happens when you ask a chat-shaped thing for a machine-shaped answer.",
          "There was also a real deployment lesson. GitHub's secret scanning caught our Groq API key in an early commit, which was the correct outcome and an uncomfortable one. We rotated it and moved everything to environment variables.",
          "There are no usage numbers here. Two people built this in a weekend and nobody outside the hackathon has used it in anger, so anything I claimed about recommendation quality beyond our own testing would be invented.",
        ],
      },
      {
        heading: "What I'd do differently",
        paragraphs: [
          "We shipped a social layer — user search, public shelves, appreciation stamps — for a product with no users. It was the most fun thing to build and the least defensible thing to spend a weekend on. That time would have been better spent on the curated library, which is the constraint everything else runs into.",
          "I would replace the hand-curated set with a real catalog API and keep the hand-tuned tag vocabulary as the scoring layer on top, so coverage stops being the ceiling.",
          "I would test the tag translation against people other than us. We validated that the vibe search worked by trying it ourselves, which tells you it works for two people who already know what it is supposed to do.",
          "And I would move off in-memory storage before adding a single new feature. Persistence is not interesting to build and it is the thing standing between this and being usable by anyone.",
        ],
      },
    ],
  },
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
