import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as Rule, r as Eyebrow, t as Container } from "./section-BC1yw3st.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-hero-CPz-iwHC.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, lede, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-b border-border bg-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "py-14 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: eyebrow }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 max-w-3xl font-display text-4xl font-medium text-ink sm:text-5xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, { className: "mt-6 max-w-36" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg",
					children: lede
				}),
				children
			]
		})
	});
}
//#endregion
export { PageHero as t };
