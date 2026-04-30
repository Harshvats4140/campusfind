import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, t as createSlot, b as cn, B as Badge, s as GraduationCap, a as Button, f as Skeleton, L as Link, M as MapPin, q as BookOpen } from "./index-BmCmIy5R.js";
import { C as Card, a as CardContent } from "./index-9_DyodBn.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, I as Input } from "./select-BGs-Fi-Q.js";
import { u as useActor, a as useQuery, S as StarRating, T as TrendingUp } from "./useActor-B9UyoNRB.js";
import { I as IndianRupee } from "./indian-rupee-B8B8kXFK.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode);
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = createSlot(`Primitive.${node}`);
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
var NAME = "Label";
var Label$1 = reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        var _a;
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label$1.displayName = NAME;
var Root = Label$1;
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
const EXAM_CONFIG = {
  "JEE Main": {
    min: 1,
    max: 2e5,
    description: "Joint Entrance Examination (Main) — for NITs, IIITs, and GFTIs. Rank is your CRL (Common Rank List) out of ~12 lakh candidates.",
    category: "Engineering"
  },
  "JEE Advanced": {
    min: 1,
    max: 1e4,
    description: "Joint Entrance Examination (Advanced) — exclusively for IITs. Only top 2.5 lakh JEE Main qualifiers may attempt this.",
    category: "Engineering"
  },
  NEET: {
    min: 1,
    max: 1e5,
    description: "National Eligibility cum Entrance Test — for MBBS, BDS, and allied medical courses across India.",
    category: "Medical"
  }
};
const EXAM_TYPES = Object.keys(EXAM_CONFIG);
function formatFees(annualFees) {
  const fees = Number(annualFees);
  if (fees >= 1e5) return `₹${(fees / 1e5).toFixed(1)}L/yr`;
  return `₹${(fees / 1e3).toFixed(0)}K/yr`;
}
function getRelevantCutoff(college, examType) {
  return college.cutoffs.find(
    (c) => c.examType === examType && (c.category === "General" || c.category === "Open")
  );
}
function getMatchQuality(college, examType, rank) {
  const cutoff = getRelevantCutoff(college, examType);
  if (!cutoff)
    return {
      label: "Possible",
      colorClass: "text-muted-foreground",
      bgClass: "bg-muted/60"
    };
  const diff = Math.abs(Number(cutoff.rank) - rank);
  const pct = diff / rank;
  if (pct < 0.1)
    return {
      label: "Best Match",
      colorClass: "text-chart-4",
      bgClass: "bg-chart-4/10"
    };
  if (pct < 0.3)
    return {
      label: "Good Match",
      colorClass: "text-primary",
      bgClass: "bg-primary/10"
    };
  return {
    label: "Possible",
    colorClass: "text-muted-foreground",
    bgClass: "bg-muted/60"
  };
}
function ResultCard({ college, index, examType, rank }) {
  const { label, colorClass, bgClass } = getMatchQuality(
    college,
    examType,
    rank
  );
  const cutoff = getRelevantCutoff(college, examType);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to: "/colleges/$collegeId",
      params: { collegeId: college.id },
      "data-ocid": `predictor.result.item.${index + 1}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "group transition-smooth hover:shadow-elevated hover:border-primary/30 border border-border cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-base leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1", children: college.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs truncate", children: [
                  college.location,
                  ", ",
                  college.state
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-1.5 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "secondary",
                  className: "text-xs bg-primary/10 text-primary border-0",
                  children: college.accreditation
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: cn(
                    "text-xs font-semibold px-2 py-0.5 rounded-full",
                    colorClass,
                    bgClass
                  ),
                  children: label
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: college.rating, size: "sm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: college.rating.toFixed(1) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-muted/50 rounded-md px-2.5 py-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "h-3.5 w-3.5 text-accent shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground leading-none mb-0.5", children: "Annual Fees" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-foreground", children: formatFees(college.annualFees) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-muted/50 rounded-md px-2.5 py-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3.5 w-3.5 text-chart-4 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground leading-none mb-0.5", children: "Placement" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-semibold text-foreground", children: [
                  college.placementPercent.toString(),
                  "%"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-muted/50 rounded-md px-2.5 py-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-3.5 w-3.5 text-chart-2 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground leading-none mb-0.5", children: "Avg Package" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-semibold text-foreground", children: [
                  "₹",
                  college.avgPackageLPA.toFixed(1),
                  "L"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-muted/50 rounded-md px-2.5 py-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-3.5 w-3.5 text-primary shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground leading-none mb-0.5", children: "Cutoff Rank" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-foreground", children: cutoff ? Number(cutoff.rank).toLocaleString("en-IN") : "N/A" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border px-4 py-2 flex items-center justify-between bg-muted/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground truncate max-w-[60%]", children: [
            college.courses.slice(0, 2).map((c) => c.name).join(" · "),
            college.courses.length > 2 && ` +${college.courses.length - 2} more`
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-primary group-hover:text-primary/70 transition-colors shrink-0", children: "View Details →" })
        ] })
      ] }) })
    }
  );
}
function ExamTooltip({ examType }) {
  const [open, setOpen] = reactExports.useState(false);
  if (!examType) return null;
  const config = EXAM_CONFIG[examType];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded",
        onClick: () => setOpen((v) => !v),
        "aria-expanded": open,
        "aria-label": "What does this cutoff mean?",
        "data-ocid": "predictor.exam_info_button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-3.5 w-3.5" }),
          "What does this cutoff mean?"
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "absolute top-6 left-0 z-10 w-72 bg-card border border-border rounded-lg shadow-elevated p-3 text-xs text-muted-foreground leading-relaxed",
        "data-ocid": "predictor.exam_info_tooltip",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-1", children: examType }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: config.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-primary/80", children: [
            "Valid rank range: ",
            config.min.toLocaleString("en-IN"),
            " –",
            " ",
            config.max.toLocaleString("en-IN")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "absolute top-2 right-2 text-muted-foreground hover:text-foreground",
              onClick: () => setOpen(false),
              "aria-label": "Close tooltip",
              children: "✕"
            }
          )
        ]
      }
    )
  ] });
}
function PredictorPage() {
  var _a;
  const { actor, isFetching } = useActor();
  const [examType, setExamType] = reactExports.useState("");
  const [rankInput, setRankInput] = reactExports.useState("");
  const [validationError, setValidationError] = reactExports.useState("");
  const [submittedQuery, setSubmittedQuery] = reactExports.useState(
    null
  );
  const config = examType ? EXAM_CONFIG[examType] : null;
  function validateRank(value, exam) {
    if (!exam) return "Please select an exam type.";
    const num = Number.parseInt(value, 10);
    if (!value || Number.isNaN(num)) return "Please enter a valid rank.";
    const { min, max } = EXAM_CONFIG[exam];
    if (num < min || num > max)
      return `Rank must be between ${min.toLocaleString("en-IN")} and ${max.toLocaleString("en-IN")} for ${exam}.`;
    return "";
  }
  function handleSubmit(e) {
    e.preventDefault();
    const error = validateRank(rankInput, examType);
    if (error) {
      setValidationError(error);
      return;
    }
    setValidationError("");
    setSubmittedQuery({
      examType,
      rank: BigInt(Number.parseInt(rankInput, 10))
    });
  }
  function handleReset() {
    setExamType("");
    setRankInput("");
    setValidationError("");
    setSubmittedQuery(null);
  }
  const { data: results, isLoading } = useQuery({
    queryKey: [
      "predictor",
      submittedQuery == null ? void 0 : submittedQuery.examType,
      (_a = submittedQuery == null ? void 0 : submittedQuery.rank) == null ? void 0 : _a.toString()
    ],
    queryFn: async () => {
      if (!actor || !submittedQuery) return [];
      return actor.predictColleges(submittedQuery);
    },
    enabled: !!actor && !isFetching && !!submittedQuery
  });
  const sortedResults = results ? [...results].sort((a, b) => {
    const rankNum = submittedQuery ? Number(submittedQuery.rank) : 0;
    const exam = (submittedQuery == null ? void 0 : submittedQuery.examType) ?? "";
    const dist = (c) => {
      const cut = getRelevantCutoff(c, exam);
      return cut ? Math.abs(Number(cut.rank) - rankNum) : Number.POSITIVE_INFINITY;
    };
    return dist(a) - dist(b);
  }) : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", "data-ocid": "predictor.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-9 w-9 rounded-lg bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            variant: "secondary",
            className: "bg-accent/15 text-accent-foreground border-0 font-medium",
            children: "AI-Powered"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-2", children: "College Predictor" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base max-w-xl", children: "Enter your exam and rank to discover colleges where you have the best chance of admission. Results are sorted by match quality based on historical cutoff data." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs text-muted-foreground/70 flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "h-3 w-3" }),
        "Results are indicative only — based on previous years' cutoff data. Actual cutoffs may vary."
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 max-w-4xl py-8 space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border border-border shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, "data-ocid": "predictor.form", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "exam-select", className: "font-medium", children: "Entrance Exam" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: examType,
                onValueChange: (v) => {
                  setExamType(v);
                  setValidationError("");
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      id: "exam-select",
                      "data-ocid": "predictor.exam_select",
                      className: "w-full",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select exam…" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: EXAM_TYPES.map((exam) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: exam, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-3.5 w-3.5 text-primary" }),
                    exam
                  ] }) }, exam)) })
                ]
              }
            ),
            examType && config && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
              "Category: ",
              config.category,
              " · Rank range:",
              " ",
              config.min.toLocaleString("en-IN"),
              " –",
              " ",
              config.max.toLocaleString("en-IN")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "rank-input", className: "font-medium", children: "Your Rank" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "rank-input",
                type: "number",
                min: (config == null ? void 0 : config.min) ?? 1,
                max: (config == null ? void 0 : config.max) ?? 2e5,
                placeholder: config ? `e.g. ${Math.round(config.max / 3).toLocaleString("en-IN")}` : "Select exam first",
                value: rankInput,
                onChange: (e) => {
                  setRankInput(e.target.value);
                  if (validationError) setValidationError("");
                },
                onBlur: () => {
                  if (rankInput)
                    setValidationError(validateRank(rankInput, examType));
                },
                disabled: !examType,
                "data-ocid": "predictor.rank_input",
                className: "w-full"
              }
            ),
            validationError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: "text-xs text-destructive flex items-center gap-1",
                "data-ocid": "predictor.rank_field_error",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-3 w-3" }),
                  validationError
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-5 pt-4 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExamTooltip, { examType }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
            submittedQuery && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                variant: "outline",
                size: "sm",
                className: "gap-1.5",
                onClick: handleReset,
                "data-ocid": "predictor.reset_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-3.5 w-3.5" }),
                  "Reset"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                className: "gap-2 font-semibold",
                disabled: !examType || !rankInput || isLoading,
                "data-ocid": "predictor.submit_button",
                children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-4 w-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" }),
                  "Predicting…"
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
                  "Predict My Colleges"
                ] })
              }
            )
          ] })
        ] })
      ] }) }) }),
      isLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "predictor.loading_state", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-48" }),
        [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-40 w-full rounded-xl" }, i))
      ] }),
      !isLoading && submittedQuery && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": "predictor.results_section", children: sortedResults.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-col items-center justify-center py-16 text-center bg-card rounded-xl border border-border",
          "data-ocid": "predictor.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-16 w-16 rounded-full bg-muted mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-8 w-8 text-muted-foreground/50" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg text-foreground mb-2", children: "No colleges found" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-sm mb-4", children: "No colleges found for this rank. Try a different rank or exam." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: handleReset,
                "data-ocid": "predictor.try_again_button",
                children: "Try Again"
              }
            )
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "text-sm font-medium text-foreground",
              "data-ocid": "predictor.results_count",
              children: [
                "Found",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-semibold", children: sortedResults.length }),
                " ",
                "college",
                sortedResults.length !== 1 ? "s" : "",
                " matching your profile"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-2 w-2 rounded-full bg-chart-4" }),
              "Best Match"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-2 w-2 rounded-full bg-primary" }),
              "Good Match"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-2 w-2 rounded-full bg-muted-foreground" }),
              "Possible"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "predictor.results_list", children: sortedResults.map((college, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ResultCard,
          {
            college,
            index: i,
            examType: submittedQuery.examType,
            rank: Number(submittedQuery.rank)
          },
          college.id
        )) })
      ] }) })
    ] })
  ] });
}
export {
  PredictorPage as default
};
