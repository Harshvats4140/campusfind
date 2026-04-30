import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Search, Wallet, X } from "lucide-react";
import type { FeesRange, FilterState } from "../types/college";

interface SearchFiltersProps {
  filters: FilterState;
  locations: string[];
  onFilterChange: (filters: FilterState) => void;
}

const FEES_OPTIONS: { value: FeesRange; label: string }[] = [
  { value: "all", label: "All Fee Ranges" },
  { value: "under5", label: "Under ₹5L/yr" },
  { value: "5to10", label: "₹5L – ₹10L/yr" },
  { value: "10to15", label: "₹10L – ₹15L/yr" },
  { value: "above15", label: "Above ₹15L/yr" },
];

export function SearchFilters({
  filters,
  locations,
  onFilterChange,
}: SearchFiltersProps) {
  const hasActiveFilters =
    filters.nameQuery !== "" ||
    filters.location !== "" ||
    filters.feesRange !== "all";

  const handleReset = () => {
    onFilterChange({ nameQuery: "", location: "", feesRange: "all" });
  };

  return (
    <div
      className="bg-card border border-border rounded-xl p-4 shadow-card"
      data-ocid="search.filters"
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input
            type="text"
            placeholder="Search colleges by name..."
            value={filters.nameQuery}
            onChange={(e) =>
              onFilterChange({ ...filters, nameQuery: e.target.value })
            }
            className="pl-9 h-10 bg-background border-input"
            data-ocid="search.search_input"
          />
        </div>

        <div className="flex gap-3 flex-col sm:flex-row">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10" />
            <Select
              value={filters.location}
              onValueChange={(val) =>
                onFilterChange({
                  ...filters,
                  location: val === "_all" ? "" : val,
                })
              }
            >
              <SelectTrigger
                className="w-full sm:w-[180px] h-10 pl-9 bg-background border-input"
                data-ocid="search.location_select"
              >
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="_all">All Locations</SelectItem>
                {locations.map((loc) => (
                  <SelectItem key={loc} value={loc}>
                    {loc}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="relative">
            <Wallet className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10" />
            <Select
              value={filters.feesRange}
              onValueChange={(val) =>
                onFilterChange({ ...filters, feesRange: val as FeesRange })
              }
            >
              <SelectTrigger
                className="w-full sm:w-[180px] h-10 pl-9 bg-background border-input"
                data-ocid="search.fees_select"
              >
                <SelectValue placeholder="All Fees" />
              </SelectTrigger>
              <SelectContent>
                {FEES_OPTIONS.map(({ value, label }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              className="h-10 px-3 text-muted-foreground hover:text-foreground gap-1.5"
              onClick={handleReset}
              data-ocid="search.reset_button"
            >
              <X className="h-4 w-4" />
              Reset
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
