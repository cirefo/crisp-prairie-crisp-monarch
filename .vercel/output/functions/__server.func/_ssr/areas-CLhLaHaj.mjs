import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Section, t as Container } from "./section-BC1yw3st.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as CITIES } from "./router-DtTeIfi4.mjs";
import { t as CtaBand } from "./cta-band-B58DCwYW.mjs";
import { t as PageHero } from "./page-hero-CPz-iwHC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/areas-CLhLaHaj.js
var import_jsx_runtime = require_jsx_runtime();
function AreasPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Areas served",
				title: "North Dallas, Collin County, and Grapevine.",
				lede: "Ten cities, one standard. Dedicated pages so you can see how the work fits the houses on your street — from West Plano estates to DFW short-term rentals."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: CITIES.map((city) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/areas/$city",
					params: { city: city.slug },
					className: "rounded-xl bg-surface p-6 shadow-card transition-[box-shadow] duration-150 hover:shadow-card-hover",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.7rem] font-medium uppercase tracking-[0.16em] text-gold-deep",
							children: city.county
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl font-medium text-ink",
							children: city.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-ink-soft",
							children: city.angle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm font-medium text-rose-deep",
							children: city.neighborhoods.slice(0, 3).join(" · ")
						})
					]
				}, city.slug))
			}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
		]
	});
}
//#endregion
export { AreasPage as component };
