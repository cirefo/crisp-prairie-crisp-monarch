import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/section";

export function CtaBand({
  title = "Ready for a quieter house?",
  lede = "Tell me the rooms, the rhythm, and the city. You’ll see a clear estimate before I knock — and I bring my own supplies.",
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <section className="bg-ink text-ivory">
      <Container className="flex flex-col items-start justify-between gap-8 py-16 sm:py-20 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gold">
            Request a quote
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-champagne">{lede}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button asChild variant="primary" size="lg" className="w-full sm:w-auto">
            <Link to="/quote">
              Build your estimate
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="inverse" size="lg" className="w-full sm:w-auto">
            <Link to="/contact">Write Amanda</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
