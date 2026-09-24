import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import type { SiteLink, SiteLinkIcon } from "@/content/site";

function PillIcon({ name }: { name: SiteLinkIcon }) {
  if (name === "linkedin") {
    return <FaLinkedinIn size={15} color="currentColor" aria-hidden="true" />;
  }

  if (name === "github") {
    return <FaGithub size={15} color="currentColor" aria-hidden="true" />;
  }

  if (name === "envelope") {
    return (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  if (name === "document") {
    return (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5" />
        <path d="M8 13h8M8 17h5" />
      </svg>
    );
  }

  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function LinkPills({
  links,
  label,
}: {
  links: SiteLink[];
  label: string;
}) {
  return (
    <nav className="pill-row" aria-label={label}>
      {links.map((link) => {
        const leading = link.icon !== "external";
        return (
          <a
            key={link.href}
            href={link.href}
            className={link.accent ? "pill pill-accent" : "pill"}
            {...(link.download ? { download: link.download } : {})}
            {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {leading ? <PillIcon name={link.icon} /> : null}
            <span>{link.label}</span>
            {leading ? null : <PillIcon name={link.icon} />}
            {link.external ? (
              <span className="sr-only"> (opens in a new tab)</span>
            ) : null}
          </a>
        );
      })}
    </nav>
  );
}
