import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function FaqList({ items = FAQS }: { items?: { q: string; a: string }[] }) {
  return (
    <Accordion.Root type="single" collapsible className="divide-y divide-border">
      {items.map((item) => (
        <Accordion.Item key={item.q} value={item.q} className="py-1">
          <Accordion.Header>
            <Accordion.Trigger
              className={cn(
                "group flex w-full min-h-14 items-center justify-between gap-4 py-3 text-left font-medium text-ink",
              )}
            >
              <span className="text-[0.98rem] leading-snug">{item.q}</span>
              <ChevronDown className="size-4 shrink-0 text-gold-deep transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-none">
            <p className="pb-5 pr-8 text-sm leading-relaxed text-ink-soft sm:text-base">
              {item.a}
            </p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
