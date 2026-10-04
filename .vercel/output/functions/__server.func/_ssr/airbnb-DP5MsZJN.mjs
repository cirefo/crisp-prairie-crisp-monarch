import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Section, n as DiamondMark, t as Container } from "./section-BC1yw3st.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Button } from "./router-C_CQFnBx.mjs";
import { t as CtaBand } from "./cta-band-RJkPxo8u.mjs";
import { t as PageHero } from "./page-hero-CPz-iwHC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/airbnb-DP5MsZJN.js
var import_jsx_runtime = require_jsx_runtime();
function AirbnbPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Short-term rentals",
				title: "Airbnb cleaning near DFW — guest-ready, not guessed.",
				lede: "Grapevine sits against the airport. Dallas and Frisco hosts turn units on tight clocks. Graceful Order runs a checklist plus pride: linens, kitchen, hidden crumbs, restock notes. Same standard as a primary home."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "grid gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-medium",
						children: "On every turnover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-3",
						children: [
							"Full clean of living space, kitchen, baths",
							"Linens reset to your house standard",
							"Kitchen restock notes (coffee, paper, dish soap)",
							"Hidden crumbs, hair, high-touch sanitizing",
							"Optional closet and pantry systems for supplies",
							"Photo or note if something needs the owner"
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2 text-ink-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiamondMark, { className: "mt-1 text-gold" }), item]
						}, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/quote",
							search: { kind: "maintenance" },
							children: "Price a turnover"
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/bedroom.jpg",
					alt: "A serene guest bedroom made to hotel standard.",
					className: "photo aspect-4/3 w-full rounded-xl object-cover"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
				title: "Hosts, send the unit size.",
				lede: "Use the quote calculator with your bedroom and bath count, then mention it is a short-term rental in the notes."
			})
		]
	});
}
//#endregion
export { AirbnbPage as component };
