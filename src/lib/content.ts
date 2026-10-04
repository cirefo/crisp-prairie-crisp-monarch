export const TAGLINES = [
  "Because you have better things to do.",
  "Where calm meets careful order.",
  "Thoughtfully arranged. Beautifully maintained.",
  "Organizing with care, clarity, and grace.",
  "Bringing ease, order, and peace to your space.",
] as const;

export const PRIMARY_TAGLINE = TAGLINES[0];
export const SECONDARY_TAGLINE = TAGLINES[1];

export const METHOD = [
  {
    step: "01",
    title: "We walk the house",
    body: "Tell me what’s been bothering you — the garage, the holiday rush, the corners nobody else hits. I listen, then we make a plan that fits your week.",
  },
  {
    step: "02",
    title: "I bring my supplies",
    body: "You don’t shop, you don’t hide the good towels. I come ready for a basic clean, a deep clean, or the kind of detail that shows in the granite.",
  },
  {
    step: "03",
    title: "We sort what doesn’t belong",
    body: "Closets, garages, rooms you’ve been meaning to clear. I help lift, sort, and place — nothing leaves without you saying so.",
  },
  {
    step: "04",
    title: "I come back",
    body: "The whole point of a smaller local service is that you get the same person. Recurring visits keep it from sliding, at a price meant to be kept.",
  },
] as const;

export const PILLARS = [
  {
    slug: "cleaning",
    title: "House cleaning",
    href: "/services/cleaning",
    image: "/images/work-granite-bar.jpg",
    kicker: "Basic, deep, and the details",
    body: "Weekly or one-time. Kitchens, baths, floors, and the spots big crews skip. Apartments up to two-story houses — same standard.",
  },
  {
    slug: "organizing",
    title: "Organizing",
    href: "/services/organizing",
    image: "/images/work-living-styled.jpg",
    kicker: "Garages, closets, rooms",
    body: "Not a catalog makeover. A house you can actually live in — closets that close, a garage you can park in, rooms that feel finished.",
  },
  {
    slug: "decluttering",
    title: "Clearing out",
    href: "/services/decluttering",
    image: "/images/work-kitchen-before.jpg",
    kicker: "Kind, not extreme",
    body: "Holiday prep, a room that’s gotten away from you, moderate lifting included. We decide together what stays.",
  },
  {
    slug: "move",
    title: "Move-in, holiday & construction",
    href: "/services/cleaning",
    image: "/images/work-open-rooms.jpg",
    kicker: "When the house has to be ready",
    body: "Empty-home cleans, construction dust, company coming. Fully cleaned before the boxes or the guests arrive.",
  },
] as const;

export const PACKAGES = [
  {
    id: "reset",
    name: "The Graceful Reset",
    priceHint: "From $535 for 3 bed / 2 bath",
    href: "/quote?kind=reset",
    image: "/images/work-kitchen-after.jpg",
    summary: "Deep clean + declutter + organization.",
    ideal: "The first visit, a holiday, or the house that’s been asking for a real start.",
    includes: [
      "Full deep clean of living spaces, kitchen, and baths",
      "Help clearing closets, rooms, and problem spots",
      "A simple system so it doesn’t bounce back in a week",
      "My supplies — you don’t shop for this",
    ],
  },
  {
    id: "maintenance",
    name: "Graceful Maintenance",
    priceHint: "$150 per visit for 3 bed / 2 bath",
    href: "/quote?kind=maintenance",
    image: "/images/work-living-navy.jpg",
    summary: "Recurring cleaning + light organizing.",
    ideal: "The standing visit. Flexible hours. The same person, not a rotating crew.",
    includes: [
      "Thorough recurring clean",
      "Light reset of drawers, counters, and systems we already built",
      "Kitchen and bath focus, floors, and surfaces",
      "Notes if something is starting to slip",
    ],
  },
  {
    id: "move",
    name: "Move With Grace",
    priceHint: "From $500 for 3 bed / 2 bath",
    href: "/quote?kind=move",
    image: "/images/work-open-rooms.jpg",
    summary: "Move-in / move-out, holiday, or construction cleanup.",
    ideal: "Empty houses, new paint, company next week. Ready before anyone walks in.",
    includes: [
      "Empty-home or occupied move clean",
      "Construction dust and post-remodel detail",
      "Kitchen, baths, floors, inside cabinets as needed",
      "Optional garage, closet, and décor placement",
    ],
  },
] as const;

export const WORK = [
  {
    src: "/images/work-granite-bar.jpg",
    alt: "Granite kitchen bar after a Graceful Order deep clean — high shine, clear counters.",
    caption: "Granite, the way it should look",
    wide: true,
  },
  {
    src: "/images/work-granite-close.jpg",
    alt: "Close-up of polished granite after detailed cleaning.",
    caption: "Detail in the stone",
  },
  {
    src: "/images/work-kitchen-galley.jpg",
    alt: "Galley kitchen with dark cabinets and clean tile after a house cleaning.",
    caption: "Kitchen, floor to ceiling",
  },
  {
    src: "/images/work-kitchen-before.jpg",
    alt: "Kitchen before organizing and a thorough clean.",
    caption: "Before",
  },
  {
    src: "/images/work-kitchen-after.jpg",
    alt: "Same kitchen after cleaning, clearing counters, and a fresh reset.",
    caption: "After",
  },
  {
    src: "/images/work-living-styled.jpg",
    alt: "Living room after cleaning and décor placement, navy accent wall.",
    caption: "Living room, settled",
    wide: true,
  },
  {
    src: "/images/work-kitchen-navy.jpg",
    alt: "Navy kitchen with white counters after a detailed clean.",
    caption: "A kitchen that can breathe",
  },
  {
    src: "/images/work-open-rooms.jpg",
    alt: "Open living spaces after a move-out or construction clean, dark hardwood shining.",
    caption: "Move-out / construction clean",
    wide: true,
  },
  {
    src: "/images/work-fireplace.jpg",
    alt: "Living room fireplace wall after a clean, floors clear.",
    caption: "The rooms people actually use",
  },
] as const;

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Are you a big company?",
    a: "No — and that’s the point. Graceful Order is me, Amanda French. People in this community keep asking for a trusted individual instead of a rotating crew. You get the same person, flexible hours, and a standard I put my name on.",
  },
  {
    q: "What do you actually do?",
    a: "House cleaning (basic and deep), household organizing, home décor support, and construction or move-in/move-out cleanups. Garages, closets, and rooms that have gotten away from you. Moderate lifting included. I bring my own supplies.",
  },
  {
    q: "How does pricing work?",
    a: "A recurring clean for a 3 bedroom, 2 bath home is $150 per visit. A deep clean for the same home is $350. Homes with 4 or more bedrooms and 2.5 baths start at $500 for a deep clean. Additional bedrooms are $25, additional full baths $40, half baths $30, and extra living rooms $30. Organizing add-ons are itemized in the quote calculator. Quality work, reasonably priced — apartments to two-story houses.",
  },
  {
    q: "Do you organize on every visit?",
    a: "On Graceful Maintenance visits I clean thoroughly and do light organizing — putting things back where we decided they live. Full closet, garage, and room resets live in The Graceful Reset, Move With Grace, and à-la-carte add-ons.",
  },
  {
    q: "Will you throw my things away?",
    a: "Never without you. Clearing a garage or a closet is a conversation. Keep, relocate, or let go — and letting go only happens with your say.",
  },
  {
    q: "Do you bring supplies?",
    a: "Yes. I come with what I need. If you have a fragrance-free preference, a pet, or a surface you want me to treat a certain way, put it on the quote form.",
  },
  {
    q: "Do I have to be home?",
    a: "For a first Reset or any organizing session, yes — at least for the walk-through. Recurring cleaning can be done while you’re at work once we know the house, the pets, and the alarm. Plenty of Plano and Frisco clients leave a lockbox and a note.",
  },
  {
    q: "Which cities do you serve?",
    a: "Plano, Allen, Carrollton, Dallas, Garland, Rowlett, McKinney, Frisco, Mesquite, and Grapevine. If you’re just outside that list, ask — drive time is the only limit.",
  },
  {
    q: "Can you do construction cleanup or a holiday ready-set?",
    a: "Yes. Empty-home and post-remodel dust is a regular ask, and so is a full clean before holidays or company. Send photos with the quote if the house is mid-project so I can price it honestly.",
  },
  {
    q: "Is the online number the final invoice?",
    a: "It’s a clear starting estimate from the published menu. Heavy organizing, construction dust, or a first Reset that reveals more than a form can know may adjust — you’ll see that before I start. No surprise invoices.",
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
