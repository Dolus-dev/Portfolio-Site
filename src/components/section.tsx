import { Container } from "./container";

export function Section({
  id,
  title,
  action,
  children,
}: {
  id?: string;
  title: string;
  /** Optional element aligned to the right of the heading, e.g. a "View all" link. */
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border py-16 sm:py-20">
      <Container>
        <div className="mb-10 flex items-baseline justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          {action}
        </div>
        {children}
      </Container>
    </section>
  );
}
