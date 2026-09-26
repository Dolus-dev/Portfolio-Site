import { site } from "@/lib/site";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8 text-sm text-muted">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <ul className="flex gap-6">
          {site.socials.map((social) => (
            <li key={social.href}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
