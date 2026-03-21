import { useState } from "react";
import { Plus, Minus, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type FaqItemType = {
  q: string;
  a: string;
};

export function FaqAccordion({ items, variant = "default" }: { items: FaqItemType[], variant?: "default" | "plus-minus" }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (variant === "plus-minus") {
    return (
      <div className="mt-6 divide-y divide-border rounded-2xl border border-border overflow-hidden bg-white">
        {items.map((faq, i) => (
          <div key={i}>
            <button
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#f8f8f9] transition-colors gap-4"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <span className="text-sm font-semibold text-secondary pr-4">{faq.q}</span>
              <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-primary/8">
                {openFaq === i ? (
                  <Minus className="w-3.5 h-3.5 text-primary" />
                ) : (
                  <Plus className="w-3.5 h-3.5 text-primary" />
                )}
              </span>
            </button>
            {openFaq === i && (
              <div className="px-5 pb-5 pt-1">
                {faq.a.split('\n\n').map((para, idx) => (
                  <p key={idx} className={cn("text-sm text-muted-foreground leading-relaxed", idx > 0 && "mt-3")}>
                    {para}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-6 flex flex-col gap-3">
      {items.map((faq, i) => {
        const isOpen = openFaq === i;
        return (
          <div key={i} className="border border-border rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpenFaq(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-[#f5f4fa] transition-colors"
            >
              <span className="font-bold text-secondary text-sm leading-snug">{faq.q}</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-base text-muted-foreground leading-relaxed space-y-3 border-t border-border pt-4">
                {faq.a.split('\n\n').map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
