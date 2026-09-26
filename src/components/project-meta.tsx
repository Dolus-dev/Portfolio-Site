import type { ProjectStatus } from "@/lib/projects";

const statusDot: Record<ProjectStatus, string> = {
  "In progress": "bg-amber-500",
  Completed: "bg-emerald-500",
  Archived: "bg-stone-400",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        aria-hidden
        className={`size-2 rounded-full ${statusDot[status]}`}
      />
      {status}
    </span>
  );
}

export function TagList({
  tags,
  className = "",
}: {
  tags: string[];
  className?: string;
}) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
