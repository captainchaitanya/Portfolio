type SummaryBoxProps = {
  problem: string;
  role: string;
  team: string;
  timeline: string;
  outcome: string;
};

const rows: { key: keyof SummaryBoxProps; label: string }[] = [
  { key: "problem", label: "Problem" },
  { key: "role", label: "My role" },
  { key: "team", label: "Team" },
  { key: "timeline", label: "Timeline" },
  { key: "outcome", label: "Outcome" },
];

export function SummaryBox(props: SummaryBoxProps) {
  return (
    <dl className="rounded-summary bg-surface px-4 py-6 sm:px-6">
      <div className="flex flex-col gap-4">
        {rows.map(({ key, label }) => (
          <div key={key} className="grid gap-1">
            <dt className="text-sm leading-body text-muted">{label}</dt>
            <dd className="text-base leading-body text-text">{props[key]}</dd>
          </div>
        ))}
      </div>
    </dl>
  );
}
