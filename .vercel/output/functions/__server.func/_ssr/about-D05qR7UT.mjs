import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Section, t as Container } from "./section-BC1yw3st.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Button, o as METHOD } from "./router-C_CQFnBx.mjs";
import { t as CtaBand } from "./cta-band-RJkPxo8u.mjs";
import { t as PageHero } from "./page-hero-CPz-iwHC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-D05qR7UT.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "About",
				title: "Amanda French. Kindness + precision.",
				lede: "The last name is not a costume. It is a small permission to take order seriously — and to do it with grace instead of rigidity. Graceful Order is her studio for homes that have better things to do than start over every weekend."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "grid items-start gap-12 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/pantry.jpg",
						alt: "A pantry shelf after Amanda’s organizing — labeled jars, even rows, warm light.",
						className: "photo aspect-3/2 w-full rounded-xl object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/closet.jpg",
						alt: "An organized closet with rose hangers and folded knits.",
						className: "photo mt-4 aspect-4/3 w-full rounded-xl object-cover"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-medium text-ink",
							children: "A French approach to an American week."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-4 text-base leading-relaxed text-ink-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Most cleaning companies are paid to make a room look untouched. Most organizing companies are paid to make a room look like a catalog. Amanda noticed that neither visit lasts unless the house is given a system — and a person who comes back." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Graceful Order sits in that gap. She cleans. She sanitizes. She declutters without humiliation. Then she organizes: zones, labels, reach, and a maintenance rhythm that a real Plano or Frisco week can keep. The brand is calm and polished because the work is. The wit is light because overwhelmed clients do not need a performance." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The “French touch” is mise en place. Everything used tomorrow has a home tonight. Not rigid. Not precious. Just careful." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "She serves Plano, Allen, Carrollton, Dallas, Garland, Rowlett, McKinney, Frisco, Mesquite, and Grapevine. If your house is tired, that is enough information to start." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/quote",
									children: "Request a quote"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									children: "Write a note"
								})
							})]
						})
					]
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				className: "bg-ivory",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-medium text-ink",
					children: "How a day with Amanda actually goes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: METHOD.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl bg-surface p-6 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl text-gold",
								children: item.step
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-xl font-medium",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-ink-soft",
								children: item.body
							})
						]
					}, item.step))
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
				title: "Bring ease, order, and peace to the space.",
				lede: "A walk-through, a clear estimate, and a plan that includes organizing — not just the shine."
			})
		]
	});
}
//#endregion
export { AboutPage as component };
