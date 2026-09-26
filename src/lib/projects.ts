export type ProjectStatus = "In progress" | "Completed" | "Archived";

export type Project = {
  /** Used in the URL: /projects/<slug> */
  slug: string;
  title: string;
  /** One-line summary shown on cards. */
  summary: string;
  /** Longer write-up shown on the project page, one entry per paragraph. */
  description: string[];
  status: ProjectStatus;
  year: number;
  tags: string[];
  /** Shown on the home page when true. */
  featured?: boolean;
  links?: {
    live?: string;
    source?: string;
  };
};

// Placeholder projects — replace them with your own.
export const projects: Project[] = [
  {
    slug: "portfolio-site",
    title: "Portfolio Site",
    summary: "This website: a statically generated portfolio built with Next.js.",
    description: [
      "A personal site to showcase the projects I'm working on. Each project gets its own page, generated at build time from a single data file.",
      "Built with the Next.js App Router, React Server Components and Tailwind CSS, with automatic light and dark themes.",
    ],
    status: "In progress",
    year: 2026,
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
    links: {
      source: "https://github.com/dolus-dev/Portfolio-Site",
    },
  },
  {
    slug: "task-tracker",
    title: "Task Tracker",
    summary: "A keyboard-first to-do app with projects, due dates and offline sync.",
    description: [
      "Describe the problem this project solves and who it's for.",
      "Explain the interesting technical decisions, the challenges you ran into, and what you would do differently next time.",
    ],
    status: "Completed",
    year: 2025,
    tags: ["React", "IndexedDB", "PWA"],
    featured: true,
    links: {
      live: "https://example.com",
      source: "https://github.com/your-username/task-tracker",
    },
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    summary: "Live forecasts and historical charts for any city, powered by a public API.",
    description: [
      "Describe the problem this project solves and who it's for.",
      "Explain the interesting technical decisions, the challenges you ran into, and what you would do differently next time.",
    ],
    status: "Completed",
    year: 2025,
    tags: ["TypeScript", "REST APIs", "Charts"],
    featured: true,
    links: {
      source: "https://github.com/your-username/weather-dashboard",
    },
  },
  {
    slug: "cli-toolkit",
    title: "CLI Toolkit",
    summary: "A small set of command-line utilities for automating everyday dev chores.",
    description: [
      "Describe the problem this project solves and who it's for.",
      "Explain the interesting technical decisions, the challenges you ran into, and what you would do differently next time.",
    ],
    status: "Archived",
    year: 2024,
    tags: ["Node.js", "CLI"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
