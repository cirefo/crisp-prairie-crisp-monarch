import { a as Trigger2, i as Root2, l as require_jsx_runtime, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { s as cn } from "./section-BC1yw3st.mjs";
import { o as ChevronDown } from "../_libs/lucide-react.mjs";
import { a as FAQS } from "./router-C_CQFnBx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-list-DLY7dJCO.js
var import_jsx_runtime = require_jsx_runtime();
function FaqList({ items = FAQS }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
		type: "single",
		collapsible: true,
		className: "divide-y divide-border",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, {
			value: item.q,
			className: "py-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
				className: cn("group flex w-full min-h-14 items-center justify-between gap-4 py-3 text-left font-medium text-ink"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[0.98rem] leading-snug",
					children: item.q
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 shrink-0 text-gold-deep transition-transform duration-200 group-data-[state=open]:rotate-180" })]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
				className: "overflow-hidden data-[state=closed]:animate-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "pb-5 pr-8 text-sm leading-relaxed text-ink-soft sm:text-base",
					children: item.a
				})
			})]
		}, item.q))
	});
}
//#endregion
export { FaqList as t };
