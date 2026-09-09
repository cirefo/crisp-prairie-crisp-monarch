import { Link } from "@tanstack/react-router";
import { CITIES } from "@/lib/cities";
import { SITE } from "@/lib/content";
import { Rule } from "@/components/marks";
import { Container } from "@/components/section";

export function SiteFooter() {
  return (
    <footer className="bg-footer text-footer-fg">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src="/brand/emblem-dark.png"
                alt=""
                className="h-16 w-auto object-contain"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-3xl font-medium text-footer-fg">
                  Graceful
                </span>
                <span className="mt-1.5 text-[0.7rem] font-medium uppercase tracking-[0.4em] text-gold">
                  Order
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-footer-muted">
              {SITE.tagline} Cleaning, sanitizing, decluttering, and organizing
              for homes across {SITE.region} — by {SITE.owner}.
            </p>
            <p className="mt-4 font-display text-xl italic text-gold">
              Because you have better things to do.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 md:col-span-7">
            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold">
                Visit
              </p>
              <ul className="mt-4 space-y-2 text-sm text-footer-muted">
                <li>
                  <Link to="/services" className="hover:text-footer-fg">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/packages" className="hover:text-footer-fg">
                    Packages
                  </Link>
                </li>
                <li>
                  <Link to="/quote" className="hover:text-footer-fg">
                    Pricing & quote
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-footer-fg">
                    About Amanda
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-footer-fg">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-footer-fg">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold">
                Work
              </p>
              <ul className="mt-4 space-y-2 text-sm text-footer-muted">
                <li>
                  <Link to="/services/organizing" className="hover:text-footer-fg">
                    Organizing
                  </Link>
                </li>
                <li>
                  <Link to="/services/cleaning" className="hover:text-footer-fg">
                    Cleaning
                  </Link>
                </li>
                <li>
                  <Link to="/services/decluttering" className="hover:text-footer-fg">
                    Decluttering
                  </Link>
                </li>
                <li>
                  <Link to="/services/airbnb" className="hover:text-footer-fg">
                    Airbnb & turnovers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold">
                Areas
              </p>
              <ul className="mt-4 space-y-2 text-sm text-footer-muted">
                {CITIES.map((city) => (
                  <li key={city.slug}>
                    <Link
                      to="/areas/$city"
                      params={{ city: city.slug }}
                      className="hover:text-footer-fg"
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Rule className="my-10 text-gold/70" />

        <div className="flex flex-col gap-3 text-xs text-footer-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Kindness + precision.
          </p>
          <p>
            <Link to="/privacy" className="hover:text-footer-fg">
              Privacy
            </Link>
            <span className="mx-2 text-gold/50">·</span>
            Serving {SITE.region}
          </p>
        </div>
      </Container>
    </footer>
  );
}
