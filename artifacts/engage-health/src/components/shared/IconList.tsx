import { CheckCircle2, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function IconList({
  items,
  className,
  itemClassName,
  icon: Icon = CheckCircle2,
}: {
  items: string[];
  className?: string;
  itemClassName?: string;
  icon?: LucideIcon;
}) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {items.map((item, i) => (
        <div key={i} className={cn("flex items-start gap-3 p-4 rounded-xl bg-[#f5f4fa]", itemClassName)}>
          <Icon className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
          <span className="text-base text-secondary leading-relaxed font-medium">{item}</span>
        </div>
      ))}
    </div>
  );
}
