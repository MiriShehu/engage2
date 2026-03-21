import { Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface PricingGroup {
  size: string;
  rows: {
    age: number | string;
    range: string;
  }[];
}

interface PricingTableProps {
  groups: PricingGroup[];
  icon?: ReactNode;
}

export function PricingTable({ groups, icon = <Building2 className="w-4 h-4 text-white/70" /> }: PricingTableProps) {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {groups.map((group) => (
        <div key={group.size} className="rounded-2xl border border-border bg-white overflow-hidden">
          <div className="px-5 py-3 border-b border-border flex items-center gap-2" style={{ background: "linear-gradient(135deg,#003648 0%,#76186f 100%)" }}>
            {icon}
            <span className="text-sm font-bold text-white">{group.size}</span>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#f8f8f9] border-b border-border">
                <th className="text-left px-4 py-2.5 text-xs font-bold text-secondary">Avg age</th>
                <th className="text-right px-4 py-2.5 text-xs font-bold text-secondary">Monthly cost / employee</th>
              </tr>
            </thead>
            <tbody>
              {group.rows.map((row, i) => (
                 <tr key={row.age} className={cn("border-b border-border last:border-0", i % 2 === 0 ? "bg-white" : "bg-[#fafafa]")}>
                   <td className="px-4 py-3 text-sm font-semibold text-secondary">{row.age}</td>
                   <td className="px-4 py-3 text-sm text-right font-mono text-primary font-bold">{row.range}</td>
                 </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
