import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CITIES } from "@/lib/cities";
import { METHOD, PACKAGES, PILLARS, SITE, WORK } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { DiamondMark, Rule } from "@/components/marks";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/section";
import { formatUsd, cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title: "Graceful Order | House cleaning & organizing in Plano, TX",
      },
      {
        name: "description",
        content:
          "Because you have better things to do. Amanda French — a trusted local for house cleaning, organizing, and construction or move-in cleans across Plano, Frisco, McKinney, Dallas, and nearby cities.",
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
    "Smaller local house cleaning, home décor support, and household organizing for North Dallas and Collin County. Trusted individual, not a rotating crew.",
  areaServed: CITIES.map((city) => ({
    "@type": "City",
    name: `${city.name}, TX`,
  })),
  slogan: "Because you have better things to do.",
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
            <Eyebrow>A trusted local · Plano to Grapevine</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Because you have better things to do.
            </h1>
            <Rule className="mt-6 max-w-40" />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              I’m {SITE.owner}. Not a franchise, not a rotating crew — a
              smaller local service for people who want one trusted person in
              the house. Cleaning, organizing, décor help, and the messy jobs
              before holidays, move-ins, or construction wrap. I bring my own
              supplies. Apartments to two-story homes. Flexible hours.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/quote">
                  Request a quote
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/packages">See how I work</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm italic text-muted">
              Detail-oriented, reasonably priced, and meant to last.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-xl shadow-card">
              <img
                src="/images/work-granite-bar.jpg"
                alt="Granite kitchen bar after a Graceful Order clean — clear, shining, ready."
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
            eyebrow="What I do"
            title="House cleaning, organizing, and the jobs in between."
            lede="Community members keep looking for a trusted individual instead of a big company. That’s the whole business: personalized service, hidden-gem care, and enough lifting to actually finish the garage."
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
            lede="You can book a single closet or a single deep clean. Most homes do better with a named package — a true start, then a visit that comes back."
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
              eyebrow="How a visit actually goes"
              title="Same person. Clear plan. No performance."
              lede="The last name is French. The work is North Texas practical — kind, precise, and done on a schedule that respects yours."
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
            eyebrow="Recent work"
            title="Her houses, not a catalog."
            lede="Real kitchens, real granite, real living rooms. This is the work — including a before and after from a kitchen that needed air."
          />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {WORK.map((shot) => (
              <figure
                key={shot.src}
                className={cn(
                  "overflow-hidden rounded-xl",
                  shot.wide ? "col-span-2" : "col-span-1",
                )}
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="photo aspect-4/3 w-full object-cover"
                />
                <figcaption className="bg-surface px-3 py-2 text-xs text-muted">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Honest pricing"
              title="A 3 bedroom, 2 bath home has a number."
              lede="High-quality work at a price you can keep. Build a live estimate, then send it to me."
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
              title="The practical ones."
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
