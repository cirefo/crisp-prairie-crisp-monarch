import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Container } from "./section-BC1yw3st.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as Button } from "./router-DtTeIfi4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cta-band-B58DCwYW.js
var import_jsx_runtime = require_jsx_runtime();
function CtaBand({ title = "Ready for a quieter house?", lede = "Tell us the rooms, the rhythm, and the city. You will see a transparent estimate before anyone knocks." }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink text-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "flex flex-col items-start justify-between gap-8 py-16 sm:py-20 lg:flex-row lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gold",
						children: "Request a quote"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-medium sm:text-4xl",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-champagne",
						children: lede
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex w-full flex-col gap-3 sm:w-auto sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "primary",
					size: "lg",
					className: "w-full sm:w-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/quote",
						children: ["Build your estimate", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "inverse",
					size: "lg",
					className: "w-full sm:w-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						children: "Write Amanda"
					})
				})]
			})]
		})
	});
}
//#endregion
export { CtaBand as t };
