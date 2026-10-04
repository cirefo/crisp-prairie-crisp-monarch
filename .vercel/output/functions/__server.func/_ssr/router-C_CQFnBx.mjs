import { i as __toESM } from "../_runtime.mjs";
import { c as require_react, l as require_jsx_runtime, s as Slot } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { i as Rule, s as cn, t as Container } from "./section-BC1yw3st.mjs";
import { _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, q as notFound, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, n as TriangleAlert, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cities-C_uDdfPa.js
var CITIES = [
	{
		slug: "plano",
		name: "Plano",
		county: "Collin County",
		drive: "Home base",
		neighborhoods: [
			"West Plano",
			"Willow Bend",
			"Legacy",
			"Deerfield",
			"Whiffletree"
		],
		headline: "Home organizer & recurring cleaning in Plano, TX",
		intro: "Plano is full of beautiful houses that are harder to live in than they look. Between Legacy offices, school calendars, and closets that were never given a system, most homes here do not need a lecture. They need a kind, precise hand — and a visit that comes back.",
		body: "Amanda works across West Plano estates, Willow Bend family homes, and the newer Legacy corridor, where kitchens are generous and garages have become a second attic. Graceful Order is built for that Plano rhythm: a deep reset when the house has slipped, then Graceful Maintenance so the calm does not depend on a heroic Saturday. Closets, pantries, and playrooms are organized as carefully as the counters are cleaned.",
		angle: "If you have been searching for a home organizer in Plano who will also keep the house honestly clean, this is the studio.",
		keyword: "home organizer Plano TX",
		meta: "Home organizer and recurring cleaning in Plano, TX. Graceful Order cleans, declutters, and organizes West Plano, Willow Bend, and Legacy homes — with a repeatable rhythm."
	},
	{
		slug: "frisco",
		name: "Frisco",
		county: "Collin / Denton County",
		drive: "North Collin",
		neighborhoods: [
			"Wade Park",
			"Phillips Creek Ranch",
			"Starwood",
			"Newman Village",
			"The Trails"
		],
		headline: "Recurring cleaning & home organization in Frisco, TX",
		intro: "Frisco builds big. Walk-in closets the size of bedrooms, mudrooms that swallow team uniforms, pantries that started organized and slowly became a second grocery store. New construction gives you square footage. It does not give you a system.",
		body: "Graceful Order is a natural fit for Frisco families who want the house to look as considered as the rest of their life. Recurring cleaning Frisco TX searches usually lead to a maid service. We are that — and the organizer who labels the pantry, zones the garage, and leaves a light weekly or biweekly rhythm so it actually holds. The Star, PGA, and school sports do not pause for clutter. We build around them.",
		angle: "Recurring cleaning in Frisco with organizing that respects how a busy household actually moves.",
		keyword: "recurring cleaning Frisco TX",
		meta: "Recurring cleaning and home organization in Frisco, TX. Closets, pantries, garages, and a standing rhythm for new-construction homes that need systems, not more stuff."
	},
	{
		slug: "mckinney",
		name: "McKinney",
		county: "Collin County",
		drive: "Northeast Collin",
		neighborhoods: [
			"Historic Downtown",
			"Adriatica",
			"Stonebridge",
			"Trinity Falls",
			"Craig Ranch"
		],
		headline: "Deep cleaning & organizing in McKinney, TX",
		intro: "McKinney holds two kinds of homes: the square’s older cottages with charming, awkward storage, and the master-planned houses with more cabinets than a plan. Both collect the same thing — decisions that never got finished.",
		body: "Deep cleaning McKinney searches often mean ‘please make it feel new again.’ We do that, then we organize so the newness has somewhere to live. Historic bungalows get tailored systems that respect small closets. Adriatica and Trinity Falls homes get zone-based kitchens, garages, and linen closets that match the architecture. Either way, the visit is calm, precise, and kind.",
		angle: "Deep cleaning in McKinney with organization that fits the house you actually have.",
		keyword: "deep cleaning McKinney",
		meta: "Deep cleaning and home organizing in McKinney, TX. From Historic Square cottages to Trinity Falls, Graceful Order resets rooms and gives them a system that lasts."
	},
	{
		slug: "dallas",
		name: "Dallas",
		county: "Dallas County",
		drive: "Dallas proper",
		neighborhoods: [
			"Lakewood",
			"Preston Hollow",
			"Lake Highlands",
			"Uptown",
			"East Dallas"
		],
		headline: "Garage organization, cleaning & home systems in Dallas, TX",
		intro: "Dallas homes are not one type of problem. A Lakewood bungalow, a Preston Hollow estate, and an Uptown high-rise each fail in their own way — attics, four-car garages, or a single coat closet doing the work of a mudroom.",
		body: "Garage organization in Dallas is one of the searches that finds us, and for good reason: the garage is where good intentions go to wait. We also clean and organize interiors, from White Rock bungalows to towers that need ruthless editing. Recurring visits keep high-rise dust and family-home entropy from stacking up. The work is the same in every ZIP: care, detail, and a system you can keep.",
		angle: "Dallas clients who want garage systems, closet resets, and a cleaner who thinks like an organizer.",
		keyword: "garage organization Dallas",
		meta: "Garage organization, home organizing, and cleaning in Dallas, TX. Lakewood, Preston Hollow, Lake Highlands, Uptown — systems that fit the house, not a one-size closet kit."
	},
	{
		slug: "allen",
		name: "Allen",
		county: "Collin County",
		drive: "East of Plano",
		neighborhoods: [
			"Watters Creek",
			"Twin Creeks",
			"The Village at Allen",
			"Montgomery Farm"
		],
		headline: "Home organizing & housekeeping in Allen, TX",
		intro: "Allen runs on families, fields, and full calendars. The house is the place everything lands at 7:40 p.m. If the landing strip is chaos, the whole evening is.",
		body: "Graceful Order designs that landing strip: hooks that get used, baskets that make sense, a kitchen that can produce dinner without a scavenger hunt. Recurring cleaning keeps it honest between soccer seasons. Watters Creek townhomes and Twin Creeks houses get the same standard — kindness first, then precision — because an overwhelmed home does not need a stricter owner. It needs a better setup.",
		angle: "Allen homes that need a repeatable system, not a one-weekend purge.",
		keyword: "home organizer Allen TX",
		meta: "Home organizing and recurring housekeeping in Allen, TX. Watters Creek to Twin Creeks — clean, declutter, and organize so weeknights feel lighter."
	},
	{
		slug: "carrollton",
		name: "Carrollton",
		county: "Dallas / Denton County",
		drive: "West of Plano",
		neighborhoods: [
			"Downtown Square",
			"Josey Ranch",
			"North Carrollton",
			"Old Downtown"
		],
		headline: "Cleaning & organizing in Carrollton, TX",
		intro: "Carrollton’s mix of mid-century ranches and newer infill means storage is rarely where a catalog says it should be. That is not a failure. It is a design problem, and it is solvable.",
		body: "We clean and organize Carrollton homes with respect for how they were built: hall closets that have to work harder, kitchens with personality, garages that became workshops. Recurring visits keep pollen, kitchen grease, and paper piles from taking the week back. The result is a house that feels tended, not staged.",
		angle: "Carrollton clients who want order that fits a real, lived-in house.",
		keyword: "house cleaner Carrollton TX",
		meta: "Cleaning, decluttering, and organizing in Carrollton, TX. Mid-century ranches to newer infill — a kind, precise studio for homes that need a system."
	},
	{
		slug: "garland",
		name: "Garland",
		county: "Dallas County",
		drive: "East Dallas County",
		neighborhoods: [
			"Firewheel",
			"Downtown Garland",
			"Oaks",
			"Shores of Eastern Hills"
		],
		headline: "Home cleaning & organization in Garland, TX",
		intro: "Garland houses often have the thing newer suburbs traded away: space. Bigger lots, extra rooms, garages that can actually hold a life — if someone draws the map.",
		body: "Graceful Order draws that map. Firewheel and Eastern Hills homes get deep cleans, closet resets, and garage zones that make the extra square footage useful instead of heavy. Recurring maintenance is priced to be a rhythm, not a luxury you feel guilty about. Kindness plus precision, in a city that still values both.",
		angle: "Garland families who want the extra rooms to earn their keep.",
		keyword: "home organizer Garland TX",
		meta: "Home cleaning and organizing in Garland, TX. Firewheel to Downtown — deep cleans, garage systems, and recurring visits that keep the calm."
	},
	{
		slug: "rowlett",
		name: "Rowlett",
		county: "Dallas / Rockwall County",
		drive: "Lake Ray Hubbard",
		neighborhoods: [
			"Downtown Rowlett",
			"Lakeside",
			"Sachse-adjacent",
			"Harbor"
		],
		headline: "Lake-house cleaning & organizing in Rowlett, TX",
		intro: "Rowlett sits on the water and on a calendar of guests. Lake weekends, extra towels, coolers, and the slow creep of ‘we’ll put that in the garage.’ Homes here need to recover quickly.",
		body: "We clean and organize Rowlett houses so they can host without a two-day scramble. Linen closets get honest capacity. Garages get zones for lake gear. Recurring visits handle the pollen and the guest-turnover dust. If you have been wanting the house to feel like the view, this is the work.",
		angle: "Rowlett homes that should feel as calm as the lake they face.",
		keyword: "house cleaner Rowlett TX",
		meta: "Cleaning and home organizing in Rowlett, TX. Lake houses, family homes, and guest-ready systems along Lake Ray Hubbard."
	},
	{
		slug: "mesquite",
		name: "Mesquite",
		county: "Dallas County",
		drive: "Southeast Dallas County",
		neighborhoods: [
			"Town East",
			"Paschall Park",
			"Lawson",
			"Creek Crossing"
		],
		headline: "House cleaning & organizing in Mesquite, TX",
		intro: "Mesquite homes are working homes — full calendars, full pantries, and not a lot of patience for a service that only dusts the obvious.",
		body: "Graceful Order shows up for the whole job: a clean that includes the corners, a declutter that is never shaming, and organizing that a family will actually keep. Town East and Creek Crossing houses get the same standard we bring to Plano. Recurring visits are designed to be sustainable, because the point is next month, not just this Saturday.",
		angle: "Mesquite clients who want care and precision, without the performance.",
		keyword: "house cleaner Mesquite TX",
		meta: "House cleaning, decluttering, and organizing in Mesquite, TX. Recurring visits and one-time resets for real working homes."
	},
	{
		slug: "grapevine",
		name: "Grapevine",
		county: "Tarrant County",
		drive: "DFW Airport / Historic Main",
		neighborhoods: [
			"Historic Main Street",
			"Silver Lake",
			"Dove, Grapevine",
			"Near DFW"
		],
		headline: "Airbnb cleaning & home organizing in Grapevine, TX",
		intro: "Grapevine lives two lives: the historic Main Street home, and the short-term rental that turns over between DFW arrivals. Both need a standard you can trust without standing in the room.",
		body: "Airbnb cleaning near DFW is a search we take seriously. Turnover work is a checklist plus pride — linens, kitchens, hidden crumbs, restock notes. Primary residences get the full Graceful Order treatment: deep cleans, closet systems, and a maintenance rhythm. Historic houses are handled with extra care for original details. Either way, the house is ready before the next knock.",
		angle: "Grapevine hosts and homeowners who need a precise, kind standard close to DFW.",
		keyword: "Airbnb cleaning Grapevine TX",
		meta: "Airbnb cleaning and home organizing in Grapevine, TX. Historic Main Street homes and DFW short-term rentals, cleaned and reset with care."
	}
];
function cityBySlug(slug) {
	if (!slug) return void 0;
	return CITIES.find((city) => city.slug === slug);
}
CITIES.map((city) => city.name);
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-C_CQFnBx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var TAGLINES = [
	"Where calm meets careful order.",
	"Thoughtfully arranged. Beautifully maintained.",
	"Organizing with care, clarity, and grace.",
	"Bringing ease, order, and peace to your space.",
	"Because you have better things to do."
];
var PRIMARY_TAGLINE = TAGLINES[0];
TAGLINES[4];
var METHOD = [
	{
		step: "01",
		title: "Walk through",
		body: "We look without judgment. How you actually live — not how a catalog thinks you should — is the brief."
	},
	{
		step: "02",
		title: "Sort",
		body: "Keep, relocate, release. Decisions get made kindly and out loud, so nothing important disappears into a donation bag."
	},
	{
		step: "03",
		title: "Place",
		body: "Every kept thing earns a home. Labels, zones, and reach that match the person who uses the drawer."
	},
	{
		step: "04",
		title: "Rhythm",
		body: "A light, repeatable visit so the calm does not depend on a heroic Saturday. This is the French part: mise en place, at home."
	}
];
var PILLARS = [
	{
		slug: "organizing",
		title: "Organizing",
		href: "/services/organizing",
		image: "/images/closet.jpg",
		kicker: "The lasting part",
		body: "Closets, pantries, garages, offices, and the rooms that have been ‘meaning to.’ Systems you can keep on a Tuesday."
	},
	{
		slug: "cleaning",
		title: "Cleaning",
		href: "/services/cleaning",
		image: "/images/bathroom.jpg",
		kicker: "Surfaces, honestly",
		body: "Recurring visits and deep cleans that include the corners. Clean is the floor; organized is the house standing up straight."
	},
	{
		slug: "decluttering",
		title: "Decluttering",
		href: "/services/decluttering",
		image: "/images/mudroom.jpg",
		kicker: "Kind, not extreme",
		body: "We do not shame a full house. We help it tell the truth about what you use, love, and are ready to release."
	},
	{
		slug: "sanitizing",
		title: "Sanitizing",
		href: "/services/cleaning",
		image: "/images/kitchen.jpg",
		kicker: "Quiet care",
		body: "Kitchens, baths, high-touch, and guest turnovers — done without theater, with a standard you can trust."
	}
];
var PACKAGES = [
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
			"A simple maintenance plan so it holds"
		]
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
			"Notes if something is starting to slip"
		]
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
			"Optional garage and pantry add-ons"
		]
	}
];
var FAQS = [
	{
		q: "Are you a maid service, or an organizing studio?",
		a: "Both, on purpose. Most cleaning companies wipe and leave the piles. Most organizers do not mop. Graceful Order cleans, sanitizes, declutters, and organizes — then returns on a rhythm so the work does not evaporate. Organizing is not an add-on we mention. It is the point."
	},
	{
		q: "How does pricing work?",
		a: "A recurring clean for a 3 bedroom, 2 bath home is $150 per visit. A deep clean for the same home is $350. Homes with 4 or more bedrooms start at $500 for a deep clean (4 bed / 2.5 bath). Additional bedrooms are $25, additional full baths $40, half baths $30, and extra living rooms $30. Organizing packages and add-ons — ovens, grout, closets, pantries, garages — are itemized in the quote calculator."
	},
	{
		q: "Do you organize on every visit?",
		a: "On Graceful Maintenance visits, we clean thoroughly and do light organizing: putting systems back to true, not a full closet rebuild every week. Full organizing lives in The Graceful Reset, Move With Grace, and à-la-carte closet, pantry, garage, and office resets."
	},
	{
		q: "Will you throw my things away?",
		a: "Never without you. Decluttering here is a conversation. We sort together, or to a list you approve. Keep, relocate, release — and release only means donation or discard with your say. Kindness is not a slogan. It is how the day is run."
	},
	{
		q: "Do I have to be home?",
		a: "For a first Reset or any organizing session, yes — at least for the walk-through. Recurring maintenance can be done while you are at work once we know the house, the pets, and the alarm. Many Plano and Frisco clients leave a lockbox and a note."
	},
	{
		q: "Which cities do you serve?",
		a: "Plano, Allen, Carrollton, Dallas, Garland, Rowlett, McKinney, Frisco, Mesquite, and Grapevine. If you are just outside that list, ask — drive time is the only limit."
	},
	{
		q: "Do you clean Airbnbs and short-term rentals?",
		a: "Yes. Grapevine (near DFW), Dallas, and Frisco turnovers are a regular part of the work. The standard is guest-ready: linens, kitchen, hidden crumbs, restock notes. Same care as a primary home, with a checklist a host can trust."
	},
	{
		q: "What supplies do you use?",
		a: "Professional, surface-safe products. If you have preferences — fragrance-free, pet-safe, a specific brand — say so on the quote form. We will not experiment on marble, unsealed wood, or a baby’s room."
	},
	{
		q: "How soon can you come?",
		a: "Recurring routes fill by neighborhood. One-time Resets and move-outs are booked after a short walk-through or a detailed photo set. Submit a quote — Amanda replies within one business day with timing."
	},
	{
		q: "Is the online number the final invoice?",
		a: "It is a transparent starting estimate from the published menu. Heavy organizing, hoarding-level volume, pet hair beyond typical, or neglected grout can adjust the figure. You will see that before work begins. No surprise invoices."
	}
];
var NAV = [
	{
		href: "/services",
		label: "Services"
	},
	{
		href: "/packages",
		label: "Packages"
	},
	{
		href: "/quote",
		label: "Pricing"
	},
	{
		href: "/areas",
		label: "Areas"
	},
	{
		href: "/about",
		label: "About"
	},
	{
		href: "/faq",
		label: "FAQ"
	}
];
var SITE = {
	name: "Graceful Order",
	owner: "Amanda French",
	region: "North Dallas & Collin County",
	email: "hello@gracefulorder.com",
	tagline: PRIMARY_TAGLINE
};
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-sans font-medium transition-[background-color,color,box-shadow,transform,opacity] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose", {
	variants: {
		variant: {
			primary: "bg-rose text-ivory hover:bg-rose-deep",
			gold: "bg-gold-deep text-ivory hover:bg-gold",
			outline: "bg-transparent text-ink shadow-[0_0_0_1px_rgba(42,34,30,0.16)] hover:bg-blush/50",
			ghost: "bg-transparent text-ink hover:bg-blush/40",
			inverse: "bg-ivory text-ink hover:bg-champagne"
		},
		size: {
			sm: "min-h-10 px-4 text-sm rounded-md",
			md: "min-h-11 px-5 text-sm rounded-lg",
			lg: "min-h-12 px-6 text-base rounded-lg"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border/80 bg-paper/90 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-h-11 items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose",
					"aria-label": "Graceful Order home",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/brand/emblem-light.png",
						alt: "",
						className: "h-12 w-auto object-contain sm:h-14"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex flex-col justify-center leading-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-[1.55rem] font-medium tracking-tight text-ink sm:text-[1.75rem]",
							children: "Graceful"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 text-[0.62rem] font-medium uppercase tracking-[0.38em] text-gold-deep",
							children: "Order"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-0.5 lg:flex",
					"aria-label": "Primary",
					children: NAV.map((item) => {
						const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.href,
							className: cn("inline-flex min-h-11 items-center px-3 text-[0.8rem] font-medium tracking-wide transition-colors duration-150", active ? "text-ink" : "text-ink-soft hover:text-ink"),
							children: item.label
						}, item.href);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						className: "hidden sm:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/quote",
							children: "Request a quote"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex size-11 items-center justify-center rounded-md text-ink lg:hidden",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-paper lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-6xl flex-col px-5 py-4",
				"aria-label": "Mobile",
				children: [
					NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.href,
						className: "flex min-h-12 items-center border-b border-border/70 text-base text-ink",
						children: item.label
					}, item.href)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/quote",
						className: "mt-4 inline-flex min-h-12 items-center justify-center rounded-lg bg-rose text-ivory",
						children: "Request a quote"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "mt-2 inline-flex min-h-12 items-center justify-center text-ink-soft",
						children: "Contact"
					})
				]
			})
		}) : null]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-footer text-footer-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-16 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 md:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/brand/emblem-dark.png",
									alt: "",
									className: "h-16 w-auto object-contain"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex flex-col leading-none",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-3xl font-medium text-footer-fg",
										children: "Graceful"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1.5 text-[0.7rem] font-medium uppercase tracking-[0.4em] text-gold",
										children: "Order"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 max-w-sm text-sm leading-relaxed text-footer-muted",
								children: [
									SITE.tagline,
									" Cleaning, sanitizing, decluttering, and organizing for homes across ",
									SITE.region,
									" — by ",
									SITE.owner,
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 font-display text-xl italic text-gold",
								children: "Because you have better things to do."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 sm:grid-cols-3 md:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold",
								children: "Visit"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-4 space-y-2 text-sm text-footer-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/services",
										className: "hover:text-footer-fg",
										children: "Services"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/packages",
										className: "hover:text-footer-fg",
										children: "Packages"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/quote",
										className: "hover:text-footer-fg",
										children: "Pricing & quote"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/about",
										className: "hover:text-footer-fg",
										children: "About Amanda"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/faq",
										className: "hover:text-footer-fg",
										children: "FAQ"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										className: "hover:text-footer-fg",
										children: "Contact"
									}) })
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold",
								children: "Work"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-4 space-y-2 text-sm text-footer-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/services/organizing",
										className: "hover:text-footer-fg",
										children: "Organizing"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/services/cleaning",
										className: "hover:text-footer-fg",
										children: "Cleaning"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/services/decluttering",
										className: "hover:text-footer-fg",
										children: "Decluttering"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/services/airbnb",
										className: "hover:text-footer-fg",
										children: "Airbnb & turnovers"
									}) })
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold",
								children: "Areas"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2 text-sm text-footer-muted",
								children: CITIES.map((city) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/areas/$city",
									params: { city: city.slug },
									className: "hover:text-footer-fg",
									children: city.name
								}) }, city.slug))
							})] })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, { className: "my-10 text-gold/70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 text-xs text-footer-muted sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						SITE.name,
						". Kindness + precision."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "hover:text-footer-fg",
							children: "Privacy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mx-2 text-gold/50",
							children: "·"
						}),
						"Serving ",
						SITE.region
					] })]
				})
			]
		})
	});
}
var styles_default = "/assets/styles-ClsKh_zv.css";
var APP_NAME = "Graceful Order";
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "mx-auto flex min-h-[60vh] max-w-xl flex-col justify-center px-6 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gold-deep",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl font-medium text-ink",
				children: "This page is not in the house."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-ink-soft",
				children: "It may have been put away. The rooms we keep are home, services, packages, and a quote."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-8 inline-flex min-h-11 items-center justify-center rounded-lg bg-rose px-5 text-sm font-medium text-ivory",
				children: "Back to the front door"
			})
		]
	});
}
var Route$14 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Graceful Order is Amanda French’s organizing-first cleaning studio in North Dallas. Cleaning, sanitizing, decluttering, and organizing — with a repeatable rhythm."
			},
			{
				name: "theme-color",
				content: "#F6F1EA"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Outfit:wght@300;400;500;600;700&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: RootDocument,
	errorComponent: AppErrorComponent,
	notFoundComponent: NotFound
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-screen bg-paper font-sans text-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#main",
						className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-rose focus:px-4 focus:py-2 focus:text-ivory",
						children: "Skip to content"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$13 = () => import("./routes-BkIGsz6-.mjs");
var Route$13 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$13, "component"),
	head: () => ({ meta: [{ title: "Graceful Order | Home organizer & cleaning in Plano, TX" }, {
		name: "description",
		content: "Where calm meets careful order. Amanda French cleans, sanitizes, declutters, and organizes homes in Plano, Frisco, McKinney, Dallas, and nearby cities — with a repeatable rhythm."
	}] })
});
var $$splitComponentImporter$12 = () => import("./about-D05qR7UT.mjs");
var Route$12 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$12, "component"),
	head: () => ({ meta: [{ title: "About Amanda French | Graceful Order" }, {
		name: "description",
		content: "Amanda French founded Graceful Order for homes that need more than a wipe-down: cleaning, decluttering, and organizing with kindness and precision across North Dallas."
	}] })
});
var $$splitComponentImporter$11 = () => import("./contact-C2iU4L6X.mjs");
var Route$11 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$11, "component"),
	head: () => ({ meta: [{ title: "Contact Amanda French | Graceful Order" }, {
		name: "description",
		content: "Write Graceful Order. Amanda French replies within one business day for homes in Plano, Frisco, McKinney, Dallas, and nearby cities."
	}] })
});
var $$splitComponentImporter$10 = () => import("./faq-CfSNBpAP.mjs");
var Route$10 = createFileRoute("/faq")({
	component: lazyRouteComponent($$splitComponentImporter$10, "component"),
	head: () => ({ meta: [{ title: "FAQ | Pricing, organizing, and visits — Graceful Order" }, {
		name: "description",
		content: "Graceful Order FAQ: pricing for 3 bed / 2 bath homes, organizing vs cleaning, cities served, Airbnb turnovers, and whether you need to be home."
	}] })
});
var $$splitComponentImporter$9 = () => import("./packages-DGKqlAEt.mjs");
var Route$9 = createFileRoute("/packages")({
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
	head: () => ({ meta: [{ title: "Signature packages | Graceful Order" }, {
		name: "description",
		content: "The Graceful Reset, Graceful Maintenance, and Move With Grace — repeatable packages for cleaning, decluttering, and organizing in North Dallas."
	}] })
});
var $$splitComponentImporter$8 = () => import("./privacy-BNTPNnyG.mjs");
var Route$8 = createFileRoute("/privacy")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	head: () => ({ meta: [{ title: "Privacy | Graceful Order" }, {
		name: "description",
		content: "How Graceful Order handles quote and contact details."
	}] })
});
var $$splitComponentImporter$7 = () => import("./quote-B1A5VGmR.mjs");
var KINDS = [
	"maintenance",
	"deep",
	"reset",
	"move"
];
function isKind(value) {
	return typeof value === "string" && KINDS.includes(value);
}
var Route$7 = createFileRoute("/quote")({
	validateSearch: (search) => ({ kind: isKind(search.kind) ? search.kind : void 0 }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => ({ meta: [{ title: "Request a quote | Graceful Order pricing" }, {
		name: "description",
		content: "Transparent Graceful Order pricing: recurring 3 bed / 2 bath $150, deep clean $350, 4+ bedroom deep clean $500. Add bedrooms, baths, and organizing — then send Amanda a quote."
	}] })
});
var $$splitComponentImporter$6 = () => import("./areas-D-H7zMvM.mjs");
var Route$6 = createFileRoute("/areas/")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: () => ({ meta: [{ title: "Service areas | Plano, Frisco, McKinney, Dallas & more — Graceful Order" }, {
		name: "description",
		content: "Graceful Order serves Plano, Allen, Carrollton, Dallas, Garland, Rowlett, McKinney, Frisco, Mesquite, and Grapevine, TX — organizing-first cleaning in each city."
	}] })
});
var $$splitComponentImporter$5 = () => import("../_city-kDnnu-z8.mjs");
var Route$5 = createFileRoute("/areas/$city")({
	loader: ({ params }) => {
		const city = cityBySlug(params.city);
		if (!city) throw notFound();
		return { city };
	},
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.city.headline ?? "Service area"} | Graceful Order` }, {
		name: "description",
		content: loaderData?.city.meta ?? ""
	}] })
});
var $$splitComponentImporter$4 = () => import("./services-DzT_4GsS.mjs");
var Route$4 = createFileRoute("/services/")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: "Services | Organizing, cleaning, decluttering — Graceful Order" }, {
		name: "description",
		content: "Organizing, cleaning, sanitizing, decluttering, and Airbnb turnovers from Graceful Order. North Dallas homes that need a system, not just a wipe-down."
	}] })
});
var $$splitComponentImporter$3 = () => import("./airbnb-DP5MsZJN.mjs");
var Route$3 = createFileRoute("/services/airbnb")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "Airbnb cleaning near DFW | Grapevine, Dallas, Frisco — Graceful Order" }, {
		name: "description",
		content: "Airbnb cleaning near me in Grapevine, Dallas, and Frisco. Guest-ready turnovers with a checklist a host can trust — plus organizing for primary homes."
	}] })
});
var $$splitComponentImporter$2 = () => import("./cleaning-BbeiLL63.mjs");
var Route$2 = createFileRoute("/services/cleaning")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Recurring & deep cleaning in Frisco, Plano & McKinney | Graceful Order" }, {
		name: "description",
		content: "Recurring cleaning in Frisco TX and deep cleaning in McKinney, Plano, and Dallas. $150 per visit for 3 bed / 2 bath; $350 deep clean — plus sanitizing and light organizing."
	}] })
});
var $$splitComponentImporter$1 = () => import("./decluttering-D_Zp5Gam.mjs");
var Route$1 = createFileRoute("/services/decluttering")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: "Kind decluttering in North Dallas | Graceful Order" }, {
		name: "description",
		content: "Decluttering with care in Plano, Frisco, Dallas, and nearby cities. Keep, relocate, release — never without you. Then we organize so the space stays clear."
	}] })
});
var $$splitComponentImporter = () => import("./organizing-BRsm_lXn.mjs");
var Route = createFileRoute("/services/organizing")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({ meta: [{ title: "Home organizer in Plano, Frisco, McKinney & Dallas | Graceful Order" }, {
		name: "description",
		content: "Home organizer in Plano TX and across North Dallas. Closets, pantries, garages, and offices — systems you can keep, with cleaning that supports them."
	}] })
});
var IndexRoute = Route$13.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$14
});
var AboutRoute = Route$12.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$14
});
var ContactRoute = Route$11.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$14
});
var FaqRoute = Route$10.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$14
});
var PackagesRoute = Route$9.update({
	id: "/packages",
	path: "/packages",
	getParentRoute: () => Route$14
});
var PrivacyRoute = Route$8.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$14
});
var QuoteRoute = Route$7.update({
	id: "/quote",
	path: "/quote",
	getParentRoute: () => Route$14
});
var AreasIndexRoute = Route$6.update({
	id: "/areas/",
	path: "/areas/",
	getParentRoute: () => Route$14
});
var AreasCityRoute = Route$5.update({
	id: "/areas/$city",
	path: "/areas/$city",
	getParentRoute: () => Route$14
});
var ServicesIndexRoute = Route$4.update({
	id: "/services/",
	path: "/services/",
	getParentRoute: () => Route$14
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	FaqRoute,
	PackagesRoute,
	PrivacyRoute,
	QuoteRoute,
	AreasCityRoute,
	ServicesAirbnbRoute: Route$3.update({
		id: "/services/airbnb",
		path: "/services/airbnb",
		getParentRoute: () => Route$14
	}),
	ServicesCleaningRoute: Route$2.update({
		id: "/services/cleaning",
		path: "/services/cleaning",
		getParentRoute: () => Route$14
	}),
	ServicesDeclutteringRoute: Route$1.update({
		id: "/services/decluttering",
		path: "/services/decluttering",
		getParentRoute: () => Route$14
	}),
	ServicesOrganizingRoute: Route.update({
		id: "/services/organizing",
		path: "/services/organizing",
		getParentRoute: () => Route$14
	}),
	AreasIndexRoute,
	ServicesIndexRoute
};
var routeTree = Route$14._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultPreload: "intent",
		scrollRestoration: true
	});
}
//#endregion
export { FAQS as a, PILLARS as c, Button as i, SITE as l, Route$5 as n, METHOD as o, Route$7 as r, PACKAGES as s, router_exports as t, CITIES as u };
