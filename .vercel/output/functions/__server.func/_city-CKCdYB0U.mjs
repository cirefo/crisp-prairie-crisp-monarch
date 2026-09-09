import { l as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Section, n as DiamondMark, r as Eyebrow, t as Container } from "./_ssr/section-BC1yw3st.mjs";
import { v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as Button, n as Route$5, s as PACKAGES, u as CITIES } from "./_ssr/router-DtTeIfi4.mjs";
import { t as CtaBand } from "./_ssr/cta-band-B58DCwYW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_city-CKCdYB0U.js
var import_jsx_runtime = require_jsx_runtime();
function CityPage() {
	const { city } = Route$5.useLoaderData();
	const others = CITIES.filter((item) => item.slug !== city.slug).slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-border bg-ivory",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
					className: "py-14 sm:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Eyebrow, { children: [
							city.county,
							" · ",
							city.drive
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 max-w-3xl font-display text-4xl font-medium text-ink sm:text-5xl",
							children: city.headline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg",
							children: city.intro
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/quote",
									children: `Quote a ${city.name} visit`
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services/organizing",
									children: "Organizing details"
								})
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "grid gap-12 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-3xl font-medium text-ink",
							children: ["How Graceful Order works in ", city.name]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base leading-relaxed text-ink-soft",
							children: city.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base leading-relaxed text-ink-soft",
							children: city.angle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm font-medium text-gold-deep",
							children: "Neighborhoods we know"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 flex flex-wrap gap-2",
							children: city.neighborhoods.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-full bg-ivory px-3 py-1.5 text-sm text-ink-soft",
								children: n
							}, n))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-surface p-6 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.7rem] font-medium uppercase tracking-[0.16em] text-gold-deep",
							children: "Start here"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-4",
							children: PACKAGES.map((pkg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/quote",
								search: { kind: pkg.id },
								className: "block rounded-lg p-3 hover:bg-ivory",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg text-ink",
									children: pkg.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-sm text-ink-soft",
									children: pkg.summary
								})]
							}) }, pkg.id))
						})]
					})
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				className: "bg-ivory",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-medium",
					children: "Also serving nearby"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: others.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/areas/$city",
						params: { city: item.slug },
						className: "flex min-h-12 items-center gap-2 rounded-lg bg-surface px-4 py-3 text-sm shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiamondMark, { className: "text-gold" }), item.name]
					}) }, item.slug))
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
				title: `A quieter house in ${city.name}.`,
				lede: "Send the bedroom and bath count. Amanda will confirm timing for your street."
			})
		]
	});
}
//#endregion
export { CityPage as component };
