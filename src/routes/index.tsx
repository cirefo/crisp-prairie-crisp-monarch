import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CITIES } from "@/lib/cities";
import { METHOD, PACKAGES, PILLARS, SITE } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { DiamondMark, Rule } from "@/components/marks";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/section";
import { formatUsd } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title: "Graceful Order | Home organizer & cleaning in Plano, TX",
      },
      {
        name: "description",
        content:
          "Where calm meets careful order. Amanda French cleans, sanitizes, declutters, and organizes homes in Plano, Frisco, McKinney, Dallas, and nearby cities — with a repeatable rhythm.",
      },
    ],
  }),
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Housekeeper",
  name: "Graceful Order",
  founder: { "@type": "Person", name: "Amanda French" },
  description:
    "Organizing-first cleaning, sanitizing, and decluttering for North Dallas and Collin County homes.",
  areaServed: CITIES.map((city) => ({
    "@type": "City",
    name: `${city.name}, TX`,
  })),
  slogan: "Where calm meets careful order.",
};

function Home() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-ivory">
        <Container className="grid items-center gap-10 py-14 lg:grid-cols-12 lg:gap-12 lg:py-20">
          <div className="lg:col-span-6">
            <Eyebrow>Plano · North Dallas · Collin County</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Where calm meets careful order.
            </h1>
            <Rule className="mt-6 max-w-40" />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              You do not need a stricter version of yourself. You need a home
              that is easier to live in — cleaned with care, organized with
              intention, and kept on a rhythm that lasts. {SITE.owner} built
              Graceful Order for overwhelmed houses that deserve both kindness
              and precision.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/quote">
                  Request a quote
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/packages">See signature packages</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm italic text-muted">
              Thoughtfully arranged. Beautifully maintained.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-xl shadow-card">
              <img
                src="/images/hero-living.jpg"
                alt="A sunlit living room after professional organizing — ivory sofa, ordered shelves, and a calm, lived-in home."
                className="photo aspect-4/3 w-full object-cover lg:aspect-square"
              />
            </div>
          </div>
        </Container>
      </section>

      <div className="border-y border-border bg-surface">
        <Container className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink-soft">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              to="/areas/$city"
              params={{ city: city.slug }}
              className="hover:text-rose-deep"
            >
              {city.name}
            </Link>
          ))}
        </Container>
      </div>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="What she does"
            title="Cleaning is the floor. Organizing is the house standing up straight."
            lede="Graceful Order is not a maid service with a prettier logo. Amanda cleans, sanitizes, and declutters — and then she organizes, so the calm has a place to live. Repeatable on purpose."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {PILLARS.map((pillar) => (
              <Link
                key={pillar.slug}
                to={pillar.href}
                className="group overflow-hidden rounded-xl bg-surface shadow-card transition-[box-shadow] duration-200 hover:shadow-card-hover"
              >
                <img
                  src={pillar.image}
                  alt=""
                  className="photo aspect-4/3 w-full object-cover"
                />
                <div className="p-6">
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold-deep">
                    {pillar.kicker}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-medium text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {pillar.body}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-rose-deep">
                    Learn more
                    <ArrowRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-ivory">
        <Container>
          <SectionHeading
            eyebrow="Signature packages"
            title="A first reset. Then a rhythm."
            lede="Individual services are always available. These three packages are how most homes begin — and how they stay."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <article
                key={pkg.id}
                className="flex flex-col overflow-hidden rounded-xl bg-surface shadow-card"
              >
                <img
                  src={pkg.image}
                  alt=""
                  className="photo aspect-4/3 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-medium text-ink">
                    {pkg.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gold-deep">
                    {pkg.priceHint}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {pkg.summary} {pkg.ideal}
                  </p>
                  <ul className="mt-4 flex-1 space-y-2 text-sm text-ink-soft">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex gap-2">
                        <DiamondMark className="mt-1 shrink-0 text-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-6 w-full">
                    <Link to="/quote" search={{ kind: pkg.id }}>
                      Estimate this package
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The French method"
              title="Mise en place, at home."
              lede="Amanda French — yes, that French — runs the day the way a careful kitchen runs a service: everything has a place, and the place is kind."
            />
          </div>
          <ol className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {METHOD.map((item) => (
              <li key={item.step} className="rounded-xl bg-surface p-6 shadow-card">
                <p className="font-display text-2xl text-gold">{item.step}</p>
                <h3 className="mt-2 font-display text-xl font-medium text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="bg-ivory">
        <Container>
          <SectionHeading
            eyebrow="The rooms"
            title="A fresh start with structure."
            lede="Closets that close. Pantries that tell the truth. Garages that are not a second attic. This is the outcome — not just the absence of clutter."
          />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            <img
              src="/images/closet.jpg"
              alt="A walk-in closet with even hangers and folded stacks."
              className="photo col-span-2 aspect-4/3 rounded-xl object-cover lg:col-span-2"
            />
            <img
              src="/images/pantry.jpg"
              alt="Labeled glass jars on a pantry shelf."
              className="photo aspect-4/3 rounded-xl object-cover"
            />
            <img
              src="/images/bathroom.jpg"
              alt="A marble bathroom after a precise clean."
              className="photo aspect-4/3 rounded-xl object-cover"
            />
            <img
              src="/images/kitchen.jpg"
              alt="A bright kitchen with a clear counter and ordered pantry."
              className="photo aspect-4/3 rounded-xl object-cover"
            />
            <img
              src="/images/mudroom.jpg"
              alt="A mudroom with baskets, hooks, and a calm entry."
              className="photo aspect-4/3 rounded-xl object-cover"
            />
            <img
              src="/images/garage.jpg"
              alt="An organized residential garage with labeled bins."
              className="photo col-span-2 aspect-4/3 rounded-xl object-cover"
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Transparent pricing"
              title="A 3 bedroom, 2 bath home has a number."
              lede="No mystery menus. Build a live estimate from the published rates, then send it to Amanda."
            />
            <Button asChild className="mt-8" size="lg">
              <Link to="/quote">
                Open the calculator
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            <PriceTile
              label="Recurring visit"
              detail="3 bed / 2 bath"
              price={150}
              note="Graceful Maintenance, per visit"
            />
            <PriceTile
              label="Deep clean"
              detail="3 bed / 2 bath"
              price={350}
              note="One-time thorough clean"
            />
            <PriceTile
              label="Deep clean"
              detail="4+ bed / 2.5 bath"
              price={500}
              note="Larger-home base"
            />
            <PriceTile
              label="Add a bedroom"
              detail="Beyond the base"
              price={25}
              note="Full bath +$40 · half bath +$30"
            />
          </div>
        </Container>
      </Section>

      <Section className="bg-ivory">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Questions"
              title="Clear answers for an overwhelmed week."
            />
            <Link
              to="/faq"
              className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-rose-deep"
            >
              All questions
              <ArrowRight className="ml-1 size-4" />
            </Link>
          </div>
          <div className="lg:col-span-8">
            <FaqList />
          </div>
        </Container>
      </Section>

      <CtaBand />
    </main>
  );
}

function PriceTile({
  label,
  detail,
  price,
  note,
}: {
  label: string;
  detail: string;
  price: number;
  note: string;
}) {
  return (
    <div className="rounded-xl bg-surface p-6 shadow-card">
      <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-gold-deep">
        {detail}
      </p>
      <p className="mt-2 font-display text-xl text-ink">{label}</p>
      <p className="mt-2 font-display text-4xl tabular-nums text-ink">
        {formatUsd(price)}
      </p>
      <p className="mt-2 text-sm text-muted">{note}</p>
    </div>
  );
}
