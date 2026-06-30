import Icon from "./Icon";

export default function ServiceHeroVisual({
  num,
  name,
  icon,
}: {
  num: string;
  name: string;
  icon: string;
}) {
  return (
    <div className="relative w-full aspect-[4/3] rounded-panel overflow-hidden bg-sand border border-ink/10 grain">
      <span className="absolute top-7 left-8 font-mono text-sm text-ink-500">{num}</span>
      <div className="absolute inset-0 grid place-items-center">
        <Icon name={icon} size={92} weight="light" className="text-accent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-8 border-t border-ink/8 bg-paper/40">
        <span className="display text-2xl md:text-3xl">{name}</span>
      </div>
    </div>
  );
}
