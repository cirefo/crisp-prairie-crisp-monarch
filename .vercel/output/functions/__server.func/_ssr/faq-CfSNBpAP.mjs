import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Section, t as Container } from "./section-BC1yw3st.mjs";
import { t as CtaBand } from "./cta-band-RJkPxo8u.mjs";
import { t as PageHero } from "./page-hero-CPz-iwHC.mjs";
import { t as FaqList } from "./faq-list-DLY7dJCO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-CfSNBpAP.js
var import_jsx_runtime = require_jsx_runtime();
function FaqPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "FAQ",
				title: "The practical questions.",
				lede: "Pricing, organizing, cities, and what happens on the first visit. If your question is not here, the quote form has a notes field — Amanda reads it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
				className: "max-w-3xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, {})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
		]
	});
}
//#endregion
export { FaqPage as component };
