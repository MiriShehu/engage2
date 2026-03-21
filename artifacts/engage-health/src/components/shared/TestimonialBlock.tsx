import { Quote } from "lucide-react";

export function TestimonialBlock({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="rounded-2xl border border-border bg-secondary/3 p-6 flex flex-col gap-4">
      <Quote className="w-8 h-8 text-primary/30 flex-shrink-0" />
      <p className="text-base text-secondary font-medium italic leading-relaxed">"{quote}"</p>
      <p className="text-sm font-bold text-primary">{author}</p>
    </div>
  );
}
