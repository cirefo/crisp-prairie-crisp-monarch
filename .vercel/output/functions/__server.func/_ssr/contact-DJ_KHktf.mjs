import { i as __toESM } from "../_runtime.mjs";
import { c as require_react, l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Section, s as cn, t as Container } from "./section-BC1yw3st.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Button, l as SITE, u as CITIES } from "./router-DtTeIfi4.mjs";
import { t as PageHero } from "./page-hero-CPz-iwHC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DJ_KHktf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fieldClass = "h-11 w-full rounded-md bg-surface px-3 text-sm text-ink shadow-card outline-none placeholder:text-muted focus:shadow-[0_0_0_2px_rgba(183,110,125,0.45)]";
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	function onSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const record = {
			at: (/* @__PURE__ */ new Date()).toISOString(),
			name: String(data.get("name") || ""),
			email: String(data.get("email") || ""),
			city: String(data.get("city") || ""),
			message: String(data.get("message") || "")
		};
		try {
			const existing = JSON.parse(localStorage.getItem("graceful-order-notes") || "[]");
			localStorage.setItem("graceful-order-notes", JSON.stringify([record, ...existing].slice(0, 20)));
		} catch {}
		setName(record.name);
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Contact",
			title: "Write Amanda.",
			lede: "Quotes are fastest through the calculator. This page is for timing questions, gift certificates, and houses that do not fit a form."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "grid gap-12 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium uppercase tracking-[0.16em] text-gold-deep",
						children: "Studio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-2xl",
						children: SITE.owner
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-ink-soft",
						children: SITE.region
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-ink-soft",
						children: "Replies within one business day. If you already have an estimate, mention it in the note."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/quote",
						className: "mt-6 inline-flex min-h-11 items-center text-sm font-medium text-rose-deep",
						children: "Prefer the quote calculator →"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-7",
				children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-surface p-8 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-2xl",
						children: [
							"Thank you",
							name ? `, ${name}` : "",
							"."
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-ink-soft",
						children: "Amanda will write back within one business day."
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "grid gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-medium",
							children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "name",
								required: true,
								autoComplete: "name",
								className: cn(fieldClass, "mt-1.5")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-medium",
							children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "email",
								type: "email",
								required: true,
								autoComplete: "email",
								className: cn(fieldClass, "mt-1.5")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-medium",
							children: ["City", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								name: "city",
								className: cn(fieldClass, "mt-1.5"),
								defaultValue: "plano",
								children: CITIES.map((city) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: city.slug,
									children: city.name
								}, city.slug))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-medium",
							children: ["Note", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "message",
								required: true,
								rows: 5,
								className: cn(fieldClass, "mt-1.5 h-auto py-3")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "lg",
							children: "Send note"
						})
					]
				})
			})]
		}) })]
	});
}
//#endregion
export { ContactPage as component };
