import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          to="/"
          className="flex min-h-11 items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose"
          aria-label="Graceful Order home"
        >
          <img
            src="/brand/emblem-light.png"
            alt=""
            className="h-12 w-auto object-contain sm:h-14"
          />
          <span className="flex flex-col justify-center leading-none">
            <span className="font-display text-[1.55rem] font-medium tracking-tight text-ink sm:text-[1.75rem]">
              Graceful
            </span>
            <span className="mt-1 text-[0.62rem] font-medium uppercase tracking-[0.38em] text-gold-deep">
              Order
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "inline-flex min-h-11 items-center px-3 text-[0.8rem] font-medium tracking-wide transition-colors duration-150",
                  active ? "text-ink" : "text-ink-soft hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/quote">Request a quote</Link>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-paper lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="flex min-h-12 items-center border-b border-border/70 text-base text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/quote"
              className="mt-4 inline-flex min-h-12 items-center justify-center rounded-lg bg-rose text-ivory"
            >
              Request a quote
            </Link>
            <Link
              to="/contact"
              className="mt-2 inline-flex min-h-12 items-center justify-center text-ink-soft"
            >
              Contact
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
