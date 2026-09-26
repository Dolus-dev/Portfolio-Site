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
		slug: "loki",
		title: "Loki",
		summary:
			"A general-purpose Discord bot with a companion web dashboard, built in a TypeScript monorepo.",
		description: [
			"A custom Discord bot and configuration dashboard that consolidates several third-party community-management tools into one system, so server admins have a single place to manage them.",
			"Backend built with Express.js and TypeORM on PostgreSQL, with Redis caching on key API routes that cut response times by over 50%. Frontend dashboard built with Next.js and Tailwind CSS.",
		],
		status: "In progress",
		year: 2024,
		tags: [
			"TypeScript",
			"Discord.js",
			"Next.js",
			"Express.js",
			"PostgreSQL",
			"Redis",
		],
		featured: true,
		links: {
			source: "https://github.com/Dolus-dev/Loki_v3",
		},
	},

	{
		slug: "task-management-app",
		title: "Task Management App",
		summary:
			"A Trello-inspired task management web app built as a final group project for a web development course.",
		description: [
			"Built as the final group project for SOFE2800U Web Development at Ontario Tech University. My team and I scoped the deliverables together, then our professor moved the due date earlier than originally planned, so I adjusted the plan and built the application myself.",
			"Reusable board components built with React, TypeScript, and Tailwind CSS, plus working examples comparing client-side and server-side rendering with the Next.js App Router. Presented to a panel of Teaching Assistants and earned a final project score of 100%.",
		],
		status: "Completed",
		year: 2025,
		tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
		featured: true,
		links: {
			source: "https://github.com/Dolus-dev/SOFE-2800UFinal-Project",
		},
	},
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
	return projects.find((p) => p.slug === slug);
}
