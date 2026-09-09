import { createFileRoute } from "@tanstack/react-router";
import { FaqList } from "@/components/faq-list";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Container, Section } from "@/components/section";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "FAQ | Pricing, organizing, and visits — Graceful Order" },
      {
        name: "description",
        content:
          "Graceful Order FAQ: pricing for 3 bed / 2 bath homes, organizing vs cleaning, cities served, Airbnb turnovers, and whether you need to be home.",
      },
    ],
  }),
});

function FaqPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="FAQ"
        title="The practical questions."
        lede="Pricing, organizing, cities, and what happens on the first visit. If your question is not here, the quote form has a notes field — Amanda reads it."
      />
      <Section>
        <Container className="max-w-3xl">
          <FaqList />
        </Container>
      </Section>
      <CtaBand />
    </main>
  );
}
