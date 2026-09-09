import { useMemo, useState, type FormEvent } from "react";
import { Check, Minus, Plus } from "lucide-react";
import {
  ADDON_GROUPS,
  ADDONS,
  DEFAULT_QUOTE,
  estimateQuote,
  ROOM_LIMITS,
  SERVICE_PACKAGES,
  type Frequency,
  type QuoteInput,
  type ServiceKind,
} from "@/lib/pricing";
import { CITIES } from "@/lib/cities";
import { Button } from "@/components/ui/button";
import { formatUsd, cn } from "@/lib/utils";

const FREQUENCIES: { id: Frequency; label: string }[] = [
  { id: "weekly", label: "Weekly" },
  { id: "biweekly", label: "Biweekly" },
  { id: "monthly", label: "Monthly" },
];

type Submitted = {
  name: string;
  total: number;
  cadence: string;
};

function Stepper({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg bg-ivory px-4 py-3 shadow-card">
      <span className="text-sm font-medium text-ink">{label}</span>
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label={`Decrease ${label}`}
          className="inline-flex size-11 items-center justify-center rounded-md text-ink hover:bg-blush/50 disabled:opacity-30"
          disabled={value <= min}
          onClick={() => onChange(Math.max(min, value - 1))}
        >
          <Minus className="size-4" />
        </button>
        <span className="w-8 text-center tabular-nums text-base font-medium text-ink">
          {value}
        </span>
        <button
          type="button"
          aria-label={`Increase ${label}`}
          className="inline-flex size-11 items-center justify-center rounded-md text-ink hover:bg-blush/50 disabled:opacity-30"
          disabled={value >= max}
          onClick={() => onChange(Math.min(max, value + 1))}
        >
          <Plus className="size-4" />
        </button>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      {children}
    </label>
  );
}

const inputClass =
  "h-11 w-full rounded-md bg-surface px-3 text-sm text-ink shadow-card outline-none transition-[box-shadow] duration-150 placeholder:text-muted focus:shadow-[0_0_0_2px_rgba(183,110,125,0.45)]";

export function QuoteCalculator({ initialKind }: { initialKind?: ServiceKind }) {
  const [input, setInput] = useState<QuoteInput>(() => ({
    ...DEFAULT_QUOTE,
    kind: initialKind ?? DEFAULT_QUOTE.kind,
    frequency:
      initialKind && initialKind !== "maintenance"
        ? "once"
        : DEFAULT_QUOTE.frequency,
  }));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("plano");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState<Submitted | null>(null);

  const estimate = useMemo(() => estimateQuote(input), [input]);

  function toggleAddon(id: string) {
    setInput((prev) => ({
      ...prev,
      addonIds: prev.addonIds.includes(id)
        ? prev.addonIds.filter((item) => item !== id)
        : [...prev.addonIds, id],
    }));
  }

  function onKind(kind: ServiceKind) {
    const pkg = SERVICE_PACKAGES.find((p) => p.id === kind);
    setInput((prev) => ({
      ...prev,
      kind,
      frequency: pkg?.frequencyDefault ?? prev.frequency,
    }));
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!name.trim() || !email.trim()) return;
    const record = {
      at: new Date().toISOString(),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      city,
      notes: notes.trim(),
      input,
      estimate,
    };
    try {
      const existing = JSON.parse(
        localStorage.getItem("graceful-order-quotes") || "[]",
      ) as unknown[];
      localStorage.setItem(
        "graceful-order-quotes",
        JSON.stringify([record, ...existing].slice(0, 20)),
      );
    } catch {
      /* ignore quota */
    }
    setSubmitted({
      name: name.trim(),
      total: estimate.total,
      cadence: estimate.cadence,
    });
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-surface p-8 shadow-card sm:p-10">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gold-deep">
          Quote received
        </p>
        <h2 className="mt-3 font-display text-3xl font-medium text-ink">
          Thank you, {submitted.name}.
        </h2>
        <p className="mt-4 max-w-xl text-ink-soft">
          Your starting estimate is{" "}
          <span className="font-medium text-ink tabular-nums">
            {formatUsd(submitted.total)}
          </span>{" "}
          {submitted.cadence}. Amanda will reply within one business day to
          confirm timing and any organizing scope a walk-through might change.
        </p>
        <p className="mt-3 text-sm text-muted">
          Organizing is quoted honestly. Closets, pantries, and garages
          sometimes reveal more than a form can know — you will see that before
          work begins.
        </p>
        <Button
          className="mt-8"
          variant="outline"
          onClick={() => setSubmitted(null)}
        >
          Build another estimate
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-8 lg:grid-cols-12 lg:items-start"
    >
      <div className="space-y-8 lg:col-span-7">
        <fieldset>
          <legend className="mb-3 text-sm font-medium text-ink">
            Choose a package
          </legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {SERVICE_PACKAGES.map((pkg) => {
              const active = input.kind === pkg.id;
              return (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => onKind(pkg.id)}
                  className={cn(
                    "rounded-xl p-4 text-left shadow-card transition-[box-shadow,background-color] duration-150",
                    active ? "bg-blush/60" : "bg-surface hover:bg-ivory",
                  )}
                >
                  <span className="flex items-start justify-between gap-3">
                    <span className="font-display text-xl font-medium text-ink">
                      {pkg.name}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 inline-flex size-5 items-center justify-center rounded-full",
                        active ? "bg-rose text-ivory" : "bg-cream text-muted",
                      )}
                    >
                      {active ? <Check className="size-3" /> : null}
                    </span>
                  </span>
                  <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-gold-deep">
                    {pkg.short}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-ink-soft">
                    {pkg.blurb}
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>

        {input.kind === "maintenance" ? (
          <fieldset>
            <legend className="mb-3 text-sm font-medium text-ink">
              Visit rhythm
            </legend>
            <div className="flex flex-wrap gap-2">
              {FREQUENCIES.map((freq) => (
                <button
                  key={freq.id}
                  type="button"
                  onClick={() =>
                    setInput((prev) => ({ ...prev, frequency: freq.id }))
                  }
                  className={cn(
                    "min-h-11 rounded-full px-4 text-sm font-medium transition-colors duration-150",
                    input.frequency === freq.id
                      ? "bg-ink text-ivory"
                      : "bg-ivory text-ink-soft hover:bg-blush/50",
                  )}
                >
                  {freq.label}
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-muted">
              Listed prices are per visit. Weekly is the steadiest way to keep
              systems true.
            </p>
          </fieldset>
        ) : null}

        <fieldset>
          <legend className="mb-3 text-sm font-medium text-ink">
            Tell us the house
          </legend>
          <div className="grid gap-3 sm:grid-cols-2">
            <Stepper
              label="Bedrooms"
              value={input.bedrooms}
              min={ROOM_LIMITS.bedrooms.min}
              max={ROOM_LIMITS.bedrooms.max}
              onChange={(bedrooms) => setInput((p) => ({ ...p, bedrooms }))}
            />
            <Stepper
              label="Full baths"
              value={input.fullBaths}
              min={ROOM_LIMITS.fullBaths.min}
              max={ROOM_LIMITS.fullBaths.max}
              onChange={(fullBaths) => setInput((p) => ({ ...p, fullBaths }))}
            />
            <Stepper
              label="Half baths"
              value={input.halfBaths}
              min={ROOM_LIMITS.halfBaths.min}
              max={ROOM_LIMITS.halfBaths.max}
              onChange={(halfBaths) => setInput((p) => ({ ...p, halfBaths }))}
            />
            <Stepper
              label="Living rooms"
              value={input.livingRooms}
              min={ROOM_LIMITS.livingRooms.min}
              max={ROOM_LIMITS.livingRooms.max}
              onChange={(livingRooms) =>
                setInput((p) => ({ ...p, livingRooms }))
              }
            />
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-1 text-sm font-medium text-ink">Add-ons</legend>
          <p className="mb-4 text-sm text-muted">
            Optional. Organizing add-ons are how a clean becomes a home you can
            keep.
          </p>
          <div className="space-y-5">
            {ADDON_GROUPS.map((group) => (
              <div key={group.id}>
                <p className="mb-2 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-gold-deep">
                  {group.label}
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {ADDONS.filter((addon) => addon.group === group.id).map(
                    (addon) => {
                      const on = input.addonIds.includes(addon.id);
                      return (
                        <button
                          key={addon.id}
                          type="button"
                          onClick={() => toggleAddon(addon.id)}
                          className={cn(
                            "flex min-h-14 items-center justify-between gap-3 rounded-lg px-4 py-3 text-left shadow-card transition-colors duration-150",
                            on ? "bg-blush/60" : "bg-surface hover:bg-ivory",
                          )}
                        >
                          <span>
                            <span className="block text-sm font-medium text-ink">
                              {addon.label}
                            </span>
                            <span className="block text-xs text-muted">
                              {addon.hint}
                            </span>
                          </span>
                          <span className="shrink-0 text-sm tabular-nums text-ink-soft">
                            {formatUsd(addon.price)}
                          </span>
                        </button>
                      );
                    },
                  )}
                </div>
              </div>
            ))}
          </div>
        </fieldset>

        <fieldset className="grid gap-4 sm:grid-cols-2">
          <legend className="mb-3 text-sm font-medium text-ink sm:col-span-2">
            How to reach you
          </legend>
          <Field id="quote-name" label="Name">
            <input
              id="quote-name"
              required
              autoComplete="name"
              className={inputClass}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Field>
          <Field id="quote-email" label="Email">
            <input
              id="quote-email"
              type="email"
              required
              autoComplete="email"
              className={inputClass}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field>
          <Field id="quote-phone" label="Phone (optional)">
            <input
              id="quote-phone"
              type="tel"
              autoComplete="tel"
              className={inputClass}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Field>
          <Field id="quote-city" label="City">
            <select
              id="quote-city"
              className={inputClass}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              {CITIES.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </Field>
          <div className="sm:col-span-2">
            <Field id="quote-notes" label="What feels heavy right now?">
              <textarea
                id="quote-notes"
                rows={4}
                className={cn(inputClass, "h-auto py-3")}
                placeholder="Closets, the garage, a move, the kitchen that never stays reset…"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </Field>
          </div>
        </fieldset>
      </div>

      <aside className="lg:sticky lg:top-24 lg:col-span-5">
        <div className="rounded-xl bg-ink p-6 text-ivory shadow-card sm:p-8">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gold">
            Starting estimate
          </p>
          <p className="mt-3 font-display text-5xl font-medium tabular-nums text-ivory">
            {formatUsd(estimate.total)}
          </p>
          <p className="mt-1 text-sm text-champagne">{estimate.cadence}</p>
          <ul className="mt-6 space-y-2 border-t border-ivory/10 pt-5">
            {estimate.lines.map((line) => (
              <li
                key={line.label}
                className="flex items-start justify-between gap-3 text-sm"
              >
                <span className="text-champagne">{line.label}</span>
                <span className="shrink-0 tabular-nums text-ivory">
                  {formatUsd(line.amount)}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-footer-muted">
            Published menu for a typical home. Heavy organizing, extensive grout,
            or a first Reset that reveals more than the form can know may adjust
            — you will see that before we start.
          </p>
          <Button type="submit" variant="primary" size="lg" className="mt-6 w-full">
            Send this quote
          </Button>
        </div>
      </aside>
    </form>
  );
}
