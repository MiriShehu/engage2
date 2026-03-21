import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialSidebarCardProps {
  quote: string;
  author: string;
  className?: string;
}

export function TestimonialSidebarCard({ quote, author, className }: TestimonialSidebarCardProps) {
  return (
    <div className={cn("rounded-2xl border border-border bg-[#f5f4fa] p-5", className)}>
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-sm text-secondary font-medium italic leading-relaxed">
        "{quote}"
      </p>
      {author && (
        <p className="text-xs text-muted-foreground mt-3">— {author}</p>
      )}
    </div>
  );
}
