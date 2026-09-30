# Second Take: case study copy

Copy for the portfolio. Structure mirrors the Vibeshelf case study.

---

## PAGE META
- **Slug:** /work/second-take
- **Page title:** Second Take — Chaitanya Raj
- **Meta description:** Live, not yet tested with users. Three written conversation scenes where every partner reacts for a reason; the biggest limit is that multiple choice can't hear what you'd actually say.
- **Eyebrow:** Case study 03
- **Sub-eyebrow:** Concept project · October 2026

# Second Take

A phone-sized practice room for the conversations people replay in their heads: asking for a raise, keeping a party conversation alive, telling your parents you're turning down the safe job. I wrote the scenes, designed how each character reacts, and built the app.

- **My role:** Conversation design, scene writing, build
- **Team:** Solo
- **Timeline:** Oct 2026, a few days
- **Built for:** People who rehearse hard conversations in their heads

**Buttons:**
- Live demo ↗ → https://second-take-speech.vercel.app/
- GitHub repo ↗ → https://github.com/captainchaitanya/second-take  (confirm the real repo URL)

**Stack line:** React · TypeScript · Framer Motion · scenes as JSON

**Hero image:** /images/second-take-summary.webp
- **Alt text:** Second Take on desktop: a phone showing the end of a scene (Papa ended open, 35 XP, a scorecard of 90 out of 100 and a skill breakdown), with a creator card on the left and a scene summary panel on the right showing a rising mood line, four skill bars and the two triggers the player hit.
- **Caption:** The end of a scene. The score matters less than the panel on the right: which of Papa's triggers you hit, and in what order.

---

## The problem

Most people don't lack advice about hard conversations. They lack practice. You replay the conversation afterwards, write the perfect line at 2am, and never get to say it.

Chatbots can role-play the other person, but open chat is a poor practice partner in two ways. The character gives in too easily, because the model wants to be agreeable. And the feedback is generic, because nobody decided in advance what a good reply looks like in that scene.

Second Take is three short scenes (Work, Social, Family) played inside a phone. Each turn you pick one of three replies, the other person reacts, and at the end you get line-by-line feedback on what you said. It's live and it works, but so far I'm the only person who has played it, so nothing below is validated by real users yet.

### The bet

The realism comes from the writing, not the model. If a writer decides why the other person reacts the way they do, a scripted scene can feel more real than open chat, and the feedback can be specific because someone decided in advance what good looks like.

---

01

## Three choices, and the middle one is the hard one

Every turn has three replies: one that works, one that backfires, and one that sounds fine but has a hidden cost. The first two are easy to write. The third is where the work is.

"Whatever you think is fair, honestly. I trust you" sounds generous in a raise conversation. It also hands the number to someone who will anchor low to stay safe on budget. "It'll be fine, Papa. Don't worry so much" sounds kind, and it tells a worried father you haven't thought about the risk. Obvious wrong answers teach nothing; the believable ones are the lessons.

Choices are shuffled every turn, so the good answer isn't always in the same place.

---

02

## Every partner has a reason

Each partner has a hidden want, a list of things that make them soften, and a list of things that make them dig in. Marcus, the manager, wants to keep you but needs evidence he can take to HR. Papa is scared, because he watched his nephew's startup fail.

Under the hood, mood runs from -3 to +3 and falls into one of three states: guarded, neutral or open. Every partner line is written three times, once for each mood, so the character stays the same person but warms up or closes off. Paths merge back together after each turn, which keeps the writing manageable: about three versions of each line instead of a tree that doubles every turn.

On desktop, a live panel shows the partner's triggers and highlights the one your last reply hit. A real app would probably hide this until the end. I left it visible because it shows the thing I actually designed: not just what the character says, but why.

---

03

## Feedback that is honest and kind at the same time

Every choice carries a one-sentence coach note that names what the line did, and a better line to try whenever the choice wasn't the strong one. Each scene has a rubric of three or four skills (for the raise: backed it with impact, named a clear ask, asked without apologising, left with a next step), and every choice is tagged against it.

At the end you get a score, a breakdown by skill, the two skills to work on next, one line to rehearse, and a sentence about your pattern, such as "You tend to skip acknowledging the other person's pressure before stating your need." The rule I held to was no generic praise: every note had to say what the line actually did.

---

## What broke

### Multiple choice can't hear you

This is the biggest limit. Real conversations aren't three options, and picking the right line is easier than saying it yourself under pressure. The next step is a free-text mode that uses each partner profile as an LLM prompt, with the written scenes as test cases for whether the model stays in character.

### The right answer is easy to spot

In the first draft, the strong choice was usually the longest and most balanced sentence, and it's easy to learn that pattern instead of the skill. I need to vary lengths, and make some strong choices short and blunt.

### Showing the triggers gives the game away

The live panel is great for explaining the design and bad for practice, because you can play to the panel instead of the person. For real users, the triggers belong on the feedback screen, after the scene.

### The scores are my opinion

Every rubric tag is my judgement of what a line does. Nobody has disagreed with me yet because nobody has played it yet.

---

## The rest of the build

Each scene is one JSON file, separate from the code, so rewriting a line never means touching the app. A validator runs on every build and checks the writing's structure: exactly three choices per turn, one of each quality, a better line for every weak choice, every mood written for every line, and every trigger label matching the partner's lists. Structural mistakes in the writing fail the build, the way a spelling mistake would fail a spellcheck.

XP, streaks and sessions are stored in the browser. On desktop the app sits in a phone frame with the live panel beside it; on a phone it runs full screen. I built it in Cursor.

#### What I cut to ship in a few days

**Voice input**
Saying the line out loud is the real practice. But it needs speech recognition and a way to match what someone says to a scene, and it only makes sense once free-text works. Text first.

**Hard mode**
Every partner has an easy, medium and hard version on paper; only medium is written in full. The "Try it on hard" button is there and disabled, because I'd rather show where it's going than ship three half-written versions.

**Accounts**
Progress lives in the browser. Nothing about whether the scenes work depends on logging in.

---

## See it running

**Card:** Live demo. Play all three scenes in about ten minutes, on your phone or laptop. → Open the app ↗ (https://second-take-speech.vercel.app/)

---

## What I'd change, and what's next

I'd test it with eight to ten people and rewrite the weakest "sounds fine" choices first. Those are the lines most likely to be wrong, and the ones players will argue with.

I'd move the triggers to the end of the scene, and add a free-text mode built on the partner profiles, using the written scenes to check the model stays in character.

And I'd write the hard versions, because that's where practice gets real: a partner who doesn't give you anything easy to agree with.

Most of the work was deciding why each person reacts the way they do. Once Papa had a nephew whose startup failed, his lines almost wrote themselves.

---

## HOMEPAGE CARD (Selected work)

- **Image:** /images/second-take-summary.webp (same alt text as above)
- **Image caption:** Every partner reacts for a reason. The panel beside the phone shows which of those reasons your replies hit.
- **Title:** Second Take
- **One-liner:** A practice room for the conversations people replay in their heads. Three written scenes where each partner has a hidden want and clear triggers, and every reply gets honest, line-by-line feedback.
- **Links:** Read the case study → (/work/second-take) · Live demo ↗ (https://second-take-speech.vercel.app/) · GitHub ↗ (repo URL)
- **Role:** Solo — scene writing, conversation design, build
- **When:** Oct 2026
- **Built for:** People rehearsing hard conversations
- **Stack:** React · TypeScript · JSON scenes
