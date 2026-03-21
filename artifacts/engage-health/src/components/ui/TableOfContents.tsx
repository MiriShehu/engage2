import { useState, useEffect } from "react";
import { List, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TocItem {
  id: string;
  label: string;
}

interface Props {
  items: TocItem[];
  /** Height of the fixed navbar in px. Default: 80 (64px nav + 16px padding). */
  navbarHeight?: number;
}

function scrollToId(id: string, navbarHeight: number) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
  window.scrollTo({ top, behavior: "smooth" });
}

export function TableOfContents({ items, navbarHeight = 80 }: Props) {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "-10% 0px -80% 0px", threshold: 0 }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="mb-10 rounded-2xl border border-border overflow-hidden shadow-sm">
      {/* Header */}
      <button
        className="w-full flex items-center justify-between px-5 py-4 bg-gradient-to-r from-secondary/5 to-primary/5"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg,#003648,#76186f)" }}
          >
            <List className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-extrabold text-secondary text-sm uppercase tracking-wider">In this page</span>
          <span className="hidden sm:inline text-xs text-muted-foreground font-normal normal-case tracking-normal">
            — {items.length} sections
          </span>
        </div>
        <ChevronDown className={cn("w-4 h-4 text-muted-foreground transition-transform sm:hidden", open && "rotate-180")} />
      </button>

      {/* Items */}
      <div className={cn("border-t border-border sm:block", open ? "block" : "hidden")}>
        <div className="grid sm:grid-cols-2">
          {items.map((item, i) => (
            <button
              key={item.id}
              onClick={() => {
                // On mobile the TOC is open and collapses first — defer scroll
                // so the layout reflow settles before we calculate position
                if (open) {
                  setOpen(false);
                  setTimeout(() => scrollToId(item.id, navbarHeight), 50);
                } else {
                  scrollToId(item.id, navbarHeight);
                }
              }}
              className={cn(
                "flex items-center gap-3 px-5 py-3.5 text-left w-full transition-all duration-150 border-b border-border/50",
                "sm:odd:border-r sm:border-b sm:[&:nth-last-child(-n+2)]:border-b-0",
                active === item.id
                  ? "bg-secondary/[0.06] text-secondary"
                  : "bg-white hover:bg-[#f8f7fc] text-muted-foreground hover:text-secondary"
              )}
            >
              <span
                className={cn(
                  "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0 transition-all",
                  active === item.id ? "text-white" : "text-muted-foreground bg-border"
                )}
                style={active === item.id ? { background: "linear-gradient(135deg,#003648,#76186f)" } : {}}
              >
                {i + 1}
              </span>
              <span className="text-xs font-medium leading-snug flex-1">{item.label}</span>
              {active === item.id && (
                <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
