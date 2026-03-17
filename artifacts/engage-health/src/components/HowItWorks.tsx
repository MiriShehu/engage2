export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Tell us about your business",
      description: "Brief call to understand your team demographic, current setup, and budget goals."
    },
    {
      number: "02",
      title: "We compare the market",
      description: "Our experts review 15+ top insurers to find the best value and coverage for you."
    },
    {
      number: "03",
      title: "We manage everything",
      description: "From rollout to employees, to handling claims and fighting for better renewal rates."
    }
  ];

  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle at right top, var(--primary) 0%, transparent 50%)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Set Up in 3 Simple Steps</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">We do the heavy lifting so you can focus on running your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50 -z-10"></div>

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
