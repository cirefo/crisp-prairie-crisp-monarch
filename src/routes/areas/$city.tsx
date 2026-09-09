import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { cityBySlug, CITIES } from "@/lib/cities";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { DiamondMark } from "@/components/marks";
import { Container, Eyebrow, Section } from "@/components/section";
import { PACKAGES } from "@/lib/content";

export const Route = createFileRoute("/areas/$city")({
  loader: ({ params }) => {
    const city = cityBySlug(params.city);
    if (!city) throw notFound();
    return { city };
  },
  component: CityPage,
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.city.headline ?? "Service area"} | Graceful Order` },
      {
        name: "description",
        content: loaderData?.city.meta ?? "",
      },
    ],
  }),
});

function CityPage() {
  const { city } = Route.useLoaderData();
  const others = CITIES.filter((item) => item.slug !== city.slug).slice(0, 6);

  return (
    <main id="main">
      <div className="border-b border-border bg-ivory">
        <Container className="py-14 sm:py-20">
          <Eyebrow>
            {city.county} · {city.drive}
          </Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium text-ink sm:text-5xl">
            {city.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {city.intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link to="/quote">{`Quote a ${city.name} visit`}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/services/organizing">Organizing details</Link>
            </Button>
          </div>
        </Container>
      </div>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-medium text-ink">
              How Graceful Order works in {city.name}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">{city.body}</p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">{city.angle}</p>
            <p className="mt-6 text-sm font-medium text-gold-deep">Neighborhoods we know</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {city.neighborhoods.map((n) => (
                <li
                  key={n}
                  className="rounded-full bg-ivory px-3 py-1.5 text-sm text-ink-soft"
                >
                  {n}
                </li>
              ))}
            </ul>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-xl bg-surface p-6 shadow-card">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-gold-deep">
                Start here
              </p>
              <ul className="mt-4 space-y-4">
                {PACKAGES.map((pkg) => (
                  <li key={pkg.id}>
                    <Link
                      to="/quote"
                      search={{ kind: pkg.id }}
                      className="block rounded-lg p-3 hover:bg-ivory"
                    >
                      <span className="font-display text-lg text-ink">{pkg.name}</span>
                      <span className="mt-1 block text-sm text-ink-soft">{pkg.summary}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </Section>

      <Section className="bg-ivory">
        <Container>
          <h2 className="font-display text-2xl font-medium">
            Also serving nearby
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/areas/$city"
                  params={{ city: item.slug }}
                  className="flex min-h-12 items-center gap-2 rounded-lg bg-surface px-4 py-3 text-sm shadow-card"
                >
                  <DiamondMark className="text-gold" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <CtaBand
        title={`A quieter house in ${city.name}.`}
        lede="Send the bedroom and bath count. Amanda will confirm timing for your street."
      />
    </main>
  );
}
