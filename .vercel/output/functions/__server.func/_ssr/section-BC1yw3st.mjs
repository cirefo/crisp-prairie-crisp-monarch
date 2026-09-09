import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/section-BC1yw3st.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatUsd(amount) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0
	}).format(amount);
}
function DiamondMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className: cn("size-3.5", className),
		fill: "none",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "5.5",
			y: "5.5",
			width: "13",
			height: "13",
			transform: "rotate(45 12 12)",
			stroke: "currentColor",
			strokeWidth: "1.35"
		})
	});
}
function Rule({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center gap-3 text-gold", className),
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-gold/55" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiamondMark, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-gold/55" })
		]
	});
}
function Container({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className),
		children
	});
}
function Section({ children, className, id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("py-16 sm:py-24", className),
		children
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gold-deep",
		children
	});
}
function SectionHeading({ eyebrow, title, lede, align = "left" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("max-w-2xl", align === "center" && "mx-auto text-center"),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: eyebrow }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl font-medium text-ink sm:text-4xl",
				children: title
			}),
			align === "center" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, { className: "mx-auto mt-5 max-w-40" }) : null,
			lede ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-4 text-base leading-relaxed text-ink-soft sm:text-lg", align === "center" && "mx-auto"),
				children: lede
			}) : null
		]
	});
}
//#endregion
export { Section as a, formatUsd as c, Rule as i, DiamondMark as n, SectionHeading as o, Eyebrow as r, cn as s, Container as t };
