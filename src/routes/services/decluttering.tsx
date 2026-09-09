import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Container, Section } from "@/components/section";

export const Route = createFileRoute("/services/decluttering")({
  component: DeclutterPage,
  head: () => ({
    meta: [
      { title: "Kind decluttering in North Dallas | Graceful Order" },
      {
        name: "description",
        content:
          "Decluttering with care in Plano, Frisco, Dallas, and nearby cities. Keep, relocate, release — never without you. Then we organize so the space stays clear.",
      },
    ],
  }),
});

function DeclutterPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Decluttering"
        title="Kind, not extreme."
        lede="We do not score your life by empty shelves. We help a house tell the truth about what you use, love, and are ready to release — then we give what stays a home."
      />
      <Section>
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src="/images/mudroom.jpg"
            alt="A calm mudroom after decluttering and organizing."
            className="photo aspect-4/3 w-full rounded-xl object-cover"
          />
          <div>
            <h2 className="font-display text-3xl font-medium">
              Keep. Relocate. Release.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Overwhelmed clients are often one unkind comment away from
              shutting down. Amanda’s rule is simple: nothing leaves without
              you. Sorting is a conversation. Donation is a decision. The
              goal is ease — not a personality you will not recognize on
              Monday.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Decluttering without organizing is just a thinner pile. That is
              why this work almost always lives inside The Graceful Reset, or
              as a room-by-room add-on beside a deep clean.
            </p>
            <Button asChild className="mt-8">
              <Link to="/quote" search={{ kind: "reset" }}>
                Start with a Reset
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
      <CtaBand title="A fresh start, without the lecture." />
    </main>
  );
}
