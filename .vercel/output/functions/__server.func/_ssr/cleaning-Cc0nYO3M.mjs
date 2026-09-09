import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Section, n as DiamondMark, t as Container } from "./section-BC1yw3st.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Button } from "./router-DtTeIfi4.mjs";
import { t as CtaBand } from "./cta-band-B58DCwYW.mjs";
import { t as PageHero } from "./page-hero-CPz-iwHC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cleaning-Cc0nYO3M.js
var import_jsx_runtime = require_jsx_runtime();
function CleaningPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Cleaning & sanitizing",
				title: "Recurring cleaning that includes the corners.",
				lede: "A 3 bedroom, 2 bath home is $150 per visit for Graceful Maintenance, $350 for a deep clean. Larger homes and extras are itemized. The difference is what we do with the piles: we do not dust around them."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "grid gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-medium",
						children: "Two ways to keep a house honest"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-surface p-6 shadow-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[0.7rem] font-medium uppercase tracking-[0.16em] text-gold-deep",
									children: "From $150 · 3 bed / 2 bath"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-2xl",
									children: "Graceful Maintenance"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-ink-soft",
									children: "Weekly, biweekly, or monthly. Thorough recurring clean plus light organizing of systems already in place. The repeatable service the brand is built on."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-surface p-6 shadow-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[0.7rem] font-medium uppercase tracking-[0.16em] text-gold-deep",
									children: "From $350 · 3 bed / 2 bath · $500 for 4+ / 2.5"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-2xl",
									children: "Deep clean"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-ink-soft",
									children: "Baseboards, grout lines, the oven you have been avoiding, inside the microwave, the shower glass. Pair it with The Graceful Reset if the house also needs a system."
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/quote",
							search: { kind: "maintenance" },
							children: "Price a recurring visit"
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/bathroom.jpg",
						alt: "Spa-like bathroom after a deep clean.",
						className: "photo aspect-4/3 w-full rounded-xl object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/kitchen.jpg",
						alt: "Kitchen after a professional deep clean.",
						className: "photo aspect-4/3 w-full rounded-xl object-cover"
					})]
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				className: "bg-ivory",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-medium",
					children: "On the menu"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: [
						"Kitchen surfaces, sink, appliance exteriors",
						"Bathrooms, showers, mirrors, sanitizing",
						"Floors, dusting, beds made to house standard",
						"Microwave, oven, gas stove as add-ons",
						"Extensive grout treatment as an add-on",
						"Interior windows, baseboards, laundry room"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-2 rounded-lg bg-surface px-4 py-3 text-sm text-ink-soft shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiamondMark, { className: "mt-0.5 text-gold" }), item]
					}, item))
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
		]
	});
}
//#endregion
export { CleaningPage as component };
