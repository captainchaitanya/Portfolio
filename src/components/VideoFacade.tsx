import { WALKTHROUGH_HREF } from "@/content/home";

type VideoFacadeProps = {
  href?: string;
  title?: string;
  description?: string;
  cta?: string;
};

export function VideoFacade({
  href = WALKTHROUGH_HREF,
  title = "Walkthrough",
  description = "A short pass through vibe search, the ranked results, and the taste profile — recorded on the live build, not a deck.",
  cta = "Watch on YouTube ↗",
}: VideoFacadeProps) {
  return (
    <a
      className="video-facade"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="play-button" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 28 28">
          <path d="M8 5.5v17l15-8.5L8 5.5z" />
        </svg>
      </span>
      <span className="video-copy">
        <h3>{title}</h3>
        <p>{description}</p>
        <span>
          {cta}
          <span className="sr-only"> (opens in a new tab)</span>
        </span>
      </span>
    </a>
  );
}
