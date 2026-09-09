import { cn } from "@/lib/utils";

export function DiamondMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("size-3.5", className)}
      fill="none"
      aria-hidden
    >
      <rect
        x="5.5"
        y="5.5"
        width="13"
        height="13"
        transform="rotate(45 12 12)"
        stroke="currentColor"
        strokeWidth="1.35"
      />
    </svg>
  );
}

export function Rule({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex items-center gap-3 text-gold", className)}
      aria-hidden
    >
      <span className="h-px flex-1 bg-gold/55" />
      <DiamondMark />
      <span className="h-px flex-1 bg-gold/55" />
    </div>
  );
}

export function Hairline({ className }: { className?: string }) {
  return <div className={cn("h-px bg-border", className)} aria-hidden />;
}
