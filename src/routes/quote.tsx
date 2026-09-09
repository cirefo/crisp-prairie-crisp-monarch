import { createFileRoute } from "@tanstack/react-router";
import { QuoteCalculator } from "@/components/quote-calculator";
import { PageHero } from "@/components/page-hero";
import { Container, Section } from "@/components/section";
import type { ServiceKind } from "@/lib/pricing";

const KINDS: ServiceKind[] = ["maintenance", "deep", "reset", "move"];

function isKind(value: unknown): value is ServiceKind {
  return typeof value === "string" && (KINDS as string[]).includes(value);
}

export const Route = createFileRoute("/quote")({
  validateSearch: (search: Record<string, unknown>): { kind?: ServiceKind } => ({
    kind: isKind(search.kind) ? search.kind : undefined,
  }),
  component: QuotePage,
  head: () => ({
    meta: [
      { title: "Request a quote | Graceful Order pricing" },
      {
        name: "description",
        content:
          "Transparent Graceful Order pricing: recurring 3 bed / 2 bath $150, deep clean $350, 4+ bedroom deep clean $500. Add bedrooms, baths, and organizing — then send Amanda a quote.",
      },
    ],
  }),
});

function QuotePage() {
  const { kind } = Route.useSearch();
  return (
    <main id="main">
      <PageHero
        eyebrow="Pricing"
        title="A clear number. Then a conversation."
        lede="The calculator uses the published menu — 3 bedroom / 2 bath as the starting home, extras itemized, organizing add-ons optional. Send it, and Amanda confirms timing within one business day."
      />
      <Section>
        <Container>
          <QuoteCalculator initialKind={kind} />
        </Container>
      </Section>
    </main>
  );
}
