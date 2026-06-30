// CSS-driven marquee. The track is duplicated so the loop is seamless.
// Animation is disabled under prefers-reduced-motion (see globals.css).
export default function Marquee({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`marquee-mask overflow-hidden ${className}`}>
      <div className="marquee-track">
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
