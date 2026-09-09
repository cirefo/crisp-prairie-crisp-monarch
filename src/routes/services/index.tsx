import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PILLARS } from "@/lib/content";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Container, Section } from "@/components/section";

export const Route = createFileRoute("/services/")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services | Organizing, cleaning, decluttering — Graceful Order" },
      {
        name: "description",
        content:
          "Organizing, cleaning, sanitizing, decluttering, and Airbnb turnovers from Graceful Order. North Dallas homes that need a system, not just a wipe-down.",
      },
    ],
  }),
});

const extra = [
  {
    title: "Airbnb & guest turnovers",
    href: "/services/airbnb",
    body: "Guest-ready checklists for Grapevine, Dallas, and Frisco short-term rentals — linens, kitchen, hidden crumbs, restock notes.",
  },
  {
    title: "Garage & pantry systems",
    href: "/services/organizing",
    body: "The rooms that quietly run the house. Labeled, zoned, and built to survive a Texas week.",
  },
];

function ServicesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Services"
        title="Organizing with care, clarity, and grace."
        lede="Every offering is available on its own. Together they are the studio: a clean house with a system, kept on a rhythm you do not have to heroically maintain."
      />
      <Section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {PILLARS.map((pillar) => (
              <Link
                key={pillar.slug}
                to={pillar.href}
                className="group overflow-hidden rounded-xl bg-surface shadow-card hover:shadow-card-hover"
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
                  <h2 className="mt-2 font-display text-2xl font-medium text-ink">
                    {pillar.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {pillar.body}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-rose-deep">
                    Details
                    <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {extra.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="rounded-xl bg-ivory p-6 shadow-card hover:shadow-card-hover"
              >
                <h2 className="font-display text-2xl font-medium text-ink">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm text-ink-soft">{item.body}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand />
    </main>
  );
}
