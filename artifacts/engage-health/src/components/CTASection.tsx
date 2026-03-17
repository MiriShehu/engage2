import { QuoteForm } from "./QuoteForm";

export function CTASection() {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* BG Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-accent/30 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-white max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to upgrade your employee benefits?
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Join 500+ UK businesses that trust Engage Health Group to deliver better coverage, remove admin, and lower premium costs.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Quick Form</h4>
                  <p className="text-white/60">Takes 60 seconds to tell us what you need.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Free Market Review</h4>
                  <p className="text-white/60">We analyse the whole market to find your perfect fit.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">No Obligation</h4>
                  <p className="text-white/60">Review our recommendations with zero pressure.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-in fade-in zoom-in-95 duration-700">
            <QuoteForm />
          </div>

        </div>
      </div>
    </section>
  );
}
