import type { Role } from "@/content/experience";

type ExperienceListProps = {
  roles: Role[];
};

function monogram(company: string): string {
  if (company === "WhatBytes") return "WB";
  if (company === "Pulsepeek") return "PP";
  if (company.startsWith("MUNSOC")) return "MN";
  const words = company.split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

export function ExperienceList({ roles }: ExperienceListProps) {
  return (
    <ul className="experience-list">
      {roles.map((role) => (
        <li key={`${role.company}-${role.dates}`} className="experience-row">
          <div>
            <div className="experience-company">
              <span className="monogram" aria-hidden="true">
                {monogram(role.company)}
              </span>
              {role.url ? (
                <a href={role.url} target="_blank" rel="noopener noreferrer">
                  {role.company}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                <span className="experience-company-name">{role.company}</span>
              )}
            </div>
            <p className="experience-title">{role.title}</p>
          </div>
          <div className="experience-body">
            {role.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className="experience-dates">{role.dates}</p>
        </li>
      ))}
    </ul>
  );
}
