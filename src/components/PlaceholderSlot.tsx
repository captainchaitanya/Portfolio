type PlaceholderSlotProps = {
  label: string;
  className?: string;
};

export function PlaceholderSlot({ label, className = "" }: PlaceholderSlotProps) {
  return (
    <div className={`placeholder-slot ${className}`.trim()} role="img" aria-label={`${label} — still to add`}>
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
        <path d="M3 16.5 8.5 11l3.5 3.5L16 10.5 21 16" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="8" cy="9" r="1.2" fill="currentColor" />
      </svg>
      <span className="placeholder-label">{label}</span>
    </div>
  );
}
