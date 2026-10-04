import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Section, c as formatUsd, i as Rule, n as DiamondMark, o as SectionHeading, r as Eyebrow, t as Container } from "./section-BC1yw3st.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as ArrowRight } from "../_libs/lucide-react.mjs";
import { c as PILLARS, i as Button, l as SITE, o as METHOD, s as PACKAGES, u as CITIES } from "./router-C_CQFnBx.mjs";
import { t as CtaBand } from "./cta-band-RJkPxo8u.mjs";
import { t as FaqList } from "./faq-list-DLY7dJCO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BkIGsz6-.js
var import_jsx_runtime = require_jsx_runtime();
var jsonLd = {
	"@context": "https://schema.org",
	"@type": "Housekeeper",
	name: "Graceful Order",
	founder: {
		"@type": "Person",
		name: "Amanda French"
	},
	description: "Organizing-first cleaning, sanitizing, and decluttering for North Dallas and Collin County homes.",
	areaServed: CITIES.map((city) => ({
		"@type": "City",
		name: `${city.name}, TX`
	})),
	slogan: "Where calm meets careful order."
};
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative overflow-hidden bg-ivory",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
					className: "grid items-center gap-10 py-14 lg:grid-cols-12 lg:gap-12 lg:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Plano · North Dallas · Collin County" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl lg:text-6xl",
								children: "Where calm meets careful order."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, { className: "mt-6 max-w-40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg",
								children: [
									"You do not need a stricter version of yourself. You need a home that is easier to live in — cleaned with care, organized with intention, and kept on a rhythm that lasts. ",
									SITE.owner,
									" built Graceful Order for overwhelmed houses that deserve both kindness and precision."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col gap-3 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/quote",
										children: ["Request a quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/packages",
										children: "See signature packages"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm italic text-muted",
								children: "Thoughtfully arranged. Beautifully maintained."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-xl shadow-card",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/hero-living.jpg",
								alt: "A sunlit living room after professional organizing — ivory sofa, ordered shelves, and a calm, lived-in home.",
								className: "photo aspect-4/3 w-full object-cover lg:aspect-square"
							})
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-y border-border bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
					className: "flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink-soft",
					children: CITIES.map((city) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/areas/$city",
						params: { city: city.slug },
						className: "hover:text-rose-deep",
						children: city.name
					}, city.slug))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "What she does",
				title: "Cleaning is the floor. Organizing is the house standing up straight.",
				lede: "Graceful Order is not a maid service with a prettier logo. Amanda cleans, sanitizes, and declutters — and then she organizes, so the calm has a place to live. Repeatable on purpose."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 sm:grid-cols-2",
				children: PILLARS.map((pillar) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: pillar.href,
					className: "group overflow-hidden rounded-xl bg-surface shadow-card transition-[box-shadow] duration-200 hover:shadow-card-hover",
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-2xl font-medium text-ink",
								children: pillar.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-ink-soft",
								children: pillar.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-rose-deep",
								children: ["Learn more", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 transition-transform duration-150 group-hover:translate-x-0.5" })]
							})
						]
					})]
				}, pillar.slug))
			})] }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				className: "bg-ivory",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Signature packages",
					title: "A first reset. Then a rhythm.",
					lede: "Individual services are always available. These three packages are how most homes begin — and how they stay."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 lg:grid-cols-3",
					children: PACKAGES.map((pkg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex flex-col overflow-hidden rounded-xl bg-surface shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: pkg.image,
							alt: "",
							className: "photo aspect-4/3 w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl font-medium text-ink",
									children: pkg.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm font-medium text-gold-deep",
									children: pkg.priceHint
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-sm leading-relaxed text-ink-soft",
									children: [
										pkg.summary,
										" ",
										pkg.ideal
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 flex-1 space-y-2 text-sm text-ink-soft",
									children: pkg.includes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiamondMark, { className: "mt-1 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
									}, item))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									className: "mt-6 w-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/quote",
										search: { kind: pkg.id },
										children: "Estimate this package"
									})
								})
							]
						})]
					}, pkg.id))
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "grid items-center gap-12 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "The French method",
						title: "Mise en place, at home.",
						lede: "Amanda French — yes, that French — runs the day the way a careful kitchen runs a service: everything has a place, and the place is kind."
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "grid gap-6 sm:grid-cols-2 lg:col-span-7",
					children: METHOD.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl bg-surface p-6 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl text-gold",
								children: item.step
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-xl font-medium text-ink",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-ink-soft",
								children: item.body
							})
						]
					}, item.step))
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				className: "bg-ivory",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "The rooms",
					title: "A fresh start with structure.",
					lede: "Closets that close. Pantries that tell the truth. Garages that are not a second attic. This is the outcome — not just the absence of clutter."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/closet.jpg",
							alt: "A walk-in closet with even hangers and folded stacks.",
							className: "photo col-span-2 aspect-4/3 rounded-xl object-cover lg:col-span-2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/pantry.jpg",
							alt: "Labeled glass jars on a pantry shelf.",
							className: "photo aspect-4/3 rounded-xl object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/bathroom.jpg",
							alt: "A marble bathroom after a precise clean.",
							className: "photo aspect-4/3 rounded-xl object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/kitchen.jpg",
							alt: "A bright kitchen with a clear counter and ordered pantry.",
							className: "photo aspect-4/3 rounded-xl object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/mudroom.jpg",
							alt: "A mudroom with baskets, hooks, and a calm entry.",
							className: "photo aspect-4/3 rounded-xl object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/garage.jpg",
							alt: "An organized residential garage with labeled bins.",
							className: "photo col-span-2 aspect-4/3 rounded-xl object-cover"
						})
					]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "grid gap-12 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Transparent pricing",
						title: "A 3 bedroom, 2 bath home has a number.",
						lede: "No mystery menus. Build a live estimate from the published rates, then send it to Amanda."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-8",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/quote",
							children: ["Open the calculator", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceTile, {
							label: "Recurring visit",
							detail: "3 bed / 2 bath",
							price: 150,
							note: "Graceful Maintenance, per visit"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceTile, {
							label: "Deep clean",
							detail: "3 bed / 2 bath",
							price: 350,
							note: "One-time thorough clean"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceTile, {
							label: "Deep clean",
							detail: "4+ bed / 2.5 bath",
							price: 500,
							note: "Larger-home base"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceTile, {
							label: "Add a bedroom",
							detail: "Beyond the base",
							price: 25,
							note: "Full bath +$40 · half bath +$30"
						})
					]
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				className: "bg-ivory",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
					className: "grid gap-12 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							eyebrow: "Questions",
							title: "Clear answers for an overwhelmed week."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/faq",
							className: "mt-6 inline-flex min-h-11 items-center text-sm font-medium text-rose-deep",
							children: ["All questions", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 size-4" })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, {})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
		]
	});
}
function PriceTile({ label, detail, price, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-6 shadow-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[0.7rem] font-medium uppercase tracking-[0.16em] text-gold-deep",
				children: detail
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-xl text-ink",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-4xl tabular-nums text-ink",
				children: formatUsd(price)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: note
			})
		]
	});
}
//#endregion
export { Home as component };
