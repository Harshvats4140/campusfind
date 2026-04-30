import { c as createLucideIcon, u as useComparison, j as jsxRuntimeExports, L as Link, M as MapPin, B as Badge, a as Button, b as cn, S as Search, X, d as useNavigate, e as useSearch, r as reactExports, f as Skeleton } from "./index-BmCmIy5R.js";
import { S as StarRating, T as TrendingUp, u as useActor, a as useQuery } from "./useActor-B9UyoNRB.js";
import { C as Card, a as CardContent } from "./index-9_DyodBn.js";
import { I as IndianRupee } from "./indian-rupee-B8B8kXFK.js";
import { C as CirclePlus } from "./circle-plus-DCX1lWvl.js";
import { I as Input, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-BGs-Fi-Q.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m13.5 8.5-5 5", key: "1cs55j" }],
  ["path", { d: "m8.5 8.5 5 5", key: "a8mexj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
];
const SearchX = createLucideIcon("search-x", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6"
    }
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }]
];
const Wallet = createLucideIcon("wallet", __iconNode);
function formatFees(annualFees) {
  const fees = Number(annualFees);
  if (fees >= 1e5) {
    return `₹${(fees / 1e5).toFixed(1)}L/yr`;
  }
  return `₹${(fees / 1e3).toFixed(0)}K/yr`;
}
function CollegeCard({ college, index = 0 }) {
  const { add, remove, isSelected } = useComparison();
  const selected = isSelected(college.id);
  const handleCompare = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (selected) {
      remove(college.id);
    } else {
      add(college);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      className: cn(
        "group relative overflow-hidden transition-smooth hover:shadow-elevated border border-border",
        selected && "ring-2 ring-primary/60"
      ),
      "data-ocid": `college.item.${index + 1}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 pb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/colleges/$collegeId",
                  params: { collegeId: college.id },
                  className: "block",
                  "data-ocid": `college.link.${index + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-base leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2", children: college.name })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-1 text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs truncate", children: [
                  college.location,
                  ", ",
                  college.state
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "secondary",
                className: "shrink-0 text-xs font-medium bg-primary/10 text-primary border-0",
                children: college.accreditation
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: college.rating, size: "sm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: college.rating.toFixed(1) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-muted/60 rounded-md px-2.5 py-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "h-3.5 w-3.5 text-accent shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground leading-none mb-0.5", children: "Annual Fees" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: formatFees(college.annualFees) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-muted/60 rounded-md px-2.5 py-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3.5 w-3.5 text-chart-4 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground leading-none mb-0.5", children: "Placement" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-semibold text-foreground", children: [
                  college.placementPercent.toString(),
                  "%"
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border px-4 py-2.5 flex items-center justify-between gap-2 bg-muted/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/colleges/$collegeId",
              params: { collegeId: college.id },
              className: "text-xs font-medium text-primary hover:text-primary/80 transition-colors",
              "data-ocid": `college.details_link.${index + 1}`,
              children: "View Details →"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: cn(
                "h-7 px-2.5 text-xs gap-1 transition-smooth",
                selected ? "text-primary bg-primary/10 hover:bg-primary/20" : "text-muted-foreground hover:text-primary hover:bg-primary/10"
              ),
              onClick: handleCompare,
              "data-ocid": `college.compare_button.${index + 1}`,
              children: selected ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5" }),
                "Added"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { className: "h-3.5 w-3.5" }),
                "Compare"
              ] })
            }
          )
        ] })
      ] })
    }
  );
}
const FEES_OPTIONS = [
  { value: "all", label: "All Fee Ranges" },
  { value: "under5", label: "Under ₹5L/yr" },
  { value: "5to10", label: "₹5L – ₹10L/yr" },
  { value: "10to15", label: "₹10L – ₹15L/yr" },
  { value: "above15", label: "Above ₹15L/yr" }
];
function SearchFilters({
  filters,
  locations,
  onFilterChange
}) {
  const hasActiveFilters = filters.nameQuery !== "" || filters.location !== "" || filters.feesRange !== "all";
  const handleReset = () => {
    onFilterChange({ nameQuery: "", location: "", feesRange: "all" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "bg-card border border-border rounded-xl p-4 shadow-card",
      "data-ocid": "search.filters",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "text",
              placeholder: "Search colleges by name...",
              value: filters.nameQuery,
              onChange: (e) => onFilterChange({ ...filters, nameQuery: e.target.value }),
              className: "pl-9 h-10 bg-background border-input",
              "data-ocid": "search.search_input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 flex-col sm:flex-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: filters.location,
                onValueChange: (val) => onFilterChange({
                  ...filters,
                  location: val === "_all" ? "" : val
                }),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "w-full sm:w-[180px] h-10 pl-9 bg-background border-input",
                      "data-ocid": "search.location_select",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "All Locations" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "_all", children: "All Locations" }),
                    locations.map((loc) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: loc, children: loc }, loc))
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: filters.feesRange,
                onValueChange: (val) => onFilterChange({ ...filters, feesRange: val }),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "w-full sm:w-[180px] h-10 pl-9 bg-background border-input",
                      "data-ocid": "search.fees_select",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "All Fees" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: FEES_OPTIONS.map(({ value, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value, children: label }, value)) })
                ]
              }
            )
          ] }),
          hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "h-10 px-3 text-muted-foreground hover:text-foreground gap-1.5",
              onClick: handleReset,
              "data-ocid": "search.reset_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
                "Reset"
              ]
            }
          )
        ] })
      ] })
    }
  );
}
const PAGE_SIZE = 6;
function feesRangeToMinMax(range) {
  switch (range) {
    case "under5":
      return { maxFees: BigInt(5e5) };
    case "5to10":
      return { minFees: BigInt(5e5), maxFees: BigInt(1e6) };
    case "10to15":
      return { minFees: BigInt(1e6), maxFees: BigInt(15e5) };
    case "above15":
      return { minFees: BigInt(15e5) };
    default:
      return {};
  }
}
function buildSearchFilter(filters, page) {
  const { minFees, maxFees } = feesRangeToMinMax(filters.feesRange);
  const filter = {
    page: BigInt(page - 1),
    pageSize: BigInt(PAGE_SIZE)
  };
  if (filters.nameQuery.trim()) filter.nameQuery = filters.nameQuery.trim();
  if (filters.location) filter.location = filters.location;
  if (minFees !== void 0) filter.minFees = minFees;
  if (maxFees !== void 0) filter.maxFees = maxFees;
  return filter;
}
function CardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-1/2" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-16 rounded-full shrink-0" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-28" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 rounded-md" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 rounded-md" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border px-4 py-2.5 flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-20 rounded-full" })
    ] })
  ] });
}
function CollegesPage() {
  const { actor, isFetching: actorLoading } = useActor();
  const navigate = useNavigate({ from: "/colleges" });
  const searchParams = useSearch({ strict: false });
  const [filters, setFilters] = reactExports.useState({
    nameQuery: searchParams.q ?? "",
    location: searchParams.location ?? "",
    feesRange: searchParams.fees ?? "all"
  });
  const [page, setPage] = reactExports.useState(
    Number.parseInt(searchParams.page ?? "1", 10)
  );
  const [debouncedName, setDebouncedName] = reactExports.useState(filters.nameQuery);
  const debounceRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setDebouncedName(filters.nameQuery);
      setPage(1);
    }, 300);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [filters.nameQuery]);
  const prevFiltersRef = reactExports.useRef(filters);
  reactExports.useEffect(() => {
    const prev = prevFiltersRef.current;
    if (prev.location !== filters.location || prev.feesRange !== filters.feesRange) {
      setPage(1);
    }
    prevFiltersRef.current = filters;
  }, [filters]);
  reactExports.useEffect(() => {
    const params = {};
    if (debouncedName) params.q = debouncedName;
    if (filters.location) params.location = filters.location;
    if (filters.feesRange !== "all") params.fees = filters.feesRange;
    if (page > 1) params.page = String(page);
    navigate({ search: params, replace: true });
  }, [debouncedName, filters.location, filters.feesRange, page, navigate]);
  reactExports.useEffect(() => {
    if (!actor || actorLoading) return;
    actor.initializeData().catch(() => {
    });
  }, [actor, actorLoading]);
  const activeFilters = { ...filters, nameQuery: debouncedName };
  const searchFilter = buildSearchFilter(activeFilters, page);
  const { data, isLoading, isFetching } = useQuery({
    queryKey: [
      "colleges",
      debouncedName,
      filters.location,
      filters.feesRange,
      page
    ],
    queryFn: async () => {
      if (!actor) return { colleges: [], totalCount: BigInt(0) };
      return actor.getColleges(searchFilter);
    },
    enabled: !!actor && !actorLoading,
    staleTime: 3e4
  });
  const { data: locations = [] } = useQuery({
    queryKey: ["locations"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllLocations();
    },
    enabled: !!actor && !actorLoading,
    staleTime: 5 * 60 * 1e3
  });
  const colleges = (data == null ? void 0 : data.colleges) ?? [];
  const totalCount = Number((data == null ? void 0 : data.totalCount) ?? 0);
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));
  const handleFilterChange = reactExports.useCallback((next) => {
    setFilters(next);
  }, []);
  const handleClearFilters = () => {
    setFilters({ nameQuery: "", location: "", feesRange: "all" });
    setDebouncedName("");
    setPage(1);
  };
  const showSkeleton = isLoading || actorLoading && colleges.length === 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background pb-28", "data-ocid": "colleges.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: "Colleges in India" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Discover the best colleges for your future" })
        ] }),
        !showSkeleton && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-sm text-muted-foreground bg-muted/60 rounded-full px-3 py-1 font-medium shrink-0 self-start sm:self-auto",
            "data-ocid": "colleges.result_count",
            children: isFetching && !isLoading ? "Updating…" : `Showing ${totalCount} college${totalCount !== 1 ? "s" : ""}`
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SearchFilters,
        {
          filters,
          locations,
          onFilterChange: handleFilterChange
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-6", children: showSkeleton ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
        "data-ocid": "colleges.loading_state",
        children: Array.from({ length: PAGE_SIZE }, (_, i) => `sk-${i}`).map(
          (key) => /* @__PURE__ */ jsxRuntimeExports.jsx(CardSkeleton, {}, key)
        )
      }
    ) : colleges.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-24 text-center",
        "data-ocid": "colleges.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/50 rounded-full p-5 mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchX, { className: "h-10 w-10 text-muted-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold text-foreground mb-2", children: "No colleges found matching your filters" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-xs mb-6", children: "Try broadening your search or clearing the active filters to see all colleges." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: handleClearFilters,
              "data-ocid": "colleges.clear_filters_button",
              children: "Clear all filters"
            }
          )
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
          "data-ocid": "colleges.list",
          children: colleges.map((college, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            CollegeCard,
            {
              college,
              index: (page - 1) * PAGE_SIZE + i
            },
            college.id
          ))
        }
      ),
      totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center justify-center gap-3 mt-8",
          "data-ocid": "colleges.pagination",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => setPage((p) => Math.max(1, p - 1)),
                disabled: page <= 1 || isFetching,
                "data-ocid": "colleges.pagination_prev",
                children: "← Previous"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "text-sm font-medium text-muted-foreground px-1",
                "data-ocid": "colleges.pagination_indicator",
                children: [
                  "Page ",
                  page,
                  " of ",
                  totalPages
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => setPage((p) => Math.min(totalPages, p + 1)),
                disabled: page >= totalPages || isFetching,
                "data-ocid": "colleges.pagination_next",
                children: "Next →"
              }
            )
          ]
        }
      )
    ] }) })
  ] });
}
export {
  CollegesPage as default
};
