import Link from "next/link";
import { SiteImage } from "@/components/SiteImage";
import { showPlaceholders } from "@/content/flags";
import type { HomeLink, HomeProject } from "@/content/home";
import { images } from "@/content/media";
import type { Project } from "@/content/projects";

type ProjectBlockProps = {
  project: Project;
  presentation: HomeProject;
  priority?: boolean;
};

function ProjectLinkItem({ link }: { link: HomeLink }) {
  if ("placeholder" in link) {
    return <span className="placeholder-inline">{link.label}</span>;
  }

  const className = link.emphasis === "accent" ? "link-accent" : "link-muted";
  const arrow = link.emphasis === "accent";
  const content = (
    <>
      {link.label}
      {arrow ? (
        <span className="arrow" aria-hidden="true">
          →
        </span>
      ) : null}
      {link.external ? (
        <>
          <span className="ext-icon" aria-hidden="true">
            ↗
          </span>
          <span className="sr-only"> (opens in a new tab)</span>
        </>
      ) : null}
    </>
  );

  if (link.href.startsWith("/")) {
    return (
      <Link href={link.href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={link.href}
      className={className}
      {...(link.download ? { download: link.download } : {})}
      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  );
}

export function ProjectBlock({ project, presentation, priority = false }: ProjectBlockProps) {
  const image = images[presentation.imageKey];
  const links = presentation.links.filter(
    (link) => showPlaceholders || !("placeholder" in link),
  );

  return (
    <article className="project-block">
      {presentation.lead && presentation.eyebrow ? (
        <p className="eyebrow">{presentation.eyebrow}</p>
      ) : null}

      <div className={presentation.lead ? "mt-4" : undefined}>
        <SiteImage image={image} priority={priority} />
        <p className="caption">{presentation.caption}</p>
      </div>

      <div className="grid-12 mt-8">
        <div className="span-8">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">
            {project.metricPrefix ? `${project.metricPrefix} ` : null}
            {project.outcome}
          </p>
          <div className="project-links">
            {links.map((link) => (
              <ProjectLinkItem
                key={"href" in link ? link.href : link.label}
                link={link}
              />
            ))}
          </div>
        </div>
        <dl className="span-3-end project-facts">
          {presentation.facts.map((fact) => (
            <div key={fact.term}>
              <dt>{fact.term}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
