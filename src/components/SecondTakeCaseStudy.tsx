import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteImage } from "@/components/SiteImage";
import { VideoFacade } from "@/components/VideoFacade";
import { captions, images } from "@/content/media";
import type { Project } from "@/content/projects";
import { site } from "@/content/site";

type SecondTakeCaseStudyProps = {
  project: Project;
  nextProject?: Project;
  kicker: string;
};

const pills = [
  { label: "Live demo", href: "https://second-take-speech.vercel.app/", accent: true },
  { label: "GitHub repo", href: "https://github.com/captainchaitanya/second-take" },
];

export function SecondTakeCaseStudy({ project, nextProject, kicker }: SecondTakeCaseStudyProps) {
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
              A phone-sized practice room for the conversations people replay in
              their heads: asking for a raise, keeping a party conversation
              alive, telling your parents you&apos;re turning down the safe job.
              I wrote the scenes, designed how each character reacts, and built
              the app.
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
              <dd>People who rehearse hard conversations in their heads</dd>
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
          <p className="stack-line">React · TypeScript · Framer Motion · scenes as JSON</p>

          <div className="case-hero">
            <SiteImage image={images.secondTakeSummary} />
            <p className="caption">{captions.secondTakeHero}</p>
          </div>

          <section className="case-section" aria-labelledby="problem-heading">
            <div className="case-heading">
              <h2 id="problem-heading">The problem</h2>
            </div>
            <div className="grid-12">
              <div className="span-7 body-copy">
                <p>
                  Most people don&apos;t lack advice about hard conversations.
                  They lack practice. You replay the conversation afterwards,
                  write the perfect line at 2am, and never get to say it.
                </p>
                <p>
                  Chatbots can role-play the other person, but open chat is a
                  poor practice partner in two ways. The character gives in too
                  easily, because the model wants to be agreeable. And the
                  feedback is generic, because nobody decided in advance what a
                  good reply looks like in that scene.
                </p>
                <p>
                  Second Take is three short scenes (Work, Social, Family) played
                  inside a phone. Each turn you pick one of three replies, the
                  other person reacts, and at the end you get line-by-line
                  feedback on what you said. It&apos;s live and it works, but so
                  far I&apos;m the only person who has played it, so nothing
                  below is validated by real users yet.
                </p>
              </div>
              <aside className="span-4 bet-card">
                <h3>The bet</h3>
                <p>
                  The realism comes from the writing, not the model. If a writer
                  decides why the other person reacts the way they do, a
                  scripted scene can feel more real than open chat, and the
                  feedback can be specific because someone decided in advance
                  what good looks like.
                </p>
              </aside>
            </div>
          </section>

          <section className="case-section" aria-labelledby="section-01">
            <div className="case-heading">
              <span className="case-num" aria-hidden="true">
                01
              </span>
              <h2 id="section-01">Three choices, and the middle one is the hard one</h2>
            </div>
            <div className="body-copy">
              <p>
                Every turn has three replies: one that works, one that backfires,
                and one that sounds fine but has a hidden cost. The first two
                are easy to write. The third is where the work is.
              </p>
              <p>
                &quot;Whatever you think is fair, honestly. I trust you&quot;
                sounds generous in a raise conversation. It also hands the
                number to someone who will anchor low to stay safe on budget.
                &quot;It&apos;ll be fine, Papa. Don&apos;t worry so much&quot;
                sounds kind, and it tells a worried father you haven&apos;t
                thought about the risk. Obvious wrong answers teach nothing; the
                believable ones are the lessons.
              </p>
              <p>Choices are shuffled every turn, so the good answer isn&apos;t always in the same place.</p>
            </div>
          </section>

          <section className="case-section" aria-labelledby="section-02">
            <div className="case-heading">
              <span className="case-num" aria-hidden="true">
                02
              </span>
              <h2 id="section-02">Every partner has a reason</h2>
            </div>
            <div className="body-copy">
              <p>
                Each partner has a hidden want, a list of things that make them
                soften, and a list of things that make them dig in. Marcus, the
                manager, wants to keep you but needs evidence he can take to HR.
                Papa is scared, because he watched his nephew&apos;s startup
                fail.
              </p>
              <p>
                Under the hood, mood runs from -3 to +3 and falls into one of
                three states: guarded, neutral or open. Every partner line is
                written three times, once for each mood, so the character stays
                the same person but warms up or closes off. Paths merge back
                together after each turn, which keeps the writing manageable:
                about three versions of each line instead of a tree that doubles
                every turn.
              </p>
              <p>
                On desktop, a live panel shows the partner&apos;s triggers and
                highlights the one your last reply hit. A real app would
                probably hide this until the end. I left it visible because it
                shows the thing I actually designed: not just what the character
                says, but why.
              </p>
            </div>
          </section>

          <section className="case-section" aria-labelledby="section-03">
            <div className="case-heading">
              <span className="case-num" aria-hidden="true">
                03
              </span>
              <h2 id="section-03">Feedback that is honest and kind at the same time</h2>
            </div>
            <div className="body-copy">
              <p>
                Every choice carries a one-sentence coach note that names what
                the line did, and a better line to try whenever the choice
                wasn&apos;t the strong one. Each scene has a rubric of three or
                four skills (for the raise: backed it with impact, named a clear
                ask, asked without apologising, left with a next step), and
                every choice is tagged against it.
              </p>
              <p>
                At the end you get a score, a breakdown by skill, the two skills
                to work on next, one line to rehearse, and a sentence about your
                pattern, such as &quot;You tend to skip acknowledging the other
                person&apos;s pressure before stating your need.&quot; The rule
                I held to was no generic praise: every note had to say what the
                line actually did.
              </p>
            </div>
          </section>

          <section className="case-section" aria-labelledby="broke-heading">
            <div className="case-heading">
              <h2 id="broke-heading">What broke</h2>
            </div>
            <div className="broke-grid">
              <div className="broke-card">
                <h3>Multiple choice can&apos;t hear you</h3>
                <p>
                  This is the biggest limit. Real conversations aren&apos;t
                  three options, and picking the right line is easier than
                  saying it yourself under pressure. The next step is a
                  free-text mode that uses each partner profile as an LLM
                  prompt, with the written scenes as test cases for whether the
                  model stays in character.
                </p>
              </div>
              <div className="broke-card">
                <h3>The right answer is easy to spot</h3>
                <p>
                  In the first draft, the strong choice was usually the longest
                  and most balanced sentence, and it&apos;s easy to learn that
                  pattern instead of the skill. I need to vary lengths, and make
                  some strong choices short and blunt.
                </p>
              </div>
              <div className="broke-card">
                <h3>Showing the triggers gives the game away</h3>
                <p>
                  The live panel is great for explaining the design and bad for
                  practice, because you can play to the panel instead of the
                  person. For real users, the triggers belong on the feedback
                  screen, after the scene.
                </p>
              </div>
              <div className="broke-card">
                <h3>The scores are my opinion</h3>
                <p>
                  Every rubric tag is my judgement of what a line does. Nobody
                  has disagreed with me yet because nobody has played it yet.
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
                Each scene is one JSON file, separate from the code, so rewriting
                a line never means touching the app. A validator runs on every
                build and checks the writing&apos;s structure: exactly three
                choices per turn, one of each quality, a better line for every
                weak choice, every mood written for every line, and every
                trigger label matching the partner&apos;s lists. Structural
                mistakes in the writing fail the build, the way a spelling
                mistake would fail a spellcheck.
              </p>
              <p>
                XP, streaks and sessions are stored in the browser. On desktop
                the app sits in a phone frame with the live panel beside it; on
                a phone it runs full screen. I built it in Cursor.
              </p>
            </div>
            <div className="scope-cut">
              <h4>What I cut to ship in a few days</h4>
              <dl>
                <div className="scope-cut-row">
                  <dt>Voice input</dt>
                  <dd>
                    Saying the line out loud is the real practice. But it needs
                    speech recognition and a way to match what someone says to a
                    scene, and it only makes sense once free-text works. Text
                    first.
                  </dd>
                </div>
                <div className="scope-cut-row">
                  <dt>Hard mode</dt>
                  <dd>
                    Every partner has an easy, medium and hard version on paper;
                    only medium is written in full. The &quot;Try it on
                    hard&quot; button is there and disabled, because I&apos;d
                    rather show where it&apos;s going than ship three
                    half-written versions.
                  </dd>
                </div>
                <div className="scope-cut-row">
                  <dt>Accounts</dt>
                  <dd>
                    Progress lives in the browser. Nothing about whether the
                    scenes work depends on logging in.
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
              href="https://second-take-speech.vercel.app/"
              title="Live demo"
              description="Play all three scenes in about ten minutes, on your phone or laptop."
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
                  I&apos;d test it with eight to ten people and rewrite the
                  weakest &quot;sounds fine&quot; choices first. Those are the
                  lines most likely to be wrong, and the ones players will argue
                  with.
                </p>
                <p>
                  I&apos;d move the triggers to the end of the scene, and add a
                  free-text mode built on the partner profiles, using the
                  written scenes to check the model stays in character.
                </p>
              </div>
              <div className="body-copy">
                <p>
                  And I&apos;d write the hard versions, because that&apos;s
                  where practice gets real: a partner who doesn&apos;t give you
                  anything easy to agree with.
                </p>
                <p>
                  Most of the work was deciding why each person reacts the way
                  they do. Once Papa had a nephew whose startup failed, his
                  lines almost wrote themselves.
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
