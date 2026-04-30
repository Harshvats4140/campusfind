import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

export function StarRating({
  rating,
  maxStars = 5,
  size = "md",
  showValue = false,
  className,
}: StarRatingProps) {
  const stars = Array.from({ length: maxStars }, (_, i) => ({
    fill: Math.min(1, Math.max(0, rating - i)),
    id: `star-pos-${i}`,
  }));

  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {stars.map(({ fill, id }) => (
        <span key={id} className="relative inline-flex">
          <Star
            className={cn(sizeClasses[size], "text-border fill-border")}
            aria-hidden="true"
          />
          {fill > 0 && (
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star
                className={cn(sizeClasses[size], "text-accent fill-accent")}
                aria-hidden="true"
              />
            </span>
          )}
        </span>
      ))}
      {showValue && (
        <span className="ml-1 text-sm font-medium text-foreground tabular-nums">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
