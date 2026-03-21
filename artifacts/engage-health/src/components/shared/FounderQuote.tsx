import { Quote } from "lucide-react";

export function FounderQuote({ quote, name, title }: { quote: string; name: string; title: string }) {
  return (
    <div className="my-6 rounded-2xl border border-primary/20 bg-[#f5f4fa] p-6 flex gap-5 items-start">
      <img src="/nick-hale.png" alt={name} className="w-14 h-14 rounded-full object-cover flex-shrink-0 border-2 border-primary/20" />
      <div>
        <Quote className="w-6 h-6 text-primary/30 mb-2" />
        <p className="text-[15px] font-semibold text-secondary italic leading-relaxed">"{quote}"</p>
        <div className="mt-3">
          <p className="text-sm font-extrabold text-secondary">{name}</p>
          <p className="text-xs text-primary font-medium">{title}</p>
        </div>
      </div>
    </div>
  );
}
