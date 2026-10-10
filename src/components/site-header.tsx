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
    <header className="sticky top-0 z-40 border-b border-ivory/10 bg-footer">
      <div className="mx-auto flex min-h-24 max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:min-h-28 sm:gap-4 sm:px-8 lg:min-h-32">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:gap-3"
          aria-label="Graceful Order home"
        >
          <img
            src="/brand/emblem-header.png"
            alt=""
            className="h-16 w-auto shrink-0 object-contain sm:h-20 lg:h-24"
          />
          <img
            src="/brand/lettermark.png"
            alt="Graceful Order"
            className="h-10 w-auto max-w-[9.5rem] object-contain object-left sm:h-12 sm:max-w-none lg:h-14"
          />
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
                  "inline-flex min-h-11 items-center px-2.5 text-[0.95rem] font-medium tracking-wide transition-colors duration-150",
                  active
                    ? "text-ivory"
                    : "text-footer-muted hover:text-ivory",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/quote">Request a quote</Link>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-ivory lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-ivory/10 bg-footer lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="flex min-h-12 items-center border-b border-ivory/10 text-base text-ivory"
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
              className="mt-2 inline-flex min-h-12 items-center justify-center text-footer-muted"
            >
              Contact
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
