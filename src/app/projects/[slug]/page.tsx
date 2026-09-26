import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { StatusBadge, TagList } from "@/components/project-meta";
import { getProject, projects } from "@/lib/projects";

// Only the slugs listed in projects.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { live, source } = project.links ?? {};

  return (
    <Container className="py-16 sm:py-24">
      <article className="max-w-3xl">
        <Link
          href="/projects"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          ← All projects
        </Link>

        <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-xl text-muted">{project.summary}</p>

        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-y border-border py-6 text-sm">
          <div>
            <dt className="text-muted">Status</dt>
            <dd className="mt-1">
              <StatusBadge status={project.status} />
            </dd>
          </div>
          <div>
            <dt className="text-muted">Year</dt>
            <dd className="mt-1">{project.year}</dd>
          </div>
          {(live || source) && (
            <div>
              <dt className="text-muted">Links</dt>
              <dd className="mt-1 flex gap-4">
                {live && (
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent hover:underline"
                  >
                    Live site ↗
                  </a>
                )}
                {source && (
                  <a
                    href={source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent hover:underline"
                  >
                    Source code ↗
                  </a>
                )}
              </dd>
            </div>
          )}
        </dl>

        <div className="mt-10 space-y-5 text-lg leading-relaxed">
          {project.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <TagList tags={project.tags} className="mt-10" />
      </article>
    </Container>
  );
}
