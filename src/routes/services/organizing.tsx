import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { DiamondMark } from "@/components/marks";
import { PageHero } from "@/components/page-hero";
import { Container, Section } from "@/components/section";

export const Route = createFileRoute("/services/organizing")({
  component: OrganizingPage,
  head: () => ({
    meta: [
      {
        title: "Home organizer in Plano, Frisco, McKinney & Dallas | Graceful Order",
      },
      {
        name: "description",
        content:
          "Home organizer in Plano TX and across North Dallas. Closets, pantries, garages, and offices — systems you can keep, with cleaning that supports them.",
      },
    ],
  }),
});

const rooms = [
  "Walk-in and reach-in closets",
  "Pantries and kitchen cabinets",
  "Garages and mudrooms",
  "Linen closets and baths",
  "Home offices and paper",
  "Kids’ rooms and play zones",
  "Laundry rooms",
  "Entry systems that actually catch the day",
];

function OrganizingPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Organizing"
        title="Closets, garages, and rooms that have been waiting."
        lede="This is the part most cleaning companies skip. I help clear, sort, and place — moderate lifting included — so the house is easier to live in, not just photographed."
      />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <img
              src="/images/work-living-wide.jpg"
              alt="Living room after cleaning and décor placement."
              className="photo aspect-4/3 w-full rounded-xl object-cover"
            />
          </div>
          <div className="lg:col-span-6">
            <h2 className="font-display text-3xl font-medium text-ink">
              Structure, not a personality transplant.
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              You don’t need a stricter version of yourself. You need a garage
              you can park in and a closet that closes. I build around how you
              actually live — then I come back so it holds.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {rooms.map((room) => (
                <li key={room} className="flex gap-2 text-sm text-ink-soft">
                  <DiamondMark className="mt-1 text-gold" />
                  {room}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8">
              <Link to="/quote" search={{ kind: "reset" }}>
                Estimate a Reset
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
      <Section className="bg-ivory">
        <Container className="grid gap-8 lg:grid-cols-3">
          <article className="rounded-xl bg-surface p-6 shadow-card">
            <img
              src="/images/pantry.jpg"
              alt="Organized pantry jars"
              className="photo mb-5 aspect-3/2 w-full rounded-lg object-cover"
            />
            <h3 className="font-display text-xl font-medium">Pantry</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Zones, labels, and reach. From $110 as an add-on — often the
              fastest visible win in a Frisco or Plano kitchen.
            </p>
          </article>
          <article className="rounded-xl bg-surface p-6 shadow-card">
            <img
              src="/images/garage.jpg"
              alt="Organized garage"
              className="photo mb-5 aspect-3/2 w-full rounded-lg object-cover"
            />
            <h3 className="font-display text-xl font-medium">Garage</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Dallas garage organization with wall systems and honest zones.
              From $225. The room that stops being a second attic.
            </p>
          </article>
          <article className="rounded-xl bg-surface p-6 shadow-card">
            <img
              src="/images/mudroom.jpg"
              alt="Organized mudroom"
              className="photo mb-5 aspect-3/2 w-full rounded-lg object-cover"
            />
            <h3 className="font-display text-xl font-medium">Closet reset</h3>
            <p className="mt-2 text-sm text-ink-soft">
              One closet, sorted and placed, from $95. The Graceful Reset
              folds several of these into a whole-home day.
            </p>
          </article>
        </Container>
      </Section>
      <CtaBand title="Let’s give the house a plan." />
    </main>
  );
}
