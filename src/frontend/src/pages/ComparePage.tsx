import { StarRating } from "@/components/StarRating";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useActor } from "@/hooks/useActor";
import { useComparison } from "@/hooks/useComparison";
import { cn } from "@/lib/utils";
import type { CollegeRecord } from "@/types/college";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  Building2,
  ExternalLink,
  GraduationCap,
  IndianRupee,
  MapPin,
  PlusCircle,
  TrendingUp,
  Trophy,
  X,
} from "lucide-react";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatFees(fees: bigint): string {
  const n = Number(fees);
  if (n >= 100_000) return `₹${(n / 100_000).toFixed(1)}L/yr`;
  if (n >= 1_000) return `₹${(n / 1_000).toFixed(0)}K/yr`;
  return `₹${n}/yr`;
}

function getJeeCutoff(college: CollegeRecord): number {
  const co = college.cutoffs.find(
    (c) => c.examType === "JEE Main" && c.category === "General",
  );
  return co ? Number(co.rank) : Number.POSITIVE_INFINITY;
}

function formatJeeCutoff(college: CollegeRecord): string {
  const n = getJeeCutoff(college);
  return Number.isFinite(n) ? n.toLocaleString("en-IN") : "N/A";
}

// ─── Row definitions ──────────────────────────────────────────────────────────

interface CompareRowDef {
  key: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  getValue: (c: CollegeRecord) => number;
  renderCell: (c: CollegeRecord) => React.ReactNode;
  bestIs: "highest" | "lowest" | "none";
}

const ROWS: CompareRowDef[] = [
  {
    key: "fees",
    label: "Annual Fees",
    icon: IndianRupee,
    getValue: (c) => Number(c.annualFees),
    renderCell: (c) => formatFees(c.annualFees),
    bestIs: "lowest",
  },
  {
    key: "placement",
    label: "Placement %",
    icon: TrendingUp,
    getValue: (c) => Number(c.placementPercent),
    renderCell: (c) => `${Number(c.placementPercent)}%`,
    bestIs: "highest",
  },
  {
    key: "avgPackage",
    label: "Avg Package (LPA)",
    icon: Trophy,
    getValue: (c) => c.avgPackageLPA,
    renderCell: (c) => `${c.avgPackageLPA.toFixed(1)} LPA`,
    bestIs: "highest",
  },
  {
    key: "rating",
    label: "Rating",
    icon: Award,
    getValue: (c) => c.rating,
    renderCell: (c) => (
      <div className="flex items-center gap-1.5">
        <StarRating rating={c.rating} size="sm" />
        <span className="text-sm font-semibold tabular-nums">
          {c.rating.toFixed(1)}
        </span>
      </div>
    ),
    bestIs: "highest",
  },
  {
    key: "location",
    label: "Location",
    icon: MapPin,
    getValue: () => 0,
    renderCell: (c) => c.location,
    bestIs: "none",
  },
  {
    key: "state",
    label: "State",
    icon: Building2,
    getValue: () => 0,
    renderCell: (c) => c.state,
    bestIs: "none",
  },
  {
    key: "established",
    label: "Established Year",
    icon: GraduationCap,
    getValue: () => 0,
    renderCell: (c) => String(Number(c.establishedYear)),
    bestIs: "none",
  },
  {
    key: "accreditation",
    label: "Accreditation",
    icon: Award,
    getValue: () => 0,
    renderCell: (c) =>
      c.accreditation ? (
        <Badge variant="secondary" className="font-mono text-xs">
          {c.accreditation}
        </Badge>
      ) : (
        <span className="text-muted-foreground">—</span>
      ),
    bestIs: "none",
  },
  {
    key: "courses",
    label: "Courses Offered",
    icon: BookOpen,
    getValue: (c) => c.courses.length,
    renderCell: (c) => `${c.courses.length} courses`,
    bestIs: "highest",
  },
  {
    key: "jeeCutoff",
    label: "JEE Main Cutoff (Gen.)",
    icon: GraduationCap,
    getValue: (c) => getJeeCutoff(c),
    renderCell: (c) => formatJeeCutoff(c),
    bestIs: "lowest",
  },
];

function getBestIndex(row: CompareRowDef, colleges: CollegeRecord[]): number {
  if (row.bestIs === "none" || colleges.length < 2) return -1;
  const vals = colleges.map((c) => row.getValue(c)).filter(Number.isFinite);
  if (vals.length < 2) return -1;
  const best = row.bestIs === "highest" ? Math.max(...vals) : Math.min(...vals);
  const allVals = colleges.map((c) => row.getValue(c));
  const count = allVals.filter((v) => v === best).length;
  if (count > 1) return -1; // no single winner
  return allVals.findIndex((v) => v === best);
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function CollegeHeader({
  college,
  index,
  onRemove,
}: {
  college: CollegeRecord;
  index: number;
  onRemove: (id: string) => void;
}) {
  return (
    <th
      className="text-left p-4 bg-card border-b border-border min-w-[200px] max-w-[260px] align-top"
      data-ocid={`compare.college_header.${index + 1}`}
    >
      <div className="flex items-start justify-between gap-2">
        <Link
          to="/colleges/$collegeId"
          params={{ collegeId: college.id }}
          className="group flex-1 min-w-0"
          data-ocid={`compare.college_link.${index + 1}`}
        >
          <div className="flex items-start gap-1 mb-1.5">
            <span className="font-display font-bold text-sm text-foreground group-hover:text-primary transition-colors leading-snug break-words">
              {college.name}
            </span>
            <ExternalLink className="h-3 w-3 text-muted-foreground shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3 shrink-0" />
            <span className="truncate">{college.location}</span>
          </div>
        </Link>
        <button
          type="button"
          onClick={() => onRemove(college.id)}
          aria-label={`Remove ${college.name}`}
          data-ocid={`compare.remove_button.${index + 1}`}
          className="shrink-0 mt-0.5 h-6 w-6 flex items-center justify-center rounded-full bg-muted hover:bg-destructive/15 hover:text-destructive text-muted-foreground transition-smooth"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </th>
  );
}

function CompareSkeleton({ count }: { count: number }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border shadow-card">
      <table
        className="w-full border-collapse"
        style={{ minWidth: `${192 + count * 220}px` }}
      >
        <thead>
          <tr>
            <th className="p-4 w-48" />
            {Array.from({ length: count }, (_, i) => `skel-th-${i}`).map(
              (k) => (
                <th key={k} className="p-4 min-w-[200px]">
                  <Skeleton className="h-5 w-36 mb-2" />
                  <Skeleton className="h-3 w-20" />
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r) => (
            <tr key={r.key}>
              <td className="p-4">
                <Skeleton className="h-4 w-32" />
              </td>
              {Array.from(
                { length: count },
                (_, i) => `skel-td-${r.key}-${i}`,
              ).map((k) => (
                <td key={k} className="p-4">
                  <Skeleton className="h-4 w-20" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EmptyState() {
  return (
    <div
      className="flex flex-col items-center justify-center py-24 px-4 text-center"
      data-ocid="compare.empty_state"
    >
      <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 shadow-card">
        <GraduationCap className="h-10 w-10 text-primary" />
      </div>
      <h2 className="font-display text-2xl font-bold text-foreground mb-2">
        No Colleges Selected
      </h2>
      <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
        Browse our curated list of 500+ colleges, add up to 3 to the comparison
        tray, and see them side-by-side here.
      </p>
      <Button asChild size="lg" data-ocid="compare.browse_colleges_button">
        <Link to="/colleges">
          <BookOpen className="h-4 w-4 mr-2" />
          Browse Colleges
        </Link>
      </Button>
    </div>
  );
}

function AddMoreBanner({ count }: { count: number }) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-3 bg-accent/10 border border-accent/25 rounded-xl text-sm mb-5"
      data-ocid="compare.add_more_prompt"
    >
      <PlusCircle className="h-4 w-4 text-accent shrink-0" />
      <span className="text-accent-foreground font-medium">
        {count === 1
          ? "Add 2 more colleges for a full side-by-side comparison"
          : "Add 1 more college to complete the comparison (max 3)"}
      </span>
      <Button
        asChild
        variant="outline"
        size="sm"
        className="ml-auto shrink-0 border-accent/40 text-accent hover:bg-accent/10"
        data-ocid="compare.add_more_button"
      >
        <Link to="/colleges">Browse Colleges</Link>
      </Button>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function ComparePage() {
  const { selected, remove, clear } = useComparison();
  const { actor, isFetching: actorLoading } = useActor();
  const selectedIds = selected.map((c) => c.id);

  const { data: colleges = selected, isLoading } = useQuery<CollegeRecord[]>({
    queryKey: ["colleges-compare", selectedIds.join(",")],
    queryFn: async () => {
      if (!actor || selectedIds.length === 0) return [];
      return actor.getCollegesById(selectedIds);
    },
    enabled: !!actor && !actorLoading && selectedIds.length > 0,
    placeholderData: selected,
  });

  const loading =
    (isLoading || actorLoading) &&
    selectedIds.length > 0 &&
    colleges.length === 0;
  const tableColleges = colleges.length > 0 ? colleges : selected;

  return (
    <div
      className="min-h-[calc(100vh-4rem)] bg-background"
      data-ocid="compare.page"
    >
      {/* Page header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                Compare Colleges
              </h1>
              <p className="text-sm text-muted-foreground">
                {tableColleges.length > 0
                  ? `Comparing ${tableColleges.length} college${tableColleges.length > 1 ? "s" : ""} side by side`
                  : "Select colleges to compare them side by side"}
              </p>
            </div>
            {tableColleges.length >= 2 && (
              <Button
                variant="outline"
                size="sm"
                onClick={clear}
                data-ocid="compare.clear_all_button"
                className="text-destructive border-destructive/30 hover:bg-destructive/10"
              >
                <X className="h-3.5 w-3.5 mr-1.5" />
                Clear All
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container mx-auto px-4 py-6">
        {selectedIds.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            {tableColleges.length < 3 && (
              <AddMoreBanner count={tableColleges.length} />
            )}

            {loading ? (
              <CompareSkeleton count={selectedIds.length} />
            ) : (
              <div className="overflow-x-auto rounded-xl border border-border shadow-card">
                <table
                  className="w-full border-collapse"
                  style={{ minWidth: `${192 + tableColleges.length * 220}px` }}
                  data-ocid="compare.table"
                >
                  <thead>
                    <tr>
                      {/* Parameter label column */}
                      <th className="p-4 text-left bg-muted/40 border-b border-border w-48 sticky left-0 z-10">
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Parameter
                        </span>
                      </th>
                      {tableColleges.map((college, idx) => (
                        <CollegeHeader
                          key={college.id}
                          college={college}
                          index={idx}
                          onRemove={remove}
                        />
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map((row, rowIdx) => {
                      const bestIdx = getBestIndex(row, tableColleges);
                      return (
                        <tr
                          key={row.key}
                          className={cn(
                            "group transition-colors",
                            rowIdx % 2 === 0 ? "bg-background" : "bg-muted/20",
                          )}
                          data-ocid={`compare.row.${row.key}`}
                        >
                          {/* Label */}
                          <td className="p-4 border-b border-border sticky left-0 z-10 bg-inherit">
                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                              <row.icon className="h-4 w-4 shrink-0 text-primary/60" />
                              <span className="leading-tight">{row.label}</span>
                            </div>
                          </td>
                          {/* Value cells */}
                          {tableColleges.map((college, ci) => {
                            const isBest = ci === bestIdx;
                            return (
                              <td
                                key={college.id}
                                data-ocid={`compare.cell.row${rowIdx + 1}.col${ci + 1}`}
                                className={cn(
                                  "p-4 text-sm border-b border-border transition-colors",
                                  ci < tableColleges.length - 1 &&
                                    "border-r border-border/50",
                                  isBest
                                    ? "bg-accent/8 font-semibold"
                                    : "text-foreground",
                                )}
                              >
                                <div className="flex items-center gap-1.5">
                                  {isBest && (
                                    <Trophy className="h-3.5 w-3.5 text-accent shrink-0" />
                                  )}
                                  <span
                                    className={cn(
                                      isBest && "text-accent-foreground",
                                    )}
                                  >
                                    {row.renderCell(college)}
                                  </span>
                                </div>
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            {tableColleges.length >= 2 && !loading && (
              <div
                className="mt-4 flex items-center gap-2 text-xs text-muted-foreground"
                data-ocid="compare.legend"
              >
                <Trophy className="h-3.5 w-3.5 text-accent" />
                <span>
                  Trophy icon highlights the best value in each metric row
                </span>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
