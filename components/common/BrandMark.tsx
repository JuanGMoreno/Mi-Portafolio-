interface BrandMarkProps {
  label: string;
}

export function BrandMark({ label }: BrandMarkProps) {
  return (
    <a
      href="#hero"
      aria-label={label}
      className="group inline-flex size-10 items-center justify-center rounded-md border border-border bg-surface-1 font-mono text-xs font-bold tracking-tight text-text-primary transition-[color,border-color,box-shadow] hover:border-signal/50 hover:text-signal hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
    >
      <span aria-hidden="true">
        JG<span className="text-signal">.</span>
      </span>
    </a>
  );
}
