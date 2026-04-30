import { c as createLucideIcon, u as useComparison, j as jsxRuntimeExports, a as Button, X, M as MapPin, p as Building2, s as GraduationCap, q as BookOpen, b as cn, L as Link, f as Skeleton, B as Badge } from "./index-BmCmIy5R.js";
import { u as useActor, a as useQuery, T as TrendingUp, S as StarRating } from "./useActor-B9UyoNRB.js";
import { I as IndianRupee } from "./indian-rupee-B8B8kXFK.js";
import { A as Award } from "./award-MARH-VCN.js";
import { C as CirclePlus } from "./circle-plus-DCX1lWvl.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", key: "1nw9bq" }],
  ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", key: "1np0yb" }],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }]
];
const Trophy = createLucideIcon("trophy", __iconNode);
function formatFees(fees) {
  const n = Number(fees);
  if (n >= 1e5) return `₹${(n / 1e5).toFixed(1)}L/yr`;
  if (n >= 1e3) return `₹${(n / 1e3).toFixed(0)}K/yr`;
  return `₹${n}/yr`;
}
function getJeeCutoff(college) {
  const co = college.cutoffs.find(
    (c) => c.examType === "JEE Main" && c.category === "General"
  );
  return co ? Number(co.rank) : Number.POSITIVE_INFINITY;
}
function formatJeeCutoff(college) {
  const n = getJeeCutoff(college);
  return Number.isFinite(n) ? n.toLocaleString("en-IN") : "N/A";
}
const ROWS = [
  {
    key: "fees",
    label: "Annual Fees",
    icon: IndianRupee,
    getValue: (c) => Number(c.annualFees),
    renderCell: (c) => formatFees(c.annualFees),
    bestIs: "lowest"
  },
  {
    key: "placement",
    label: "Placement %",
    icon: TrendingUp,
    getValue: (c) => Number(c.placementPercent),
    renderCell: (c) => `${Number(c.placementPercent)}%`,
    bestIs: "highest"
  },
  {
    key: "avgPackage",
    label: "Avg Package (LPA)",
    icon: Trophy,
    getValue: (c) => c.avgPackageLPA,
    renderCell: (c) => `${c.avgPackageLPA.toFixed(1)} LPA`,
    bestIs: "highest"
  },
  {
    key: "rating",
    label: "Rating",
    icon: Award,
    getValue: (c) => c.rating,
    renderCell: (c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: c.rating, size: "sm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold tabular-nums", children: c.rating.toFixed(1) })
    ] }),
    bestIs: "highest"
  },
  {
    key: "location",
    label: "Location",
    icon: MapPin,
    getValue: () => 0,
    renderCell: (c) => c.location,
    bestIs: "none"
  },
  {
    key: "state",
    label: "State",
    icon: Building2,
    getValue: () => 0,
    renderCell: (c) => c.state,
    bestIs: "none"
  },
  {
    key: "established",
    label: "Established Year",
    icon: GraduationCap,
    getValue: () => 0,
    renderCell: (c) => String(Number(c.establishedYear)),
    bestIs: "none"
  },
  {
    key: "accreditation",
    label: "Accreditation",
    icon: Award,
    getValue: () => 0,
    renderCell: (c) => c.accreditation ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "font-mono text-xs", children: c.accreditation }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "—" }),
    bestIs: "none"
  },
  {
    key: "courses",
    label: "Courses Offered",
    icon: BookOpen,
    getValue: (c) => c.courses.length,
    renderCell: (c) => `${c.courses.length} courses`,
    bestIs: "highest"
  },
  {
    key: "jeeCutoff",
    label: "JEE Main Cutoff (Gen.)",
    icon: GraduationCap,
    getValue: (c) => getJeeCutoff(c),
    renderCell: (c) => formatJeeCutoff(c),
    bestIs: "lowest"
  }
];
function getBestIndex(row, colleges) {
  if (row.bestIs === "none" || colleges.length < 2) return -1;
  const vals = colleges.map((c) => row.getValue(c)).filter(Number.isFinite);
  if (vals.length < 2) return -1;
  const best = row.bestIs === "highest" ? Math.max(...vals) : Math.min(...vals);
  const allVals = colleges.map((c) => row.getValue(c));
  const count = allVals.filter((v) => v === best).length;
  if (count > 1) return -1;
  return allVals.findIndex((v) => v === best);
}
function CollegeHeader({
  college,
  index,
  onRemove
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "th",
    {
      className: "text-left p-4 bg-card border-b border-border min-w-[200px] max-w-[260px] align-top",
      "data-ocid": `compare.college_header.${index + 1}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/colleges/$collegeId",
            params: { collegeId: college.id },
            className: "group flex-1 min-w-0",
            "data-ocid": `compare.college_link.${index + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-1 mb-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-sm text-foreground group-hover:text-primary transition-colors leading-snug break-words", children: college.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3 text-muted-foreground shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: college.location })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => onRemove(college.id),
            "aria-label": `Remove ${college.name}`,
            "data-ocid": `compare.remove_button.${index + 1}`,
            className: "shrink-0 mt-0.5 h-6 w-6 flex items-center justify-center rounded-full bg-muted hover:bg-destructive/15 hover:text-destructive text-muted-foreground transition-smooth",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" })
          }
        )
      ] })
    }
  );
}
function CompareSkeleton({ count }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-xl border border-border shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "table",
    {
      className: "w-full border-collapse",
      style: { minWidth: `${192 + count * 220}px` },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 w-48" }),
          Array.from({ length: count }, (_, i) => `skel-th-${i}`).map(
            (k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "p-4 min-w-[200px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-36 mb-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-20" })
            ] }, k)
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: ROWS.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-32" }) }),
          Array.from(
            { length: count },
            (_, i) => `skel-td-${r.key}-${i}`
          ).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-20" }) }, k))
        ] }, r.key)) })
      ]
    }
  ) });
}
function EmptyState() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center justify-center py-24 px-4 text-center",
      "data-ocid": "compare.empty_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-10 w-10 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-2", children: "No Colleges Selected" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-sm mb-8 leading-relaxed", children: "Browse our curated list of 500+ colleges, add up to 3 to the comparison tray, and see them side-by-side here." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", "data-ocid": "compare.browse_colleges_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/colleges", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4 mr-2" }),
          "Browse Colleges"
        ] }) })
      ]
    }
  );
}
function AddMoreBanner({ count }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex items-center gap-3 px-4 py-3 bg-accent/10 border border-accent/25 rounded-xl text-sm mb-5",
      "data-ocid": "compare.add_more_prompt",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { className: "h-4 w-4 text-accent shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent-foreground font-medium", children: count === 1 ? "Add 2 more colleges for a full side-by-side comparison" : "Add 1 more college to complete the comparison (max 3)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            asChild: true,
            variant: "outline",
            size: "sm",
            className: "ml-auto shrink-0 border-accent/40 text-accent hover:bg-accent/10",
            "data-ocid": "compare.add_more_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/colleges", children: "Browse Colleges" })
          }
        )
      ]
    }
  );
}
function ComparePage() {
  const { selected, remove, clear } = useComparison();
  const { actor, isFetching: actorLoading } = useActor();
  const selectedIds = selected.map((c) => c.id);
  const { data: colleges = selected, isLoading } = useQuery({
    queryKey: ["colleges-compare", selectedIds.join(",")],
    queryFn: async () => {
      if (!actor || selectedIds.length === 0) return [];
      return actor.getCollegesById(selectedIds);
    },
    enabled: !!actor && !actorLoading && selectedIds.length > 0,
    placeholderData: selected
  });
  const loading = (isLoading || actorLoading) && selectedIds.length > 0 && colleges.length === 0;
  const tableColleges = colleges.length > 0 ? colleges : selected;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-[calc(100vh-4rem)] bg-background",
      "data-ocid": "compare.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-1", children: "Compare Colleges" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: tableColleges.length > 0 ? `Comparing ${tableColleges.length} college${tableColleges.length > 1 ? "s" : ""} side by side` : "Select colleges to compare them side by side" })
          ] }),
          tableColleges.length >= 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: clear,
              "data-ocid": "compare.clear_all_button",
              className: "text-destructive border-destructive/30 hover:bg-destructive/10",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5 mr-1.5" }),
                "Clear All"
              ]
            }
          )
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-6", children: selectedIds.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          tableColleges.length < 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(AddMoreBanner, { count: tableColleges.length }),
          loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(CompareSkeleton, { count: selectedIds.length }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-xl border border-border shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "table",
            {
              className: "w-full border-collapse",
              style: { minWidth: `${192 + tableColleges.length * 220}px` },
              "data-ocid": "compare.table",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 text-left bg-muted/40 border-b border-border w-48 sticky left-0 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Parameter" }) }),
                  tableColleges.map((college, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CollegeHeader,
                    {
                      college,
                      index: idx,
                      onRemove: remove
                    },
                    college.id
                  ))
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: ROWS.map((row, rowIdx) => {
                  const bestIdx = getBestIndex(row, tableColleges);
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "tr",
                    {
                      className: cn(
                        "group transition-colors",
                        rowIdx % 2 === 0 ? "bg-background" : "bg-muted/20"
                      ),
                      "data-ocid": `compare.row.${row.key}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 border-b border-border sticky left-0 z-10 bg-inherit", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium text-muted-foreground", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(row.icon, { className: "h-4 w-4 shrink-0 text-primary/60" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-tight", children: row.label })
                        ] }) }),
                        tableColleges.map((college, ci) => {
                          const isBest = ci === bestIdx;
                          return /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "td",
                            {
                              "data-ocid": `compare.cell.row${rowIdx + 1}.col${ci + 1}`,
                              className: cn(
                                "p-4 text-sm border-b border-border transition-colors",
                                ci < tableColleges.length - 1 && "border-r border-border/50",
                                isBest ? "bg-accent/8 font-semibold" : "text-foreground"
                              ),
                              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                                isBest && /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-3.5 w-3.5 text-accent shrink-0" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "span",
                                  {
                                    className: cn(
                                      isBest && "text-accent-foreground"
                                    ),
                                    children: row.renderCell(college)
                                  }
                                )
                              ] })
                            },
                            college.id
                          );
                        })
                      ]
                    },
                    row.key
                  );
                }) })
              ]
            }
          ) }),
          tableColleges.length >= 2 && !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "mt-4 flex items-center gap-2 text-xs text-muted-foreground",
              "data-ocid": "compare.legend",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-3.5 w-3.5 text-accent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Trophy icon highlights the best value in each metric row" })
              ]
            }
          )
        ] }) })
      ]
    }
  );
}
export {
  ComparePage as default
};
