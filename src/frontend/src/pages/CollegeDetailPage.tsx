import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  Award,
  BookOpen,
  Briefcase,
  Building2,
  CalendarDays,
  GitCompareArrows,
  MapPin,
  MessageSquare,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { StarRating } from "../components/StarRating";
import { useActor } from "../hooks/useActor";
import { useComparison } from "../hooks/useComparison";
import type { CollegeRecord } from "../types/college";

// ── Mock reviews ──────────────────────────────────────────────────────────────
const MOCK_REVIEWS = [
  {
    id: 1,
    name: "Arjun Sharma",
    year: "3rd Year, B.Tech CSE",
    rating: 4.5,
    text: "Excellent faculty and state-of-the-art labs. The placement cell is very active and conducts workshops year-round. Campus life is vibrant with 80+ clubs. Hostel facilities could be improved slightly but overall a great experience.",
  },
  {
    id: 2,
    name: "Priya Mehta",
    year: "Final Year, MBA",
    rating: 4.0,
    text: "The curriculum is industry-aligned and professors bring real-world experience. Industry visits and live projects gave us practical exposure. The library resources are world-class. Highly recommend for management aspirants.",
  },
  {
    id: 3,
    name: "Rohit Verma",
    year: "2nd Year, M.Tech",
    rating: 4.8,
    text: "Best research infrastructure I've seen among Indian colleges. The professors are PhD holders from IITs and IISc. Funding for research projects is readily available. If you want to pursue a research career, this is the place.",
  },
  {
    id: 4,
    name: "Sneha Patel",
    year: "Alumni, B.Tech 2023",
    rating: 3.5,
    text: "Good college overall with decent placements. The campus is beautiful and well-maintained. Some departments are stronger — Engineering and Management stand out. Sports facilities are top-notch and extracurricular activities are encouraged.",
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function formatFees(fees: bigint): string {
  const n = Number(fees);
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L/yr`;
  return `₹${(n / 1000).toFixed(0)}K/yr`;
}

function formatPackage(lpa: number): string {
  return `₹${lpa.toFixed(1)} LPA`;
}

// ── Skeleton ──────────────────────────────────────────────────────────────────
function DetailSkeleton() {
  return (
    <div className="space-y-6" data-ocid="college_detail.loading_state">
      <Skeleton className="h-8 w-48 rounded-lg" />
      <Skeleton className="h-52 w-full rounded-xl" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-24 rounded-xl" />
        ))}
      </div>
      <Skeleton className="h-10 w-80 rounded-lg" />
      <Skeleton className="h-64 w-full rounded-xl" />
    </div>
  );
}

// ── Stat Card ─────────────────────────────────────────────────────────────────
interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}
function StatCard({ icon, label, value, highlight }: StatCardProps) {
  return (
    <Card
      className={`border-border shadow-card ${
        highlight ? "bg-primary/5 border-primary/20" : "bg-card"
      }`}
    >
      <CardContent className="p-4 flex flex-col gap-1.5">
        <div
          className={`flex items-center gap-1.5 ${
            highlight ? "text-primary" : "text-muted-foreground"
          }`}
        >
          {icon}
          <span className="text-xs font-medium uppercase tracking-wide">
            {label}
          </span>
        </div>
        <p
          className={`text-xl font-bold font-display ${
            highlight ? "text-primary" : "text-foreground"
          }`}
        >
          {value}
        </p>
      </CardContent>
    </Card>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function CollegeDetailPage() {
  const { collegeId } = useParams({ from: "/colleges/$collegeId" });
  const { actor, isFetching } = useActor();
  const { add, remove, isSelected, selected } = useComparison();

  const {
    data: college,
    isLoading,
    isError,
  } = useQuery<CollegeRecord | null>({
    queryKey: ["college", collegeId],
    queryFn: async () => {
      if (!actor) return null;
      const result = await actor.getCollege(collegeId);
      return result;
    },
    enabled: !!actor && !isFetching && !!collegeId,
  });

  const added = college ? isSelected(college.id) : false;
  const atMax = selected.length >= 3 && !added;

  // Loading
  if (isLoading || (isFetching && !college)) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <DetailSkeleton />
      </div>
    );
  }

  // Error / not found
  if (isError || college === null || college === undefined) {
    return (
      <div
        className="container mx-auto px-4 py-20 max-w-5xl text-center space-y-4"
        data-ocid="college_detail.error_state"
      >
        <Building2 className="h-14 w-14 text-muted-foreground mx-auto" />
        <h2 className="text-2xl font-bold font-display text-foreground">
          College Not Found
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          We couldn't find a college with this ID. It may have been removed or
          the link might be incorrect.
        </p>
        <Link to="/colleges">
          <Button
            variant="default"
            className="mt-2"
            data-ocid="college_detail.back_button"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Colleges
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-28 bg-background" data-ocid="college_detail.page">
      {/* ── Hero Header ────────────────────────────────────────────────── */}
      <div className="bg-card border-b border-border shadow-card">
        <div className="container mx-auto px-4 py-8 max-w-5xl">
          {/* Back */}
          <Link
            to="/colleges"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-5"
            data-ocid="college_detail.back_link"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Colleges
          </Link>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
            {/* Identity */}
            <div className="flex-1 min-w-0 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                {college.accreditation && (
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/25 font-semibold text-xs gap-1"
                    data-ocid="college_detail.accreditation_badge"
                  >
                    <Award className="h-3 w-3" />
                    {college.accreditation}
                  </Badge>
                )}
                {college.cutoffs && college.cutoffs.length > 0 && (
                  <Badge
                    variant="outline"
                    className="bg-accent/10 text-accent-foreground border-accent/20 text-xs"
                  >
                    NIRF Ranked
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold font-display text-foreground leading-tight">
                {college.name}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  {college.location}, {college.state}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4 text-primary shrink-0" />
                  Est. {Number(college.establishedYear)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-primary shrink-0" />
                  {Number(college.totalStudents).toLocaleString("en-IN")}{" "}
                  Students
                </span>
              </div>

              <div className="flex items-center gap-2">
                <StarRating rating={college.rating} size="md" />
                <span className="text-sm font-semibold text-foreground tabular-nums">
                  {college.rating.toFixed(1)}
                </span>
                <span className="text-xs text-muted-foreground">/ 5.0</span>
              </div>

              {college.description && (
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  {college.description}
                </p>
              )}
            </div>

            {/* Compare CTA */}
            <div className="shrink-0">
              <Button
                size="lg"
                variant={added ? "default" : "outline"}
                onClick={() => (added ? remove(college.id) : add(college))}
                disabled={atMax}
                className={`gap-2 min-w-[190px] transition-smooth ${
                  added
                    ? "bg-accent text-accent-foreground border-accent hover:bg-accent/90"
                    : "border-border hover:border-primary hover:text-primary"
                }`}
                data-ocid="college_detail.compare_button"
              >
                <GitCompareArrows className="h-4 w-4" />
                {added
                  ? "Remove from Compare"
                  : atMax
                    ? "Max 3 Selected"
                    : "Add to Compare"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats Bar ──────────────────────────────────────────────────────── */}
      <div className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 py-5 max-w-5xl">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            data-ocid="college_detail.stats_bar"
          >
            <StatCard
              icon={<Briefcase className="h-3.5 w-3.5" />}
              label="Annual Fees"
              value={formatFees(college.annualFees)}
              highlight
            />
            <StatCard
              icon={<TrendingUp className="h-3.5 w-3.5" />}
              label="Placement %"
              value={`${Number(college.placementPercent)}%`}
            />
            <StatCard
              icon={<Award className="h-3.5 w-3.5" />}
              label="Avg Package"
              value={formatPackage(college.avgPackageLPA)}
            />
            <StatCard
              icon={<CalendarDays className="h-3.5 w-3.5" />}
              label="Established"
              value={String(Number(college.establishedYear))}
            />
          </div>
        </div>
      </div>

      {/* ── Tabs ───────────────────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Tabs defaultValue="courses" data-ocid="college_detail.tabs">
          <TabsList
            className="mb-6 bg-muted h-11"
            data-ocid="college_detail.tab_list"
          >
            <TabsTrigger
              value="courses"
              className="gap-2 data-[state=active]:bg-card data-[state=active]:shadow-card"
              data-ocid="college_detail.courses_tab"
            >
              <BookOpen className="h-4 w-4" />
              Courses
            </TabsTrigger>
            <TabsTrigger
              value="placements"
              className="gap-2 data-[state=active]:bg-card data-[state=active]:shadow-card"
              data-ocid="college_detail.placements_tab"
            >
              <TrendingUp className="h-4 w-4" />
              Placements
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="gap-2 data-[state=active]:bg-card data-[state=active]:shadow-card"
              data-ocid="college_detail.reviews_tab"
            >
              <MessageSquare className="h-4 w-4" />
              Reviews
            </TabsTrigger>
          </TabsList>

          {/* ── Courses ──────────────────────────────────────────────────── */}
          <TabsContent value="courses" data-ocid="college_detail.courses_panel">
            <Card className="border-border shadow-card overflow-hidden">
              <CardContent className="p-0">
                {college.courses && college.courses.length > 0 ? (
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/40 hover:bg-muted/40">
                        <TableHead className="font-semibold text-foreground pl-6 w-[60%]">
                          Course Name
                        </TableHead>
                        <TableHead className="font-semibold text-foreground text-center">
                          Duration
                        </TableHead>
                        <TableHead className="font-semibold text-foreground text-right pr-6">
                          Seats
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {college.courses.map((course, idx) => (
                        <TableRow
                          key={`${course.name}-${idx}`}
                          className="hover:bg-muted/20 transition-colors"
                          data-ocid={`college_detail.courses_table.item.${idx + 1}`}
                        >
                          <TableCell className="font-medium text-foreground pl-6 py-4">
                            {course.name}
                          </TableCell>
                          <TableCell className="text-center text-muted-foreground">
                            {Number(course.durationYears)}{" "}
                            {Number(course.durationYears) === 1
                              ? "Year"
                              : "Years"}
                          </TableCell>
                          <TableCell className="text-right text-foreground font-semibold pr-6 tabular-nums">
                            {Number(course.seats)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <div
                    className="py-16 text-center space-y-2"
                    data-ocid="college_detail.courses_empty_state"
                  >
                    <BookOpen className="h-10 w-10 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground text-sm">
                      Course information not available yet.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── Placements ───────────────────────────────────────────────── */}
          <TabsContent
            value="placements"
            data-ocid="college_detail.placements_panel"
          >
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-border shadow-card bg-card">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
                        Placement Rate
                      </p>
                      <p className="text-3xl font-bold font-display text-primary tabular-nums">
                        {Number(college.placementPercent)}%
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        of eligible students placed
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-border shadow-card bg-card">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                      <Award className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
                        Average Package
                      </p>
                      <p className="text-3xl font-bold font-display text-foreground tabular-nums">
                        {formatPackage(college.avgPackageLPA)}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        annual CTC offered
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-border shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-primary" />
                    Top Recruiters
                  </h3>
                  {college.topRecruiters && college.topRecruiters.length > 0 ? (
                    <div
                      className="flex flex-wrap gap-2"
                      data-ocid="college_detail.recruiters_list"
                    >
                      {college.topRecruiters.map((recruiter, idx) => (
                        <Badge
                          key={recruiter}
                          variant="secondary"
                          className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground border-border hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-smooth cursor-default"
                          data-ocid={`college_detail.recruiter.${idx + 1}`}
                        >
                          {recruiter}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Recruiter data not available.
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* ── Reviews ──────────────────────────────────────────────────── */}
          <TabsContent value="reviews" data-ocid="college_detail.reviews_panel">
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-sm font-semibold text-foreground">
                  Student Reviews
                </h3>
                <Badge
                  variant="outline"
                  className="text-xs border-border text-muted-foreground"
                >
                  {MOCK_REVIEWS.length} Reviews
                </Badge>
              </div>

              {MOCK_REVIEWS.map((review, idx) => (
                <Card
                  key={review.id}
                  className="border-border shadow-card bg-card hover:shadow-elevated transition-smooth"
                  data-ocid={`college_detail.review.${idx + 1}`}
                >
                  <CardContent className="p-5 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary text-sm">
                          {review.name.charAt(0)}
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-sm text-foreground truncate">
                            {review.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {review.year}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <StarRating rating={review.rating} size="sm" />
                        <span className="text-xs font-semibold text-foreground tabular-nums">
                          {review.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {review.text}
                    </p>
                    <div className="flex items-center gap-0.5 pt-0.5">
                      {(["d1", "d2", "d3"] as const).map((id) => (
                        <Star
                          key={id}
                          className="h-2.5 w-2.5 fill-accent/25 text-accent/30"
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
