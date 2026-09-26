import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ProjectGrid } from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Everything I'm building and have built.",
};

export default function ProjectsPage() {
  const sorted = [...projects].sort((a, b) => b.year - a.year);

  return (
    <Container className="py-16 sm:py-24">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Projects
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Everything I&apos;m building and have built — from work in progress to
        finished products.
      </p>
      <div className="mt-12">
        <ProjectGrid projects={sorted} />
      </div>
    </Container>
  );
}
