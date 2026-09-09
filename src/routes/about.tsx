import { createFileRoute, Link } from "@tanstack/react-router";
import { METHOD } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Container, Section } from "@/components/section";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Amanda French | Graceful Order" },
      {
        name: "description",
        content:
          "Amanda French founded Graceful Order for homes that need more than a wipe-down: cleaning, decluttering, and organizing with kindness and precision across North Dallas.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="About"
        title="Amanda French. Kindness + precision."
        lede="The last name is not a costume. It is a small permission to take order seriously — and to do it with grace instead of rigidity. Graceful Order is her studio for homes that have better things to do than start over every weekend."
      />

      <Section>
        <Container className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src="/images/pantry.jpg"
              alt="A pantry shelf after Amanda’s organizing — labeled jars, even rows, warm light."
              className="photo aspect-3/2 w-full rounded-xl object-cover"
            />
            <img
              src="/images/closet.jpg"
              alt="An organized closet with rose hangers and folded knits."
              className="photo mt-4 aspect-4/3 w-full rounded-xl object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-medium text-ink">
              A French approach to an American week.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                Most cleaning companies are paid to make a room look untouched.
                Most organizing companies are paid to make a room look like a
                catalog. Amanda noticed that neither visit lasts unless the
                house is given a system — and a person who comes back.
              </p>
              <p>
                Graceful Order sits in that gap. She cleans. She sanitizes. She
                declutters without humiliation. Then she organizes: zones,
                labels, reach, and a maintenance rhythm that a real Plano or
                Frisco week can keep. The brand is calm and polished because
                the work is. The wit is light because overwhelmed clients do
                not need a performance.
              </p>
              <p>
                The “French touch” is mise en place. Everything used tomorrow
                has a home tonight. Not rigid. Not precious. Just careful.
              </p>
              <p>
                She serves Plano, Allen, Carrollton, Dallas, Garland, Rowlett,
                McKinney, Frisco, Mesquite, and Grapevine. If your house is
                tired, that is enough information to start.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link to="/quote">Request a quote</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">Write a note</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-ivory">
        <Container>
          <h2 className="font-display text-3xl font-medium text-ink">
            How a day with Amanda actually goes
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {METHOD.map((item) => (
              <li key={item.step} className="rounded-xl bg-surface p-6 shadow-card">
                <p className="font-display text-2xl text-gold">{item.step}</p>
                <h3 className="mt-2 font-display text-xl font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <CtaBand
        title="Bring ease, order, and peace to the space."
        lede="A walk-through, a clear estimate, and a plan that includes organizing — not just the shine."
      />
    </main>
  );
}
