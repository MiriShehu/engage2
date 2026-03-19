import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DialEntry {
  code: string;
  name: string;
  flag: string;
}

const DIAL_CODES: DialEntry[] = [
  { flag: "🇬🇧", code: "+44", name: "United Kingdom" },
  { flag: "🇺🇸", code: "+1",  name: "United States" },
  { flag: "🇦🇺", code: "+61", name: "Australia" },
  { flag: "🇨🇦", code: "+1",  name: "Canada" },
  { flag: "🇩🇪", code: "+49", name: "Germany" },
  { flag: "🇫🇷", code: "+33", name: "France" },
  { flag: "🇮🇳", code: "+91", name: "India" },
  { flag: "🇸🇬", code: "+65", name: "Singapore" },
  { flag: "🇦🇪", code: "+971", name: "United Arab Emirates" },
  { flag: "🇿🇦", code: "+27", name: "South Africa" },
  { flag: "🇳🇱", code: "+31", name: "Netherlands" },
  { flag: "🇪🇸", code: "+34", name: "Spain" },
  { flag: "🇮🇹", code: "+39", name: "Italy" },
  { flag: "🇵🇹", code: "+351", name: "Portugal" },
  { flag: "🇸🇪", code: "+46", name: "Sweden" },
  { flag: "🇳🇴", code: "+47", name: "Norway" },
  { flag: "🇩🇰", code: "+45", name: "Denmark" },
  { flag: "🇫🇮", code: "+358", name: "Finland" },
  { flag: "🇨🇭", code: "+41", name: "Switzerland" },
  { flag: "🇦🇹", code: "+43", name: "Austria" },
  { flag: "🇧🇪", code: "+32", name: "Belgium" },
  { flag: "🇮🇪", code: "+353", name: "Ireland" },
  { flag: "🇳🇿", code: "+64", name: "New Zealand" },
  { flag: "🇯🇵", code: "+81", name: "Japan" },
  { flag: "🇰🇷", code: "+82", name: "South Korea" },
  { flag: "🇨🇳", code: "+86", name: "China" },
  { flag: "🇭🇰", code: "+852", name: "Hong Kong" },
  { flag: "🇲🇾", code: "+60", name: "Malaysia" },
  { flag: "🇵🇭", code: "+63", name: "Philippines" },
  { flag: "🇹🇭", code: "+66", name: "Thailand" },
  { flag: "🇮🇩", code: "+62", name: "Indonesia" },
  { flag: "🇧🇷", code: "+55", name: "Brazil" },
  { flag: "🇲🇽", code: "+52", name: "Mexico" },
  { flag: "🇦🇷", code: "+54", name: "Argentina" },
  { flag: "🇨🇱", code: "+56", name: "Chile" },
  { flag: "🇨🇴", code: "+57", name: "Colombia" },
  { flag: "🇳🇬", code: "+234", name: "Nigeria" },
  { flag: "🇰🇪", code: "+254", name: "Kenya" },
  { flag: "🇬🇭", code: "+233", name: "Ghana" },
  { flag: "🇪🇬", code: "+20", name: "Egypt" },
  { flag: "🇮🇱", code: "+972", name: "Israel" },
  { flag: "🇸🇦", code: "+966", name: "Saudi Arabia" },
  { flag: "🇶🇦", code: "+974", name: "Qatar" },
  { flag: "🇰🇼", code: "+965", name: "Kuwait" },
  { flag: "🇧🇭", code: "+973", name: "Bahrain" },
  { flag: "🇴🇲", code: "+968", name: "Oman" },
  { flag: "🇵🇰", code: "+92", name: "Pakistan" },
  { flag: "🇧🇩", code: "+880", name: "Bangladesh" },
  { flag: "🇱🇰", code: "+94", name: "Sri Lanka" },
  { flag: "🇷🇺", code: "+7",  name: "Russia" },
  { flag: "🇵🇱", code: "+48", name: "Poland" },
  { flag: "🇨🇿", code: "+420", name: "Czech Republic" },
  { flag: "🇷🇴", code: "+40", name: "Romania" },
];

interface Props {
  value: string;
  onChange: (val: string) => void;
  className?: string;
}

export function DialCodePicker({ value, onChange, className }: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filtered = DIAL_CODES.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.code.includes(search)
  );

  const selected = DIAL_CODES.find((d) => `${d.flag}${d.code}` === value) ?? DIAL_CODES[0];

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 px-3 h-full border-r border-border bg-muted/40 rounded-l-xl text-sm font-medium text-secondary hover:bg-muted transition-colors whitespace-nowrap"
      >
        <span>{selected.flag}</span>
        <span className="text-xs text-muted-foreground">{selected.code}</span>
        <ChevronDown className="w-3 h-3 text-muted-foreground" />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-border rounded-xl shadow-lg z-50 overflow-hidden">
          <div className="p-2 border-b border-border">
            <input
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search country..."
              className="w-full text-sm px-3 py-1.5 rounded-lg border border-border outline-none focus:border-primary"
            />
          </div>
          <div className="max-h-48 overflow-y-auto">
            {filtered.map((d) => (
              <button
                key={d.name}
                type="button"
                onClick={() => { onChange(`${d.flag}${d.code}`); setOpen(false); setSearch(""); }}
                className={cn(
                  "w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted/60 transition-colors text-left",
                  value === `${d.flag}${d.code}` && "bg-primary/5 text-primary font-semibold"
                )}
              >
                <span>{d.flag}</span>
                <span className="text-muted-foreground text-xs">{d.code}</span>
                <span className="flex-1 truncate">{d.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
