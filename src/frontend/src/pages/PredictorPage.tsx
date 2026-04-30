import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import {
  AlertCircle,
  BookOpen,
  GraduationCap,
  IndianRupee,
  Info,
  MapPin,
  RotateCcw,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { StarRating } from "../components/StarRating";
import { useActor } from "../hooks/useActor";
import type {
  CollegeRecord,
  CutoffRecord,
  PredictorQuery,
} from "../types/college";

// ─── Constants ───────────────────────────────────────────────────────────────

type ExamType = "JEE Main" | "JEE Advanced" | "NEET";

interface ExamConfig {
  min: number;
  max: number;
  description: string;
  category: string;
}

const EXAM_CONFIG: Record<ExamType, ExamConfig> = {
  "JEE Main": {
    min: 1,
    max: 200000,
    description:
      "Joint Entrance Examination (Main) — for NITs, IIITs, and GFTIs. Rank is your CRL (Common Rank List) out of ~12 lakh candidates.",
    category: "Engineering",
  },
  "JEE Advanced": {
    min: 1,
    max: 10000,
    description:
      "Joint Entrance Examination (Advanced) — exclusively for IITs. Only top 2.5 lakh JEE Main qualifiers may attempt this.",
    category: "Engineering",
  },
  NEET: {
    min: 1,
    max: 100000,
    description:
      "National Eligibility cum Entrance Test — for MBBS, BDS, and allied medical courses across India.",
    category: "Medical",
  },
};

const EXAM_TYPES = Object.keys(EXAM_CONFIG) as ExamType[];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatFees(annualFees: bigint): string {
  const fees = Number(annualFees);
  if (fees >= 100000) return `₹${(fees / 100000).toFixed(1)}L/yr`;
  return `₹${(fees / 1000).toFixed(0)}K/yr`;
}

function getRelevantCutoff(
  college: CollegeRecord,
  examType: string,
): CutoffRecord | undefined {
  return college.cutoffs.find(
    (c) =>
      c.examType === examType &&
      (c.category === "General" || c.category === "Open"),
  );
}

function getMatchQuality(
  college: CollegeRecord,
  examType: string,
  rank: number,
): { label: string; colorClass: string; bgClass: string } {
  const cutoff = getRelevantCutoff(college, examType);
  if (!cutoff)
    return {
      label: "Possible",
      colorClass: "text-muted-foreground",
      bgClass: "bg-muted/60",
    };

  const diff = Math.abs(Number(cutoff.rank) - rank);
  const pct = diff / rank;

  if (pct < 0.1)
    return {
      label: "Best Match",
      colorClass: "text-chart-4",
      bgClass: "bg-chart-4/10",
    };
  if (pct < 0.3)
    return {
      label: "Good Match",
      colorClass: "text-primary",
      bgClass: "bg-primary/10",
    };
  return {
    label: "Possible",
    colorClass: "text-muted-foreground",
    bgClass: "bg-muted/60",
  };
}

// ─── Result Card ─────────────────────────────────────────────────────────────

interface ResultCardProps {
  college: CollegeRecord;
  index: number;
  examType: string;
  rank: number;
}

function ResultCard({ college, index, examType, rank }: ResultCardProps) {
  const { label, colorClass, bgClass } = getMatchQuality(
    college,
    examType,
    rank,
  );
  const cutoff = getRelevantCutoff(college, examType);

  return (
    <Link
      to="/colleges/$collegeId"
      params={{ collegeId: college.id }}
      data-ocid={`predictor.result.item.${index + 1}`}
    >
      <Card className="group transition-smooth hover:shadow-elevated hover:border-primary/30 border border-border cursor-pointer">
        <CardContent className="p-0">
          <div className="p-4">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold text-base leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                  {college.name}
                </h3>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-3 w-3 flex-shrink-0" />
                  <span className="text-xs truncate">
                    {college.location}, {college.state}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1.5 shrink-0">
                <Badge
                  variant="secondary"
                  className="text-xs bg-primary/10 text-primary border-0"
                >
                  {college.accreditation}
                </Badge>
                <span
                  className={cn(
                    "text-xs font-semibold px-2 py-0.5 rounded-full",
                    colorClass,
                    bgClass,
                  )}
                >
                  {label}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <StarRating rating={college.rating} size="sm" />
              <span className="text-xs font-semibold text-foreground">
                {college.rating.toFixed(1)}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div className="flex items-center gap-1.5 bg-muted/50 rounded-md px-2.5 py-1.5">
                <IndianRupee className="h-3.5 w-3.5 text-accent shrink-0" />
                <div>
                  <div className="text-[10px] text-muted-foreground leading-none mb-0.5">
                    Annual Fees
                  </div>
                  <div className="text-xs font-semibold text-foreground">
                    {formatFees(college.annualFees)}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 bg-muted/50 rounded-md px-2.5 py-1.5">
                <TrendingUp className="h-3.5 w-3.5 text-chart-4 shrink-0" />
                <div>
                  <div className="text-[10px] text-muted-foreground leading-none mb-0.5">
                    Placement
                  </div>
                  <div className="text-xs font-semibold text-foreground">
                    {college.placementPercent.toString()}%
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 bg-muted/50 rounded-md px-2.5 py-1.5">
                <BookOpen className="h-3.5 w-3.5 text-chart-2 shrink-0" />
                <div>
                  <div className="text-[10px] text-muted-foreground leading-none mb-0.5">
                    Avg Package
                  </div>
                  <div className="text-xs font-semibold text-foreground">
                    ₹{college.avgPackageLPA.toFixed(1)}L
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 bg-muted/50 rounded-md px-2.5 py-1.5">
                <Target className="h-3.5 w-3.5 text-primary shrink-0" />
                <div>
                  <div className="text-[10px] text-muted-foreground leading-none mb-0.5">
                    Cutoff Rank
                  </div>
                  <div className="text-xs font-semibold text-foreground">
                    {cutoff
                      ? Number(cutoff.rank).toLocaleString("en-IN")
                      : "N/A"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border px-4 py-2 flex items-center justify-between bg-muted/20">
            <span className="text-xs text-muted-foreground truncate max-w-[60%]">
              {college.courses
                .slice(0, 2)
                .map((c) => c.name)
                .join(" · ")}
              {college.courses.length > 2 &&
                ` +${college.courses.length - 2} more`}
            </span>
            <span className="text-xs font-medium text-primary group-hover:text-primary/70 transition-colors shrink-0">
              View Details →
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

// ─── Exam Info Tooltip ────────────────────────────────────────────────────────

function ExamTooltip({ examType }: { examType: ExamType | "" }) {
  const [open, setOpen] = useState(false);
  if (!examType) return null;
  const config = EXAM_CONFIG[examType];

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="What does this cutoff mean?"
        data-ocid="predictor.exam_info_button"
      >
        <Info className="h-3.5 w-3.5" />
        What does this cutoff mean?
      </button>
      {open && (
        <div
          className="absolute top-6 left-0 z-10 w-72 bg-card border border-border rounded-lg shadow-elevated p-3 text-xs text-muted-foreground leading-relaxed"
          data-ocid="predictor.exam_info_tooltip"
        >
          <p className="font-semibold text-foreground mb-1">{examType}</p>
          <p>{config.description}</p>
          <p className="mt-2 text-primary/80">
            Valid rank range: {config.min.toLocaleString("en-IN")} –{" "}
            {config.max.toLocaleString("en-IN")}
          </p>
          <button
            type="button"
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
            onClick={() => setOpen(false)}
            aria-label="Close tooltip"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function PredictorPage() {
  const { actor, isFetching } = useActor();

  const [examType, setExamType] = useState<ExamType | "">("");
  const [rankInput, setRankInput] = useState<string>("");
  const [validationError, setValidationError] = useState<string>("");
  const [submittedQuery, setSubmittedQuery] = useState<PredictorQuery | null>(
    null,
  );

  const config = examType ? EXAM_CONFIG[examType] : null;

  function validateRank(value: string, exam: ExamType | ""): string {
    if (!exam) return "Please select an exam type.";
    const num = Number.parseInt(value, 10);
    if (!value || Number.isNaN(num)) return "Please enter a valid rank.";
    const { min, max } = EXAM_CONFIG[exam];
    if (num < min || num > max)
      return `Rank must be between ${min.toLocaleString("en-IN")} and ${max.toLocaleString("en-IN")} for ${exam}.`;
    return "";
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const error = validateRank(rankInput, examType);
    if (error) {
      setValidationError(error);
      return;
    }
    setValidationError("");
    setSubmittedQuery({
      examType: examType as string,
      rank: BigInt(Number.parseInt(rankInput, 10)),
    });
  }

  function handleReset() {
    setExamType("");
    setRankInput("");
    setValidationError("");
    setSubmittedQuery(null);
  }

  const { data: results, isLoading } = useQuery<CollegeRecord[]>({
    queryKey: [
      "predictor",
      submittedQuery?.examType,
      submittedQuery?.rank?.toString(),
    ],
    queryFn: async () => {
      if (!actor || !submittedQuery) return [];
      return actor.predictColleges(submittedQuery);
    },
    enabled: !!actor && !isFetching && !!submittedQuery,
  });

  const sortedResults: CollegeRecord[] = results
    ? [...results].sort((a, b) => {
        const rankNum = submittedQuery ? Number(submittedQuery.rank) : 0;
        const exam = submittedQuery?.examType ?? "";
        const dist = (c: CollegeRecord) => {
          const cut = getRelevantCutoff(c, exam);
          return cut
            ? Math.abs(Number(cut.rank) - rankNum)
            : Number.POSITIVE_INFINITY;
        };
        return dist(a) - dist(b);
      })
    : [];

  return (
    <div className="min-h-screen bg-background" data-ocid="predictor.page">
      {/* Page Header */}
      <div className="bg-card border-b border-border py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-primary/10">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <Badge
              variant="secondary"
              className="bg-accent/15 text-accent-foreground border-0 font-medium"
            >
              AI-Powered
            </Badge>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            College Predictor
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Enter your exam and rank to discover colleges where you have the
            best chance of admission. Results are sorted by match quality based
            on historical cutoff data.
          </p>
          <p className="mt-2 text-xs text-muted-foreground/70 flex items-center gap-1">
            <Info className="h-3 w-3" />
            Results are indicative only — based on previous years' cutoff data.
            Actual cutoffs may vary.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-8 space-y-8">
        {/* Predictor Form */}
        <Card className="border border-border shadow-card">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} data-ocid="predictor.form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Exam Type */}
                <div className="space-y-1.5">
                  <Label htmlFor="exam-select" className="font-medium">
                    Entrance Exam
                  </Label>
                  <Select
                    value={examType}
                    onValueChange={(v) => {
                      setExamType(v as ExamType);
                      setValidationError("");
                    }}
                  >
                    <SelectTrigger
                      id="exam-select"
                      data-ocid="predictor.exam_select"
                      className="w-full"
                    >
                      <SelectValue placeholder="Select exam…" />
                    </SelectTrigger>
                    <SelectContent>
                      {EXAM_TYPES.map((exam) => (
                        <SelectItem key={exam} value={exam}>
                          <div className="flex items-center gap-2">
                            <GraduationCap className="h-3.5 w-3.5 text-primary" />
                            {exam}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {examType && config && (
                    <p className="text-[11px] text-muted-foreground">
                      Category: {config.category} · Rank range:{" "}
                      {config.min.toLocaleString("en-IN")} –{" "}
                      {config.max.toLocaleString("en-IN")}
                    </p>
                  )}
                </div>

                {/* Rank Input */}
                <div className="space-y-1.5">
                  <Label htmlFor="rank-input" className="font-medium">
                    Your Rank
                  </Label>
                  <Input
                    id="rank-input"
                    type="number"
                    min={config?.min ?? 1}
                    max={config?.max ?? 200000}
                    placeholder={
                      config
                        ? `e.g. ${Math.round(config.max / 3).toLocaleString("en-IN")}`
                        : "Select exam first"
                    }
                    value={rankInput}
                    onChange={(e) => {
                      setRankInput(e.target.value);
                      if (validationError) setValidationError("");
                    }}
                    onBlur={() => {
                      if (rankInput)
                        setValidationError(validateRank(rankInput, examType));
                    }}
                    disabled={!examType}
                    data-ocid="predictor.rank_input"
                    className="w-full"
                  />
                  {validationError && (
                    <p
                      className="text-xs text-destructive flex items-center gap-1"
                      data-ocid="predictor.rank_field_error"
                    >
                      <AlertCircle className="h-3 w-3" />
                      {validationError}
                    </p>
                  )}
                </div>
              </div>

              {/* Footer row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-5 pt-4 border-t border-border">
                <ExamTooltip examType={examType} />
                <div className="flex items-center gap-2.5">
                  {submittedQuery && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="gap-1.5"
                      onClick={handleReset}
                      data-ocid="predictor.reset_button"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      Reset
                    </Button>
                  )}
                  <Button
                    type="submit"
                    className="gap-2 font-semibold"
                    disabled={!examType || !rankInput || isLoading}
                    data-ocid="predictor.submit_button"
                  >
                    {isLoading ? (
                      <>
                        <span className="h-4 w-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
                        Predicting…
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4" />
                        Predict My Colleges
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Loading Skeletons */}
        {isLoading && (
          <div className="space-y-4" data-ocid="predictor.loading_state">
            <Skeleton className="h-5 w-48" />
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-40 w-full rounded-xl" />
            ))}
          </div>
        )}

        {/* Results */}
        {!isLoading && submittedQuery && (
          <div data-ocid="predictor.results_section">
            {sortedResults.length === 0 ? (
              <div
                className="flex flex-col items-center justify-center py-16 text-center bg-card rounded-xl border border-border"
                data-ocid="predictor.empty_state"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-muted mb-4">
                  <GraduationCap className="h-8 w-8 text-muted-foreground/50" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  No colleges found
                </h3>
                <p className="text-muted-foreground text-sm max-w-sm mb-4">
                  No colleges found for this rank. Try a different rank or exam.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReset}
                  data-ocid="predictor.try_again_button"
                >
                  Try Again
                </Button>
              </div>
            ) : (
              <>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <p
                    className="text-sm font-medium text-foreground"
                    data-ocid="predictor.results_count"
                  >
                    Found{" "}
                    <span className="text-primary font-semibold">
                      {sortedResults.length}
                    </span>{" "}
                    college{sortedResults.length !== 1 ? "s" : ""} matching your
                    profile
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <span className="inline-block h-2 w-2 rounded-full bg-chart-4" />
                      Best Match
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                      Good Match
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="inline-block h-2 w-2 rounded-full bg-muted-foreground" />
                      Possible
                    </span>
                  </div>
                </div>

                <div className="space-y-3" data-ocid="predictor.results_list">
                  {sortedResults.map((college, i) => (
                    <ResultCard
                      key={college.id}
                      college={college}
                      index={i}
                      examType={submittedQuery.examType as string}
                      rank={Number(submittedQuery.rank)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
