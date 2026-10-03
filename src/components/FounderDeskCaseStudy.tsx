import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteImage } from "@/components/SiteImage";
import { VideoFacade } from "@/components/VideoFacade";
import { captions, images } from "@/content/media";
import type { Project } from "@/content/projects";
import { site } from "@/content/site";

type FounderDeskCaseStudyProps = {
  project: Project;
  nextProject?: Project;
  kicker: string;
};

const pills = [
  { label: "Live demo", href: "https://founder-desk-nu.vercel.app/", accent: true },
  { label: "GitHub repo", href: "https://github.com/captainchaitanya/founder-desk" },
];

export function FounderDeskCaseStudy({ project, nextProject, kicker }: FounderDeskCaseStudyProps) {
  return (
    <div className="min-h-full">
      <header className="frame case-header">
        <nav aria-label="Breadcrumb">
          <Link href="/" className="back-link">
            ← Back
            <span className="sr-only"> to {site.name} home</span>
          </Link>
        </nav>
        <p className="case-kicker">{kicker}</p>
      </header>

      <main id="main">
        <article className="frame">
          <div className="case-title-block">
            <p className="eyebrow">Concept project · October 2026</p>
            <h1>{project.title}</h1>
            <p className="standfirst">
              A compliance desk for founders who run a Delaware company from
              India, usually with an Indian subsidiary underneath it. It answers
              one question: what do Delaware, the IRS and India expect from me
              next, and how sure can I be about that date? I researched the
              rules, designed the product, and built it.
            </p>
          </div>

          <dl className="meta-strip">
            <div>
              <dt>My role</dt>
              <dd>{project.summary.role}</dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>{project.summary.team}</dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>{project.summary.timeline}</dd>
            </div>
            <div>
              <dt>Built for</dt>
              <dd>Founders running a US company from India</dd>
            </div>
          </dl>

          <div className="link-pills">
            {pills.map((pill) => (
              <a
                key={pill.href}
                href={pill.href}
                className={pill.accent ? "pill-accent" : undefined}
                target="_blank"
                rel="noopener noreferrer"
              >
                {pill.label} ↗
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </div>
          <p className="stack-line">Next.js · TypeScript · Tailwind · Gemini · Vitest · Vercel</p>

          <div className="case-hero">
            <SiteImage image={images.founderDeskDashboard} />
            <p className="caption">{captions.founderDeskHero}</p>
          </div>

          <section className="case-section" aria-labelledby="problem-heading">
            <div className="case-heading">
              <h2 id="problem-heading">The problem</h2>
            </div>
            <div className="grid-12">
              <div className="span-7 body-copy">
                <p>
                  An Indian founder with a Delaware C-corp and an Indian
                  subsidiary answers to at least five authorities: Delaware, the
                  IRS, India&apos;s Ministry of Corporate Affairs, the income tax
                  department and the RBI. Each has its own calendar, and most
                  founders keep track of it in a spreadsheet, a CA&apos;s WhatsApp
                  messages, and memory.
                </p>
                <p>
                  The most expensive version of this is common. Delaware&apos;s
                  default franchise tax notice is calculated with the Authorized
                  Shares method, which can produce a bill in the tens of
                  thousands of dollars for a startup with ten million authorized
                  shares. The alternative Assumed Par Value Capital method, which
                  Delaware allows, often brings the same company down to the $400
                  minimum. Many founders don&apos;t know the second method exists.
                </p>
                <p>
                  Founder Desk is three tools sharing one company profile: a
                  deadline calendar, a franchise tax checker, and an inbox that
                  reads compliance notices. It&apos;s live and it works, but so far
                  I&apos;m the only person who has used it, so nothing below is
                  validated by real founders yet.
                </p>
              </div>
              <aside className="span-4 bet-card">
                <h3>The bet</h3>
                <p>
                  In compliance, trust beats coverage. A calendar with 17 rules
                  that tells you exactly how sure it is about each date is more
                  useful than one with 200 rules that presents guesses as facts.
                  So every rule carries its source, a status and the date I last
                  checked it, and the AI never writes anything without a person
                  confirming it first.
                </p>
              </aside>
            </div>
          </section>

          <section className="case-section" aria-labelledby="section-01">
            <div className="case-heading">
              <span className="case-num" aria-hidden="true">
                01
              </span>
              <h2 id="section-01">A calendar that admits what it doesn&apos;t know</h2>
            </div>
            <div className="body-copy">
              <p>
                Each deadline is a rule in a config file: who it applies to, how
                its date is calculated (a fixed date, days after the financial
                year end, monthly, quarterly, or days after another deadline),
                what happens if it&apos;s missed, and its sources. A pure function
                turns the company profile and today&apos;s date into the next
                twelve months of dated deadlines, so a founder without an Indian
                subsidiary never sees GST or MCA filings.
              </p>
              <p>
                Before launch I checked every rule against official sources, and
                the check changed the product. DIR-3 KYC for directors had moved
                from an annual filing to once every three years in March 2026.
                The ODI annual performance report was due on 31 December, not 30
                June as my first draft said. And an Indian subsidiary that trades
                with its US parent usually needs a transfer pricing report, which
                moves its income tax return from 31 October to 30 November. Three
                of seventeen rules were wrong or outdated in a draft that looked
                finished.
              </p>
              <p>
                That&apos;s why there are three badges instead of two. The US rules
                (Delaware, Form 1120, Form 5472, 1099-NEC) are Verified against
                the Delaware Division of Corporations and IRS pages. Most India
                rules are Reviewed or Unverified, and the app says so.
              </p>
            </div>
            <div className="mt-8">
              <SiteImage image={images.founderDeskCalendar} />
              <p className="caption">{captions.founderDesk01}</p>
            </div>
          </section>

          <section className="case-section" aria-labelledby="section-02">
            <div className="case-heading">
              <span className="case-num" aria-hidden="true">
                02
              </span>
              <h2 id="section-02">Dates are harder than they look</h2>
            </div>
            <div className="body-copy">
              <p>Most of the subtle bugs in a compliance calendar are about dates, not rules.</p>
              <p>
                Timezones. Deadlines are stored as calendar days, never as
                timestamps. A founder in India at 1am and a Delaware deadline
                that is still &quot;yesterday&quot; in New York must never
                disagree by a day. The tests pin instants near midnight in IST
                and US Pacific time.
              </p>
              <p>
                Weekends. My first version moved every weekend deadline to the
                next business day. That&apos;s right for the IRS, which says so
                in its instructions, and wrong as a blanket rule. For most Indian
                filings there is no general rule like it, and for Delaware I
                couldn&apos;t confirm one. Showing a founder a later date than
                the real one is the worst mistake this product can make, so each
                rule now has its own convention: next business day, none, or
                unknown. The legal date is always the one shown and sorted on.
                An &quot;effective date&quot; appears only as a secondary line
                where the rule allows it.
              </p>
              <p>
                Fiscal years. Form 1120 is due on the 15th day of the fourth
                month after the tax year ends, except for June 30 year ends,
                which are due a month earlier. It&apos;s one line in the IRS
                instructions, and a test in the code.
              </p>
            </div>
          </section>

          <section className="case-section" aria-labelledby="section-03">
            <div className="case-heading">
              <span className="case-num" aria-hidden="true">
                03
              </span>
              <h2 id="section-03">An AI inbox that never acts on its own</h2>
            </div>
            <div className="body-copy">
              <p>
                Founders get notices as PDFs, emails and letters. The inbox takes
                pasted text and returns the document type, issuer, a one-line
                summary, the key fields, a deadline and the required action.
                Every field comes with a short quote from the source text and a
                confidence level.
              </p>
              <p>
                Nothing is saved until the founder reviews it. Low-confidence
                fields are highlighted, every value is editable, and the
                deadline goes to the calendar only when they click to add it.
                When a notice matches a built-in rule — say, the real AOC-4 date
                for their own company — the app offers to update that deadline
                instead of creating a duplicate, and the update can be reverted.
              </p>
              <p>
                The model sits behind one small interface, so switching between
                Gemini, Claude or a mock provider is a single setting. The four
                sample documents never call the live model; they load saved
                results so a visitor can try the full flow at no cost.
              </p>
            </div>
            <div className="mt-8">
              <SiteImage image={images.founderDeskSettings} />
              <p className="caption">{captions.founderDesk03}</p>
            </div>
          </section>

          <section className="case-section" aria-labelledby="broke-heading">
            <div className="case-heading">
              <h2 id="broke-heading">What broke</h2>
            </div>
            <div className="broke-grid">
              <div className="broke-card">
                <h3>The model I picked didn&apos;t exist for my key</h3>
                <p>
                  I configured a model name that worked in documentation but
                  returned a 404 for a new API key. The app showed &quot;the
                  model could not read that&quot; and nothing else. I added
                  development-only logging of the stage, status and message
                  (never the key or the document text) and a one-line command
                  that tests the provider directly. That found the cause in a
                  minute.
                </p>
              </div>
              <div className="broke-card">
                <h3>The provider went down mid-test</h3>
                <p>
                  The next day the model returned 503: high demand. Live
                  extraction now retries twice with backoff, falls back once to
                  a second model, and otherwise tells the founder the AI is
                  busy, keeps their text, and points to the samples. Quota
                  errors and bad configuration get their own messages and never
                  retry.
                </p>
              </div>
              <div className="broke-card">
                <h3>Twenty requests a day</h3>
                <p>
                  The free tier allows about twenty requests a day. A few
                  recruiters clicking a sample could have used up the day&apos;s
                  quota. That&apos;s why samples never hit the model, live
                  calls are capped below the quota, and each visitor is
                  rate-limited.
                </p>
              </div>
              <div className="broke-card">
                <h3>The demo badge lied</h3>
                <p>
                  On the deployed site, a &quot;Demo mode&quot; badge flashed on
                  every visit before the app learned which AI it was using. That
                  made a working product look broken. The badge now waits until
                  the server says demo mode is actually on.
                </p>
              </div>
              <div className="broke-card">
                <h3>The India rules are still mine to finish</h3>
                <p>
                  Most India rules are Reviewed, not Verified, and some are
                  still Unverified. Holidays in India aren&apos;t modelled at
                  all. The app is honest about this, but it&apos;s the biggest
                  gap between a demo and something a founder could rely on.
                </p>
              </div>
            </div>
          </section>

          <section className="case-section" aria-labelledby="rest-heading">
            <div className="case-heading">
              <h2 id="rest-heading">The rest of the build</h2>
            </div>
            <div className="body-copy">
              <p>
                The franchise tax checker calculates both Delaware methods with
                exact fractions rather than floating-point numbers, because par
                values like $0.00001 break ordinary arithmetic. When the default
                method already gives the lower amount, the checker says the
                founder&apos;s bill is already the best option instead of
                inventing a saving.
              </p>
              <p>
                The calendar exports .ics files as all-day events so dates land
                correctly in Google Calendar and Outlook. The project has 112
                automated tests covering the tax engine, the date logic, the
                rules, the AI response parsing and the quota handling. I built
                it in Cursor, using Claude to plan phases and review decisions,
                and committed phase by phase so the history shows how it came
                together.
              </p>
            </div>
            <div className="scope-cut">
              <h4>What I cut to ship in a few days</h4>
              <dl>
                <div className="scope-cut-row">
                  <dt>Accounts and sync</dt>
                  <dd>
                    Everything lives in the browser with export and import.
                    Logging in adds nothing until the deadlines themselves are
                    trustworthy.
                  </dd>
                </div>
                <div className="scope-cut-row">
                  <dt>PDF upload</dt>
                  <dd>
                    Founders will want to drop in the PDF. Paste-the-text is
                    enough to prove the extraction and review flow.
                  </dd>
                </div>
                <div className="scope-cut-row">
                  <dt>More countries</dt>
                  <dd>
                    US and India only. Each new jurisdiction means another set
                    of rules to verify, and an unverified calendar is worse than
                    a short one.
                  </dd>
                </div>
              </dl>
            </div>
          </section>

          <section className="case-section" aria-labelledby="running-heading">
            <div className="case-heading">
              <h2 id="running-heading">See it running</h2>
            </div>
            <VideoFacade
              href="https://founder-desk-nu.vercel.app/"
              title="Live demo"
              description="Set up a fictional company, open the calendar, and paste a notice into the inbox. About five minutes on your phone or laptop."
              cta="Open the app ↗"
            />
          </section>

          <section className="case-section" aria-labelledby="change-heading">
            <div className="case-heading">
              <h2 id="change-heading">What I&apos;d change, and what&apos;s next</h2>
            </div>
            <div className="change-grid">
              <div className="body-copy">
                <p>
                  I&apos;d sit with five founders who run India–US structures
                  and watch them use it with their real notices. My guess is the
                  inbox matters more than the calendar, because notices are
                  where deadlines actually arrive.
                </p>
                <p>
                  I&apos;d finish verifying the India rules against the MCA,
                  income tax and RBI portals, and add India&apos;s holiday
                  conventions where they really move dates.
                </p>
              </div>
              <div className="body-copy">
                <p>
                  And I&apos;d add PDF upload and reminders, because a calendar
                  you have to remember to open doesn&apos;t solve forgetting.
                </p>
                <p>
                  The most useful thing I did was the verification pass. A
                  product that looked finished was wrong in three places, and
                  the fix wasn&apos;t more features. It was the badges.
                </p>
              </div>
            </div>
          </section>

          {nextProject ? (
            <nav className="next-project" aria-label="Next project">
              <p className="section-label">Next project</p>
              <Link href={`/work/${nextProject.slug}`}>
                {nextProject.title}
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </nav>
          ) : null}

          <SiteFooter />
        </article>
      </main>
    </div>
  );
}
