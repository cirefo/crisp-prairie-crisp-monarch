import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { DiamondMark } from "@/components/marks";
import { PageHero } from "@/components/page-hero";
import { Container, Section } from "@/components/section";

export const Route = createFileRoute("/services/airbnb")({
  component: AirbnbPage,
  head: () => ({
    meta: [
      {
        title: "Airbnb cleaning near DFW | Grapevine, Dallas, Frisco — Graceful Order",
      },
      {
        name: "description",
        content:
          "Airbnb cleaning near me in Grapevine, Dallas, and Frisco. Guest-ready turnovers with a checklist a host can trust — plus organizing for primary homes.",
      },
    ],
  }),
});

function AirbnbPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Short-term rentals"
        title="Airbnb cleaning near DFW — guest-ready, not guessed."
        lede="Grapevine sits against the airport. Dallas and Frisco hosts turn units on tight clocks. Graceful Order runs a checklist plus pride: linens, kitchen, hidden crumbs, restock notes. Same standard as a primary home."
      />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-medium">On every turnover</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Full clean of living space, kitchen, baths",
                "Linens reset to your house standard",
                "Kitchen restock notes (coffee, paper, dish soap)",
                "Hidden crumbs, hair, high-touch sanitizing",
                "Optional closet and pantry systems for supplies",
                "Photo or note if something needs the owner",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-ink-soft">
                  <DiamondMark className="mt-1 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8">
              <Link to="/quote" search={{ kind: "maintenance" }}>
                Price a turnover
              </Link>
            </Button>
          </div>
          <img
            src="/images/bedroom.jpg"
            alt="A serene guest bedroom made to hotel standard."
            className="photo aspect-4/3 w-full rounded-xl object-cover"
          />
        </Container>
      </Section>
      <CtaBand
        title="Hosts, send the unit size."
        lede="Use the quote calculator with your bedroom and bath count, then mention it is a short-term rental in the notes."
      />
    </main>
  );
}
