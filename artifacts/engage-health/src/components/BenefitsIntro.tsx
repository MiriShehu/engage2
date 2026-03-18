export function BenefitsIntro() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
          Why Engage Health Group
        </p>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-secondary leading-tight mb-6">
          It's time to reap{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            the benefits
          </span>
        </h2>

        <p className="text-xl sm:text-2xl font-semibold text-foreground/80 mb-10">
          Smarter strategies, better results and liberated HR teams.
        </p>

        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary to-accent mx-auto mb-10" />

        <div className="flex flex-col gap-5 text-base sm:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
          <p>
            Engage Health Group helps UK and global businesses unlock the full potential of employee
            benefits by providing expert advice, custom-built strategies, and hands-on support.
          </p>
          <p>
            Whether you're a two-person start-up or a global enterprise, we'll deliver tailored health
            and protection plans that make a real difference to your team — and your bottom line.
          </p>
          <p>
            With a dedicated account manager, you can also offload all the admin at no extra cost,
            allowing you to enjoy all the benefits without any of the drawbacks.
          </p>
        </div>

      </div>
    </section>
  );
}
