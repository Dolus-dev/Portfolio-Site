// Personal details shown across the site. Edit these to make it yours.
export const site = {
	name: "Andrei Anastasiu",
	role: "Software Engineering Co-op Student",
	tagline:
		"Full-stack developer building fast, accessible web apps — from React frontends to PostgreSQL-backed APIs — and quick to pick up new languages and tools.",
	location: "Scarborough, Ontario, Canada",
	email: "edward.anastasiu@ontariotechu.net",
	// Served from public/ — replace public/resume.pdf to update it.
	resume: "/resume.pdf",
	about: [
		"I'm a Software Engineering Co-op student at Ontario Tech University, with two years of hands-on full-stack development in TypeScript, JavaScript, and Java.",
		"This site collects the projects I'm working on right now and the ones I'm proud of. Each project page covers what I built, why, and what I learned along the way.",
	],
	skills: [
		"TypeScript",
		"JavaScript",
		"React",
		"Next.js",
		"Node.js",
		"Express.js",
		"Tailwind CSS",
		"PostgreSQL",
		"Redis",
	],
	socials: [
		{ label: "GitHub", href: "https://github.com/Dolus-dev" },
		{
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/andrei-anastasiu/",
		},
	],
} as const;

export const navLinks = [
	{ label: "Projects", href: "/projects" },
	{ label: "About", href: "/#about" },
	{ label: "Contact", href: "/#contact" },
] as const;
