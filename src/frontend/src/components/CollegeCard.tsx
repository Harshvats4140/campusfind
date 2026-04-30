import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  IndianRupee,
  MapPin,
  PlusCircle,
  TrendingUp,
} from "lucide-react";
import { useComparison } from "../hooks/useComparison";
import type { CollegeRecord } from "../types/college";
import { StarRating } from "./StarRating";

interface CollegeCardProps {
  college: CollegeRecord;
  index?: number;
}

function formatFees(annualFees: bigint): string {
  const fees = Number(annualFees);
  if (fees >= 100000) {
    return `₹${(fees / 100000).toFixed(1)}L/yr`;
  }
  return `₹${(fees / 1000).toFixed(0)}K/yr`;
}

export function CollegeCard({ college, index = 0 }: CollegeCardProps) {
  const { add, remove, isSelected } = useComparison();
  const selected = isSelected(college.id);

  const handleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (selected) {
      remove(college.id);
    } else {
      add(college);
    }
  };

  return (
    <Card
      className={cn(
        "group relative overflow-hidden transition-smooth hover:shadow-elevated border border-border",
        selected && "ring-2 ring-primary/60",
      )}
      data-ocid={`college.item.${index + 1}`}
    >
      <CardContent className="p-0">
        <div className="p-4 pb-3">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex-1 min-w-0">
              <Link
                to="/colleges/$collegeId"
                params={{ collegeId: college.id }}
                className="block"
                data-ocid={`college.link.${index + 1}`}
              >
                <h3 className="font-display font-semibold text-base leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {college.name}
                </h3>
              </Link>
              <div className="flex items-center gap-1 mt-1 text-muted-foreground">
                <MapPin className="h-3 w-3 flex-shrink-0" />
                <span className="text-xs truncate">
                  {college.location}, {college.state}
                </span>
              </div>
            </div>
            <Badge
              variant="secondary"
              className="shrink-0 text-xs font-medium bg-primary/10 text-primary border-0"
            >
              {college.accreditation}
            </Badge>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <StarRating rating={college.rating} size="sm" />
            <span className="text-xs font-semibold text-foreground">
              {college.rating.toFixed(1)}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-1.5 bg-muted/60 rounded-md px-2.5 py-1.5">
              <IndianRupee className="h-3.5 w-3.5 text-accent shrink-0" />
              <div>
                <div className="text-xs text-muted-foreground leading-none mb-0.5">
                  Annual Fees
                </div>
                <div className="text-sm font-semibold text-foreground">
                  {formatFees(college.annualFees)}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-muted/60 rounded-md px-2.5 py-1.5">
              <TrendingUp className="h-3.5 w-3.5 text-chart-4 shrink-0" />
              <div>
                <div className="text-xs text-muted-foreground leading-none mb-0.5">
                  Placement
                </div>
                <div className="text-sm font-semibold text-foreground">
                  {college.placementPercent.toString()}%
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border px-4 py-2.5 flex items-center justify-between gap-2 bg-muted/20">
          <Link
            to="/colleges/$collegeId"
            params={{ collegeId: college.id }}
            className="text-xs font-medium text-primary hover:text-primary/80 transition-colors"
            data-ocid={`college.details_link.${index + 1}`}
          >
            View Details →
          </Link>
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "h-7 px-2.5 text-xs gap-1 transition-smooth",
              selected
                ? "text-primary bg-primary/10 hover:bg-primary/20"
                : "text-muted-foreground hover:text-primary hover:bg-primary/10",
            )}
            onClick={handleCompare}
            data-ocid={`college.compare_button.${index + 1}`}
          >
            {selected ? (
              <>
                <CheckCircle2 className="h-3.5 w-3.5" />
                Added
              </>
            ) : (
              <>
                <PlusCircle className="h-3.5 w-3.5" />
                Compare
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
