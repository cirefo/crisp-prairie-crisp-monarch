import { createFileRoute, Link } from "@tanstack/react-router";
import { PACKAGES } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { DiamondMark } from "@/components/marks";
import { PageHero } from "@/components/page-hero";
import { Container, Section } from "@/components/section";

export const Route = createFileRoute("/packages")({
  component: PackagesPage,
  head: () => ({
    meta: [
      { title: "Signature packages | Graceful Order" },
      {
        name: "description",
        content:
          "The Graceful Reset, Graceful Maintenance, and Move With Grace — repeatable packages for cleaning, decluttering, and organizing in North Dallas.",
      },
    ],
  }),
});

function PackagesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Packages"
        title="Repeatable on purpose."
        lede="You can book a single closet or a single deep clean. Most homes do better with a named package — a true start, then a rhythm, or a move that does not eat the month."
      />
      <Section>
        <Container className="space-y-16">
          {PACKAGES.map((pkg, index) => (
            <article
              key={pkg.id}
              className="grid items-center gap-8 lg:grid-cols-12"
            >
              <div
                className={
                  index % 2 === 1
                    ? "lg:col-span-6 lg:order-2"
                    : "lg:col-span-6"
                }
              >
                <img
                  src={pkg.image}
                  alt=""
                  className="photo aspect-4/3 w-full rounded-xl object-cover"
                />
              </div>
              <div className="lg:col-span-6">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold-deep">
                  {pkg.priceHint}
                </p>
                <h2 className="mt-2 font-display text-3xl font-medium text-ink sm:text-4xl">
                  {pkg.name}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">
                  {pkg.summary} {pkg.ideal}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-ink-soft">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <DiamondMark className="mt-1 shrink-0 text-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8">
                  <Link to="/quote" search={{ kind: pkg.id }}>
                    Estimate {pkg.name}
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </Container>
      </Section>
      <Section className="bg-ivory">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl font-medium text-ink">
            Prefer to choose à la carte?
          </h2>
          <p className="mt-4 text-ink-soft">
            Deep cleans, recurring visits, closet resets, pantry systems, garage
            organization, ovens, grout treatments — all live in the quote
            calculator. Packages are simply the combinations Amanda recommends
            most.
          </p>
          <Button asChild variant="outline" className="mt-6">
            <Link to="/services">Browse services</Link>
          </Button>
        </Container>
      </Section>
      <CtaBand />
    </main>
  );
}
