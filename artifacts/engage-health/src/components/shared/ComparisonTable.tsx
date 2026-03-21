import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ComparisonChannel {
  name: string;
  highlight?: boolean;
  ticks: boolean[];
  note?: string | null;
}

interface ComparisonTableProps {
  features: string[];
  channels: ComparisonChannel[];
}

export function ComparisonTable({ features, channels }: ComparisonTableProps) {
  return (
    <div className="mt-8 overflow-x-auto max-w-full rounded-2xl border border-border">
      <table className="w-full text-sm min-w-[640px]">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left px-5 py-3.5 text-xs font-bold text-secondary bg-[#f8f8f9] w-48">Purchase channel</th>
            {features.map((f) => (
              <th key={f} className="px-3 py-3.5 text-center text-[10px] font-bold text-secondary bg-[#f8f8f9] leading-tight max-w-[80px]">{f}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {channels.map((ch, i) => (
            <tr
              key={ch.name}
              className={cn(
                "border-b border-border last:border-0",
                ch.highlight
                  ? "bg-primary/5"
                  : i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"
              )}
            >
              <td className={cn("px-5 py-3.5 text-xs font-semibold leading-snug", ch.highlight ? "text-primary" : "text-secondary")}>
                {ch.name}
                {ch.highlight && (
                  <span className="ml-1.5 inline-block px-1.5 py-0.5 text-[9px] rounded-full bg-primary text-white font-bold">US</span>
                )}
              </td>
              {ch.ticks.map((tick, ti) => (
                 <td key={ti} className="px-3 py-3.5 text-center">
                   {tick ? (
                     <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                       <Check className="w-3 h-3 text-green-600" />
                     </span>
                   ) : ti === 0 && ch.note ? (
                     <span className="text-[10px] text-muted-foreground italic">{ch.note}</span>
                   ) : (
                     <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-50">
                       <X className="w-3 h-3 text-red-400" />
                     </span>
                   )}
                 </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
