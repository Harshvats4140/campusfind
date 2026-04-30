import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { SearchX } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { CollegeCard } from "../components/CollegeCard";
import { SearchFilters } from "../components/SearchFilters";
import { useActor } from "../hooks/useActor";
import type { FeesRange, FilterState, SearchFilter } from "../types/college";

const PAGE_SIZE = 6;

function feesRangeToMinMax(range: FeesRange): {
  minFees?: bigint;
  maxFees?: bigint;
} {
  switch (range) {
    case "under5":
      return { maxFees: BigInt(500000) };
    case "5to10":
      return { minFees: BigInt(500000), maxFees: BigInt(1000000) };
    case "10to15":
      return { minFees: BigInt(1000000), maxFees: BigInt(1500000) };
    case "above15":
      return { minFees: BigInt(1500000) };
    default:
      return {};
  }
}

function buildSearchFilter(filters: FilterState, page: number): SearchFilter {
  const { minFees, maxFees } = feesRangeToMinMax(filters.feesRange);
  const filter: SearchFilter = {
    page: BigInt(page - 1),
    pageSize: BigInt(PAGE_SIZE),
  };
  if (filters.nameQuery.trim()) filter.nameQuery = filters.nameQuery.trim();
  if (filters.location) filter.location = filters.location;
  if (minFees !== undefined) filter.minFees = minFees;
  if (maxFees !== undefined) filter.maxFees = maxFees;
  return filter;
}

function CardSkeleton() {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-card">
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-start gap-3">
          <div className="flex-1 space-y-1.5">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
          <Skeleton className="h-5 w-16 rounded-full shrink-0" />
        </div>
        <Skeleton className="h-4 w-28" />
        <div className="grid grid-cols-2 gap-2">
          <Skeleton className="h-12 rounded-md" />
          <Skeleton className="h-12 rounded-md" />
        </div>
      </div>
      <div className="border-t border-border px-4 py-2.5 flex justify-between items-center">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>
    </div>
  );
}

export default function CollegesPage() {
  const { actor, isFetching: actorLoading } = useActor();
  const navigate = useNavigate({ from: "/colleges" });
  const searchParams = useSearch({ strict: false }) as Record<string, string>;

  const [filters, setFilters] = useState<FilterState>({
    nameQuery: searchParams.q ?? "",
    location: searchParams.location ?? "",
    feesRange: (searchParams.fees ?? "all") as FeesRange,
  });
  const [page, setPage] = useState<number>(
    Number.parseInt(searchParams.page ?? "1", 10),
  );

  // Debounce name query for 300ms
  const [debouncedName, setDebouncedName] = useState(filters.nameQuery);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setDebouncedName(filters.nameQuery);
      setPage(1);
    }, 300);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [filters.nameQuery]);

  // Reset page when location or fees filters change
  const prevFiltersRef = useRef(filters);
  useEffect(() => {
    const prev = prevFiltersRef.current;
    if (
      prev.location !== filters.location ||
      prev.feesRange !== filters.feesRange
    ) {
      setPage(1);
    }
    prevFiltersRef.current = filters;
  }, [filters]);

  // Keep URL in sync
  useEffect(() => {
    const params: Record<string, string> = {};
    if (debouncedName) params.q = debouncedName;
    if (filters.location) params.location = filters.location;
    if (filters.feesRange !== "all") params.fees = filters.feesRange;
    if (page > 1) params.page = String(page);
    navigate({ search: params, replace: true });
  }, [debouncedName, filters.location, filters.feesRange, page, navigate]);

  // Seed backend data once on mount
  useEffect(() => {
    if (!actor || actorLoading) return;
    actor.initializeData().catch(() => {
      // Already initialized — ignore silently
    });
  }, [actor, actorLoading]);

  const activeFilters: FilterState = { ...filters, nameQuery: debouncedName };
  const searchFilter = buildSearchFilter(activeFilters, page);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: [
      "colleges",
      debouncedName,
      filters.location,
      filters.feesRange,
      page,
    ],
    queryFn: async () => {
      if (!actor) return { colleges: [], totalCount: BigInt(0) };
      return actor.getColleges(searchFilter);
    },
    enabled: !!actor && !actorLoading,
    staleTime: 30_000,
  });

  const { data: locations = [] } = useQuery({
    queryKey: ["locations"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllLocations();
    },
    enabled: !!actor && !actorLoading,
    staleTime: 5 * 60 * 1000,
  });

  const colleges = data?.colleges ?? [];
  const totalCount = Number(data?.totalCount ?? 0);
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

  const handleFilterChange = useCallback((next: FilterState) => {
    setFilters(next);
  }, []);

  const handleClearFilters = () => {
    setFilters({ nameQuery: "", location: "", feesRange: "all" });
    setDebouncedName("");
    setPage(1);
  };

  const showSkeleton = isLoading || (actorLoading && colleges.length === 0);

  return (
    <div className="min-h-screen bg-background pb-28" data-ocid="colleges.page">
      {/* Page header band */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-5">
            <div>
              <h1 className="font-display text-2xl font-bold text-foreground">
                Colleges in India
              </h1>
              <p className="text-sm text-muted-foreground mt-0.5">
                Discover the best colleges for your future
              </p>
            </div>
            {!showSkeleton && (
              <span
                className="text-sm text-muted-foreground bg-muted/60 rounded-full px-3 py-1 font-medium shrink-0 self-start sm:self-auto"
                data-ocid="colleges.result_count"
              >
                {isFetching && !isLoading
                  ? "Updating…"
                  : `Showing ${totalCount} college${totalCount !== 1 ? "s" : ""}`}
              </span>
            )}
          </div>
          <SearchFilters
            filters={filters}
            locations={locations}
            onFilterChange={handleFilterChange}
          />
        </div>
      </div>

      {/* Content area */}
      <div className="container mx-auto px-4 py-6">
        {showSkeleton ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            data-ocid="colleges.loading_state"
          >
            {Array.from({ length: PAGE_SIZE }, (_, i) => `sk-${i}`).map(
              (key) => (
                <CardSkeleton key={key} />
              ),
            )}
          </div>
        ) : colleges.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-24 text-center"
            data-ocid="colleges.empty_state"
          >
            <div className="bg-muted/50 rounded-full p-5 mb-5">
              <SearchX className="h-10 w-10 text-muted-foreground" />
            </div>
            <h2 className="font-display text-xl font-semibold text-foreground mb-2">
              No colleges found matching your filters
            </h2>
            <p className="text-sm text-muted-foreground max-w-xs mb-6">
              Try broadening your search or clearing the active filters to see
              all colleges.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={handleClearFilters}
              data-ocid="colleges.clear_filters_button"
            >
              Clear all filters
            </Button>
          </div>
        ) : (
          <>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              data-ocid="colleges.list"
            >
              {colleges.map((college, i) => (
                <CollegeCard
                  key={college.id}
                  college={college}
                  index={(page - 1) * PAGE_SIZE + i}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div
                className="flex items-center justify-center gap-3 mt-8"
                data-ocid="colleges.pagination"
              >
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1 || isFetching}
                  data-ocid="colleges.pagination_prev"
                >
                  ← Previous
                </Button>
                <span
                  className="text-sm font-medium text-muted-foreground px-1"
                  data-ocid="colleges.pagination_indicator"
                >
                  Page {page} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page >= totalPages || isFetching}
                  data-ocid="colleges.pagination_next"
                >
                  Next →
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
