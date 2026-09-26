import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="mt-4 text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex h-12 items-center rounded-full bg-accent px-6 font-medium text-accent-foreground transition-opacity hover:opacity-90"
      >
        Back home
      </Link>
    </Container>
  );
}
