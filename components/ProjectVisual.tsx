import Image from "next/image";
import type { Project } from "@/lib/content";

export default function ProjectVisual({
  project,
  className = "",
  big = false,
}: {
  project: Project;
  className?: string;
  big?: boolean;
}) {
  const hasImage = Boolean(project.image);

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={hasImage ? undefined : { background: project.gradient }}
    >
      {hasImage ? (
        <>
          <Image
            src={project.image as string}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 50vw"
          />
          {/* legibility scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        </>
      ) : (
        <>
          {/* soft light blob */}
          <div className="absolute -top-1/3 -right-1/4 w-2/3 h-2/3 rounded-full bg-white/20 blur-3xl" />
          {/* dotted grid motif */}
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
              backgroundSize: big ? "26px 26px" : "20px 20px",
            }}
          />
          {/* concentric ring motif */}
          <div className="absolute -bottom-16 -left-10 w-56 h-56 rounded-full border border-white/20" />
          <div className="absolute -bottom-24 -left-4 w-56 h-56 rounded-full border border-white/10" />
        </>
      )}

      {/* monogram */}
      <div className="absolute top-5 left-6 flex items-center gap-2 z-10">
        <span className="display text-white text-xl tracking-tightest drop-shadow">{project.monogram}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
      </div>

      {/* title + category */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-white/80">{project.category}</span>
        <div className={`display text-white mt-1 ${big ? "text-4xl" : "text-2xl"}`}>{project.title}</div>
      </div>
    </div>
  );
}
