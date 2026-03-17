import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-in slide-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            The Problem with Traditional Benefits
          </h2>
          <p className="text-lg text-muted-foreground">
            Most businesses overpay for generic policies their team never uses. It shouldn't be this hard.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center relative">
          
          {/* The Problem */}
          <div className="flex flex-col gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-border/50 flex items-start gap-4 transform transition-transform hover:-translate-y-1">
              <XCircle className="w-6 h-6 text-destructive shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-foreground mb-1">Wasted Budget</h4>
                <p className="text-sm text-muted-foreground">Paying for generic plans with features your specific demographic doesn't care about.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-border/50 flex items-start gap-4 transform transition-transform hover:-translate-y-1">
              <XCircle className="w-6 h-6 text-destructive shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-foreground mb-1">Admin Nightmare</h4>
                <p className="text-sm text-muted-foreground">Hours lost managing renewals, adding/removing staff, and handling employee claims.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-border/50 flex items-start gap-4 transform transition-transform hover:-translate-y-1">
              <XCircle className="w-6 h-6 text-destructive shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-foreground mb-1">Poor Communication</h4>
                <p className="text-sm text-muted-foreground">Employees don't know what they're entitled to, leading to zero engagement.</p>
              </div>
            </div>
          </div>

          {/* Divider/Arrow */}
          <div className="hidden lg:flex flex-col items-center justify-center text-primary/30">
            <div className="w-px h-24 bg-gradient-to-b from-transparent to-primary/30"></div>
            <div className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center bg-white z-10">
               <ArrowRight className="w-5 h-5 text-primary" />
            </div>
            <div className="w-px h-24 bg-gradient-to-t from-transparent to-primary/30"></div>
          </div>

          <div className="flex lg:hidden justify-center text-primary/30 py-4">
            <ArrowRight className="w-8 h-8 text-primary rotate-90" />
          </div>

          {/* The Solution */}
          <div className="flex flex-col gap-4 relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] -z-10 border border-primary/10"></div>
            <div className="bg-white p-6 rounded-2xl shadow-xl shadow-primary/5 border border-primary/20 flex items-start gap-4 transform transition-transform hover:-translate-y-1">
              <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-foreground mb-1">Tailored Packages</h4>
                <p className="text-sm text-muted-foreground">Bespoke plans built around your team's exact needs, saving up to 20% on premiums.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl shadow-primary/5 border border-primary/20 flex items-start gap-4 transform transition-transform hover:-translate-y-1">
              <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-foreground mb-1">Zero Admin Burden</h4>
                <p className="text-sm text-muted-foreground">We handle the entire process—from initial setup to ongoing claims support.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl shadow-primary/5 border border-primary/20 flex items-start gap-4 transform transition-transform hover:-translate-y-1">
              <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-foreground mb-1">Engaged Teams</h4>
                <p className="text-sm text-muted-foreground">Clear communication and digital tools so your team actually values their benefits.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
