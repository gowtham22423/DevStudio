export default function ServiceHeroVisual({
  num, name, gradient,
}: { num: string; name: string; gradient: string }) {
  return (
    <div className="relative w-full aspect-[4/3] rounded-4xl overflow-hidden" style={{ background: gradient }}>
      <div className="absolute -top-1/4 -right-1/4 w-2/3 h-2/3 rounded-full bg-white/20 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />
      <div className="absolute -bottom-20 -left-12 w-64 h-64 rounded-full border border-white/20" />
      <div className="absolute -bottom-28 -left-4 w-64 h-64 rounded-full border border-white/10" />
      <span className="absolute top-7 left-8 display text-7xl md:text-8xl text-white/90">{num}</span>
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <span className="display text-3xl md:text-4xl text-white">{name}</span>
      </div>
    </div>
  );
}
