export type ServiceKind = "maintenance" | "deep" | "reset" | "move";

export type Frequency = "weekly" | "biweekly" | "monthly" | "once";

export type QuoteInput = {
  kind: ServiceKind;
  bedrooms: number;
  fullBaths: number;
  halfBaths: number;
  livingRooms: number;
  addonIds: string[];
  frequency: Frequency;
};

export type PriceLine = {
  label: string;
  amount: number;
};

export type Estimate = {
  total: number;
  lines: PriceLine[];
  cadence: string;
};

export const SERVICE_PACKAGES: {
  id: ServiceKind;
  name: string;
  short: string;
  blurb: string;
  frequencyDefault: Frequency;
}[] = [
  {
    id: "maintenance",
    name: "Graceful Maintenance",
    short: "Recurring clean + light organizing",
    blurb: "A standing visit that keeps surfaces honest and systems from sliding. The calm, on purpose.",
    frequencyDefault: "biweekly",
  },
  {
    id: "deep",
    name: "Deep Clean",
    short: "One-time thorough clean",
    blurb: "Baseboards, grout lines, the oven you have been avoiding. A true reset of the house itself.",
    frequencyDefault: "once",
  },
  {
    id: "reset",
    name: "The Graceful Reset",
    short: "Deep clean + declutter + organization",
    blurb: "Clean the rooms, then give every kept thing a home. The signature first engagement.",
    frequencyDefault: "once",
  },
  {
    id: "move",
    name: "Move With Grace",
    short: "Move-in / move-out clean + organization",
    blurb: "Empty a house well, or arrive to one that is already livable. Packing chaos, meet a plan.",
    frequencyDefault: "once",
  },
];

export const ADDONS: {
  id: string;
  label: string;
  price: number;
  group: "kitchen" | "treatment" | "detail" | "organize";
  hint: string;
}[] = [
  { id: "microwave", label: "Microwave interior", price: 20, group: "kitchen", hint: "Inside walls, turntable, vents" },
  { id: "oven", label: "Oven", price: 45, group: "kitchen", hint: "Racks, glass, interior walls" },
  { id: "gas-stove", label: "Gas stove deep clean", price: 50, group: "kitchen", hint: "Grates, caps, drip trays" },
  { id: "fridge", label: "Refrigerator interior", price: 40, group: "kitchen", hint: "Shelves, drawers, seals" },
  { id: "grout", label: "Extensive grout treatment", price: 85, group: "treatment", hint: "Tile floors and showers" },
  { id: "windows", label: "Interior windows", price: 75, group: "detail", hint: "Whole-home interior glass" },
  { id: "baseboards", label: "Baseboards & detail dusting", price: 35, group: "detail", hint: "Edges, vents, switch plates" },
  { id: "laundry", label: "Laundry room refresh", price: 25, group: "detail", hint: "Machines, cabinets, floor" },
  { id: "closet", label: "Closet reset", price: 95, group: "organize", hint: "One closet, sorted and placed" },
  { id: "pantry", label: "Pantry organization", price: 110, group: "organize", hint: "Zones, labels, easy reach" },
  { id: "garage", label: "Garage organization", price: 225, group: "organize", hint: "Zones, bins, wall systems" },
  { id: "office", label: "Home office reset", price: 140, group: "organize", hint: "Paper, supplies, surfaces" },
];

export const ADDON_GROUPS: { id: AddonGroup; label: string }[] = [
  { id: "kitchen", label: "Kitchen appliances" },
  { id: "treatment", label: "Treatments" },
  { id: "detail", label: "Detail work" },
  { id: "organize", label: "Organization (the lasting part)" },
];

type AddonGroup = (typeof ADDONS)[number]["group"];

export const ROOM_LIMITS = {
  bedrooms: { min: 1, max: 7 },
  fullBaths: { min: 1, max: 5 },
  halfBaths: { min: 0, max: 3 },
  livingRooms: { min: 1, max: 4 },
};

function usesLargeDeepBase(kind: ServiceKind, bedrooms: number, fullBaths: number, halfBaths: number) {
  const deep = kind !== "maintenance";
  const baths = fullBaths + halfBaths * 0.5;
  return deep && bedrooms >= 4 && baths >= 2.5;
}

function extraBedrooms(kind: ServiceKind, bedrooms: number, fullBaths: number, halfBaths: number) {
  if (usesLargeDeepBase(kind, bedrooms, fullBaths, halfBaths)) return Math.max(0, bedrooms - 4);
  return Math.max(0, bedrooms - 3);
}

function extraFullBaths(_kind: ServiceKind, fullBaths: number) {
  return Math.max(0, fullBaths - 2);
}

function extraHalfBaths(kind: ServiceKind, halfBaths: number, bedrooms: number, fullBaths: number) {
  if (usesLargeDeepBase(kind, bedrooms, fullBaths, halfBaths)) return Math.max(0, halfBaths - 1);
  return Math.max(0, halfBaths);
}

export function estimateQuote(input: QuoteInput): Estimate {
  const lines: PriceLine[] = [];
  const deep = input.kind !== "maintenance";
  const large = usesLargeDeepBase(
    input.kind,
    input.bedrooms,
    input.fullBaths,
    input.halfBaths,
  );

  if (large) {
    lines.push({
      label: "Deep clean base — 4+ bedroom / 2.5 bath",
      amount: 500,
    });
  } else if (deep) {
    lines.push({
      label: "Deep clean base — up to 3 bedroom / 2 bath",
      amount: 350,
    });
  } else {
    lines.push({
      label: "Recurring visit — up to 3 bedroom / 2 bath",
      amount: 150,
    });
  }

  const beds = extraBedrooms(
    input.kind,
    input.bedrooms,
    input.fullBaths,
    input.halfBaths,
  );
  if (beds > 0) {
    lines.push({
      label: `Additional bedroom${beds === 1 ? "" : "s"} × ${beds}`,
      amount: beds * 25,
    });
  }

  const fulls = extraFullBaths(input.kind, input.fullBaths);
  if (fulls > 0) {
    lines.push({
      label: `Additional full bathroom${fulls === 1 ? "" : "s"} × ${fulls}`,
      amount: fulls * 40,
    });
  }

  const halfs = extraHalfBaths(
    input.kind,
    input.halfBaths,
    input.bedrooms,
    input.fullBaths,
  );
  if (halfs > 0) {
    lines.push({
      label: `Half bathroom${halfs === 1 ? "" : "s"} × ${halfs}`,
      amount: halfs * 30,
    });
  }

  const livings = Math.max(0, input.livingRooms - 1);
  if (livings > 0) {
    lines.push({
      label: `Additional living room${livings === 1 ? "" : "s"} × ${livings}`,
      amount: livings * 30,
    });
  }

  if (input.kind === "reset") {
    const org = large ? 225 : 185;
    lines.push({
      label: "Declutter + organization (Graceful Reset)",
      amount: org,
    });
  }

  if (input.kind === "move") {
    const org = large ? 175 : 150;
    lines.push({
      label: "Move-in / move-out organization",
      amount: org,
    });
  }

  for (const id of input.addonIds) {
    const addon = ADDONS.find((item) => item.id === id);
    if (addon) {
      lines.push({ label: addon.label, amount: addon.price });
    }
  }

  const cadence =
    input.kind === "maintenance"
      ? input.frequency === "weekly"
        ? "per weekly visit"
        : input.frequency === "monthly"
          ? "per monthly visit"
          : "per biweekly visit"
      : "one-time estimate";

  const total = lines.reduce((sum, line) => sum + line.amount, 0);
  return { total, lines, cadence };
}

export const DEFAULT_QUOTE: QuoteInput = {
  kind: "maintenance",
  bedrooms: 3,
  fullBaths: 2,
  halfBaths: 0,
  livingRooms: 1,
  addonIds: [],
  frequency: "biweekly",
};
