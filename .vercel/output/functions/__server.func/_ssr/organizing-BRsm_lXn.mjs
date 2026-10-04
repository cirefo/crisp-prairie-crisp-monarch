import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Section, n as DiamondMark, t as Container } from "./section-BC1yw3st.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Button } from "./router-C_CQFnBx.mjs";
import { t as CtaBand } from "./cta-band-RJkPxo8u.mjs";
import { t as PageHero } from "./page-hero-CPz-iwHC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/organizing-BRsm_lXn.js
var import_jsx_runtime = require_jsx_runtime();
var rooms = [
	"Walk-in and reach-in closets",
	"Pantries and kitchen cabinets",
	"Garages and mudrooms",
	"Linen closets and baths",
	"Home offices and paper",
	"Kids’ rooms and play zones",
	"Laundry rooms",
	"Entry systems that actually catch the day"
];
function OrganizingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Organizing",
				title: "Home organizer in Plano — and the cities around it.",
				lede: "This is the work Graceful Order is named for. Not a purge for its own sake. Thoughtful arrangement: a place for what you keep, and a house that stays that way because someone comes back."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "grid gap-12 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/closet.jpg",
						alt: "Professionally organized walk-in closet with rose hangers and folded knits.",
						className: "photo aspect-4/3 w-full rounded-xl object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-medium text-ink",
							children: "Structure, not a personality transplant."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-ink-soft leading-relaxed",
							children: "Overwhelmed clients do not need a more disciplined version of themselves. They need drawers that make sense at 7:40 p.m. Amanda builds systems around how you actually live — then teaches the house to hold them with a light maintenance visit."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 grid gap-2 sm:grid-cols-2",
							children: rooms.map((room) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2 text-sm text-ink-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiamondMark, { className: "mt-1 text-gold" }), room]
							}, room))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/quote",
								search: { kind: "reset" },
								children: "Estimate a Reset"
							})
						})
					]
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				className: "bg-ivory",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
					className: "grid gap-8 lg:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl bg-surface p-6 shadow-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/pantry.jpg",
									alt: "Organized pantry jars",
									className: "photo mb-5 aspect-3/2 w-full rounded-lg object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-medium",
									children: "Pantry"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-ink-soft",
									children: "Zones, labels, and reach. From $110 as an add-on — often the fastest visible win in a Frisco or Plano kitchen."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl bg-surface p-6 shadow-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/garage.jpg",
									alt: "Organized garage",
									className: "photo mb-5 aspect-3/2 w-full rounded-lg object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-medium",
									children: "Garage"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-ink-soft",
									children: "Dallas garage organization with wall systems and honest zones. From $225. The room that stops being a second attic."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl bg-surface p-6 shadow-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/mudroom.jpg",
									alt: "Organized mudroom",
									className: "photo mb-5 aspect-3/2 w-full rounded-lg object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-medium",
									children: "Closet reset"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-ink-soft",
									children: "One closet, sorted and placed, from $95. The Graceful Reset folds several of these into a whole-home day."
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { title: "Let’s give the house a plan." })
		]
	});
}
//#endregion
export { OrganizingPage as component };
