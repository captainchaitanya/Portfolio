import Link from "next/link";
import { formatProjectMeta, type Project } from "@/content/projects";

type ProjectRowProps = {
  href: string;
  title: string;
  metricPrefix?: string;
  outcome: string;
  year: string;
  meta: Project["meta"];
};

export function ProjectRow({
  href,
  title,
  metricPrefix,
  outcome,
  year,
  meta,
}: ProjectRowProps) {
  const metaLine = formatProjectMeta(meta);

  return (
    <Link href={href} className="project-row group">
      <span className="project-row-bar" aria-hidden="true" />

      <span className="project-row-shift min-w-0 flex-1">
        <span className="block text-lg font-medium leading-body text-text">{title}</span>

        <span className="project-row-outcome mt-2 block text-base leading-body">
          {metricPrefix ? (
            <>
              <span className="project-row-metric">{metricPrefix}</span>{" "}
            </>
          ) : null}
          <span className="project-row-desc">{outcome}</span>
        </span>

        <span className="project-row-meta-slot">
          <span className="project-row-meta-grid">
            <span className="project-row-meta-clip">
              <span className="project-row-meta">{metaLine}</span>
            </span>
          </span>
        </span>
      </span>

      <span className="project-row-shift flex shrink-0 items-baseline gap-2 text-sm text-muted">
        <span>{year}</span>
        <span aria-hidden="true" className="project-row-arrow inline-block">
          →
        </span>
      </span>
    </Link>
  );
}
