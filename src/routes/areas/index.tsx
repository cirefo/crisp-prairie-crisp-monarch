import { createFileRoute, Link } from "@tanstack/react-router";
import { CITIES } from "@/lib/cities";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Container, Section } from "@/components/section";

export const Route = createFileRoute("/areas/")({
  component: AreasPage,
  head: () => ({
    meta: [
      {
        title: "Service areas | Plano, Frisco, McKinney, Dallas & more — Graceful Order",
      },
      {
        name: "description",
        content:
          "Graceful Order serves Plano, Allen, Carrollton, Dallas, Garland, Rowlett, McKinney, Frisco, Mesquite, and Grapevine, TX — organizing-first cleaning in each city.",
      },
    ],
  }),
});

function AreasPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Areas served"
        title="North Dallas, Collin County, and Grapevine."
        lede="Ten cities, one standard. Dedicated pages so you can see how the work fits the houses on your street — from West Plano estates to DFW short-term rentals."
      />
      <Section>
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CITIES.map((city) => (
              <Link
                key={city.slug}
                to="/areas/$city"
                params={{ city: city.slug }}
                className="rounded-xl bg-surface p-6 shadow-card transition-[box-shadow] duration-150 hover:shadow-card-hover"
              >
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-gold-deep">
                  {city.county}
                </p>
                <h2 className="mt-2 font-display text-2xl font-medium text-ink">
                  {city.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {city.angle}
                </p>
                <p className="mt-4 text-sm font-medium text-rose-deep">
                  {city.neighborhoods.slice(0, 3).join(" · ")}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand />
    </main>
  );
}
