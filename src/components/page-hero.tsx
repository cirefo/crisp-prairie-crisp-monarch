import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/section";
import { Rule } from "@/components/marks";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <div className="border-b border-border bg-ivory">
      <Container className="py-14 sm:py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium text-ink sm:text-5xl">
          {title}
        </h1>
        <Rule className="mt-6 max-w-36" />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
          {lede}
        </p>
        {children}
      </Container>
    </div>
  );
}
