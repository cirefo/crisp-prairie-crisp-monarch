import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { DiamondMark } from "@/components/marks";
import { PageHero } from "@/components/page-hero";
import { Container, Section } from "@/components/section";

export const Route = createFileRoute("/services/cleaning")({
  component: CleaningPage,
  head: () => ({
    meta: [
      {
        title: "Recurring & deep cleaning in Frisco, Plano & McKinney | Graceful Order",
      },
      {
        name: "description",
        content:
          "Recurring cleaning in Frisco TX and deep cleaning in McKinney, Plano, and Dallas. $150 per visit for 3 bed / 2 bath; $350 deep clean — plus sanitizing and light organizing.",
      },
    ],
  }),
});

function CleaningPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Cleaning & sanitizing"
        title="Recurring cleaning that includes the corners."
        lede="A 3 bedroom, 2 bath home is $150 per visit for Graceful Maintenance, $350 for a deep clean. Larger homes and extras are itemized. The difference is what we do with the piles: we do not dust around them."
      />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-medium">
              Two ways to keep a house honest
            </h2>
            <div className="mt-8 space-y-6">
              <div className="rounded-xl bg-surface p-6 shadow-card">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-gold-deep">
                  From $150 · 3 bed / 2 bath
                </p>
                <h3 className="mt-1 font-display text-2xl">Graceful Maintenance</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Weekly, biweekly, or monthly. Thorough recurring clean plus
                  light organizing of systems already in place. The repeatable
                  service the brand is built on.
                </p>
              </div>
              <div className="rounded-xl bg-surface p-6 shadow-card">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-gold-deep">
                  From $350 · 3 bed / 2 bath · $500 for 4+ / 2.5
                </p>
                <h3 className="mt-1 font-display text-2xl">Deep clean</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Baseboards, grout lines, the oven you have been avoiding,
                  inside the microwave, the shower glass. Pair it with The
                  Graceful Reset if the house also needs a system.
                </p>
              </div>
            </div>
            <Button asChild className="mt-8">
              <Link to="/quote" search={{ kind: "maintenance" }}>
                Price a recurring visit
              </Link>
            </Button>
          </div>
          <div className="grid gap-4">
            <img
              src="/images/bathroom.jpg"
              alt="Spa-like bathroom after a deep clean."
              className="photo aspect-4/3 w-full rounded-xl object-cover"
            />
            <img
              src="/images/kitchen.jpg"
              alt="Kitchen after a professional deep clean."
              className="photo aspect-4/3 w-full rounded-xl object-cover"
            />
          </div>
        </Container>
      </Section>
      <Section className="bg-ivory">
        <Container>
          <h2 className="font-display text-3xl font-medium">On the menu</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Kitchen surfaces, sink, appliance exteriors",
              "Bathrooms, showers, mirrors, sanitizing",
              "Floors, dusting, beds made to house standard",
              "Microwave, oven, gas stove as add-ons",
              "Extensive grout treatment as an add-on",
              "Interior windows, baseboards, laundry room",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-2 rounded-lg bg-surface px-4 py-3 text-sm text-ink-soft shadow-card"
              >
                <DiamondMark className="mt-0.5 text-gold" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <CtaBand />
    </main>
  );
}
