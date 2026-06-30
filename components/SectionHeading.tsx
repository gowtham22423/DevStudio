import FadeUp from "./FadeUp";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
  max = "max-w-2xl",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  max?: string;
}) {
  return (
    <FadeUp
      className={`${max} ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && <span className="eyebrow block mb-4">{eyebrow}</span>}
      <h2 className="display text-display-sm md:text-display text-balance">{title}</h2>
      {intro && (
        <p
          className={`text-ink-500 text-lg leading-relaxed mt-5 ${
            align === "center" ? "mx-auto" : ""
          } max-w-prose2`}
        >
          {intro}
        </p>
      )}
    </FadeUp>
  );
}
