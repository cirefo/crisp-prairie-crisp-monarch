export const TAGLINES = [
  "Where calm meets careful order.",
  "Thoughtfully arranged. Beautifully maintained.",
  "Organizing with care, clarity, and grace.",
  "Bringing ease, order, and peace to your space.",
  "Because you have better things to do.",
] as const;

export const PRIMARY_TAGLINE = TAGLINES[0];
export const SECONDARY_TAGLINE = TAGLINES[4];

export const METHOD = [
  {
    step: "01",
    title: "Walk through",
    body: "We look without judgment. How you actually live — not how a catalog thinks you should — is the brief.",
  },
  {
    step: "02",
    title: "Sort",
    body: "Keep, relocate, release. Decisions get made kindly and out loud, so nothing important disappears into a donation bag.",
  },
  {
    step: "03",
    title: "Place",
    body: "Every kept thing earns a home. Labels, zones, and reach that match the person who uses the drawer.",
  },
  {
    step: "04",
    title: "Rhythm",
    body: "A light, repeatable visit so the calm does not depend on a heroic Saturday. This is the French part: mise en place, at home.",
  },
] as const;

export const PILLARS = [
  {
    slug: "organizing",
    title: "Organizing",
    href: "/services/organizing",
    image: "/images/closet.jpg",
    kicker: "The lasting part",
    body: "Closets, pantries, garages, offices, and the rooms that have been ‘meaning to.’ Systems you can keep on a Tuesday.",
  },
  {
    slug: "cleaning",
    title: "Cleaning",
    href: "/services/cleaning",
    image: "/images/bathroom.jpg",
    kicker: "Surfaces, honestly",
    body: "Recurring visits and deep cleans that include the corners. Clean is the floor; organized is the house standing up straight.",
  },
  {
    slug: "decluttering",
    title: "Decluttering",
    href: "/services/decluttering",
    image: "/images/mudroom.jpg",
    kicker: "Kind, not extreme",
    body: "We do not shame a full house. We help it tell the truth about what you use, love, and are ready to release.",
  },
  {
    slug: "sanitizing",
    title: "Sanitizing",
    href: "/services/cleaning",
    image: "/images/kitchen.jpg",
    kicker: "Quiet care",
    body: "Kitchens, baths, high-touch, and guest turnovers — done without theater, with a standard you can trust.",
  },
] as const;

export const PACKAGES = [
  {
    id: "reset",
    name: "The Graceful Reset",
    priceHint: "From $535 for 3 bed / 2 bath",
    href: "/quote?kind=reset",
    image: "/images/hero-living.jpg",
    summary: "Deep clean + declutter + organization.",
    ideal: "The first engagement, a season change, or the house that has been asking for a true start.",
    includes: [
      "Full deep clean of living spaces, kitchen, and baths",
      "Guided declutter — keep, relocate, release",
      "Room systems: homes for what stays",
      "A simple maintenance plan so it holds",
    ],
  },
  {
    id: "maintenance",
    name: "Graceful Maintenance",
    priceHint: "$150 per visit for 3 bed / 2 bath",
    href: "/quote?kind=maintenance",
    image: "/images/bedroom.jpg",
    summary: "Recurring cleaning + light organizing.",
    ideal: "The standing rhythm. Weekly or biweekly, so order is a habit instead of a project.",
    includes: [
      "Thorough recurring clean",
      "Light reset of systems we have already built",
      "Kitchen and bath focus, floors, and surfaces",
      "Notes if something is starting to slip",
    ],
  },
  {
    id: "move",
    name: "Move With Grace",
    priceHint: "From $500 for 3 bed / 2 bath",
    href: "/quote?kind=move",
    image: "/images/garage.jpg",
    summary: "Move-in / move-out cleaning + organization.",
    ideal: "Leaving a house well, or arriving to one that is already livable.",
    includes: [
      "Empty-home or occupied move clean",
      "Kitchen, baths, floors, inside cabinets as needed",
      "First-week organization of kitchen, closets, and bath",
      "Optional garage and pantry add-ons",
    ],
  },
] as const;

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Are you a maid service, or an organizing studio?",
    a: "Both, on purpose. Most cleaning companies wipe and leave the piles. Most organizers do not mop. Graceful Order cleans, sanitizes, declutters, and organizes — then returns on a rhythm so the work does not evaporate. Organizing is not an add-on we mention. It is the point.",
  },
  {
    q: "How does pricing work?",
    a: "A recurring clean for a 3 bedroom, 2 bath home is $150 per visit. A deep clean for the same home is $350. Homes with 4 or more bedrooms start at $500 for a deep clean (4 bed / 2.5 bath). Additional bedrooms are $25, additional full baths $40, half baths $30, and extra living rooms $30. Organizing packages and add-ons — ovens, grout, closets, pantries, garages — are itemized in the quote calculator.",
  },
  {
    q: "Do you organize on every visit?",
    a: "On Graceful Maintenance visits, we clean thoroughly and do light organizing: putting systems back to true, not a full closet rebuild every week. Full organizing lives in The Graceful Reset, Move With Grace, and à-la-carte closet, pantry, garage, and office resets.",
  },
  {
    q: "Will you throw my things away?",
    a: "Never without you. Decluttering here is a conversation. We sort together, or to a list you approve. Keep, relocate, release — and release only means donation or discard with your say. Kindness is not a slogan. It is how the day is run.",
  },
  {
    q: "Do I have to be home?",
    a: "For a first Reset or any organizing session, yes — at least for the walk-through. Recurring maintenance can be done while you are at work once we know the house, the pets, and the alarm. Many Plano and Frisco clients leave a lockbox and a note.",
  },
  {
    q: "Which cities do you serve?",
    a: "Plano, Allen, Carrollton, Dallas, Garland, Rowlett, McKinney, Frisco, Mesquite, and Grapevine. If you are just outside that list, ask — drive time is the only limit.",
  },
  {
    q: "Do you clean Airbnbs and short-term rentals?",
    a: "Yes. Grapevine (near DFW), Dallas, and Frisco turnovers are a regular part of the work. The standard is guest-ready: linens, kitchen, hidden crumbs, restock notes. Same care as a primary home, with a checklist a host can trust.",
  },
  {
    q: "What supplies do you use?",
    a: "Professional, surface-safe products. If you have preferences — fragrance-free, pet-safe, a specific brand — say so on the quote form. We will not experiment on marble, unsealed wood, or a baby’s room.",
  },
  {
    q: "How soon can you come?",
    a: "Recurring routes fill by neighborhood. One-time Resets and move-outs are booked after a short walk-through or a detailed photo set. Submit a quote — Amanda replies within one business day with timing.",
  },
  {
    q: "Is the online number the final invoice?",
    a: "It is a transparent starting estimate from the published menu. Heavy organizing, hoarding-level volume, pet hair beyond typical, or neglected grout can adjust the figure. You will see that before work begins. No surprise invoices.",
  },
];

export const NAV = [
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/quote", label: "Pricing" },
  { href: "/areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
] as const;

export const SITE = {
  name: "Graceful Order",
  owner: "Amanda French",
  region: "North Dallas & Collin County",
  email: "hello@gracefulorder.com",
  tagline: PRIMARY_TAGLINE,
};
