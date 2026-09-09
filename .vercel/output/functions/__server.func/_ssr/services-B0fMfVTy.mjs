import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Section, t as Container } from "./section-BC1yw3st.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as ArrowRight } from "../_libs/lucide-react.mjs";
import { c as PILLARS } from "./router-DtTeIfi4.mjs";
import { t as CtaBand } from "./cta-band-B58DCwYW.mjs";
import { t as PageHero } from "./page-hero-CPz-iwHC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-B0fMfVTy.js
var import_jsx_runtime = require_jsx_runtime();
var extra = [{
	title: "Airbnb & guest turnovers",
	href: "/services/airbnb",
	body: "Guest-ready checklists for Grapevine, Dallas, and Frisco short-term rentals — linens, kitchen, hidden crumbs, restock notes."
}, {
	title: "Garage & pantry systems",
	href: "/services/organizing",
	body: "The rooms that quietly run the house. Labeled, zoned, and built to survive a Texas week."
}];
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Services",
				title: "Organizing with care, clarity, and grace.",
				lede: "Every offering is available on its own. Together they are the studio: a clean house with a system, kept on a rhythm you do not have to heroically maintain."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2",
				children: PILLARS.map((pillar) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: pillar.href,
					className: "group overflow-hidden rounded-xl bg-surface shadow-card hover:shadow-card-hover",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: pillar.image,
						alt: "",
						className: "photo aspect-4/3 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold-deep",
								children: pillar.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-2xl font-medium text-ink",
								children: pillar.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-ink-soft",
								children: pillar.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-rose-deep",
								children: ["Details", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
							})
						]
					})]
				}, pillar.slug))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-6 sm:grid-cols-2",
				children: extra.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: item.href,
					className: "rounded-xl bg-ivory p-6 shadow-card hover:shadow-card-hover",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-medium text-ink",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-ink-soft",
						children: item.body
					})]
				}, item.title))
			})] }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
		]
	});
}
//#endregion
export { ServicesPage as component };
