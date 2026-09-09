import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Section, t as Container } from "./section-BC1yw3st.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Button } from "./router-DtTeIfi4.mjs";
import { t as CtaBand } from "./cta-band-B58DCwYW.mjs";
import { t as PageHero } from "./page-hero-CPz-iwHC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/decluttering-BYodnm5-.js
var import_jsx_runtime = require_jsx_runtime();
function DeclutterPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Decluttering",
				title: "Kind, not extreme.",
				lede: "We do not score your life by empty shelves. We help a house tell the truth about what you use, love, and are ready to release — then we give what stays a home."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "grid items-center gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/mudroom.jpg",
					alt: "A calm mudroom after decluttering and organizing.",
					className: "photo aspect-4/3 w-full rounded-xl object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-medium",
						children: "Keep. Relocate. Release."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-relaxed text-ink-soft",
						children: "Overwhelmed clients are often one unkind comment away from shutting down. Amanda’s rule is simple: nothing leaves without you. Sorting is a conversation. Donation is a decision. The goal is ease — not a personality you will not recognize on Monday."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-relaxed text-ink-soft",
						children: "Decluttering without organizing is just a thinner pile. That is why this work almost always lives inside The Graceful Reset, or as a room-by-room add-on beside a deep clean."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/quote",
							search: { kind: "reset" },
							children: "Start with a Reset"
						})
					})
				] })]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { title: "A fresh start, without the lecture." })
		]
	});
}
//#endregion
export { DeclutterPage as component };
