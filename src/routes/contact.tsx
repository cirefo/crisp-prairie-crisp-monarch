import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CITIES } from "@/lib/cities";
import { SITE } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { Container, Section } from "@/components/section";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Amanda French | Graceful Order" },
      {
        name: "description",
        content:
          "Write Graceful Order. Amanda French replies within one business day for homes in Plano, Frisco, McKinney, Dallas, and nearby cities.",
      },
    ],
  }),
});

const fieldClass =
  "h-11 w-full rounded-md bg-surface px-3 text-sm text-ink shadow-card outline-none placeholder:text-muted focus:shadow-[0_0_0_2px_rgba(183,110,125,0.45)]";

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const record = {
      at: new Date().toISOString(),
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      city: String(data.get("city") || ""),
      message: String(data.get("message") || ""),
    };
    try {
      const existing = JSON.parse(
        localStorage.getItem("graceful-order-notes") || "[]",
      ) as unknown[];
      localStorage.setItem(
        "graceful-order-notes",
        JSON.stringify([record, ...existing].slice(0, 20)),
      );
    } catch {
      /* ignore */
    }
    setName(record.name);
    setSent(true);
  }

  return (
    <main id="main">
      <PageHero
        eyebrow="Contact"
        title="Write Amanda."
        lede="Quotes are fastest through the calculator. This page is for timing questions, gift certificates, and houses that do not fit a form."
      />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-gold-deep">
              Studio
            </p>
            <p className="mt-3 font-display text-2xl">{SITE.owner}</p>
            <p className="mt-2 text-ink-soft">{SITE.region}</p>
            <p className="mt-4 text-sm text-ink-soft">
              Replies within one business day. If you already have an estimate,
              mention it in the note.
            </p>
            <Link
              to="/quote"
              className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-rose-deep"
            >
              Prefer the quote calculator →
            </Link>
          </div>
          <div className="lg:col-span-7">
            {sent ? (
              <div className="rounded-xl bg-surface p-8 shadow-card">
                <h2 className="font-display text-2xl">Thank you{name ? `, ${name}` : ""}.</h2>
                <p className="mt-3 text-ink-soft">
                  Amanda will write back within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4">
                <label className="block text-sm font-medium">
                  Name
                  <input name="name" required autoComplete="name" className={cn(fieldClass, "mt-1.5")} />
                </label>
                <label className="block text-sm font-medium">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={cn(fieldClass, "mt-1.5")}
                  />
                </label>
                <label className="block text-sm font-medium">
                  City
                  <select name="city" className={cn(fieldClass, "mt-1.5")} defaultValue="plano">
                    {CITIES.map((city) => (
                      <option key={city.slug} value={city.slug}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm font-medium">
                  Note
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className={cn(fieldClass, "mt-1.5 h-auto py-3")}
                  />
                </label>
                <Button type="submit" size="lg">
                  Send note
                </Button>
              </form>
            )}
          </div>
        </Container>
      </Section>
    </main>
  );
}
