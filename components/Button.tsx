import Link from "next/link";
import Icon from "./Icon";

type Variant = "primary" | "accent" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  icon?: boolean; // show trailing arrow
  iconName?: string;
  className?: string;
  children: React.ReactNode;
};

const base =
  "group inline-flex items-center justify-center gap-2 font-medium rounded-md transition-all duration-300 ease-premium select-none whitespace-nowrap disabled:opacity-55 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:bg-ink-800 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] shadow-soft",
  accent:
    "bg-accent-deep text-paper hover:bg-[#083f2c] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] shadow-soft",
  secondary:
    "border border-ink/15 text-ink hover:bg-ink/[0.05] hover:border-ink/25 hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-ink hover:text-accent-deep",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2.5",
  md: "text-[15px] px-5 py-3",
  lg: "text-base px-6 py-3.5",
};

function inner(children: React.ReactNode, icon?: boolean, iconName?: string) {
  return (
    <>
      {children}
      {icon && (
        <Icon
          name={iconName ?? "ArrowUpRight"}
          className="transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          size={17}
          aria-hidden
        />
      )}
    </>
  );
}

type ButtonAsLink = BaseProps & { href: string } & Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof BaseProps | "href"
  >;
type ButtonAsButton = BaseProps & { href?: undefined } & Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    keyof BaseProps
  >;

export default function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    variant = "primary",
    size = "md",
    icon,
    iconName,
    className = "",
    children,
    ...rest
  } = props;
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { href, ...anchorRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={cls} {...anchorRest}>
        {inner(children, icon, iconName)}
      </Link>
    );
  }
  return (
    <button className={cls} {...(rest as ButtonAsButton)}>
      {inner(children, icon, iconName)}
    </button>
  );
}
