import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Section, n as DiamondMark, t as Container } from "./section-BC1yw3st.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Button, s as PACKAGES } from "./router-DtTeIfi4.mjs";
import { t as CtaBand } from "./cta-band-B58DCwYW.mjs";
import { t as PageHero } from "./page-hero-CPz-iwHC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/packages-CNuwko_W.js
var import_jsx_runtime = require_jsx_runtime();
function PackagesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Packages",
				title: "Repeatable on purpose.",
				lede: "You can book a single closet or a single deep clean. Most homes do better with a named package — a true start, then a rhythm, or a move that does not eat the month."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
				className: "space-y-16",
				children: PACKAGES.map((pkg, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "grid items-center gap-8 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: index % 2 === 1 ? "lg:col-span-6 lg:order-2" : "lg:col-span-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: pkg.image,
							alt: "",
							className: "photo aspect-4/3 w-full rounded-xl object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold-deep",
								children: pkg.priceHint
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-3xl font-medium text-ink sm:text-4xl",
								children: pkg.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-base leading-relaxed text-ink-soft",
								children: [
									pkg.summary,
									" ",
									pkg.ideal
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-2 text-sm text-ink-soft",
								children: pkg.includes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiamondMark, { className: "mt-1 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
								}, item))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "mt-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/quote",
									search: { kind: pkg.id },
									children: ["Estimate ", pkg.name]
								})
							})
						]
					})]
				}, pkg.id))
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				className: "bg-ivory",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-medium text-ink",
							children: "Prefer to choose à la carte?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-ink-soft",
							children: "Deep cleans, recurring visits, closet resets, pantry systems, garage organization, ovens, grout treatments — all live in the quote calculator. Packages are simply the combinations Amanda recommends most."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services",
								children: "Browse services"
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
		]
	});
}
//#endregion
export { PackagesPage as component };
