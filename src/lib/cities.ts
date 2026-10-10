export type City = {
  slug: string;
  name: string;
  county: string;
  drive: string;
  neighborhoods: string[];
  headline: string;
  intro: string;
  body: string;
  angle: string;
  keyword: string;
  meta: string;
};

export const CITIES: City[] = [
  {
    slug: "plano",
    name: "Plano",
    county: "Collin County",
    drive: "Home base",
    neighborhoods: ["West Plano", "Willow Bend", "Legacy", "Deerfield", "Whiffletree"],
    headline: "Home organizer & recurring cleaning in Plano, TX",
    intro:
      "Plano is full of beautiful houses that are harder to live in than they look. Between Legacy offices, school calendars, and closets that were never given a system, most homes here do not need a lecture. They need a kind, precise hand — and a visit that comes back.",
    body: "Amanda works across West Plano estates, Willow Bend family homes, and the newer Legacy corridor, where kitchens are generous and garages have become a second attic. Graceful Order is built for that Plano rhythm: a deep reset when the house has slipped, then Graceful Maintenance so the calm does not depend on a heroic Saturday. Closets, pantries, and playrooms are organized as carefully as the counters are cleaned.",
    angle:
      "If you have been searching for a home organizer in Plano who will also keep the house honestly clean, this is that person.",
    keyword: "home organizer Plano TX",
    meta: "Home organizer and recurring cleaning in Plano, TX. Graceful Order cleans, declutters, and organizes West Plano, Willow Bend, and Legacy homes — with a repeatable rhythm.",
  },
  {
    slug: "frisco",
    name: "Frisco",
    county: "Collin / Denton County",
    drive: "North Collin",
    neighborhoods: ["Wade Park", "Phillips Creek Ranch", "Starwood", "Newman Village", "The Trails"],
    headline: "Recurring cleaning & home organization in Frisco, TX",
    intro:
      "Frisco builds big. Walk-in closets the size of bedrooms, mudrooms that swallow team uniforms, pantries that started organized and slowly became a second grocery store. New construction gives you square footage. It does not give you a system.",
    body: "Graceful Order is a natural fit for Frisco families who want the house to look as considered as the rest of their life. Recurring cleaning Frisco TX searches usually lead to a maid service. We are that — and the organizer who labels the pantry, zones the garage, and leaves a light weekly or biweekly rhythm so it actually holds. The Star, PGA, and school sports do not pause for clutter. We build around them.",
    angle:
      "Recurring cleaning in Frisco with organizing that respects how a busy household actually moves.",
    keyword: "recurring cleaning Frisco TX",
    meta: "Recurring cleaning and home organization in Frisco, TX. Closets, pantries, garages, and a standing rhythm for new-construction homes that need systems, not more stuff.",
  },
  {
    slug: "mckinney",
    name: "McKinney",
    county: "Collin County",
    drive: "Northeast Collin",
    neighborhoods: ["Historic Downtown", "Adriatica", "Stonebridge", "Trinity Falls", "Craig Ranch"],
    headline: "Deep cleaning & organizing in McKinney, TX",
    intro:
      "McKinney holds two kinds of homes: the square’s older cottages with charming, awkward storage, and the master-planned houses with more cabinets than a plan. Both collect the same thing — decisions that never got finished.",
    body: "Deep cleaning McKinney searches often mean ‘please make it feel new again.’ We do that, then we organize so the newness has somewhere to live. Historic bungalows get tailored systems that respect small closets. Adriatica and Trinity Falls homes get zone-based kitchens, garages, and linen closets that match the architecture. Either way, the visit is calm, precise, and kind.",
    angle: "Deep cleaning in McKinney with organization that fits the house you actually have.",
    keyword: "deep cleaning McKinney",
    meta: "Deep cleaning and home organizing in McKinney, TX. From Historic Square cottages to Trinity Falls, Graceful Order resets rooms and gives them a system that lasts.",
  },
  {
    slug: "dallas",
    name: "Dallas",
    county: "Dallas County",
    drive: "Dallas proper",
    neighborhoods: ["Lakewood", "Preston Hollow", "Lake Highlands", "Uptown", "East Dallas"],
    headline: "Garage organization, cleaning & home systems in Dallas, TX",
    intro:
      "Dallas homes are not one type of problem. A Lakewood bungalow, a Preston Hollow estate, and an Uptown high-rise each fail in their own way — attics, four-car garages, or a single coat closet doing the work of a mudroom.",
    body: "Garage organization in Dallas is one of the searches that finds us, and for good reason: the garage is where good intentions go to wait. We also clean and organize interiors, from White Rock bungalows to towers that need ruthless editing. Recurring visits keep high-rise dust and family-home entropy from stacking up. The work is the same in every ZIP: care, detail, and a system you can keep.",
    angle:
      "Dallas clients who want garage systems, closet resets, and a cleaner who thinks like an organizer.",
    keyword: "garage organization Dallas",
    meta: "Garage organization, home organizing, and cleaning in Dallas, TX. Lakewood, Preston Hollow, Lake Highlands, Uptown — systems that fit the house, not a one-size closet kit.",
  },
  {
    slug: "allen",
    name: "Allen",
    county: "Collin County",
    drive: "East of Plano",
    neighborhoods: ["Watters Creek", "Twin Creeks", "The Village at Allen", "Montgomery Farm"],
    headline: "Home organizing & housekeeping in Allen, TX",
    intro:
      "Allen runs on families, fields, and full calendars. The house is the place everything lands at 7:40 p.m. If the landing strip is chaos, the whole evening is.",
    body: "Graceful Order designs that landing strip: hooks that get used, baskets that make sense, a kitchen that can produce dinner without a scavenger hunt. Recurring cleaning keeps it honest between soccer seasons. Watters Creek townhomes and Twin Creeks houses get the same standard — kindness first, then precision — because an overwhelmed home does not need a stricter owner. It needs a better setup.",
    angle: "Allen homes that need a repeatable system, not a one-weekend purge.",
    keyword: "home organizer Allen TX",
    meta: "Home organizing and recurring housekeeping in Allen, TX. Watters Creek to Twin Creeks — clean, declutter, and organize so weeknights feel lighter.",
  },
  {
    slug: "carrollton",
    name: "Carrollton",
    county: "Dallas / Denton County",
    drive: "West of Plano",
    neighborhoods: ["Downtown Square", "Josey Ranch", "North Carrollton", "Old Downtown"],
    headline: "Cleaning & organizing in Carrollton, TX",
    intro:
      "Carrollton’s mix of mid-century ranches and newer infill means storage is rarely where a catalog says it should be. That is not a failure. It is a design problem, and it is solvable.",
    body: "We clean and organize Carrollton homes with respect for how they were built: hall closets that have to work harder, kitchens with personality, garages that became workshops. Recurring visits keep pollen, kitchen grease, and paper piles from taking the week back. The result is a house that feels tended, not staged.",
    angle: "Carrollton clients who want order that fits a real, lived-in house.",
    keyword: "house cleaner Carrollton TX",
    meta: "Cleaning, decluttering, and organizing in Carrollton, TX. Mid-century ranches to newer infill — a kind, precise studio for homes that need a system.",
  },
  {
    slug: "garland",
    name: "Garland",
    county: "Dallas County",
    drive: "East Dallas County",
    neighborhoods: ["Firewheel", "Downtown Garland", "Oaks", "Shores of Eastern Hills"],
    headline: "Home cleaning & organization in Garland, TX",
    intro:
      "Garland houses often have the thing newer suburbs traded away: space. Bigger lots, extra rooms, garages that can actually hold a life — if someone draws the map.",
    body: "Graceful Order draws that map. Firewheel and Eastern Hills homes get deep cleans, closet resets, and garage zones that make the extra square footage useful instead of heavy. Recurring maintenance is priced to be a rhythm, not a luxury you feel guilty about. Kindness plus precision, in a city that still values both.",
    angle: "Garland families who want the extra rooms to earn their keep.",
    keyword: "home organizer Garland TX",
    meta: "Home cleaning and organizing in Garland, TX. Firewheel to Downtown — deep cleans, garage systems, and recurring visits that keep the calm.",
  },
  {
    slug: "rowlett",
    name: "Rowlett",
    county: "Dallas / Rockwall County",
    drive: "Lake Ray Hubbard",
    neighborhoods: ["Downtown Rowlett", "Lakeside", "Sachse-adjacent", "Harbor"],
    headline: "Lake-house cleaning & organizing in Rowlett, TX",
    intro:
      "Rowlett sits on the water and on a calendar of guests. Lake weekends, extra towels, coolers, and the slow creep of ‘we’ll put that in the garage.’ Homes here need to recover quickly.",
    body: "We clean and organize Rowlett houses so they can host without a two-day scramble. Linen closets get honest capacity. Garages get zones for lake gear. Recurring visits handle the pollen and the guest-turnover dust. If you have been wanting the house to feel like the view, this is the work.",
    angle: "Rowlett homes that should feel as calm as the lake they face.",
    keyword: "house cleaner Rowlett TX",
    meta: "Cleaning and home organizing in Rowlett, TX. Lake houses, family homes, and guest-ready systems along Lake Ray Hubbard.",
  },
  {
    slug: "mesquite",
    name: "Mesquite",
    county: "Dallas County",
    drive: "Southeast Dallas County",
    neighborhoods: ["Town East", "Paschall Park", "Lawson", "Creek Crossing"],
    headline: "House cleaning & organizing in Mesquite, TX",
    intro:
      "Mesquite homes are working homes — full calendars, full pantries, and not a lot of patience for a service that only dusts the obvious.",
    body: "Graceful Order shows up for the whole job: a clean that includes the corners, a declutter that is never shaming, and organizing that a family will actually keep. Town East and Creek Crossing houses get the same standard we bring to Plano. Recurring visits are designed to be sustainable, because the point is next month, not just this Saturday.",
    angle: "Mesquite clients who want care and precision, without the performance.",
    keyword: "house cleaner Mesquite TX",
    meta: "House cleaning, decluttering, and organizing in Mesquite, TX. Recurring visits and one-time resets for real working homes.",
  },
  {
    slug: "grapevine",
    name: "Grapevine",
    county: "Tarrant County",
    drive: "DFW Airport / Historic Main",
    neighborhoods: ["Historic Main Street", "Silver Lake", "Dove, Grapevine", "Near DFW"],
    headline: "Airbnb cleaning & home organizing in Grapevine, TX",
    intro:
      "Grapevine lives two lives: the historic Main Street home, and the short-term rental that turns over between DFW arrivals. Both need a standard you can trust without standing in the room.",
    body: "Airbnb cleaning near DFW is a search we take seriously. Turnover work is a checklist plus pride — linens, kitchens, hidden crumbs, restock notes. Primary residences get the full Graceful Order treatment: deep cleans, closet systems, and a maintenance rhythm. Historic houses are handled with extra care for original details. Either way, the house is ready before the next knock.",
    angle:
      "Grapevine hosts and homeowners who need a precise, kind standard close to DFW.",
    keyword: "Airbnb cleaning Grapevine TX",
    meta: "Airbnb cleaning and home organizing in Grapevine, TX. Historic Main Street homes and DFW short-term rentals, cleaned and reset with care.",
  },
];

export function cityBySlug(slug: string | undefined) {
  if (!slug) return undefined;
  return CITIES.find((city) => city.slug === slug);
}

export const CITY_NAMES = CITIES.map((city) => city.name);
