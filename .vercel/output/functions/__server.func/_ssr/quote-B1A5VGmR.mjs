import { i as __toESM } from "../_runtime.mjs";
import { c as require_react, l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Section, c as formatUsd, s as cn, t as Container } from "./section-BC1yw3st.mjs";
import { i as Minus, r as Plus, s as Check } from "../_libs/lucide-react.mjs";
import { i as Button, r as Route$7, u as CITIES } from "./router-C_CQFnBx.mjs";
import { t as PageHero } from "./page-hero-CPz-iwHC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quote-B1A5VGmR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SERVICE_PACKAGES = [
	{
		id: "maintenance",
		name: "Graceful Maintenance",
		short: "Recurring clean + light organizing",
		blurb: "A standing visit that keeps surfaces honest and systems from sliding. The calm, on purpose.",
		frequencyDefault: "biweekly"
	},
	{
		id: "deep",
		name: "Deep Clean",
		short: "One-time thorough clean",
		blurb: "Baseboards, grout lines, the oven you have been avoiding. A true reset of the house itself.",
		frequencyDefault: "once"
	},
	{
		id: "reset",
		name: "The Graceful Reset",
		short: "Deep clean + declutter + organization",
		blurb: "Clean the rooms, then give every kept thing a home. The signature first engagement.",
		frequencyDefault: "once"
	},
	{
		id: "move",
		name: "Move With Grace",
		short: "Move-in / move-out clean + organization",
		blurb: "Empty a house well, or arrive to one that is already livable. Packing chaos, meet a plan.",
		frequencyDefault: "once"
	}
];
var ADDONS = [
	{
		id: "microwave",
		label: "Microwave interior",
		price: 20,
		group: "kitchen",
		hint: "Inside walls, turntable, vents"
	},
	{
		id: "oven",
		label: "Oven",
		price: 45,
		group: "kitchen",
		hint: "Racks, glass, interior walls"
	},
	{
		id: "gas-stove",
		label: "Gas stove deep clean",
		price: 50,
		group: "kitchen",
		hint: "Grates, caps, drip trays"
	},
	{
		id: "fridge",
		label: "Refrigerator interior",
		price: 40,
		group: "kitchen",
		hint: "Shelves, drawers, seals"
	},
	{
		id: "grout",
		label: "Extensive grout treatment",
		price: 85,
		group: "treatment",
		hint: "Tile floors and showers"
	},
	{
		id: "windows",
		label: "Interior windows",
		price: 75,
		group: "detail",
		hint: "Whole-home interior glass"
	},
	{
		id: "baseboards",
		label: "Baseboards & detail dusting",
		price: 35,
		group: "detail",
		hint: "Edges, vents, switch plates"
	},
	{
		id: "laundry",
		label: "Laundry room refresh",
		price: 25,
		group: "detail",
		hint: "Machines, cabinets, floor"
	},
	{
		id: "closet",
		label: "Closet reset",
		price: 95,
		group: "organize",
		hint: "One closet, sorted and placed"
	},
	{
		id: "pantry",
		label: "Pantry organization",
		price: 110,
		group: "organize",
		hint: "Zones, labels, easy reach"
	},
	{
		id: "garage",
		label: "Garage organization",
		price: 225,
		group: "organize",
		hint: "Zones, bins, wall systems"
	},
	{
		id: "office",
		label: "Home office reset",
		price: 140,
		group: "organize",
		hint: "Paper, supplies, surfaces"
	}
];
var ADDON_GROUPS = [
	{
		id: "kitchen",
		label: "Kitchen appliances"
	},
	{
		id: "treatment",
		label: "Treatments"
	},
	{
		id: "detail",
		label: "Detail work"
	},
	{
		id: "organize",
		label: "Organization (the lasting part)"
	}
];
var ROOM_LIMITS = {
	bedrooms: {
		min: 1,
		max: 7
	},
	fullBaths: {
		min: 1,
		max: 5
	},
	halfBaths: {
		min: 0,
		max: 3
	},
	livingRooms: {
		min: 1,
		max: 4
	}
};
function usesLargeDeepBase(kind, bedrooms, fullBaths, halfBaths) {
	const deep = kind !== "maintenance";
	const baths = fullBaths + halfBaths * .5;
	return deep && bedrooms >= 4 && baths >= 2.5;
}
function extraBedrooms(kind, bedrooms, fullBaths, halfBaths) {
	if (usesLargeDeepBase(kind, bedrooms, fullBaths, halfBaths)) return Math.max(0, bedrooms - 4);
	return Math.max(0, bedrooms - 3);
}
function extraFullBaths(_kind, fullBaths) {
	return Math.max(0, fullBaths - 2);
}
function extraHalfBaths(kind, halfBaths, bedrooms, fullBaths) {
	if (usesLargeDeepBase(kind, bedrooms, fullBaths, halfBaths)) return Math.max(0, halfBaths - 1);
	return Math.max(0, halfBaths);
}
function estimateQuote(input) {
	const lines = [];
	const deep = input.kind !== "maintenance";
	const large = usesLargeDeepBase(input.kind, input.bedrooms, input.fullBaths, input.halfBaths);
	if (large) lines.push({
		label: "Deep clean base — 4+ bedroom / 2.5 bath",
		amount: 500
	});
	else if (deep) lines.push({
		label: "Deep clean base — up to 3 bedroom / 2 bath",
		amount: 350
	});
	else lines.push({
		label: "Recurring visit — up to 3 bedroom / 2 bath",
		amount: 150
	});
	const beds = extraBedrooms(input.kind, input.bedrooms, input.fullBaths, input.halfBaths);
	if (beds > 0) lines.push({
		label: `Additional bedroom${beds === 1 ? "" : "s"} × ${beds}`,
		amount: beds * 25
	});
	const fulls = extraFullBaths(input.kind, input.fullBaths);
	if (fulls > 0) lines.push({
		label: `Additional full bathroom${fulls === 1 ? "" : "s"} × ${fulls}`,
		amount: fulls * 40
	});
	const halfs = extraHalfBaths(input.kind, input.halfBaths, input.bedrooms, input.fullBaths);
	if (halfs > 0) lines.push({
		label: `Half bathroom${halfs === 1 ? "" : "s"} × ${halfs}`,
		amount: halfs * 30
	});
	const livings = Math.max(0, input.livingRooms - 1);
	if (livings > 0) lines.push({
		label: `Additional living room${livings === 1 ? "" : "s"} × ${livings}`,
		amount: livings * 30
	});
	if (input.kind === "reset") {
		const org = large ? 225 : 185;
		lines.push({
			label: "Declutter + organization (Graceful Reset)",
			amount: org
		});
	}
	if (input.kind === "move") {
		const org = large ? 175 : 150;
		lines.push({
			label: "Move-in / move-out organization",
			amount: org
		});
	}
	for (const id of input.addonIds) {
		const addon = ADDONS.find((item) => item.id === id);
		if (addon) lines.push({
			label: addon.label,
			amount: addon.price
		});
	}
	const cadence = input.kind === "maintenance" ? input.frequency === "weekly" ? "per weekly visit" : input.frequency === "monthly" ? "per monthly visit" : "per biweekly visit" : "one-time estimate";
	return {
		total: lines.reduce((sum, line) => sum + line.amount, 0),
		lines,
		cadence
	};
}
var DEFAULT_QUOTE = {
	kind: "maintenance",
	bedrooms: 3,
	fullBaths: 2,
	halfBaths: 0,
	livingRooms: 1,
	addonIds: [],
	frequency: "biweekly"
};
var FREQUENCIES = [
	{
		id: "weekly",
		label: "Weekly"
	},
	{
		id: "biweekly",
		label: "Biweekly"
	},
	{
		id: "monthly",
		label: "Monthly"
	}
];
function Stepper({ label, value, min, max, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-3 rounded-lg bg-ivory px-4 py-3 shadow-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm font-medium text-ink",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": `Decrease ${label}`,
					className: "inline-flex size-11 items-center justify-center rounded-md text-ink hover:bg-blush/50 disabled:opacity-30",
					disabled: value <= min,
					onClick: () => onChange(Math.max(min, value - 1)),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-8 text-center tabular-nums text-base font-medium text-ink",
					children: value
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": `Increase ${label}`,
					className: "inline-flex size-11 items-center justify-center rounded-md text-ink hover:bg-blush/50 disabled:opacity-30",
					disabled: value >= max,
					onClick: () => onChange(Math.min(max, value + 1)),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
				})
			]
		})]
	});
}
function Field({ id, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		htmlFor: id,
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block text-sm font-medium text-ink",
			children: label
		}), children]
	});
}
var inputClass = "h-11 w-full rounded-md bg-surface px-3 text-sm text-ink shadow-card outline-none transition-[box-shadow] duration-150 placeholder:text-muted focus:shadow-[0_0_0_2px_rgba(183,110,125,0.45)]";
function QuoteCalculator({ initialKind }) {
	const [input, setInput] = (0, import_react.useState)(() => ({
		...DEFAULT_QUOTE,
		kind: initialKind ?? DEFAULT_QUOTE.kind,
		frequency: initialKind && initialKind !== "maintenance" ? "once" : DEFAULT_QUOTE.frequency
	}));
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [city, setCity] = (0, import_react.useState)("plano");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [submitted, setSubmitted] = (0, import_react.useState)(null);
	const estimate = (0, import_react.useMemo)(() => estimateQuote(input), [input]);
	function toggleAddon(id) {
		setInput((prev) => ({
			...prev,
			addonIds: prev.addonIds.includes(id) ? prev.addonIds.filter((item) => item !== id) : [...prev.addonIds, id]
		}));
	}
	function onKind(kind) {
		const pkg = SERVICE_PACKAGES.find((p) => p.id === kind);
		setInput((prev) => ({
			...prev,
			kind,
			frequency: pkg?.frequencyDefault ?? prev.frequency
		}));
	}
	function onSubmit(event) {
		event.preventDefault();
		if (!name.trim() || !email.trim()) return;
		const record = {
			at: (/* @__PURE__ */ new Date()).toISOString(),
			name: name.trim(),
			email: email.trim(),
			phone: phone.trim(),
			city,
			notes: notes.trim(),
			input,
			estimate
		};
		try {
			const existing = JSON.parse(localStorage.getItem("graceful-order-quotes") || "[]");
			localStorage.setItem("graceful-order-quotes", JSON.stringify([record, ...existing].slice(0, 20)));
		} catch {}
		setSubmitted({
			name: name.trim(),
			total: estimate.total,
			cadence: estimate.cadence
		});
	}
	if (submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-8 shadow-card sm:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gold-deep",
				children: "Quote received"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-3 font-display text-3xl font-medium text-ink",
				children: [
					"Thank you, ",
					submitted.name,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 max-w-xl text-ink-soft",
				children: [
					"Your starting estimate is",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-ink tabular-nums",
						children: formatUsd(submitted.total)
					}),
					" ",
					submitted.cadence,
					". Amanda will reply within one business day to confirm timing and any organizing scope a walk-through might change."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "Organizing is quoted honestly. Closets, pantries, and garages sometimes reveal more than a form can know — you will see that before work begins."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-8",
				variant: "outline",
				onClick: () => setSubmitted(null),
				children: "Build another estimate"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "grid gap-8 lg:grid-cols-12 lg:items-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-8 lg:col-span-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "mb-3 text-sm font-medium text-ink",
					children: "Choose a package"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: SERVICE_PACKAGES.map((pkg) => {
						const active = input.kind === pkg.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onKind(pkg.id),
							className: cn("rounded-xl p-4 text-left shadow-card transition-[box-shadow,background-color] duration-150", active ? "bg-blush/60" : "bg-surface hover:bg-ivory"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-xl font-medium text-ink",
										children: pkg.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("mt-0.5 inline-flex size-5 items-center justify-center rounded-full", active ? "bg-rose text-ivory" : "bg-cream text-muted"),
										children: active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" }) : null
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-xs font-medium uppercase tracking-wider text-gold-deep",
									children: pkg.short
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 block text-sm leading-relaxed text-ink-soft",
									children: pkg.blurb
								})
							]
						}, pkg.id);
					})
				})] }),
				input.kind === "maintenance" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "mb-3 text-sm font-medium text-ink",
						children: "Visit rhythm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: FREQUENCIES.map((freq) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setInput((prev) => ({
								...prev,
								frequency: freq.id
							})),
							className: cn("min-h-11 rounded-full px-4 text-sm font-medium transition-colors duration-150", input.frequency === freq.id ? "bg-ink text-ivory" : "bg-ivory text-ink-soft hover:bg-blush/50"),
							children: freq.label
						}, freq.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-muted",
						children: "Listed prices are per visit. Weekly is the steadiest way to keep systems true."
					})
				] }) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "mb-3 text-sm font-medium text-ink",
					children: "Tell us the house"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
							label: "Bedrooms",
							value: input.bedrooms,
							min: ROOM_LIMITS.bedrooms.min,
							max: ROOM_LIMITS.bedrooms.max,
							onChange: (bedrooms) => setInput((p) => ({
								...p,
								bedrooms
							}))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
							label: "Full baths",
							value: input.fullBaths,
							min: ROOM_LIMITS.fullBaths.min,
							max: ROOM_LIMITS.fullBaths.max,
							onChange: (fullBaths) => setInput((p) => ({
								...p,
								fullBaths
							}))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
							label: "Half baths",
							value: input.halfBaths,
							min: ROOM_LIMITS.halfBaths.min,
							max: ROOM_LIMITS.halfBaths.max,
							onChange: (halfBaths) => setInput((p) => ({
								...p,
								halfBaths
							}))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
							label: "Living rooms",
							value: input.livingRooms,
							min: ROOM_LIMITS.livingRooms.min,
							max: ROOM_LIMITS.livingRooms.max,
							onChange: (livingRooms) => setInput((p) => ({
								...p,
								livingRooms
							}))
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "mb-1 text-sm font-medium text-ink",
						children: "Add-ons"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-sm text-muted",
						children: "Optional. Organizing add-ons are how a clean becomes a home you can keep."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-5",
						children: ADDON_GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-gold-deep",
							children: group.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-2 sm:grid-cols-2",
							children: ADDONS.filter((addon) => addon.group === group.id).map((addon) => {
								const on = input.addonIds.includes(addon.id);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => toggleAddon(addon.id),
									className: cn("flex min-h-14 items-center justify-between gap-3 rounded-lg px-4 py-3 text-left shadow-card transition-colors duration-150", on ? "bg-blush/60" : "bg-surface hover:bg-ivory"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm font-medium text-ink",
										children: addon.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs text-muted",
										children: addon.hint
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "shrink-0 text-sm tabular-nums text-ink-soft",
										children: formatUsd(addon.price)
									})]
								}, addon.id);
							})
						})] }, group.id))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "mb-3 text-sm font-medium text-ink sm:col-span-2",
							children: "How to reach you"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "quote-name",
							label: "Name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "quote-name",
								required: true,
								autoComplete: "name",
								className: inputClass,
								value: name,
								onChange: (e) => setName(e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "quote-email",
							label: "Email",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "quote-email",
								type: "email",
								required: true,
								autoComplete: "email",
								className: inputClass,
								value: email,
								onChange: (e) => setEmail(e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "quote-phone",
							label: "Phone (optional)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "quote-phone",
								type: "tel",
								autoComplete: "tel",
								className: inputClass,
								value: phone,
								onChange: (e) => setPhone(e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "quote-city",
							label: "City",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								id: "quote-city",
								className: inputClass,
								value: city,
								onChange: (e) => setCity(e.target.value),
								children: CITIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: c.slug,
									children: c.name
								}, c.slug))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								id: "quote-notes",
								label: "What feels heavy right now?",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "quote-notes",
									rows: 4,
									className: cn(inputClass, "h-auto py-3"),
									placeholder: "Closets, the garage, a move, the kitchen that never stays reset…",
									value: notes,
									onChange: (e) => setNotes(e.target.value)
								})
							})
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "lg:sticky lg:top-24 lg:col-span-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-ink p-6 text-ivory shadow-card sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gold",
						children: "Starting estimate"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-5xl font-medium tabular-nums text-ivory",
						children: formatUsd(estimate.total)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-champagne",
						children: estimate.cadence
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-2 border-t border-ivory/10 pt-5",
						children: estimate.lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start justify-between gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-champagne",
								children: line.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shrink-0 tabular-nums text-ivory",
								children: formatUsd(line.amount)
							})]
						}, line.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-xs leading-relaxed text-footer-muted",
						children: "Published menu for a typical home. Heavy organizing, extensive grout, or a first Reset that reveals more than the form can know may adjust — you will see that before we start."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						variant: "primary",
						size: "lg",
						className: "mt-6 w-full",
						children: "Send this quote"
					})
				]
			})
		})]
	});
}
function QuotePage() {
	const { kind } = Route$7.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Pricing",
			title: "A clear number. Then a conversation.",
			lede: "The calculator uses the published menu — 3 bedroom / 2 bath as the starting home, extras itemized, organizing add-ons optional. Send it, and Amanda confirms timing within one business day."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteCalculator, { initialKind: kind }) }) })]
	});
}
//#endregion
export { QuotePage as component };
