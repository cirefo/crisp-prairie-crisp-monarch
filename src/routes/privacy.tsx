import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Container, Section } from "@/components/section";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy | Graceful Order" },
      {
        name: "description",
        content: "How Graceful Order handles quote and contact details.",
      },
    ],
  }),
});

function PrivacyPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Privacy"
        title="Your house is private. So is your note."
        lede="Quote and contact details are used to reply about scheduling and scope. They are not sold, and they are not used as a mailing list without your say."
      />
      <Section>
        <Container className="max-w-2xl space-y-4 text-ink-soft">
          <p>
            This site collects name, email, optional phone, city, and the
            details you type into a quote or note so Amanda French can respond.
            In this preview, those records stay on your device.
          </p>
          <p>
            Photographs include rooms Amanda has cleaned and organized. They
            are shared as examples of the work, not as advertising for a
            particular address.
          </p>
        </Container>
      </Section>
    </main>
  );
}
