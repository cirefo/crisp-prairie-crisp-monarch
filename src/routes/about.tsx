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
          "Amanda French is the trusted individual behind Graceful Order — house cleaning, organizing, décor support, and construction or move-in cleans across North Dallas.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="About"
        title="I’m Amanda. This is a one-woman service on purpose."
        lede="People around here aren’t looking for another national crew. They want someone they can trust in the house — flexible hours, their own supplies, and the patience to finish a garage. That’s Graceful Order."
      />

      <Section>
        <Container className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src="/images/work-kitchen-after.jpg"
              alt="A kitchen after Amanda’s clean and reset."
              className="photo aspect-3/2 w-full rounded-xl object-cover"
            />
            <img
              src="/images/work-living-navy.jpg"
              alt="A living room after cleaning and décor placement."
              className="photo mt-4 aspect-4/3 w-full rounded-xl object-cover"
            />
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-medium text-ink">
              A hidden-gem kind of clean.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                Graceful Order Cleaning is a smaller local business for house
                cleaning, home décor support, and household organizing. I take
                apartments and two-story houses, basic cleans and deep cleans,
                holiday ready-sets, move-ins, and construction cleanups. If
                it lives in a North Dallas home and it’s been putting off the
                calm, it’s probably in my week.
              </p>
              <p>
                I’m detail-oriented without being rigid, and I price the work
                so you can actually keep a rhythm. Moderate lifting is part of
                the job — closets, garages, and rooms don’t clear themselves.
                I bring my supplies. You don’t have to run to the store the
                night before.
              </p>
              <p>
                The last name is French. The promise is simpler: kindness plus
                precision, and a person who comes back. Because you have better
                things to do.
              </p>
              <p>
                I serve Plano, Allen, Carrollton, Dallas, Garland, Rowlett,
                McKinney, Frisco, Mesquite, and Grapevine. If your house is
                tired, that’s enough information to start.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link to="/quote">Request a quote</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">Write me a note</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-ivory">
        <Container>
          <h2 className="font-display text-3xl font-medium text-ink">
            How a day with me actually goes
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
