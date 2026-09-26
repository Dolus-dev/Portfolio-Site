import Link from "next/link";
import type { Project } from "@/lib/projects";
import { StatusBadge, TagList } from "./project-meta";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="relative flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent has-[a:focus-visible]:border-accent has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-accent">
      <div className="mb-4 flex items-center justify-between gap-3 text-sm text-muted">
        <StatusBadge status={project.status} />
        <span>{project.year}</span>
      </div>
      <h3 className="text-lg font-semibold tracking-tight">
        {/* Stretched link: the whole card is clickable. */}
        <Link
          href={`/projects/${project.slug}`}
          className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none"
        >
          {project.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-muted">{project.summary}</p>
      <TagList tags={project.tags} className="mt-6" />
    </article>
  );
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
