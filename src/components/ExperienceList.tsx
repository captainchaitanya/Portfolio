import { Reveal } from "@/components/Reveal";
import type { Role } from "@/content/experience";

type ExperienceListProps = {
  roles: Role[];
};

export function ExperienceList({ roles }: ExperienceListProps) {
  return (
    <ul className="mt-6">
      {roles.map((role, index) => (
        <Reveal
          key={`${role.company}-${role.dates}`}
          as="li"
          className="experience-row"
          delay={index * 0.08}
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <div className="min-w-0 flex-1">
              <p className="text-lg leading-body text-text">
                {role.url ? (
                  <a
                    href={role.url}
                    className="experience-company-link font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {role.company}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <span className="font-medium text-text">{role.company}</span>
                )}
                <span className="font-normal text-text"> — {role.title}</span>
              </p>
              {role.lines.map((line) => (
                <p key={line} className="mt-2 text-base leading-body text-muted">
                  {line}
                </p>
              ))}
            </div>
            <p className="shrink-0 text-sm leading-body text-muted">{role.dates}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
