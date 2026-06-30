// A simple typographic monogram lockup for an invented client brand.
// Per the anti-slop guidance: invented brands get a real mark, not a bare wordmark.
export default function Monogram({
  monogram,
  name,
  className = "",
}: {
  monogram: string;
  name: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-ink-500 transition-colors duration-300 hover:text-ink ${className}`}
    >
      <span className="grid place-items-center w-9 h-9 rounded-sm border border-ink/15 font-mono text-xs font-semibold tracking-tight text-ink">
        {monogram}
      </span>
      <span className="text-[15px] font-medium tracking-tight">{name}</span>
    </span>
  );
}
