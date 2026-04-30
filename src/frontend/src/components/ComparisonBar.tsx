import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { ArrowRight, GitCompareArrows, X } from "lucide-react";
import { useComparison } from "../hooks/useComparison";

export function ComparisonBar() {
  const { selected, remove, clear } = useComparison();

  if (selected.length === 0) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card shadow-elevated animate-slide-up"
      data-ocid="comparison.bar"
    >
      <div className="container mx-auto px-4 py-3 flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-2 text-sm font-medium text-foreground">
          <GitCompareArrows className="h-4 w-4 text-primary" />
          <span>Compare ({selected.length}/3):</span>
        </div>

        <div className="flex-1 flex items-center gap-2 flex-wrap min-w-0">
          {selected.map((college) => (
            <div
              key={college.id}
              className="flex items-center gap-1.5 bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium max-w-[180px]"
              data-ocid="comparison.selected_college"
            >
              <span className="truncate">{college.name}</span>
              <button
                type="button"
                onClick={() => remove(college.id)}
                className="ml-0.5 hover:text-destructive transition-colors shrink-0"
                aria-label={`Remove ${college.name} from comparison`}
                data-ocid="comparison.remove_button"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}

          {selected.length < 3 && (
            <div className="border border-dashed border-border rounded-full px-3 py-1 text-xs text-muted-foreground">
              + Add {3 - selected.length} more
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="ghost"
            size="sm"
            className={cn("text-xs text-muted-foreground h-8")}
            onClick={clear}
            data-ocid="comparison.clear_button"
          >
            Clear all
          </Button>
          <Link to="/compare" data-ocid="comparison.view_button">
            <Button
              size="sm"
              className="h-8 text-xs gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={selected.length < 2}
            >
              View Comparison
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
