// Personal details shown across the site. Edit these to make it yours.
export const site = {
  name: "Your Name",
  role: "Software Developer",
  tagline:
    "I build fast, accessible web apps and enjoy turning rough ideas into polished products.",
  location: "Your City, Country",
  email: "you@example.com",
  about: [
    "I'm a developer who likes working across the stack — from designing interfaces to wiring up APIs and databases.",
    "This site collects the projects I'm working on right now and the ones I'm proud of. Each project page covers what I built, why, and what I learned along the way.",
  ],
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-username" },
  ],
} as const;

export const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;
