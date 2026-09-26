import Link from "next/link";
import { Container } from "@/components/container";
import { ProjectGrid } from "@/components/project-card";
import { Section } from "@/components/section";
import { TagList } from "@/components/project-meta";
import { featuredProjects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />

      <Section
        id="projects"
        title="Featured projects"
        action={
          <Link
            href="/projects"
            className="text-sm font-medium text-accent hover:underline"
          >
            View all →
          </Link>
        }
      >
        <ProjectGrid projects={featuredProjects} />
      </Section>

      <Section id="about" title="About">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            {site.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium tracking-wide text-muted uppercase">
              Tools I use
            </h3>
            <TagList tags={[...site.skills]} />
          </div>
        </div>
      </Section>

      <Section id="contact" title="Get in touch">
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          Have a project in mind, a question, or just want to say hi? My inbox
          is open.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-8 inline-flex h-12 items-center rounded-full bg-accent px-6 font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          {site.email}
        </a>
      </Section>
    </>
  );
}

function Hero() {
  return (
    <Container className="py-24 sm:py-32">
      <p className="font-mono text-sm text-accent">
        {site.role} · {site.location}
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
        Hi, I&apos;m {site.name}.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
        {site.tagline}
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="inline-flex h-12 items-center rounded-full bg-accent px-6 font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          See my work
        </Link>
        <Link
          href="/#contact"
          className="inline-flex h-12 items-center rounded-full border border-border px-6 font-medium transition-colors hover:border-foreground"
        >
          Contact me
        </Link>
      </div>
    </Container>
  );
}
