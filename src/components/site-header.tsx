import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { Container } from "./container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="font-semibold tracking-tight">
          {site.name}
        </Link>
        <nav aria-label="Main">
          <ul className="flex items-center gap-5 text-sm text-muted sm:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
