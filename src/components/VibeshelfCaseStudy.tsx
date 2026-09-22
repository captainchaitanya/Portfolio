import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteImage } from "@/components/SiteImage";
import { VideoFacade } from "@/components/VideoFacade";
import { captions, images } from "@/content/media";
import type { Project } from "@/content/projects";
import { site } from "@/content/site";

type VibeshelfCaseStudyProps = {
  project: Project;
  nextProject?: Project;
};

const pills = [
  { label: "Live demo", href: "https://vibe-shelf.netlify.app/", accent: true },
  { label: "Walkthrough", href: "https://www.youtube.com/watch?v=SkdTvkQf1ZI" },
  { label: "GitHub repo", href: "https://github.com/captainchaitanya/our-vibeshelf" },
  { label: "Devpost submission", href: "https://devpost.com/software/vibeshelf" },
];

export function VibeshelfCaseStudy({ project, nextProject }: VibeshelfCaseStudyProps) {
  return (
    <div className="min-h-full">
      <header className="frame case-header">
        <nav aria-label="Breadcrumb">
          <Link href="/" className="back-link">
            ← Back
            <span className="sr-only"> to {site.name} home</span>
          </Link>
        </nav>
        <p className="case-kicker">Case study 01</p>
      </header>

      <main id="main">
        <article className="frame">
          <div className="case-title-block">
            <p className="eyebrow">Mind the Product · June 2026</p>
            <h1>{project.title}</h1>
            <p className="standfirst">{project.outcome}</p>
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
              <dd>Mind the Product World Product Day hackathon</dd>
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
          <p className="stack-line">Llama 3.3-70B · Groq · Jaccard similarity · 547 titles, in memory</p>

          <div className="case-hero">
            <SiteImage image={images.vibeshelfHome} />
            <p className="caption">{captions.vibeshelfHero}</p>
          </div>

          <section className="case-section" aria-labelledby="problem-heading">
            <div className="case-heading">
              <h2 id="problem-heading">The problem</h2>
            </div>
            <div className="grid-12">
              <div className="span-7 body-copy">
                <p>
                  Everyone has closed Netflix after ten minutes without picking
                  anything. The problem is not a shortage of options, it is that
                  the search vocabulary is wrong. Nobody wakes up wanting
                  &quot;Drama.&quot; They want something like Narnia but with real
                  stakes, or something dark and melancholic in the way NieR is
                  dark and melancholic.
                </p>
                <p>
                  Vibeshelf is a recommendation engine built around that. You
                  describe a mood in plain language and get ranked results across
                  books, films and games together, rather than three separate
                  apps that each pretend your taste stops at their category
                  boundary.
                </p>
                <p>
                  It was built over a weekend at Mind the Product&apos;s World
                  Product Day hackathon, by two of us. I owned the framing, scope
                  and design; my teammate owned the backend and the server logic.
                  It is live and it works, but it has no real users, so nothing
                  below is validated by anything except our own testing.
                </p>
              </div>
              <aside className="span-4 bet-card">
                <h3>The bet</h3>
                <p>
                  The failure is upstream, in the input. These systems ask you to
                  describe what you want using their vocabulary — genre tags,
                  categories, &quot;because you watched&quot; — and you do not
                  think in that vocabulary. You think in references and feelings.
                  The gap is a translation problem, not a ranking problem.
                </p>
              </aside>
            </div>
          </section>

          <section className="case-section" aria-labelledby="section-01">
            <div className="case-heading">
              <span className="case-num" aria-hidden="true">
                01
              </span>
              <h2 id="section-01">A text box instead of a genre tree</h2>
            </div>
            <div className="body-copy">
              <p>
                My first instinct was that recommendation algorithms are bad.
                That framing is wrong, and it leads somewhere useless — it points
                you at building a better ranking model, which is not a thing two
                people can do in a weekend and not actually where the failure is.
              </p>
              <p>
                That reframing is what made the project tractable. Translating
                messy human phrasing into structured tags is exactly what a
                language model is good at, and it meant the hard part became
                prompt design rather than model training.
              </p>
              <p>
                The second thing I decided early was that this had to work across
                books, films and games at once. Every existing product is siloed
                by category, but taste is not — someone who wants melancholic and
                atmospheric wants it in a novel and a game equally. Crossing the
                silos was the actual product idea; the vibe search was the
                mechanism.
              </p>
            </div>
            <div className="mt-8">
              <SiteImage image={images.vibeshelfInput} />
              <p className="caption">{captions.vibeshelf01}</p>
            </div>
          </section>

          <section className="case-section" aria-labelledby="section-02">
            <div className="case-heading">
              <span className="case-num" aria-hidden="true">
                02
              </span>
              <h2 id="section-02">Show the match, then let people argue with it</h2>
            </div>
            <div className="body-copy">
              <p>
                A vibe description goes to Llama 3.3-70B, served through Groq&apos;s
                free tier, which extracts structured tags. Those tags get scored
                against a curated library of 547 titles using Jaccard similarity,
                and results render as an interactive constellation — closer to
                the centre means a stronger match. Because a fixed library would
                otherwise cap what you can be shown, the system also generates
                fresh picks live, so a search never comes back thin.
              </p>
              <p>
                Rating a result with a thumbs up or down adjusts the weighting on
                its tags, so later searches re-rank in your direction. It is a
                feedback-weighted re-ranker rather than anything trained, and I
                want to be accurate about that — it is a simple mechanism, and
                the interesting part was tuning how hard a single rating should
                push. Too aggressive and one bad rating poisons everything after
                it; too gentle and rating things feels pointless.
              </p>
            </div>
            <div className="mt-8">
              <SiteImage image={images.vibeshelfResults} />
              <p className="caption">{captions.vibeshelf02}</p>
            </div>
          </section>

          <section className="case-section" aria-labelledby="section-03">
            <div className="case-heading">
              <span className="case-num" aria-hidden="true">
                03
              </span>
              <h2 id="section-03">The loop has to pay off beyond one search</h2>
            </div>
            <div className="body-copy">
              <p>
                Around that sits the part that makes it feel like a product
                rather than a search box: saved shelves, custom named lists, a
                radar chart of your taste profile, and a light social layer where
                you can look at other people&apos;s shelves.
              </p>
            </div>
            <div className="mt-8">
              <SiteImage image={images.vibeshelfTaste} />
              <p className="caption">{captions.vibeshelf03}</p>
            </div>
          </section>

          <section className="case-section" aria-labelledby="broke-heading">
            <div className="case-heading">
              <h2 id="broke-heading">What broke</h2>
            </div>
            <div className="broke-grid">
              <div className="broke-card">
                <h3>A 547-title library on purpose</h3>
                <p>
                  The obvious way to build a recommendation engine is to plug
                  into a real catalog API and get hundreds of thousands of
                  titles. We hand-curated 547 instead, so the vibe matching —
                  the part that had to work — could be tested in a weekend.
                  Coverage is the ceiling everything else hits.
                </p>
              </div>
              <div className="broke-card">
                <h3>The fallback is doing too much work</h3>
                <p>
                  Ask for something outside the curated set and you fall through
                  to live AI generation: no scoring, no constellation position,
                  less confidence. That fallback is doing more work than I would
                  like, and it is the first thing I would fix.
                </p>
              </div>
              <div className="broke-card">
                <h3>Nothing survives a restart</h3>
                <p>
                  Everything is in memory, so state does not survive a restart.
                  For a weekend demo that is fine. For anything real it is the
                  first blocker.
                </p>
              </div>
            </div>
          </section>

          <section className="case-section" aria-labelledby="rest-heading">
            <div className="case-heading">
              <h2 id="rest-heading">The rest of the product</h2>
            </div>
            <div className="body-copy">
              <p>
                It shipped as a product rather than a demo: accounts and handles,
                saved shelves, custom lists per medium, the taste profile as a
                tab rather than a settings page, and a social layer for finding
                other people&apos;s shelves — all on free infrastructure.
                Endorsements are &quot;stamps received&quot;, not likes, because
                a stamp is something you press onto a thing you have actually
                read.
              </p>
              <p className="body-copy-17">
                One search across all three media, but three separate shelves.
                Mixing the results is the whole point; mixing what you have saved
                is just mess — that split was the easiest call on the project to
                defend.
              </p>
            </div>
            <div className="scope-cut">
              <h4>What we cut to ship in a weekend</h4>
              <dl>
                <div className="scope-cut-row">
                  <dt>Messaging between users</dt>
                  <dd>
                    The social layer only had to prove that finding someone
                    else&apos;s shelf was worth doing. An inbox brings moderation,
                    notifications and abuse handling with it — none of which a
                    weekend build can answer honestly, and none of which change
                    whether the idea works.
                  </dd>
                </div>
                <div className="scope-cut-row">
                  <dt>Adding a book by photographing it</dt>
                  <dd>
                    Snapping the cover of a book you have just finished is the
                    nicer gesture, but it needs an image pipeline and a matching
                    step that fails exactly where it is used — a paperback held
                    at an angle in bad light. Search-and-save is two taps and
                    never misses.
                  </dd>
                </div>
              </dl>
              <p className="scope-cut-note">
                Both are on the list for a version with more than a weekend in
                it. Cutting them was not the hard part; agreeing they were cuts
                rather than failures was.
              </p>
            </div>
          </section>

          <section className="case-section" aria-labelledby="running-heading">
            <div className="case-heading">
              <h2 id="running-heading">See it running</h2>
            </div>
            <VideoFacade />
          </section>

          <section className="case-section" aria-labelledby="change-heading">
            <div className="case-heading">
              <h2 id="change-heading">What I&apos;d change, and what&apos;s next</h2>
            </div>
            <div className="change-grid">
              <div className="body-copy">
                <p>
                  I would replace the hand-curated set with a real catalog API
                  and keep the hand-tuned tag vocabulary as the scoring layer on
                  top, so coverage stops being the ceiling.
                </p>
                <p>
                  I would test the tag translation against people other than us.
                  We validated that the vibe search worked by trying it
                  ourselves, which tells you it works for two people who already
                  know what it is supposed to do.
                </p>
              </div>
              <div className="body-copy">
                <p>
                  And I would move off in-memory storage before adding a single
                  new feature. Persistence is not interesting to build and it is
                  the thing standing between this and being usable by anyone.
                </p>
                <p>
                  Getting structured output from a language model is a design
                  problem rather than an intelligence problem. Llama kept
                  wrapping its JSON in conversational text, so we had to parse
                  defensively. That is what happens when you ask a chat-shaped
                  thing for a machine-shaped answer.
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
