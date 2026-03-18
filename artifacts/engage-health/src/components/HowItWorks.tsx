export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We take time to understand your business challenges, workforce demographics, and goals — so we can advise properly."
    },
    {
      number: "02",
      title: "Benchmarking",
      description: "We provide insights into what comparable businesses are offering, so you know exactly how your package stacks up."
    },
    {
      number: "03",
      title: "Solution Design",
      description: "We propose best-fit options across the whole market with transparent, competitive pricing — no hidden charges."
    },
    {
      number: "04",
      title: "Implementation",
      description: "We liaise directly with insurers on your behalf to set up policies smoothly and handle all the admin."
    },
    {
      number: "05",
      title: "Communication",
      description: "We create bespoke employee materials and can conduct onsite presentations so your team understands their benefits."
    },
    {
      number: "06",
      title: "Ongoing Support",
      description: "We manage claims, negotiate renewals, and make policy adjustments — your dedicated account manager is always on hand."
    }
  ];

  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle at right top, var(--primary) 0%, transparent 50%)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work With You</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">A complete consultancy service — from first conversation to ongoing claims support.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-secondary border-4 border-primary flex items-center justify-center mb-8 relative shadow-[0_0_30px_rgba(118,24,111,0.3)] transition-transform group-hover:scale-110 duration-500">
                <span className="text-3xl font-black text-white">{step.number}</span>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-white/70 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
