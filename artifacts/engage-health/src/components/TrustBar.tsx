export function TrustBar() {
  const logos = [
    "Bupa",
    "AXA Health",
    "Vitality",
    "Aviva",
    "Cigna",
    "WPA",
    "Exeter",
  ];

  return (
    <section className="py-12 border-y border-border bg-white overflow-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <p className="text-center text-sm font-bold tracking-widest uppercase text-muted-foreground mb-8">
          Independent broker — partnering with all leading UK &amp; international insurers
        </p>
        
        {/* Infinite scrolling effect container */}
        <div className="flex overflow-hidden relative w-full group">
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="flex gap-16 md:gap-24 items-center whitespace-nowrap animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((logo, i) => (
              <span key={i} className="text-2xl md:text-3xl font-extrabold text-muted-foreground/40 transition-colors hover:text-primary">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
