import Image from "next/image";
import type { Project } from "@/lib/content";

export default function ProjectVisual({
  project,
  className = "",
  big = false,
  priority = false,
}: {
  project: Project;
  className?: string;
  big?: boolean;
  priority?: boolean;
}) {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-sand ${className}`}>
      {project.image && (
        <Image
          src={project.image}
          alt={`${project.title}, a ${project.industry.toLowerCase()} project by DevStudio`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />

      <span className="absolute top-5 left-5 grid place-items-center w-9 h-9 rounded-sm bg-paper/95 font-mono text-xs font-semibold text-ink">
        {project.monogram}
      </span>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="text-xs font-medium tracking-wide text-paper/75">{project.industry}</span>
        <div className={`display text-paper mt-1 ${big ? "text-3xl md:text-4xl" : "text-2xl"}`}>
          {project.title}
        </div>
      </div>
    </div>
  );
}
